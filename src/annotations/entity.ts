import { Ctor, populate, pushClassMetadata } from '../utils/metadata';
import { Hydrator, HydratorImpl } from '../hydrator';
import { Validator, ValidatorImpl } from '../validator';

export class EntityMetadata {
    name!: string;
    attachments!: boolean;
    hydrator!: Ctor<Hydrator>;
    validator!: Ctor<Validator>;
}

export function Entity(name : string, options: {
    attachments?: boolean;
    hydrator?: Ctor<any>;
    validator?: Ctor<any>;
} = {}) : ClassDecorator {
    return (target : Function) => {
        pushClassMetadata(target, populate(new EntityMetadata(), {
            name,
            attachments: false,
            hydrator: HydratorImpl,
            validator: ValidatorImpl,
            ...options
        }));
    }
}
