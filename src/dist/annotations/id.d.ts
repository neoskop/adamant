import 'reflect-metadata';
import { PropertyMetadata, Type } from './property';
export declare enum IdStrategy {
    Static = "static"
}
export declare class IdMetadata extends PropertyMetadata {
    strategy: IdStrategy;
    readonly required: boolean;
}
export declare function Id(options?: {
    strategy?: IdStrategy;
    type?: Type;
}): PropertyDecorator;
