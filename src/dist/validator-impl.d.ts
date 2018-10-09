import { Validator } from './validator';
import { Metadata } from './metadata';
export declare class ValidatorImpl extends Validator {
    validate<T>(entity: T, metadata: Metadata<T>): Promise<true>;
}
