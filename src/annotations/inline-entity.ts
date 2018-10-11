import { Ctor, populate, pushClassMetadata } from '../utils/metadata';
import { Hydrator } from '../hydrator';
import { Validator } from '../validator';

export class InlineEntityMetadata {
    inline!: true;
    hydrator?: Ctor<Hydrator>;
    validator?: Ctor<Validator>;
}

export function InlineEntity(
    options: {
        hydrator?: Ctor<Hydrator>;
        validator?: Ctor<Validator>;
    } = {}
): ClassDecorator {
    return (target: Function) => {
        pushClassMetadata(
            target,
            populate(new InlineEntityMetadata(), {
                // hydrator: HydratorImpl,
                // validator: ValidatorImpl,
                ...options,
                inline: true
            })
        );
    };
}
