import {
    AdamantConnectionManager,
    AdamantRepository,
    createAdamantConnection,
    createAngularInjector,
    createInjectionJsInjector,
    DesignDoc,
    Entity,
    Filter,
    Id,
    InjectorFactory,
    Property,
    setInjectorFactory,
    ValidateDoc,
    View,
} from '../src';
import { MemoryPouchDB } from './pouchdb';

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
        reduce: '_count',
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

for (const [name, factory] of new Map<string, () => Promise<InjectorFactory>>([
    ['@angular/core', async () => createAngularInjector.bind(null, (await new Function("return import('@angular/core')")()).Injector)],
    ['injection-js', async () => createInjectionJsInjector],
])) {
    describe(name, () => {
        beforeEach(async () => {
            setInjectorFactory(await factory());
        });
        describe('Design Docs', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<TestEntity>;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = await createAdamantConnection(() => db);
                repository = connection.getRepository(TestEntity);

                await db.bulkDocs([
                    { _id: 'test_2_a', id: 'a', name: 'A', color: 'red' },
                    { _id: 'test_2_b', id: 'b', name: 'B', color: 'red' },
                    { _id: 'test_2_c', id: 'c', name: 'C', color: 'blue' },
                    { _id: 'misc_2_a', id: 'a' },
                    {
                        _id: '_design/test-ddoc2',
                        views: {
                            simple: { map: 'function (doc) { return emit(doc.id); }' },
                        },
                    },
                ]);
                await repository.persistDesignDoc(new TestDesignDoc());
            });

            afterEach(() => {
                return db.destroy();
            });

            it('it should reject invalid design doc class when persisting', async () => {
                await expect(repository.persistDesignDoc({})).rejects.toEqual(
                    new Error('Missing metadata \'entity\' for design doc "Object"')
                );
                await expect(repository.persistDesignDoc(new TestDesignDoc2())).rejects.toEqual(new Error('Invalid design doc entity'));
            });

            it('should create design doc', async () => {
                const { rows } = await db.allDocs({ include_docs: true });

                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toEqual(6);
                expect(rows[0].id).toEqual('_design/test-ddoc');
                expect(rows[0].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[1].id).toEqual('_design/test-ddoc2');
                expect(rows[1].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[2].id).toEqual('misc_2_a');
                expect(rows[2].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[3].id).toEqual('test_2_a');
                expect(rows[3].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[4].id).toEqual('test_2_b');
                expect(rows[4].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[5].id).toEqual('test_2_c');
                expect(rows[5].value.rev).toMatch(/^1-[a-z0-9]{32}$/);
                expect(rows[0].doc).toHaveProperty('_id');
                expect(rows[0].doc).toHaveProperty('_rev');
                expect(rows[0].doc).toHaveProperty('views');
                expect(rows[0].doc).toHaveProperty('filters');
                expect(rows[0].doc).toHaveProperty('validate_doc_update');
                expect(rows[0].doc.views).toHaveProperty('byId');
                expect(rows[0].doc.views).toHaveProperty('byType');
                expect(rows[0].doc.views).toHaveProperty('groupByColor');
                expect(rows[0].doc.filters).toHaveProperty('byEntity');
                expect(typeof rows[0].doc.validate_doc_update).toBe('string');
            });

            it('should not update design doc for no changes', async () => {
                await repository.persistDesignDoc(new TestDesignDoc());

                expect((await db.get('_design/test-ddoc'))._rev).toMatch(/^1-[a-z0-9]{32}$/);
            });

            it('should upsert design doc', async () => {
                await connection.getRepository(Test2Entity).persistDesignDoc(new TestDesignDoc2());

                const doc = await db.get('_design/test-ddoc2');

                expect(doc._rev).toMatch(/^2-[a-z0-9]{32}$/);
            });

            // PouchDB doesn't support validate_doc_update and plugin works incorrect
            xit('should call validate_doc_update on update', async () => {
                let e = await repository.read('a');

                expect(e.changes).toBeNull();

                await repository.update(e);

                e = await repository.read('a');

                expect(e.changes).toEqual(1);
            });

            it('should use filter for replication', async () => {
                let localDb = new MemoryPouchDB('local');

                await localDb.replicate.from(db, {
                    filter: 'test-ddoc/byEntity',
                    query_params: {
                        entity: 'test',
                    },
                });

                const { rows } = await localDb.allDocs({ include_docs: true });

                expect(rows).toBeInstanceOf(Array);
                expect(rows.length).toBe(3);
                expect(rows[0].id).toEqual('test_2_a');
                expect(rows[1].id).toEqual('test_2_b');
                expect(rows[2].id).toEqual('test_2_c');
            });

            it('should return entities from view', async () => {
                const entities = await repository.view(TestDesignDoc, 'byType', { key: 'test' });

                expect(entities).toBeInstanceOf(Array);
                expect(entities.length).toBe(3);
                expect(entities[0]).toBeInstanceOf(TestEntity);
            });

            it('should reject invalid design doc class for querying', async () => {
                await expect(repository.view(Function, 'name')).rejects.toEqual(
                    new Error('Missing metadata \'entity\' for design doc "Function"')
                );
                await expect(repository.view(TestDesignDoc2, 'simple')).rejects.toEqual(new Error('Invalid design doc entity'));
                await expect(repository.view(TestDesignDoc, 'invalid' as any)).rejects.toEqual(new Error('Unknown view "invalid"'));
            });

            it('should return raw view', async () => {
                const result = await repository.rawView('test-ddoc/groupByColor', { reduce: true, group: true });

                expect(result).toEqual({
                    rows: [
                        { value: 1, key: 'blue' },
                        { value: 2, key: 'red' },
                    ],
                });
            });
        });
    });
}
