import { Type } from '@angular/core';
import { AdamantInjectionToken, throwMissingInjector } from './injection';

export const ADAMANT_INJECTOR = new AdamantInjectionToken<AdamantInjector>('ADAMANT_INJECTOR');
export const ADAMANT_INJECTOR_FACTORY = new AdamantInjectionToken<Function>('ADAMANT_INJECTOR_FACTORY');

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

let injectorFactory: Function | null | false = null;

export function setInjectorFactory(factory: Function | false | null) {
    injectorFactory = factory;
}

export function createInjector(options: { providers: any[]; parent?: any }): AdamantInjector {
    if (injectorFactory) {
        return injectorFactory(options);
    } else if (false === injectorFactory) {
        throw throwMissingInjector();
    }

    try {
        const injector = createAngularInjector(options);
        setInjectorFactory(createAngularInjector);
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

export function createAngularInjector({ providers, parent }: { providers: any[]; parent?: any }) {
    const { Injector } = require('@angular/core');
    return Injector.create({
        parent,
        providers: [
            ...providers,
            { provide: ADAMANT_INJECTOR, useExisting: Injector },
            { provide: ADAMANT_INJECTOR_FACTORY, useValue: createAngularInjector }
        ]
    });
}
export function createInjectionJsInjector({ providers, parent }: { providers: any[]; parent?: any }) {
    const { Injector, ReflectiveInjector } = require('injection-js');
    return ReflectiveInjector.resolveAndCreate(
        [
            ...providers,
            { provide: ADAMANT_INJECTOR, useExisting: Injector },
            { provide: ADAMANT_INJECTOR_FACTORY, useValue: createInjectionJsInjector }
        ],
        parent
    );
}
