import { resolveForwardRef } from '../injector';
import { Ctor } from '../utils/metadata';
import { PropertyMetadata } from './property';

export class RelationMetadata<T> extends PropertyMetadata {
    required!: boolean;
    default?: T;
    // private _entity! : ForwardRefFn | Ctor<T>;
    
    set type(type : Ctor<T> /*| ForwardRefFn */) {
        (this as any)._type = type;
    }
    get type() : Ctor<T> {
        return resolveForwardRef((this as any)._type);
    }
    
}
