import { expect } from 'chai';
import 'mocha';
import { SinonSpy, spy } from 'sinon';
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
    setInjectorFactory
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

for (const [name, factory] of new Map<string, Function>([
    ['@angular/core', createAngularInjector],
    ['injection-js', createInjectionJsInjector]
])) {
    describe(name, () => {
        beforeEach(() => {
            setInjectorFactory(factory);
        });
        describe('Relations', () => {
            let db: PouchDB.Database<any>;
            let connection: AdamantConnectionManager;
            let repository: AdamantRepository<BaseEntity>;
            let allDocsSpy: SinonSpy;

            beforeEach(async () => {
                db = new MemoryPouchDB('test');
                connection = createAdamantConnection(() => db);
                repository = connection.getRepository(BaseEntity);
                allDocsSpy = spy(db, 'allDocs');

                await db.bulkDocs([{ _id: 'rel_2_a', id: 'a' }, { _id: 'rel_2_b', id: 'b' }, { _id: 'rel_2_c', id: 'c' }]);
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

                expect(e.belongsTo).to.be.instanceOf(RelEntity);
                expect(e.belongsTo!.id).to.be.equal('a');

                expect(e.hasMany)
                    .to.be.an('array')
                    .with.length(2);
                expect(e.hasMany![0]).to.be.instanceOf(RelEntity);
                expect(e.hasMany![0].id).to.be.equal('a');
                expect(e.hasMany![1]).to.be.instanceOf(RelEntity);
                expect(e.hasMany![1].id).to.be.equal('b');

                expect(e.hasManyMap)
                    .to.be.an('object')
                    .with.keys('b', 'c');
                expect(e.hasManyMap!.b).to.be.instanceOf(RelEntity);
                expect(e.hasManyMap!.b.id).to.be.equal('b');
                expect(e.hasManyMap!.c).to.be.instanceOf(RelEntity);
                expect(e.hasManyMap!.c.id).to.be.equal('c');
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

                expect(res)
                    .to.be.an('array')
                    .with.length(1);
                expect(res[0].joins)
                    .to.be.an('array')
                    .with.length(2);
                expect(res[0].joins![0].a).to.be.equal(res[0]);
                expect(res[0].joins![0].b).to.be.instanceOf(EntityB);
                expect(res[0].joins![0].b!.joins![0]).to.be.equal(res[0].joins![0]);
                expect(res[0].joins![1].a).to.be.equal(res[0]);
                expect(res[0].joins![1].b).to.be.instanceOf(EntityB);
                expect(res[0].joins![1].b!.joins![0]).to.be.equal(res[0].joins![1]);

                expect(allDocsSpy).to.have.callCount(3);
            });
        });
    });
}
