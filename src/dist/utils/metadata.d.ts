import 'reflect-metadata';
export declare type Ctor<T> = Function | {
    new (...args: any[]): T;
    prototype: T;
};
export declare const CLASS_METADATA: WeakMap<Ctor<any>, any[]>;
export declare const PROPERTY_METADATA: WeakMap<Ctor<any>, Map<string | symbol, any[]>>;
export declare function getClassMetadata<T = any>(target: Ctor<any>, type?: Ctor<T>): T[];
export declare function pushClassMetadata(target: Ctor<any>, metadata: any): void;
export declare function getPropertyMetadata<T = any>(target: any, property: string | symbol, type?: Ctor<any>): T[];
export declare function getAllPropertyMetadata<T = any>(target: any): Map<string | symbol, T[]>;
export declare function pushPropertyMetadata(target: any, property: string | symbol, metadata: any): void;
export declare function populate<T>(target: T, source: Partial<T>): T;
