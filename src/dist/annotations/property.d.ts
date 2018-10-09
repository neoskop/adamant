import { Ctor } from '../utils/metadata';
export declare type Type = typeof Boolean | typeof String | typeof Number | typeof Object | typeof Date | Ctor<any>;
export declare class PropertyMetadata {
    type: Type;
    required: boolean;
    default?: any;
    validate(value: any, key: string | symbol): void;
}
export declare function Property(options?: {
    type?: Type;
    required?: boolean;
    default?: any;
}): PropertyDecorator;
