import {
    adamantIdFactory,
    BelongsTo,
    Ctor,
    Entity,
    EntityMetadataCollection,
    forwardRef,
    HasMany,
    HasManyMap,
    HydratorImpl,
    Id,
    IdStrategy,
    Inline,
    InlineEntity,
    markIdRev,
    populate,
    Property,
} from '.';

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

    @BelongsTo({ type: forwardRef(() => ComplexEntity) })
    complex?: ComplexEntity;
}

@Entity('has-many-map')
class HasManyMapEntity {
    @Id()
    id!: string;

    @BelongsTo({ type: forwardRef(() => ComplexEntity) })
    complex?: ComplexEntity;
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

    @HasMany(HasManyEntity, { default: [] })
    hasManyDefault?: HasManyEntity[];

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
    let getRepositorySpy: jest.SpyInstance;
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
                        _read: jest.fn().mockResolvedValue(populate(new BelongsToEntity(), { id: 'a' })),
                        _readAll: jest.fn().mockResolvedValue(
                            entity === HasManyEntity
                                ? [
                                      markIdRev(populate(new HasManyEntity(), { id: 'a' }), { id: 'has-many_2_a', rev: '1-123456' }),
                                      markIdRev(populate(new HasManyEntity(), { id: 'b' }), { id: 'has-many_2_b', rev: '1-123456' }),
                                  ]
                                : [
                                      markIdRev(populate(new HasManyMapEntity(), { id: 'a' }), {
                                          id: 'has-many-map_2_a',
                                          rev: '1-123456',
                                      }),
                                      markIdRev(populate(new HasManyMapEntity(), { id: 'b' }), {
                                          id: 'has-many-map_2_b',
                                          rev: '1-123456',
                                      }),
                                  ]
                        ),
                        hydrator: {
                            hydrate: jest.fn().mockResolvedValue(populate(new InlineEntityImpl(), { key: 'foobar' })),
                            dehydrate: jest.fn().mockReturnValue({ key: 'foobar' }),
                        },
                        build(props = {}) {
                            return populate(Object.create(entity.prototype), props);
                        },
                    });
                }

                return repositorySpyMap.get(entity)!;
            },
        };
        getRepositorySpy = jest.spyOn(conn, 'getRepository');
        simpleHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(SimpleEntity), conn as any);
        complexHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(ComplexEntity), conn as any);
        uuidHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(UuidEntity), conn as any);
        defaultHydrator = new HydratorImpl(adamantIdFactory(), EntityMetadataCollection.create(DefaultEntity), conn as any);
    });

    describe('hydrate', () => {
        it('should return a promise', () => {
            expect(
                simpleHydrator.hydrate(Object.create(SimpleEntity.prototype), { _id: 'simple_2_id', id: 'id', required: 'required' })
            ).toBeInstanceOf(Promise);
        });

        it('should hydrate properties', async () => {
            expect(
                await simpleHydrator.hydrate(Object.create(SimpleEntity.prototype), { _id: 'simple_2_id', id: 'id', required: 'required' })
            ).toEqual(populate(new SimpleEntity(), { id: 'id', optional: null!, required: 'required' }));
        });

        it('should hydrate relations', async () => {
            const res = await complexHydrator.hydrate(Object.create(ComplexEntity.prototype), {
                _id: 'complex-entity_2_a',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: ['has-many_2_a', 'has-many_2_b'],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' },
            } as any);

            expect(getRepositorySpy).toHaveBeenCalledTimes(4);
            expect(repositorySpyMap.get(BelongsToEntity)._read).toHaveBeenCalledWith('belongs-to_2_a', {
                circularCache: {
                    'complex-entity_2_a': {
                        belongsTo: { id: 'a' },
                        hasMany: [{ id: 'a' }, { id: 'b' }],
                        hasManyDefault: [],
                        hasManyMap: { a: { id: 'a' }, b: { id: 'b' } },
                        id: 'id',
                        inline: { key: 'foobar' },
                    },
                },
                depth: Infinity,
            });
            expect(repositorySpyMap.get(BelongsToEntity)._readAll).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(BelongsToEntity).hydrator.hydrate).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(HasManyEntity)._read).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(HasManyEntity)._readAll).toHaveBeenCalledWith(
                {
                    keys: ['has-many_2_a', 'has-many_2_b'],
                    include_docs: true,
                },
                {
                    circularCache: {
                        'complex-entity_2_a': {
                            belongsTo: { id: 'a' },
                            hasMany: [{ id: 'a' }, { id: 'b' }],
                            hasManyDefault: [],
                            hasManyMap: { a: { id: 'a' }, b: { id: 'b' } },
                            id: 'id',
                            inline: { key: 'foobar' },
                        },
                    },
                    depth: Infinity,
                }
            );
            expect(repositorySpyMap.get(HasManyEntity).hydrator.hydrate).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(HasManyMapEntity)._read).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(HasManyMapEntity)._readAll).toHaveBeenCalledWith(
                {
                    keys: ['has-many-map_2_a', 'has-many-map_2_b'],
                    include_docs: true,
                },
                {
                    circularCache: {
                        'complex-entity_2_a': {
                            belongsTo: { id: 'a' },
                            hasMany: [{ id: 'a' }, { id: 'b' }],
                            hasManyDefault: [],
                            hasManyMap: { a: { id: 'a' }, b: { id: 'b' } },
                            id: 'id',
                            inline: { key: 'foobar' },
                        },
                    },
                    depth: Infinity,
                }
            );
            expect(repositorySpyMap.get(HasManyMapEntity).hydrator.hydrate).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(InlineEntityImpl)._read).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(InlineEntityImpl)._readAll).not.toHaveBeenCalled();
            expect(repositorySpyMap.get(InlineEntityImpl).hydrator.hydrate).toHaveBeenCalledTimes(1);
            expect(res).toBeInstanceOf(ComplexEntity);
            expect(res).toEqual(
                populate(new ComplexEntity(), {
                    id: 'id',
                    belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                    hasMany: [populate(new HasManyEntity(), { id: 'a' }), populate(new HasManyEntity(), { id: 'b' })],
                    hasManyDefault: [],
                    hasManyMap: { a: populate(new HasManyMapEntity(), { id: 'a' }), b: populate(new HasManyMapEntity(), { id: 'b' }) },
                    inline: populate(new InlineEntityImpl(), { key: 'foobar' }),
                })
            );
        });
    });

    describe('dehydrate', () => {
        it('should dehydrate properties', () => {
            expect(simpleHydrator.dehydrate(populate(new SimpleEntity(), { id: 'id', required: 'required' }))).toEqual({
                _id: 'simple-entity_2_id',
                id: 'id',
                required: 'required',
            });
        });

        it('should include _rev when desired', () => {
            const entity = populate(new SimpleEntity(), { id: 'id', required: 'required' });
            markIdRev(entity, { id: 'simple-entity_2_id', rev: '1-123456' });
            expect(simpleHydrator.dehydrate(entity, { includeRev: true })).toEqual({
                _id: 'simple-entity_2_id',
                _rev: '1-123456',
                id: 'id',
                required: 'required',
            });
        });

        it('should dehydrate relations', () => {
            const entity = populate(new ComplexEntity(), {
                id: 'id',
                belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                hasMany: [populate(new HasManyEntity(), { id: 'a' }), populate(new HasManyEntity(), { id: 'b' })],
                hasManyMap: { a: populate(new HasManyMapEntity(), { id: 'a' }), b: populate(new HasManyMapEntity(), { id: 'b' }) },
                inline: populate(new InlineEntityImpl(), { key: 'foobar' }),
            });

            expect(complexHydrator.dehydrate(entity)).toEqual({
                _id: 'complex-entity_2_id',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: ['has-many_2_a', 'has-many_2_b'],
                hasManyDefault: [],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' },
            });
        });

        it('should set belongs-to relations back to entity', () => {
            const hasManyEntity = populate(new HasManyEntity(), { id: 'has-many' });
            const hasManyMapEntity = populate(new HasManyMapEntity(), { id: 'has-many-map' });
            const complexEntity = populate(new ComplexEntity(), {
                id: 'id',
                belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                hasMany: [hasManyEntity],
                hasManyMap: { a: hasManyMapEntity },
                inline: populate(new InlineEntityImpl(), { key: 'foobar' }),
            });

            expect(complexHydrator.dehydrate(complexEntity)).toEqual({
                _id: 'complex-entity_2_id',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: ['has-many_2_has-many'],
                hasManyDefault: [],
                hasManyMap: { a: 'has-many-map_2_has-many-map' },
                inline: { key: 'foobar' },
            });
            expect(hasManyEntity.id).toEqual('has-many');
            expect(hasManyEntity.complex).toEqual(complexEntity);
            expect(hasManyMapEntity.complex).toEqual(complexEntity);
        });

        it('should create uuid if undefined and write it in entity', () => {
            const entity = new UuidEntity();
            const doc = uuidHydrator.dehydrate(entity);

            expect(doc).toHaveProperty('_id');
            expect(doc).toHaveProperty('id');
            expect(typeof doc.id).toBe('string');
            expect(doc.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
            expect(doc._id).toEqual(`uuid_2_${doc.id}`);
            expect(entity.id).toEqual(doc.id);
        });

        it('should keep uuid if existing', () => {
            const entity = populate(new UuidEntity(), { id: '2882cd99-db2-ef3-a29-29fc49912abd64b' });
            const doc = uuidHydrator.dehydrate(entity);

            expect(doc).toHaveProperty('_id');
            expect(doc).toHaveProperty('id');
            expect(doc.id).toEqual('2882cd99-db2-ef3-a29-29fc49912abd64b');
            expect(doc._id).toEqual(`uuid_2_${doc.id}`);
        });

        it('should use default value and write it back to entity', () => {
            const entity = new DefaultEntity();
            entity.id = 'id';
            const doc = defaultHydrator.dehydrate(entity);

            expect(doc).toEqual({ _id: 'default_2_id', id: 'id', def: 'defaultValue' });
            expect(entity.def).toEqual(doc.def);
        });
    });
});
