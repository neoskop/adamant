import { InjectionToken } from './injector';
import { EntityMetadataCollection } from './metadata';
import { Ctor } from './utils/metadata';

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
    parse(id: string): { name: string; type: typeof String | typeof Number; id: string | number };
}

export const ADAMANT_CONNECTION = new InjectionToken<PouchDB.Database>('ADAMANT_CONNECTION');
export const ADAMANT_ENTITY_CLASS = new InjectionToken<Ctor<any>>('ADAMANT_ENTITY_CLASS');
export const ADAMANT_ENTITY_METADATA = new InjectionToken<EntityMetadataCollection<any>>('ADAMANT_ENTITY_METADATA');
export const ADAMANT_EQUAL_CHECKER = new InjectionToken<EqualChecker>('ADAMANT_EQUAL_CHECKER');
export const ADAMANT_CONNECTION_FACTORY = new InjectionToken<ConnectionFactory>('ADAMANT_CONNECTION_FACTORY');
export const ADAMANT_ID = new InjectionToken<AdamantId>('ADAMANT_ID');
