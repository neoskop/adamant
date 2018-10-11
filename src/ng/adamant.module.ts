import { InjectionToken, Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import {
    ADAMANT_CONNECTION_FACTORY,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    AdamantConnectionManager,
    adamantIdFactory,
    ConnectionFactory,
    equalCheckerFactory,
    ADAMANT_INJECTOR, ADAMANT_INJECTOR_FACTORY, createAngularInjector, HydratorImpl, ValidatorImpl
} from '@neoskop/adamant';

export interface AdamantModuleFeatureConfiguration {
    entities : Type<any>[];
    designDocs? : Type<any>[];
}

export interface AdamantModuleRootConfiguration extends AdamantModuleFeatureConfiguration {
    factory : ConnectionFactory
}

export const ADAMANT_ENTITIES = new InjectionToken<Type<any>[][]>('ADAMANT_ENTITIES');
export const ADAMANT_DESIGN_DOCS = new InjectionToken<any[][]>('ADAMANT_DESIGN_DOCS');

/** @internal */
export function designDocFactory(...designDocs : any[]) {
    return designDocs;
}

@NgModule()
export class AdamantModule {
    static forRoot({ factory, entities, designDocs = [] } : AdamantModuleRootConfiguration) : ModuleWithProviders {
        return {
            ngModule : AdamantModule,
            providers: [
                designDocs,
                { provide: AdamantConnectionManager, useClass: AdamantConnectionManager, deps: [ ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, ADAMANT_INJECTOR, ADAMANT_INJECTOR_FACTORY ] },
                { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
                { provide: ADAMANT_ENTITIES, useValue: entities, multi: true },
                { provide: ADAMANT_DESIGN_DOCS, useFactory: designDocFactory, deps: designDocs, multi: true },
                { provide: ADAMANT_ID, useFactory: adamantIdFactory },
                { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory },
                { provide: HydratorImpl, useClass: HydratorImpl, deps: [ ADAMANT_ID, AdamantConnectionManager] },
                { provide: ValidatorImpl, useClass: ValidatorImpl, deps: [] },
                { provide: ADAMANT_INJECTOR, useExisting: Injector },
                { provide: ADAMANT_INJECTOR_FACTORY, useValue: createAngularInjector }
            ]
        }
    }
    
    static forFeature({ entities, designDocs = [] } : AdamantModuleFeatureConfiguration) : ModuleWithProviders {
        return {
            ngModule : AdamantModule,
            providers: [
                designDocs,
                { provide: ADAMANT_ENTITIES, useValue: entities, multi: true },
                { provide: ADAMANT_DESIGN_DOCS, useFactory: designDocFactory, deps: designDocs, multi: true },
            ]
        }
    }
}
