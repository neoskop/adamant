import { Ctor, populate, pushClassMetadata } from '../utils/metadata';
import { Hydrator } from '../hydrator';
import { Validator } from '../validator';

export class EntityMetadata {
    name!: string;
    attachments!: boolean;
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}

export function Entity(
    name: string,
    options: {
        attachments?: boolean;
        hydrator?: Ctor<Hydrator>;
        validator?: Ctor<Validator>;
    } = {}
): ClassDecorator {
    return (target: Function) => {
        pushClassMetadata(
            target,
            populate(new EntityMetadata(), {
                name,
                attachments: false,
                // hydrator: HydratorImpl,
                // validator: ValidatorImpl,
                ...options
            })
        );
    };
}
