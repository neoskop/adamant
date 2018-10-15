import { expect, use } from 'chai';
import 'mocha';
import { SinonSpy, spy, stub } from 'sinon';
import {
    adamantIdFactory,
    BelongsTo,
    Ctor,
    Entity,
    EntityMetadataCollection,
    HasMany,
    HasManyMap,
    HydratorImpl,
    Id,
    IdStrategy,
    Inline,
    InlineEntity,
    markIdRev,
    populate,
    Property
} from '.';

use(require('chai-as-promised'));

@Entity('simple-entity')
export class SimpleEntity {
    @Id()
    id!: string;

    @Property()
    optional?: string;

    @Property({ required: true })
    required!: string;
}

@Entity('belongs-to')
class BelongsToEntity {
    @Id()
    id!: string;
}

@Entity('has-many')
class HasManyEntity {
    @Id()
    id!: string;
}

@Entity('has-many-map')
class HasManyMapEntity {
    @Id()
    id!: string;
}

@InlineEntity()
class InlineEntityImpl {
    @Property()
    key?: string;
}

@Entity('uuid')
class UuidEntity {
    @Id({ strategy: IdStrategy.Uuid })
    id?: string;
}

@Entity('complex-entity')
export class ComplexEntity {
    @Id()
    id!: string;

    @BelongsTo()
    belongsTo?: BelongsToEntity;

    @HasMany(HasManyEntity)
    hasMany?: HasManyEntity[];

    @HasManyMap(HasManyMapEntity)
    hasManyMap?: { [key: string]: HasManyMapEntity };

    @Inline()
    inline?: InlineEntityImpl;
}

@Entity('default')
export class DefaultEntity {
    @Id()
    id!: string;

    @Property({ default: 'defaultValue' })
    def?: string;
}

describe('HydratorImpl', () => {
    let simpleHydrator: HydratorImpl<SimpleEntity>;
    let complexHydrator: HydratorImpl<ComplexEntity>;
    let uuidHydrator: HydratorImpl<UuidEntity>;
    let defaultHydrator: HydratorImpl<DefaultEntity>;
    let getRepositorySpy: SinonSpy;
    let repositorySpyMap: Map<Ctor<any>, any>;

    beforeEach(() => {
        repositorySpyMap = new Map();
        const conn = {
            getMetadata(entity: Ctor<any>) {
                return EntityMetadataCollection.create(entity);
            },
            getRepository(entity: Ctor<any>): any {
                if (!repositorySpyMap.has(entity)) {
                    repositorySpyMap.set(entity, {
                        _read: stub().resolves(populate(new BelongsToEntity(), { id: 'a' })),
                        _readAll: stub().resolves(
                            entity === HasManyEntity
                                ? [
                                      markIdRev(populate(new HasManyEntity(), { id: 'a' }), { id: 'has-many_2_a', rev: '1-123456' }),
                                      markIdRev(populate(new HasManyEntity(), { id: 'b' }), { id: 'has-many_2_b', rev: '1-123456' })
                                  ]
                                : [
                                      markIdRev(populate(new HasManyMapEntity(), { id: 'a' }), { id: 'has-many-map_2_a', rev: '1-123456' }),
                                      markIdRev(populate(new HasManyMapEntity(), { id: 'b' }), { id: 'has-many-map_2_b', rev: '1-123456' })
                                  ]
                        ),
                        hydrator: {
                            hydrate: stub().resolves(populate(new InlineEntityImpl(), { key: 'foobar' })),
                            dehydrate: stub().returns({ key: 'foobar' })
                        },
                        build(props = {}) {
                            return populate(Object.create(entity.prototype), props);
                        }
                    });
                }

                return repositorySpyMap.get(entity)!;
            }
        };
        getRepositorySpy = spy(conn, 'getRepository');
        simpleHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(SimpleEntity), conn as any);
        complexHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(ComplexEntity), conn as any);
        uuidHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(UuidEntity), conn as any);
        defaultHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(DefaultEntity), conn as any);
    });

    describe('hydrate', () => {
        it('should return a promise', () => {
            expect(
                simpleHydrator.hydrate(Object.create(SimpleEntity.prototype), { _id: 'simple_2_id', id: 'id', required: 'required' })
            ).to.be.instanceOf(Promise);
        });

        it('should hydrate properties', async () => {
            expect(
                await simpleHydrator.hydrate(Object.create(SimpleEntity.prototype), { _id: 'simple_2_id', id: 'id', required: 'required' })
            ).to.be.eql(populate(new SimpleEntity(), { id: 'id', optional: null!, required: 'required' }));
        });

        it('should hydrate relations', async () => {
            const res = await complexHydrator.hydrate(Object.create(ComplexEntity.prototype), {
                _id: 'complex-entity_2_a',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: ['has-many_2_a', 'has-many_2_b'],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' }
            } as any);

            expect(getRepositorySpy).to.have.been.callCount(4);
            expect(repositorySpyMap.get(BelongsToEntity)._read).to.have.been.calledOnceWith('belongs-to_2_a');
            expect(repositorySpyMap.get(BelongsToEntity)._readAll).not.to.have.been.called;
            expect(repositorySpyMap.get(BelongsToEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyEntity)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyEntity)._readAll).to.have.been.calledOnceWith({
                keys: ['has-many_2_a', 'has-many_2_b'],
                include_docs: true
            });
            expect(repositorySpyMap.get(HasManyEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyMapEntity)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyMapEntity)._readAll).to.have.been.calledOnceWith({
                keys: ['has-many-map_2_a', 'has-many-map_2_b'],
                include_docs: true
            });
            expect(repositorySpyMap.get(HasManyMapEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl)._readAll).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl).hydrator.hydrate).to.have.been.calledOnce;
            expect(res).to.be.instanceOf(ComplexEntity);
            expect(res).to.be.eql(
                populate(new ComplexEntity(), {
                    id: 'id',
                    belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                    hasMany: [populate(new HasManyEntity(), { id: 'a' }), populate(new HasManyEntity(), { id: 'b' })],
                    hasManyMap: { a: populate(new HasManyMapEntity(), { id: 'a' }), b: populate(new HasManyMapEntity(), { id: 'b' }) },
                    inline: populate(new InlineEntityImpl(), { key: 'foobar' })
                })
            );
        });
    });

    describe('dehydrate', () => {
        it('should dehydrate properties', () => {
            expect(simpleHydrator.dehydrate(populate(new SimpleEntity(), { id: 'id', required: 'required' }))).to.be.eql({
                _id: 'simple-entity_2_id',
                id: 'id',
                required: 'required'
            });
        });

        it('should include _rev when desired', () => {
            const entity = populate(new SimpleEntity(), { id: 'id', required: 'required' });
            markIdRev(entity, { id: 'simple-entity_2_id', rev: '1-123456' });
            expect(simpleHydrator.dehydrate(entity, { includeRev: true })).to.be.eql({
                _id: 'simple-entity_2_id',
                _rev: '1-123456',
                id: 'id',
                required: 'required'
            });
        });

        it('should dehydrate relations', () => {
            const entity = populate(new ComplexEntity(), {
                id: 'id',
                belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                hasMany: [populate(new HasManyEntity(), { id: 'a' }), populate(new HasManyEntity(), { id: 'b' })],
                hasManyMap: { a: populate(new HasManyMapEntity(), { id: 'a' }), b: populate(new HasManyMapEntity(), { id: 'b' }) },
                inline: populate(new InlineEntityImpl(), { key: 'foobar' })
            });

            expect(complexHydrator.dehydrate(entity)).to.be.eql({
                _id: 'complex-entity_2_id',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: ['has-many_2_a', 'has-many_2_b'],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' }
            });
        });

        it('should create uuid if undefined and write it in entity', () => {
            const entity = new UuidEntity();
            const doc = uuidHydrator.dehydrate(entity);

            expect(doc).to.have.keys('_id', 'id');
            expect(doc.id)
                .to.be.a('string')
                .and.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            expect(doc._id).to.be.equal(`uuid_2_${doc.id}`);
            expect(entity.id).to.be.equal(doc.id);
        });

        it('should keep uuid if existing', () => {
            const entity = populate(new UuidEntity(), { id: '2882cd99-db2-ef3-a29-29fc49912abd64b' });
            const doc = uuidHydrator.dehydrate(entity);

            expect(doc).to.have.keys('_id', 'id');
            expect(doc.id).to.be.equal('2882cd99-db2-ef3-a29-29fc49912abd64b');
            expect(doc._id).to.be.equal(`uuid_2_${doc.id}`);
        });

        it('should use default value and write it back to entity', () => {
            const entity = new DefaultEntity();
            entity.id = 'id';
            const doc = defaultHydrator.dehydrate(entity);

            expect(doc).to.be.eql({ _id: 'default_2_id', id: 'id', def: 'defaultValue' });
            expect(entity.def).to.be.equal(doc.def);
        });
    });
});
