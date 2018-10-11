import { populate, pushPropertyMetadata } from '../utils/metadata';
import 'reflect-metadata';
import { PropertyMetadata, Type } from './property';

export enum IdStrategy {
    Static = 'static'
    // Uuid = 'uuid',
    // Increment = 'increment'
}

export class IdMetadata extends PropertyMetadata {
    strategy!: IdStrategy;
    readonly required = true;
}

export function Id(options: { strategy?: IdStrategy; type?: Type } = {}): PropertyDecorator {
    return (target: Object, property: string | symbol) => {
        pushPropertyMetadata(
            target.constructor,
            property,
            populate(new IdMetadata(), {
                strategy: IdStrategy.Static,
                type: Reflect.getMetadata('design:type', target, property),
                ...options
            })
        );
    };
}
