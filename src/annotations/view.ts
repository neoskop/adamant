import { populate, pushPropertyMetadata } from '../utils/metadata';

export class ViewMetadata {}

export function View(): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(target.constructor, property, populate(new ViewMetadata(), {}));
    };
}
