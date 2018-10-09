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
var HydratorImpl = /** @class */ (function (_super) {
    tslib_1.__extends(HydratorImpl, _super);
    function HydratorImpl(id, connectionManager) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.connectionManager = connectionManager;
        return _this;
    }
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @param {?=} options
     * @return {?}
     */
    HydratorImpl.prototype.dehydrate = /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @param {?=} options
     * @return {?}
     */
    function (entity, metadata, options) {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var doc = {};
        if (options && options.includeRev) {
            doc._rev = (/** @type {?} */ (entity))._rev;
        }
        if (metadata.attachments && (/** @type {?} */ (entity))._attachments) {
            doc._attachments = (/** @type {?} */ (entity))._attachments;
        }
        var _loop_1 = function (property, annotation) {
            /** @type {?} */
            var value = entity[/** @type {?} */ (property)];
            if (annotation instanceof RelationMetadata) {
                if (value != null) {
                    /** @type {?} */
                    var relationMetadata_1 = this_1.connectionManager.getMetadata(annotation.type);
                    if (annotation instanceof BelongsToMetadata) {
                        doc[property] = relationToId(value, relationMetadata_1, this_1.id);
                    }
                    else if (annotation instanceof HasManyMetadata) {
                        doc[property] = (/** @type {?} */ (value)).map(function (rel) { return relationToId(rel, relationMetadata_1, _this.id); });
                    }
                    else if (annotation instanceof HasManyMapMetadata) {
                        /** @type {?} */
                        var rel = {};
                        for (var key in value) {
                            rel[key] = relationToId(value[key], relationMetadata_1, this_1.id);
                        }
                        doc[property] = rel;
                    }
                    else if (annotation instanceof InlineMetadata) {
                        doc[property] = this_1.connectionManager.getRepository(annotation.type).hydrator.dehydrate(value, relationMetadata_1);
                    }
                }
            }
            else if (annotation instanceof PropertyMetadata) {
                doc[property] = value;
                if (annotation instanceof IdMetadata) {
                    doc._id = this_1.id.build(/** @type {?} */ ((metadata.name)), metadata.idType, /** @type {?} */ (value));
                }
            }
            if (undefined === doc[property]) {
                delete doc[property];
            }
        };
        var this_1 = this;
        try {
            for (var _b = tslib_1.__values(metadata.properties), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_1.__read(_c.value, 2), property = _d[0], annotation = _d[1];
                _loop_1(property, annotation);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return /** @type {?} */ (doc);
    };
    /**
     * @template T
     * @param {?} entity
     * @param {?} data
     * @param {?} metadata
     * @param {?=} __3
     * @return {?}
     */
    HydratorImpl.prototype.hydrate = /**
     * @template T
     * @param {?} entity
     * @param {?} data
     * @param {?} metadata
     * @param {?=} __3
     * @return {?}
     */
    function (entity, data, metadata, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.depth, depth = _c === void 0 ? Infinity : _c, _d = _b.circularCache, circularCache = _d === void 0 ? {} : _d;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_2, _e, _loop_2, this_2, _f, _g, _h, property, annotation, e_2_1;
            return tslib_1.__generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        if (data._id in circularCache) {
                            return [2 /*return*/, circularCache[data._id]];
                        }
                        circularCache[data._id] = entity;
                        markIdRev(entity, { id: data._id, rev: data._rev });
                        if (metadata.attachments) {
                            Object.defineProperty(entity, '_attachments', { configurable: true, value: data._attachments });
                        }
                        _loop_2 = function (property, annotation) {
                            var e_3, _a, value, relationMetadata, relationRepository, _b, _c, _d, _e, _f, keys, values, entities, rel, _loop_3, keys_1, keys_1_1, key, _g, _h, descriptor;
                            return tslib_1.__generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        value = data[/** @type {?} */ (property)];
                                        if (!(null == value)) return [3 /*break*/, 1];
                                        entity[/** @type {?} */ (property)] = /** @type {?} */ ((null));
                                        return [3 /*break*/, 13];
                                    case 1:
                                        if (!(annotation instanceof RelationMetadata)) return [3 /*break*/, 12];
                                        relationMetadata = this_2.connectionManager.getMetadata(annotation.type);
                                        relationRepository = this_2.connectionManager.getRepository(annotation.type);
                                        if (!(annotation instanceof BelongsToMetadata)) return [3 /*break*/, 5];
                                        _b = entity;
                                        _c = /** @type {?} */ (property);
                                        if (!circularCache.hasOwnProperty(value)) return [3 /*break*/, 2];
                                        _d = circularCache[value];
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, relationRepository
                                            ._read(value, {
                                            depth: depth - 1,
                                            circularCache: circularCache
                                        })];
                                    case 3:
                                        _d = _j.sent();
                                        _j.label = 4;
                                    case 4:
                                        _b[_c] = _d;
                                        return [3 /*break*/, 11];
                                    case 5:
                                        if (!(annotation instanceof HasManyMetadata)) return [3 /*break*/, 7];
                                        _e = entity;
                                        _f = /** @type {?} */ (property);
                                        return [4 /*yield*/, readAllWithCircularCache(relationRepository, value, depth - 1, circularCache)];
                                    case 6:
                                        _e[_f] = /** @type {?} */ (_j.sent());
                                        return [3 /*break*/, 11];
                                    case 7:
                                        if (!(annotation instanceof HasManyMapMetadata)) return [3 /*break*/, 9];
                                        keys = Object.keys(value);
                                        values = keys.map(function (k) { return value[k]; });
                                        return [4 /*yield*/, readAllWithCircularCache(relationRepository, values, depth - 1, circularCache)];
                                    case 8:
                                        entities = _j.sent();
                                        rel = {};
                                        _loop_3 = function (key) {
                                            rel[key] = entities.find(function (e) { return e._id === value[key]; });
                                        };
                                        try {
                                            for (keys_1 = tslib_1.__values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                                                key = keys_1_1.value;
                                                _loop_3(key);
                                            }
                                        }
                                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                        finally {
                                            try {
                                                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                                            }
                                            finally { if (e_3) throw e_3.error; }
                                        }
                                        entity[/** @type {?} */ (property)] = rel;
                                        return [3 /*break*/, 11];
                                    case 9:
                                        if (!(annotation instanceof InlineMetadata)) return [3 /*break*/, 11];
                                        _g = entity;
                                        _h = /** @type {?} */ (property);
                                        return [4 /*yield*/, relationRepository
                                                .hydrator.hydrate(relationRepository.build(), value, relationMetadata)];
                                    case 10:
                                        _g[_h] = _j.sent();
                                        _j.label = 11;
                                    case 11: return [3 /*break*/, 13];
                                    case 12:
                                        if (annotation instanceof PropertyMetadata) {
                                            descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entity), property);
                                            if (!descriptor || descriptor.writable || descriptor.set) {
                                                entity[/** @type {?} */ (property)] = unpack(value, annotation.type);
                                            }
                                        }
                                        _j.label = 13;
                                    case 13: return [2 /*return*/];
                                }
                            });
                        };
                        this_2 = this;
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 6, 7, 8]);
                        _f = tslib_1.__values(metadata.properties), _g = _f.next();
                        _j.label = 2;
                    case 2:
                        if (!!_g.done) return [3 /*break*/, 5];
                        _h = tslib_1.__read(_g.value, 2), property = _h[0], annotation = _h[1];
                        return [5 /*yield**/, _loop_2(property, annotation)];
                    case 3:
                        _j.sent();
                        _j.label = 4;
                    case 4:
                        _g = _f.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _j.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_g && !_g.done && (_e = _f.return)) _e.call(_f);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, entity];
                }
            });
        });
    };
    HydratorImpl.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HydratorImpl.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
        { type: AdamantConnectionManager }
    ]; };
    return HydratorImpl;
}(Hydrator));
export { HydratorImpl };
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
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var filteredKeys, fromDb;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filteredKeys = keys.filter(function (k) { return !circularCache.hasOwnProperty(k); });
                    if (!filteredKeys.length) return [3 /*break*/, 2];
                    return [4 /*yield*/, repo._readAll({ keys: filteredKeys, include_docs: true }, { depth: depth, circularCache: circularCache })];
                case 1:
                    fromDb = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, keys.map(function (key) {
                        if (circularCache.hasOwnProperty(key)) {
                            return circularCache[key];
                        }
                        return fromDb && fromDb.find(function (e) { return (/** @type {?} */ (e))._id === key; });
                    })];
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHlkcmF0b3ItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJoeWRyYXRvci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFRLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFrQixRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFhLE1BQU0sbUJBQW1CLENBQUM7O0lBR3hCLHdDQUFRO0lBQ3RDLHNCQUFtRCxFQUFjLEVBQ2xDLGlCQUE0QztRQUQzRSxZQUVJLGlCQUFPLFNBQ1Y7UUFIa0QsUUFBRSxHQUFGLEVBQUUsQ0FBWTtRQUNsQyx1QkFBaUIsR0FBakIsaUJBQWlCLENBQTJCOztLQUUxRTs7Ozs7Ozs7SUFFRCxnQ0FBUzs7Ozs7OztJQUFULFVBQWEsTUFBVSxFQUFFLFFBQXNCLEVBQUUsT0FBb0M7UUFBckYsaUJBNkNDOzs7UUE1Q0csSUFBTSxHQUFHLEdBQVMsRUFBRSxD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QUVELE9BQU8sS0FBSyxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvcGVydHlNZXRhZGF0YSwgVHlwZSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvcHJvcGVydHknO1xuaW1wb3J0IHsgSW5saW5lTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZSc7XG5pbXBvcnQgeyBIYXNNYW55TWFwTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55LW1hcCc7XG5pbXBvcnQgeyBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCB7IEh5ZHJhdGVPcHRpb25zLCBIeWRyYXRvciB9IGZyb20gJy4vaHlkcmF0b3InO1xuaW1wb3J0IHsgQWRhbWFudFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvcmVsYXRpb24nO1xuaW1wb3J0IHsgQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyIH0gZnJvbSAnLi9jb25uZWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IHsgSGFzTWFueU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgQmVsb25nc1RvTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2JlbG9uZ3MtdG8nO1xuaW1wb3J0IHsgSWRNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaWQnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBREFNQU5UX0lELCBBZGFtYW50SWQgfSBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIeWRyYXRvckltcGwgZXh0ZW5kcyBIeWRyYXRvciB7XG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0lEKSBwcm90ZWN0ZWQgcmVhZG9ubHkgaWQgOiBBZGFtYW50SWQsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbm5lY3Rpb25NYW5hZ2VyIDogQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIFxuICAgIGRlaHlkcmF0ZTxUPihlbnRpdHkgOiBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCBvcHRpb25zPyA6IHsgaW5jbHVkZVJldj8gOiBib29sZWFuIH0pIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+IHtcbiAgICAgICAgY29uc3QgZG9jIDogYW55ID0ge307XG4gICAgICAgIFxuICAgICAgICBpZihvcHRpb25zICYmIG9wdGlvbnMuaW5jbHVkZVJldikge1xuICAgICAgICAgICAgZG9jLl9yZXYgPSAoZW50aXR5IGFzIGFueSkuX3JldjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYobWV0YWRhdGEuYXR0YWNobWVudHMgJiYgKGVudGl0eSBhcyBhbnkpLl9hdHRhY2htZW50cykge1xuICAgICAgICAgICAgZG9jLl9hdHRhY2htZW50cyA9IChlbnRpdHkgYXMgYW55KS5fYXR0YWNobWVudHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9uIF0gb2YgbWV0YWRhdGEucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBSZWxhdGlvbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbk1ldGFkYXRhID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRNZXRhZGF0YShhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSByZWxhdGlvblRvSWQodmFsdWUsIHJlbGF0aW9uTWV0YWRhdGEsIHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gKHZhbHVlIGFzIGFueVtdKS5tYXAocmVsID0+IHJlbGF0aW9uVG9JZChyZWwsIHJlbGF0aW9uTWV0YWRhdGEsIHRoaXMuaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWFwTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbCA6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbFsga2V5IF0gPSByZWxhdGlvblRvSWQodmFsdWVbIGtleSBdLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHJlbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJbmxpbmVNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRSZXBvc2l0b3J5KGFubm90YXRpb24udHlwZSkuaHlkcmF0b3IuZGVoeWRyYXRlKHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJZE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5faWQgPSB0aGlzLmlkLmJ1aWxkKG1ldGFkYXRhLm5hbWUhLCBtZXRhZGF0YS5pZFR5cGUsIHZhbHVlIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih1bmRlZmluZWQgPT09IGRvY1sgcHJvcGVydHkgXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NbIHByb3BlcnR5IF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkb2MgYXMgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+O1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBoeWRyYXRlPFQgZXh0ZW5kcyB7fT4oZW50aXR5IDogVCwgZGF0YSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBvdWNoREIuQ29yZS5HZXRNZXRhLCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCB7IGRlcHRoID0gSW5maW5pdHksIGNpcmN1bGFyQ2FjaGUgPSB7fSB9IDogSHlkcmF0ZU9wdGlvbnMgPSB7fSkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgaWYoZGF0YS5faWQgaW4gY2lyY3VsYXJDYWNoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNpcmN1bGFyQ2FjaGVbIGRhdGEuX2lkIF07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNpcmN1bGFyQ2FjaGVbIGRhdGEuX2lkIF0gPSBlbnRpdHk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCB7IGlkOiBkYXRhLl9pZCwgcmV2OiBkYXRhLl9yZXYgfSk7XG4gICAgICAgIFxuICAgICAgICBpZihtZXRhZGF0YS5hdHRhY2htZW50cykge1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eSwgJ19hdHRhY2htZW50cycsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogZGF0YS5fYXR0YWNobWVudHMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9uIF0gb2YgbWV0YWRhdGEucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBkYXRhWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICBpZihudWxsID09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBudWxsITtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFJlbGF0aW9uTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25NZXRhZGF0YSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0TWV0YWRhdGEoYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25SZXBvc2l0b3J5ID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRSZXBvc2l0b3J5KGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgQmVsb25nc1RvTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgPyBjaXJjdWxhckNhY2hlW3ZhbHVlXSA6IGF3YWl0IHJlbGF0aW9uUmVwb3NpdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5fcmVhZCh2YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXB0aDogZGVwdGggLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaXJjdWxhckNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGF3YWl0IHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZShyZWxhdGlvblJlcG9zaXRvcnksIHZhbHVlLCBkZXB0aCAtIDEsIGNpcmN1bGFyQ2FjaGUpIGFzIGFueTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNYXBNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IGtleXMubWFwKGsgPT4gdmFsdWVbIGsgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGl0aWVzID0gYXdhaXQgcmVhZEFsbFdpdGhDaXJjdWxhckNhY2hlKHJlbGF0aW9uUmVwb3NpdG9yeSwgdmFsdWVzLCBkZXB0aCAtIDEsIGNpcmN1bGFyQ2FjaGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsIDogYW55ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxbIGtleSBdID0gZW50aXRpZXMuZmluZChlID0+IGUuX2lkID09PSB2YWx1ZVsga2V5IF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSByZWw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSW5saW5lTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gYXdhaXQgcmVsYXRpb25SZXBvc2l0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmh5ZHJhdG9yLmh5ZHJhdGUocmVsYXRpb25SZXBvc2l0b3J5LmJ1aWxkKCksIHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBQcm9wZXJ0eU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5nZXRQcm90b3R5cGVPZihlbnRpdHkpLCBwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gdW5wYWNrKHZhbHVlLCBhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVhZEFsbFdpdGhDaXJjdWxhckNhY2hlPFQ+KHJlcG8gOiBBZGFtYW50UmVwb3NpdG9yeTxUPiwga2V5cyA6IHN0cmluZ1tdLCBkZXB0aCA6IG51bWJlciwgY2lyY3VsYXJDYWNoZSA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IGFueSB9KSA6IFByb21pc2U8VFtdPiB7XG4gICAgY29uc3QgZmlsdGVyZWRLZXlzID0ga2V5cy5maWx0ZXIoayA9PiAhY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eShrKSk7XG4gICAgbGV0IGZyb21EYiA6IFRbXTtcbiAgICBcbiAgICBpZihmaWx0ZXJlZEtleXMubGVuZ3RoKSB7XG4gICAgICAgIGZyb21EYiA9IGF3YWl0IHJlcG8uX3JlYWRBbGwoeyBrZXlzOiBmaWx0ZXJlZEtleXMsIGluY2x1ZGVfZG9jczogdHJ1ZSB9LCB7IGRlcHRoLCBjaXJjdWxhckNhY2hlIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ga2V5cy5tYXAoa2V5ID0+IHtcbiAgICAgICAgaWYoY2lyY3VsYXJDYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2lyY3VsYXJDYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZnJvbURiICYmIGZyb21EYi5maW5kKGUgPT4gKGUgYXMgYW55KS5faWQgPT09IGtleSk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gcmVsYXRpb25Ub0lkPFQ+KHJlbCA6IHN0cmluZyB8IFQsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIGlkIDogQWRhbWFudElkKSA6IHN0cmluZyB7XG4gICAgcmV0dXJuIHR5cGVvZiByZWwgPT09ICdzdHJpbmcnXG4gICAgICAgID8gcmVsXG4gICAgICAgIDogaWQuYnVpbGQobWV0YWRhdGEubmFtZSEsIG1ldGFkYXRhLmlkVHlwZSwgcmVsWyBtZXRhZGF0YS5pZCBdIGFzIGFueSlcbn1cblxuZnVuY3Rpb24gdW5wYWNrKHZhbHVlIDogYW55LCB0eXBlIDogVHlwZSkgOiBhbnkge1xuICAgIGlmKHR5cGUgPT09IERhdGUgJiYgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIl19