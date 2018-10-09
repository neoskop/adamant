import { Ctor } from '../utils/metadata';
import { Hydrator } from '../hydrator';
import { Validator } from '../validator';
export declare class EntityMetadata {
    name: string;
    attachments: boolean;
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}
export declare function Entity(name: string, options?: {
    attachments?: boolean;
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}): ClassDecorator;
