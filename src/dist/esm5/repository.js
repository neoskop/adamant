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
var AdamantRepository = /** @class */ (function () {
    function AdamantRepository(db, entityClass, metadata, equal, id, bulk, hydrator, validator) {
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
    AdamantRepository.prototype.create = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var doc, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validator.validate(entity, this.metadata)];
                    case 1:
                        _a.sent();
                        doc = this.hydrator.dehydrate(entity, this.metadata);
                        return [4 /*yield*/, this.db.put(doc)];
                    case 2:
                        result = _a.sent();
                        markIdRev(entity, result);
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    AdamantRepository.prototype.upsert = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var doc, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validator.validate(entity, this.metadata)];
                    case 1:
                        _a.sent();
                        doc = this.hydrator.dehydrate(entity, this.metadata);
                        return [4 /*yield*/, this._upsert(this.id.build(/** @type {?} */ ((this.metadata.name)), this.metadata.idType, /** @type {?} */ (entity[this.metadata.id])), doc)];
                    case 2:
                        result = _a.sent();
                        markIdRev(entity, result);
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} id
     * @param {?} document
     * @return {?}
     */
    AdamantRepository.prototype._upsert = /**
     * \@internal
     * @param {?} id
     * @param {?} document
     * @return {?}
     */
    function (id, document) {
        var _this = this;
        return this.db.upsert(id, function (existingDoc) {
            var _a = /** @type {?} */ (document), _1 = _a._id, _2 = _a._rev, d1 = tslib_1.__rest(_a, ["_id", "_rev"]);
            var _b = /** @type {?} */ (existingDoc), _3 = _b._id, _4 = _b._rev, d2 = tslib_1.__rest(_b, ["_id", "_rev"]);
            if (_this.equal(d1, d2)) {
                return false;
            }
            return document;
        });
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    AdamantRepository.prototype.update = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var doc, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validator.validate(entity, this.metadata)];
                    case 1:
                        _a.sent();
                        doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
                        return [4 /*yield*/, this.db.put(doc)];
                    case 2:
                        result = _a.sent();
                        markIdRev(entity, result);
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    AdamantRepository.prototype.delete = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var doc, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validator.validate(entity, this.metadata)];
                    case 1:
                        _a.sent();
                        doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: true });
                        doc._deleted = true;
                        return [4 /*yield*/, this.db.put(doc)];
                    case 2:
                        result = _a.sent();
                        markIdRev(entity, result);
                        markDeleted(entity);
                        return [2 /*return*/, entity];
                }
            });
        });
    };
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype.read = /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    function (id, options) {
        return this._read(this.id.build(/** @type {?} */ ((this.metadata.name)), this.metadata.idType, id), options);
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype._read = /**
     * \@internal
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    function (id, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.hydrator).hydrate;
                        _c = [Object.create(this.entityClass.prototype)];
                        return [4 /*yield*/, this._readRaw(id)];
                    case 1: return [2 /*return*/, _b.apply(_a, _c.concat([_d.sent(), this.metadata, options]))];
                }
            });
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} id
     * @return {?}
     */
    AdamantRepository.prototype._readRaw = /**
     * \@internal
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queryBatcher.read([id])];
                    case 1:
                        result = _a.sent();
                        if (!result[0]) {
                            throw {
                                status: 404,
                                name: 'not_found',
                                message: 'missing',
                                reason: 'missing',
                                id: id
                            };
                        }
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    /**
     * @param {?=} ids
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype.readAll = /**
     * @param {?=} ids
     * @param {?=} options
     * @return {?}
     */
    function (ids, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var opt;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                opt = /** @type {?} */ ({
                    include_docs: true
                });
                if (ids) {
                    opt.keys = ids.map(function (id) { return _this.id.build(/** @type {?} */ ((_this.metadata.name)), _this.metadata.idType, id); }).sort(function (a, b) { return a.localeCompare(b); });
                }
                else {
                    opt.startkey = this.id.head(/** @type {?} */ ((this.metadata.name)));
                    opt.endkey = this.id.tail(/** @type {?} */ ((this.metadata.name)));
                }
                return [2 /*return*/, this._readAll(opt, options)];
            });
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} opt
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype._readAll = /**
     * \@internal
     * @param {?} opt
     * @param {?=} options
     * @return {?}
     */
    function (opt, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, this._readAllRaw(opt)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.sent())
                                .map(function (doc) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options)];
                            }); }); })])];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /** @internal */
    /**
     * \@internal
     * @param {?} opt
     * @return {?}
     */
    AdamantRepository.prototype._readAllRaw = /**
     * \@internal
     * @param {?} opt
     * @return {?}
     */
    function (opt) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(opt.include_docs && 'keys' in opt)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.queryBatcher.read(opt.keys)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, this.db.allDocs(opt)];
                    case 3: return [2 /*return*/, (_a.sent()).rows.map(function (r) { return ((r.doc)); }).filter(Boolean)];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    AdamantRepository.prototype.query = /**
     * @return {?}
     */
    function () {
        return new QueryBuilder(this, this.id.head(/** @type {?} */ ((this.metadata.name))), this.id.tail(/** @type {?} */ ((this.metadata.name))));
    };
    /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype.executeQuery = /**
     * @param {?} query
     * @param {?=} options
     * @return {?}
     */
    function (query, options) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, this.db.find(query.toFindRequest())];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.sent()).docs
                                .map(function (doc) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                                return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options)];
                            }); }); })])];
                    case 2: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * @param {?=} props
     * @return {?}
     */
    AdamantRepository.prototype.build = /**
     * @param {?=} props
     * @return {?}
     */
    function (props) {
        if (props === void 0) { props = {}; }
        return populate(Object.create(this.entityClass.prototype), props);
    };
    /**
     * @template T
     * @param {?} doc
     * @return {?}
     */
    AdamantRepository.prototype.persistDesignDoc = /**
     * @template T
     * @param {?} doc
     * @return {?}
     */
    function (doc) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, classAnnotations, propertyAnnotations, document, propertyAnnotations_1, propertyAnnotations_1_1, _c, property, annotations, annotations_1, annotations_1_1, annotation, value, type;
            var _this = this;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        classAnnotations = getClassMetadata(doc.constructor, DesignDocMetadata);
                        propertyAnnotations = getAllPropertyMetadata(doc.constructor);
                        if (1 !== classAnnotations.length) {
                            throw new Error("Design doc annotation required");
                        }
                        if (classAnnotations[0].entity !== this.entityClass) {
                            throw new Error("Invalid design doc entity");
                        }
                        document = {
                            _id: "_design/" + classAnnotations[0].name,
                            views: {},
                            filters: {}
                        };
                        try {
                            for (propertyAnnotations_1 = tslib_1.__values(propertyAnnotations), propertyAnnotations_1_1 = propertyAnnotations_1.next(); !propertyAnnotations_1_1.done; propertyAnnotations_1_1 = propertyAnnotations_1.next()) {
                                _c = tslib_1.__read(propertyAnnotations_1_1.value, 2), property = _c[0], annotations = _c[1];
                                try {
                                    for (annotations_1 = tslib_1.__values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
                                        annotation = annotations_1_1.value;
                                        if (annotation instanceof ViewMetadata) {
                                            value = doc[/** @type {?} */ (property)];
                                            type = typeof value;
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
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (annotations_1_1 && !annotations_1_1.done && (_b = annotations_1.return)) _b.call(annotations_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (propertyAnnotations_1_1 && !propertyAnnotations_1_1.done && (_a = propertyAnnotations_1.return)) _a.call(propertyAnnotations_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, this.db.upsert(document._id, function (existingDoc) {
                                var _a = /** @type {?} */ (document), _1 = _a._id, _2 = _a._rev, d1 = tslib_1.__rest(_a, ["_id", "_rev"]);
                                var _b = /** @type {?} */ (existingDoc), _3 = _b._id, _4 = _b._rev, d2 = tslib_1.__rest(_b, ["_id", "_rev"]);
                                if (_this.equal(d1, d2)) {
                                    return false;
                                }
                                return document;
                            })];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @template T, P
     * @param {?} designDoc
     * @param {?} name
     * @param {?=} __2
     * @return {?}
     */
    AdamantRepository.prototype.view = /**
     * @template T, P
     * @param {?} designDoc
     * @param {?} name
     * @param {?=} __2
     * @return {?}
     */
    function (designDoc, name, _a) {
        if (_a === void 0) { _a = {}; }
        var depth = _a.depth, circularCache = _a.circularCache, options = tslib_1.__rest(_a, ["depth", "circularCache"]);
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var classAnnotation, propertyAnnotation, _b, _c;
            var _this = this;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        classAnnotation = getClassMetadata(designDoc, DesignDocMetadata)[0];
                        if (!classAnnotation) {
                            throw new Error("Design doc annotation required");
                        }
                        if (classAnnotation.entity !== this.entityClass) {
                            throw new Error("Invalid design doc entity");
                        }
                        propertyAnnotation = getPropertyMetadata(designDoc, /** @type {?} */ (name), ViewMetadata);
                        if (!propertyAnnotation) {
                            throw new Error("Unknown view \"" + name + "\"");
                        }
                        if (!options) {
                            options = {};
                        }
                        options.include_docs = true;
                        _c = (_b = Promise).all;
                        return [4 /*yield*/, this.rawView(classAnnotation.name + "/" + name, options)];
                    case 1: return [4 /*yield*/, _c.apply(_b, [(_d.sent())
                                .rows.map(function (row) { return ((row.doc)); })
                                .map(function (doc) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                return tslib_1.__generator(this, function (_a) {
                                    return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, {
                                            depth: depth,
                                            circularCache: circularCache
                                        })];
                                });
                            }); })])];
                    case 2: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    /**
     * @template R
     * @param {?} name
     * @param {?=} options
     * @return {?}
     */
    AdamantRepository.prototype.rawView = /**
     * @template R
     * @param {?} name
     * @param {?=} options
     * @return {?}
     */
    function (name, options) {
        return this.db.query(name, options);
    };
    AdamantRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AdamantRepository.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
        { type: Metadata, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_EQUAL_CHECKER,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
        { type: Bulk },
        { type: Hydrator },
        { type: Validator }
    ]; };
    return AdamantRepository;
}());
export { AdamantRepository };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJyZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQVEsc0JBQXNCLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakgsT0FBTyxFQUFrQixRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZELE9BQU8sS0FBSyxLQUFLLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDakUsT0FBTyxFQUNILGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUNyQixVQUFVLEVBR2IsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUczQixNQUFNO0lBQ0YsT0FBTyxLQUFL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RyxDQUFDLEdBQUcsS0FBQyxDQUFDO2lDQUN6QixHQUFHLENBQUMsVUFBTSxHQUFHOztvQ0FBSSxzQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7NENBQ25HLEtBQUssT0FBQTs0Q0FDTCxhQUFhLGVBQUE7eUNBQ2hCLENBQUMsRUFBQTs7aUNBQUEsQ0FBQyxFQUNOLEVBQUE7NEJBTkQsc0JBQU8sU0FNTixFQUFBOzs7O0tBQ0o7Ozs7Ozs7SUFFRCxtQ0FBTzs7Ozs7O0lBQVAsVUFBZSxJQUFhLEVBQUUsT0FBd0M7UUFDbEUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdkM7O2dCQWpQSixVQUFVOzs7O2dEQUlNLE1BQU0sU0FBQyxrQkFBa0I7Z0RBQ3pCLE1BQU0sU0FBQyxvQkFBb0I7Z0JBL0JuQyxRQUFRLHVCQWdDQSxNQUFNLFNBQUMsdUJBQXVCO2dEQUM5QixNQUFNLFNBQUMscUJBQXFCO2dEQUM1QixNQUFNLFNBQUMsVUFBVTtnQkFqQ3pCLElBQUk7Z0JBRlksUUFBUTtnQkFGeEIsU0FBUzs7NEJBRGxCOztTQStCYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IEN0b3IsIGdldEFsbFByb3BlcnR5TWV0YWRhdGEsIGdldENsYXNzTWV0YWRhdGEsIGdldFByb3BlcnR5TWV0YWRhdGEsIHBvcHVsYXRlIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucywgSHlkcmF0b3IgfSBmcm9tICcuL2h5ZHJhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IG1hcmtEZWxldGVkLCBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCAqIGFzIGVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBSZWFkUXVlcnlCYXRjaGVyIH0gZnJvbSAnLi9yZWFkLXF1ZXJ5LWJhdGNoZXInO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyJztcbmltcG9ydCB7IERlc2lnbkRvY01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9kZXNpZ24tZG9jJztcbmltcG9ydCB7IFZpZXdNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvdmlldyc7XG5pbXBvcnQgeyBGaWx0ZXJNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZmlsdGVyJztcbmltcG9ydCB7IFZhbGlkYXRlRG9jTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3ZhbGlkYXRlLWRvYyc7XG5pbXBvcnQge1xuICAgIEFEQU1BTlRfQ09OTkVDVElPTixcbiAgICBBREFNQU5UX0VOVElUWV9DTEFTUyxcbiAgICBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgRXF1YWxDaGVja2VyXG59IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxDaGVja2VyRmFjdG9yeSgpIHtcbiAgICByZXR1cm4gZXF1YWw7XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcXVlcnlCYXRjaGVyID0gbmV3IFJlYWRRdWVyeUJhdGNoZXIodGhpcy5kYik7XG4gICAgXG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0NPTk5FQ1RJT04pIHByb3RlY3RlZCByZWFkb25seSBkYiA6IFBvdWNoREIuRGF0YWJhc2U8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9DTEFTUykgcHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eUNsYXNzIDogQ3RvcjxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRU5USVRZX01FVEFEQVRBKSBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRVFVQUxfQ0hFQ0tFUikgcHJvdGVjdGVkIHJlYWRvbmx5IGVxdWFsIDogRXF1YWxDaGVja2VyLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9JRCkgcHJvdGVjdGVkIHJlYWRvbmx5IGlkIDogQWRhbWFudElkLFxuICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBidWxrIDogQnVsazxUPixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaHlkcmF0b3IgOiBIeWRyYXRvcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdmFsaWRhdG9yIDogVmFsaWRhdG9yKSB7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNyZWF0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBzZXJ0KGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fdXBzZXJ0KHRoaXMuaWQuYnVpbGQodGhpcy5tZXRhZGF0YS5uYW1lISwgdGhpcy5tZXRhZGF0YS5pZFR5cGUsIGVudGl0eVsgdGhpcy5tZXRhZGF0YS5pZCBdIGFzIGFueSksIGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF91cHNlcnQoaWQgOiBzdHJpbmcsIGRvY3VtZW50IDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+KSA6IFByb21pc2U8UG91Y2hEQi5VcHNlcnRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi51cHNlcnQoaWQsIGV4aXN0aW5nRG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMSwgX3JldjogXzIsIC4uLmQxIH0gPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzMsIF9yZXY6IF80LCAuLi5kMiB9ID0gZXhpc3RpbmdEb2MgYXMgYW55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmVxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBkYXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZGVsZXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT4gJiBQb3VjaERCLkNvcmUuQ2hhbmdlc01ldGEgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGRvYy5fZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgbWFya0RlbGV0ZWQoZW50aXR5KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIHJlYWQoaWQgOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQodGhpcy5pZC5idWlsZCh0aGlzLm1ldGFkYXRhLm5hbWUhLCB0aGlzLm1ldGFkYXRhLmlkVHlwZSwgaWQpLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkKGlkIDogc3RyaW5nLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh5ZHJhdG9yLmh5ZHJhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIGF3YWl0IHRoaXMuX3JlYWRSYXcoaWQpLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkUmF3KGlkIDogc3RyaW5nKSA6IFByb21pc2U8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4oWyBpZCBdKTtcbiAgICAgICAgaWYoIXJlc3VsdFsgMCBdKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgc3RhdHVzIDogNDA0LFxuICAgICAgICAgICAgICAgIG5hbWUgICA6ICdub3RfZm91bmQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdtaXNzaW5nJyxcbiAgICAgICAgICAgICAgICByZWFzb24gOiAnbWlzc2luZycsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdFsgMCBdO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyByZWFkQWxsKGlkcz8gOiAoc3RyaW5nIHwgbnVtYmVyKVtdLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zICYgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWVcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIFxuICAgICAgICBpZihpZHMpIHtcbiAgICAgICAgICAgIG9wdC5rZXlzID0gaWRzLm1hcChpZCA9PiB0aGlzLmlkLmJ1aWxkKHRoaXMubWV0YWRhdGEubmFtZSEsIHRoaXMubWV0YWRhdGEuaWRUeXBlLCBpZCkpLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHQuc3RhcnRrZXkgPSB0aGlzLmlkLmhlYWQodGhpcy5tZXRhZGF0YS5uYW1lISk7XG4gICAgICAgICAgICBvcHQuZW5ka2V5ID0gdGhpcy5pZC50YWlsKHRoaXMubWV0YWRhdGEubmFtZSEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZEFsbChvcHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGwob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucywgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoKGF3YWl0IHRoaXMuX3JlYWRBbGxSYXcob3B0KSlcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGxSYXcob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucykgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIGlmKG9wdC5pbmNsdWRlX2RvY3MgJiYgJ2tleXMnIGluIG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4ob3B0LmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZGIuYWxsRG9jczxUPihvcHQpKS5yb3dzLm1hcChyID0+IHIuZG9jISkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBcbiAgICBxdWVyeSgpIDogUXVlcnlCdWlsZGVyPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBRdWVyeUJ1aWxkZXI8VD4odGhpcywgdGhpcy5pZC5oZWFkKHRoaXMubWV0YWRhdGEubmFtZSEpLCB0aGlzLmlkLnRhaWwodGhpcy5tZXRhZGF0YS5uYW1lISkpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBleGVjdXRlUXVlcnkocXVlcnkgOiBRdWVyeUJ1aWxkZXI8VD4sIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKChhd2FpdCB0aGlzLmRiLmZpbmQocXVlcnkudG9GaW5kUmVxdWVzdCgpKSkuZG9jc1xuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIG9wdGlvbnMpKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGJ1aWxkKHByb3BzIDogUGFydGlhbDxUPiA9IHt9KSA6IFQge1xuICAgICAgICByZXR1cm4gcG9wdWxhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIHByb3BzKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGVyc2lzdERlc2lnbkRvYzxUIGV4dGVuZHMge30+KGRvYyA6IFQpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGNsYXNzQW5ub3RhdGlvbnMgPSBnZXRDbGFzc01ldGFkYXRhKGRvYy5jb25zdHJ1Y3RvciwgRGVzaWduRG9jTWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFubm90YXRpb25zID0gZ2V0QWxsUHJvcGVydHlNZXRhZGF0YTxWaWV3TWV0YWRhdGEgfCBGaWx0ZXJNZXRhZGF0YSB8IFZhbGlkYXRlRG9jTWV0YWRhdGE+KGRvYy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIFxuICAgICAgICBpZigxICE9PSBjbGFzc0Fubm90YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXNpZ24gZG9jIGFubm90YXRpb24gcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NBbm5vdGF0aW9uc1sgMCBdLmVudGl0eSAhPT0gdGhpcy5lbnRpdHlDbGFzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2lnbiBkb2MgZW50aXR5YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBkb2N1bWVudCA6IHtcbiAgICAgICAgICAgIF9pZCA6IHN0cmluZztcbiAgICAgICAgICAgIHZpZXdzIDogeyBbIGtleSA6IHN0cmluZyBdIDogeyBtYXAgOiBzdHJpbmcsIHJlZHVjZT8gOiBzdHJpbmcgfSB9O1xuICAgICAgICAgICAgZmlsdGVycyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IHN0cmluZyB9O1xuICAgICAgICAgICAgdmFsaWRhdGVfZG9jX3VwZGF0ZT8gOiBzdHJpbmc7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgICBfaWQgICAgOiBgX2Rlc2lnbi8ke2NsYXNzQW5ub3RhdGlvbnNbIDAgXS5uYW1lfWAsXG4gICAgICAgICAgICB2aWV3cyAgOiB7fSxcbiAgICAgICAgICAgIGZpbHRlcnM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbnMgXSBvZiBwcm9wZXJ0eUFubm90YXRpb25zKSB7XG4gICAgICAgICAgICBmb3IoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBWaWV3TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBkb2NbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZpZXdzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmlld3NbIHByb3BlcnR5IGFzIHN0cmluZyBdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCAgIDogdmFsdWUubWFwLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiB2YWx1ZS5yZWR1Y2UgJiYgdmFsdWUucmVkdWNlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEZpbHRlck1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZpbHRlcnNbIHByb3BlcnR5IGFzIHN0cmluZyBdID0gZG9jWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFZhbGlkYXRlRG9jTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmFsaWRhdGVfZG9jX3VwZGF0ZSA9IGRvY1sgcHJvcGVydHkgYXMga2V5b2YgVCBdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmRiLnVwc2VydDxhbnk+KGRvY3VtZW50Ll9pZCwgZXhpc3RpbmdEb2MgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBfaWQ6IF8xLCBfcmV2OiBfMiwgLi4uZDEgfSA9IGRvY3VtZW50IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMywgX3JldjogXzQsIC4uLmQyIH0gPSBleGlzdGluZ0RvYyBhcyBhbnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuZXF1YWwoZDEsIGQyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdmlldzxULCBQIGV4dGVuZHMga2V5b2YgVD4oZGVzaWduRG9jIDogQ3RvcjxUPiwgbmFtZSA6IFAsIHsgZGVwdGgsIGNpcmN1bGFyQ2FjaGUsIC4uLm9wdGlvbnMgfSA6IEh5ZHJhdGVPcHRpb25zICYgUG91Y2hEQi5RdWVyeS5PcHRpb25zPFQsIGFueT4gPSB7fSkge1xuICAgICAgICBjb25zdCBjbGFzc0Fubm90YXRpb24gPSBnZXRDbGFzc01ldGFkYXRhKGRlc2lnbkRvYywgRGVzaWduRG9jTWV0YWRhdGEpWyAwIF07XG4gICAgICAgIFxuICAgICAgICBpZighY2xhc3NBbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERlc2lnbiBkb2MgYW5ub3RhdGlvbiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjbGFzc0Fubm90YXRpb24uZW50aXR5ICE9PSB0aGlzLmVudGl0eUNsYXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVzaWduIGRvYyBlbnRpdHlgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvcGVydHlBbm5vdGF0aW9uID0gZ2V0UHJvcGVydHlNZXRhZGF0YShkZXNpZ25Eb2MsIG5hbWUgYXMgc3RyaW5nLCBWaWV3TWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXByb3BlcnR5QW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHZpZXcgXCIke25hbWV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5yYXdWaWV3KGAke2NsYXNzQW5ub3RhdGlvbi5uYW1lfS8ke25hbWV9YCwgb3B0aW9ucykpXG4gICAgICAgICAgICAucm93cy5tYXAocm93ID0+IHJvdy5kb2MhKVxuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIHtcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBjaXJjdWxhckNhY2hlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICByYXdWaWV3PFIgPSBUPihuYW1lIDogc3RyaW5nLCBvcHRpb25zPyA6IFBvdWNoREIuUXVlcnkuT3B0aW9uczxSLCBhbnk+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnF1ZXJ5KG5hbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cbiJdfQ==