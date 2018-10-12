import { Ctor, populate, pushClassMetadata } from '../utils/metadata';

export class DesignDocMetadata<T> {
    entity!: Ctor<T>;
    name?: string;
}

declare global {
    export const emit: any;
}

export function DesignDoc<T>(entity: Ctor<T>, name?: string): ClassDecorator {
    return (target: Function) => {
        pushClassMetadata(
            target,
            populate(new DesignDocMetadata<T>(), {
                entity,
                name
            })
        );
    };
}
