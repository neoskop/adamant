/// <reference types="pouchdb-core" />
import { HydrateOptions, Hydrator } from './hydrator';
import { AdamantConnectionManager } from './connection-manager';
import { Metadata } from './metadata';
import { AdamantId } from './injector-tokens';
export declare class HydratorImpl extends Hydrator {
    protected readonly id: AdamantId;
    protected readonly connectionManager: AdamantConnectionManager;
    constructor(id: AdamantId, connectionManager: AdamantConnectionManager);
    dehydrate<T>(entity: T, metadata: Metadata<T>, options?: {
        includeRev?: boolean;
    }): PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
    hydrate<T extends {}>(entity: T, data: PouchDB.Core.Document<T> & PouchDB.Core.GetMeta, metadata: Metadata<T>, { depth, circularCache }?: HydrateOptions): Promise<T>;
}
