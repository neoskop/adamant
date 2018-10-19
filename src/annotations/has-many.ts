import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';
import { RelationMetadata } from './relation';

export class HasManyMetadata<T> extends RelationMetadata<T> {
    default?: T[];
}

export function HasMany<T>(type: Ctor<T> /*|ForwardRefFn*/, options: { required?: boolean; default?: T[] } = {}): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(
            target.constructor,
            property,
            populate(new HasManyMetadata(), {
                type,
                required: false,
                ...options
            })
        );
    };
}
