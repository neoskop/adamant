import { Ctor } from './utils/metadata';
import { IdMetadata, IdStrategy } from './annotations/id';
import { PropertyMetadata } from './annotations/property';
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { BelongsToMetadata } from './annotations/belongs-to';
import { HasManyMetadata } from './annotations/has-many';
import { HasManyMapMetadata } from './annotations/has-many-map';
import { InlineMetadata } from './annotations/inline';
export declare class Metadata<T> {
    protected readonly entity: Ctor<T>;
    readonly inline: boolean;
    readonly name?: string;
    readonly attachments?: boolean;
    readonly hydrator: Ctor<Hydrator>;
    readonly validator: Ctor<Validator>;
    readonly id: keyof T;
    readonly idType: typeof String | typeof Number;
    readonly idStrategy: IdStrategy;
    readonly properties: Map<string | symbol, PropertyMetadata | IdMetadata | BelongsToMetadata<any> | HasManyMetadata<any> | HasManyMapMetadata<any> | InlineMetadata<any>>;
    constructor(entity: Ctor<T>);
    protected parse(): void;
    protected assert(): void;
}
