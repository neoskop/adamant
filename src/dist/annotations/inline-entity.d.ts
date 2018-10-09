import { Ctor } from '../utils/metadata';
import { Hydrator } from '../hydrator';
import { Validator } from '../validator';
export declare class InlineEntityMetadata {
    inline: true;
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}
export declare function InlineEntity(options?: {
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}): ClassDecorator;
