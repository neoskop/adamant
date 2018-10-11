import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { Ctor } from './utils/metadata';
import { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA } from './injector-tokens';
import { markDeleted, markIdRev } from './utils/marks';
import { Metadata } from './metadata';
import { AdamantDeletedMeta, AdamantRevMeta } from './meta-interfaces';

export enum BulkOperation {
    Create = 'create',
    Update = 'update',
    Delete = 'delete'
}

export class Bulk<T> {
    
    constructor(protected readonly db : PouchDB.Database<T>,
                protected readonly entityClass : Ctor<T>,
                protected readonly metadata : Metadata<T>,
                protected readonly hydrator : Hydrator,
                protected readonly validator : Validator) {}
    
    protected async bulk(entities : T[], operation : BulkOperation) : Promise<(T & AdamantRevMeta & AdamantDeletedMeta)[]> {
        if(0 === entities.length) {
            return entities as (T & AdamantRevMeta & AdamantDeletedMeta)[];
        }
        
        const docs = await Promise.all(entities.map(async entity => {
            if(!(entity instanceof this.entityClass)) {
                throw new Error(`Entity "${entity}" is not instanceof ${this.entityClass.name}`);
            }
    
            await this.validator.validate(entity, this.metadata);
    
            const doc : PouchDB.Core.ChangesMeta & PouchDB.Core.Document<T> = this.hydrator.dehydrate(entity, this.metadata, { includeRev: operation === BulkOperation.Update || operation === BulkOperation.Delete });
            if(operation === BulkOperation.Delete) {
                doc._deleted = true;
            }
            return doc;
        }));
        
        const result = await this.db.bulkDocs(docs);
        const errors : PouchDB.Core.Error[] = result.filter(r => Object.prototype.hasOwnProperty.call(r, 'error'));
        
        if(0 < errors.length) {
            throw errors;
        }
        
        result.forEach((res, index) => {
            if(operation === BulkOperation.Delete) {
                markDeleted(entities[index]);
            }
            markIdRev(entities[index], res);
        });
        
        return entities as (T & AdamantRevMeta & AdamantDeletedMeta)[];
    }
    
    create(entities : T[]) : Promise<(T & AdamantRevMeta)[]> {
        return this.bulk(entities, BulkOperation.Create);
    }
    
    update(entities : T[]) : Promise<(T & AdamantRevMeta)[]> {
        return this.bulk(entities, BulkOperation.Update);
    }
    
    delete(entities : T[]) : Promise<(T & AdamantRevMeta & AdamantDeletedMeta)[]> {
        return this.bulk(entities, BulkOperation.Delete);
    }
}


export const ADAMANT_BULK_PROVIDER = {
    provide: Bulk,
    useFactory(db : PouchDB.Database<any>,
               entityClass : Ctor<any>,
               metadata : Metadata<any>,
               hydrator : Hydrator,
               validator : Validator) {
        return new Bulk(db, entityClass, metadata, hydrator, validator);
    },
    deps: [ ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, Hydrator, Validator ]
};
