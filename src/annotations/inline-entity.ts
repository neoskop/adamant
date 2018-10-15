import { Hydrator } from '../hydrator';
import { AdamantInjector } from '../injector';
import { populate, pushClassMetadata } from '../utils/metadata';
import { Validator } from '../validator';

export class InlineEntityMetadata {
    inline!: true;
    hydrator?: (injector: AdamantInjector) => Hydrator<any>;
    validator?: (injector: AdamantInjector) => Validator<any>;
}

export function InlineEntity(
    options: {
        hydrator?: (injector: AdamantInjector) => Hydrator<any>;
        validator?: (injector: AdamantInjector) => Validator<any>;
    } = {}
): ClassDecorator {
    return (target: Function) => {
        pushClassMetadata(
            target,
            populate(new InlineEntityMetadata(), {
                ...options,
                inline: true
            })
        );
    };
}
