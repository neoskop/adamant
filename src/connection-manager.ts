import { Inject, Injectable, Injector } from '@angular/core';
import {
    AdamantRepository, equalCheckerFactory
} from './repository';
import { Ctor } from './utils/metadata';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { HydratorImpl } from './hydrator-impl';
import { ValidatorImpl } from './validator-impl';
import {
    ADAMANT_CONNECTION,
    ADAMANT_CONNECTION_FACTORY, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    AdamantId,
    ConnectionFactory
} from './injector-tokens';



export function adamantIdFactory() : AdamantId {
    return {
        head(name : string) {
            return `${name}_0`
        },
        tail(name : string) {
            return `${name}_9`
        },
        build(name : string, type : typeof String | typeof Number, id : string|number) : string {
            if(type === String) {
                return `${name}_2_${id}`;
            } else if(type === Number) {
                const idStr = id.toString();
                return `${name}_1_${'0'.repeat(16 - idStr.length)}${idStr}`;
            }
            throw new Error(`Invalid id type "${type}"`);
        },
        parse(id : string) : { name: string, type: typeof String | typeof Number, id : string | number } {
            const match = /^(.*)_(1|2)_(.*)$/.exec(id);
            
            if(!match) {
                throw new TypeError(`Invalid id "${id}"`);
            }
            
            return {
                name: match[1]!,
                type: match[2] === '2' ? String : Number,
                id: match[2] === '2' ? match[3] : Number.parseInt(match[3], 10)
            };
        }
    }
}


export function createAdamantConnection(factory : ConnectionFactory) : AdamantConnectionManager {
    const injector = Injector.create({
        providers: [
            { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
            { provide: AdamantConnectionManager, deps: [ ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Injector ] },
            { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
            { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] }
        ]
    });

    return injector.get(AdamantConnectionManager);
}

@Injectable()
export class AdamantConnectionManager {
    
    protected readonly connections = new Map<string, PouchDB.Database<any>>();
    protected readonly repositories = new Map<Ctor<any>, AdamantRepository<any>>();
    protected readonly metadata = new Map<Ctor<any>, Metadata<any>>();
    
    constructor(@Inject(ADAMANT_CONNECTION_FACTORY) protected readonly connectionFactory : ConnectionFactory,
                @Inject(ADAMANT_ID) public readonly id : AdamantId,
                protected readonly injector : Injector) {}
    
    getOpenConnections() : PouchDB.Database[] {
        return Array.from(this.connections.values());
    }
    
    getConnection<T extends {} = {}>(name : string) : PouchDB.Database<T> {
        if(!this.connections.has(name)) {
            this.connections.set(name, this.createConnection(name));
        }
        
        return this.connections.get(name)!;
    }
    
    clearConnections() {
        this.connections.clear();
    }
    
    protected createConnection(name : string) : PouchDB.Database {
        return this.connectionFactory(name);
    }
    
    getRepository<T>(entityClass : Ctor<T>) : AdamantRepository<T> {
        if(!this.repositories.has(entityClass)) {
            this.repositories.set(entityClass, this.createRepository(entityClass));
        }
        
        return this.repositories.get(entityClass)!;
    }
    
    protected createRepository<T>(entityClass : Ctor<T>) : AdamantRepository<T> {
        const metadata = this.getMetadata(entityClass);
        
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: AdamantConnectionManager, useValue: this },
                { provide: AdamantRepository, deps: [ ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID, Bulk, Hydrator, Validator] },
                { provide: ADAMANT_ENTITY_CLASS, useValue: entityClass },
                { provide: ADAMANT_ENTITY_METADATA, useValue: metadata, },
                { provide: ADAMANT_CONNECTION, useValue: !metadata.inline ? this.getConnection(metadata.name!) : null },
                { provide: HydratorImpl, deps: [ ADAMANT_ID, AdamantConnectionManager] },
                { provide: ValidatorImpl, deps: [] },
                { provide: Hydrator, useExisting: metadata.hydrator || HydratorImpl },
                { provide: Validator, useExisting: metadata.validator || ValidatorImpl },
                { provide: Bulk, deps: [ ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, Hydrator, Validator ] }
            ]
        }).get<AdamantRepository<T>>(AdamantRepository);
    }
    
    getMetadata<T>(entityClass : Ctor<T>) : Metadata<T> {
        if(!this.metadata.has(entityClass)) {
            this.metadata.set(entityClass, this.createMetadata(entityClass));
        }
        
        return this.metadata.get(entityClass)!;
    }
    
    protected createMetadata<T>(entityClass : Ctor<T>) : Metadata<T> {
        return new Metadata<T>(entityClass);
    }
}
