import { Ctor } from '../utils/metadata';
import { PropertyMetadata } from './property';

export class RelationMetadata<T, D = T> extends PropertyMetadata<Ctor<T>, D> {
    // required!: boolean;
    // default?: any;
    // private _entity! : ForwardRefFn | Ctor<T>;

    // set type(type: Ctor<T> /*| ForwardRefFn */) {
    //     (this as any)._type = type;
    // }
    // get type(): Ctor<T> {
    //     return resolveForwardRef((this as any)._type);
    // }
}
