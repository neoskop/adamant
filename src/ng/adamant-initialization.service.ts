import { AdamantConnectionManager, DesignDocMetadata, getClassMetadata, FilterMetadata, ValidateDocMetadata, ViewMetadata, getAllPropertyMetadata } from '@neoskop/adamant';
import { EventEmitter, Inject, Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ADAMANT_DESIGN_DOCS } from './injector-tokens';

export class AdamantEvent<T> {
    constructor(public readonly entity : Type<T>) {}
}

export class AdamantPersistDesignDocStart<T = any, D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D) {
        super(entity);
    }
}

export class AdamantPersistDesignDocEnd<T = any, D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D) {
        super(entity);
    }
}

export class AdamantPersistDesignDocError<T = any, D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D, public readonly error : any) {
        super(entity);
    }
}

export class AdamantWarmupViewStart<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D, public readonly view : K) {
        super(entity);
    }
}

export class AdamantWarmupViewEnd<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D, public readonly view : K) {
        super(entity);
    }
}

export class AdamantWarmupViewError<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    
    constructor(entity : Type<T>, public readonly designDoc : D, public readonly view : K, public readonly error : any) {
        super(entity);
    }
}

export class AdamantInitializationStart {}
export class AdamantInitializationEnd {}

export type AdamantInitializationEvent = AdamantPersistDesignDocStart<any, any>
    | AdamantPersistDesignDocEnd<any, any>
    | AdamantPersistDesignDocError<any, any>
    | AdamantWarmupViewStart<any, any, any>
    | AdamantWarmupViewEnd<any, any, any>
    | AdamantWarmupViewError<any, any, any>
    | AdamantInitializationStart
    | AdamantInitializationEnd

@Injectable()
export class AdamantInitializationService {
    protected readonly emitter = new EventEmitter<AdamantInitializationEvent>();
    readonly events : Observable<AdamantInitializationEvent> = this.emitter.asObservable();
    
    protected readonly designDocs : object[];
    
    constructor(@Inject(ADAMANT_DESIGN_DOCS) designDocs : any[][],
                protected readonly connectionManager : AdamantConnectionManager) {
        this.designDocs = flatten(designDocs);
    }
    
    async persist() : Promise<void> {
        for(const designDoc of this.designDocs) {
            const classAnnotations = getClassMetadata(designDoc.constructor, DesignDocMetadata);
    
            if(1 !== classAnnotations.length) {
                throw new Error(`Design doc annotation required`);
            }
            
            try {
                this.emitter.emit(new AdamantPersistDesignDocStart(classAnnotations[0].entity, designDoc));
                await this.connectionManager.getRepository(classAnnotations[ 0 ].entity).persistDesignDoc(designDoc);
                this.emitter.emit(new AdamantPersistDesignDocEnd(classAnnotations[0].entity, designDoc));
            } catch(e) {
                this.emitter.emit(new AdamantPersistDesignDocError(classAnnotations[0].entity, designDoc, e));
            }
        }
    }
    
    async warmup() : Promise<void> {
        for(const designDoc of this.designDocs) {
            const classAnnotations = getClassMetadata(designDoc.constructor, DesignDocMetadata);
        
            if(1 !== classAnnotations.length) {
                throw new Error(`Design doc annotation required`);
            }
    
            const propertyAnnotations = getAllPropertyMetadata<ViewMetadata | FilterMetadata | ValidateDocMetadata>(designDoc.constructor);
        
            for(const [ property, annotations ] of propertyAnnotations) {
                for(const annotation of annotations) {
                    if(annotation instanceof ViewMetadata) {
                        try {
                            this.emitter.emit(new AdamantWarmupViewStart(classAnnotations[ 0 ].entity, designDoc as any, property));
                            await this.connectionManager.getRepository(classAnnotations[ 0 ].entity).view<any, any>(designDoc.constructor as any, property);
                            this.emitter.emit(new AdamantWarmupViewEnd(classAnnotations[ 0 ].entity, designDoc as any, property));
                        } catch(e) {
                            this.emitter.emit(new AdamantWarmupViewError(classAnnotations[ 0 ].entity, designDoc as any, property, e));
                        }
                    }
                }
            }
        }
    }
    
    async initialize() : Promise<void> {
        this.emitter.emit(new AdamantInitializationStart());
        await this.persist();
        await this.warmup();
        this.emitter.emit(new AdamantInitializationEnd());
    }
}

function flatten<T>(arr : T[][]) : T[] {
    return arr.reduce((r, c) => r.concat(c), []);
}
