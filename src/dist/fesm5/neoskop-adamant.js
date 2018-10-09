import { __awaiter, __generator, __extends, __values, __read, __rest, __assign, __spread } from 'tslib';
import 'reflect-metadata';
import { resolveForwardRef, InjectionToken, Inject, Injectable, Injector } from '@angular/core';
import * as equal from 'fast-deep-equal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CLASS_METADATA = new WeakMap();
/** @type {?} */
var PROPERTY_METADATA = new WeakMap();
/**
 * @template T
 * @param {?} target
 * @param {?=} type
 * @return {?}
 */
function getClassMetadata(target, type) {
    if (!CLASS_METADATA.has(target)) {
        return [];
    }
    return /** @type {?} */ ((CLASS_METADATA.get(target))).filter(function (a) { return !type || a instanceof type; });
}
/**
 * @param {?} target
 * @param {?} metadata
 * @return {?}
 */
function pushClassMetadata(target, metadata) {
    if (!CLASS_METADATA.has(target)) {
        CLASS_METADATA.set(target, []);
    } /** @type {?} */
    ((CLASS_METADATA.get(target))).push(metadata);
}
/**
 * @template T
 * @param {?} target
 * @param {?} property
 * @param {?=} type
 * @return {?}
 */
function getPropertyMetadata(target, property, type) {
    if (!PROPERTY_METADATA.has(target) || !/** @type {?} */ ((PROPERTY_METADATA.get(target))).has(property)) {
        return [];
    }
    return /** @type {?} */ ((/** @type {?} */ ((PROPERTY_METADATA.get(target))).get(property))).filter(function (a) { return !type || a instanceof type; });
}
/**
 * @template T
 * @param {?} target
 * @return {?}
 */
function getAllPropertyMetadata(target) {
    if (!PROPERTY_METADATA.has(target)) {
        return new Map();
    }
    return /** @type {?} */ ((PROPERTY_METADATA.get(target)));
}
/**
 * @param {?} target
 * @param {?} property
 * @param {?} metadata
 * @return {?}
 */
function pushPropertyMetadata(target, property, metadata) {
    if (!PROPERTY_METADATA.has(target)) {
        PROPERTY_METADATA.set(target, new Map());
    }
    if (!/** @type {?} */ ((PROPERTY_METADATA.get(target))).has(property)) {
        /** @type {?} */ ((PROPERTY_METADATA.get(target))).set(property, []);
    } /** @type {?} */
    ((/** @type {?} */ ((PROPERTY_METADATA.get(target))).get(property))).push(metadata);
}
/**
 * @template T
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function populate(target, source) {
    var e_1, _a;
    try {
        for (var _b = __values(/** @type {?} */ (Object.keys(source))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            target[key] = /** @type {?} */ (source[key]);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var PropertyMetadata = /** @class */ (function () {
    function PropertyMetadata() {
    }
    /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    PropertyMetadata.prototype.validate = /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    function (value, key) {
        if (this.required && null == value) {
            throw new Error("Property \"" + (typeof key === 'symbol' ? Symbol.keyFor(key) : key) + "\" required");
        }
    };
    return PropertyMetadata;
}());
/**
 * @param {?=} options
 * @return {?}
 */
function Property(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new PropertyMetadata(), __assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
RelationMetadata = /** @class */ (function (_super) {
    __extends(RelationMetadata, _super);
    function RelationMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RelationMetadata.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return resolveForwardRef((/** @type {?} */ (this))._type);
        },
        // private _entity! : ForwardRefFn | Ctor<T>;
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type /*| ForwardRefFn */) {
            (/** @type {?} */ (this))._type = type;
        },
        enumerable: true,
        configurable: true
    });
    return RelationMetadata;
}(PropertyMetadata));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
BelongsToMetadata = /** @class */ (function (_super) {
    __extends(BelongsToMetadata, _super);
    function BelongsToMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BelongsToMetadata;
}(RelationMetadata));
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function BelongsTo(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new BelongsToMetadata(), __assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
DesignDocMetadata = /** @class */ (function () {
    function DesignDocMetadata() {
    }
    return DesignDocMetadata;
}());
/**
 * @template T
 * @param {?} entity
 * @param {?} name
 * @return {?}
 */
function DesignDoc(entity, name) {
    return function (target) {
        pushClassMetadata(target, populate(new DesignDocMetadata(), {
            entity: entity,
            name: name
        }));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var EntityMetadata = /** @class */ (function () {
    function EntityMetadata() {
    }
    return EntityMetadata;
}());
/**
 * @param {?} name
 * @param {?=} options
 * @return {?}
 */
function Entity(name, options) {
    if (options === void 0) { options = {}; }
    return function (target) {
        pushClassMetadata(target, populate(new EntityMetadata(), __assign({ name: name, attachments: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var FilterMetadata = /** @class */ (function () {
    function FilterMetadata() {
    }
    return FilterMetadata;
}());
/**
 * @return {?}
 */
function Filter() {
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new FilterMetadata(), {}));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
HasManyMetadata = /** @class */ (function (_super) {
    __extends(HasManyMetadata, _super);
    function HasManyMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HasManyMetadata;
}(RelationMetadata));
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
function HasMany(type, options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMetadata(), __assign({ type: type, required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
HasManyMapMetadata = /** @class */ (function (_super) {
    __extends(HasManyMapMetadata, _super);
    function HasManyMapMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HasManyMapMetadata;
}(RelationMetadata));
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
function HasManyMap(type, options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMapMetadata(), __assign({ type: type, required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var IdStrategy = {
    Static: 'static',
};
var IdMetadata = /** @class */ (function (_super) {
    __extends(IdMetadata, _super);
    function IdMetadata() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.required = true;
        return _this;
    }
    return IdMetadata;
}(PropertyMetadata));
/**
 * @param {?=} options
 * @return {?}
 */
function Id(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new IdMetadata(), __assign({ strategy: IdStrategy.Static, type: Reflect.getMetadata('design:type', target, property) }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
InlineMetadata = /** @class */ (function (_super) {
    __extends(InlineMetadata, _super);
    function InlineMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InlineMetadata;
}(RelationMetadata));
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function Inline(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new InlineMetadata(), __assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var InlineEntityMetadata = /** @class */ (function () {
    function InlineEntityMetadata() {
    }
    return InlineEntityMetadata;
}());
/**
 * @param {?=} options
 * @return {?}
 */
function InlineEntity(options) {
    if (options === void 0) { options = {}; }
    return function (target) {
        pushClassMetadata(target, populate(new InlineEntityMetadata(), __assign({}, options, { inline: true })));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidateDocMetadata = /** @class */ (function () {
    function ValidateDocMetadata() {
    }
    return ValidateDocMetadata;
}());
/**
 * @return {?}
 */
function ValidateDoc() {
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new ValidateDocMetadata(), {}));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ViewMetadata = /** @class */ (function () {
    function ViewMetadata() {
    }
    return ViewMetadata;
}());
/**
 * @return {?}
 */
function View() {
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new ViewMetadata(), {}));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Hydrator = /** @class */ (function () {
    function Hydrator() {
    }
    return Hydrator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
Validator = /** @class */ (function () {
    function Validator() {
    }
    return Validator;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ADAMANT_CONNECTION = new InjectionToken('ADAMANT_CONNECTION');
/** @type {?} */
var ADAMANT_ENTITY_CLASS = new InjectionToken('ADAMANT_ENTITY_CLASS');
/** @type {?} */
var ADAMANT_ENTITY_METADATA = new InjectionToken('ADAMANT_ENTITY_METADATA');
/** @type {?} */
var ADAMANT_EQUAL_CHECKER = new InjectionToken('ADAMANT_EQUAL_CHECKER');
/** @type {?} */
var ADAMANT_CONNECTION_FACTORY = new InjectionToken('ADAMANT_CONNECTION_FACTORY');
/** @type {?} */
var ADAMANT_ID = new InjectionToken('ADAMANT_ID');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} entity
 * @return {?}
 */
function markDeleted(entity) {
    Object.defineProperty(entity, '_deleted', { configurable: true, value: true });
    return entity;
}
/**
 * @template T
 * @param {?} entity
 * @param {?} res
 * @return {?}
 */
function markIdRev(entity, res) {
    Object.defineProperty(entity, '_id', { configurable: true, value: res.id });
    Object.defineProperty(entity, '_rev', { configurable: true, value: res.rev });
    return entity;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
Metadata = /** @class */ (function () {
    // readonly belongsTo = new Map<string | symbol, BelongsToMetadata<any>>();
    // readonly hasMany = new Map<string | symbol, HasManyMetadata<any>>();
    // readonly hasManyMap = new Map<string | symbol, HasManyMapMetadata<any>>();
    function Metadata(entity) {
        this.entity = entity;
        this.inline = false;
        this.properties = new Map();
        this.parse();
        this.assert();
    }
    /**
     * @return {?}
     */
    Metadata.prototype.parse = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b, e_3, _c;
        /** @type {?} */
        var classMetadata = getClassMetadata(this.entity);
        /** @type {?} */
        var propertyMetadata = getAllPropertyMetadata(this.entity);
        try {
            for (var classMetadata_1 = __values(classMetadata), classMetadata_1_1 = classMetadata_1.next(); !classMetadata_1_1.done; classMetadata_1_1 = classMetadata_1.next()) {
                var annotation = classMetadata_1_1.value;
                if (annotation instanceof EntityMetadata || annotation instanceof InlineEntityMetadata) {
                    Object.assign(this, annotation);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (classMetadata_1_1 && !classMetadata_1_1.done && (_a = classMetadata_1.return)) _a.call(classMetadata_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var propertyMetadata_1 = __values(propertyMetadata), propertyMetadata_1_1 = propertyMetadata_1.next(); !propertyMetadata_1_1.done; propertyMetadata_1_1 = propertyMetadata_1.next()) {
                var _d = __read(propertyMetadata_1_1.value, 2), property = _d[0], annotations = _d[1];
                try {
                    for (var annotations_1 = __values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
                        var annotation = annotations_1_1.value;
                        if (annotation instanceof IdMetadata) {
                            (/** @type {?} */ (this)).id = property;
                            (/** @type {?} */ (this)).idType = annotation.type;
                            (/** @type {?} */ (this)).idStrategy = annotation.strategy;
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
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (annotations_1_1 && !annotations_1_1.done && (_c = annotations_1.return)) _c.call(annotations_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (propertyMetadata_1_1 && !propertyMetadata_1_1.done && (_b = propertyMetadata_1.return)) _b.call(propertyMetadata_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @return {?}
     */
    Metadata.prototype.assert = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        try {
            for (var _b = __values((/** @type {?} */ ((this.inline ? [] : ['id', 'idStrategy', 'name', 'attachments'])))), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (null == this[key]) {
                    throw new Error("Missing metadata '" + key + "' for entity \"" + this.entity.name + "\"");
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    return Metadata;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
var BulkOperation = {
    Create: 'create',
    Update: 'update',
    Delete: 'delete',
};
/**
 * @template T
 */
var Bulk = /** @class */ (function () {
    function Bulk(db, entityClass, metadata, hydrator, validator) {
        this.db = db;
        this.entityClass = entityClass;
        this.metadata = metadata;
        this.hydrator = hydrator;
        this.validator = validator;
    }
    /**
     * @param {?} entities
     * @param {?} operation
     * @return {?}
     */
    Bulk.prototype.bulk = /**
     * @param {?} entities
     * @param {?} operation
     * @return {?}
     */
    function (entities, operation) {
        return __awaiter(this, void 0, void 0, function () {
            var docs, result, errors;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (0 === entities.length) {
                            return [2 /*return*/, entities];
                        }
                        return [4 /*yield*/, Promise.all(entities.map(function (entity) { return __awaiter(_this, void 0, void 0, function () {
                                var doc;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(entity instanceof this.entityClass)) {
                                                throw new Error("Entity \"" + entity + "\" is not instanceof " + this.entityClass.name);
                                            }
                                            return [4 /*yield*/, this.validator.validate(entity, this.metadata)];
                                        case 1:
                                            _a.sent();
                                            doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: operation === BulkOperation.Update || operation === BulkOperation.Delete });
                                            if (operation === BulkOperation.Delete) {
                                                doc._deleted = true;
                                            }
                                            return [2 /*return*/, doc];
                                    }
                                });
                            }); }))];
                    case 1:
                        docs = _a.sent();
                        return [4 /*yield*/, this.db.bulkDocs(docs)];
                    case 2:
                        result = _a.sent();
                        errors = result.filter(function (r) { return Object.prototype.hasOwnProperty.call(r, 'error'); });
                        if (0 < errors.length) {
                            throw errors;
                        }
                        result.forEach(function (res, index) {
                            if (operation === BulkOperation.Delete) {
                                markDeleted(entities[index]);
                            }
                            markIdRev(entities[index], res);
                        });
                        return [2 /*return*/, entities];
                }
            });
        });
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    Bulk.prototype.create = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        return this.bulk(entities, BulkOperation.Create);
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    Bulk.prototype.update = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        return this.bulk(entities, BulkOperation.Update);
    };
    /**
     * @param {?} entities
     * @return {?}
     */
    Bulk.prototype.delete = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        return this.bulk(entities, BulkOperation.Delete);
    };
    /** @nocollapse */
    Bulk.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
        { type: Metadata, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
        { type: Hydrator },
        { type: Validator }
    ]; };
    return Bulk;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function defer() {
    /** @type {?} */
    var resolve;
    /** @type {?} */
    var reject;
    /** @type {?} */
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return Object.assign(promise, { resolve: resolve, reject: reject });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ReadQueryBatcher = /** @class */ (function () {
    function ReadQueryBatcher(db) {
        this.db = db;
        this.queue = [];
    }
    /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    ReadQueryBatcher.prototype.read = /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        var _a;
        (_a = this.queue).push.apply(_a, __spread(keys));
        return this.schedule().then(function (docs) {
            return keys
                .map(function (key) { return docs.find(function (doc) { return doc._id === key; }); })
                .filter(Boolean)
                .map(function (doc) { return JSON.parse(JSON.stringify(doc)); });
        });
    };
    /**
     * @template T
     * @return {?}
     */
    ReadQueryBatcher.prototype.schedule = /**
     * @template T
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.deffered) {
            setImmediate(function () {
                _this.execute();
            });
            this.deffered = defer();
            this.deffered.then(function () {
                delete _this.deffered;
            }, function () {
                delete _this.deffered;
            });
        }
        return this.deffered;
    };
    /**
     * @return {?}
     */
    ReadQueryBatcher.prototype.execute = /**
     * @return {?}
     */
    function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, rows, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = this.queue.filter(function (v, i, a) { return i === a.indexOf(v); });
                        this.queue = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db.allDocs({
                                include_docs: true,
                                keys: keys
                            })];
                    case 2:
                        rows = (_a.sent()).rows;
                        ((this.deffered)).resolve(rows.map(function (r) { return r.doc; }).filter(Boolean));
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        /** @type {?} */ ((this.deffered)).reject(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ReadQueryBatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
QueryBuilder = /** @class */ (function () {
    function QueryBuilder(repository, head, tail) {
        this.repository = repository;
        this._selector = {};
        this._sort = [];
        this._selector._id = {
            $gt: head,
            $lt: tail
        };
    }
    /**
     * @param {?} fieldOrSelector
     * @param {?=} condition
     * @return {?}
     */
    QueryBuilder.prototype.selector = /**
     * @param {?} fieldOrSelector
     * @param {?=} condition
     * @return {?}
     */
    function (fieldOrSelector, condition) {
        if (typeof fieldOrSelector === 'string') {
            if (typeof condition !== 'object') {
                condition = {
                    $eq: condition
                };
            }
            if (fieldOrSelector in this._selector) {
                Object.assign(this._selector[fieldOrSelector], condition);
            }
            else {
                this._selector[fieldOrSelector] = condition;
            }
        }
        else {
            for (var key in fieldOrSelector) {
                this.selector(key, fieldOrSelector[key]);
            }
        }
        return this;
    };
    /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    QueryBuilder.prototype.sort = /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    function (propertyOrSort, direction) {
        var _a;
        if (typeof propertyOrSort === 'string' && direction) {
            this._sort.push((_a = {}, _a[propertyOrSort] = direction, _a));
        }
        else {
            this._sort.push(propertyOrSort);
        }
        return this;
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    QueryBuilder.prototype.limit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._limit = limit;
        return this;
    };
    /**
     * @param {?} skip
     * @return {?}
     */
    QueryBuilder.prototype.skip = /**
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this._skip = skip;
        return this;
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    QueryBuilder.prototype.resolve = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.repository.executeQuery(this, options);
    };
    /**
     * @return {?}
     */
    QueryBuilder.prototype.toFindRequest = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var req = {
            selector: this._selector
        };
        if (0 < this._sort.length) {
            req.sort = this._sort;
        }
        if (this._limit != null) {
            req.limit = this._limit;
        }
        if (this._skip != null) {
            req.skip = this._skip;
        }
        return req;
    };
    return QueryBuilder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function equalCheckerFactory() {
    return equal;
}
/**
 * @template T
 */
var AdamantRepository = /** @class */ (function () {
    function AdamantRepository(db, entityClass, metadata, equal$$1, id, bulk, hydrator, validator) {
        this.db = db;
        this.entityClass = entityClass;
        this.metadata = metadata;
        this.equal = equal$$1;
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
        return __awaiter(this, void 0, void 0, function () {
            var doc, result;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var doc, result;
            return __generator(this, function (_a) {
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
            var _a = /** @type {?} */ (document), _1 = _a._id, _2 = _a._rev, d1 = __rest(_a, ["_id", "_rev"]);
            var _b = /** @type {?} */ (existingDoc), _3 = _b._id, _4 = _b._rev, d2 = __rest(_b, ["_id", "_rev"]);
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
        return __awaiter(this, void 0, void 0, function () {
            var doc, result;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var doc, result;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
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
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var opt;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, this._readAllRaw(opt)];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.sent())
                                .map(function (doc) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, this.db.find(query.toFindRequest())];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.sent()).docs
                                .map(function (doc) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, e_2, _b, classAnnotations, propertyAnnotations, document, propertyAnnotations_1, propertyAnnotations_1_1, _c, property, annotations, annotations_1, annotations_1_1, annotation, value, type;
            var _this = this;
            return __generator(this, function (_d) {
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
                            for (propertyAnnotations_1 = __values(propertyAnnotations), propertyAnnotations_1_1 = propertyAnnotations_1.next(); !propertyAnnotations_1_1.done; propertyAnnotations_1_1 = propertyAnnotations_1.next()) {
                                _c = __read(propertyAnnotations_1_1.value, 2), property = _c[0], annotations = _c[1];
                                try {
                                    for (annotations_1 = __values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
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
                                var _a = /** @type {?} */ (document), _1 = _a._id, _2 = _a._rev, d1 = __rest(_a, ["_id", "_rev"]);
                                var _b = /** @type {?} */ (existingDoc), _3 = _b._id, _4 = _b._rev, d2 = __rest(_b, ["_id", "_rev"]);
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
        var depth = _a.depth, circularCache = _a.circularCache, options = __rest(_a, ["depth", "circularCache"]);
        return __awaiter(this, void 0, void 0, function () {
            var classAnnotation, propertyAnnotation, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
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
                                .map(function (doc) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HydratorImpl = /** @class */ (function (_super) {
    __extends(HydratorImpl, _super);
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
            for (var _b = __values(metadata.properties), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), property = _d[0], annotation = _d[1];
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
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _e, _loop_2, this_2, _f, _g, _h, property, annotation, e_2_1;
            return __generator(this, function (_j) {
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
                            return __generator(this, function (_j) {
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
                                            for (keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
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
                        _f = __values(metadata.properties), _g = _f.next();
                        _j.label = 2;
                    case 2:
                        if (!!_g.done) return [3 /*break*/, 5];
                        _h = __read(_g.value, 2), property = _h[0], annotation = _h[1];
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
/**
 * @template T
 * @param {?} repo
 * @param {?} keys
 * @param {?} depth
 * @param {?} circularCache
 * @return {?}
 */
function readAllWithCircularCache(repo, keys, depth, circularCache) {
    return __awaiter(this, void 0, void 0, function () {
        var filteredKeys, fromDb;
        return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ValidatorImpl = /** @class */ (function (_super) {
    __extends(ValidatorImpl, _super);
    function ValidatorImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    ValidatorImpl.prototype.validate = /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    function (entity, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, _c, _d, property, annotation, e_1_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 5, 6, 7]);
                        _b = __values(metadata.properties), _c = _b.next();
                        _e.label = 1;
                    case 1:
                        if (!!_c.done) return [3 /*break*/, 4];
                        _d = __read(_c.value, 2), property = _d[0], annotation = _d[1];
                        return [4 /*yield*/, annotation.validate(entity[/** @type {?} */ (property)], property)];
                    case 2:
                        _e.sent();
                        _e.label = 3;
                    case 3:
                        _c = _b.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    return ValidatorImpl;
}(Validator));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function adamantIdFactory() {
    return {
        head: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return name + "_0";
        },
        tail: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return name + "_9";
        },
        build: /**
         * @param {?} name
         * @param {?} type
         * @param {?} id
         * @return {?}
         */
        function (name, type, id) {
            if (type === String) {
                return name + "_2_" + id;
            }
            else if (type === Number) {
                /** @type {?} */
                var idStr = id.toString();
                return name + "_1_" + '0'.repeat(16 - idStr.length) + idStr;
            }
            throw new Error("Invalid id type \"" + type + "\"");
        },
        parse: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var match = /^(.*)_(1|2)_(.*)$/.exec(id);
            if (!match) {
                throw new TypeError("Invalid id \"" + id + "\"");
            }
            return {
                name: /** @type {?} */ ((match[1])),
                type: match[2] === '2' ? String : Number,
                id: match[2] === '2' ? match[3] : Number.parseInt(match[3], 10)
            };
        }
    };
}
/**
 * @param {?} factory
 * @return {?}
 */
function createAdamantConnection(factory) {
    /** @type {?} */
    var injector = Injector.create({
        providers: [
            { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
            { provide: AdamantConnectionManager, deps: [ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Injector] },
            { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
            { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] }
        ]
    });
    return injector.get(AdamantConnectionManager);
}
var AdamantConnectionManager = /** @class */ (function () {
    function AdamantConnectionManager(connectionFactory, id, injector) {
        this.connectionFactory = connectionFactory;
        this.id = id;
        this.injector = injector;
        this.connections = new Map();
        this.repositories = new Map();
        this.metadata = new Map();
    }
    /**
     * @return {?}
     */
    AdamantConnectionManager.prototype.getOpenConnections = /**
     * @return {?}
     */
    function () {
        return Array.from(this.connections.values());
    };
    /**
     * @template T
     * @param {?} name
     * @return {?}
     */
    AdamantConnectionManager.prototype.getConnection = /**
     * @template T
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.connections.has(name)) {
            this.connections.set(name, this.createConnection(name));
        }
        return /** @type {?} */ ((this.connections.get(name)));
    };
    /**
     * @return {?}
     */
    AdamantConnectionManager.prototype.clearConnections = /**
     * @return {?}
     */
    function () {
        this.connections.clear();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AdamantConnectionManager.prototype.createConnection = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.connectionFactory(name);
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.getRepository = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        if (!this.repositories.has(entityClass)) {
            this.repositories.set(entityClass, this.createRepository(entityClass));
        }
        return /** @type {?} */ ((this.repositories.get(entityClass)));
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.createRepository = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        /** @type {?} */
        var metadata = this.getMetadata(entityClass);
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: AdamantConnectionManager, useValue: this },
                { provide: AdamantRepository, deps: [ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID, Bulk, Hydrator, Validator] },
                { provide: ADAMANT_ENTITY_CLASS, useValue: entityClass },
                { provide: ADAMANT_ENTITY_METADATA, useValue: metadata, },
                { provide: ADAMANT_CONNECTION, useValue: !metadata.inline ? this.getConnection(/** @type {?} */ ((metadata.name))) : null },
                { provide: HydratorImpl, deps: [ADAMANT_ID, AdamantConnectionManager] },
                { provide: ValidatorImpl, deps: [] },
                { provide: Hydrator, useExisting: metadata.hydrator || HydratorImpl },
                { provide: Validator, useExisting: metadata.validator || ValidatorImpl },
                { provide: Bulk, deps: [ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, Hydrator, Validator] }
            ]
        }).get(AdamantRepository);
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.getMetadata = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        if (!this.metadata.has(entityClass)) {
            this.metadata.set(entityClass, this.createMetadata(entityClass));
        }
        return /** @type {?} */ ((this.metadata.get(entityClass)));
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.createMetadata = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        return new Metadata(entityClass);
    };
    AdamantConnectionManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AdamantConnectionManager.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION_FACTORY,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
        { type: Injector }
    ]; };
    return AdamantConnectionManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BelongsTo, BelongsToMetadata, DesignDoc, DesignDocMetadata, Entity, EntityMetadata, Filter, FilterMetadata, HasMany, HasManyMetadata, HasManyMap, HasManyMapMetadata, Id, IdStrategy, IdMetadata, Inline, InlineMetadata, InlineEntity, InlineEntityMetadata, Property, PropertyMetadata, RelationMetadata, ValidateDoc, ValidateDocMetadata, View, ViewMetadata, BulkOperation, Bulk, adamantIdFactory, createAdamantConnection, AdamantConnectionManager, Hydrator, HydratorImpl, ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Metadata, QueryBuilder, equalCheckerFactory, AdamantRepository, Validator, ValidatorImpl };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVvc2tvcC1hZGFtYW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3V0aWxzL21ldGFkYXRhLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL3Byb3BlcnR5LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL3JlbGF0aW9uLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2JlbG9uZ3MtdG8udHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvZGVzaWduLWRvYy50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9lbnRpdHkudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvZmlsdGVyLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2hhcy1tYW55LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2hhcy1tYW55LW1hcC50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9pZC50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9pbmxpbmUudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvaW5saW5lLWVudGl0eS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy92YWxpZGF0ZS1kb2MudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvdmlldy50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9oeWRyYXRvci50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC92YWxpZGF0b3IudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvaW5qZWN0b3ItdG9rZW5zLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3V0aWxzL21hcmtzLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L21ldGFkYXRhLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2J1bGsudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvdXRpbHMvZGVmZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvcmVhZC1xdWVyeS1iYXRjaGVyLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3F1ZXJ5LWJ1aWxkZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvcmVwb3NpdG9yeS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9oeWRyYXRvci1pbXBsLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3ZhbGlkYXRvci1pbXBsLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Nvbm5lY3Rpb24tbWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBDdG9yPFQ+ID0gRnVuY3Rpb24gfCB7IG5ldyguLi5hcmdzIDogYW55W10pIDogVDsgcHJvdG90eXBlOiBUIH07XG5cbmV4cG9ydCBjb25zdCBDTEFTU19NRVRBREFUQSA9IG5ldyBXZWFrTWFwPEN0b3I8YW55PiwgYW55W10+KCk7XG5leHBvcnQgY29uc3QgUFJPUEVSVFlfTUVUQURBVEEgPSBuZXcgV2Vha01hcDxDdG9yPGFueT4sIE1hcDxzdHJpbmd8c3ltYm9sLCBhbnlbXT4+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc01ldGFkYXRhPFQgPSBhbnk+KHRhcmdldCA6IEN0b3I8YW55PiwgdHlwZT8gOiBDdG9yPFQ+KSA6IFRbXSB7XG4gICAgaWYoIUNMQVNTX01FVEFEQVRBLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIENMQVNTX01FVEFEQVRBLmdldCh0YXJnZXQpIS5maWx0ZXIoYSA9PiAhdHlwZSB8fCBhIGluc3RhbmNlb2YgdHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoQ2xhc3NNZXRhZGF0YSh0YXJnZXQgOiBDdG9yPGFueT4sIG1ldGFkYXRhIDogYW55KSB7XG4gICAgaWYoIUNMQVNTX01FVEFEQVRBLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgIENMQVNTX01FVEFEQVRBLnNldCh0YXJnZXQsIFtdKTtcbiAgICB9XG4gICAgQ0xBU1NfTUVUQURBVEEuZ2V0KHRhcmdldCkhLnB1c2gobWV0YWRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlNZXRhZGF0YTxUID0gYW55Pih0YXJnZXQgOiBhbnksIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wsIHR5cGU/IDogQ3Rvcjxhbnk+KSA6IFRbXSB7XG4gICAgaWYoIVBST1BFUlRZX01FVEFEQVRBLmhhcyh0YXJnZXQpIHx8ICFQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuaGFzKHByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuZ2V0KHByb3BlcnR5KSEuZmlsdGVyKGEgPT4gIXR5cGUgfHwgYSBpbnN0YW5jZW9mIHR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvcGVydHlNZXRhZGF0YTxUID0gYW55Pih0YXJnZXQgOiBhbnkpIDogTWFwPHN0cmluZ3xzeW1ib2wsIFRbXT4ge1xuICAgIGlmKCFQUk9QRVJUWV9NRVRBREFUQS5oYXModGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0IDogYW55LCBwcm9wZXJ0eSA6IHN0cmluZyB8IHN5bWJvbCwgbWV0YWRhdGEgOiBhbnkpIHtcbiAgICBpZighUFJPUEVSVFlfTUVUQURBVEEuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgUFJPUEVSVFlfTUVUQURBVEEuc2V0KHRhcmdldCwgbmV3IE1hcCgpKTtcbiAgICB9XG4gICAgXG4gICAgaWYoIVBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpIS5oYXMocHJvcGVydHkpKSB7XG4gICAgICAgIFBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpIS5zZXQocHJvcGVydHksIFtdKTtcbiAgICB9XG4gICAgXG4gICAgUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhLmdldChwcm9wZXJ0eSkhLnB1c2gobWV0YWRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGU8VD4odGFyZ2V0IDogVCwgc291cmNlIDogUGFydGlhbDxUPikgOiBUIHtcbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkgYXMgKGtleW9mIFQpW10pIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSBhcyBUW2tleW9mIFRdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBUeXBlID0gdHlwZW9mIEJvb2xlYW4gfCB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciB8IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgRGF0ZSB8IEN0b3I8YW55PjtcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5TWV0YWRhdGEge1xuICAgIHR5cGUhOiBUeXBlO1xuICAgIHJlcXVpcmVkITogYm9vbGVhbjtcbiAgICBkZWZhdWx0PzogYW55O1xuICAgIFxuICAgIHZhbGlkYXRlKHZhbHVlIDogYW55LCBrZXkgOiBzdHJpbmcgfCBzeW1ib2wpIHtcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiBudWxsID09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IFwiJHt0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IFN5bWJvbC5rZXlGb3Ioa2V5KSA6IGtleX1cIiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydHkob3B0aW9uczogeyB0eXBlPzogVHlwZSwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogYW55IH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgUHJvcGVydHlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlRm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3RvciB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuL3Byb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uTWV0YWRhdGE8VD4gZXh0ZW5kcyBQcm9wZXJ0eU1ldGFkYXRhIHtcbiAgICByZXF1aXJlZCE6IGJvb2xlYW47XG4gICAgZGVmYXVsdD86IFQ7XG4gICAgLy8gcHJpdmF0ZSBfZW50aXR5ISA6IEZvcndhcmRSZWZGbiB8IEN0b3I8VD47XG4gICAgXG4gICAgc2V0IHR5cGUodHlwZSA6IEN0b3I8VD4gLyp8IEZvcndhcmRSZWZGbiAqLykge1xuICAgICAgICAodGhpcyBhcyBhbnkpLl90eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZ2V0IHR5cGUoKSA6IEN0b3I8VD4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUZvcndhcmRSZWYoKHRoaXMgYXMgYW55KS5fdHlwZSk7XG4gICAgfVxuICAgIFxufVxuIiwiaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgRm9yd2FyZFJlZkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG9NZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEJlbG9uZ3NUbzxUPihvcHRpb25zOiB7IHR5cGU/OiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IEJlbG9uZ3NUb01ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGU6IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eSksXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuZXhwb3J0IGNsYXNzIERlc2lnbkRvY01ldGFkYXRhPFQ+IHtcbiAgICBlbnRpdHkhOiBDdG9yPFQ+O1xuICAgIG5hbWUhOiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBleHBvcnQgY29uc3QgZW1pdCA6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlc2lnbkRvYzxUPihlbnRpdHkgOiBDdG9yPFQ+LCBuYW1lOiBzdHJpbmcpIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRGVzaWduRG9jTWV0YWRhdGE8VD4oKSwge1xuICAgICAgICAgICAgZW50aXR5LFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0b3IgfSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5TWV0YWRhdGEge1xuICAgIG5hbWUhOiBzdHJpbmc7XG4gICAgYXR0YWNobWVudHMhOiBib29sZWFuO1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50aXR5KG5hbWUgOiBzdHJpbmcsIG9wdGlvbnM6IHtcbiAgICBhdHRhY2htZW50cz86IGJvb2xlYW47XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59ID0ge30pIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRW50aXR5TWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGh5ZHJhdG9yOiBIeWRyYXRvckltcGwsXG4gICAgICAgICAgICAvLyB2YWxpZGF0b3I6IFZhbGlkYXRvckltcGwsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1ldGFkYXRhIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXIoKSA6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIHBvcHVsYXRlKG5ldyBGaWx0ZXJNZXRhZGF0YSgpLCB7XG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueU1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzTWFueTxUPih0eXBlOiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgb3B0aW9uczogeyByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSGFzTWFueU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueU1hcE1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzTWFueU1hcDxUPih0eXBlOiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgb3B0aW9uczogeyByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSGFzTWFueU1hcE1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhLCBUeXBlIH0gZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmV4cG9ydCBlbnVtIElkU3RyYXRlZ3kge1xuICAgIFN0YXRpYyA9ICdzdGF0aWMnLFxuICAgIC8vIFV1aWQgPSAndXVpZCcsXG4gICAgLy8gSW5jcmVtZW50ID0gJ2luY3JlbWVudCdcbn1cblxuZXhwb3J0IGNsYXNzIElkTWV0YWRhdGEgZXh0ZW5kcyBQcm9wZXJ0eU1ldGFkYXRhIHtcbiAgICBzdHJhdGVneSE6IElkU3RyYXRlZ3k7XG4gICAgcmVhZG9ubHkgcmVxdWlyZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWQob3B0aW9uczogeyBzdHJhdGVneT86IElkU3RyYXRlZ3ksIHR5cGU/OiBUeXBlIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSWRNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICBzdHJhdGVneTogSWRTdHJhdGVneS5TdGF0aWMsXG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9yZWxhdGlvbic7XG5pbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBGb3J3YXJkUmVmRm4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElubGluZU1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSW5saW5lPFQ+KG9wdGlvbnM6IHsgdHlwZT86IEN0b3I8VD58Rm9yd2FyZFJlZkZuLCByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSW5saW5lTWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0b3IgfSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRW50aXR5TWV0YWRhdGEge1xuICAgIGlubGluZSE6IHRydWU7XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmxpbmVFbnRpdHkob3B0aW9uczoge1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufSA9IHt9KSA6IENsYXNzRGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldCA6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHB1c2hDbGFzc01ldGFkYXRhKHRhcmdldCwgcG9wdWxhdGUobmV3IElubGluZUVudGl0eU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIC8vIGh5ZHJhdG9yOiBIeWRyYXRvckltcGwsXG4gICAgICAgICAgICAvLyB2YWxpZGF0b3I6IFZhbGlkYXRvckltcGwsXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRG9jTWV0YWRhdGEge31cblxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRG9jKCkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgVmFsaWRhdGVEb2NNZXRhZGF0YSgpLCB7XG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuXG5leHBvcnQgY2xhc3MgVmlld01ldGFkYXRhIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3KCkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgVmlld01ldGFkYXRhKCksIHtcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBIeWRyYXRlT3B0aW9ucyB7XG4gICAgZGVwdGg/IDogbnVtYmVyO1xuICAgIGNpcmN1bGFyQ2FjaGU/IDogeyBbIGtleSA6IHN0cmluZyBdIDogYW55IH07XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIeWRyYXRvciB7XG4gICAgYWJzdHJhY3QgaHlkcmF0ZTxUPihlbnRpdHkgOiBULCBkYXRhIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUG91Y2hEQi5Db3JlLkdldE1ldGEsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIDogUHJvbWlzZTxUPjtcbiAgICBcbiAgICBhYnN0cmFjdCBkZWh5ZHJhdGU8VD4oZW50aXR5IDogVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgb3B0aW9ucz8gOiB7IGluY2x1ZGVSZXY/IDogYm9vbGVhbiB9KSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPjtcbn1cblxuXG4iLCJpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsaWRhdG9yIHtcbiAgICBhYnN0cmFjdCB2YWxpZGF0ZTxUPihlbnRpdHkgOiBULCBfbWV0YWRhdGEgOiBNZXRhZGF0YTxUPikgOiBQcm9taXNlPHRydWU+O1xufVxuIiwiaW1wb3J0IHsgQ3RvciB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBFcXVhbENoZWNrZXIge1xuICAgIChhIDogYW55LCBiIDogYW55KTogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3Rpb25GYWN0b3J5PFQgZXh0ZW5kcyB7fSA9IHt9PiB7XG4gICAgKG5hbWUgOiBzdHJpbmcpOiBQb3VjaERCLkRhdGFiYXNlPFQ+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRhbWFudElkIHtcbiAgICBoZWFkKG5hbWUgOiBzdHJpbmcpIDogc3RyaW5nO1xuICAgIHRhaWwobmFtZSA6IHN0cmluZykgOiBzdHJpbmc7XG4gICAgYnVpbGQobmFtZSA6IHN0cmluZywgdHlwZSA6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZ3xudW1iZXIpIDogc3RyaW5nO1xuICAgIHBhcnNlKGlkIDogc3RyaW5nKSA6IHsgbmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciwgaWQgOiBzdHJpbmcgfCBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFEQU1BTlRfQ09OTkVDVElPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQb3VjaERCLkRhdGFiYXNlPignQURBTUFOVF9DT05ORUNUSU9OJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9FTlRJVFlfQ0xBU1MgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q3Rvcjxhbnk+PignQURBTUFOVF9FTlRJVFlfQ0xBU1MnKTtcbmV4cG9ydCBjb25zdCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNZXRhZGF0YTxhbnk+PignQURBTUFOVF9FTlRJVFlfTUVUQURBVEEnKTtcbmV4cG9ydCBjb25zdCBBREFNQU5UX0VRVUFMX0NIRUNLRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48RXF1YWxDaGVja2VyPignQURBTUFOVF9FUVVBTF9DSEVDS0VSJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlkgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29ubmVjdGlvbkZhY3Rvcnk+KCdBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWScpO1xuZXhwb3J0IGNvbnN0IEFEQU1BTlRfSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48QWRhbWFudElkPignQURBTUFOVF9JRCcpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG1hcmtEZWxldGVkPFQgZXh0ZW5kcyB7fT4oZW50aXR5IDogVCkgOiBUIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5LCAnX2RlbGV0ZWQnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRydWUgfSk7XG4gICAgXG4gICAgcmV0dXJuIGVudGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJZFJldjxUIGV4dGVuZHMge30+KGVudGl0eSA6IFQsIHJlcyA6IHsgaWQ/IDogc3RyaW5nLCByZXY/IDogc3RyaW5nIH0pIDogVCB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eSwgJ19pZCcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcmVzLmlkIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksICdfcmV2JywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiByZXMucmV2IH0pO1xuICAgIFxuICAgIHJldHVybiBlbnRpdHk7XG59XG4iLCJpbXBvcnQgeyBDdG9yLCBnZXRBbGxQcm9wZXJ0eU1ldGFkYXRhLCBnZXRDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBJZE1ldGFkYXRhLCBJZFN0cmF0ZWd5IH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pZCc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9wcm9wZXJ0eSc7XG5pbXBvcnQgeyBFbnRpdHlNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZW50aXR5JztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBCZWxvbmdzVG9NZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvYmVsb25ncy10byc7XG5pbXBvcnQgeyBIYXNNYW55TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55JztcbmltcG9ydCB7IEhhc01hbnlNYXBNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnktbWFwJztcbmltcG9ydCB7IElubGluZU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pbmxpbmUnO1xuaW1wb3J0IHsgSW5saW5lRW50aXR5TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZS1lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGE8VD4ge1xuICAgIHJlYWRvbmx5IGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXR0YWNobWVudHM/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGh5ZHJhdG9yITogQ3RvcjxIeWRyYXRvcj47XG4gICAgcmVhZG9ubHkgdmFsaWRhdG9yITogQ3RvcjxWYWxpZGF0b3I+O1xuICAgIFxuICAgIHJlYWRvbmx5IGlkISA6IGtleW9mIFQ7XG4gICAgcmVhZG9ubHkgaWRUeXBlITogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXI7XG4gICAgcmVhZG9ubHkgaWRTdHJhdGVneSEgOiBJZFN0cmF0ZWd5O1xuICAgIFxuICAgIHJlYWRvbmx5IHByb3BlcnRpZXMgPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgUHJvcGVydHlNZXRhZGF0YXxJZE1ldGFkYXRhfEJlbG9uZ3NUb01ldGFkYXRhPGFueT58SGFzTWFueU1ldGFkYXRhPGFueT58SGFzTWFueU1hcE1ldGFkYXRhPGFueT58SW5saW5lTWV0YWRhdGE8YW55Pj4oKTtcbiAgICAvLyByZWFkb25seSBiZWxvbmdzVG8gPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgQmVsb25nc1RvTWV0YWRhdGE8YW55Pj4oKTtcbiAgICAvLyByZWFkb25seSBoYXNNYW55ID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEhhc01hbnlNZXRhZGF0YTxhbnk+PigpO1xuICAgIC8vIHJlYWRvbmx5IGhhc01hbnlNYXAgPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgSGFzTWFueU1hcE1ldGFkYXRhPGFueT4+KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eSA6IEN0b3I8VD4pIHtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICB0aGlzLmFzc2VydCgpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSBnZXRDbGFzc01ldGFkYXRhPEVudGl0eU1ldGFkYXRhIHwgSW5saW5lRW50aXR5TWV0YWRhdGE+KHRoaXMuZW50aXR5KTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlNZXRhZGF0YSA9IGdldEFsbFByb3BlcnR5TWV0YWRhdGE8SWRNZXRhZGF0YT4odGhpcy5lbnRpdHkpO1xuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IGFubm90YXRpb24gb2YgY2xhc3NNZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEVudGl0eU1ldGFkYXRhIHx8IGFubm90YXRpb24gaW5zdGFuY2VvZiBJbmxpbmVFbnRpdHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9ucyBdIG9mIHByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGZvcihjb25zdCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElkTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5pZCA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgICAgICAodGhpcyBhcyBhbnkpLmlkVHlwZSA9IGFubm90YXRpb24udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5pZFN0cmF0ZWd5ID0gYW5ub3RhdGlvbi5zdHJhdGVneTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYmVsb25nc1RvLnNldChwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmhhc01hbnkuc2V0KHByb3BlcnR5LCBhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1hcE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaGFzTWFueU1hcC5zZXQocHJvcGVydHksIGFubm90YXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCBhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGFzc2VydCgpIHtcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiAoKHRoaXMuaW5saW5lID8gW10gOiBbICdpZCcsICdpZFN0cmF0ZWd5JywgJ25hbWUnLCAnYXR0YWNobWVudHMnIF0pIGFzIChrZXlvZiBNZXRhZGF0YTxUPilbXSkpIHtcbiAgICAgICAgICAgIGlmKG51bGwgPT0gdGhpc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG1ldGFkYXRhICcke2tleX0nIGZvciBlbnRpdHkgXCIke3RoaXMuZW50aXR5Lm5hbWV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSB9IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcbmltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFya0RlbGV0ZWQsIG1hcmtJZFJldiB9IGZyb20gJy4vdXRpbHMvbWFya3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGVudW0gQnVsa09wZXJhdGlvbiB7XG4gICAgQ3JlYXRlID0gJ2NyZWF0ZScsXG4gICAgVXBkYXRlID0gJ3VwZGF0ZScsXG4gICAgRGVsZXRlID0gJ2RlbGV0ZSdcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGs8VD4ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge31cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgYnVsayhlbnRpdGllcyA6IFRbXSwgb3BlcmF0aW9uIDogQnVsa09wZXJhdGlvbikgOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBpZigwID09PSBlbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudGl0aWVzLm1hcChhc3luYyBlbnRpdHkgPT4ge1xuICAgICAgICAgICAgaWYoIShlbnRpdHkgaW5zdGFuY2VvZiB0aGlzLmVudGl0eUNsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW50aXR5IFwiJHtlbnRpdHl9XCIgaXMgbm90IGluc3RhbmNlb2YgJHt0aGlzLmVudGl0eUNsYXNzLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhICYgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5VcGRhdGUgfHwgb3BlcmF0aW9uID09PSBCdWxrT3BlcmF0aW9uLkRlbGV0ZSB9KTtcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5EZWxldGUpIHtcbiAgICAgICAgICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5idWxrRG9jcyhkb2NzKTtcbiAgICAgICAgY29uc3QgZXJyb3JzIDogUG91Y2hEQi5Db3JlLkVycm9yW10gPSByZXN1bHQuZmlsdGVyKHIgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsICdlcnJvcicpKTtcbiAgICAgICAgXG4gICAgICAgIGlmKDAgPCBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgbWFya0RlbGV0ZWQoZW50aXRpZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtJZFJldihlbnRpdGllc1tpbmRleF0sIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5DcmVhdGUpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5VcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5EZWxldGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIERlZmZlcmVkPFQ+ID0gUHJvbWlzZTxUPiAmIHsgcmVzb2x2ZSh2IDogVCkgOiB2b2lkLCByZWplY3QoZSA6IGFueSkgOiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIDogRGVmZmVyZWQ8VD4ge1xuICAgIGxldCByZXNvbHZlIDogYW55ICwgcmVqZWN0IDogYW55LCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmVyLCBEZWZmZXJlZCB9IGZyb20gJy4vdXRpbHMvZGVmZXInO1xuXG5leHBvcnQgY2xhc3MgUmVhZFF1ZXJ5QmF0Y2hlciB7XG4gICAgcXVldWUgOiBzdHJpbmdbXSA9IFtdO1xuICAgIGRlZmZlcmVkPyA6IERlZmZlcmVkPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxhbnk+W10+O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkYiA6IFBvdWNoREIuRGF0YWJhc2UpIHt9XG4gICAgXG4gICAgcmVhZDxUPihrZXlzIDogc3RyaW5nW10pIDogUHJvbWlzZTxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD5bXT4ge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goLi4ua2V5cyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZTxUPigpLnRoZW4oZG9jcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5c1xuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRvY3MuZmluZChkb2MgPT4gZG9jLl9pZCA9PT0ga2V5KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgLm1hcChkb2MgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgc2NoZWR1bGU8VD4oKSA6IERlZmZlcmVkPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIGlmKCF0aGlzLmRlZmZlcmVkKSB7XG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVmZmVyZWRcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kZWZmZXJlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmZlcmVkO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgZXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMucXVldWUuZmlsdGVyKCh2LCBpLCBhKSA9PiBpID09PSBhLmluZGV4T2YodikpO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCB0aGlzLmRiLmFsbERvY3Moe1xuICAgICAgICAgICAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCEucmVzb2x2ZShyb3dzLm1hcChyID0+IHIuZG9jKS5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQhLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEFkYW1hbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEh5ZHJhdGVPcHRpb25zIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUJ1aWxkZXI8VD4ge1xuICAgIFxuICAgIHByb3RlY3RlZCBfc2VsZWN0b3IgOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgPSB7fTtcbiAgICBwcm90ZWN0ZWQgX3NvcnQgOiBBcnJheTxzdHJpbmd8e1twcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYyd9PiA9IFtdO1xuICAgIHByb3RlY3RlZCBfbGltaXQ/IDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfc2tpcD8gOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHJlcG9zaXRvcnkgOiBBZGFtYW50UmVwb3NpdG9yeTxUPiwgaGVhZCA6IHN0cmluZywgdGFpbCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zZWxlY3Rvci5faWQgPSB7XG4gICAgICAgICAgICAkZ3Q6IGhlYWQsXG4gICAgICAgICAgICAkbHQ6IHRhaWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZWxlY3RvcihmaWVsZCA6IHN0cmluZywgY29uZGl0aW9uIDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yIHwgUG91Y2hEQi5GaW5kLkNvbmRpdGlvbk9wZXJhdG9ycyB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pIDogdGhpcztcbiAgICBzZWxlY3RvcihzZWxlY3RvciA6IFBvdWNoREIuRmluZC5TZWxlY3RvcikgOiB0aGlzO1xuICAgIHNlbGVjdG9yKGZpZWxkT3JTZWxlY3RvciA6IHN0cmluZ3xQb3VjaERCLkZpbmQuU2VsZWN0b3IsIGNvbmRpdGlvbj8gOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgfCBQb3VjaERCLkZpbmQuQ29uZGl0aW9uT3BlcmF0b3JzIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbikgOiB0aGlzIHtcbiAgICAgICAgaWYodHlwZW9mIGZpZWxkT3JTZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjb25kaXRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZGl0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAkZXE6IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGZpZWxkT3JTZWxlY3RvciBpbiB0aGlzLl9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc2VsZWN0b3JbIGZpZWxkT3JTZWxlY3RvciBdLCBjb25kaXRpb24pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yWyBmaWVsZE9yU2VsZWN0b3IgXSA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZpZWxkT3JTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3Ioa2V5LCBmaWVsZE9yU2VsZWN0b3Jba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNvcnQocHJvcGVydHkgOiBzdHJpbmcsIGRpcmVjdGlvbj8gOiAnYXNjJyB8ICdkZXNjJykgOiB0aGlzO1xuICAgIHNvcnQoc29ydCA6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiAnYXNjJyB8ICdkZXNjJyB9KSA6IHRoaXM7XG4gICAgc29ydChwcm9wZXJ0eU9yU29ydCA6IHN0cmluZ3x7IFtwcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYycgfSwgZGlyZWN0aW9uPyA6ICdhc2MnIHwgJ2Rlc2MnKSA6IHRoaXMge1xuICAgICAgICBpZih0eXBlb2YgcHJvcGVydHlPclNvcnQgPT09ICdzdHJpbmcnICYmIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHsgW3Byb3BlcnR5T3JTb3J0XTogZGlyZWN0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHByb3BlcnR5T3JTb3J0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgbGltaXQobGltaXQgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBza2lwKHNraXAgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX3NraXAgPSBza2lwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmVzb2x2ZShvcHRpb25zPzogSHlkcmF0ZU9wdGlvbnMpIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeS5leGVjdXRlUXVlcnkodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIHRvRmluZFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcSA6IFBvdWNoREIuRmluZC5GaW5kUmVxdWVzdDxUPiA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiB0aGlzLl9zZWxlY3RvclxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYoMCA8IHRoaXMuX3NvcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXEuc29ydCA9IHRoaXMuX3NvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2xpbWl0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5saW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9za2lwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5za2lwID0gdGhpcy5fc2tpcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IEN0b3IsIGdldEFsbFByb3BlcnR5TWV0YWRhdGEsIGdldENsYXNzTWV0YWRhdGEsIGdldFByb3BlcnR5TWV0YWRhdGEsIHBvcHVsYXRlIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucywgSHlkcmF0b3IgfSBmcm9tICcuL2h5ZHJhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IG1hcmtEZWxldGVkLCBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCAqIGFzIGVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBSZWFkUXVlcnlCYXRjaGVyIH0gZnJvbSAnLi9yZWFkLXF1ZXJ5LWJhdGNoZXInO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyJztcbmltcG9ydCB7IERlc2lnbkRvY01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9kZXNpZ24tZG9jJztcbmltcG9ydCB7IFZpZXdNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvdmlldyc7XG5pbXBvcnQgeyBGaWx0ZXJNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZmlsdGVyJztcbmltcG9ydCB7IFZhbGlkYXRlRG9jTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3ZhbGlkYXRlLWRvYyc7XG5pbXBvcnQge1xuICAgIEFEQU1BTlRfQ09OTkVDVElPTixcbiAgICBBREFNQU5UX0VOVElUWV9DTEFTUyxcbiAgICBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgRXF1YWxDaGVja2VyXG59IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxDaGVja2VyRmFjdG9yeSgpIHtcbiAgICByZXR1cm4gZXF1YWw7XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcXVlcnlCYXRjaGVyID0gbmV3IFJlYWRRdWVyeUJhdGNoZXIodGhpcy5kYik7XG4gICAgXG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0NPTk5FQ1RJT04pIHByb3RlY3RlZCByZWFkb25seSBkYiA6IFBvdWNoREIuRGF0YWJhc2U8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9DTEFTUykgcHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eUNsYXNzIDogQ3RvcjxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRU5USVRZX01FVEFEQVRBKSBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRVFVQUxfQ0hFQ0tFUikgcHJvdGVjdGVkIHJlYWRvbmx5IGVxdWFsIDogRXF1YWxDaGVja2VyLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9JRCkgcHJvdGVjdGVkIHJlYWRvbmx5IGlkIDogQWRhbWFudElkLFxuICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBidWxrIDogQnVsazxUPixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaHlkcmF0b3IgOiBIeWRyYXRvcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdmFsaWRhdG9yIDogVmFsaWRhdG9yKSB7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNyZWF0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBzZXJ0KGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fdXBzZXJ0KHRoaXMuaWQuYnVpbGQodGhpcy5tZXRhZGF0YS5uYW1lISwgdGhpcy5tZXRhZGF0YS5pZFR5cGUsIGVudGl0eVsgdGhpcy5tZXRhZGF0YS5pZCBdIGFzIGFueSksIGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF91cHNlcnQoaWQgOiBzdHJpbmcsIGRvY3VtZW50IDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+KSA6IFByb21pc2U8UG91Y2hEQi5VcHNlcnRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi51cHNlcnQoaWQsIGV4aXN0aW5nRG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMSwgX3JldjogXzIsIC4uLmQxIH0gPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzMsIF9yZXY6IF80LCAuLi5kMiB9ID0gZXhpc3RpbmdEb2MgYXMgYW55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmVxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBkYXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZGVsZXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT4gJiBQb3VjaERCLkNvcmUuQ2hhbmdlc01ldGEgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGRvYy5fZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgbWFya0RlbGV0ZWQoZW50aXR5KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIHJlYWQoaWQgOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQodGhpcy5pZC5idWlsZCh0aGlzLm1ldGFkYXRhLm5hbWUhLCB0aGlzLm1ldGFkYXRhLmlkVHlwZSwgaWQpLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkKGlkIDogc3RyaW5nLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh5ZHJhdG9yLmh5ZHJhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIGF3YWl0IHRoaXMuX3JlYWRSYXcoaWQpLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkUmF3KGlkIDogc3RyaW5nKSA6IFByb21pc2U8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4oWyBpZCBdKTtcbiAgICAgICAgaWYoIXJlc3VsdFsgMCBdKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgc3RhdHVzIDogNDA0LFxuICAgICAgICAgICAgICAgIG5hbWUgICA6ICdub3RfZm91bmQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdtaXNzaW5nJyxcbiAgICAgICAgICAgICAgICByZWFzb24gOiAnbWlzc2luZycsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdFsgMCBdO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyByZWFkQWxsKGlkcz8gOiAoc3RyaW5nIHwgbnVtYmVyKVtdLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zICYgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWVcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIFxuICAgICAgICBpZihpZHMpIHtcbiAgICAgICAgICAgIG9wdC5rZXlzID0gaWRzLm1hcChpZCA9PiB0aGlzLmlkLmJ1aWxkKHRoaXMubWV0YWRhdGEubmFtZSEsIHRoaXMubWV0YWRhdGEuaWRUeXBlLCBpZCkpLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHQuc3RhcnRrZXkgPSB0aGlzLmlkLmhlYWQodGhpcy5tZXRhZGF0YS5uYW1lISk7XG4gICAgICAgICAgICBvcHQuZW5ka2V5ID0gdGhpcy5pZC50YWlsKHRoaXMubWV0YWRhdGEubmFtZSEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZEFsbChvcHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGwob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucywgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoKGF3YWl0IHRoaXMuX3JlYWRBbGxSYXcob3B0KSlcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGxSYXcob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucykgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIGlmKG9wdC5pbmNsdWRlX2RvY3MgJiYgJ2tleXMnIGluIG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4ob3B0LmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZGIuYWxsRG9jczxUPihvcHQpKS5yb3dzLm1hcChyID0+IHIuZG9jISkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBcbiAgICBxdWVyeSgpIDogUXVlcnlCdWlsZGVyPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBRdWVyeUJ1aWxkZXI8VD4odGhpcywgdGhpcy5pZC5oZWFkKHRoaXMubWV0YWRhdGEubmFtZSEpLCB0aGlzLmlkLnRhaWwodGhpcy5tZXRhZGF0YS5uYW1lISkpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBleGVjdXRlUXVlcnkocXVlcnkgOiBRdWVyeUJ1aWxkZXI8VD4sIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKChhd2FpdCB0aGlzLmRiLmZpbmQocXVlcnkudG9GaW5kUmVxdWVzdCgpKSkuZG9jc1xuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIG9wdGlvbnMpKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGJ1aWxkKHByb3BzIDogUGFydGlhbDxUPiA9IHt9KSA6IFQge1xuICAgICAgICByZXR1cm4gcG9wdWxhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIHByb3BzKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGVyc2lzdERlc2lnbkRvYzxUIGV4dGVuZHMge30+KGRvYyA6IFQpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGNsYXNzQW5ub3RhdGlvbnMgPSBnZXRDbGFzc01ldGFkYXRhKGRvYy5jb25zdHJ1Y3RvciwgRGVzaWduRG9jTWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFubm90YXRpb25zID0gZ2V0QWxsUHJvcGVydHlNZXRhZGF0YTxWaWV3TWV0YWRhdGEgfCBGaWx0ZXJNZXRhZGF0YSB8IFZhbGlkYXRlRG9jTWV0YWRhdGE+KGRvYy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIFxuICAgICAgICBpZigxICE9PSBjbGFzc0Fubm90YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXNpZ24gZG9jIGFubm90YXRpb24gcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NBbm5vdGF0aW9uc1sgMCBdLmVudGl0eSAhPT0gdGhpcy5lbnRpdHlDbGFzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2lnbiBkb2MgZW50aXR5YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBkb2N1bWVudCA6IHtcbiAgICAgICAgICAgIF9pZCA6IHN0cmluZztcbiAgICAgICAgICAgIHZpZXdzIDogeyBbIGtleSA6IHN0cmluZyBdIDogeyBtYXAgOiBzdHJpbmcsIHJlZHVjZT8gOiBzdHJpbmcgfSB9O1xuICAgICAgICAgICAgZmlsdGVycyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IHN0cmluZyB9O1xuICAgICAgICAgICAgdmFsaWRhdGVfZG9jX3VwZGF0ZT8gOiBzdHJpbmc7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgICBfaWQgICAgOiBgX2Rlc2lnbi8ke2NsYXNzQW5ub3RhdGlvbnNbIDAgXS5uYW1lfWAsXG4gICAgICAgICAgICB2aWV3cyAgOiB7fSxcbiAgICAgICAgICAgIGZpbHRlcnM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbnMgXSBvZiBwcm9wZXJ0eUFubm90YXRpb25zKSB7XG4gICAgICAgICAgICBmb3IoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBWaWV3TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBkb2NbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZpZXdzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmlld3NbIHByb3BlcnR5IGFzIHN0cmluZyBdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCAgIDogdmFsdWUubWFwLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiB2YWx1ZS5yZWR1Y2UgJiYgdmFsdWUucmVkdWNlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEZpbHRlck1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZpbHRlcnNbIHByb3BlcnR5IGFzIHN0cmluZyBdID0gZG9jWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFZhbGlkYXRlRG9jTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmFsaWRhdGVfZG9jX3VwZGF0ZSA9IGRvY1sgcHJvcGVydHkgYXMga2V5b2YgVCBdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmRiLnVwc2VydDxhbnk+KGRvY3VtZW50Ll9pZCwgZXhpc3RpbmdEb2MgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBfaWQ6IF8xLCBfcmV2OiBfMiwgLi4uZDEgfSA9IGRvY3VtZW50IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMywgX3JldjogXzQsIC4uLmQyIH0gPSBleGlzdGluZ0RvYyBhcyBhbnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuZXF1YWwoZDEsIGQyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdmlldzxULCBQIGV4dGVuZHMga2V5b2YgVD4oZGVzaWduRG9jIDogQ3RvcjxUPiwgbmFtZSA6IFAsIHsgZGVwdGgsIGNpcmN1bGFyQ2FjaGUsIC4uLm9wdGlvbnMgfSA6IEh5ZHJhdGVPcHRpb25zICYgUG91Y2hEQi5RdWVyeS5PcHRpb25zPFQsIGFueT4gPSB7fSkge1xuICAgICAgICBjb25zdCBjbGFzc0Fubm90YXRpb24gPSBnZXRDbGFzc01ldGFkYXRhKGRlc2lnbkRvYywgRGVzaWduRG9jTWV0YWRhdGEpWyAwIF07XG4gICAgICAgIFxuICAgICAgICBpZighY2xhc3NBbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERlc2lnbiBkb2MgYW5ub3RhdGlvbiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjbGFzc0Fubm90YXRpb24uZW50aXR5ICE9PSB0aGlzLmVudGl0eUNsYXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVzaWduIGRvYyBlbnRpdHlgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvcGVydHlBbm5vdGF0aW9uID0gZ2V0UHJvcGVydHlNZXRhZGF0YShkZXNpZ25Eb2MsIG5hbWUgYXMgc3RyaW5nLCBWaWV3TWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXByb3BlcnR5QW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHZpZXcgXCIke25hbWV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5yYXdWaWV3KGAke2NsYXNzQW5ub3RhdGlvbi5uYW1lfS8ke25hbWV9YCwgb3B0aW9ucykpXG4gICAgICAgICAgICAucm93cy5tYXAocm93ID0+IHJvdy5kb2MhKVxuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIHtcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBjaXJjdWxhckNhY2hlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICByYXdWaWV3PFIgPSBUPihuYW1lIDogc3RyaW5nLCBvcHRpb25zPyA6IFBvdWNoREIuUXVlcnkuT3B0aW9uczxSLCBhbnk+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnF1ZXJ5KG5hbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnR5TWV0YWRhdGEsIFR5cGUgfSBmcm9tICcuL2Fubm90YXRpb25zL3Byb3BlcnR5JztcbmltcG9ydCB7IElubGluZU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pbmxpbmUnO1xuaW1wb3J0IHsgSGFzTWFueU1hcE1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueS1tYXAnO1xuaW1wb3J0IHsgbWFya0lkUmV2IH0gZnJvbSAnLi91dGlscy9tYXJrcyc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucywgSHlkcmF0b3IgfSBmcm9tICcuL2h5ZHJhdG9yJztcbmltcG9ydCB7IEFkYW1hbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3JlbGF0aW9uJztcbmltcG9ydCB7IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB9IGZyb20gJy4vY29ubmVjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IEhhc01hbnlNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnknO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcbmltcG9ydCB7IEJlbG9uZ3NUb01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9iZWxvbmdzLXRvJztcbmltcG9ydCB7IElkTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lkJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQURBTUFOVF9JRCwgQWRhbWFudElkIH0gZnJvbSAnLi9pbmplY3Rvci10b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHlkcmF0b3JJbXBsIGV4dGVuZHMgSHlkcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9JRCkgcHJvdGVjdGVkIHJlYWRvbmx5IGlkIDogQWRhbWFudElkLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBjb25uZWN0aW9uTWFuYWdlciA6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBkZWh5ZHJhdGU8VD4oZW50aXR5IDogVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgb3B0aW9ucz8gOiB7IGluY2x1ZGVSZXY/IDogYm9vbGVhbiB9KSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPiB7XG4gICAgICAgIGNvbnN0IGRvYyA6IGFueSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmluY2x1ZGVSZXYpIHtcbiAgICAgICAgICAgIGRvYy5fcmV2ID0gKGVudGl0eSBhcyBhbnkpLl9yZXY7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG1ldGFkYXRhLmF0dGFjaG1lbnRzICYmIChlbnRpdHkgYXMgYW55KS5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIGRvYy5fYXR0YWNobWVudHMgPSAoZW50aXR5IGFzIGFueSkuX2F0dGFjaG1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUmVsYXRpb25NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25NZXRhZGF0YSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0TWV0YWRhdGEoYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBCZWxvbmdzVG9NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gcmVsYXRpb25Ub0lkKHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9ICh2YWx1ZSBhcyBhbnlbXSkubWFwKHJlbCA9PiByZWxhdGlvblRvSWQocmVsLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1hcE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWwgOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxbIGtleSBdID0gcmVsYXRpb25Ub0lkKHZhbHVlWyBrZXkgXSwgcmVsYXRpb25NZXRhZGF0YSwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSByZWw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSW5saW5lTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0UmVwb3NpdG9yeShhbm5vdGF0aW9uLnR5cGUpLmh5ZHJhdG9yLmRlaHlkcmF0ZSh2YWx1ZSwgcmVsYXRpb25NZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSWRNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkb2MuX2lkID0gdGhpcy5pZC5idWlsZChtZXRhZGF0YS5uYW1lISwgbWV0YWRhdGEuaWRUeXBlLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodW5kZWZpbmVkID09PSBkb2NbIHByb3BlcnR5IF0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jWyBwcm9wZXJ0eSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZG9jIGFzIFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPjtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgaHlkcmF0ZTxUIGV4dGVuZHMge30+KGVudGl0eSA6IFQsIGRhdGEgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQb3VjaERCLkNvcmUuR2V0TWV0YSwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgeyBkZXB0aCA9IEluZmluaXR5LCBjaXJjdWxhckNhY2hlID0ge30gfSA6IEh5ZHJhdGVPcHRpb25zID0ge30pIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGlmKGRhdGEuX2lkIGluIGNpcmN1bGFyQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaXJjdWxhckNhY2hlWyBkYXRhLl9pZCBdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjaXJjdWxhckNhY2hlWyBkYXRhLl9pZCBdID0gZW50aXR5O1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgeyBpZDogZGF0YS5faWQsIHJldjogZGF0YS5fcmV2IH0pO1xuICAgICAgICBcbiAgICAgICAgaWYobWV0YWRhdGEuYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksICdfYXR0YWNobWVudHMnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGRhdGEuX2F0dGFjaG1lbnRzIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZGF0YVsgcHJvcGVydHkgYXMga2V5b2YgVCBdO1xuICAgICAgICAgICAgaWYobnVsbCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gbnVsbCE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBSZWxhdGlvbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uTWV0YWRhdGEgPSB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmdldE1ldGFkYXRhKGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uUmVwb3NpdG9yeSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0UmVwb3NpdG9yeShhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkodmFsdWUpID8gY2lyY3VsYXJDYWNoZVt2YWx1ZV0gOiBhd2FpdCByZWxhdGlvblJlcG9zaXRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuX3JlYWQodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGg6IGRlcHRoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXJDYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBhd2FpdCByZWFkQWxsV2l0aENpcmN1bGFyQ2FjaGUocmVsYXRpb25SZXBvc2l0b3J5LCB2YWx1ZSwgZGVwdGggLSAxLCBjaXJjdWxhckNhY2hlKSBhcyBhbnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWFwTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChrID0+IHZhbHVlWyBrIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZShyZWxhdGlvblJlcG9zaXRvcnksIHZhbHVlcywgZGVwdGggLSAxLCBjaXJjdWxhckNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbCA6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsWyBrZXkgXSA9IGVudGl0aWVzLmZpbmQoZSA9PiBlLl9pZCA9PT0gdmFsdWVbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gcmVsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElubGluZU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGF3YWl0IHJlbGF0aW9uUmVwb3NpdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oeWRyYXRvci5oeWRyYXRlKHJlbGF0aW9uUmVwb3NpdG9yeS5idWlsZCgpLCB2YWx1ZSwgcmVsYXRpb25NZXRhZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoZW50aXR5KSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICBpZighZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IHVucGFjayh2YWx1ZSwgYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZTxUPihyZXBvIDogQWRhbWFudFJlcG9zaXRvcnk8VD4sIGtleXMgOiBzdHJpbmdbXSwgZGVwdGggOiBudW1iZXIsIGNpcmN1bGFyQ2FjaGUgOiB7IFsga2V5IDogc3RyaW5nIF0gOiBhbnkgfSkgOiBQcm9taXNlPFRbXT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkS2V5cyA9IGtleXMuZmlsdGVyKGsgPT4gIWNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkoaykpO1xuICAgIGxldCBmcm9tRGIgOiBUW107XG4gICAgXG4gICAgaWYoZmlsdGVyZWRLZXlzLmxlbmd0aCkge1xuICAgICAgICBmcm9tRGIgPSBhd2FpdCByZXBvLl9yZWFkQWxsKHsga2V5czogZmlsdGVyZWRLZXlzLCBpbmNsdWRlX2RvY3M6IHRydWUgfSwgeyBkZXB0aCwgY2lyY3VsYXJDYWNoZSB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG4gICAgICAgIGlmKGNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNpcmN1bGFyQ2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZyb21EYiAmJiBmcm9tRGIuZmluZChlID0+IChlIGFzIGFueSkuX2lkID09PSBrZXkpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbGF0aW9uVG9JZDxUPihyZWwgOiBzdHJpbmcgfCBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCBpZCA6IEFkYW1hbnRJZCkgOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgcmVsID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHJlbFxuICAgICAgICA6IGlkLmJ1aWxkKG1ldGFkYXRhLm5hbWUhLCBtZXRhZGF0YS5pZFR5cGUsIHJlbFsgbWV0YWRhdGEuaWQgXSBhcyBhbnkpXG59XG5cbmZ1bmN0aW9uIHVucGFjayh2YWx1ZSA6IGFueSwgdHlwZSA6IFR5cGUpIDogYW55IHtcbiAgICBpZih0eXBlID09PSBEYXRlICYmIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JJbXBsIGV4dGVuZHMgVmFsaWRhdG9yIHtcbiAgICBhc3luYyB2YWxpZGF0ZTxUPihlbnRpdHkgOiBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+KSA6IFByb21pc2U8dHJ1ZT4ge1xuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IGFubm90YXRpb24udmFsaWRhdGUoZW50aXR5W3Byb3BlcnR5IGFzIGtleW9mIFRdLCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbn1cbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWRhbWFudFJlcG9zaXRvcnksIGVxdWFsQ2hlY2tlckZhY3Rvcnlcbn0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEN0b3IgfSBmcm9tICcuL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBIeWRyYXRvckltcGwgfSBmcm9tICcuL2h5ZHJhdG9yLWltcGwnO1xuaW1wb3J0IHsgVmFsaWRhdG9ySW1wbCB9IGZyb20gJy4vdmFsaWRhdG9yLWltcGwnO1xuaW1wb3J0IHtcbiAgICBBREFNQU5UX0NPTk5FQ1RJT04sXG4gICAgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgQ29ubmVjdGlvbkZhY3Rvcnlcbn0gZnJvbSAnLi9pbmplY3Rvci10b2tlbnMnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkYW1hbnRJZEZhY3RvcnkoKSA6IEFkYW1hbnRJZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fMGBcbiAgICAgICAgfSxcbiAgICAgICAgdGFpbChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fOWBcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQobmFtZSA6IHN0cmluZywgdHlwZSA6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZ3xudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfV8yXyR7aWR9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFN0ciA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9XzFfJHsnMCcucmVwZWF0KDE2IC0gaWRTdHIubGVuZ3RoKX0ke2lkU3RyfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWQgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgICB9LFxuICAgICAgICBwYXJzZShpZCA6IHN0cmluZykgOiB7IG5hbWU6IHN0cmluZywgdHlwZTogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXIsIGlkIDogc3RyaW5nIHwgbnVtYmVyIH0ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvXiguKilfKDF8MilfKC4qKSQvLmV4ZWMoaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGlkIFwiJHtpZH1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1hdGNoWzFdISxcbiAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFsyXSA9PT0gJzInID8gU3RyaW5nIDogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGlkOiBtYXRjaFsyXSA9PT0gJzInID8gbWF0Y2hbM10gOiBOdW1iZXIucGFyc2VJbnQobWF0Y2hbM10sIDEwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRhbWFudENvbm5lY3Rpb24oZmFjdG9yeSA6IENvbm5lY3Rpb25GYWN0b3J5KSA6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIHVzZVZhbHVlOiBmYWN0b3J5IH0sXG4gICAgICAgICAgICB7IHByb3ZpZGU6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWSwgQURBTUFOVF9JRCwgSW5qZWN0b3IgXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0lELCB1c2VGYWN0b3J5OiBhZGFtYW50SWRGYWN0b3J5LCBkZXBzOiBbXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0VRVUFMX0NIRUNLRVIsIHVzZUZhY3Rvcnk6IGVxdWFsQ2hlY2tlckZhY3RvcnksIGRlcHM6IFtdIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluamVjdG9yLmdldChBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyIHtcbiAgICBcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgUG91Y2hEQi5EYXRhYmFzZTxhbnk+PigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXBvc2l0b3JpZXMgPSBuZXcgTWFwPEN0b3I8YW55PiwgQWRhbWFudFJlcG9zaXRvcnk8YW55Pj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgPSBuZXcgTWFwPEN0b3I8YW55PiwgTWV0YWRhdGE8YW55Pj4oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZKSBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbkZhY3RvcnkgOiBDb25uZWN0aW9uRmFjdG9yeSxcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfSUQpIHB1YmxpYyByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaW5qZWN0b3IgOiBJbmplY3Rvcikge31cbiAgICBcbiAgICBnZXRPcGVuQ29ubmVjdGlvbnMoKSA6IFBvdWNoREIuRGF0YWJhc2VbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29ubmVjdGlvbnMudmFsdWVzKCkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb25uZWN0aW9uPFQgZXh0ZW5kcyB7fSA9IHt9PihuYW1lIDogc3RyaW5nKSA6IFBvdWNoREIuRGF0YWJhc2U8VD4ge1xuICAgICAgICBpZighdGhpcy5jb25uZWN0aW9ucy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMuc2V0KG5hbWUsIHRoaXMuY3JlYXRlQ29ubmVjdGlvbihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zLmdldChuYW1lKSE7XG4gICAgfVxuICAgIFxuICAgIGNsZWFyQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuY2xlYXIoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSA6IHN0cmluZykgOiBQb3VjaERCLkRhdGFiYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbkZhY3RvcnkobmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGdldFJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgaWYoIXRoaXMucmVwb3NpdG9yaWVzLmhhcyhlbnRpdHlDbGFzcykpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVSZXBvc2l0b3J5KGVudGl0eUNsYXNzKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcmllcy5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1ldGFkYXRhKGVudGl0eUNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIsIHVzZVZhbHVlOiB0aGlzIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50UmVwb3NpdG9yeSwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSwgQURBTUFOVF9FUVVBTF9DSEVDS0VSLCBBREFNQU5UX0lELCBCdWxrLCBIeWRyYXRvciwgVmFsaWRhdG9yXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfQ0xBU1MsIHVzZVZhbHVlOiBlbnRpdHlDbGFzcyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIHVzZVZhbHVlOiBtZXRhZGF0YSwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfQ09OTkVDVElPTiwgdXNlVmFsdWU6ICFtZXRhZGF0YS5pbmxpbmUgPyB0aGlzLmdldENvbm5lY3Rpb24obWV0YWRhdGEubmFtZSEpIDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHlkcmF0b3JJbXBsLCBkZXBzOiBbIEFEQU1BTlRfSUQsIEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlcl0gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFZhbGlkYXRvckltcGwsIGRlcHM6IFtdIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIeWRyYXRvciwgdXNlRXhpc3Rpbmc6IG1ldGFkYXRhLmh5ZHJhdG9yIHx8IEh5ZHJhdG9ySW1wbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVmFsaWRhdG9yLCB1c2VFeGlzdGluZzogbWV0YWRhdGEudmFsaWRhdG9yIHx8IFZhbGlkYXRvckltcGwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEJ1bGssIGRlcHM6IFsgQURBTUFOVF9DT05ORUNUSU9OLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIEh5ZHJhdG9yLCBWYWxpZGF0b3IgXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLmdldDxBZGFtYW50UmVwb3NpdG9yeTxUPj4oQWRhbWFudFJlcG9zaXRvcnkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRNZXRhZGF0YTxUPihlbnRpdHlDbGFzcyA6IEN0b3I8VD4pIDogTWV0YWRhdGE8VD4ge1xuICAgICAgICBpZighdGhpcy5tZXRhZGF0YS5oYXMoZW50aXR5Q2xhc3MpKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVNZXRhZGF0YShlbnRpdHlDbGFzcykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1ldGFkYXRhPFQ+KGVudGl0eUNsYXNzIDogQ3RvcjxUPikgOiBNZXRhZGF0YTxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGE8VD4oZW50aXR5Q2xhc3MpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ0c2xpYl8xLl9fZXh0ZW5kcyIsInRzbGliXzEuX192YWx1ZXMiLCJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBLElBQWEsY0FBYyxHQUFHLElBQUksT0FBTyxFQUFvQixDQUFDOztBQUM5RCxJQUFhLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUF3QyxDQUFDOzs7Ozs7O0FBRXJGLDBCQUEwQyxNQUFrQixFQUFFLElBQWU7SUFDekUsSUFBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDNUIsT0FBTyxFQUFFLENBQUM7S0FDYjtJQUVELDBCQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsTUFBTSxDQUFDLFVBQUEs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