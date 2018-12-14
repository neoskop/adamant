import 'reflect-metadata';

export interface Ctor<T extends {}> extends Function {
    new (...args: any[]): T;
    prototype: T;
}

export const CLASS_METADATA_KEY = '__adamant_class_metadata';
export const PROPERTY_METADATA_KEY = '__adamant_property_metadata';

export function getClassMetadata<T = any>(target: Ctor<any> | Function, type?: Ctor<T>): T[] {
    if (!target.hasOwnProperty(CLASS_METADATA_KEY)) {
        return [];
    }

    return (target as any)[CLASS_METADATA_KEY]!.filter((a: Ctor<any>) => !type || a instanceof type);
}

export function pushClassMetadata(target: Ctor<any> | Function, metadata: any) {
    if (!target.hasOwnProperty(CLASS_METADATA_KEY)) {
        __prepare(target, CLASS_METADATA_KEY, []);
    }
    (target as any)[CLASS_METADATA_KEY]!.push(metadata);
}

export function getPropertyMetadata<T = any>(target: any, property: string | symbol, type?: Ctor<any>): T[] {
    if (!target.hasOwnProperty(PROPERTY_METADATA_KEY) || !target[PROPERTY_METADATA_KEY].has(property)) {
        return [];
    }

    return target[PROPERTY_METADATA_KEY].get(property)!.filter((a: Ctor<any>) => !type || a instanceof type);
}

export function getAllPropertyMetadata<T = any>(target: any): Map<string | symbol, T[]> {
    if (!target.hasOwnProperty(PROPERTY_METADATA_KEY)) {
        return new Map();
    }

    return target[PROPERTY_METADATA_KEY];
}

export function pushPropertyMetadata(target: any, property: string | symbol, metadata: any) {
    if (!target.hasOwnProperty(PROPERTY_METADATA_KEY)) {
        __prepare(target, PROPERTY_METADATA_KEY, new Map());
    }

    if (!target[PROPERTY_METADATA_KEY].has(property)) {
        target[PROPERTY_METADATA_KEY].set(property, []);
    }

    target[PROPERTY_METADATA_KEY].get(property)!.push(metadata);
}

function __prepare(target: object, key: string, value: any) {
    Object.defineProperty(target, key, { value });
}

export function populate<T>(target: T, source: Partial<T>): T {
    for (const key of Object.keys(source) as (keyof T)[]) {
        target[key] = source[key] as T[keyof T];
    }

    return target;
}
