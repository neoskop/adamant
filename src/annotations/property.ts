import { ForwardRefFn, resolveForwardRef } from '../injector';
import { Ctor, populate, pushPropertyMetadata } from '../utils/metadata';

export type Type = typeof Boolean | typeof String | typeof Number | typeof Object | typeof Date | Ctor<any>;

export class PropertyMetadata<T = Type, D = any> {
    protected _type!: T | ForwardRefFn;
    protected _required!: boolean;
    protected _default?: D;

    get type(): T {
        return resolveForwardRef(this._type);
    }

    set type(type: T | ForwardRefFn) {
        this._type = type;
    }

    get required(): boolean {
        return this._required;
    }

    set required(required: boolean) {
        this._required = required;
    }

    get default(): any {
        return this._default;
    }

    set default(def: any) {
        this._default = def;
    }

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
