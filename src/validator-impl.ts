import { Validator } from './validator';
import { Metadata } from './metadata';

export class ValidatorImpl extends Validator {
    async validate<T>(entity : T, metadata : Metadata<T>) : Promise<true> {
        for(const [ property, annotation ] of metadata.properties) {
            await annotation.validate(entity[property as keyof T], property);
        }
        
        return true;
    }
    
}
