/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
/// <reference types="pouchdb-upsert" />
import { Validator } from './validator';
import { Ctor } from './utils/metadata';
import { HydrateOptions, Hydrator } from './hydrator';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { ReadQueryBatcher } from './read-query-batcher';
import { QueryBuilder } from './query-builder';
import { AdamantId, EqualChecker } from './injector-tokens';
export declare function equalCheckerFactory(): (a: any, b: any) => boolean;
export declare class AdamantRepository<T> {
    protected readonly db: PouchDB.Database<T>;
    protected readonly entityClass: Ctor<T>;
    protected readonly metadata: Metadata<T>;
    protected readonly equal: EqualChecker;
    protected readonly id: AdamantId;
    readonly bulk: Bulk<T>;
    readonly hydrator: Hydrator;
    readonly validator: Validator;
    protected readonly queryBatcher: ReadQueryBatcher;
    constructor(db: PouchDB.Database<T>, entityClass: Ctor<T>, metadata: Metadata<T>, equal: EqualChecker, id: AdamantId, bulk: Bulk<T>, hydrator: Hydrator, validator: Validator);
    create(entity: T): Promise<T>;
    upsert(entity: T): Promise<T>;
    /** @internal */
    _upsert(id: string, document: PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>): Promise<PouchDB.UpsertResponse>;
    update(entity: T): Promise<T>;
    delete(entity: T): Promise<T>;
    read(id: number | string, options?: HydrateOptions): Promise<any>;
    /** @internal */
    _read(id: string, options?: HydrateOptions): Promise<any>;
    /** @internal */
    _readRaw(id: string): Promise<PouchDB.Core.Document<T>>;
    readAll(ids?: (string | number)[], options?: HydrateOptions): Promise<any[]>;
    /** @internal */
    _readAll(opt: PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions, options?: HydrateOptions): Promise<any[]>;
    /** @internal */
    _readAllRaw(opt: PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions): Promise<PouchDB.Core.Document<T>[]>;
    query(): QueryBuilder<T>;
    executeQuery(query: QueryBuilder<T>, options?: HydrateOptions): Promise<any[]>;
    build(props?: Partial<T>): T;
    persistDesignDoc<T extends {}>(doc: T): Promise<void>;
    view<T, P extends keyof T>(designDoc: Ctor<T>, name: P, { depth, circularCache, ...options }?: HydrateOptions & PouchDB.Query.Options<T, any>): Promise<any[]>;
    rawView<R = T>(name: string, options?: PouchDB.Query.Options<R, any>): Promise<PouchDB.Query.Response<any>>;
}
