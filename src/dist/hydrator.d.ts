/// <reference types="pouchdb-core" />
import { Metadata } from './metadata';
export interface HydrateOptions {
    depth?: number;
    circularCache?: {
        [key: string]: any;
    };
}
export declare abstract class Hydrator {
    abstract hydrate<T>(entity: T, data: PouchDB.Core.Document<T> & PouchDB.Core.GetMeta, metadata: Metadata<T>, options?: HydrateOptions): Promise<T>;
    abstract dehydrate<T>(entity: T, metadata: Metadata<T>, options?: {
        includeRev?: boolean;
    }): PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
}
