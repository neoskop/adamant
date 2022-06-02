import {
    AdamantConnectionManager,
    AdamantRepository,
    BelongsTo,
    createAdamantConnection,
    createAngularInjector,
    createInjectionJsInjector,
    Entity,
    forwardRef,
    HasMany,
    HasManyMap,
    Id,
    InjectorFactory,
    setInjectorFactory,
} from '../src';
import { MemoryPouchDB } from './pouchdb';

@Entity('rel')
class RelEntity {
    @Id()
    id!: string;
}

@Entity('base')
class BaseEntity {
    @Id()
    id!: string;

    @BelongsTo()
    belongsTo?: RelEntity;

    @HasMany(RelEntity)
    hasMany?: RelEntity[];

    @HasManyMap(RelEntity)
    hasManyMap?: { [key: string]: RelEntity };
}

@Entity('a')
class EntityA {
    @Id()
    id!: string;

    @HasMany(forwardRef(() => JoinAB))
    joins?: JoinAB[];
}

@Entity('b')
class EntityB {
    @Id()
    id!: string;

    @HasMany(forwardRef(() => JoinAB))
    joins?: JoinAB[];
}

@Entity('ab')
class JoinAB {
    @Id()
    get id(): string {
        return `${this.a!.id}-${this.b!.id}`;
    }

    @BelongsTo()
    a?: EntityA;

    @BelongsTo()
    b?: EntityB;
}

for (const [name, factory] of new Map<string, () => Promise<InjectorFactory>>([
    ['@angular/core', async () => createAngularInjector.bind(null, (await new Function("return import('@angular/core')")()).Injector)],
    ['injection-js', async () => createInjectionJsInjector],
])) {
    describe(name, () => {
        beforeEach(async () => {
            setInjectorFactory(await factory());
        });
        describe('Relations', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<BaseEntity>;
            let allDocsSpy: jest.SpyInstance;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = await createAdamantConnection(() => db);
                repository = connection.getRepository(BaseEntity);
                allDocsSpy = jest.spyOn(db, 'allDocs');

                await db.bulkDocs([
                    { _id: 'rel_2_a', id: 'a' },
                    { _id: 'rel_2_b', id: 'b' },
                    { _id: 'rel_2_c', id: 'c' },
                ]);
            });

            afterEach(() => {
                return db.destroy();
            });

            it('should write and read entity with relations', async () => {
                const [a, b, c] = await connection.getRepository(RelEntity).readAll();

                const entity = new BaseEntity();
                entity.id = 'a';
                entity.belongsTo = a;
                entity.hasMany = [a, b];
                entity.hasManyMap = { b, c };

                await repository.create(entity);

                const e = await repository.read('a');

                expect(e.belongsTo).toBeInstanceOf(RelEntity);
                expect(e.belongsTo!.id).toEqual('a');

                expect(e.hasMany).toBeInstanceOf(Array);
                expect(e.hasMany!.length).toEqual(2);
                expect(e.hasMany![0]).toBeInstanceOf(RelEntity);
                expect(e.hasMany![0].id).toEqual('a');
                expect(e.hasMany![1]).toBeInstanceOf(RelEntity);
                expect(e.hasMany![1].id).toEqual('b');

                expect(e.hasManyMap).toHaveProperty('b');
                expect(e.hasManyMap).toHaveProperty('c');
                expect(e.hasManyMap!.b).toBeInstanceOf(RelEntity);
                expect(e.hasManyMap!.b.id).toEqual('b');
                expect(e.hasManyMap!.c).toBeInstanceOf(RelEntity);
                expect(e.hasManyMap!.c.id).toEqual('c');
            });

            it('should write and read entity with circular relations', async () => {
                const a = new EntityA();
                a.id = 'a';

                const b = new EntityB();
                b.id = 'b';

                const c = new EntityB();
                c.id = 'c';

                const join1 = new JoinAB();
                join1.a = a;
                join1.b = b;

                const join2 = new JoinAB();
                join2.a = a;
                join2.b = c;

                a.joins = [join1, join2];
                b.joins = [join1];
                c.joins = [join2];

                await connection.getRepository(EntityA).create(a);
                await connection.getRepository(EntityB).create(b);
                await connection.getRepository(EntityB).create(c);
                await connection.getRepository(JoinAB).create(join1);
                await connection.getRepository(JoinAB).create(join2);

                const res = await connection.getRepository(EntityA).readAll();

                expect(res).toBeInstanceOf(Array);
                expect(res.length).toEqual(1);
                expect(res[0].joins).toBeInstanceOf(Array);
                expect(res[0].joins!.length).toEqual(2);
                expect(res[0].joins![0].a).toEqual(res[0]);
                expect(res[0].joins![0].b).toBeInstanceOf(EntityB);
                expect(res[0].joins![0].b!.joins![0]).toEqual(res[0].joins![0]);
                expect(res[0].joins![1].a).toEqual(res[0]);
                expect(res[0].joins![1].b).toBeInstanceOf(EntityB);
                expect(res[0].joins![1].b!.joins![0]).toEqual(res[0].joins![1]);

                expect(allDocsSpy).toHaveBeenCalledTimes(3);
            });
        });
    });
}
