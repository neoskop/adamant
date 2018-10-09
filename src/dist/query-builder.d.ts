/// <reference types="pouchdb-find" />
import { AdamantRepository } from './repository';
import { HydrateOptions } from './hydrator';
export declare class QueryBuilder<T> {
    protected readonly repository: AdamantRepository<T>;
    protected _selector: PouchDB.Find.Selector;
    protected _sort: Array<string | {
        [propName: string]: 'asc' | 'desc';
    }>;
    protected _limit?: number;
    protected _skip?: number;
    constructor(repository: AdamantRepository<T>, head: string, tail: string);
    selector(field: string, condition: PouchDB.Find.Selector | PouchDB.Find.ConditionOperators | string | number | boolean): this;
    selector(selector: PouchDB.Find.Selector): this;
    sort(property: string, direction?: 'asc' | 'desc'): this;
    sort(sort: {
        [propName: string]: 'asc' | 'desc';
    }): this;
    limit(limit: number): this;
    skip(skip: number): this;
    resolve(options?: HydrateOptions): Promise<T[]>;
    toFindRequest(): PouchDB.Find.FindRequest<T>;
}
