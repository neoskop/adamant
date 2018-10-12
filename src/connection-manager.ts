import { ADAMANT_REPOSITORY_PROVIDER, AdamantRepository } from './repository';
import { Ctor } from './utils/metadata';
import { EntityMetadataCollection } from './metadata';
import { ADAMANT_BULK_PROVIDER } from './bulk';
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { ValidatorImpl } from './validator-impl';
import {
    ADAMANT_CONNECTION,
    ADAMANT_CONNECTION_FACTORY,
    ADAMANT_ENTITY_CLASS,
    ADAMANT_ENTITY_METADATA,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    AdamantId,
    ConnectionFactory
} from './injector-tokens';
import { adamantIdFactory, equalCheckerFactory } from './factories';
import { ADAMANT_INJECTOR, ADAMANT_INJECTOR_FACTORY, AdamantInjector, createInjector } from './injector';
import { HydratorImpl } from './hydrator-impl';

export function createAdamantConnection(factory: ConnectionFactory): AdamantConnectionManager {
    const injector = createInjector({
        providers: [
            { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
            ADAMANT_CONNECTION_MANAGER_PROVIDER,
            { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
            { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] }
        ]
    });

    return injector.get(AdamantConnectionManager);
}

export class AdamantConnectionManager {
    protected readonly connections = new Map<string, PouchDB.Database<any>>();
    protected readonly repositories = new Map<Ctor<any>, AdamantRepository<any>>();
    // protected readonly metadata = new Map<Ctor<any>, EntityMetadataCollection<any>>();

    constructor(
        protected readonly connectionFactory: ConnectionFactory,
        public readonly id: AdamantId,
        protected readonly injector: AdamantInjector,
        protected readonly injectorFactory: Function
    ) {}

    getOpenConnections(): PouchDB.Database[] {
        return Array.from(this.connections.values());
    }

    getConnection<T extends {} = {}>(name: string): PouchDB.Database<T> {
        if (!this.connections.has(name)) {
            this.connections.set(name, this.createConnection(name));
        }

        return this.connections.get(name)!;
    }

    clearConnections() {
        this.connections.clear();
    }

    protected createConnection(name: string): PouchDB.Database {
        return this.connectionFactory(name);
    }

    getRepository<T>(entityClass: Ctor<T>): AdamantRepository<T> {
        if (!this.repositories.has(entityClass)) {
            this.repositories.set(entityClass, this.createRepository(entityClass));
        }

        return this.repositories.get(entityClass)!;
    }

    protected createRepository<T>(entityClass: Ctor<T>): AdamantRepository<T> {
        const metadata = this.getMetadata(entityClass);

        return this.injectorFactory({
            parent: this.injector,
            providers: [
                { provide: AdamantConnectionManager, useValue: this },
                ADAMANT_REPOSITORY_PROVIDER,
                { provide: ADAMANT_ENTITY_CLASS, useValue: entityClass },
                { provide: ADAMANT_ENTITY_METADATA, useValue: metadata },
                { provide: ADAMANT_CONNECTION, useValue: !metadata.inline ? this.getConnection(metadata.name!) : null },
                {
                    provide: Hydrator,
                    useFactory: metadata.hydrator
                        ? metadata.hydrator
                        : () => {
                              return new HydratorImpl(this.id, metadata, this);
                          },
                    deps: [ADAMANT_INJECTOR]
                },
                {
                    provide: Validator,
                    useFactory: metadata.hydrator
                        ? metadata.hydrator
                        : () => {
                              return new ValidatorImpl(metadata);
                          },
                    deps: [ADAMANT_INJECTOR]
                },
                ADAMANT_BULK_PROVIDER
            ]
        }).get(AdamantRepository) as AdamantRepository<T>;
    }

    getMetadata<T>(entityClass: Ctor<T>): EntityMetadataCollection<T> {
        return EntityMetadataCollection.create(entityClass);
    }
}

export const ADAMANT_CONNECTION_MANAGER_PROVIDER = {
    provide: AdamantConnectionManager,
    useFactory(connectionFactory: ConnectionFactory, id: AdamantId, injector: AdamantInjector, injectorFactory: Function) {
        return new AdamantConnectionManager(connectionFactory, id, injector, injectorFactory);
    },
    deps: [ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, ADAMANT_INJECTOR, ADAMANT_INJECTOR_FACTORY]
};
