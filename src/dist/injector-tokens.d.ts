/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
/// <reference types="pouchdb-upsert" />
import { Ctor } from './utils/metadata';
import { InjectionToken } from '@angular/core';
import { Metadata } from './metadata';
export interface EqualChecker {
    (a: any, b: any): boolean;
}
export interface ConnectionFactory<T extends {} = {}> {
    (name: string): PouchDB.Database<T>;
}
export interface AdamantId {
    head(name: string): string;
    tail(name: string): string;
    build(name: string, type: typeof String | typeof Number, id: string | number): string;
    parse(id: string): {
        name: string;
        type: typeof String | typeof Number;
        id: string | number;
    };
}
export declare const ADAMANT_CONNECTION: InjectionToken<PouchDB.Database<{}>>;
export declare const ADAMANT_ENTITY_CLASS: InjectionToken<Ctor<any>>;
export declare const ADAMANT_ENTITY_METADATA: InjectionToken<Metadata<any>>;
export declare const ADAMANT_EQUAL_CHECKER: InjectionToken<EqualChecker>;
export declare const ADAMANT_CONNECTION_FACTORY: InjectionToken<ConnectionFactory<{}>>;
export declare const ADAMANT_ID: InjectionToken<AdamantId>;
