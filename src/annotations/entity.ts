import { Hydrator } from '../hydrator';
import { AdamantInjector } from '../injector';
import { populate, pushClassMetadata } from '../utils/metadata';
import { Validator } from '../validator';

export class EntityMetadata {
    name!: string;
    attachments!: boolean;
    hydrator?: (injector: AdamantInjector) => Hydrator<any>;
    validator?: (injector: AdamantInjector) => Validator<any>;
}

export function Entity(
    name: string,
    options: {
        attachments?: boolean;
        hydrator?: (injector: AdamantInjector) => Hydrator<any>;
        validator?: (injector: AdamantInjector) => Validator<any>;
    } = {}
): ClassDecorator {
    return (target: Function) => {
        pushClassMetadata(
            target,
            populate(new EntityMetadata(), {
                name,
                attachments: false,
                ...options
            })
        );
    };
}
