import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';

export type Type = typeof Boolean | typeof String | typeof Number | typeof Object | typeof Date | Ctor<any>;

export class PropertyMetadata {
    type!: Type;
    required!: boolean;
    default?: any;

    validate(value: any, key: string | symbol) {
        if (this.required && null == value) {
            throw new Error(`Property "${typeof key === 'symbol' ? Symbol.keyFor(key) : key}" required`);
        }
    }
}

export function Property(options: { type?: Type; required?: boolean; default?: any } = {}): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(
            target.constructor,
            property,
            populate(new PropertyMetadata(), {
                type: Reflect.getMetadata('design:type', target, property),
                required: false,
                ...options
            })
        );
    };
}
