/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
/// <reference types="pouchdb-upsert" />
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { Ctor } from './utils/metadata';
import { Metadata } from './metadata';
export declare enum BulkOperation {
    Create = "create",
    Update = "update",
    Delete = "delete"
}
export declare class Bulk<T> {
    protected readonly db: PouchDB.Database<T>;
    protected readonly entityClass: Ctor<T>;
    protected readonly metadata: Metadata<T>;
    protected readonly hydrator: Hydrator;
    protected readonly validator: Validator;
    constructor(db: PouchDB.Database<T>, entityClass: Ctor<T>, metadata: Metadata<T>, hydrator: Hydrator, validator: Validator);
    protected bulk(entities: T[], operation: BulkOperation): Promise<T[]>;
    create(entities: T[]): Promise<T[]>;
    update(entities: T[]): Promise<T[]>;
    delete(entities: T[]): Promise<T[]>;
}
