/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PropertyMetadata } from './annotations/property';
import { InlineMetadata } from './annotations/inline';
import { HasManyMapMetadata } from './annotations/has-many-map';
import { markIdRev } from './utils/marks';
import { Hydrator } from './hydrator';
import { RelationMetadata } from './annotations/relation';
import { AdamantConnectionManager } from './connection-manager';
import { HasManyMetadata } from './annotations/has-many';
import { BelongsToMetadata } from './annotations/belongs-to';
import { IdMetadata } from './annotations/id';
import { Inject, Injectable } from '@angular/core';
import { ADAMANT_ID } from './injector-tokens';
export class HydratorImpl extends Hydrator {
    /**
     * @param {?} id
     * @param {?} connectionManager
     */
    constructor(id, connectionManager) {
        super();
        this.id = id;
        this.connectionManager = connectionManager;
    }
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @param {?=} options
     * @return {?}
     */
    dehydrate(entity, metadata, options) {
        /** @type {?} */
        const doc = {};
        if (options && options.includeRev) {
            doc._rev = (/** @type {?} */ (entity))._rev;
        }
        if (metadata.attachments && (/** @type {?} */ (entity))._attachments) {
            doc._attachments = (/** @type {?} */ (entity))._attachments;
        }
        for (const [property, annotation] of metadata.properties) {
            /** @type {?} */
            const value = entity[/** @type {?} */ (property)];
            if (annotation instanceof RelationMetadata) {
                if (value != null) {
                    /** @type {?} */
                    const relationMetadata = this.connectionManager.getMetadata(annotation.type);
                    if (annotation instanceof BelongsToMetadata) {
                        doc[property] = relationToId(value, relationMetadata, this.id);
                    }
                    else if (annotation instanceof HasManyMetadata) {
                        doc[property] = (/** @type {?} */ (value)).map(rel => relationToId(rel, relationMetadata, this.id));
                    }
                    else if (annotation instanceof HasManyMapMetadata) {
                        /** @type {?} */
                        const rel = {};
                        for (const key in value) {
                            rel[key] = relationToId(value[key], relationMetadata, this.id);
                        }
                        doc[property] = rel;
                    }
                    else if (annotation instanceof InlineMetadata) {
                        doc[property] = this.connectionManager.getRepository(annotation.type).hydrator.dehydrate(value, relationMetadata);
                    }
                }
            }
            else if (annotation instanceof PropertyMetadata) {
                doc[property] = value;
                if (annotation instanceof IdMetadata) {
                    doc._id = this.id.build(/** @type {?} */ ((metadata.name)), metadata.idType, /** @type {?} */ (value));
                }
            }
            if (undefined === doc[property]) {
                delete doc[property];
            }
        }
        return /** @type {?} */ (doc);
    }
    /**
     * @template T
     * @param {?} entity
     * @param {?} data
     * @param {?} metadata
     * @param {?=} __3
     * @return {?}
     */
    hydrate(entity, data, metadata, { depth = Infinity, circularCache = {} } = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (data._id in circularCache) {
                return circularCache[data._id];
            }
            circularCache[data._id] = entity;
            markIdRev(entity, { id: data._id, rev: data._rev });
            if (metadata.attachments) {
                Object.defineProperty(entity, '_attachments', { configurable: true, value: data._attachments });
            }
            for (const [property, annotation] of metadata.properties) {
                /** @type {?} */
                const value = data[/** @type {?} */ (property)];
                if (null == value) {
                    entity[/** @type {?} */ (property)] = /** @type {?} */ ((null));
                }
                else {
                    if (annotation instanceof RelationMetadata) {
                        /** @type {?} */
                        const relationMetadata = this.connectionManager.getMetadata(annotation.type);
                        /** @type {?} */
                        const relationRepository = this.connectionManager.getRepository(annotation.type);
                        if (annotation instanceof BelongsToMetadata) {
                            entity[/** @type {?} */ (property)] = circularCache.hasOwnProperty(value) ? circularCache[value] : yield relationRepository
                                ._read(value, {
                                depth: depth - 1,
                                circularCache
                            });
                        }
                        else if (annotation instanceof HasManyMetadata) {
                            entity[/** @type {?} */ (property)] = /** @type {?} */ (yield readAllWithCircularCache(relationRepository, value, depth - 1, circularCache));
                        }
                        else if (annotation instanceof HasManyMapMetadata) {
                            /** @type {?} */
                            const keys = Object.keys(value);
                            /** @type {?} */
                            const values = keys.map(k => value[k]);
                            /** @type {?} */
                            const entities = yield readAllWithCircularCache(relationRepository, values, depth - 1, circularCache);
                            /** @type {?} */
                            const rel = {};
                            for (const key of keys) {
                                rel[key] = entities.find(e => e._id === value[key]);
                            }
                            entity[/** @type {?} */ (property)] = rel;
                        }
                        else if (annotation instanceof InlineMetadata) {
                            entity[/** @type {?} */ (property)] = yield relationRepository
                                .hydrator.hydrate(relationRepository.build(), value, relationMetadata);
                        }
                    }
                    else if (annotation instanceof PropertyMetadata) {
                        /** @type {?} */
                        const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entity), property);
                        if (!descriptor || descriptor.writable || descriptor.set) {
                            entity[/** @type {?} */ (property)] = unpack(value, annotation.type);
                        }
                    }
                }
            }
            return entity;
        });
    }
}
HydratorImpl.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HydratorImpl.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
    { type: AdamantConnectionManager }
];
if (false) {
    /** @type {?} */
    HydratorImpl.prototype.id;
    /** @type {?} */
    HydratorImpl.prototype.connectionManager;
}
/**
 * @template T
 * @param {?} repo
 * @param {?} keys
 * @param {?} depth
 * @param {?} circularCache
 * @return {?}
 */
function readAllWithCircularCache(repo, keys, depth, circularCache) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        /** @type {?} */
        const filteredKeys = keys.filter(k => !circularCache.hasOwnProperty(k));
        /** @type {?} */
        let fromDb;
        if (filteredKeys.length) {
            fromDb = yield repo._readAll({ keys: filteredKeys, include_docs: true }, { depth, circularCache });
        }
        return keys.map(key => {
            if (circularCache.hasOwnProperty(key)) {
                return circularCache[key];
            }
            return fromDb && fromDb.find(e => (/** @type {?} */ (e))._id === key);
        });
    });
}
/**
 * @template T
 * @param {?} rel
 * @param {?} metadata
 * @param {?} id
 * @return {?}
 */
function relationToId(rel, metadata, id) {
    return typeof rel === 'string'
        ? rel
        : id.build(/** @type {?} */ ((metadata.name)), metadata.idType, /** @type {?} */ (rel[metadata.id]));
}
/**
 * @param {?} value
 * @param {?} type
 * @return {?}
 */
function unpack(value, type) {
    if (type === Date && value) {
        return new Date(value);
    }
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlkcmF0b3ItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJoeWRyYXRvci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFrQixRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFHMUQsTUFBTSxtQkFBb0IsU0FBUSxRQUFROzs7OztJQUN0QyxZQUFtRCxFQUFjLEVBQ2xDLGlCQUE0QztRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQUZ1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2xDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMkI7S0FFMUU7Ozs7Ozs7O0lBRUQsU0FBUyxDQUFJLE1BQVUsRUFBRSxRQUFzQixFQUFFLE9BQW9DOztRQUNqRixNQUFNLEdBQUcsR0FBUyxFQUFFLENBQUM7UUFFckIs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TSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFDLENBQVEsRUFBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUM3RCxDQUFDLENBQUE7O0NBQ0w7Ozs7Ozs7O0FBRUQsc0JBQXlCLEdBQWdCLEVBQUUsUUFBc0IsRUFBRSxFQUFjO0lBQzdFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUTtRQUMxQixDQUFDLENBQUMsR0FBRztRQUNMLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxvQkFBQyxRQUFRLENBQUMsSUFBSSxJQUFHLFFBQVEsQ0FBQyxNQUFNLG9CQUFFLEdBQUcsQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFTLEVBQUMsQ0FBQTtDQUM3RTs7Ozs7O0FBRUQsZ0JBQWdCLEtBQVcsRUFBRSxJQUFXO0lBQ3BDLElBQUcsSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDdkIsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlNZXRhZGF0YSwgVHlwZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvcHJvcGVydHknO1xuaW1wb3J0IHsgSW5saW5lTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZSc7XG5pbXBvcnQgeyBIYXNNYW55TWFwTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55LW1hcCc7XG5pbXBvcnQgeyBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCB7IEh5ZHJhdGVPcHRpb25zLCBIeWRyYXRvciB9IGZyb20gJy4vaHlkcmF0b3InO1xuaW1wb3J0IHsgQWRhbWFudFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvcmVsYXRpb24nO1xuaW1wb3J0IHsgQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyIH0gZnJvbSAnLi9jb25uZWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IHsgSGFzTWFueU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgQmVsb25nc1RvTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2JlbG9uZ3MtdG8nO1xuaW1wb3J0IHsgSWRNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaWQnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBREFNQU5UX0lELCBBZGFtYW50SWQgfSBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIeWRyYXRvckltcGwgZXh0ZW5kcyBIeWRyYXRvciB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0lEKSBwcm90ZWN0ZWQgcmVhZG9ubHkgaWQgOiBBZGFtYW50SWQsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbm5lY3Rpb25NYW5hZ2VyIDogQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGRlaHlkcmF0ZTxUPihlbnRpdHkgOiBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCBvcHRpb25zPyA6IHsgaW5jbHVkZVJldj8gOiBib29sZWFuIH0pIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+IHtcbiAgICAgICAgY29uc3QgZG9jIDogYW55ID0ge307XG4gICAgICAgIFxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuaW5jbHVkZVJldikge1xuICAgICAgICAgICAgZG9jLl9yZXYgPSAoZW50aXR5IGFzIGFueSkuX3JldjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobWV0YWRhdGEuYXR0YWNobWVudHMgJiYgKGVudGl0eSBhcyBhbnkpLl9hdHRhY2htZW50cykge1xuICAgICAgICAgICAgZG9jLl9hdHRhY2htZW50cyA9IChlbnRpdHkgYXMgYW55KS5fYXR0YWNobWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9uIF0gb2YgbWV0YWRhdGEucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBSZWxhdGlvbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbk1ldGFkYXRhID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRNZXRhZGF0YShhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSByZWxhdGlvblRvSWQodmFsdWUsIHJlbGF0aW9uTWV0YWRhdGEsIHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gKHZhbHVlIGFzIGFueVtdKS5tYXAocmVsID0+IHJlbGF0aW9uVG9JZChyZWwsIHJlbGF0aW9uTWV0YWRhdGEsIHRoaXMuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWFwTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbCA6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbFsga2V5IF0gPSByZWxhdGlvblRvSWQodmFsdWVbIGtleSBdLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHJlbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJbmxpbmVNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRSZXBvc2l0b3J5KGFubm90YXRpb24udHlwZSkuaHlkcmF0b3IuZGVoeWRyYXRlKHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJZE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5faWQgPSB0aGlzLmlkLmJ1aWxkKG1ldGFkYXRhLm5hbWUhLCBtZXRhZGF0YS5pZFR5cGUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih1bmRlZmluZWQgPT09IGRvY1sgcHJvcGVydHkgXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NbIHByb3BlcnR5IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkb2MgYXMgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+O1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBoeWRyYXRlPFQgZXh0ZW5kcyB7fT4oZW50aXR5IDogVCwgZGF0YSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBvdWNoREIuQ29yZS5HZXRNZXRhLCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCB7IGRlcHRoID0gSW5maW5pdHksIGNpcmN1bGFyQ2FjaGUgPSB7fSB9IDogSHlkcmF0ZU9wdGlvbnMgPSB7fSkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYoZGF0YS5faWQgaW4gY2lyY3VsYXJDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNpcmN1bGFyQ2FjaGVbIGRhdGEuX2lkIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNpcmN1bGFyQ2FjaGVbIGRhdGEuX2lkIF0gPSBlbnRpdHk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCB7IGlkOiBkYXRhLl9pZCwgcmV2OiBkYXRhLl9yZXYgfSk7XG4gICAgICAgIFxuICAgICAgICBpZihtZXRhZGF0YS5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eSwgJ19hdHRhY2htZW50cycsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZGF0YS5fYXR0YWNobWVudHMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9uIF0gb2YgbWV0YWRhdGEucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBkYXRhWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICBpZihudWxsID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBudWxsITtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFJlbGF0aW9uTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25NZXRhZGF0YSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0TWV0YWRhdGEoYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25SZXBvc2l0b3J5ID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRSZXBvc2l0b3J5KGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgQmVsb25nc1RvTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgPyBjaXJjdWxhckNhY2hlW3ZhbHVlXSA6IGF3YWl0IHJlbGF0aW9uUmVwb3NpdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5fcmVhZCh2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aDogZGVwdGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhckNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGF3YWl0IHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZShyZWxhdGlvblJlcG9zaXRvcnksIHZhbHVlLCBkZXB0aCAtIDEsIGNpcmN1bGFyQ2FjaGUpIGFzIGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNYXBNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGsgPT4gdmFsdWVbIGsgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgcmVhZEFsbFdpdGhDaXJjdWxhckNhY2hlKHJlbGF0aW9uUmVwb3NpdG9yeSwgdmFsdWVzLCBkZXB0aCAtIDEsIGNpcmN1bGFyQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsIDogYW55ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxbIGtleSBdID0gZW50aXRpZXMuZmluZChlID0+IGUuX2lkID09PSB2YWx1ZVsga2V5IF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSByZWw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSW5saW5lTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gYXdhaXQgcmVsYXRpb25SZXBvc2l0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh5ZHJhdG9yLmh5ZHJhdGUocmVsYXRpb25SZXBvc2l0b3J5LmJ1aWxkKCksIHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBQcm9wZXJ0eU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihlbnRpdHkpLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gdW5wYWNrKHZhbHVlLCBhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZEFsbFdpdGhDaXJjdWxhckNhY2hlPFQ+KHJlcG8gOiBBZGFtYW50UmVwb3NpdG9yeTxUPiwga2V5cyA6IHN0cmluZ1tdLCBkZXB0aCA6IG51bWJlciwgY2lyY3VsYXJDYWNoZSA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IGFueSB9KSA6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoayA9PiAhY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgbGV0IGZyb21EYiA6IFRbXTtcbiAgICBcbiAgICBpZihmaWx0ZXJlZEtleXMubGVuZ3RoKSB7XG4gICAgICAgIGZyb21EYiA9IGF3YWl0IHJlcG8uX3JlYWRBbGwoeyBrZXlzOiBmaWx0ZXJlZEtleXMsIGluY2x1ZGVfZG9jczogdHJ1ZSB9LCB7IGRlcHRoLCBjaXJjdWxhckNhY2hlIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgICAgaWYoY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2lyY3VsYXJDYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZnJvbURiICYmIGZyb21EYi5maW5kKGUgPT4gKGUgYXMgYW55KS5faWQgPT09IGtleSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVsYXRpb25Ub0lkPFQ+KHJlbCA6IHN0cmluZyB8IFQsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIGlkIDogQWRhbWFudElkKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiByZWwgPT09ICdzdHJpbmcnXG4gICAgICAgID8gcmVsXG4gICAgICAgIDogaWQuYnVpbGQobWV0YWRhdGEubmFtZSEsIG1ldGFkYXRhLmlkVHlwZSwgcmVsWyBtZXRhZGF0YS5pZCBdIGFzIGFueSlcbn1cblxuZnVuY3Rpb24gdW5wYWNrKHZhbHVlIDogYW55LCB0eXBlIDogVHlwZSkgOiBhbnkge1xuICAgIGlmKHR5cGUgPT09IERhdGUgJiYgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIl19