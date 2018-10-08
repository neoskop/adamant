import { Inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, AdamantRepository } from './repository';
import { Ctor } from './utils/metadata';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { Hydrator } from './hydrator';
import { Validator } from './validator';

export type ConnectionFactory<T extends {} = {}> = (name : string) => PouchDB.Database<T>;
export type AdamantId = {
    head(name : string) : string;
    tail(name : string) : string;
    build(name : string, type : typeof String | typeof Number, id : string|number) : string;
    parse(id : string) : { name: string, type: typeof String | typeof Number, id : string | number };
}

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

export const ADAMANT_CONNECTION_FACTORY = new InjectionToken<ConnectionFactory>('ADAMANT_CONNECTION_FACTORY');
export const ADAMANT_ID = new InjectionToken<AdamantId>('ADAMANT_ID', {
    providedIn: 'root',
    factory: adamantIdFactory
});

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
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: AdamantConnectionManager, useValue: this },
                { provide: ADAMANT_ENTITY_CLASS, useValue: entityClass },
                { provide: ADAMANT_ENTITY_METADATA, useValue: this.getMetadata(entityClass), },
                { provide: ADAMANT_CONNECTION, useValue: this.getConnection(this.getMetadata(entityClass).name) },
                { provide: Hydrator, useExisting: this.getMetadata(entityClass).hydrator },
                { provide: Validator, useExisting: this.getMetadata(entityClass).validator },
                { provide: Bulk, deps: [ ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, Hydrator, Validator ] }
            ]
        }).get(AdamantRepository);
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
