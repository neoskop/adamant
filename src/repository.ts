import { Validator } from './validator';
import { Ctor, getAllPropertyMetadata, getClassMetadata, getPropertyMetadata, populate } from './utils/metadata';
import { HydrateOptions, Hydrator } from './hydrator';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { markDeleted, markIdRev } from './utils/marks';
import { ReadQueryBatcher } from './read-query-batcher';
import { QueryBuilder } from './query-builder';
import { DesignDocMetadata } from './annotations/design-doc';
import { ViewMetadata } from './annotations/view';
import { FilterMetadata } from './annotations/filter';
import { ValidateDocMetadata } from './annotations/validate-doc';
import {
    ADAMANT_CONNECTION,
    ADAMANT_ENTITY_CLASS,
    ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID,
    AdamantId,
    EqualChecker
} from './injector-tokens';
import { AdamantDeletedMeta, AdamantEntityMeta, AdamantRevMeta } from './meta-interfaces';


export class AdamantRepository<T> {
    protected readonly queryBatcher = new ReadQueryBatcher(this.db);
    
    constructor(protected readonly db : PouchDB.Database<T>,
                protected readonly entityClass : Ctor<T>,
                protected readonly metadata : Metadata<T>,
                protected readonly equal : EqualChecker,
                protected readonly id : AdamantId,
                public readonly bulk : Bulk<T>,
                public readonly hydrator : Hydrator,
                public readonly validator : Validator) {
    }
    
    async create(entity : T) : Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity, this.metadata);
        
        const doc = this.hydrator.dehydrate(entity, this.metadata);
        
        const result = await this.db.put(doc);
        
        markIdRev(entity, result);
        
        return entity as T & AdamantRevMeta;
    }
    
    async upsert(entity : T) : Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity, this.metadata);
        
        const doc = this.hydrator.dehydrate(entity, this.metadata);
        
        const result = await this._upsert(this.id.build(this.metadata.name!, this.metadata.idType, entity[ this.metadata.id ] as any), doc);
        
        markIdRev(entity, result);
        
        return entity as T & AdamantRevMeta;
    }
    
    /** @internal */
    _upsert(id : string, document : PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>) : Promise<PouchDB.UpsertResponse> {
        return this.db.upsert(id, existingDoc => {
            const { _id: _1, _rev: _2, ...d1 } = document as any;
            const { _id: _3, _rev: _4, ...d2 } = existingDoc as any;
            
            if(this.equal(d1, d2)) {
                return false;
            }
            
            return document;
        })
    }
    
    async update(entity : T) : Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity, this.metadata);
        
        const doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
        
        const result = await this.db.put(doc);
        
        markIdRev(entity, result);
        
        return entity as T & AdamantRevMeta;
    }
    
    async delete(entity : T) : Promise<T & AdamantRevMeta & AdamantDeletedMeta> {
        await this.validator.validate(entity, this.metadata);
        
        const doc : PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta> & PouchDB.Core.ChangesMeta = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
        
        doc._deleted = true;
        
        const result = await this.db.put(doc);
        
        markIdRev(entity, result);
        markDeleted(entity);
        
        return entity as T & AdamantRevMeta & AdamantDeletedMeta;
    }
    
    read(id : number | string, options? : HydrateOptions) : Promise<T & AdamantRevMeta> {
        return this._read(this.id.build(this.metadata.name!, this.metadata.idType, id), options);
    }
    
    /** @internal */
    async _read(id : string, options? : HydrateOptions) : Promise<T & AdamantRevMeta> {
        return this.hydrator.hydrate(Object.create(this.entityClass.prototype), await this._readRaw(id), this.metadata, options);
    }
    
    /** @internal */
    async _readRaw(id : string) : Promise<PouchDB.Core.Document<T>> {
        const result = await this.queryBatcher.read<T>([ id ]);
        if(!result[ 0 ]) {
            throw {
                status : 404,
                name   : 'not_found',
                message: 'missing',
                reason : 'missing',
                id
            }
        }
        
        return result[ 0 ];
    }
    
    async readAll(ids? : (string | number)[], options? : HydrateOptions) : Promise<(T & AdamantRevMeta)[]> {
        const opt : PouchDB.Core.AllDocsWithKeysOptions & PouchDB.Core.AllDocsWithinRangeOptions = {
            include_docs: true
        } as any;
        
        if(ids) {
            opt.keys = ids.map(id => this.id.build(this.metadata.name!, this.metadata.idType, id)).sort((a, b) => a.localeCompare(b));
        } else {
            opt.startkey = this.id.head(this.metadata.name!);
            opt.endkey = this.id.tail(this.metadata.name!);
        }
        
        return this._readAll(opt, options);
    }
    
    /** @internal */
    async _readAll(opt : PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions, options? : HydrateOptions) : Promise<(T & AdamantRevMeta)[]> {
        return await Promise.all((await this._readAllRaw(opt))
            .map(async doc => this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options))
        )
    }
    
    /** @internal */
    async _readAllRaw(opt : PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions) : Promise<PouchDB.Core.Document<T>[]> {
        if(opt.include_docs && 'keys' in opt) {
            return await this.queryBatcher.read<T>(opt.keys);
        }
        
        return (await this.db.allDocs<T>(opt)).rows.map(r => r.doc!).filter(Boolean);
    }
    
    query() : QueryBuilder<T> {
        return new QueryBuilder<T>(this, this.id.head(this.metadata.name!), this.id.tail(this.metadata.name!));
    }
    
    async executeQuery(query : QueryBuilder<T>, options? : HydrateOptions) : Promise<(T & AdamantRevMeta)[]> {
        return await Promise.all((await this.db.find(query.toFindRequest())).docs
            .map(async doc => this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options))
        )
    }
    
    build(props : Partial<T> = {}) : T & AdamantEntityMeta {
        return populate(Object.create(this.entityClass.prototype), props);
    }
    
    async persistDesignDoc<T extends {}>(doc : T) : Promise<void> {
        const classAnnotations = getClassMetadata(doc.constructor, DesignDocMetadata);
        const propertyAnnotations = getAllPropertyMetadata<ViewMetadata | FilterMetadata | ValidateDocMetadata>(doc.constructor);
        
        if(1 !== classAnnotations.length) {
            throw new Error(`Design doc annotation required`);
        }
        
        if(classAnnotations[ 0 ].entity !== this.entityClass) {
            throw new Error(`Invalid design doc entity`);
        }
        
        let document : {
            _id : string;
            views : { [ key : string ] : { map : string, reduce? : string } };
            filters : { [ key : string ] : string };
            validate_doc_update? : string;
        } = {
            _id    : `_design/${classAnnotations[ 0 ].name}`,
            views  : {},
            filters: {}
        };
        
        for(const [ property, annotations ] of propertyAnnotations) {
            for(const annotation of annotations) {
                /* istanbul ignore else */
                if(annotation instanceof ViewMetadata) {
                    const value : any = doc[ property as keyof T ];
                    const type = typeof value;
    
                    /* istanbul ignore else */
                    if(type === 'string' || type === 'function') {
                        document.views[ property as string ] = {
                            map: value.toString()
                        };
                    } else if(type === 'object') {
                        document.views[ property as string ] = {
                            map   : value.map.toString(),
                            reduce: value.reduce && value.reduce.toString()
                        };
                    }
                } else if(annotation instanceof FilterMetadata) {
                    document.filters[ property as string ] = doc[ property as keyof T ].toString();
                } else if(annotation instanceof ValidateDocMetadata) {
                    document.validate_doc_update = doc[ property as keyof T ].toString();
                }
            }
        }
        
        await this.db.upsert<any>(document._id, existingDoc => {
            const { _id: _1, _rev: _2, ...d1 } = document as any;
            const { _id: _3, _rev: _4, ...d2 } = existingDoc as any;
            
            if(this.equal(d1, d2)) {
                return false;
            }
            
            return document;
        });
    }
    
    async view<T, P extends keyof T>(designDoc : Ctor<T>, name : P, { depth, circularCache, ...options } : HydrateOptions & PouchDB.Query.Options<T, any> = {}) : Promise<(T & AdamantRevMeta)[]> {
        const classAnnotation = getClassMetadata(designDoc, DesignDocMetadata)[ 0 ];
        
        if(!classAnnotation) {
            throw new Error(`Design doc annotation required`);
        }
        
        if(classAnnotation.entity !== this.entityClass) {
            throw new Error(`Invalid design doc entity`);
        }
        
        const propertyAnnotations = getPropertyMetadata(designDoc, name as string, ViewMetadata);
        
        if(0 === propertyAnnotations.length) {
            throw new Error(`Unknown view "${name}"`);
        }
        
        options.include_docs = true;
        
        return await Promise.all((await this.rawView(`${classAnnotation.name}/${name}`, options))
            .rows.map(row => row.doc!)
            .map(async doc => this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, {
                depth,
                circularCache
            }))
        )
    }
    
    rawView<R = T>(name : string, options? : PouchDB.Query.Options<T, R>) : Promise<PouchDB.Query.Response<R>> {
        return this.db.query(name, options);
    }
}


export const ADAMANT_REPOSITORY_PROVIDER = {
    provide: AdamantRepository,
    useFactory(db : PouchDB.Database<any>,
               entityClass : Ctor<any>,
               metadata : Metadata<any>,
               equal : EqualChecker,
               id : AdamantId,
               bulk : Bulk<any>,
               hydrator : Hydrator,
               validator : Validator) {
        return new AdamantRepository(db, entityClass, metadata, equal, id, bulk, hydrator, validator);
    },
    deps: [ ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID, Bulk, Hydrator, Validator ]
};
