import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { Ctor } from './utils/metadata';
import { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA } from './injector-tokens';
import { Inject } from '@angular/core';
import { markDeleted, markIdRev } from './utils/marks';
import { Metadata } from './metadata';

export enum BulkOperation {
    Create = 'create',
    Update = 'update',
    Delete = 'delete'
}

export class Bulk<T> {
    
    constructor(@Inject(ADAMANT_CONNECTION) protected readonly db : PouchDB.Database<T>,
                @Inject(ADAMANT_ENTITY_CLASS) protected readonly entityClass : Ctor<T>,
                @Inject(ADAMANT_ENTITY_METADATA) protected readonly metadata : Metadata<T>,
                protected readonly hydrator : Hydrator,
                protected readonly validator : Validator) {}
    
    protected async bulk(entities : T[], operation : BulkOperation) : Promise<T[]> {
        if(0 === entities.length) {
            return entities;
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
        
        return entities;
    }
    
    create(entities : T[]) : Promise<T[]> {
        return this.bulk(entities, BulkOperation.Create);
    }
    
    update(entities : T[]) : Promise<T[]> {
        return this.bulk(entities, BulkOperation.Update);
    }
    
    delete(entities : T[]) : Promise<T[]> {
        return this.bulk(entities, BulkOperation.Delete);
    }
}
