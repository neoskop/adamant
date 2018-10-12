import { Ctor, getAllPropertyMetadata, getClassMetadata } from './utils/metadata';
import { IdMetadata, IdStrategy } from './annotations/id';
import { PropertyMetadata } from './annotations/property';
import { EntityMetadata } from './annotations/entity';
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { BelongsToMetadata } from './annotations/belongs-to';
import { HasManyMetadata } from './annotations/has-many';
import { HasManyMapMetadata } from './annotations/has-many-map';
import { InlineMetadata } from './annotations/inline';
import { InlineEntityMetadata } from './annotations/inline-entity';
import { AdamantInjector } from './injector';

const ENTITY_METADATA_CACHE = new WeakMap<Ctor<any>, EntityMetadataCollection<any>>();

export class EntityMetadataCollection<T> {
    readonly inline: boolean = false;
    readonly name?: string;
    readonly attachments?: boolean;
    readonly hydrator!: (injector: AdamantInjector) => Hydrator<T>;
    readonly validator!: (injector: AdamantInjector) => Validator<T>;

    readonly id!: keyof T;
    readonly idType!: typeof String | typeof Number;
    readonly idStrategy!: IdStrategy;

    static create<E>(entity: Ctor<E>): EntityMetadataCollection<E> {
        if (!ENTITY_METADATA_CACHE.has(entity)) {
            ENTITY_METADATA_CACHE.set(entity, new EntityMetadataCollection<E>(entity));
        }

        return ENTITY_METADATA_CACHE.get(entity)!;
    }

    readonly properties = new Map<
        string | symbol,
        PropertyMetadata | IdMetadata | BelongsToMetadata<any> | HasManyMetadata<any> | HasManyMapMetadata<any> | InlineMetadata<any>
    >();
    // readonly belongsTo = new Map<string | symbol, BelongsToMetadata<any>>();
    // readonly hasMany = new Map<string | symbol, HasManyMetadata<any>>();
    // readonly hasManyMap = new Map<string | symbol, HasManyMapMetadata<any>>();

    private constructor(protected readonly entity: Ctor<T>) {
        this.parse();
        this.assert();
    }

    protected parse() {
        const classMetadata = getClassMetadata<EntityMetadata | InlineEntityMetadata>(this.entity);
        const propertyMetadata = getAllPropertyMetadata<IdMetadata>(this.entity);

        for (const annotation of classMetadata) {
            if (annotation instanceof EntityMetadata || annotation instanceof InlineEntityMetadata) {
                Object.assign(this, annotation);
            }
        }

        for (const [property, annotations] of propertyMetadata) {
            for (const annotation of annotations) {
                if (annotation instanceof IdMetadata) {
                    (this as any).id = property;
                    (this as any).idType = annotation.type;
                    (this as any).idStrategy = annotation.strategy;
                }

                // if(annotation instanceof BelongsToMetadata) {
                //     this.belongsTo.set(property, annotation);
                // }
                //
                // if(annotation instanceof HasManyMetadata) {
                //     this.hasMany.set(property, annotation);
                // }
                //
                // if(annotation instanceof HasManyMapMetadata) {
                //     this.hasManyMap.set(property, annotation);
                // }

                if (annotation instanceof PropertyMetadata) {
                    this.properties.set(property, annotation);
                }
            }
        }
    }

    protected assert() {
        for (const key of (this.inline ? [] : ['id', 'idStrategy', 'name', 'attachments']) as (keyof EntityMetadataCollection<T>)[]) {
            if (null == this[key]) {
                throw new Error(`Missing metadata '${key}' for entity "${this.entity.name}"`);
            }
        }
    }
}
