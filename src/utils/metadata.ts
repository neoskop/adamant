import 'reflect-metadata';

export interface Ctor<T extends {}> extends Function {
    new(...args : any[]) : T;
    prototype: T;
}

export const CLASS_METADATA = new WeakMap<Ctor<any>|Function, any[]>();
export const PROPERTY_METADATA = new WeakMap<Ctor<any>|Function, Map<string|symbol, any[]>>();

export function getClassMetadata<T = any>(target : Ctor<any>|Function, type? : Ctor<T>) : T[] {
    if(!CLASS_METADATA.has(target)) {
        return [];
    }
    
    return CLASS_METADATA.get(target)!.filter(a => !type || a instanceof type);
}

export function pushClassMetadata(target : Ctor<any>|Function, metadata : any) {
    if(!CLASS_METADATA.has(target)) {
        CLASS_METADATA.set(target, []);
    }
    CLASS_METADATA.get(target)!.push(metadata);
}

export function getPropertyMetadata<T = any>(target : any, property: string | symbol, type? : Ctor<any>) : T[] {
    if(!PROPERTY_METADATA.has(target) || !PROPERTY_METADATA.get(target)!.has(property)) {
        return [];
    }
    
    return PROPERTY_METADATA.get(target)!.get(property)!.filter(a => !type || a instanceof type);
}

export function getAllPropertyMetadata<T = any>(target : any) : Map<string|symbol, T[]> {
    if(!PROPERTY_METADATA.has(target)) {
        return new Map();
    }
    
    return PROPERTY_METADATA.get(target)!;
}

export function pushPropertyMetadata(target : any, property : string | symbol, metadata : any) {
    if(!PROPERTY_METADATA.has(target)) {
        PROPERTY_METADATA.set(target, new Map());
    }
    
    if(!PROPERTY_METADATA.get(target)!.has(property)) {
        PROPERTY_METADATA.get(target)!.set(property, []);
    }
    
    PROPERTY_METADATA.get(target)!.get(property)!.push(metadata);
}

export function populate<T>(target : T, source : Partial<T>) : T {
    for(const key of Object.keys(source) as (keyof T)[]) {
        target[key] = source[key] as T[keyof T];
    }
    
    return target;
}
