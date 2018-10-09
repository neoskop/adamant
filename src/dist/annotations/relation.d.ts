import { Ctor } from '../utils/metadata';
import { PropertyMetadata } from './property';
export declare class RelationMetadata<T> extends PropertyMetadata {
    required: boolean;
    default?: T;
    type: Ctor<T>;
}
