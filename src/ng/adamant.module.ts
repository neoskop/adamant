import { Inject, Injector, ModuleWithProviders, NgModule, Type } from '@angular/core';
import {
    ADAMANT_CONNECTION_FACTORY,
    ADAMANT_CONNECTION_MANAGER_PROVIDER,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    ADAMANT_INJECTOR,
    ADAMANT_INJECTOR_FACTORY,
    AdamantConnectionManager,
    adamantIdFactory,
    ConnectionFactory,
    createAngularInjector,
    equalCheckerFactory
} from '@neoskop/adamant';
import { AdamantInitializationService } from './adamant-initialization.service';
import { ADAMANT_DESIGN_DOCS, ADAMANT_ENTITIES, ADAMANT_INIT_ON_STARTUP } from './injector-tokens';

export interface AdamantModuleFeatureConfiguration {
    entities: Type<any>[];
    designDocs?: Type<any>[];
}

export interface AdamantModuleRootConfiguration extends AdamantModuleFeatureConfiguration {
    initOnStartup?: boolean;
    factory: ConnectionFactory;
}

/** @internal */
export function designDocFactory(...designDocs: any[]) {
    return designDocs;
}

@NgModule()
export class AdamantModule {
    static forRoot({ initOnStartup = true, factory, entities, designDocs }: AdamantModuleRootConfiguration): ModuleWithProviders {
        return {
            ngModule: AdamantModule,
            providers: [
                designDocs || [],
                ADAMANT_CONNECTION_MANAGER_PROVIDER,
                { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
                { provide: ADAMANT_ENTITIES, useValue: entities, multi: true },
                { provide: ADAMANT_DESIGN_DOCS, useFactory: designDocFactory, deps: designDocs || [], multi: true },
                { provide: ADAMANT_ID, useFactory: adamantIdFactory },
                { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory },
                { provide: ADAMANT_INJECTOR, useExisting: Injector },
                { provide: ADAMANT_INJECTOR_FACTORY, useValue: createAngularInjector },
                { provide: ADAMANT_INIT_ON_STARTUP, useValue: initOnStartup },
                {
                    provide: AdamantInitializationService,
                    useClass: AdamantInitializationService,
                    deps: [ADAMANT_DESIGN_DOCS, AdamantConnectionManager]
                }
            ]
        };
    }

    static forFeature({ entities, designDocs }: AdamantModuleFeatureConfiguration): ModuleWithProviders {
        return {
            ngModule: AdamantModule,
            providers: [
                designDocs || [],
                { provide: ADAMANT_ENTITIES, useValue: entities, multi: true },
                { provide: ADAMANT_DESIGN_DOCS, useFactory: designDocFactory, deps: designDocs || [], multi: true }
            ]
        };
    }

    constructor(initService: AdamantInitializationService, @Inject(ADAMANT_INIT_ON_STARTUP) initOnStartup: boolean) {
        if (initOnStartup) {
            Promise.resolve()
                .then(() => initService.initialize())
                .catch(err => console.error(err));
        }
    }
}
