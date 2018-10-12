import { populate, pushClassMetadata } from '../utils/metadata';
import { Hydrator } from '../hydrator';
import { Validator } from '../validator';
import { AdamantInjector } from '../injector';

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
