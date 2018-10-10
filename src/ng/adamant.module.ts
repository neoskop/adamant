import { InjectionToken, ModuleWithProviders, NgModule, Type } from '@angular/core';
import {
    ADAMANT_CONNECTION_FACTORY,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    AdamantConnectionManager,
    adamantIdFactory,
    ConnectionFactory,
    equalCheckerFactory
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
                AdamantConnectionManager,
                { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
                { provide: ADAMANT_ENTITIES, useValue: entities, multi: true },
                { provide: ADAMANT_DESIGN_DOCS, useFactory: designDocFactory, deps: designDocs, multi: true },
                { provide: ADAMANT_ID, useFactory: adamantIdFactory },
                { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory }
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
