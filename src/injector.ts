import { Type } from './type';
import { AdamantInjectionToken, throwMissingInjector } from './injection';

export const ADAMANT_INJECTOR = new AdamantInjectionToken<AdamantInjector>('ADAMANT_INJECTOR');
export const ADAMANT_INJECTOR_FACTORY = new AdamantInjectionToken<() => AdamantInjector>('ADAMANT_INJECTOR_FACTORY');

export interface ForwardRefFn {
    (): any;
    __forward_ref__?: typeof forwardRef;
}

export function forwardRef(forwardRefFn: ForwardRefFn): any {
    forwardRefFn.__forward_ref__ = forwardRef;

    return forwardRefFn;
}

export function resolveForwardRef(type: any) {
    if (typeof type === 'function' && type.hasOwnProperty('__forward_ref__') && (type as ForwardRefFn).__forward_ref__ === forwardRef) {
        return type();
    } else {
        return type;
    }
}

export interface AdamantInjector {
    get<T>(token: Type<T> | AdamantInjectionToken<T>): T;
}

export type InjectorFactory = (options: { providers: any[]; parent?: any }) => AdamantInjector;

let injectorFactory: InjectorFactory | null | false = null;

export function setInjectorFactory(factory: InjectorFactory | false | null) {
    injectorFactory = factory;
}

export async function createInjector(options: { providers: any[]; parent?: any }): Promise<AdamantInjector> {
    if (injectorFactory) {
        return injectorFactory(options);
    } else if (false === injectorFactory) {
        throw throwMissingInjector();
    }

    try {
        const { Injector } = await new Function("return import('@angular/core')")();
        const injector = createAngularInjector(Injector, options);
        setInjectorFactory(createAngularInjector.bind(null, Injector));
        return injector;
    } catch {
        try {
            const injector = createInjectionJsInjector(options);
            setInjectorFactory(createInjectionJsInjector);
            return injector;
        } catch {
            setInjectorFactory(false);
            throw throwMissingInjector();
        }
    }
}


export function createAngularInjector(Injector: typeof import('@angular/core').Injector, { providers, parent }: { providers: any[]; parent?: any }): AdamantInjector {
    return Injector.create({
        parent,
        providers: [
            ...providers,
            { provide: ADAMANT_INJECTOR, useExisting: Injector },
            { provide: ADAMANT_INJECTOR_FACTORY, useValue: createAngularInjector.bind(null, Injector) },
        ],
    });
}

export function createInjectionJsInjector({ providers, parent }: { providers: any[]; parent?: any }): AdamantInjector {
    const { Injector, ReflectiveInjector } = require('injection-js');
    return ReflectiveInjector.resolveAndCreate(
        [
            ...providers,
            { provide: ADAMANT_INJECTOR, useExisting: Injector },
            { provide: ADAMANT_INJECTOR_FACTORY, useValue: createInjectionJsInjector },
        ],
        parent
    );
}
