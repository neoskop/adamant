import { Ctor, populate, pushClassMetadata } from '../utils/metadata';
import { Hydrator, HydratorImpl } from '../hydrator';
import { Validator, ValidatorImpl } from '../validator';

export class InlineEntityMetadata {
    inline!: true;
    hydrator!: Ctor<Hydrator>;
    validator!: Ctor<Validator>;
}

export function InlineEntity(options: {
    hydrator?: Ctor<any>;
    validator?: Ctor<any>;
} = {}) : ClassDecorator {
    return (target : Function) => {
        pushClassMetadata(target, populate(new InlineEntityMetadata(), {
            hydrator: HydratorImpl,
            validator: ValidatorImpl,
            ...options,
            inline: true
        }));
    }
}
