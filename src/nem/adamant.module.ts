import { Inject, Injector, Type } from '@angular/core';
import {
    ADAMANT_CONNECTION_FACTORY,
    ADAMANT_CONNECTION_MANAGER_PROVIDER,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    ADAMANT_INJECTOR,
    ADAMANT_INJECTOR_FACTORY,
    adamantIdFactory,
    ConnectionFactory,
    createAngularInjector,
    equalCheckerFactory
} from '@neoskop/adamant';
import { NemModule, NemModuleWithProviders } from '@neoskop/nem';
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

@NemModule()
export class AdamantModule {
    static forRoot(options: AdamantModuleRootConfiguration): NemModuleWithProviders {
        return {
            nemModule: AdamantRootModule,
            providers: [
                options.designDocs || [],
                {
                    provide: ADAMANT_CONNECTION_FACTORY,
                    useValue: options.factory
                },
                { provide: ADAMANT_ENTITIES, useValue: options.entities, multi: true },
                ADAMANT_CONNECTION_MANAGER_PROVIDER,
                { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
                { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] },
                {
                    provide: ADAMANT_DESIGN_DOCS,
                    useFactory: designDocFactory,
                    deps: options.designDocs || [],
                    multi: true
                },
                { provide: ADAMANT_INJECTOR, useExisting: Injector },
                { provide: ADAMANT_INJECTOR_FACTORY, useValue: createAngularInjector },
                { provide: ADAMANT_INIT_ON_STARTUP, useValue: options.initOnStartup !== false },
                AdamantInitializationService
            ]
        };
    }

    static forFeature(options: AdamantModuleFeatureConfiguration): NemModuleWithProviders {
        return {
            nemModule: AdamantModule,
            providers: [
                options.designDocs || [],
                { provide: ADAMANT_ENTITIES, useValue: options.entities, multi: true },
                {
                    provide: ADAMANT_DESIGN_DOCS,
                    useFactory: designDocFactory,
                    deps: options.designDocs || [],
                    multi: true
                }
            ]
        };
    }
}

@NemModule()
export class AdamantRootModule {
    constructor(initService: AdamantInitializationService, @Inject(ADAMANT_INIT_ON_STARTUP) initOnStartup: boolean) {
        if (initOnStartup) {
            Promise.resolve()
                .then(() => initService.initialize())
                .catch(err => console.error(err));
        }
    }
}
