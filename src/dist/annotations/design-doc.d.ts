import { Ctor } from '../utils/metadata';
export declare class DesignDocMetadata<T> {
    entity: Ctor<T>;
    name: string;
}
declare global {
    const emit: any;
}
export declare function DesignDoc<T>(entity: Ctor<T>, name: string): ClassDecorator;
