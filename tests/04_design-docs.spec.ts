import 'mocha';
import { Entity } from '../src/annotations/entity';
import { Id } from '../src/annotations/id';
import { MemoryPouchDB } from './pouchdb';
import { AdamantConnectionManager, createAdamantConnection } from '../src/connection-manager';
import { expect } from 'chai';
import { AdamantRepository } from '../src/repository';
import { DesignDoc } from '../src/annotations/design-doc';
import { View } from '../src/annotations/view';
import { Property } from '../src/annotations/property';
import { Filter } from '../src/annotations/filter';
import { ValidateDoc } from '../src/annotations/validate-doc';
import { createAngularInjector, createInjectionJsInjector, setInjectorFactory } from '../src/injector';

@Entity('test')
class TestEntity {
    @Id()
    id!: string;

    @Property()
    name?: string;

    @Property({ type: String })
    color?: 'red' | 'blue';

    @Property()
    changes?: number;
}

@Entity('test2')
class Test2Entity {
    @Id()
    id!: string;
}

@DesignDoc(TestEntity, 'test-ddoc')
class TestDesignDoc {
    @View()
    byId = (doc: any) => emit(doc.id);

    @View()
    byType = `function(doc) {
        emit(doc._id.replace(/^(.*)_(1|2).*$/, '$1'));
    }`;

    @View()
    groupByColor = {
        map: (doc: any) => {
            doc.color && emit(doc.color);
        },
        reduce: '_count'
    };

    @Filter()
    byEntity = (doc: any, req: any) => {
        const entity = req.query.entity;
        return doc._id.startsWith(`${entity}_1`) || doc._id.startsWith(`${entity}_2`);
    };

    @ValidateDoc()
    validate = (newDoc: any, _oldDoc: any) => {
        console.log('validate', newDoc);
        if (!newDoc.changes) {
            newDoc.changes = 0;
        }
        ++newDoc.changes;

        return newDoc;
    };
}

@DesignDoc(Test2Entity, 'test-ddoc2')
class TestDesignDoc2 {
    @View()
    simple = (doc: any) => emit(['simple', doc.id]);
}

for (const [name, factory] of new Map<string, Function>([
    ['@angular/core', createAngularInjector],
    ['injection-js', createInjectionJsInjector]
])) {
    describe(name, () => {
        beforeEach(() => {
            setInjectorFactory(factory);
        });
        describe('Design Docs', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<TestEntity>;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = createAdamantConnection(() => db);
                repository = connection.getRepository(TestEntity);

                await db.bulkDocs([
                    { _id: 'test_2_a', id: 'a', name: 'A', color: 'red' },
                    { _id: 'test_2_b', id: 'b', name: 'B', color: 'red' },
                    { _id: 'test_2_c', id: 'c', name: 'C', color: 'blue' },
                    { _id: 'misc_2_a', id: 'a' },
                    {
                        _id: '_design/test-ddoc2',
                        views: {
                            simple: { map: 'function (doc) { return emit(doc.id); }' }
                        }
                    }
                ]);
                await repository.persistDesignDoc(new TestDesignDoc());
            });

            afterEach(() => {
                return db.destroy();
            });

            it('it should reject invalid design doc class when persisting', async () => {
                await expect(repository.persistDesignDoc({})).to.eventually.rejectedWith(
                    'Missing metadata \'entity\' for design doc "Object"'
                );
                await expect(repository.persistDesignDoc(new TestDesignDoc2())).to.eventually.rejectedWith('Invalid design doc entity');
            });

            it('should create design doc', async () => {
                const { rows } = await db.allDocs({ include_docs: true });

                expect(rows)
                    .to.be.an('array')
                    .with.length(6);
                expect(rows[0].id).to.be.equal('_design/test-ddoc');
                expect(rows[0].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[1].id).to.be.equal('_design/test-ddoc2');
                expect(rows[1].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[2].id).to.be.equal('misc_2_a');
                expect(rows[2].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[3].id).to.be.equal('test_2_a');
                expect(rows[3].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[4].id).to.be.equal('test_2_b');
                expect(rows[4].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[5].id).to.be.equal('test_2_c');
                expect(rows[5].value.rev).to.match(/^1-[a-z0-9]{32}$/);
                expect(rows[0].doc).to.have.keys('_id', '_rev', 'views', 'filters', 'validate_doc_update');
                expect(rows[0].doc.views).to.have.keys('byId', 'byType', 'groupByColor');
                expect(rows[0].doc.filters).to.have.keys('byEntity');
                expect(rows[0].doc.validate_doc_update).to.be.a('string');
            });

            it('should not update design doc for no changes', async () => {
                await repository.persistDesignDoc(new TestDesignDoc());

                expect((await db.get('_design/test-ddoc'))._rev).to.match(/^1-[a-z0-9]{32}$/);
            });

            it('should upsert design doc', async () => {
                await connection.getRepository(Test2Entity).persistDesignDoc(new TestDesignDoc2());

                const doc = await db.get('_design/test-ddoc2');

                expect(doc._rev).to.match(/^2-[a-z0-9]{32}$/);
            });

            // PouchDB doesn't support validate_doc_update and plugin works incorrect
            xit('should call validate_doc_update on update', async () => {
                let e = await repository.read('a');

                expect(e.changes).to.be.null;

                await repository.update(e);

                e = await repository.read('a');

                expect(e.changes).to.be.equal(1);
            });

            it('should use filter for replication', async () => {
                let localDb = new MemoryPouchDB('local');

                await localDb.replicate.from(db, {
                    filter: 'test-ddoc/byEntity',
                    query_params: {
                        entity: 'test'
                    }
                });

                const { rows } = await localDb.allDocs({ include_docs: true });

                expect(rows)
                    .to.be.an('array')
                    .with.length(3);
                expect(rows[0].id).to.be.equal('test_2_a');
                expect(rows[1].id).to.be.equal('test_2_b');
                expect(rows[2].id).to.be.equal('test_2_c');
            });

            it('should return entities from view', async () => {
                const entities = await repository.view(TestDesignDoc, 'byType', { key: 'test' });

                expect(entities)
                    .to.be.an('array')
                    .with.length(3);
                expect(entities[0]).to.be.instanceOf(TestEntity);
            });

            it('should reject invalid design doc class for querying', async () => {
                await expect(repository.view(Function, 'name')).to.eventually.rejectedWith(
                    'Missing metadata \'entity\' for design doc "Function"'
                );
                await expect(repository.view(TestDesignDoc2, 'simple')).to.eventually.rejectedWith('Invalid design doc entity');
                await expect(repository.view(TestDesignDoc, 'invalid' as any)).to.eventually.rejectedWith('Unknown view "invalid"');
            });

            it('should return raw view', async () => {
                const result = await repository.rawView('test-ddoc/groupByColor', { reduce: true, group: true });

                expect(result).to.be.eql({ rows: [{ value: 1, key: 'blue' }, { value: 2, key: 'red' }] });
            });
        });
    });
}
