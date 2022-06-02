import {
    AdamantConnectionManager,
    AdamantRepository,
    createAdamantConnection,
    createAngularInjector,
    createInjectionJsInjector,
    Entity,
    Id,
    InjectorFactory,
    // ngCore,
    Property,
    setInjectorFactory,
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

        describe('Simple CRUD', () => {
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
                    { _id: 'test_2_c', id: 'c', property: null },
                ]);
            });

            afterEach(() => {
                return db.destroy();
            });

            it('should read single entity', async () => {
                const entity = await repository.read('b');

                expect(entity).toBeInstanceOf(TestEntity);
                expect(entity.id).toEqual('b');
                expect(entity.property).toEqual('propB');
            });

            it('should throw on missing entity', async () => {
                await expect(repository.read('z')).rejects.toEqual({
                    id: 'test_2_z',
                    message: 'missing',
                    name: 'not_found',
                    reason: 'missing',
                    status: 404,
                });
            });

            it('should cache open connections', () => {
                expect(connection.getOpenConnections()).toBeInstanceOf(Array);
                expect(connection.getOpenConnections().length).toEqual(1);
            });

            it('should clear cached connections', () => {
                connection.clearConnections();
                expect(connection.getOpenConnections()).toBeInstanceOf(Array);
                expect(connection.getOpenConnections().length).toEqual(0);
            });

            it('should read all entities', async () => {
                const entities = await repository.readAll();

                expect(entities.length).toEqual(3);
                expect(entities[0].id).toEqual('a');
                expect(entities[1].id).toEqual('b');
                expect(entities[2].id).toEqual('c');
            });

            it('should read many entities', async () => {
                const entities = await repository.readAll(['c', 'b']);

                expect(entities.length).toEqual(2);
                expect(entities[0].id).toEqual('b');
                expect(entities[1].id).toEqual('c');
            });

            it('should create an entity', async () => {
                const entity = repository.build({ id: 'd' });

                await repository.create(entity);

                expect(entity._id).toEqual('test_2_d');
                expect(entity._rev).toMatch(/^1-[a-z0-9]{32}$/);
            });

            it('should throw on duplicate id', async () => {
                const entity = new TestEntity();
                entity.id = 'c';

                return expect(repository.create(entity)).rejects.toBeTruthy();
            });

            it('should update an entity', async () => {
                const entity = await repository.read('c');
                entity.property = 'propC';

                await repository.update(entity);

                expect(entity._id).toEqual('test_2_c');
                expect(entity._rev).toMatch(/^2-[a-z0-9]{32}$/);

                expect((await repository.read('c')).property).toEqual('propC');
            });

            it('should update an entity even without changes', async () => {
                const entity = await repository.read('c');

                await repository.update(entity);

                expect(entity._id).toEqual('test_2_c');
                expect(entity._rev).toMatch(/^2-[a-z0-9]{32}$/);

                expect((await repository.read('c')).property).toBeNull();
            });

            it('should upsert an entity', async () => {
                const entity = await repository.read('c');
                entity.property = 'propC';

                await repository.upsert(entity);

                expect(entity._id).toEqual('test_2_c');
                expect(entity._rev).toMatch(/^2-[a-z0-9]{32}$/);

                expect((await repository.read('c')).property).toEqual('propC');
            });

            it('should not upsert an entity without changes', async () => {
                const entity = await repository.read('c');

                await repository.upsert(entity);

                expect(entity._id).toEqual('test_2_c');
                expect(entity._rev).toMatch(/^1-[a-z0-9]{32}$/);

                expect((await repository.read('c')).property).toBeNull();
            });

            it('should delete an entity', async () => {
                const entity = await repository.read('c');

                await repository.delete(entity);

                expect(entity._id).toEqual('test_2_c');
                expect((entity as any)._deleted).toBeTruthy();
                expect(entity._rev).toMatch(/^2-[a-z0-9]{32}$/);

                expect(repository.read('c')).rejects.toEqual({
                    id: 'test_2_c',
                    message: 'missing',
                    name: 'not_found',
                    reason: 'missing',
                    status: 404,
                });
            });

            it('should read with query', async () => {
                const entities = await repository.query().selector('id', { $gte: 'b' }).limit(1).resolve();

                expect(entities.length).toEqual(1);
                expect(entities[0].id).toEqual('b');
            });
        });
    });
}
