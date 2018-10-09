import { RelationMetadata } from './relation';
import { Ctor } from '../utils/metadata';
import { ForwardRefFn } from '@angular/core';
export declare class BelongsToMetadata<T> extends RelationMetadata<T> {
}
export declare function BelongsTo<T>(options?: {
    type?: Ctor<T> | ForwardRefFn;
    required?: boolean;
    default?: T;
}): PropertyDecorator;
