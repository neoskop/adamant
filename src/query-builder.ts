import { AdamantRepository } from './repository';
import { HydrateOptions } from './hydrator';

export class QueryBuilder<T> {
    
    protected _selector : PouchDB.Find.Selector = {};
    protected _sort : Array<string|{[propName: string]: 'asc' | 'desc'}> = [];
    protected _limit? : number;
    protected _skip? : number;
    
    constructor(protected readonly repository : AdamantRepository<T>, head : string, tail : string) {
        this._selector._id = {
            $gt: head,
            $lt: tail
        }
    }
    
    selector(field : string, condition : PouchDB.Find.Selector | PouchDB.Find.ConditionOperators | string | number | boolean) : this;
    selector(selector : PouchDB.Find.Selector) : this;
    selector(fieldOrSelector : string|PouchDB.Find.Selector, condition? : PouchDB.Find.Selector | PouchDB.Find.ConditionOperators | string | number | boolean) : this {
        if(typeof fieldOrSelector === 'string') {
            if(typeof condition !== 'object') {
                condition = {
                    $eq: condition
                }
            }
            if(fieldOrSelector in this._selector) {
                
                Object.assign(this._selector[ fieldOrSelector ], condition)
            } else {
                this._selector[ fieldOrSelector ] = condition;
            }
        } else {
            for(let key in fieldOrSelector) {
                this.selector(key, fieldOrSelector[key]);
            }
        }
        return this;
    }
    
    sort(property : string, direction? : 'asc' | 'desc') : this;
    sort(sort : { [propName: string]: 'asc' | 'desc' }) : this;
    sort(propertyOrSort : string|{ [propName: string]: 'asc' | 'desc' }, direction? : 'asc' | 'desc') : this {
        if(typeof propertyOrSort === 'string' && direction) {
            this._sort.push({ [propertyOrSort]: direction });
        } else {
            this._sort.push(propertyOrSort);
        }
        return this;
    }
    
    limit(limit : number) : this {
        this._limit = limit;
        return this;
    }
    
    skip(skip : number) : this {
        this._skip = skip;
        return this;
    }
    
    resolve(options?: HydrateOptions) : Promise<T[]> {
        return this.repository.executeQuery(this, options);
    }
    
    toFindRequest() {
        const req : PouchDB.Find.FindRequest<T> = {
            selector: this._selector,
            sort: this._sort
        };
        
        if(this._limit != null) {
            req.limit = this._limit;
        }
        
        if(this._skip != null) {
            req.skip = this._skip;
        }
        
        return req;
    }
}
