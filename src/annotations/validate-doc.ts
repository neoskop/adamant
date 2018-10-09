import { populate, pushPropertyMetadata } from '../utils/metadata';


export class ValidateDocMetadata {}

export function ValidateDoc() : PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(target.constructor, property, populate(new ValidateDocMetadata(), {
        }))
    }
}
