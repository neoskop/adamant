import { EntityMetadataCollection } from './metadata';
import { Validator } from './validator';

export class ValidatorImpl<T> extends Validator<T> {
    constructor(protected readonly metadata: EntityMetadataCollection<T>) {
        super();
    }

    async validate(entity: T): Promise<true> {
        for (const [property, annotation] of this.metadata.properties) {
            await annotation.validate(entity[property as keyof T], property);
        }

        return true;
    }
}

// export const ADAMANT_VALIDATOR_IMPL_PROVIDER = {
//     provide: ValidatorImpl,
//     useFactory() {
//         return new ValidatorImpl();
//     },
//     deps: []
// };
