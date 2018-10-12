import 'mocha';
import { Entity } from '../src/annotations/entity';
import { Id } from '../src/annotations/id';
import { Property } from '../src/annotations/property';
import { MemoryPouchDB } from './pouchdb';
import { AdamantConnectionManager, createAdamantConnection } from '../src/connection-manager';
import { expect } from 'chai';
import { AdamantRepository } from '../src/repository';
import { createAngularInjector, createInjectionJsInjector, setInjectorFactory } from '../src/injector';

@Entity('test')
class TestEntity {
    @Id()
    id!: string;

    @Property()
    property?: string;
}

for (const [name, factory] of new Map<string, Function>([
    ['@angular/core', createAngularInjector],
    ['injection-js', createInjectionJsInjector]
])) {
    describe(name, () => {
        beforeEach(() => {
            setInjectorFactory(factory);
        });
        describe('Bulk', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<TestEntity>;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = createAdamantConnection(() => db);
                repository = connection.getRepository(TestEntity);

                await db.bulkDocs([
                    { _id: 'test_2_a', id: 'a', property: 'propA' },
                    { _id: 'test_2_b', id: 'b', property: 'propB' },
                    { _id: 'test_2_c', id: 'c', property: null }
                ]);
            });

            afterEach(() => {
                return db.destroy();
            });

            it('should create in bulk', async () => {
                const d = repository.build({ id: 'd' });
                const e = repository.build({ id: 'e' });

                await repository.bulk.create([d, e]);

                expect(d._id).to.be.equal('test_2_d');
                expect(d._rev).to.match(/^1-[a-z0-9]{32}$/);

                expect(e._id).to.be.equal('test_2_e');
                expect(e._rev).to.match(/^1-[a-z0-9]{32}$/);
            });

            it('should update in bulk in bulk', async () => {
                const [a, b] = await repository.readAll(['a', 'b']);
                a.property = 'A';
                b.property = 'B';

                await repository.bulk.update([a, b]);

                expect(a._id).to.be.equal('test_2_a');
                expect(a._rev).to.match(/^2-[a-z0-9]{32}$/);

                expect(b._id).to.be.equal('test_2_b');
                expect(b._rev).to.match(/^2-[a-z0-9]{32}$/);

                const entities = await repository.readAll();
                expect(entities[0]._rev).to.match(/^2-[a-z0-9]{32}$/);
                expect(entities[1]._rev).to.match(/^2-[a-z0-9]{32}$/);
                expect(entities[2]._rev).to.match(/^1-[a-z0-9]{32}$/);
            });

            it('should delete in bulk in bulk', async () => {
                const [a, b] = await repository.readAll(['a', 'b']);

                await repository.bulk.delete([a, b]);

                expect(a._id).to.be.equal('test_2_a');
                expect(a._rev).to.match(/^2-[a-z0-9]{32}$/);
                expect((a as any)._deleted).to.be.true;

                expect(b._id).to.be.equal('test_2_b');
                expect(b._rev).to.match(/^2-[a-z0-9]{32}$/);
                expect((b as any)._deleted).to.be.true;

                const entities = await repository.readAll();
                expect(entities).to.have.length(1);
                expect(entities[0]._rev).to.match(/^1-[a-z0-9]{32}$/);
            });
        });
    });
}
