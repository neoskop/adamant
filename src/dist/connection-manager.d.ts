/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
/// <reference types="pouchdb-upsert" />
import { Injector } from '@angular/core';
import { AdamantRepository } from './repository';
import { Ctor } from './utils/metadata';
import { Metadata } from './metadata';
import { AdamantId, ConnectionFactory } from './injector-tokens';
export declare function adamantIdFactory(): AdamantId;
export declare function createAdamantConnection(factory: ConnectionFactory): AdamantConnectionManager;
export declare class AdamantConnectionManager {
    protected readonly connectionFactory: ConnectionFactory;
    readonly id: AdamantId;
    protected readonly injector: Injector;
    protected readonly connections: Map<string, PouchDB.Database<any>>;
    protected readonly repositories: Map<Ctor<any>, AdamantRepository<any>>;
    protected readonly metadata: Map<Ctor<any>, Metadata<any>>;
    constructor(connectionFactory: ConnectionFactory, id: AdamantId, injector: Injector);
    getOpenConnections(): PouchDB.Database[];
    getConnection<T extends {} = {}>(name: string): PouchDB.Database<T>;
    clearConnections(): void;
    protected createConnection(name: string): PouchDB.Database;
    getRepository<T>(entityClass: Ctor<T>): AdamantRepository<T>;
    protected createRepository<T>(entityClass: Ctor<T>): AdamantRepository<T>;
    getMetadata<T>(entityClass: Ctor<T>): Metadata<T>;
    protected createMetadata<T>(entityClass: Ctor<T>): Metadata<T>;
}
