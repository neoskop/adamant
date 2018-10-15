import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';
import { RelationMetadata } from './relation';

export class HasManyMapMetadata<T> extends RelationMetadata<T> {}

export function HasManyMap<T>(type: Ctor<T> /*|ForwardRefFn*/, options: { required?: boolean; default?: T } = {}): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(
            target.constructor,
            property,
            populate(new HasManyMapMetadata(), {
                type,
                required: false,
                ...options
            })
        );
    };
}
