import { InjectionToken } from '@angular/core';

export interface AdamantInjectionToken<T> extends InjectionToken<T> {}

export interface StaticAdamantInjectionToken extends Function {
    new <T>(desc: string): AdamantInjectionToken<T>;
}

export const AdamantInjectionToken: StaticAdamantInjectionToken = InjectionToken;

// declare class AdamantInjectionToken<T> extends InjectionToken<T> {}
//
// export { AdamantInjectionToken };
//
// export function injectionTokenFactory() {
//     try {
//         const { InjectionToken } = require('@angular/core');
//         return InjectionToken;
//     } catch {
//         try {
//             const { InjectionToken } = require('injection-js');
//             return InjectionToken;
//         } catch {
//             throwMissingInjector();
//         }
//     }
// }
//
// Object.defineProperty(exports, 'AdamantInjectionToken', {
//     enumerable: true,
//     value: injectionTokenFactory()
// });

export function throwMissingInjector() {
    throw new Error('Dependency Injection implementation missing, provide "@angular/core" or "injection-js"');
}
