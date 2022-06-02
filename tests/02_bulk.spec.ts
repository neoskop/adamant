import {
    AdamantConnectionManager,
    AdamantRepository,
    createAdamantConnection,
    createAngularInjector,
    createInjectionJsInjector,
    Entity,
    Id,
    InjectorFactory,
    Property,
    setInjectorFactory
} from '../src';
import { MemoryPouchDB } from './pouchdb';

@Entity('test')
class TestEntity {
    @Id()
    id!: string;

    @Property()
    property?: string;
}

for (const [name, factory] of new Map<string, () => Promise<InjectorFactory>>([
    ['@angular/core', async () => createAngularInjector.bind(null, (await new Function("return import('@angular/core')")()).Injector)],
    ['injection-js', async () => createInjectionJsInjector],
])) {
    describe(name, () => {
        beforeEach(async () => {
            setInjectorFactory(await factory());
        });
        describe('Bulk', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<TestEntity>;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = await createAdamantConnection(() => db);
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

                expect(d._id).toEqual('test_2_d');
                expect(d._rev).toMatch(/^1-[a-z0-9]{32}$/);

                expect(e._id).toEqual('test_2_e');
                expect(e._rev).toMatch(/^1-[a-z0-9]{32}$/);
            });

            it('should update in bulk in bulk', async () => {
                const [a, b] = await repository.readAll(['a', 'b']);
                a.property = 'A';
                b.property = 'B';

                await repository.bulk.update([a, b]);

                expect(a._id).toEqual('test_2_a');
                expect(a._rev).toMatch(/^2-[a-z0-9]{32}$/);

                expect(b._id).toEqual('test_2_b');
                expect(b._rev).toMatch(/^2-[a-z0-9]{32}$/);

                const entities = await repository.readAll();
                expect(entities[0]._rev).toMatch(/^2-[a-z0-9]{32}$/);
                expect(entities[1]._rev).toMatch(/^2-[a-z0-9]{32}$/);
                expect(entities[2]._rev).toMatch(/^1-[a-z0-9]{32}$/);
            });

            it('should delete in bulk in bulk', async () => {
                const [a, b] = await repository.readAll(['a', 'b']);

                await repository.bulk.delete([a, b]);

                expect(a._id).toEqual('test_2_a');
                expect(a._rev).toMatch(/^2-[a-z0-9]{32}$/);
                expect((a as any)._deleted).toBeTruthy();

                expect(b._id).toEqual('test_2_b');
                expect(b._rev).toMatch(/^2-[a-z0-9]{32}$/);
                expect((b as any)._deleted).toBeTruthy();

                const entities = await repository.readAll();
                expect(entities.length).toEqual(1);
                expect(entities[0]._rev).toMatch(/^1-[a-z0-9]{32}$/);
            });
        });
    });
}
