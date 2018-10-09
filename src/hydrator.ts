import { Metadata } from './metadata';
import { ADAMANT_ID, AdamantConnectionManager, AdamantId } from './connection-manager';
import { Inject, Injectable } from '@angular/core';
import { RelationMetadata } from './annotations/relation';
import { PropertyMetadata, Type } from './annotations/property';
import { IdMetadata } from './annotations/id';
import { BelongsToMetadata } from './annotations/belongs-to';
import { HasManyMetadata } from './annotations/has-many';
import { HasManyMapMetadata } from './annotations/has-many-map';
import { InlineMetadata } from './annotations/inline';
import { markIdRev } from './utils/marks';
import { AdamantRepository } from './repository';

export interface HydrateOptions {
    depth? : number;
    circularCache? : { [ key : string ] : any };
}

export abstract class Hydrator {
    abstract hydrate<T>(entity : T, data : PouchDB.Core.Document<T> & PouchDB.Core.GetMeta, metadata : Metadata<T>, options? : HydrateOptions) : Promise<T>;
    
    abstract dehydrate<T>(entity : T, metadata : Metadata<T>, options? : { includeRev? : boolean }) : PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
}

@Injectable()
export class HydratorImpl extends Hydrator {
    constructor(@Inject(ADAMANT_ID) protected readonly id : AdamantId,
                protected readonly connectionManager : AdamantConnectionManager) {
        super();
    }
    
    dehydrate<T>(entity : T, metadata : Metadata<T>, options? : { includeRev? : boolean }) : PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta> {
        const doc : any = {};
        
        if(options && options.includeRev) {
            doc._rev = (entity as any)._rev;
        }
        
        if(metadata.attachments && (entity as any)._attachments) {
            doc._attachments = (entity as any)._attachments;
        }
        
        for(const [ property, annotation ] of metadata.properties) {
            const value : any = entity[ property as keyof T ];
            if(annotation instanceof RelationMetadata) {
                if(value != null) {
                    const relationMetadata = this.connectionManager.getMetadata(annotation.type);
                    
                    if(annotation instanceof BelongsToMetadata) {
                        doc[ property ] = relationToId(value, relationMetadata, this.id);
                    } else if(annotation instanceof HasManyMetadata) {
                        doc[ property ] = (value as any[]).map(rel => relationToId(rel, relationMetadata, this.id));
                    } else if(annotation instanceof HasManyMapMetadata) {
                        const rel : any = {};
                        for(const key in value) {
                            rel[ key ] = relationToId(value[ key ], relationMetadata, this.id);
                        }
                        doc[ property ] = rel;
                    } else if(annotation instanceof InlineMetadata) {
                        doc[ property ] = this.connectionManager.getRepository(annotation.type).hydrator.dehydrate(value, relationMetadata);
                    }
                }
            } else if(annotation instanceof PropertyMetadata) {
                doc[ property ] = value;
                
                if(annotation instanceof IdMetadata) {
                    doc._id = this.id.build(metadata.name!, metadata.idType, value as any);
                }
            }
            
            if(undefined === doc[ property ]) {
                delete doc[ property ];
            }
        }
        
        return doc as PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
    }
    
    async hydrate<T extends {}>(entity : T, data : PouchDB.Core.Document<T> & PouchDB.Core.GetMeta, metadata : Metadata<T>, { depth = Infinity, circularCache = {} } : HydrateOptions = {}) : Promise<T> {
        if(data._id in circularCache) {
            return circularCache[ data._id ];
        }
    
        circularCache[ data._id ] = entity;
        
        markIdRev(entity, { id: data._id, rev: data._rev });
        
        if(metadata.attachments) {
            Object.defineProperty(entity, '_attachments', { configurable: true, value: data._attachments });
        }
        
        for(const [ property, annotation ] of metadata.properties) {
            const value : any = data[ property as keyof T ];
            if(null == value) {
                entity[ property as keyof T ] = null!;
            } else {
                if(annotation instanceof RelationMetadata) {
                    const relationMetadata = this.connectionManager.getMetadata(annotation.type);
                    
                    if(annotation instanceof BelongsToMetadata) {
                        entity[ property as keyof T ] = circularCache.hasOwnProperty(value) ? circularCache[value] : await this.connectionManager
                            .getRepository(annotation.type)
                            ._read(value, {
                                depth: depth - 1,
                                circularCache
                            });
                    } else if(annotation instanceof HasManyMetadata) {
                        entity[ property as keyof T ] = await readAllWithCircularCache(this.connectionManager.getRepository(annotation.type), value, depth - 1, circularCache) as any;
                        
                    } else if(annotation instanceof HasManyMapMetadata) {
                        const keys = Object.keys(value);
                        const values = keys.map(k => value[ k ]);
                        
                        const entities = await readAllWithCircularCache(this.connectionManager.getRepository(annotation.type), values, depth - 1, circularCache);
                        const rel : any = {};
                        for(const key of keys) {
                            rel[ key ] = entities.find(e => e._id === value[ key ]);
                        }
                        entity[ property as keyof T ] = rel;
                    } else if(annotation instanceof InlineMetadata) {
                        entity[ property as keyof T ] = await this.connectionManager
                            .getRepository(annotation.type)
                            .hydrator.hydrate(Object.create(annotation.type.prototype), value, relationMetadata)
                    }
                } else if(annotation instanceof PropertyMetadata) {
                    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entity), property);
                    if(!descriptor || descriptor.writable || descriptor.set) {
                        entity[ property as keyof T ] = unpack(value, annotation.type);
                    }
                }
            }
        }
        
        return entity;
    }
}

async function readAllWithCircularCache<T>(repo : AdamantRepository<T>, keys : string[], depth : number, circularCache : { [ key : string ] : any }) : Promise<T[]> {
    const filteredKeys = keys.filter(k => !circularCache.hasOwnProperty(k));
    let fromDb : T[];
    
    if(filteredKeys.length) {
        fromDb = await repo._readAll({ keys: filteredKeys, include_docs: true }, { depth, circularCache });
    }
    
    return keys.map(key => {
        if(circularCache.hasOwnProperty(key)) {
            return circularCache[key];
        }
        
        return fromDb && fromDb.find(e => (e as any)._id === key);
    })
}

function relationToId<T>(rel : string | T, metadata : Metadata<T>, id : AdamantId) : string {
    return typeof rel === 'string'
        ? rel
        : id.build(metadata.name!, metadata.idType, rel[ metadata.id ] as any)
}

function unpack(value : any, type : Type) : any {
    if(type === Date && value) {
        return new Date(value);
    }
    
    return value;
}
