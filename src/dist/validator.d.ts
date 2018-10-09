import { Metadata } from './metadata';
export declare abstract class Validator {
    abstract validate<T>(entity: T, _metadata: Metadata<T>): Promise<true>;
}
