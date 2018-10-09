/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Validator } from './validator';
import { getAllPropertyMetadata, getClassMetadata, getPropertyMetadata, populate } from './utils/metadata';
import { Hydrator } from './hydrator';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { markDeleted, markIdRev } from './utils/marks';
import * as equal from 'fast-deep-equal';
import { ReadQueryBatcher } from './read-query-batcher';
import { QueryBuilder } from './query-builder';
import { DesignDocMetadata } from './annotations/design-doc';
import { ViewMetadata } from './annotations/view';
import { FilterMetadata } from './annotations/filter';
import { ValidateDocMetadata } from './annotations/validate-doc';
import { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID } from './injector-tokens';
/**
 * @return {?}
 */
export function equalCheckerFactory() {
    return equal;
}
/**
 * @template T
 */
export class AdamantRepository {
    /**
     * @param {?} db
     * @param {?} entityClass
     * @param {?} metadata
     * @param {?} equal
     * @param {?} id
     * @param {?} bulk
     * @param {?} hydrator
     * @param {?} validator
     */
    constructor(db, entityClass, metadata, equal, id, bulk, hydrator, validator) {
        this.db = db;
        this.entityClass = entityClass;
        this.metadata = metadata;
        this.equal = equal;
        this.id = id;
        this.bulk = bulk;
        this.hydrator = hydrator;
        this.validator = validator;
        this.queryBatcher = new ReadQueryBatcher(this.db);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    create(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.validator.validate(entity, this.metadata);
            /** @type {?} */
            const doc = this.hydrator.dehydrate(entity, this.metadata);
            /** @type {?} */
            const result = yield this.db.put(doc);
            markIdRev(entity, result);
            return entity;
        });
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    upsert(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.validator.validate(entity, this.metadata);
            /** @type {?} */
            const doc = this.hydrator.dehydrate(entity, this.metadata);
            /** @type {?} */
            const result = yield this._upsert(this.id.build(/** @type {?} */ ((this.metadata.name)), this.metadata.idType, /** @type {?} */ (entity[this.metadata.id])), doc);
            markIdRev(entity, result);
            return entity;
        });
    }
    /**
     * \@internal
     * @param {?} id
     * @param {?} document
     * @return {?}
     */
    _upsert(id, document) {
        return this.db.upsert(id, existingDoc => {
            const _a = /** @type {?} */ (document), { _id: _1, _rev: _2 } = _a, d1 = tslib_1.__rest(_a, ["_id", "_rev"]);
            const _b = /** @type {?} */ (existingDoc), { _id: _3, _rev: _4 } = _b, d2 = tslib_1.__rest(_b, ["_id", "_rev"]);
            if (this.equal(d1, d2)) {
                return false;
            }
            return document;
        });
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    update(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.validator.validate(entity, this.metadata);
            /** @type {?} */
            const doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
            /** @type {?} */
            const result = yield this.db.put(doc);
            markIdRev(entity, result);
            return entity;
        });
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    delete(entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.validator.validate(entity, this.metadata);
            /** @type {?} */
            const doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
            doc._deleted = true;
            /** @type {?} */
            const result = yield this.db.put(doc);
            markIdRev(entity, result);
            markDeleted(entity);
            return entity;
        });
    }
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    read(id, options) {
        return this._read(this.id.build(/** @type {?} */ ((this.metadata.name)), this.metadata.idType, id), options);
    }
    /**
     * \@internal
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    _read(id, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.hydrator.hydrate(Object.create(this.entityClass.prototype), yield this._readRaw(id), this.metadata, options);
        });
    }
    /**
     * \@internal
     * @param {?} id
     * @return {?}
     */
    _readRaw(id) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const result = yield this.queryBatcher.read([id]);
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
        });
    }
    /**
     * @param {?=} ids
     * @param {?=} options
     * @return {?}
     */
    readAll(ids, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const opt = /** @type {?} */ ({
                include_docs: true
            });
            if (ids) {
                opt.keys = ids.map(id => this.id.build(/** @type {?} */ ((this.metadata.name)), this.metadata.idType, id)).sort((a, b) => a.localeCompare(b));
            }
            else {
                opt.startkey = this.id.head(/** @type {?} */ ((this.metadata.name)));
                opt.endkey = this.id.tail(/** @type {?} */ ((this.metadata.name)));
            }
            return this._readAll(opt, options);
        });
    }
    /**
     * \@internal
     * @param {?} opt
     * @param {?=} options
     * @return {?}
     */
    _readAll(opt, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield Promise.all((yield this._readAllRaw(opt))
                .map((doc) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options); })));
        });
    }
    /**
     * \@internal
     * @param {?} opt
     * @return {?}
     */
    _readAllRaw(opt) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (opt.include_docs && 'keys' in opt) {
                return yield this.queryBatcher.read(opt.keys);
            }
            return (yield this.db.allDocs(opt)).rows.map(r => /** @type {?} */ ((r.doc))).filter(Boolean);
        });
    }
    /**
     * @return {?}
     */
    query() {
        return new QueryBuilder(this, this.id.head(/** @type {?} */ ((this.metadata.name))), this.id.tail(/** @type {?} */ ((this.metadata.name))));
    }
    /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    executeQuery(query, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield Promise.all((yield this.db.find(query.toFindRequest())).docs
                .map((doc) => tslib_1.__awaiter(this, void 0, void 0, function* () { return this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options); })));
        });
    }
    /**
     * @param {?=} props
     * @return {?}
     */
    build(props = {}) {
        return populate(Object.create(this.entityClass.prototype), props);
    }
    /**
     * @template T
     * @param {?} doc
     * @return {?}
     */
    persistDesignDoc(doc) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const classAnnotations = getClassMetadata(doc.constructor, DesignDocMetadata);
            /** @type {?} */
            const propertyAnnotations = getAllPropertyMetadata(doc.constructor);
            if (1 !== classAnnotations.length) {
                throw new Error(`Design doc annotation required`);
            }
            if (classAnnotations[0].entity !== this.entityClass) {
                throw new Error(`Invalid design doc entity`);
            }
            /** @type {?} */
            let document = {
                _id: `_design/${classAnnotations[0].name}`,
                views: {},
                filters: {}
            };
            for (const [property, annotations] of propertyAnnotations) {
                for (const annotation of annotations) {
                    if (annotation instanceof ViewMetadata) {
                        /** @type {?} */
                        const value = doc[/** @type {?} */ (property)];
                        /** @type {?} */
                        const type = typeof value;
                        if (type === 'string' || type === 'function') {
                            document.views[/** @type {?} */ (property)] = {
                                map: value.toString()
                            };
                        }
                        else if (type === 'object') {
                            document.views[/** @type {?} */ (property)] = {
                                map: value.map.toString(),
                                reduce: value.reduce && value.reduce.toString()
                            };
                        }
                    }
                    else if (annotation instanceof FilterMetadata) {
                        document.filters[/** @type {?} */ (property)] = doc[/** @type {?} */ (property)].toString();
                    }
                    else if (annotation instanceof ValidateDocMetadata) {
                        document.validate_doc_update = doc[/** @type {?} */ (property)].toString();
                    }
                }
            }
            yield this.db.upsert(document._id, existingDoc => {
                const _a = /** @type {?} */ (document), { _id: _1, _rev: _2 } = _a, d1 = tslib_1.__rest(_a, ["_id", "_rev"]);
                const _b = /** @type {?} */ (existingDoc), { _id: _3, _rev: _4 } = _b, d2 = tslib_1.__rest(_b, ["_id", "_rev"]);
                if (this.equal(d1, d2)) {
                    return false;
                }
                return document;
            });
        });
    }
    /**
     * @template T, P
     * @param {?} designDoc
     * @param {?} name
     * @param {?=} __2
     * @return {?}
     */
    view(designDoc, name, _a = {}) {
        var { depth, circularCache } = _a, options = tslib_1.__rest(_a, ["depth", "circularCache"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const classAnnotation = getClassMetadata(designDoc, DesignDocMetadata)[0];
            if (!classAnnotation) {
                throw new Error(`Design doc annotation required`);
            }
            if (classAnnotation.entity !== this.entityClass) {
                throw new Error(`Invalid design doc entity`);
            }
            /** @type {?} */
            const propertyAnnotation = getPropertyMetadata(designDoc, /** @type {?} */ (name), ViewMetadata);
            if (!propertyAnnotation) {
                throw new Error(`Unknown view "${name}"`);
            }
            if (!options) {
                options = {};
            }
            options.include_docs = true;
            return yield Promise.all((yield this.rawView(`${classAnnotation.name}/${name}`, options))
                .rows.map(row => /** @type {?} */ ((row.doc)))
                .map((doc) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                return this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, {
                    depth,
                    circularCache
                });
            })));
        });
    }
    /**
     * @template R
     * @param {?} name
     * @param {?=} options
     * @return {?}
     */
    rawView(name, options) {
        return this.db.query(name, options);
    }
}
AdamantRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AdamantRepository.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
    { type: Metadata, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_EQUAL_CHECKER,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
    { type: Bulk },
    { type: Hydrator },
    { type: Validator }
];
if (false) {
    /** @type {?} */
    AdamantRepository.prototype.queryBatcher;
    /** @type {?} */
    AdamantRepository.prototype.db;
    /** @type {?} */
    AdamantRepository.prototype.entityClass;
    /** @type {?} */
    AdamantRepository.prototype.metadata;
    /** @type {?} */
    AdamantRepository.prototype.equal;
    /** @type {?} */
    AdamantRepository.prototype.id;
    /** @type {?} */
    AdamantRepository.prototype.bulk;
    /** @type {?} */
    AdamantRepository.prototype.hydrator;
    /** @type {?} */
    AdamantRepository.prototype.validator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJyZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQVEsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakgsT0FBTyxFQUFrQixRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUNILGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQixVQUFVLEVBR2IsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUczQixNQUFNO0lBQ0YsT0FBTyxLQUFL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QUcsRUFBRSxDQUFBO2FBQ2Y7WUFDRCxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUU1QixPQUFPLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLGVBQWUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7aUJBQ3BGLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsb0JBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDO2lCQUN6QixHQUFHLENBQUMsQ0FBTSxHQUFHLEVBQUMsRUFBRTtnQkFBQyxPQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDbkcsS0FBSztvQkFDTCxhQUFhO2lCQUNoQixDQUFDLENBQUE7Y0FBQSxDQUFDLENBQ04sQ0FBQTs7S0FDSjs7Ozs7OztJQUVELE9BQU8sQ0FBUSxJQUFhLEVBQUUsT0FBd0M7UUFDbEUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdkM7OztZQWpQSixVQUFVOzs7OzRDQUlNLE1BQU0sU0FBQyxrQkFBa0I7NENBQ3pCLE1BQU0sU0FBQyxvQkFBb0I7WUEvQm5DLFFBQVEsdUJBZ0NBLE1BQU0sU0FBQyx1QkFBdUI7NENBQzlCLE1BQU0sU0FBQyxxQkFBcUI7NENBQzVCLE1BQU0sU0FBQyxVQUFVO1lBakN6QixJQUFJO1lBRlksUUFBUTtZQUZ4QixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yLCBnZXRBbGxQcm9wZXJ0eU1ldGFkYXRhLCBnZXRDbGFzc01ldGFkYXRhLCBnZXRQcm9wZXJ0eU1ldGFkYXRhLCBwb3B1bGF0ZSB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0ZU9wdGlvbnMsIEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgQnVsayB9IGZyb20gJy4vYnVsayc7XG5pbXBvcnQgeyBtYXJrRGVsZXRlZCwgbWFya0lkUmV2IH0gZnJvbSAnLi91dGlscy9tYXJrcyc7XG5pbXBvcnQgKiBhcyBlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgUmVhZFF1ZXJ5QmF0Y2hlciB9IGZyb20gJy4vcmVhZC1xdWVyeS1iYXRjaGVyJztcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4vcXVlcnktYnVpbGRlcic7XG5pbXBvcnQgeyBEZXNpZ25Eb2NNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZGVzaWduLWRvYyc7XG5pbXBvcnQgeyBWaWV3TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3ZpZXcnO1xuaW1wb3J0IHsgRmlsdGVyTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2ZpbHRlcic7XG5pbXBvcnQgeyBWYWxpZGF0ZURvY01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy92YWxpZGF0ZS1kb2MnO1xuaW1wb3J0IHtcbiAgICBBREFNQU5UX0NPTk5FQ1RJT04sXG4gICAgQURBTUFOVF9FTlRJVFlfQ0xBU1MsXG4gICAgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsXG4gICAgQURBTUFOVF9FUVVBTF9DSEVDS0VSLFxuICAgIEFEQU1BTlRfSUQsXG4gICAgQWRhbWFudElkLFxuICAgIEVxdWFsQ2hlY2tlclxufSBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsQ2hlY2tlckZhY3RvcnkoKSB7XG4gICAgcmV0dXJuIGVxdWFsO1xufVxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGFtYW50UmVwb3NpdG9yeTxUPiB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHF1ZXJ5QmF0Y2hlciA9IG5ldyBSZWFkUXVlcnlCYXRjaGVyKHRoaXMuZGIpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VRVUFMX0NIRUNLRVIpIHByb3RlY3RlZCByZWFkb25seSBlcXVhbCA6IEVxdWFsQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfSUQpIHByb3RlY3RlZCByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnVsayA6IEJ1bGs8VD4sXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjcmVhdGUoZW50aXR5IDogVCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuaHlkcmF0b3IuZGVoeWRyYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHVwc2VydChlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3Vwc2VydCh0aGlzLmlkLmJ1aWxkKHRoaXMubWV0YWRhdGEubmFtZSEsIHRoaXMubWV0YWRhdGEuaWRUeXBlLCBlbnRpdHlbIHRoaXMubWV0YWRhdGEuaWQgXSBhcyBhbnkpLCBkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfdXBzZXJ0KGlkIDogc3RyaW5nLCBkb2N1bWVudCA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPikgOiBQcm9taXNlPFBvdWNoREIuVXBzZXJ0UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIudXBzZXJ0KGlkLCBleGlzdGluZ0RvYyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzEsIF9yZXY6IF8yLCAuLi5kMSB9ID0gZG9jdW1lbnQgYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgeyBfaWQ6IF8zLCBfcmV2OiBfNCwgLi4uZDIgfSA9IGV4aXN0aW5nRG9jIGFzIGFueTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5lcXVhbChkMSwgZDIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGRlbGV0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+ICYgUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5wdXQoZG9jKTtcbiAgICAgICAgXG4gICAgICAgIG1hcmtJZFJldihlbnRpdHksIHJlc3VsdCk7XG4gICAgICAgIG1hcmtEZWxldGVkKGVudGl0eSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbiAgICBcbiAgICByZWFkKGlkIDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkKHRoaXMuaWQuYnVpbGQodGhpcy5tZXRhZGF0YS5uYW1lISwgdGhpcy5tZXRhZGF0YS5pZFR5cGUsIGlkKSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBfcmVhZChpZCA6IHN0cmluZywgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBhd2FpdCB0aGlzLl9yZWFkUmF3KGlkKSwgdGhpcy5tZXRhZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBfcmVhZFJhdyhpZCA6IHN0cmluZykgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5QmF0Y2hlci5yZWFkPFQ+KFsgaWQgXSk7XG4gICAgICAgIGlmKCFyZXN1bHRbIDAgXSkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA6IDQwNCxcbiAgICAgICAgICAgICAgICBuYW1lICAgOiAnbm90X2ZvdW5kJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbWlzc2luZycsXG4gICAgICAgICAgICAgICAgcmVhc29uIDogJ21pc3NpbmcnLFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHRbIDAgXTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcmVhZEFsbChpZHM/IDogKHN0cmluZyB8IG51bWJlcilbXSwgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgOiBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhLZXlzT3B0aW9ucyAmIFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aGluUmFuZ2VPcHRpb25zID0ge1xuICAgICAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlXG4gICAgICAgIH0gYXMgYW55O1xuICAgICAgICBcbiAgICAgICAgaWYoaWRzKSB7XG4gICAgICAgICAgICBvcHQua2V5cyA9IGlkcy5tYXAoaWQgPT4gdGhpcy5pZC5idWlsZCh0aGlzLm1ldGFkYXRhLm5hbWUhLCB0aGlzLm1ldGFkYXRhLmlkVHlwZSwgaWQpKS5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0LnN0YXJ0a2V5ID0gdGhpcy5pZC5oZWFkKHRoaXMubWV0YWRhdGEubmFtZSEpO1xuICAgICAgICAgICAgb3B0LmVuZGtleSA9IHRoaXMuaWQudGFpbCh0aGlzLm1ldGFkYXRhLm5hbWUhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRBbGwob3B0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkQWxsKG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zIHwgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMsIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKChhd2FpdCB0aGlzLl9yZWFkQWxsUmF3KG9wdCkpXG4gICAgICAgICAgICAubWFwKGFzeW5jIGRvYyA9PiB0aGlzLmh5ZHJhdG9yLmh5ZHJhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIGRvYywgdGhpcy5tZXRhZGF0YSwgb3B0aW9ucykpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkQWxsUmF3KG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zIHwgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMpIDogUHJvbWlzZTxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD5bXT4ge1xuICAgICAgICBpZihvcHQuaW5jbHVkZV9kb2NzICYmICdrZXlzJyBpbiBvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5QmF0Y2hlci5yZWFkPFQ+KG9wdC5rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLmRiLmFsbERvY3M8VD4ob3B0KSkucm93cy5tYXAociA9PiByLmRvYyEpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgXG4gICAgcXVlcnkoKSA6IFF1ZXJ5QnVpbGRlcjxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgUXVlcnlCdWlsZGVyPFQ+KHRoaXMsIHRoaXMuaWQuaGVhZCh0aGlzLm1ldGFkYXRhLm5hbWUhKSwgdGhpcy5pZC50YWlsKHRoaXMubWV0YWRhdGEubmFtZSEpKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5IDogUXVlcnlCdWlsZGVyPFQ+LCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5kYi5maW5kKHF1ZXJ5LnRvRmluZFJlcXVlc3QoKSkpLmRvY3NcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBidWlsZChwcm9wcyA6IFBhcnRpYWw8VD4gPSB7fSkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBwcm9wcyk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBlcnNpc3REZXNpZ25Eb2M8VCBleHRlbmRzIHt9Pihkb2MgOiBUKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjbGFzc0Fubm90YXRpb25zID0gZ2V0Q2xhc3NNZXRhZGF0YShkb2MuY29uc3RydWN0b3IsIERlc2lnbkRvY01ldGFkYXRhKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBbm5vdGF0aW9ucyA9IGdldEFsbFByb3BlcnR5TWV0YWRhdGE8Vmlld01ldGFkYXRhIHwgRmlsdGVyTWV0YWRhdGEgfCBWYWxpZGF0ZURvY01ldGFkYXRhPihkb2MuY29uc3RydWN0b3IpO1xuICAgICAgICBcbiAgICAgICAgaWYoMSAhPT0gY2xhc3NBbm5vdGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGVzaWduIGRvYyBhbm5vdGF0aW9uIHJlcXVpcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNsYXNzQW5ub3RhdGlvbnNbIDAgXS5lbnRpdHkgIT09IHRoaXMuZW50aXR5Q2xhc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZXNpZ24gZG9jIGVudGl0eWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZG9jdW1lbnQgOiB7XG4gICAgICAgICAgICBfaWQgOiBzdHJpbmc7XG4gICAgICAgICAgICB2aWV3cyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IHsgbWFwIDogc3RyaW5nLCByZWR1Y2U/IDogc3RyaW5nIH0gfTtcbiAgICAgICAgICAgIGZpbHRlcnMgOiB7IFsga2V5IDogc3RyaW5nIF0gOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIHZhbGlkYXRlX2RvY191cGRhdGU/IDogc3RyaW5nO1xuICAgICAgICB9ID0ge1xuICAgICAgICAgICAgX2lkICAgIDogYF9kZXNpZ24vJHtjbGFzc0Fubm90YXRpb25zWyAwIF0ubmFtZX1gLFxuICAgICAgICAgICAgdmlld3MgIDoge30sXG4gICAgICAgICAgICBmaWx0ZXJzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IFsgcHJvcGVydHksIGFubm90YXRpb25zIF0gb2YgcHJvcGVydHlBbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgZm9yKGNvbnN0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgVmlld01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZG9jWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC52aWV3c1sgcHJvcGVydHkgYXMgc3RyaW5nIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZpZXdzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAgICA6IHZhbHVlLm1hcC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogdmFsdWUucmVkdWNlICYmIHZhbHVlLnJlZHVjZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBGaWx0ZXJNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5maWx0ZXJzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IGRvY1sgcHJvcGVydHkgYXMga2V5b2YgVCBdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBWYWxpZGF0ZURvY01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZhbGlkYXRlX2RvY191cGRhdGUgPSBkb2NbIHByb3BlcnR5IGFzIGtleW9mIFQgXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5kYi51cHNlcnQ8YW55Pihkb2N1bWVudC5faWQsIGV4aXN0aW5nRG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMSwgX3JldjogXzIsIC4uLmQxIH0gPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzMsIF9yZXY6IF80LCAuLi5kMiB9ID0gZXhpc3RpbmdEb2MgYXMgYW55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmVxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHZpZXc8VCwgUCBleHRlbmRzIGtleW9mIFQ+KGRlc2lnbkRvYyA6IEN0b3I8VD4sIG5hbWUgOiBQLCB7IGRlcHRoLCBjaXJjdWxhckNhY2hlLCAuLi5vcHRpb25zIH0gOiBIeWRyYXRlT3B0aW9ucyAmIFBvdWNoREIuUXVlcnkuT3B0aW9uczxULCBhbnk+ID0ge30pIHtcbiAgICAgICAgY29uc3QgY2xhc3NBbm5vdGF0aW9uID0gZ2V0Q2xhc3NNZXRhZGF0YShkZXNpZ25Eb2MsIERlc2lnbkRvY01ldGFkYXRhKVsgMCBdO1xuICAgICAgICBcbiAgICAgICAgaWYoIWNsYXNzQW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXNpZ24gZG9jIGFubm90YXRpb24gcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NBbm5vdGF0aW9uLmVudGl0eSAhPT0gdGhpcy5lbnRpdHlDbGFzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2lnbiBkb2MgZW50aXR5YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb3BlcnR5QW5ub3RhdGlvbiA9IGdldFByb3BlcnR5TWV0YWRhdGEoZGVzaWduRG9jLCBuYW1lIGFzIHN0cmluZywgVmlld01ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFwcm9wZXJ0eUFubm90YXRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB2aWV3IFwiJHtuYW1lfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge31cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmluY2x1ZGVfZG9jcyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoKGF3YWl0IHRoaXMucmF3VmlldyhgJHtjbGFzc0Fubm90YXRpb24ubmFtZX0vJHtuYW1lfWAsIG9wdGlvbnMpKVxuICAgICAgICAgICAgLnJvd3MubWFwKHJvdyA9PiByb3cuZG9jISlcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCB7XG4gICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJDYWNoZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgcmF3VmlldzxSID0gVD4obmFtZSA6IHN0cmluZywgb3B0aW9ucz8gOiBQb3VjaERCLlF1ZXJ5Lk9wdGlvbnM8UiwgYW55Pikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5xdWVyeShuYW1lLCBvcHRpb25zKTtcbiAgICB9XG59XG4iXX0=