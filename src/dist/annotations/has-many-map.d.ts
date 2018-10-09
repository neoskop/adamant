import { RelationMetadata } from './relation';
import { Ctor } from '../utils/metadata';
import { ForwardRefFn } from '@angular/core';
export declare class HasManyMapMetadata<T> extends RelationMetadata<T> {
}
export declare function HasManyMap<T>(type: Ctor<T> | ForwardRefFn, options?: {
    required?: boolean;
    default?: T;
}): PropertyDecorator;
