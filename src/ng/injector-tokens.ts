import { InjectionToken, Type } from '@angular/core';

export const ADAMANT_ENTITIES = new InjectionToken<Type<any>[][]>('ADAMANT_ENTITIES');
export const ADAMANT_DESIGN_DOCS = new InjectionToken<any[][]>('ADAMANT_DESIGN_DOCS');
export const ADAMANT_INIT_ON_STARTUP = new InjectionToken<boolean>('ADAMANT_INIT_ON_STARTUP');
