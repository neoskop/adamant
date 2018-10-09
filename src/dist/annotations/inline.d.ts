import { RelationMetadata } from './relation';
import { Ctor } from '../utils/metadata';
import { ForwardRefFn } from '@angular/core';
export declare class InlineMetadata<T> extends RelationMetadata<T> {
}
export declare function Inline<T>(options?: {
    type?: Ctor<T> | ForwardRefFn;
    required?: boolean;
    default?: T;
}): PropertyDecorator;
