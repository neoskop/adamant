import { Observable, Subscriber } from 'rxjs';

import { Bulk } from './bulk';
import { HydrateOptions, Hydrator } from './hydrator';
import {
    ADAMANT_CONNECTION,
    ADAMANT_ENTITY_CLASS,
    ADAMANT_ENTITY_METADATA,
    ADAMANT_EQUAL_CHECKER,
    ADAMANT_ID,
    AdamantId,
    EqualChecker
} from './injector-tokens';
import { AdamantDeletedMeta, AdamantEntityMeta, AdamantRevMeta } from './meta-interfaces';
import { DesignDocMetadataCollection, EntityMetadataCollection } from './metadata';
import { QueryBuilder } from './query-builder';
import { ReadQueryBatcher } from './read-query-batcher';
import { markDeleted, markIdRev } from './utils/marks';
import { Ctor, populate } from './utils/metadata';
import { Validator } from './validator';

export class AdamantRepository<T extends {}> {
    readonly id = {
        head: () => {
            return this.adamantId.head(this.metadata.name!);
        },
        tail: () => {
            return this.adamantId.tail(this.metadata.name!);
        },
        build: (id: string | number) => {
            return this.adamantId.build(this.metadata.name!, this.metadata.idType, id);
        },
        parse: (id: string) => this.adamantId.parse(id)
    };

    protected readonly queryBatcher = new ReadQueryBatcher(this.db);

    constructor(
        protected readonly db: PouchDB.Database<T>,
        protected readonly entityClass: Ctor<T>,
        protected readonly metadata: EntityMetadataCollection<T>,
        protected readonly equal: EqualChecker,
        protected readonly adamantId: AdamantId,
        public readonly bulk: Bulk<T>,
        public readonly hydrator: Hydrator<T>,
        public readonly validator: Validator<T>
    ) {}

    getConnection(): PouchDB.Database<T> {
        return this.db;
    }

    async create(entity: T): Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity);

        const doc = this.hydrator.dehydrate(entity);

        const result = await this.db.put(doc);

        markIdRev(entity, result);

        return entity as T & AdamantRevMeta;
    }

    async upsert(entity: T): Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity);

        const doc = this.hydrator.dehydrate(entity);

        const result = await this._upsert(this.id.build(entity[this.metadata.id] as any), doc);

        markIdRev(entity, result);

        return entity as T & AdamantRevMeta;
    }

    /** @internal */
    _upsert(id: string, document: PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>): Promise<PouchDB.UpsertResponse> {
        return this.db.upsert(id, existingDoc => {
            const { _id: _1, _rev: _2, ...d1 } = document as any;
            const { _id: _3, _rev: _4, ...d2 } = existingDoc as any;

            if (this.equal(d1, d2)) {
                return false;
            }

            return document;
        });
    }

    async update(entity: T): Promise<T & AdamantRevMeta> {
        await this.validator.validate(entity);

        const doc = this.hydrator.dehydrate(entity, { includeRev: true });

        const result = await this.db.put(doc);

        markIdRev(entity, result);

        return entity as T & AdamantRevMeta;
    }

    async delete(entity: T): Promise<T & AdamantRevMeta & AdamantDeletedMeta> {
        await this.validator.validate(entity);

        const doc: PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta> & PouchDB.Core.ChangesMeta = this.hydrator.dehydrate(
            entity,
            { includeRev: true }
        );

        doc._deleted = true;

        const result = await this.db.put(doc);

        markIdRev(entity, result);
        markDeleted(entity);

        return entity as T & AdamantRevMeta & AdamantDeletedMeta;
    }

    read(id: number | string, options?: HydrateOptions): Promise<T & AdamantRevMeta> {
        return this._read(this.id.build(id), options);
    }

    /** @internal */
    async _read(id: string, options?: HydrateOptions): Promise<T & AdamantRevMeta> {
        return this.hydrator.hydrate(Object.create(this.entityClass.prototype), await this._readRaw(id), options);
    }

    /** @internal */
    async _readRaw(id: string): Promise<PouchDB.Core.Document<T>> {
        const result = await this.queryBatcher.read<T>([id]);
        if (!result[0]) {
            throw {
                status: 404,
                name: 'not_found',
                message: 'missing',
                reason: 'missing',
                id
            };
        }

        return result[0];
    }

    async readAll(ids?: (string | number)[], options?: HydrateOptions): Promise<(T & AdamantRevMeta)[]> {
        const opt: PouchDB.Core.AllDocsWithKeysOptions & PouchDB.Core.AllDocsWithinRangeOptions = {
            include_docs: true
        } as any;

        if (ids) {
            opt.keys = ids.map(id => this.id.build(id)).sort((a, b) => a.localeCompare(b));
        } else {
            opt.startkey = this.id.head();
            opt.endkey = this.id.tail();
        }

        return this._readAll(opt, options);
    }

    /** @internal */
    async _readAll(
        opt: PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions,
        options?: HydrateOptions
    ): Promise<(T & AdamantRevMeta)[]> {
        return await Promise.all(
            (await this._readAllRaw(opt)).map(async doc => this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, options))
        );
    }

    /** @internal */
    async _readAllRaw(
        opt: PouchDB.Core.AllDocsWithKeysOptions | PouchDB.Core.AllDocsWithinRangeOptions
    ): Promise<PouchDB.Core.Document<T>[]> {
        if (opt.include_docs && 'keys' in opt) {
            return await this.queryBatcher.read<T>(opt.keys);
        }

        return (await this.db.allDocs<T>(opt)).rows.map(r => r.doc!).filter(Boolean);
    }

    query(): QueryBuilder<T> {
        return new QueryBuilder<T>(this, this.id.head(), this.id.tail());
    }

    async executeQuery(query: QueryBuilder<T>, options?: HydrateOptions): Promise<(T & AdamantRevMeta)[]> {
        return await Promise.all(
            (await this.db.find(query.toFindRequest())).docs.map(async doc =>
                this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, options)
            )
        );
    }

    build(props: Partial<T> = {}): T & AdamantEntityMeta {
        return populate(Object.create(this.entityClass.prototype), props);
    }

    async persistDesignDoc<T extends {}>(doc: T): Promise<void> {
        const metadata = DesignDocMetadataCollection.create<T>(doc.constructor as any);

        if (metadata.entity !== this.entityClass) {
            throw new Error(`Invalid design doc entity`);
        }

        let document: {
            _id: string;
            views: { [key: string]: { map: string; reduce?: string } };
            filters: { [key: string]: string };
            validate_doc_update?: string;
        } = {
            _id: `_design/${metadata.name}`,
            views: {},
            filters: {}
        };

        for (const view of metadata.views) {
            const value: any = doc[view];
            const type = typeof value;

            /* istanbul ignore else */
            if (type === 'string' || type === 'function') {
                document.views[view as string] = {
                    map: value.toString()
                };
            } else if (type === 'object') {
                document.views[view as string] = {
                    map: value.map.toString(),
                    reduce: value.reduce && value.reduce.toString()
                };
            }
        }

        for (const filter of metadata.filters) {
            document.filters[filter as string] = (doc[filter as keyof T] as unknown as Function).toString();
        }

        if (metadata.validateDoc) {
            document.validate_doc_update = (doc[metadata.validateDoc as keyof T] as unknown as Function).toString();
        }

        await this.db.upsert<any>(document._id, existingDoc => {
            const { _id: _1, _rev: _2, ...d1 } = document as any;
            const { _id: _3, _rev: _4, ...d2 } = existingDoc as any;

            if (this.equal(d1, d2)) {
                return false;
            }

            return document;
        });
    }

    async view<D, P extends keyof D>(
        designDoc: Ctor<D>,
        name: P,
        { depth, circularCache, ...options }: HydrateOptions & PouchDB.Query.Options<T, any> = {}
    ): Promise<(T & AdamantRevMeta)[]> {
        const metadata = DesignDocMetadataCollection.create(designDoc);

        if (metadata.entity !== this.entityClass) {
            throw new Error(`Invalid design doc entity`);
        }

        if (!metadata.views.has(name)) {
            throw new Error(`Unknown view "${name}"`);
        }

        options.include_docs = true;

        return await Promise.all(
            (await this.rawView(`${metadata.name}/${name}`, options)).rows.map(row => row.doc!).map(async doc =>
                this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, {
                    depth,
                    circularCache
                })
            )
        );
    }

    rawView<R = T>(name: string, options?: PouchDB.Query.Options<T, R>): Promise<PouchDB.Query.Response<R>> {
        return this.db.query(name, options);
    }

    changes(options?: PouchDB.Core.ChangesOptions): Observable<PouchDB.Core.ChangesResponseChange<T>> {
        return Observable.create((sub: Subscriber<PouchDB.Core.ChangesResponseChange<T>>) => {
            const changes = this.getConnection().changes(options);

            changes.on('change', change => {
                try {
                    if (this.metadata.name === this.id.parse(change.id).name) {
                        sub.next(change);
                    }
                } catch {}
            });

            changes.on('error', /* istanbul ignore next */ error => sub.error(error));

            changes.on('complete', () => sub.complete());

            return () => {
                changes.removeAllListeners();
            };
        });
    }
}

export const ADAMANT_REPOSITORY_PROVIDER = {
    provide: AdamantRepository,
    useFactory(
        db: PouchDB.Database<any>,
        entityClass: Ctor<any>,
        metadata: EntityMetadataCollection<any>,
        equal: EqualChecker,
        id: AdamantId,
        bulk: Bulk<any>,
        hydrator: Hydrator<any>,
        validator: Validator<any>
    ) {
        return new AdamantRepository(db, entityClass, metadata, equal, id, bulk, hydrator, validator);
    },
    deps: [
        ADAMANT_CONNECTION,
        ADAMANT_ENTITY_CLASS,
        ADAMANT_ENTITY_METADATA,
        ADAMANT_EQUAL_CHECKER,
        ADAMANT_ID,
        Bulk,
        Hydrator,
        Validator
    ] as any[]
};
