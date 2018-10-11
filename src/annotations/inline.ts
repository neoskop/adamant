import { RelationMetadata } from './relation';
import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';

export class InlineMetadata<T> extends RelationMetadata<T> {}

export function Inline<T>(options: { type?: Ctor<T>/*|ForwardRefFn*/, required?: boolean, default?: T } = {}) : PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(target.constructor, property, populate(new InlineMetadata(), {
            type: Reflect.getMetadata('design:type', target, property),
            required: false,
            ...options
        }))
    }
}
