import { ForwardRefFn } from '../injector';
import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';
import { RelationMetadata } from './relation';

export class BelongsToMetadata<T> extends RelationMetadata<T> {
    // default?: T;
}

export function BelongsTo<T>(options: { type?: Ctor<T> | ForwardRefFn; required?: boolean; default?: T } = {}): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(
            target.constructor,
            property,
            populate(new BelongsToMetadata(), {
                type: Reflect.getMetadata('design:type', target, property),
                required: false,
                ...options
            })
        );
    };
}
