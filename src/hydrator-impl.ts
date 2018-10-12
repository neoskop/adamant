import { PropertyMetadata, Type } from './annotations/property';
import { InlineMetadata } from './annotations/inline';
import { HasManyMapMetadata } from './annotations/has-many-map';
import { markIdRev } from './utils/marks';
import { HydrateOptions, Hydrator } from './hydrator';
import { AdamantRepository } from './repository';
import { RelationMetadata } from './annotations/relation';
import { AdamantConnectionManager } from './connection-manager';
import { HasManyMetadata } from './annotations/has-many';
import { EntityMetadataCollection } from './metadata';
import { BelongsToMetadata } from './annotations/belongs-to';
import { IdMetadata, IdStrategy } from './annotations/id';
import { AdamantId } from './injector-tokens';
import { AdamantEntityMeta, AdamantRevMeta } from './meta-interfaces';
import { uuid } from './utils/uuid';

export class HydratorImpl<T> extends Hydrator<T> {
    constructor(
        protected readonly id: AdamantId,
        protected readonly metadata: EntityMetadataCollection<T>,
        protected readonly connectionManager: AdamantConnectionManager
    ) {
        super();
    }

    dehydrate(
        entity: T & AdamantEntityMeta,
        options?: { includeRev?: boolean }
    ): PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta> {
        const doc: any = {};

        if (options && options.includeRev) {
            doc._rev = entity._rev;
        }

        if (this.metadata.attachments && entity._attachments) {
            doc._attachments = entity._attachments;
        }

        for (const [property, annotation] of this.metadata.properties) {
            let value: any = entity[property as keyof T];
            /* instanbul ignore else */
            if (annotation instanceof RelationMetadata) {
                if (value != null) {
                    const relationMetadata = this.connectionManager.getMetadata(annotation.type);

                    /* istanbul ignore else */
                    if (annotation instanceof BelongsToMetadata) {
                        doc[property] = relationToId(value, relationMetadata, this.id);
                    } else if (annotation instanceof HasManyMetadata) {
                        doc[property] = (value as any[]).map(rel => relationToId(rel, relationMetadata, this.id));
                    } else if (annotation instanceof HasManyMapMetadata) {
                        const rel: any = {};
                        for (const key in value) {
                            rel[key] = relationToId(value[key], relationMetadata, this.id);
                        }
                        doc[property] = rel;
                    } else if (annotation instanceof InlineMetadata) {
                        doc[property] = this.connectionManager.getRepository(annotation.type).hydrator.dehydrate(value);
                    }
                }
            } else if (annotation instanceof PropertyMetadata) {
                if (annotation instanceof IdMetadata) {
                    if (!value && annotation.strategy === IdStrategy.Uuid) {
                        entity[property as keyof T] = value = uuid() as any;
                    }
                    doc._id = this.id.build(this.metadata.name!, this.metadata.idType, value as any);
                }
                if (undefined === value && undefined !== annotation.default) {
                    entity[property as keyof T] = value = annotation.default as any;
                }
                doc[property] = value;
            }

            if (undefined === doc[property]) {
                delete doc[property];
            }
        }

        return doc as PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
    }

    async hydrate(
        entity: T,
        data: PouchDB.Core.Document<T> & Partial<PouchDB.Core.GetMeta>,
        { depth = Infinity, circularCache = {} }: HydrateOptions = {}
    ): Promise<T & AdamantRevMeta> {
        if (data._id in circularCache) {
            return circularCache[data._id];
        }

        circularCache[data._id] = entity;

        markIdRev(entity, { id: data._id, rev: data._rev });

        if (this.metadata.attachments) {
            Object.defineProperty(entity, '_attachments', { configurable: true, value: data._attachments });
        }

        for (const [property, annotation] of this.metadata.properties) {
            const value: any = data[property as keyof T];
            if (null == value) {
                entity[property as keyof T] = null!;
            } else {
                /* istanbul ignore else */
                if (annotation instanceof RelationMetadata) {
                    const relationRepository = this.connectionManager.getRepository(annotation.type);

                    /* istanbul ignore else */
                    if (annotation instanceof BelongsToMetadata) {
                        entity[property as keyof T] = circularCache.hasOwnProperty(value)
                            ? circularCache[value]
                            : await relationRepository._read(value, {
                                  depth: depth - 1,
                                  circularCache
                              });
                    } else if (annotation instanceof HasManyMetadata) {
                        entity[property as keyof T] = (await readAllWithCircularCache(
                            relationRepository,
                            value,
                            depth - 1,
                            circularCache
                        )) as any;
                    } else if (annotation instanceof HasManyMapMetadata) {
                        const keys = Object.keys(value);
                        const values = keys.map(k => value[k]);

                        const entities = await readAllWithCircularCache(relationRepository, values, depth - 1, circularCache);
                        const rel: any = {};
                        for (const key of keys) {
                            rel[key] = entities.find(e => e._id === value[key]);
                        }
                        entity[property as keyof T] = rel;
                    } else if (annotation instanceof InlineMetadata) {
                        entity[property as keyof T] = await relationRepository.hydrator.hydrate(relationRepository.build(), value);
                    }
                } else if (annotation instanceof PropertyMetadata) {
                    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entity), property);
                    if (!descriptor || descriptor.writable || descriptor.set) {
                        entity[property as keyof T] = unpack(value, annotation.type);
                    }
                }
            }
        }

        return entity as T & AdamantRevMeta;
    }
}

async function readAllWithCircularCache<T>(
    repo: AdamantRepository<T>,
    keys: string[],
    depth: number,
    circularCache: { [key: string]: any }
): Promise<T[]> {
    const filteredKeys = keys.filter(k => !circularCache.hasOwnProperty(k));
    let fromDb: T[];

    if (filteredKeys.length) {
        fromDb = await repo._readAll({ keys: filteredKeys, include_docs: true }, { depth, circularCache });
    }

    return keys.map(key => {
        if (circularCache.hasOwnProperty(key)) {
            return circularCache[key];
        }

        return fromDb && fromDb.find(e => (e as any)._id === key);
    });
}

function relationToId<T>(rel: string | T, metadata: EntityMetadataCollection<T>, id: AdamantId): string {
    return typeof rel === 'string' ? rel : id.build(metadata.name!, metadata.idType, rel[metadata.id] as any);
}

function unpack(value: any, type: Type): any {
    if (type === Date && value) {
        return new Date(value);
    }

    return value;
}
