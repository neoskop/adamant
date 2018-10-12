import { populate, pushPropertyMetadata } from '../utils/metadata';

export class FilterMetadata {}

export function Filter(): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(target.constructor, property, populate(new FilterMetadata(), {}));
    };
}
