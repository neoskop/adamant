import 'mocha';
import { expect, use } from 'chai';
import { Entity } from './annotations/entity';
import { Id } from './annotations/id';
import { Metadata } from './metadata';
import { Property } from './annotations/property';
import { HydratorImpl } from './hydrator';
import { adamantIdFactory } from './connection-manager';
import { SinonSpy, spy, stub } from 'sinon';
import { BelongsTo } from './annotations/belongs-to';
import { HasMany } from './annotations/has-many';
import { HasManyMap } from './annotations/has-many-map';
import { Inline } from './annotations/inline';
import { Ctor, populate } from './utils/metadata';
import { InlineEntity } from './annotations/inline-entity';
import { markIdRev } from './utils/marks';

use(require('chai-as-promised'));

@Entity('simple-entity')
export class SimpleEntity {
    @Id()
    id! : string;
    
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

@Entity('complex-entity')
export class ComplexEntity {
    @Id()
    id! : string;
    
    @BelongsTo()
    belongsTo?: BelongsToEntity;
    
    @HasMany(HasManyEntity)
    hasMany?: HasManyEntity[];
    
    @HasManyMap(HasManyMapEntity)
    hasManyMap?: { [key: string]: HasManyMapEntity };
    
    @Inline()
    inline?: InlineEntityImpl
}

describe('HydratorImpl', () => {
    let metadata : Metadata<SimpleEntity>;
    let hydrator : HydratorImpl;
    let getRepositorySpy : SinonSpy;
    let repositorySpyMap : Map<Ctor<any>, any>;
    
    
    beforeEach(() => {
        repositorySpyMap = new Map();
        const conn = {
            getMetadata<T>(entity : Ctor<T>) {
                return new Metadata(entity);
            },
            getRepository<T>(entity : Ctor<T>) : any {
                if(!repositorySpyMap.has(entity)) {
                    repositorySpyMap.set(entity, {
                        _read: stub().resolves(populate(new BelongsToEntity(), { id: 'a' })),
                        _readAll: stub().resolves(entity === HasManyEntity
                            ? [markIdRev(populate(new HasManyEntity(), { id: 'a' }), { id: 'has-many_2_a', rev: '1-123456' }), markIdRev(populate(new HasManyEntity(), { id: 'b' }), { id: 'has-many_2_b', rev: '1-123456' })]
                            : [markIdRev(populate(new HasManyMapEntity(), { id: 'a' }), { id: 'has-many-map_2_a', rev: '1-123456' }), markIdRev(populate(new HasManyMapEntity(), { id: 'b' }), { id: 'has-many-map_2_b', rev: '1-123456' })]),
                        hydrator: {
                            hydrate: stub().resolves(populate(new InlineEntityImpl(), { key: 'foobar' })),
                            dehydrate: stub().returns({ key: 'foobar' })
                        }
                    })
                }
                
                return repositorySpyMap.get(entity)!;
            }
        };
        getRepositorySpy = spy(conn, 'getRepository');
        metadata = new Metadata(SimpleEntity);
        hydrator = new HydratorImpl(adamantIdFactory(), conn as any);
    });
    
    describe('hydrate', () => {
        it('should return a promise', () => {
            expect(hydrator.hydrate(Object.create(SimpleEntity.prototype), { id: 'id', required: 'required' }, metadata)).to.be.instanceOf(Promise);
        });
        
        it('should hydrate properties', async () => {
            expect(await hydrator.hydrate(Object.create(SimpleEntity.prototype), { id: 'id', required: 'required' }, metadata)).to.be.eql(populate(new SimpleEntity(), { id: 'id', optional: null!, required: 'required' }));
        });
        
        it('should hydrate relations', async () => {
            const res = await hydrator.hydrate(Object.create(ComplexEntity.prototype), {
                _id: 'complex-entity_2_a',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: [ 'has-many_2_a', 'has-many_2_b' ],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' }
            }, new Metadata(ComplexEntity));
            
            expect(getRepositorySpy).to.have.been.callCount(4);
            expect(repositorySpyMap.get(BelongsToEntity)._read).to.have.been.calledOnceWith('belongs-to_2_a');
            expect(repositorySpyMap.get(BelongsToEntity)._readAll).not.to.have.been.called;
            expect(repositorySpyMap.get(BelongsToEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyEntity)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyEntity)._readAll).to.have.been.calledOnceWith({ keys: [ 'has-many_2_a', 'has-many_2_b' ] });
            expect(repositorySpyMap.get(HasManyEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyMapEntity)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(HasManyMapEntity)._readAll).to.have.been.calledOnceWith({ keys: [ 'has-many-map_2_a', 'has-many-map_2_b' ] });
            expect(repositorySpyMap.get(HasManyMapEntity).hydrator.hydrate).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl)._read).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl)._readAll).not.to.have.been.called;
            expect(repositorySpyMap.get(InlineEntityImpl).hydrator.hydrate).to.have.been.calledOnce;
            expect(res).to.be.instanceOf(ComplexEntity);
            expect(res).to.be.eql(populate(new ComplexEntity(), {
                id: 'id',
                belongsTo: populate(new BelongsToEntity(), { id: 'a' }),
                hasMany: [populate(new HasManyEntity(), { id: 'a' }), populate(new HasManyEntity(), { id: 'b' })],
                hasManyMap: { a: populate(new HasManyMapEntity(), { id: 'a' }), b: populate(new HasManyMapEntity(), { id: 'b' }) },
                inline: populate(new InlineEntityImpl(), { key: 'foobar' })
            }));
        });
    });
    
    describe('dehydrate', () => {
        it('should dehydrate properties', () => {
            expect(hydrator.dehydrate(populate(new SimpleEntity(), { id: 'id', required: 'required' }), new Metadata(SimpleEntity))).to.be.eql({
                _id: 'simple-entity_2_id',
                id: 'id',
                required: 'required'
            });
        });
        
        it('should include _rev when desired', () => {
            const entity = populate(new SimpleEntity(), { id: 'id', required: 'required' });
            markIdRev(entity, { id: 'simple-entity_2_id', rev: '1-123456' });
            expect(hydrator.dehydrate(entity, new Metadata(SimpleEntity), { includeRev: true })).to.be.eql({
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
            
            expect(hydrator.dehydrate(entity, new Metadata(ComplexEntity))).to.be.eql({
                _id: 'complex-entity_2_id',
                id: 'id',
                belongsTo: 'belongs-to_2_a',
                hasMany: [ 'has-many_2_a', 'has-many_2_b' ],
                hasManyMap: { a: 'has-many-map_2_a', b: 'has-many-map_2_b' },
                inline: { key: 'foobar' }
            });
        })
    })
    
});

