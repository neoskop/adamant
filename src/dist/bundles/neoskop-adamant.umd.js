(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('@angular/core'), require('fast-deep-equal')) :
    typeof define === 'function' && define.amd ? define('@neoskop/adamant', ['exports', 'reflect-metadata', '@angular/core', 'fast-deep-equal'], factory) :
    (factory((global.neoskop = global.neoskop || {}, global.neoskop.adamant = {}),null,global.ng.core,global.fastDeepEqual));
}(this, (function (exports,reflectMetadata,core,equal) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                if (e.indexOf(p[i]) < 0)
                    t[p[i]] = s[p[i]];
        return t;
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        if (!PROPERTY_METADATA.has(target) || !((PROPERTY_METADATA.get(target))).has(property)) {
            return [];
        }
        return /** @type {?} */ (( /** @type {?} */((PROPERTY_METADATA.get(target))).get(property))).filter(function (a) { return !type || a instanceof type; });
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
        if (!((PROPERTY_METADATA.get(target))).has(property)) {
            /** @type {?} */ ((PROPERTY_METADATA.get(target))).set(property, []);
        } /** @type {?} */
        (( /** @type {?} */((PROPERTY_METADATA.get(target))).get(property))).push(metadata);
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
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return))
                    _a.call(_b);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @template T
     */ RelationMetadata = /** @class */ (function (_super) {
        __extends(RelationMetadata, _super);
        function RelationMetadata() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(RelationMetadata.prototype, "type", {
            get: /**
             * @return {?}
             */ function () {
                return core.resolveForwardRef(( /** @type {?} */(this))._type);
            },
            // private _entity! : ForwardRefFn | Ctor<T>;
            set: /**
             * @param {?} type
             * @return {?}
             */ function (type /*| ForwardRefFn */) {
                ( /** @type {?} */(this))._type = type;
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
    var /**
     * @template T
     */ BelongsToMetadata = /** @class */ (function (_super) {
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @template T
     */ DesignDocMetadata = /** @class */ (function () {
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @template T
     */ HasManyMetadata = /** @class */ (function (_super) {
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @template T
     */ HasManyMapMetadata = /** @class */ (function (_super) {
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
        if (options === void 0) {
            options = {};
        }
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @template T
     */ InlineMetadata = /** @class */ (function (_super) {
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
        if (options === void 0) {
            options = {};
        }
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
        if (options === void 0) {
            options = {};
        }
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
    var /**
     * @abstract
     */ Hydrator = /** @class */ (function () {
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
    var /**
     * @abstract
     */ Validator = /** @class */ (function () {
        function Validator() {
        }
        return Validator;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var ADAMANT_CONNECTION = new core.InjectionToken('ADAMANT_CONNECTION');
    /** @type {?} */
    var ADAMANT_ENTITY_CLASS = new core.InjectionToken('ADAMANT_ENTITY_CLASS');
    /** @type {?} */
    var ADAMANT_ENTITY_METADATA = new core.InjectionToken('ADAMANT_ENTITY_METADATA');
    /** @type {?} */
    var ADAMANT_EQUAL_CHECKER = new core.InjectionToken('ADAMANT_EQUAL_CHECKER');
    /** @type {?} */
    var ADAMANT_CONNECTION_FACTORY = new core.InjectionToken('ADAMANT_CONNECTION_FACTORY');
    /** @type {?} */
    var ADAMANT_ID = new core.InjectionToken('ADAMANT_ID');

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
    var /**
     * @template T
     */ Metadata = /** @class */ (function () {
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (classMetadata_1_1 && !classMetadata_1_1.done && (_a = classMetadata_1.return))
                            _a.call(classMetadata_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                try {
                    for (var propertyMetadata_1 = __values(propertyMetadata), propertyMetadata_1_1 = propertyMetadata_1.next(); !propertyMetadata_1_1.done; propertyMetadata_1_1 = propertyMetadata_1.next()) {
                        var _d = __read(propertyMetadata_1_1.value, 2), property = _d[0], annotations = _d[1];
                        try {
                            for (var annotations_1 = __values(annotations), annotations_1_1 = annotations_1.next(); !annotations_1_1.done; annotations_1_1 = annotations_1.next()) {
                                var annotation = annotations_1_1.value;
                                if (annotation instanceof IdMetadata) {
                                    ( /** @type {?} */(this)).id = property;
                                    ( /** @type {?} */(this)).idType = annotation.type;
                                    ( /** @type {?} */(this)).idStrategy = annotation.strategy;
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
                        catch (e_3_1) {
                            e_3 = { error: e_3_1 };
                        }
                        finally {
                            try {
                                if (annotations_1_1 && !annotations_1_1.done && (_c = annotations_1.return))
                                    _c.call(annotations_1);
                            }
                            finally {
                                if (e_3)
                                    throw e_3.error;
                            }
                        }
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (propertyMetadata_1_1 && !propertyMetadata_1_1.done && (_b = propertyMetadata_1.return))
                            _b.call(propertyMetadata_1);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
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
                    for (var _b = __values(( /** @type {?} */((this.inline ? [] : ['id', 'idStrategy', 'name', 'attachments'])))), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        if (null == this[key]) {
                            throw new Error("Missing metadata '" + key + "' for entity \"" + this.entity.name + "\"");
                        }
                    }
                }
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
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
                                return [4 /*yield*/, Promise.all(entities.map(function (entity) {
                                        return __awaiter(_this, void 0, void 0, function () {
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
                                        });
                                    }))];
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
        Bulk.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_CONNECTION,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
                { type: Metadata, decorators: [{ type: core.Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
                { type: Hydrator },
                { type: Validator }
            ];
        };
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
    var /**
     * @template T
     */ QueryBuilder = /** @class */ (function () {
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
                                        .map(function (doc) {
                                        return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options)];
                                            });
                                        });
                                    })])];
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
                                if (!(opt.include_docs && 'keys' in opt))
                                    return [3 /*break*/, 2];
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
                                        .map(function (doc) {
                                        return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options)];
                                            });
                                        });
                                    })])];
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
                if (props === void 0) {
                    props = {};
                }
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
                                                    value = doc[ /** @type {?} */(property)];
                                                    type = typeof value;
                                                    if (type === 'string' || type === 'function') {
                                                        document.views[ /** @type {?} */(property)] = {
                                                            map: value.toString()
                                                        };
                                                    }
                                                    else if (type === 'object') {
                                                        document.views[ /** @type {?} */(property)] = {
                                                            map: value.map.toString(),
                                                            reduce: value.reduce && value.reduce.toString()
                                                        };
                                                    }
                                                }
                                                else if (annotation instanceof FilterMetadata) {
                                                    document.filters[ /** @type {?} */(property)] = doc[ /** @type {?} */(property)].toString();
                                                }
                                                else if (annotation instanceof ValidateDocMetadata) {
                                                    document.validate_doc_update = doc[ /** @type {?} */(property)].toString();
                                                }
                                            }
                                        }
                                        catch (e_2_1) {
                                            e_2 = { error: e_2_1 };
                                        }
                                        finally {
                                            try {
                                                if (annotations_1_1 && !annotations_1_1.done && (_b = annotations_1.return))
                                                    _b.call(annotations_1);
                                            }
                                            finally {
                                                if (e_2)
                                                    throw e_2.error;
                                            }
                                        }
                                    }
                                }
                                catch (e_1_1) {
                                    e_1 = { error: e_1_1 };
                                }
                                finally {
                                    try {
                                        if (propertyAnnotations_1_1 && !propertyAnnotations_1_1.done && (_a = propertyAnnotations_1.return))
                                            _a.call(propertyAnnotations_1);
                                    }
                                    finally {
                                        if (e_1)
                                            throw e_1.error;
                                    }
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
                if (_a === void 0) {
                    _a = {};
                }
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
                                        .map(function (doc) {
                                        return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                return [2 /*return*/, this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, {
                                                        depth: depth,
                                                        circularCache: circularCache
                                                    })];
                                            });
                                        });
                                    })])];
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AdamantRepository.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_CONNECTION,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
                { type: Metadata, decorators: [{ type: core.Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_EQUAL_CHECKER,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_ID,] }] },
                { type: Bulk },
                { type: Hydrator },
                { type: Validator }
            ];
        };
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
                    doc._rev = ( /** @type {?} */(entity))._rev;
                }
                if (metadata.attachments && ( /** @type {?} */(entity))._attachments) {
                    doc._attachments = ( /** @type {?} */(entity))._attachments;
                }
                var _loop_1 = function (property, annotation) {
                    /** @type {?} */
                    var value = entity[ /** @type {?} */(property)];
                    if (annotation instanceof RelationMetadata) {
                        if (value != null) {
                            /** @type {?} */
                            var relationMetadata_1 = this_1.connectionManager.getMetadata(annotation.type);
                            if (annotation instanceof BelongsToMetadata) {
                                doc[property] = relationToId(value, relationMetadata_1, this_1.id);
                            }
                            else if (annotation instanceof HasManyMetadata) {
                                doc[property] = ( /** @type {?} */(value)).map(function (rel) { return relationToId(rel, relationMetadata_1, _this.id); });
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
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                                                value = data[ /** @type {?} */(property)];
                                                if (!(null == value))
                                                    return [3 /*break*/, 1];
                                                entity[ /** @type {?} */(property)] = /** @type {?} */ ((null));
                                                return [3 /*break*/, 13];
                                            case 1:
                                                if (!(annotation instanceof RelationMetadata))
                                                    return [3 /*break*/, 12];
                                                relationMetadata = this_2.connectionManager.getMetadata(annotation.type);
                                                relationRepository = this_2.connectionManager.getRepository(annotation.type);
                                                if (!(annotation instanceof BelongsToMetadata))
                                                    return [3 /*break*/, 5];
                                                _b = entity;
                                                _c = /** @type {?} */ (property);
                                                if (!circularCache.hasOwnProperty(value))
                                                    return [3 /*break*/, 2];
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
                                                if (!(annotation instanceof HasManyMetadata))
                                                    return [3 /*break*/, 7];
                                                _e = entity;
                                                _f = /** @type {?} */ (property);
                                                return [4 /*yield*/, readAllWithCircularCache(relationRepository, value, depth - 1, circularCache)];
                                            case 6:
                                                _e[_f] = /** @type {?} */ (_j.sent());
                                                return [3 /*break*/, 11];
                                            case 7:
                                                if (!(annotation instanceof HasManyMapMetadata))
                                                    return [3 /*break*/, 9];
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
                                                catch (e_3_1) {
                                                    e_3 = { error: e_3_1 };
                                                }
                                                finally {
                                                    try {
                                                        if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return))
                                                            _a.call(keys_1);
                                                    }
                                                    finally {
                                                        if (e_3)
                                                            throw e_3.error;
                                                    }
                                                }
                                                entity[ /** @type {?} */(property)] = rel;
                                                return [3 /*break*/, 11];
                                            case 9:
                                                if (!(annotation instanceof InlineMetadata))
                                                    return [3 /*break*/, 11];
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
                                                        entity[ /** @type {?} */(property)] = unpack(value, annotation.type);
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
                                if (!!_g.done)
                                    return [3 /*break*/, 5];
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
                                    if (_g && !_g.done && (_e = _f.return))
                                        _e.call(_f);
                                }
                                finally {
                                    if (e_2)
                                        throw e_2.error;
                                }
                                return [7 /*endfinally*/];
                            case 8: return [2 /*return*/, entity];
                        }
                    });
                });
            };
        HydratorImpl.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HydratorImpl.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_ID,] }] },
                { type: AdamantConnectionManager }
            ];
        };
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
                        if (!filteredKeys.length)
                            return [3 /*break*/, 2];
                        return [4 /*yield*/, repo._readAll({ keys: filteredKeys, include_docs: true }, { depth: depth, circularCache: circularCache })];
                    case 1:
                        fromDb = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, keys.map(function (key) {
                            if (circularCache.hasOwnProperty(key)) {
                                return circularCache[key];
                            }
                            return fromDb && fromDb.find(function (e) { return ( /** @type {?} */(e))._id === key; });
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
                                if (!!_c.done)
                                    return [3 /*break*/, 4];
                                _d = __read(_c.value, 2), property = _d[0], annotation = _d[1];
                                return [4 /*yield*/, annotation.validate(entity[ /** @type {?} */(property)], property)];
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
                                    if (_c && !_c.done && (_a = _b.return))
                                        _a.call(_b);
                                }
                                finally {
                                    if (e_1)
                                        throw e_1.error;
                                }
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
             */ function (name) {
                return name + "_0";
            },
            tail: /**
             * @param {?} name
             * @return {?}
             */ function (name) {
                return name + "_9";
            },
            build: /**
             * @param {?} name
             * @param {?} type
             * @param {?} id
             * @return {?}
             */ function (name, type, id) {
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
             */ function (id) {
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
        var injector = core.Injector.create({
            providers: [
                { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
                { provide: AdamantConnectionManager, deps: [ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, core.Injector] },
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
                return core.Injector.create({
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        AdamantConnectionManager.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_CONNECTION_FACTORY,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [ADAMANT_ID,] }] },
                { type: core.Injector }
            ];
        };
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

    exports.BelongsTo = BelongsTo;
    exports.BelongsToMetadata = BelongsToMetadata;
    exports.DesignDoc = DesignDoc;
    exports.DesignDocMetadata = DesignDocMetadata;
    exports.Entity = Entity;
    exports.EntityMetadata = EntityMetadata;
    exports.Filter = Filter;
    exports.FilterMetadata = FilterMetadata;
    exports.HasMany = HasMany;
    exports.HasManyMetadata = HasManyMetadata;
    exports.HasManyMap = HasManyMap;
    exports.HasManyMapMetadata = HasManyMapMetadata;
    exports.Id = Id;
    exports.IdStrategy = IdStrategy;
    exports.IdMetadata = IdMetadata;
    exports.Inline = Inline;
    exports.InlineMetadata = InlineMetadata;
    exports.InlineEntity = InlineEntity;
    exports.InlineEntityMetadata = InlineEntityMetadata;
    exports.Property = Property;
    exports.PropertyMetadata = PropertyMetadata;
    exports.RelationMetadata = RelationMetadata;
    exports.ValidateDoc = ValidateDoc;
    exports.ValidateDocMetadata = ValidateDocMetadata;
    exports.View = View;
    exports.ViewMetadata = ViewMetadata;
    exports.BulkOperation = BulkOperation;
    exports.Bulk = Bulk;
    exports.adamantIdFactory = adamantIdFactory;
    exports.createAdamantConnection = createAdamantConnection;
    exports.AdamantConnectionManager = AdamantConnectionManager;
    exports.Hydrator = Hydrator;
    exports.HydratorImpl = HydratorImpl;
    exports.ADAMANT_CONNECTION = ADAMANT_CONNECTION;
    exports.ADAMANT_ENTITY_CLASS = ADAMANT_ENTITY_CLASS;
    exports.ADAMANT_ENTITY_METADATA = ADAMANT_ENTITY_METADATA;
    exports.ADAMANT_EQUAL_CHECKER = ADAMANT_EQUAL_CHECKER;
    exports.ADAMANT_CONNECTION_FACTORY = ADAMANT_CONNECTION_FACTORY;
    exports.ADAMANT_ID = ADAMANT_ID;
    exports.Metadata = Metadata;
    exports.QueryBuilder = QueryBuilder;
    exports.equalCheckerFactory = equalCheckerFactory;
    exports.AdamantRepository = AdamantRepository;
    exports.Validator = Validator;
    exports.ValidatorImpl = ValidatorImpl;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVvc2tvcC1hZGFtYW50LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvdXRpbHMvbWV0YWRhdGEudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvcHJvcGVydHkudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvcmVsYXRpb24udHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvYmVsb25ncy10by50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9kZXNpZ24tZG9jLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2VudGl0eS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9maWx0ZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvaGFzLW1hbnkudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvaGFzLW1hbnktbWFwLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2lkLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2lubGluZS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9pbmxpbmUtZW50aXR5LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL3ZhbGlkYXRlLWRvYy50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy92aWV3LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2h5ZHJhdG9yLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3ZhbGlkYXRvci50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9pbmplY3Rvci10b2tlbnMudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvdXRpbHMvbWFya3MudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvbWV0YWRhdGEudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYnVsay50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC91dGlscy9kZWZlci50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9yZWFkLXF1ZXJ5LWJhdGNoZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvcXVlcnktYnVpbGRlci50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9yZXBvc2l0b3J5LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2h5ZHJhdG9yLWltcGwudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvdmFsaWRhdG9yLWltcGwudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvY29ubmVjdGlvbi1tYW5hZ2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuZXhwb3J0IHR5cGUgQ3RvcjxUPiA9IEZ1bmN0aW9uIHwgeyBuZXcoLi4uYXJncyA6IGFueVtdKSA6IFQ7IHByb3RvdHlwZTogVCB9O1xuXG5leHBvcnQgY29uc3QgQ0xBU1NfTUVUQURBVEEgPSBuZXcgV2Vha01hcDxDdG9yPGFueT4sIGFueVtdPigpO1xuZXhwb3J0IGNvbnN0IFBST1BFUlRZX01FVEFEQVRBID0gbmV3IFdlYWtNYXA8Q3Rvcjxhbnk+LCBNYXA8c3RyaW5nfHN5bWJvbCwgYW55W10+PigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xhc3NNZXRhZGF0YTxUID0gYW55Pih0YXJnZXQgOiBDdG9yPGFueT4sIHR5cGU/IDogQ3RvcjxUPikgOiBUW10ge1xuICAgIGlmKCFDTEFTU19NRVRBREFUQS5oYXModGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBDTEFTU19NRVRBREFUQS5nZXQodGFyZ2V0KSEuZmlsdGVyKGEgPT4gIXR5cGUgfHwgYSBpbnN0YW5jZW9mIHR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0IDogQ3Rvcjxhbnk+LCBtZXRhZGF0YSA6IGFueSkge1xuICAgIGlmKCFDTEFTU19NRVRBREFUQS5oYXModGFyZ2V0KSkge1xuICAgICAgICBDTEFTU19NRVRBREFUQS5zZXQodGFyZ2V0LCBbXSk7XG4gICAgfVxuICAgIENMQVNTX01FVEFEQVRBLmdldCh0YXJnZXQpIS5wdXNoKG1ldGFkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5TWV0YWRhdGE8VCA9IGFueT4odGFyZ2V0IDogYW55LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sLCB0eXBlPyA6IEN0b3I8YW55PikgOiBUW10ge1xuICAgIGlmKCFQUk9QRVJUWV9NRVRBREFUQS5oYXModGFyZ2V0KSB8fCAhUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhLmhhcyhwcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhLmdldChwcm9wZXJ0eSkhLmZpbHRlcihhID0+ICF0eXBlIHx8IGEgaW5zdGFuY2VvZiB0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFByb3BlcnR5TWV0YWRhdGE8VCA9IGFueT4odGFyZ2V0IDogYW55KSA6IE1hcDxzdHJpbmd8c3ltYm9sLCBUW10+IHtcbiAgICBpZighUFJPUEVSVFlfTUVUQURBVEEuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIFBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpITtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldCA6IGFueSwgcHJvcGVydHkgOiBzdHJpbmcgfCBzeW1ib2wsIG1ldGFkYXRhIDogYW55KSB7XG4gICAgaWYoIVBST1BFUlRZX01FVEFEQVRBLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgIFBST1BFUlRZX01FVEFEQVRBLnNldCh0YXJnZXQsIG5ldyBNYXAoKSk7XG4gICAgfVxuICAgIFxuICAgIGlmKCFQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuaGFzKHByb3BlcnR5KSkge1xuICAgICAgICBQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuc2V0KHByb3BlcnR5LCBbXSk7XG4gICAgfVxuICAgIFxuICAgIFBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpIS5nZXQocHJvcGVydHkpIS5wdXNoKG1ldGFkYXRhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlPFQ+KHRhcmdldCA6IFQsIHNvdXJjZSA6IFBhcnRpYWw8VD4pIDogVCB7XG4gICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpIGFzIChrZXlvZiBUKVtdKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV0gYXMgVFtrZXlvZiBUXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuZXhwb3J0IHR5cGUgVHlwZSA9IHR5cGVvZiBCb29sZWFuIHwgdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXIgfCB0eXBlb2YgT2JqZWN0IHwgdHlwZW9mIERhdGUgfCBDdG9yPGFueT47XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU1ldGFkYXRhIHtcbiAgICB0eXBlITogVHlwZTtcbiAgICByZXF1aXJlZCE6IGJvb2xlYW47XG4gICAgZGVmYXVsdD86IGFueTtcbiAgICBcbiAgICB2YWxpZGF0ZSh2YWx1ZSA6IGFueSwga2V5IDogc3RyaW5nIHwgc3ltYm9sKSB7XG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgbnVsbCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm9wZXJ0eSBcIiR7dHlwZW9mIGtleSA9PT0gJ3N5bWJvbCcgPyBTeW1ib2wua2V5Rm9yKGtleSkgOiBrZXl9XCIgcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb3BlcnR5KG9wdGlvbnM6IHsgdHlwZT86IFR5cGUsIHJlcXVpcmVkPzogYm9vbGVhbiwgZGVmYXVsdD86IGFueSB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IFByb3BlcnR5TWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVzb2x2ZUZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEN0b3IgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmV4cG9ydCBjbGFzcyBSZWxhdGlvbk1ldGFkYXRhPFQ+IGV4dGVuZHMgUHJvcGVydHlNZXRhZGF0YSB7XG4gICAgcmVxdWlyZWQhOiBib29sZWFuO1xuICAgIGRlZmF1bHQ/OiBUO1xuICAgIC8vIHByaXZhdGUgX2VudGl0eSEgOiBGb3J3YXJkUmVmRm4gfCBDdG9yPFQ+O1xuICAgIFxuICAgIHNldCB0eXBlKHR5cGUgOiBDdG9yPFQ+IC8qfCBGb3J3YXJkUmVmRm4gKi8pIHtcbiAgICAgICAgKHRoaXMgYXMgYW55KS5fdHlwZSA9IHR5cGU7XG4gICAgfVxuICAgIGdldCB0eXBlKCkgOiBDdG9yPFQ+IHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVGb3J3YXJkUmVmKCh0aGlzIGFzIGFueSkuX3R5cGUpO1xuICAgIH1cbiAgICBcbn1cbiIsImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgQmVsb25nc1RvTWV0YWRhdGE8VD4gZXh0ZW5kcyBSZWxhdGlvbk1ldGFkYXRhPFQ+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBCZWxvbmdzVG88VD4ob3B0aW9uczogeyB0eXBlPzogQ3RvcjxUPnxGb3J3YXJkUmVmRm4sIHJlcXVpcmVkPzogYm9vbGVhbiwgZGVmYXVsdD86IFQgfSA9IHt9KSA6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIHBvcHVsYXRlKG5ldyBCZWxvbmdzVG9NZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaENsYXNzTWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBEZXNpZ25Eb2NNZXRhZGF0YTxUPiB7XG4gICAgZW50aXR5ITogQ3RvcjxUPjtcbiAgICBuYW1lITogc3RyaW5nO1xufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgZXhwb3J0IGNvbnN0IGVtaXQgOiBhbnk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEZXNpZ25Eb2M8VD4oZW50aXR5IDogQ3RvcjxUPiwgbmFtZTogc3RyaW5nKSA6IENsYXNzRGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldCA6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHB1c2hDbGFzc01ldGFkYXRhKHRhcmdldCwgcG9wdWxhdGUobmV3IERlc2lnbkRvY01ldGFkYXRhPFQ+KCksIHtcbiAgICAgICAgICAgIGVudGl0eSxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi4vaHlkcmF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEVudGl0eU1ldGFkYXRhIHtcbiAgICBuYW1lITogc3RyaW5nO1xuICAgIGF0dGFjaG1lbnRzITogYm9vbGVhbjtcbiAgICBoeWRyYXRvcj86IEN0b3I8SHlkcmF0b3I+O1xuICAgIHZhbGlkYXRvcj86IEN0b3I8VmFsaWRhdG9yPjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEVudGl0eShuYW1lIDogc3RyaW5nLCBvcHRpb25zOiB7XG4gICAgYXR0YWNobWVudHM/OiBib29sZWFuO1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufSA9IHt9KSA6IENsYXNzRGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldCA6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHB1c2hDbGFzc01ldGFkYXRhKHRhcmdldCwgcG9wdWxhdGUobmV3IEVudGl0eU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhdHRhY2htZW50czogZmFsc2UsXG4gICAgICAgICAgICAvLyBoeWRyYXRvcjogSHlkcmF0b3JJbXBsLFxuICAgICAgICAgICAgLy8gdmFsaWRhdG9yOiBWYWxpZGF0b3JJbXBsLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZXRhZGF0YSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gRmlsdGVyKCkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgRmlsdGVyTWV0YWRhdGEoKSwge1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9yZWxhdGlvbic7XG5pbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBGb3J3YXJkUmVmRm4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhhc01hbnlNZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEhhc01hbnk8VD4odHlwZTogQ3RvcjxUPnxGb3J3YXJkUmVmRm4sIG9wdGlvbnM6IHsgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IEhhc01hbnlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9yZWxhdGlvbic7XG5pbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBGb3J3YXJkUmVmRm4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIEhhc01hbnlNYXBNZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEhhc01hbnlNYXA8VD4odHlwZTogQ3RvcjxUPnxGb3J3YXJkUmVmRm4sIG9wdGlvbnM6IHsgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IEhhc01hbnlNYXBNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgUHJvcGVydHlNZXRhZGF0YSwgVHlwZSB9IGZyb20gJy4vcHJvcGVydHknO1xuXG5leHBvcnQgZW51bSBJZFN0cmF0ZWd5IHtcbiAgICBTdGF0aWMgPSAnc3RhdGljJyxcbiAgICAvLyBVdWlkID0gJ3V1aWQnLFxuICAgIC8vIEluY3JlbWVudCA9ICdpbmNyZW1lbnQnXG59XG5cbmV4cG9ydCBjbGFzcyBJZE1ldGFkYXRhIGV4dGVuZHMgUHJvcGVydHlNZXRhZGF0YSB7XG4gICAgc3RyYXRlZ3khOiBJZFN0cmF0ZWd5O1xuICAgIHJlYWRvbmx5IHJlcXVpcmVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElkKG9wdGlvbnM6IHsgc3RyYXRlZ3k/OiBJZFN0cmF0ZWd5LCB0eXBlPzogVHlwZSB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IElkTWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgc3RyYXRlZ3k6IElkU3RyYXRlZ3kuU3RhdGljLFxuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgRm9yd2FyZFJlZkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBJbmxpbmVNZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIElubGluZTxUPihvcHRpb25zOiB7IHR5cGU/OiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IElubGluZU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGU6IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eSksXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi4vaHlkcmF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi4vdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIElubGluZUVudGl0eU1ldGFkYXRhIHtcbiAgICBpbmxpbmUhOiB0cnVlO1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSW5saW5lRW50aXR5KG9wdGlvbnM6IHtcbiAgICBoeWRyYXRvcj86IEN0b3I8SHlkcmF0b3I+O1xuICAgIHZhbGlkYXRvcj86IEN0b3I8VmFsaWRhdG9yPjtcbn0gPSB7fSkgOiBDbGFzc0RlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQgOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICBwdXNoQ2xhc3NNZXRhZGF0YSh0YXJnZXQsIHBvcHVsYXRlKG5ldyBJbmxpbmVFbnRpdHlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICAvLyBoeWRyYXRvcjogSHlkcmF0b3JJbXBsLFxuICAgICAgICAgICAgLy8gdmFsaWRhdG9yOiBWYWxpZGF0b3JJbXBsLFxuICAgICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICAgIGlubGluZTogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuXG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0ZURvY01ldGFkYXRhIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZURvYygpIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IFZhbGlkYXRlRG9jTWV0YWRhdGEoKSwge1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGNsYXNzIFZpZXdNZXRhZGF0YSB7fVxuXG5leHBvcnQgZnVuY3Rpb24gVmlldygpIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IFZpZXdNZXRhZGF0YSgpLCB7XG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSHlkcmF0ZU9wdGlvbnMge1xuICAgIGRlcHRoPyA6IG51bWJlcjtcbiAgICBjaXJjdWxhckNhY2hlPyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IGFueSB9O1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHlkcmF0b3Ige1xuICAgIGFic3RyYWN0IGh5ZHJhdGU8VD4oZW50aXR5IDogVCwgZGF0YSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBvdWNoREIuQ29yZS5HZXRNZXRhLCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSA6IFByb21pc2U8VD47XG4gICAgXG4gICAgYWJzdHJhY3QgZGVoeWRyYXRlPFQ+KGVudGl0eSA6IFQsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIG9wdGlvbnM/IDogeyBpbmNsdWRlUmV2PyA6IGJvb2xlYW4gfSkgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT47XG59XG5cblxuIiwiaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbGlkYXRvciB7XG4gICAgYWJzdHJhY3QgdmFsaWRhdGU8VD4oZW50aXR5IDogVCwgX21ldGFkYXRhIDogTWV0YWRhdGE8VD4pIDogUHJvbWlzZTx0cnVlPjtcbn1cbiIsImltcG9ydCB7IEN0b3IgfSBmcm9tICcuL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRXF1YWxDaGVja2VyIHtcbiAgICAoYSA6IGFueSwgYiA6IGFueSk6IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25uZWN0aW9uRmFjdG9yeTxUIGV4dGVuZHMge30gPSB7fT4ge1xuICAgIChuYW1lIDogc3RyaW5nKTogUG91Y2hEQi5EYXRhYmFzZTxUPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkYW1hbnRJZCB7XG4gICAgaGVhZChuYW1lIDogc3RyaW5nKSA6IHN0cmluZztcbiAgICB0YWlsKG5hbWUgOiBzdHJpbmcpIDogc3RyaW5nO1xuICAgIGJ1aWxkKG5hbWUgOiBzdHJpbmcsIHR5cGUgOiB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciwgaWQgOiBzdHJpbmd8bnVtYmVyKSA6IHN0cmluZztcbiAgICBwYXJzZShpZCA6IHN0cmluZykgOiB7IG5hbWU6IHN0cmluZywgdHlwZTogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXIsIGlkIDogc3RyaW5nIHwgbnVtYmVyIH07XG59XG5cbmV4cG9ydCBjb25zdCBBREFNQU5UX0NPTk5FQ1RJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48UG91Y2hEQi5EYXRhYmFzZT4oJ0FEQU1BTlRfQ09OTkVDVElPTicpO1xuZXhwb3J0IGNvbnN0IEFEQU1BTlRfRU5USVRZX0NMQVNTID0gbmV3IEluamVjdGlvblRva2VuPEN0b3I8YW55Pj4oJ0FEQU1BTlRfRU5USVRZX0NMQVNTJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEgPSBuZXcgSW5qZWN0aW9uVG9rZW48TWV0YWRhdGE8YW55Pj4oJ0FEQU1BTlRfRU5USVRZX01FVEFEQVRBJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9FUVVBTF9DSEVDS0VSID0gbmV3IEluamVjdGlvblRva2VuPEVxdWFsQ2hlY2tlcj4oJ0FEQU1BTlRfRVFVQUxfQ0hFQ0tFUicpO1xuZXhwb3J0IGNvbnN0IEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZID0gbmV3IEluamVjdGlvblRva2VuPENvbm5lY3Rpb25GYWN0b3J5PignQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlknKTtcbmV4cG9ydCBjb25zdCBBREFNQU5UX0lEID0gbmV3IEluamVjdGlvblRva2VuPEFkYW1hbnRJZD4oJ0FEQU1BTlRfSUQnKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBtYXJrRGVsZXRlZDxUIGV4dGVuZHMge30+KGVudGl0eSA6IFQpIDogVCB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eSwgJ19kZWxldGVkJywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0cnVlIH0pO1xuICAgIFxuICAgIHJldHVybiBlbnRpdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXJrSWRSZXY8VCBleHRlbmRzIHt9PihlbnRpdHkgOiBULCByZXMgOiB7IGlkPyA6IHN0cmluZywgcmV2PyA6IHN0cmluZyB9KSA6IFQge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksICdfaWQnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHJlcy5pZCB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5LCAnX3JldicsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcmVzLnJldiB9KTtcbiAgICBcbiAgICByZXR1cm4gZW50aXR5O1xufVxuIiwiaW1wb3J0IHsgQ3RvciwgZ2V0QWxsUHJvcGVydHlNZXRhZGF0YSwgZ2V0Q2xhc3NNZXRhZGF0YSB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSWRNZXRhZGF0YSwgSWRTdHJhdGVneSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaWQnO1xuaW1wb3J0IHsgUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvcHJvcGVydHknO1xuaW1wb3J0IHsgRW50aXR5TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2VudGl0eSc7XG5pbXBvcnQgeyBIeWRyYXRvciB9IGZyb20gJy4vaHlkcmF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgQmVsb25nc1RvTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2JlbG9uZ3MtdG8nO1xuaW1wb3J0IHsgSGFzTWFueU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueSc7XG5pbXBvcnQgeyBIYXNNYW55TWFwTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55LW1hcCc7XG5pbXBvcnQgeyBJbmxpbmVNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaW5saW5lJztcbmltcG9ydCB7IElubGluZUVudGl0eU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pbmxpbmUtZW50aXR5JztcblxuZXhwb3J0IGNsYXNzIE1ldGFkYXRhPFQ+IHtcbiAgICByZWFkb25seSBpbmxpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGF0dGFjaG1lbnRzPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBoeWRyYXRvciE6IEN0b3I8SHlkcmF0b3I+O1xuICAgIHJlYWRvbmx5IHZhbGlkYXRvciE6IEN0b3I8VmFsaWRhdG9yPjtcbiAgICBcbiAgICByZWFkb25seSBpZCEgOiBrZXlvZiBUO1xuICAgIHJlYWRvbmx5IGlkVHlwZSE6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyO1xuICAgIHJlYWRvbmx5IGlkU3RyYXRlZ3khIDogSWRTdHJhdGVneTtcbiAgICBcbiAgICByZWFkb25seSBwcm9wZXJ0aWVzID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIFByb3BlcnR5TWV0YWRhdGF8SWRNZXRhZGF0YXxCZWxvbmdzVG9NZXRhZGF0YTxhbnk+fEhhc01hbnlNZXRhZGF0YTxhbnk+fEhhc01hbnlNYXBNZXRhZGF0YTxhbnk+fElubGluZU1ldGFkYXRhPGFueT4+KCk7XG4gICAgLy8gcmVhZG9ubHkgYmVsb25nc1RvID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEJlbG9uZ3NUb01ldGFkYXRhPGFueT4+KCk7XG4gICAgLy8gcmVhZG9ubHkgaGFzTWFueSA9IG5ldyBNYXA8c3RyaW5nIHwgc3ltYm9sLCBIYXNNYW55TWV0YWRhdGE8YW55Pj4oKTtcbiAgICAvLyByZWFkb25seSBoYXNNYW55TWFwID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEhhc01hbnlNYXBNZXRhZGF0YTxhbnk+PigpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBlbnRpdHkgOiBDdG9yPFQ+KSB7XG4gICAgICAgIHRoaXMucGFyc2UoKTtcbiAgICAgICAgdGhpcy5hc3NlcnQoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHBhcnNlKCkge1xuICAgICAgICBjb25zdCBjbGFzc01ldGFkYXRhID0gZ2V0Q2xhc3NNZXRhZGF0YTxFbnRpdHlNZXRhZGF0YSB8IElubGluZUVudGl0eU1ldGFkYXRhPih0aGlzLmVudGl0eSk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TWV0YWRhdGEgPSBnZXRBbGxQcm9wZXJ0eU1ldGFkYXRhPElkTWV0YWRhdGE+KHRoaXMuZW50aXR5KTtcbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBhbm5vdGF0aW9uIG9mIGNsYXNzTWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBFbnRpdHlNZXRhZGF0YSB8fCBhbm5vdGF0aW9uIGluc3RhbmNlb2YgSW5saW5lRW50aXR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGFubm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbnMgXSBvZiBwcm9wZXJ0eU1ldGFkYXRhKSB7XG4gICAgICAgICAgICBmb3IoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJZE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzIGFzIGFueSkuaWQgPSBwcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5pZFR5cGUgPSBhbm5vdGF0aW9uLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgICh0aGlzIGFzIGFueSkuaWRTdHJhdGVneSA9IGFubm90YXRpb24uc3RyYXRlZ3k7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBCZWxvbmdzVG9NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJlbG9uZ3NUby5zZXQocHJvcGVydHksIGFubm90YXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5oYXNNYW55LnNldChwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNYXBNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmhhc01hbnlNYXAuc2V0KHByb3BlcnR5LCBhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLnNldChwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBhc3NlcnQoKSB7XG4gICAgICAgIGZvcihjb25zdCBrZXkgb2YgKCh0aGlzLmlubGluZSA/IFtdIDogWyAnaWQnLCAnaWRTdHJhdGVneScsICduYW1lJywgJ2F0dGFjaG1lbnRzJyBdKSBhcyAoa2V5b2YgTWV0YWRhdGE8VD4pW10pKSB7XG4gICAgICAgICAgICBpZihudWxsID09IHRoaXNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBtZXRhZGF0YSAnJHtrZXl9JyBmb3IgZW50aXR5IFwiJHt0aGlzLmVudGl0eS5uYW1lfVwiYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBIeWRyYXRvciB9IGZyb20gJy4vaHlkcmF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgQ3RvciB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgQURBTUFOVF9DT05ORUNUSU9OLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEgfSBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1hcmtEZWxldGVkLCBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBlbnVtIEJ1bGtPcGVyYXRpb24ge1xuICAgIENyZWF0ZSA9ICdjcmVhdGUnLFxuICAgIFVwZGF0ZSA9ICd1cGRhdGUnLFxuICAgIERlbGV0ZSA9ICdkZWxldGUnXG59XG5cbmV4cG9ydCBjbGFzcyBCdWxrPFQ+IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEFEQU1BTlRfQ09OTkVDVElPTikgcHJvdGVjdGVkIHJlYWRvbmx5IGRiIDogUG91Y2hEQi5EYXRhYmFzZTxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRU5USVRZX0NMQVNTKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZW50aXR5Q2xhc3MgOiBDdG9yPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfTUVUQURBVEEpIHByb3RlY3RlZCByZWFkb25seSBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBoeWRyYXRvciA6IEh5ZHJhdG9yLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSB2YWxpZGF0b3IgOiBWYWxpZGF0b3IpIHt9XG4gICAgXG4gICAgcHJvdGVjdGVkIGFzeW5jIGJ1bGsoZW50aXRpZXMgOiBUW10sIG9wZXJhdGlvbiA6IEJ1bGtPcGVyYXRpb24pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgaWYoMCA9PT0gZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZW50aXRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRvY3MgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRpdGllcy5tYXAoYXN5bmMgZW50aXR5ID0+IHtcbiAgICAgICAgICAgIGlmKCEoZW50aXR5IGluc3RhbmNlb2YgdGhpcy5lbnRpdHlDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVudGl0eSBcIiR7ZW50aXR5fVwiIGlzIG5vdCBpbnN0YW5jZW9mICR7dGhpcy5lbnRpdHlDbGFzcy5uYW1lfWApO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRvYyA6IFBvdWNoREIuQ29yZS5DaGFuZ2VzTWV0YSAmIFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiA9IHRoaXMuaHlkcmF0b3IuZGVoeWRyYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSwgeyBpbmNsdWRlUmV2OiBvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uVXBkYXRlIHx8IG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5EZWxldGUgfSk7XG4gICAgICAgICAgICBpZihvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgZG9jLl9kZWxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgIH0pKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIuYnVsa0RvY3MoZG9jcyk7XG4gICAgICAgIGNvbnN0IGVycm9ycyA6IFBvdWNoREIuQ29yZS5FcnJvcltdID0gcmVzdWx0LmZpbHRlcihyID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChyLCAnZXJyb3InKSk7XG4gICAgICAgIFxuICAgICAgICBpZigwIDwgZXJyb3JzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3JzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXN1bHQuZm9yRWFjaCgocmVzLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYob3BlcmF0aW9uID09PSBCdWxrT3BlcmF0aW9uLkRlbGV0ZSkge1xuICAgICAgICAgICAgICAgIG1hcmtEZWxldGVkKGVudGl0aWVzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXJrSWRSZXYoZW50aXRpZXNbaW5kZXhdLCByZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICB9XG4gICAgXG4gICAgY3JlYXRlKGVudGl0aWVzIDogVFtdKSA6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGsoZW50aXRpZXMsIEJ1bGtPcGVyYXRpb24uQ3JlYXRlKTtcbiAgICB9XG4gICAgXG4gICAgdXBkYXRlKGVudGl0aWVzIDogVFtdKSA6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGsoZW50aXRpZXMsIEJ1bGtPcGVyYXRpb24uVXBkYXRlKTtcbiAgICB9XG4gICAgXG4gICAgZGVsZXRlKGVudGl0aWVzIDogVFtdKSA6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGsoZW50aXRpZXMsIEJ1bGtPcGVyYXRpb24uRGVsZXRlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBEZWZmZXJlZDxUPiA9IFByb21pc2U8VD4gJiB7IHJlc29sdmUodiA6IFQpIDogdm9pZCwgcmVqZWN0KGUgOiBhbnkpIDogdm9pZCB9O1xuXG5leHBvcnQgZnVuY3Rpb24gZGVmZXI8VD4oKSA6IERlZmZlcmVkPFQ+IHtcbiAgICBsZXQgcmVzb2x2ZSA6IGFueSAsIHJlamVjdCA6IGFueSwgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXMsIHJlaikgPT4ge1xuICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICByZWplY3QgPSByZWo7XG4gICAgfSk7XG4gICAgXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ocHJvbWlzZSwgeyByZXNvbHZlLCByZWplY3QgfSk7XG59XG4iLCJpbXBvcnQgeyBkZWZlciwgRGVmZmVyZWQgfSBmcm9tICcuL3V0aWxzL2RlZmVyJztcblxuZXhwb3J0IGNsYXNzIFJlYWRRdWVyeUJhdGNoZXIge1xuICAgIHF1ZXVlIDogc3RyaW5nW10gPSBbXTtcbiAgICBkZWZmZXJlZD8gOiBEZWZmZXJlZDxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8YW55PltdPjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlKSB7fVxuICAgIFxuICAgIHJlYWQ8VD4oa2V5cyA6IHN0cmluZ1tdKSA6IFByb21pc2U8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+W10+IHtcbiAgICAgICAgdGhpcy5xdWV1ZS5wdXNoKC4uLmtleXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGU8VD4oKS50aGVuKGRvY3MgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGtleXNcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiBkb2NzLmZpbmQoZG9jID0+IGRvYy5faWQgPT09IGtleSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAgICAgICAgIC5tYXAoZG9jID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZG9jKSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIHNjaGVkdWxlPFQ+KCkgOiBEZWZmZXJlZDxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD5bXT4ge1xuICAgICAgICBpZighdGhpcy5kZWZmZXJlZCkge1xuICAgICAgICAgICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCA9IGRlZmVyKCk7XG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRlZmZlcmVkXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVmZmVyZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5kZWZmZXJlZDtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGFzeW5jIGV4ZWN1dGUoKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLnF1ZXVlLmZpbHRlcigodiwgaSwgYSkgPT4gaSA9PT0gYS5pbmRleE9mKHYpKTtcbiAgICAgICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcm93cyB9ID0gYXdhaXQgdGhpcy5kYi5hbGxEb2NzKHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWUsXG4gICAgICAgICAgICAgICAga2V5c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQhLnJlc29sdmUocm93cy5tYXAociA9PiByLmRvYykuZmlsdGVyKEJvb2xlYW4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkIS5yZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBBZGFtYW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucyB9IGZyb20gJy4vaHlkcmF0b3InO1xuXG5leHBvcnQgY2xhc3MgUXVlcnlCdWlsZGVyPFQ+IHtcbiAgICBcbiAgICBwcm90ZWN0ZWQgX3NlbGVjdG9yIDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yID0ge307XG4gICAgcHJvdGVjdGVkIF9zb3J0IDogQXJyYXk8c3RyaW5nfHtbcHJvcE5hbWU6IHN0cmluZ106ICdhc2MnIHwgJ2Rlc2MnfT4gPSBbXTtcbiAgICBwcm90ZWN0ZWQgX2xpbWl0PyA6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX3NraXA/IDogbnVtYmVyO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSByZXBvc2l0b3J5IDogQWRhbWFudFJlcG9zaXRvcnk8VD4sIGhlYWQgOiBzdHJpbmcsIHRhaWwgOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0b3IuX2lkID0ge1xuICAgICAgICAgICAgJGd0OiBoZWFkLFxuICAgICAgICAgICAgJGx0OiB0YWlsXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgc2VsZWN0b3IoZmllbGQgOiBzdHJpbmcsIGNvbmRpdGlvbiA6IFBvdWNoREIuRmluZC5TZWxlY3RvciB8IFBvdWNoREIuRmluZC5Db25kaXRpb25PcGVyYXRvcnMgfCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKSA6IHRoaXM7XG4gICAgc2VsZWN0b3Ioc2VsZWN0b3IgOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IpIDogdGhpcztcbiAgICBzZWxlY3RvcihmaWVsZE9yU2VsZWN0b3IgOiBzdHJpbmd8UG91Y2hEQi5GaW5kLlNlbGVjdG9yLCBjb25kaXRpb24/IDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yIHwgUG91Y2hEQi5GaW5kLkNvbmRpdGlvbk9wZXJhdG9ycyB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pIDogdGhpcyB7XG4gICAgICAgIGlmKHR5cGVvZiBmaWVsZE9yU2VsZWN0b3IgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YgY29uZGl0aW9uICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgJGVxOiBjb25kaXRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihmaWVsZE9yU2VsZWN0b3IgaW4gdGhpcy5fc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuX3NlbGVjdG9yWyBmaWVsZE9yU2VsZWN0b3IgXSwgY29uZGl0aW9uKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RvclsgZmllbGRPclNlbGVjdG9yIF0gPSBjb25kaXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IobGV0IGtleSBpbiBmaWVsZE9yU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdG9yKGtleSwgZmllbGRPclNlbGVjdG9yW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBzb3J0KHByb3BlcnR5IDogc3RyaW5nLCBkaXJlY3Rpb24/IDogJ2FzYycgfCAnZGVzYycpIDogdGhpcztcbiAgICBzb3J0KHNvcnQgOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYycgfSkgOiB0aGlzO1xuICAgIHNvcnQocHJvcGVydHlPclNvcnQgOiBzdHJpbmd8eyBbcHJvcE5hbWU6IHN0cmluZ106ICdhc2MnIHwgJ2Rlc2MnIH0sIGRpcmVjdGlvbj8gOiAnYXNjJyB8ICdkZXNjJykgOiB0aGlzIHtcbiAgICAgICAgaWYodHlwZW9mIHByb3BlcnR5T3JTb3J0ID09PSAnc3RyaW5nJyAmJiBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnQucHVzaCh7IFtwcm9wZXJ0eU9yU29ydF06IGRpcmVjdGlvbiB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NvcnQucHVzaChwcm9wZXJ0eU9yU29ydCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGxpbWl0KGxpbWl0IDogbnVtYmVyKSA6IHRoaXMge1xuICAgICAgICB0aGlzLl9saW1pdCA9IGxpbWl0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc2tpcChza2lwIDogbnVtYmVyKSA6IHRoaXMge1xuICAgICAgICB0aGlzLl9za2lwID0gc2tpcDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHJlc29sdmUob3B0aW9ucz86IEh5ZHJhdGVPcHRpb25zKSA6IFByb21pc2U8VFtdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnkuZXhlY3V0ZVF1ZXJ5KHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICB0b0ZpbmRSZXF1ZXN0KCkge1xuICAgICAgICBjb25zdCByZXEgOiBQb3VjaERCLkZpbmQuRmluZFJlcXVlc3Q8VD4gPSB7XG4gICAgICAgICAgICBzZWxlY3RvcjogdGhpcy5fc2VsZWN0b3JcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIGlmKDAgPCB0aGlzLl9zb3J0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmVxLnNvcnQgPSB0aGlzLl9zb3J0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9saW1pdCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXEubGltaXQgPSB0aGlzLl9saW1pdDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fc2tpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXEuc2tpcCA9IHRoaXMuX3NraXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXE7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yLCBnZXRBbGxQcm9wZXJ0eU1ldGFkYXRhLCBnZXRDbGFzc01ldGFkYXRhLCBnZXRQcm9wZXJ0eU1ldGFkYXRhLCBwb3B1bGF0ZSB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0ZU9wdGlvbnMsIEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgQnVsayB9IGZyb20gJy4vYnVsayc7XG5pbXBvcnQgeyBtYXJrRGVsZXRlZCwgbWFya0lkUmV2IH0gZnJvbSAnLi91dGlscy9tYXJrcyc7XG5pbXBvcnQgKiBhcyBlcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IHsgUmVhZFF1ZXJ5QmF0Y2hlciB9IGZyb20gJy4vcmVhZC1xdWVyeS1iYXRjaGVyJztcbmltcG9ydCB7IFF1ZXJ5QnVpbGRlciB9IGZyb20gJy4vcXVlcnktYnVpbGRlcic7XG5pbXBvcnQgeyBEZXNpZ25Eb2NNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZGVzaWduLWRvYyc7XG5pbXBvcnQgeyBWaWV3TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3ZpZXcnO1xuaW1wb3J0IHsgRmlsdGVyTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2ZpbHRlcic7XG5pbXBvcnQgeyBWYWxpZGF0ZURvY01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy92YWxpZGF0ZS1kb2MnO1xuaW1wb3J0IHtcbiAgICBBREFNQU5UX0NPTk5FQ1RJT04sXG4gICAgQURBTUFOVF9FTlRJVFlfQ0xBU1MsXG4gICAgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsXG4gICAgQURBTUFOVF9FUVVBTF9DSEVDS0VSLFxuICAgIEFEQU1BTlRfSUQsXG4gICAgQWRhbWFudElkLFxuICAgIEVxdWFsQ2hlY2tlclxufSBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsQ2hlY2tlckZhY3RvcnkoKSB7XG4gICAgcmV0dXJuIGVxdWFsO1xufVxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGFtYW50UmVwb3NpdG9yeTxUPiB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHF1ZXJ5QmF0Y2hlciA9IG5ldyBSZWFkUXVlcnlCYXRjaGVyKHRoaXMuZGIpO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VRVUFMX0NIRUNLRVIpIHByb3RlY3RlZCByZWFkb25seSBlcXVhbCA6IEVxdWFsQ2hlY2tlcixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfSUQpIHByb3RlY3RlZCByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYnVsayA6IEJ1bGs8VD4sXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBjcmVhdGUoZW50aXR5IDogVCkgOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy52YWxpZGF0b3IudmFsaWRhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRvYyA9IHRoaXMuaHlkcmF0b3IuZGVoeWRyYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHVwc2VydChlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3Vwc2VydCh0aGlzLmlkLmJ1aWxkKHRoaXMubWV0YWRhdGEubmFtZSEsIHRoaXMubWV0YWRhdGEuaWRUeXBlLCBlbnRpdHlbIHRoaXMubWV0YWRhdGEuaWQgXSBhcyBhbnkpLCBkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfdXBzZXJ0KGlkIDogc3RyaW5nLCBkb2N1bWVudCA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPikgOiBQcm9taXNlPFBvdWNoREIuVXBzZXJ0UmVzcG9uc2U+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGIudXBzZXJ0KGlkLCBleGlzdGluZ0RvYyA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzEsIF9yZXY6IF8yLCAuLi5kMSB9ID0gZG9jdW1lbnQgYXMgYW55O1xuICAgICAgICAgICAgY29uc3QgeyBfaWQ6IF8zLCBfcmV2OiBfNCwgLi4uZDIgfSA9IGV4aXN0aW5nRG9jIGFzIGFueTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodGhpcy5lcXVhbChkMSwgZDIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHVwZGF0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGRlbGV0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+ICYgUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IHRydWUgfSk7XG4gICAgICAgIFxuICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5wdXQoZG9jKTtcbiAgICAgICAgXG4gICAgICAgIG1hcmtJZFJldihlbnRpdHksIHJlc3VsdCk7XG4gICAgICAgIG1hcmtEZWxldGVkKGVudGl0eSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW50aXR5O1xuICAgIH1cbiAgICBcbiAgICByZWFkKGlkIDogbnVtYmVyIHwgc3RyaW5nLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkKHRoaXMuaWQuYnVpbGQodGhpcy5tZXRhZGF0YS5uYW1lISwgdGhpcy5tZXRhZGF0YS5pZFR5cGUsIGlkKSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBfcmVhZChpZCA6IHN0cmluZywgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBhd2FpdCB0aGlzLl9yZWFkUmF3KGlkKSwgdGhpcy5tZXRhZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBhc3luYyBfcmVhZFJhdyhpZCA6IHN0cmluZykgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPj4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5QmF0Y2hlci5yZWFkPFQ+KFsgaWQgXSk7XG4gICAgICAgIGlmKCFyZXN1bHRbIDAgXSkge1xuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA6IDQwNCxcbiAgICAgICAgICAgICAgICBuYW1lICAgOiAnbm90X2ZvdW5kJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbWlzc2luZycsXG4gICAgICAgICAgICAgICAgcmVhc29uIDogJ21pc3NpbmcnLFxuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiByZXN1bHRbIDAgXTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcmVhZEFsbChpZHM/IDogKHN0cmluZyB8IG51bWJlcilbXSwgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICBjb25zdCBvcHQgOiBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhLZXlzT3B0aW9ucyAmIFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aGluUmFuZ2VPcHRpb25zID0ge1xuICAgICAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlXG4gICAgICAgIH0gYXMgYW55O1xuICAgICAgICBcbiAgICAgICAgaWYoaWRzKSB7XG4gICAgICAgICAgICBvcHQua2V5cyA9IGlkcy5tYXAoaWQgPT4gdGhpcy5pZC5idWlsZCh0aGlzLm1ldGFkYXRhLm5hbWUhLCB0aGlzLm1ldGFkYXRhLmlkVHlwZSwgaWQpKS5zb3J0KChhLCBiKSA9PiBhLmxvY2FsZUNvbXBhcmUoYikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0LnN0YXJ0a2V5ID0gdGhpcy5pZC5oZWFkKHRoaXMubWV0YWRhdGEubmFtZSEpO1xuICAgICAgICAgICAgb3B0LmVuZGtleSA9IHRoaXMuaWQudGFpbCh0aGlzLm1ldGFkYXRhLm5hbWUhKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRBbGwob3B0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkQWxsKG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zIHwgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMsIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKChhd2FpdCB0aGlzLl9yZWFkQWxsUmF3KG9wdCkpXG4gICAgICAgICAgICAubWFwKGFzeW5jIGRvYyA9PiB0aGlzLmh5ZHJhdG9yLmh5ZHJhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIGRvYywgdGhpcy5tZXRhZGF0YSwgb3B0aW9ucykpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkQWxsUmF3KG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zIHwgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMpIDogUHJvbWlzZTxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD5bXT4ge1xuICAgICAgICBpZihvcHQuaW5jbHVkZV9kb2NzICYmICdrZXlzJyBpbiBvcHQpIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnF1ZXJ5QmF0Y2hlci5yZWFkPFQ+KG9wdC5rZXlzKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChhd2FpdCB0aGlzLmRiLmFsbERvY3M8VD4ob3B0KSkucm93cy5tYXAociA9PiByLmRvYyEpLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgXG4gICAgcXVlcnkoKSA6IFF1ZXJ5QnVpbGRlcjxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgUXVlcnlCdWlsZGVyPFQ+KHRoaXMsIHRoaXMuaWQuaGVhZCh0aGlzLm1ldGFkYXRhLm5hbWUhKSwgdGhpcy5pZC50YWlsKHRoaXMubWV0YWRhdGEubmFtZSEpKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZXhlY3V0ZVF1ZXJ5KHF1ZXJ5IDogUXVlcnlCdWlsZGVyPFQ+LCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5kYi5maW5kKHF1ZXJ5LnRvRmluZFJlcXVlc3QoKSkpLmRvY3NcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICBidWlsZChwcm9wcyA6IFBhcnRpYWw8VD4gPSB7fSkgOiBUIHtcbiAgICAgICAgcmV0dXJuIHBvcHVsYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBwcm9wcyk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHBlcnNpc3REZXNpZ25Eb2M8VCBleHRlbmRzIHt9Pihkb2MgOiBUKSA6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCBjbGFzc0Fubm90YXRpb25zID0gZ2V0Q2xhc3NNZXRhZGF0YShkb2MuY29uc3RydWN0b3IsIERlc2lnbkRvY01ldGFkYXRhKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBbm5vdGF0aW9ucyA9IGdldEFsbFByb3BlcnR5TWV0YWRhdGE8Vmlld01ldGFkYXRhIHwgRmlsdGVyTWV0YWRhdGEgfCBWYWxpZGF0ZURvY01ldGFkYXRhPihkb2MuY29uc3RydWN0b3IpO1xuICAgICAgICBcbiAgICAgICAgaWYoMSAhPT0gY2xhc3NBbm5vdGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGVzaWduIGRvYyBhbm5vdGF0aW9uIHJlcXVpcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKGNsYXNzQW5ub3RhdGlvbnNbIDAgXS5lbnRpdHkgIT09IHRoaXMuZW50aXR5Q2xhc3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBkZXNpZ24gZG9jIGVudGl0eWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZG9jdW1lbnQgOiB7XG4gICAgICAgICAgICBfaWQgOiBzdHJpbmc7XG4gICAgICAgICAgICB2aWV3cyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IHsgbWFwIDogc3RyaW5nLCByZWR1Y2U/IDogc3RyaW5nIH0gfTtcbiAgICAgICAgICAgIGZpbHRlcnMgOiB7IFsga2V5IDogc3RyaW5nIF0gOiBzdHJpbmcgfTtcbiAgICAgICAgICAgIHZhbGlkYXRlX2RvY191cGRhdGU/IDogc3RyaW5nO1xuICAgICAgICB9ID0ge1xuICAgICAgICAgICAgX2lkICAgIDogYF9kZXNpZ24vJHtjbGFzc0Fubm90YXRpb25zWyAwIF0ubmFtZX1gLFxuICAgICAgICAgICAgdmlld3MgIDoge30sXG4gICAgICAgICAgICBmaWx0ZXJzOiB7fVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IFsgcHJvcGVydHksIGFubm90YXRpb25zIF0gb2YgcHJvcGVydHlBbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgZm9yKGNvbnN0IGFubm90YXRpb24gb2YgYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgVmlld01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZG9jWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC52aWV3c1sgcHJvcGVydHkgYXMgc3RyaW5nIF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiB2YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZpZXdzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAgICA6IHZhbHVlLm1hcC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZHVjZTogdmFsdWUucmVkdWNlICYmIHZhbHVlLnJlZHVjZS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBGaWx0ZXJNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5maWx0ZXJzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IGRvY1sgcHJvcGVydHkgYXMga2V5b2YgVCBdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBWYWxpZGF0ZURvY01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZhbGlkYXRlX2RvY191cGRhdGUgPSBkb2NbIHByb3BlcnR5IGFzIGtleW9mIFQgXS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5kYi51cHNlcnQ8YW55Pihkb2N1bWVudC5faWQsIGV4aXN0aW5nRG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMSwgX3JldjogXzIsIC4uLmQxIH0gPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzMsIF9yZXY6IF80LCAuLi5kMiB9ID0gZXhpc3RpbmdEb2MgYXMgYW55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmVxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIHZpZXc8VCwgUCBleHRlbmRzIGtleW9mIFQ+KGRlc2lnbkRvYyA6IEN0b3I8VD4sIG5hbWUgOiBQLCB7IGRlcHRoLCBjaXJjdWxhckNhY2hlLCAuLi5vcHRpb25zIH0gOiBIeWRyYXRlT3B0aW9ucyAmIFBvdWNoREIuUXVlcnkuT3B0aW9uczxULCBhbnk+ID0ge30pIHtcbiAgICAgICAgY29uc3QgY2xhc3NBbm5vdGF0aW9uID0gZ2V0Q2xhc3NNZXRhZGF0YShkZXNpZ25Eb2MsIERlc2lnbkRvY01ldGFkYXRhKVsgMCBdO1xuICAgICAgICBcbiAgICAgICAgaWYoIWNsYXNzQW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXNpZ24gZG9jIGFubm90YXRpb24gcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NBbm5vdGF0aW9uLmVudGl0eSAhPT0gdGhpcy5lbnRpdHlDbGFzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2lnbiBkb2MgZW50aXR5YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb3BlcnR5QW5ub3RhdGlvbiA9IGdldFByb3BlcnR5TWV0YWRhdGEoZGVzaWduRG9jLCBuYW1lIGFzIHN0cmluZywgVmlld01ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCFwcm9wZXJ0eUFubm90YXRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB2aWV3IFwiJHtuYW1lfVwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge31cbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmluY2x1ZGVfZG9jcyA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoKGF3YWl0IHRoaXMucmF3VmlldyhgJHtjbGFzc0Fubm90YXRpb24ubmFtZX0vJHtuYW1lfWAsIG9wdGlvbnMpKVxuICAgICAgICAgICAgLnJvd3MubWFwKHJvdyA9PiByb3cuZG9jISlcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCB7XG4gICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgY2lyY3VsYXJDYWNoZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICB9XG4gICAgXG4gICAgcmF3VmlldzxSID0gVD4obmFtZSA6IHN0cmluZywgb3B0aW9ucz8gOiBQb3VjaERCLlF1ZXJ5Lk9wdGlvbnM8UiwgYW55Pikge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi5xdWVyeShuYW1lLCBvcHRpb25zKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhLCBUeXBlIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9wcm9wZXJ0eSc7XG5pbXBvcnQgeyBJbmxpbmVNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaW5saW5lJztcbmltcG9ydCB7IEhhc01hbnlNYXBNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnktbWFwJztcbmltcG9ydCB7IG1hcmtJZFJldiB9IGZyb20gJy4vdXRpbHMvbWFya3MnO1xuaW1wb3J0IHsgSHlkcmF0ZU9wdGlvbnMsIEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBBZGFtYW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9yZWxhdGlvbic7XG5pbXBvcnQgeyBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIgfSBmcm9tICcuL2Nvbm5lY3Rpb24tbWFuYWdlcic7XG5pbXBvcnQgeyBIYXNNYW55TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55JztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCZWxvbmdzVG9NZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvYmVsb25ncy10byc7XG5pbXBvcnQgeyBJZE1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pZCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFEQU1BTlRfSUQsIEFkYW1hbnRJZCB9IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh5ZHJhdG9ySW1wbCBleHRlbmRzIEh5ZHJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEFEQU1BTlRfSUQpIHByb3RlY3RlZCByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbk1hbmFnZXIgOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgXG4gICAgZGVoeWRyYXRlPFQ+KGVudGl0eSA6IFQsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIG9wdGlvbnM/IDogeyBpbmNsdWRlUmV2PyA6IGJvb2xlYW4gfSkgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT4ge1xuICAgICAgICBjb25zdCBkb2MgOiBhbnkgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIGlmKG9wdGlvbnMgJiYgb3B0aW9ucy5pbmNsdWRlUmV2KSB7XG4gICAgICAgICAgICBkb2MuX3JldiA9IChlbnRpdHkgYXMgYW55KS5fcmV2O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihtZXRhZGF0YS5hdHRhY2htZW50cyAmJiAoZW50aXR5IGFzIGFueSkuX2F0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICBkb2MuX2F0dGFjaG1lbnRzID0gKGVudGl0eSBhcyBhbnkpLl9hdHRhY2htZW50cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IFsgcHJvcGVydHksIGFubm90YXRpb24gXSBvZiBtZXRhZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA6IGFueSA9IGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdO1xuICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFJlbGF0aW9uTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uTWV0YWRhdGEgPSB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmdldE1ldGFkYXRhKGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgQmVsb25nc1RvTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHJlbGF0aW9uVG9JZCh2YWx1ZSwgcmVsYXRpb25NZXRhZGF0YSwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSAodmFsdWUgYXMgYW55W10pLm1hcChyZWwgPT4gcmVsYXRpb25Ub0lkKHJlbCwgcmVsYXRpb25NZXRhZGF0YSwgdGhpcy5pZCkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNYXBNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsIDogYW55ID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsWyBrZXkgXSA9IHJlbGF0aW9uVG9JZCh2YWx1ZVsga2V5IF0sIHJlbGF0aW9uTWV0YWRhdGEsIHRoaXMuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gcmVsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElubGluZU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmdldFJlcG9zaXRvcnkoYW5ub3RhdGlvbi50eXBlKS5oeWRyYXRvci5kZWh5ZHJhdGUodmFsdWUsIHJlbGF0aW9uTWV0YWRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBQcm9wZXJ0eU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElkTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jLl9pZCA9IHRoaXMuaWQuYnVpbGQobWV0YWRhdGEubmFtZSEsIG1ldGFkYXRhLmlkVHlwZSwgdmFsdWUgYXMgYW55KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHVuZGVmaW5lZCA9PT0gZG9jWyBwcm9wZXJ0eSBdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRvY1sgcHJvcGVydHkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRvYyBhcyBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT47XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGh5ZHJhdGU8VCBleHRlbmRzIHt9PihlbnRpdHkgOiBULCBkYXRhIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUG91Y2hEQi5Db3JlLkdldE1ldGEsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIHsgZGVwdGggPSBJbmZpbml0eSwgY2lyY3VsYXJDYWNoZSA9IHt9IH0gOiBIeWRyYXRlT3B0aW9ucyA9IHt9KSA6IFByb21pc2U8VD4ge1xuICAgICAgICBpZihkYXRhLl9pZCBpbiBjaXJjdWxhckNhY2hlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2lyY3VsYXJDYWNoZVsgZGF0YS5faWQgXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY2lyY3VsYXJDYWNoZVsgZGF0YS5faWQgXSA9IGVudGl0eTtcbiAgICAgICAgXG4gICAgICAgIG1hcmtJZFJldihlbnRpdHksIHsgaWQ6IGRhdGEuX2lkLCByZXY6IGRhdGEuX3JldiB9KTtcbiAgICAgICAgXG4gICAgICAgIGlmKG1ldGFkYXRhLmF0dGFjaG1lbnRzKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5LCAnX2F0dGFjaG1lbnRzJywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBkYXRhLl9hdHRhY2htZW50cyB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IFsgcHJvcGVydHksIGFubm90YXRpb24gXSBvZiBtZXRhZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA6IGFueSA9IGRhdGFbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgIGlmKG51bGwgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IG51bGwhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUmVsYXRpb25NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvbk1ldGFkYXRhID0gdGhpcy5jb25uZWN0aW9uTWFuYWdlci5nZXRNZXRhZGF0YShhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGlvblJlcG9zaXRvcnkgPSB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmdldFJlcG9zaXRvcnkoYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBCZWxvbmdzVG9NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBjaXJjdWxhckNhY2hlLmhhc093blByb3BlcnR5KHZhbHVlKSA/IGNpcmN1bGFyQ2FjaGVbdmFsdWVdIDogYXdhaXQgcmVsYXRpb25SZXBvc2l0b3J5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLl9yZWFkKHZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoOiBkZXB0aCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyQ2FjaGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gYXdhaXQgcmVhZEFsbFdpdGhDaXJjdWxhckNhY2hlKHJlbGF0aW9uUmVwb3NpdG9yeSwgdmFsdWUsIGRlcHRoIC0gMSwgY2lyY3VsYXJDYWNoZSkgYXMgYW55O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1hcE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoayA9PiB2YWx1ZVsgayBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW50aXRpZXMgPSBhd2FpdCByZWFkQWxsV2l0aENpcmN1bGFyQ2FjaGUocmVsYXRpb25SZXBvc2l0b3J5LCB2YWx1ZXMsIGRlcHRoIC0gMSwgY2lyY3VsYXJDYWNoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWwgOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbFsga2V5IF0gPSBlbnRpdGllcy5maW5kKGUgPT4gZS5faWQgPT09IHZhbHVlWyBrZXkgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IHJlbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBJbmxpbmVNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBhd2FpdCByZWxhdGlvblJlcG9zaXRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHlkcmF0b3IuaHlkcmF0ZShyZWxhdGlvblJlcG9zaXRvcnkuYnVpbGQoKSwgdmFsdWUsIHJlbGF0aW9uTWV0YWRhdGEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoT2JqZWN0LmdldFByb3RvdHlwZU9mKGVudGl0eSksIHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWRlc2NyaXB0b3IgfHwgZGVzY3JpcHRvci53cml0YWJsZSB8fCBkZXNjcmlwdG9yLnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSB1bnBhY2sodmFsdWUsIGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWFkQWxsV2l0aENpcmN1bGFyQ2FjaGU8VD4ocmVwbyA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+LCBrZXlzIDogc3RyaW5nW10sIGRlcHRoIDogbnVtYmVyLCBjaXJjdWxhckNhY2hlIDogeyBbIGtleSA6IHN0cmluZyBdIDogYW55IH0pIDogUHJvbWlzZTxUW10+IHtcbiAgICBjb25zdCBmaWx0ZXJlZEtleXMgPSBrZXlzLmZpbHRlcihrID0+ICFjaXJjdWxhckNhY2hlLmhhc093blByb3BlcnR5KGspKTtcbiAgICBsZXQgZnJvbURiIDogVFtdO1xuICAgIFxuICAgIGlmKGZpbHRlcmVkS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgZnJvbURiID0gYXdhaXQgcmVwby5fcmVhZEFsbCh7IGtleXM6IGZpbHRlcmVkS2V5cywgaW5jbHVkZV9kb2NzOiB0cnVlIH0sIHsgZGVwdGgsIGNpcmN1bGFyQ2FjaGUgfSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBrZXlzLm1hcChrZXkgPT4ge1xuICAgICAgICBpZihjaXJjdWxhckNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjaXJjdWxhckNhY2hlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmcm9tRGIgJiYgZnJvbURiLmZpbmQoZSA9PiAoZSBhcyBhbnkpLl9pZCA9PT0ga2V5KTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiByZWxhdGlvblRvSWQ8VD4ocmVsIDogc3RyaW5nIHwgVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgaWQgOiBBZGFtYW50SWQpIDogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHJlbCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyByZWxcbiAgICAgICAgOiBpZC5idWlsZChtZXRhZGF0YS5uYW1lISwgbWV0YWRhdGEuaWRUeXBlLCByZWxbIG1ldGFkYXRhLmlkIF0gYXMgYW55KVxufVxuXG5mdW5jdGlvbiB1bnBhY2sodmFsdWUgOiBhbnksIHR5cGUgOiBUeXBlKSA6IGFueSB7XG4gICAgaWYodHlwZSA9PT0gRGF0ZSAmJiB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdmFsdWU7XG59XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuXG5leHBvcnQgY2xhc3MgVmFsaWRhdG9ySW1wbCBleHRlbmRzIFZhbGlkYXRvciB7XG4gICAgYXN5bmMgdmFsaWRhdGU8VD4oZW50aXR5IDogVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPikgOiBQcm9taXNlPHRydWU+IHtcbiAgICAgICAgZm9yKGNvbnN0IFsgcHJvcGVydHksIGFubm90YXRpb24gXSBvZiBtZXRhZGF0YS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBhd2FpdCBhbm5vdGF0aW9uLnZhbGlkYXRlKGVudGl0eVtwcm9wZXJ0eSBhcyBrZXlvZiBUXSwgcHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEFkYW1hbnRSZXBvc2l0b3J5LCBlcXVhbENoZWNrZXJGYWN0b3J5XG59IGZyb20gJy4vcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuaW1wb3J0IHsgQnVsayB9IGZyb20gJy4vYnVsayc7XG5pbXBvcnQgeyBIeWRyYXRvciB9IGZyb20gJy4vaHlkcmF0b3InO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgSHlkcmF0b3JJbXBsIH0gZnJvbSAnLi9oeWRyYXRvci1pbXBsJztcbmltcG9ydCB7IFZhbGlkYXRvckltcGwgfSBmcm9tICcuL3ZhbGlkYXRvci1pbXBsJztcbmltcG9ydCB7XG4gICAgQURBTUFOVF9DT05ORUNUSU9OLFxuICAgIEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsXG4gICAgQURBTUFOVF9FUVVBTF9DSEVDS0VSLFxuICAgIEFEQU1BTlRfSUQsXG4gICAgQWRhbWFudElkLFxuICAgIENvbm5lY3Rpb25GYWN0b3J5XG59IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGFtYW50SWRGYWN0b3J5KCkgOiBBZGFtYW50SWQge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWQobmFtZSA6IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9XzBgXG4gICAgICAgIH0sXG4gICAgICAgIHRhaWwobmFtZSA6IHN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9XzlgXG4gICAgICAgIH0sXG4gICAgICAgIGJ1aWxkKG5hbWUgOiBzdHJpbmcsIHR5cGUgOiB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciwgaWQgOiBzdHJpbmd8bnVtYmVyKSA6IHN0cmluZyB7XG4gICAgICAgICAgICBpZih0eXBlID09PSBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fMl8ke2lkfWA7XG4gICAgICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRTdHIgPSBpZC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfV8xXyR7JzAnLnJlcGVhdCgxNiAtIGlkU3RyLmxlbmd0aCl9JHtpZFN0cn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGlkIHR5cGUgXCIke3R5cGV9XCJgKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyc2UoaWQgOiBzdHJpbmcpIDogeyBuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZyB8IG51bWJlciB9IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gL14oLiopXygxfDIpXyguKikkLy5leGVjKGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBpZCBcIiR7aWR9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBtYXRjaFsxXSEsXG4gICAgICAgICAgICAgICAgdHlwZTogbWF0Y2hbMl0gPT09ICcyJyA/IFN0cmluZyA6IE51bWJlcixcbiAgICAgICAgICAgICAgICBpZDogbWF0Y2hbMl0gPT09ICcyJyA/IG1hdGNoWzNdIDogTnVtYmVyLnBhcnNlSW50KG1hdGNoWzNdLCAxMClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFkYW1hbnRDb25uZWN0aW9uKGZhY3RvcnkgOiBDb25uZWN0aW9uRmFjdG9yeSkgOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIge1xuICAgIGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZLCB1c2VWYWx1ZTogZmFjdG9yeSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIsIGRlcHM6IFsgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIEFEQU1BTlRfSUQsIEluamVjdG9yIF0gfSxcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9JRCwgdXNlRmFjdG9yeTogYWRhbWFudElkRmFjdG9yeSwgZGVwczogW10gfSxcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FUVVBTF9DSEVDS0VSLCB1c2VGYWN0b3J5OiBlcXVhbENoZWNrZXJGYWN0b3J5LCBkZXBzOiBbXSB9XG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbmplY3Rvci5nZXQoQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB7XG4gICAgXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbm5lY3Rpb25zID0gbmV3IE1hcDxzdHJpbmcsIFBvdWNoREIuRGF0YWJhc2U8YW55Pj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVwb3NpdG9yaWVzID0gbmV3IE1hcDxDdG9yPGFueT4sIEFkYW1hbnRSZXBvc2l0b3J5PGFueT4+KCk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhID0gbmV3IE1hcDxDdG9yPGFueT4sIE1ldGFkYXRhPGFueT4+KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWSkgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbm5lY3Rpb25GYWN0b3J5IDogQ29ubmVjdGlvbkZhY3RvcnksXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0lEKSBwdWJsaWMgcmVhZG9ubHkgaWQgOiBBZGFtYW50SWQsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGluamVjdG9yIDogSW5qZWN0b3IpIHt9XG4gICAgXG4gICAgZ2V0T3BlbkNvbm5lY3Rpb25zKCkgOiBQb3VjaERCLkRhdGFiYXNlW10ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNvbm5lY3Rpb25zLnZhbHVlcygpKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29ubmVjdGlvbjxUIGV4dGVuZHMge30gPSB7fT4obmFtZSA6IHN0cmluZykgOiBQb3VjaERCLkRhdGFiYXNlPFQ+IHtcbiAgICAgICAgaWYoIXRoaXMuY29ubmVjdGlvbnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLnNldChuYW1lLCB0aGlzLmNyZWF0ZUNvbm5lY3Rpb24obmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9ucy5nZXQobmFtZSkhO1xuICAgIH1cbiAgICBcbiAgICBjbGVhckNvbm5lY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25zLmNsZWFyKCk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBjcmVhdGVDb25uZWN0aW9uKG5hbWUgOiBzdHJpbmcpIDogUG91Y2hEQi5EYXRhYmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25GYWN0b3J5KG5hbWUpO1xuICAgIH1cbiAgICBcbiAgICBnZXRSZXBvc2l0b3J5PFQ+KGVudGl0eUNsYXNzIDogQ3RvcjxUPikgOiBBZGFtYW50UmVwb3NpdG9yeTxUPiB7XG4gICAgICAgIGlmKCF0aGlzLnJlcG9zaXRvcmllcy5oYXMoZW50aXR5Q2xhc3MpKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRvcmllcy5zZXQoZW50aXR5Q2xhc3MsIHRoaXMuY3JlYXRlUmVwb3NpdG9yeShlbnRpdHlDbGFzcykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3JpZXMuZ2V0KGVudGl0eUNsYXNzKSE7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBjcmVhdGVSZXBvc2l0b3J5PFQ+KGVudGl0eUNsYXNzIDogQ3RvcjxUPikgOiBBZGFtYW50UmVwb3NpdG9yeTxUPiB7XG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5nZXRNZXRhZGF0YShlbnRpdHlDbGFzcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gSW5qZWN0b3IuY3JlYXRlKHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5pbmplY3RvcixcbiAgICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyLCB1c2VWYWx1ZTogdGhpcyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQWRhbWFudFJlcG9zaXRvcnksIGRlcHM6IFsgQURBTUFOVF9DT05ORUNUSU9OLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIEFEQU1BTlRfRVFVQUxfQ0hFQ0tFUiwgQURBTUFOVF9JRCwgQnVsaywgSHlkcmF0b3IsIFZhbGlkYXRvcl0gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfRU5USVRZX0NMQVNTLCB1c2VWYWx1ZTogZW50aXR5Q2xhc3MgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfRU5USVRZX01FVEFEQVRBLCB1c2VWYWx1ZTogbWV0YWRhdGEsIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0NPTk5FQ1RJT04sIHVzZVZhbHVlOiAhbWV0YWRhdGEuaW5saW5lID8gdGhpcy5nZXRDb25uZWN0aW9uKG1ldGFkYXRhLm5hbWUhKSA6IG51bGwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEh5ZHJhdG9ySW1wbCwgZGVwczogWyBBREFNQU5UX0lELCBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXJdIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBWYWxpZGF0b3JJbXBsLCBkZXBzOiBbXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHlkcmF0b3IsIHVzZUV4aXN0aW5nOiBtZXRhZGF0YS5oeWRyYXRvciB8fCBIeWRyYXRvckltcGwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFZhbGlkYXRvciwgdXNlRXhpc3Rpbmc6IG1ldGFkYXRhLnZhbGlkYXRvciB8fCBWYWxpZGF0b3JJbXBsIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBCdWxrLCBkZXBzOiBbIEFEQU1BTlRfQ09OTkVDVElPTiwgQURBTUFOVF9FTlRJVFlfQ0xBU1MsIEFEQU1BTlRfRU5USVRZX01FVEFEQVRBLCBIeWRyYXRvciwgVmFsaWRhdG9yIF0gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KS5nZXQ8QWRhbWFudFJlcG9zaXRvcnk8VD4+KEFkYW1hbnRSZXBvc2l0b3J5KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0TWV0YWRhdGE8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IE1ldGFkYXRhPFQ+IHtcbiAgICAgICAgaWYoIXRoaXMubWV0YWRhdGEuaGFzKGVudGl0eUNsYXNzKSkge1xuICAgICAgICAgICAgdGhpcy5tZXRhZGF0YS5zZXQoZW50aXR5Q2xhc3MsIHRoaXMuY3JlYXRlTWV0YWRhdGEoZW50aXR5Q2xhc3MpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEuZ2V0KGVudGl0eUNsYXNzKSE7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBjcmVhdGVNZXRhZGF0YTxUPihlbnRpdHlDbGFzcyA6IEN0b3I8VD4pIDogTWV0YWRhdGE8VD4ge1xuICAgICAgICByZXR1cm4gbmV3IE1ldGFkYXRhPFQ+KGVudGl0eUNsYXNzKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiLCJyZXNvbHZlRm9yd2FyZFJlZiIsIkluamVjdGlvblRva2VuIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkluamVjdCIsImVxdWFsIiwiSW5qZWN0YWJsZSIsIkluamVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7SUFjQTtJQUVBLElBQUksYUFBYSxHQUFHLFVBQVMsQ0FBQyxFQUFFLENBQUM7UUFDN0IsYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO2FBQ2hDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVFLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQUUsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0FBRUYsdUJBQTBCLENBQUMsRUFBRSxDQUFDO1FBQzFCLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsZ0JBQWdCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7UUFDdkMsQ0FBQyxDQUFDLFNBQVMs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OzRCQUFDLFNBQVM7d0JBQ2pELEtBQUssQ0FBQzs0QkFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLFNBQVM7d0JBQ2pEOzRCQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUFDLFNBQVM7NkJBQUU7NEJBQzVHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFDLE1BQU07NkJBQUU7NEJBQ3RGLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dDQUFDLE1BQU07NkJBQUU7NEJBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dDQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUFDLE1BQU07NkJBQUU7NEJBQ25FLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUFDLFNBQVM7cUJBQzlCO29CQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDOUI7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUU7d0JBQVM7b0JBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQUU7WUFDMUQsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDcEY7SUFDTCxDQUFDO0FBRUQsc0JBSXlCLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTztZQUNILElBQUksRUFBRTtnQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU07b0JBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUNuQyxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzthQUMzQztTQUNKLENBQUM7SUFDTixDQUFDO0FBRUQsb0JBQXVCLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSTtZQUNBLE9BQU8sQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUk7Z0JBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUU7UUFDRCxPQUFPLEtBQUssRUFBRTtZQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUFFO2dCQUMvQjtZQUNKLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRDtvQkFDTztnQkFBRSxJQUFJLENBQUM7b0JBQUUsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQUU7U0FDcEM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7QUFFRDtRQUNJLEtBQUssSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQzlDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztBQ3RJRCxRQUFhLGNBQWMsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQzs7QUFDOUQsUUFBYSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBd0MsQ0FBQzs7Ozs7OztBQUVyRiw4QkFBMEMsTUFBa0IsRUFBRSxJQUFlO1FBQ3pFLElBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCwwQkFBTyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEdBQUEsRUFBRTtLQUM5RTs7Ozs7O0FBRUQsK0JBQWtDLE1BQWtCLEVBQUUsUUFBYztRQUNoRSxJQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QixjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNsQztVQUNELGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVE7S0FDNUM7Ozs7Ozs7O0FBRUQsaUNBQTZDLE1BQVksRUFBRSxRQUF5QixFQUFFLElBQWlCO1FBQ25HLElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2hGLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCw2Q0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsR0FBRyxDQUFDLFFBQVEsSUFBRyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxHQUFBLEVBQUU7S0FDaEc7Ozs7OztBQUVELG9DQUFnRCxNQUFZO1FBQ3hELElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBRUQsMEJBQU8saUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFFO0tBQ3pDOzs7Ozs7O0FBRUQsa0NBQXFDLE1BQVksRUFBRSxRQUEwQixFQUFFLFFBQWM7UUFDekYsSUFBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztTQUM1QztRQUVELElBQUcsR0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFOytCQUM5QyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUUsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1NBQ2xEOzZCQUVELGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRSxHQUFHLENBQUMsUUFBUSxJQUFHLElBQUksQ0FBQyxRQUFRO0tBQzlEOzs7Ozs7O0FBRUQsc0JBQTRCLE1BQVUsRUFBRSxNQUFtQjs7O1lBQ3ZELHlDQUFpQixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBZ0IsOENBQUU7Z0JBQWpELElBQU0sR0FBRyxXQUFBO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBZSxDQUFBLENBQUM7YUFDM0M7Ozs7Ozs7Ozs7Ozs7OztRQUVELE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7UUNwREQ7Ozs7Ozs7O1FBS0ksbUNBQVE7Ozs7O1lBQVIsVUFBUyxLQUFXLEVBQUUsR0FBcUI7Z0JBQ3ZDLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksS0FBSyxFQUFFO29CQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFhLE9BQU8sR0FBRyxLQUFLLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsaUJBQVksQ0FBQyxDQUFDO2lCQUNoRzthQUNKOytCQWJMO1FBY0MsQ0FBQTtBQVZEOzs7O0FBWUEsc0JBQXlCLE9BQWdFO1FBQWhFLHdCQUFBO1lBQUEsWUFBZ0U7O1FBQ3JGLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7WUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsYUFDOUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFDMUQsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1osQ0FBQyxDQUFBO1NBQ04sQ0FBQTtLQUNKOzs7Ozs7Ozs7QUNwQkQ7O1FBQUE7UUFBeUNBLG9DQUFnQjs7OztRQUtyRCxzQkFBSSxrQ0FBSTs7O2dCQUdSO2dCQUNJLE9BQU9DLHNCQUFpQixDQUFDLG1CQUFDLElBQVcsR0FBRSxLQUFLLENBQUMsQ0FBQzthQUNqRDs7Ozs7Z0JBTEQsVUFBUyxJQUFjO2dCQUNuQixtQkFBQyxJQUFXLEdBQUUsS0FBSyxHQUFHLElBQUksQ0FBQzthQUM5Qjs7O1dBQUE7K0JBWEw7TUFJeUMsZ0JBQWdCLEVBWXhEOzs7Ozs7Ozs7QUNaRDs7UUFBQTtRQUEwQ0QscUNBQW1COzs7O2dDQUo3RDtNQUkwQyxnQkFBZ0IsRUFBTSxDQUFBOzs7Ozs7QUFFaEUsdUJBQTZCLE9BQThFO1FBQTlFLHdCQUFBO1lBQUEsWUFBOEU7O1FBQ3ZHLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7WUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksaUJBQWlCLEVBQUUsYUFDL0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFDMUQsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1osQ0FBQyxDQUFBO1NBQ04sQ0FBQTtLQUNKOzs7Ozs7QUNkRDs7O0FBRUE7O1FBQUE7OztnQ0FGQTtRQUtDLENBQUE7Ozs7Ozs7QUFNRCx1QkFBNkIsTUFBZ0IsRUFBRSxJQUFZO1FBQ3ZELE9BQU8sVUFBQyxNQUFpQjtZQUNyQixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksaUJBQWlCLEVBQUssRUFBRTtnQkFDM0QsTUFBTSxRQUFBO2dCQUNOLElBQUksTUFBQTthQUNQLENBQUMsQ0FBQyxDQUFDO1NBQ1AsQ0FBQTtLQUNKOzs7Ozs7UUNkRDs7OzZCQUpBO1FBU0MsQ0FBQTtBQUxEOzs7OztBQU9BLG9CQUF1QixJQUFhLEVBQUUsT0FJaEM7UUFKZ0Msd0JBQUE7WUFBQSxZQUloQzs7UUFDRixPQUFPLFVBQUMsTUFBaUI7WUFDckIsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGNBQWMsRUFBRSxhQUNuRCxJQUFJLE1BQUEsRUFDSixXQUFXLEVBQUUsS0FBSyxJQUdmLE9BQU8sRUFDWixDQUFDLENBQUM7U0FDUCxDQUFBO0tBQ0o7Ozs7OztBQ3pCRCxRQUdBOzs7NkJBSEE7UUFHOEIsQ0FBQTtBQUE5Qjs7O0FBRUE7UUFDSSxPQUFPLFVBQUMsTUFBYyxFQUFFLFFBQXlCO1lBQzdDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGNBQWMsRUFBRSxFQUFFLEVBQ2pGLENBQUMsQ0FBQyxDQUFBO1NBQ04sQ0FBQTtLQUNKOzs7Ozs7Ozs7QUNORDs7UUFBQTtRQUF3Q0EsbUNBQW1COzs7OzhCQUozRDtNQUl3QyxnQkFBZ0IsRUFBTSxDQUFBOzs7Ozs7O0FBRTlELHFCQUEyQixJQUEwQixFQUFFLE9BQWlEO1FBQWpELHdCQUFBO1lBQUEsWUFBaUQ7O1FBQ3BHLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7WUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksZUFBZSxFQUFFLGFBQzdFLElBQUksTUFBQSxFQUNKLFFBQVEsRUFBRSxLQUFLLElBQ1osT0FBTyxFQUNaLENBQUMsQ0FBQTtTQUNOLENBQUE7S0FDSjs7Ozs7Ozs7O0FDVkQ7O1FBQUE7UUFBMkNBLHNDQUFtQjs7OztpQ0FKOUQ7TUFJMkMsZ0JBQWdCLEVBQU0sQ0FBQTs7Ozs7OztBQUVqRSx3QkFBOEIsSUFBMEIsRUFBRSxPQUFpRDtRQUFqRCx3QkFBQTtZQUFBLFlBQWlEOztRQUN2RyxPQUFPLFVBQUMsTUFBYyxFQUFFLFFBQXlCO1lBQzdDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixFQUFFLGFBQ2hGLElBQUksTUFBQSxFQUNKLFFBQVEsRUFBRSxLQUFLLElBQ1osT0FBTyxFQUNaLENBQUMsQ0FBQTtTQUNOLENBQUE7S0FDSjs7Ozs7Ozs7UUNURyxRQUFTLFFBQVE7O1FBS3JCO1FBQWdDQSw4QkFBZ0I7Ozs2QkFFeEIsSUFBSTs7O3lCQVo1QjtNQVVnQyxnQkFBZ0IsRUFHL0MsQ0FBQTtBQUhEOzs7O0FBS0EsZ0JBQW1CLE9BQW9EO1FBQXBELHdCQUFBO1lBQUEsWUFBb0Q7O1FBQ25FLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7WUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFFLGFBQ3hFLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUN2RCxPQUFPLEVBQ1osQ0FBQyxDQUFBO1NBQ04sQ0FBQTtLQUNKOzs7Ozs7Ozs7QUNuQkQ7O1FBQUE7UUFBdUNBLGtDQUFtQjs7Ozs2QkFKMUQ7TUFJdUMsZ0JBQWdCLEVBQU0sQ0FBQTs7Ozs7O0FBRTdELG9CQUEwQixPQUE4RTtRQUE5RSx3QkFBQTtZQUFBLFlBQThFOztRQUNwRyxPQUFPLFVBQUMsTUFBYyxFQUFFLFFBQXlCO1lBQzdDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGNBQWMsRUFBRSxhQUM1RSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMxRCxRQUFRLEVBQUUsS0FBSyxJQUNaLE9BQU8sRUFDWixDQUFDLENBQUE7U0FDTixDQUFBO0tBQ0o7Ozs7OztRQ1ZEOzs7bUNBSkE7UUFRQyxDQUFBO0FBSkQ7Ozs7QUFNQSwwQkFBNkIsT0FHdkI7UUFIdUIsd0JBQUE7WUFBQSxZQUd2Qjs7UUFDRixPQUFPLFVBQUMsTUFBaUI7WUFDckIsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLG9CQUFvQixFQUFFLGVBR3RELE9BQU8sSUFDVixNQUFNLEVBQUUsSUFBSSxJQUNkLENBQUMsQ0FBQztTQUNQLENBQUE7S0FDSjs7Ozs7O0FDdEJELFFBR0E7OztrQ0FIQTtRQUdtQyxDQUFBO0FBQW5DOzs7QUFFQTtRQUNJLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7WUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksbUJBQW1CLEVBQUUsRUFBRSxFQUN0RixDQUFDLENBQUMsQ0FBQTtTQUNOLENBQUE7S0FDSjs7Ozs7O0FDVkQsUUFHQTs7OzJCQUhBO1FBRzRCLENBQUE7QUFBNUI7OztBQUVBO1FBQ0ksT0FBTyxVQUFDLE1BQWMsRUFBRSxRQUF5QjtZQUM3QyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxZQUFZLEVBQUUsRUFBRSxFQUMvRSxDQUFDLENBQUMsQ0FBQTtTQUNOLENBQUE7S0FDSjs7Ozs7Ozs7O0FDSEQ7O1FBQUE7Ozt1QkFQQTtRQVdDOzs7Ozs7Ozs7QUNURDs7UUFBQTs7O3dCQUZBO1FBSUM7Ozs7OztBQ0hEO0FBbUJBLFFBQWEsa0JBQWtCLEdBQUcsSUFBSUUsbUJBQWMsQ0FBbUIsb0JBQW9CLENBQUMsQ0FBQzs7QUFDN0YsUUFBYSxvQkFBb0IsR0FBRyxJQUFJQSxtQkFBYyxDQUFZLHNCQUFzQixDQUFDLENBQUM7O0FBQzFGLFFBQWEsdUJBQXVCLEdBQUcsSUFBSUEsbUJBQWMsQ0FBZ0IseUJBQXlCLENBQUMsQ0FBQzs7QUFDcEcsUUFBYSxxQkFBcUIsR0FBRyxJQUFJQSxtQkFBYyxDQUFlLHVCQUF1QixDQUFDLENBQUM7O0FBQy9GLFFBQWEsMEJBQTBCLEdBQUcsSUFBSUEsbUJBQWMsQ0FBb0IsNEJBQTRCLENBQUMsQ0FBQzs7QUFDOUcsUUFBYSxVQUFVLEdBQUcsSUFBSUEsbUJBQWMsQ0FBWSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0FDekJyRSx5QkFBMEMsTUFBVTtRQUNoRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRS9FLE9BQU8sTUFBTSxDQUFDO0tBQ2pCOzs7Ozs7O0FBRUQsdUJBQXdDLE1BQVUsRUFBRSxHQUFxQztRQUNyRixNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUU5RSxPQUFPLE1BQU0sQ0FBQztLQUNqQjs7Ozs7Ozs7O0FDQ0Q7O1FBQUE7Ozs7UUFnQkksa0JBQStCLE1BQWdCO1lBQWhCLFdBQU0sR0FBTixNQUFNLENBQVU7MEJBZnBCLEtBQUs7OEJBVVYsSUFBSSxHQUFHLEVBQXdJO1lBTWpLLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjs7OztRQUVTLHdCQUFLOzs7WUFBZjs7O2dCQUNJLElBQU0sYUFBYSxHQUFHLGdCQUFnQixDQUF3QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O2dCQUMzRixJQUFNLGdCQUFnQixHQUFHLHNCQUFzQixDQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7b0JBRXpFLEtBQXdCLElBQUEsa0JBQUFDLFNBQUEsYUFBYSxDQUFBLDRDQUFBLHVFQUFFO3dCQUFuQyxJQUFNLFVBQVUsMEJBQUE7d0JBQ2hCLElBQUcsVUFBVSxZQUFZLGNBQWMsSUFBSSxVQUFVLFlBQVksb0JBQW9CLEVBQUU7NEJBQ25GLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO3lCQUNuQztxQkFDSjs7Ozs7Ozs7Ozs7Ozs7OztvQkFFRCxLQUF1QyxJQUFBLHFCQUFBQSxTQUFBLGdCQUFnQixDQUFBLGtEQUFBLGdGQUFFO3dFQUE3QyxnQkFBUSxFQUFFLG1CQUFXOzs0QkFDN0IsS0FBd0IsSUFBQSxnQkFBQUEsU0FBQSxXQUFXLENBQUEsd0NBQUEsaUVBQUU7Z0NBQWpDLElBQU0sVUFBVSx3QkFBQTtnQ0FDaEIsSUFBRyxVQUFVLFlBQVksVUFBVSxFQUFFO29DQUNqQyxtQkFBQyxJQUFXLEdBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQztvQ0FDNUIsbUJBQUMsSUFBVyxHQUFFLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO29DQUN2QyxtQkFBQyxJQUFXLEdBQUUsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7aUNBQ2xEOzs7Ozs7Ozs7Ozs7Z0NBY0QsSUFBRyxVQUFVLFlBQVksZ0JBQWdCLEVBQUU7b0NBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztpQ0FDN0M7NkJBQ0o7Ozs7Ozs7Ozs7Ozs7OztxQkFDSjs7Ozs7Ozs7Ozs7Ozs7O2FBQ0o7Ozs7UUFFUyx5QkFBTTs7O1lBQWhCOzs7b0JBQ0ksS0FBaUIsSUFBQSxLQUFBQSw2QkFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBRSxJQUEyQixnQkFBQSw0QkFBRTt3QkFBNUcsSUFBTSxHQUFHLFdBQUE7d0JBQ1QsSUFBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNsQixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUFxQixHQUFHLHVCQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksT0FBRyxDQUFDLENBQUM7eUJBQ2pGO3FCQUNKOzs7Ozs7Ozs7Ozs7Ozs7YUFDSjt1QkE1RUw7UUE2RUM7Ozs7Ozs7O1FDcEVHLFFBQVMsUUFBUTtRQUNqQixRQUFTLFFBQVE7UUFDakIsUUFBUyxRQUFROzs7Ozs7UUFLakIsY0FBMkQsRUFBd0IsRUFDdEIsV0FBcUIsRUFDbEIsUUFBc0IsRUFDdkQsUUFBbUIsRUFDbkIsU0FBcUI7WUFKTyxPQUFFLEdBQUYsRUFBRSxDQUFzQjtZQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtZQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFjO1lBQ3ZELGFBQVEsR0FBUixRQUFRLENBQVc7WUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBWTtTQUFJOzs7Ozs7UUFFeEMsbUJBQUk7Ozs7O1lBQXBCLFVBQXFCLFFBQWMsRUFBRSxTQUF5Qjs7Ozs7OztnQ0FDMUQsSUFBRyxDQUFDLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtvQ0FDdEIsc0JBQU8sUUFBUSxFQUFDO2lDQUNuQjtnQ0FFWSxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBTSxNQUFNOzs7Ozs7d0RBQ3BELElBQUcsRUFBRSxNQUFNLFlBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFOzREQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLGNBQVcsTUFBTSw2QkFBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFNLENBQUMsQ0FBQzt5REFDcEY7d0RBRUQscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7d0RBQXBELFNBQW9ELENBQUM7d0RBRS9DLEdBQUcsR0FBeUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLElBQUksU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO3dEQUMzTSxJQUFHLFNBQVMsS0FBSyxhQUFhLENBQUMsTUFBTSxFQUFFOzREQUNuQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzt5REFDdkI7d0RBQ0Qsc0JBQU8sR0FBRyxFQUFDOzs7O3FDQUNkLENBQUMsQ0FBQyxFQUFBOztnQ0FaRyxJQUFJLEdBQUcsU0FZVjtnQ0FFWSxxQkFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0NBQXJDLE1BQU0sR0FBRyxTQUE0QjtnQ0FDckMsTUFBTSxHQUEwQixNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBQSxDQUFDLENBQUM7Z0NBRTNHLElBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0NBQ2xCLE1BQU0sTUFBTSxDQUFDO2lDQUNoQjtnQ0FFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0NBQ3RCLElBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUU7d0NBQ25DLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQ0FDaEM7b0NBQ0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztpQ0FDbkMsQ0FBQyxDQUFDO2dDQUVILHNCQUFPLFFBQVEsRUFBQzs7OzthQUNuQjs7Ozs7UUFFRCxxQkFBTTs7OztZQUFOLFVBQU8sUUFBYztnQkFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDcEQ7Ozs7O1FBRUQscUJBQU07Ozs7WUFBTixVQUFPLFFBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BEOzs7OztRQUVELHFCQUFNOzs7O1lBQU4sVUFBTyxRQUFjO2dCQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNwRDs7Ozt3REFwRFlDLFdBQU0sU0FBQyxrQkFBa0I7d0RBQ3pCQSxXQUFNLFNBQUMsb0JBQW9CO3dCQVhuQyxRQUFRLHVCQVlBQSxXQUFNLFNBQUMsdUJBQXVCO3dCQWxCdEMsUUFBUTt3QkFDUixTQUFTOzs7bUJBRGxCOzs7Ozs7Ozs7OztBQ0VBOztRQUNJLElBQUksT0FBTyxDQUdSOztRQUhILElBQW9CLE1BQU0sQ0FHdkI7O1FBSEgsSUFBa0MsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDaEUsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNkLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDaEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztLQUN0RDs7Ozs7O0lDUEQsSUFBQTtRQUlJLDBCQUErQixFQUFxQjtZQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjt5QkFIakMsRUFBRTtTQUdtQzs7Ozs7O1FBRXhELCtCQUFJOzs7OztZQUFKLFVBQVEsSUFBZTs7Z0JBQ25CLENBQUEsS0FBQSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksb0JBQUksSUFBSSxHQUFFO2dCQUV6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO29CQUMvQixPQUFPLElBQUk7eUJBQ04sR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFBLENBQUMsR0FBQSxDQUFDO3lCQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO3lCQUNmLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFBLENBQUMsQ0FBQztpQkFDcEQsQ0FBQyxDQUFDO2FBQ047Ozs7O1FBRVMsbUNBQVE7Ozs7WUFBbEI7Z0JBQUEsaUJBY0M7Z0JBYkcsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsWUFBWSxDQUFDO3dCQUNULEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDbEIsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNmLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQTtxQkFDdkIsRUFBRTt3QkFDQyxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUE7cUJBQ3ZCLENBQUMsQ0FBQztpQkFDTjtnQkFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDeEI7Ozs7UUFFZSxrQ0FBTzs7O1lBQXZCOzs7Ozs7Z0NBQ1UsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBQSxDQUFDLENBQUM7Z0NBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOzs7O2dDQUdLLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3dDQUNuQyxZQUFZLEVBQUUsSUFBSTt3Q0FDbEIsSUFBSSxNQUFBO3FDQUNQLENBQUMsRUFBQTs7Z0NBSE0sSUFBSSxHQUFLLENBQUEsU0FHZixNQUhVO2tDQUtaLElBQUksQ0FBQyxRQUFRLEdBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxHQUFBLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOzs7O21EQUUzRCxJQUFJLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQyxHQUFDOzs7Ozs7YUFFOUI7K0JBakRMO1FBa0RDLENBQUE7Ozs7Ozs7OztBQy9DRDs7UUFBQTtRQU9JLHNCQUErQixVQUFpQyxFQUFFLElBQWEsRUFBRSxJQUFhO1lBQS9ELGVBQVUsR0FBVixVQUFVLENBQXVCOzZCQUxsQixFQUFFO3lCQUN1QixFQUFFO1lBS3JFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHO2dCQUNqQixHQUFHLEVBQUUsSUFBSTtnQkFDVCxHQUFHLEVBQUUsSUFBSTthQUNaLENBQUE7U0FDSjs7Ozs7O1FBSUQsK0JBQVE7Ozs7O1lBQVIsVUFBUyxlQUE4QyxFQUFFLFNBQWdHO2dCQUNySixJQUFHLE9BQU8sZUFBZSxLQUFLLFFBQVEsRUFBRTtvQkFDcEMsSUFBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7d0JBQzlCLFNBQVMsR0FBRzs0QkFDUixHQUFHLEVBQUUsU0FBUzt5QkFDakIsQ0FBQTtxQkFDSjtvQkFDRCxJQUFHLGVBQWUsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUVsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUUsZUFBZSxDQUFFLEVBQUUsU0FBUyxDQUFDLENBQUE7cUJBQzlEO3lCQUFNO3dCQUNILElBQUksQ0FBQyxTQUFTLENBQUUsZUFBZSxDQUFFLEdBQUcsU0FBUyxDQUFDO3FCQUNqRDtpQkFDSjtxQkFBTTtvQkFDSCxLQUFJLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzVDO2lCQUNKO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7Ozs7OztRQUlELDJCQUFJOzs7OztZQUFKLFVBQUssY0FBOEQsRUFBRSxTQUEyQjs7Z0JBQzVGLElBQUcsT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQUcsR0FBQyxjQUFjLElBQUcsU0FBUyxNQUFHLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmOzs7OztRQUVELDRCQUFLOzs7O1lBQUwsVUFBTSxLQUFjO2dCQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDZjs7Ozs7UUFFRCwyQkFBSTs7OztZQUFKLFVBQUssSUFBYTtnQkFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDZjs7Ozs7UUFFRCw4QkFBTzs7OztZQUFQLFVBQVEsT0FBd0I7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ3REOzs7O1FBRUQsb0NBQWE7OztZQUFiOztnQkFDSSxJQUFNLEdBQUcsR0FBaUM7b0JBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDM0IsQ0FBQztnQkFFRixJQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDdEIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN6QjtnQkFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO29CQUNwQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQzNCO2dCQUVELElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDekI7Z0JBRUQsT0FBTyxHQUFHLENBQUM7YUFDZDsyQkFuRkw7UUFvRkM7Ozs7Ozs7OztBQzNERDtRQUNJLE9BQU8sS0FBSyxDQUFDO0tBQ2hCOzs7OztRQU9HLDJCQUEyRCxFQUF3QixFQUN0QixXQUFxQixFQUNsQixRQUFzQixFQUN4QkMsUUFBb0IsRUFDL0IsRUFBYyxFQUNyQyxNQUNBLFVBQ0E7WUFQK0IsT0FBRSxHQUFGLEVBQUUsQ0FBc0I7WUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7WUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztZQUN4QixVQUFLLEdBQUxBLFFBQUssQ0FBZTtZQUMvQixPQUFFLEdBQUYsRUFBRSxDQUFZO1lBQ3JDLFNBQUksR0FBSixJQUFJO1lBQ0osYUFBUSxHQUFSLFFBQVE7WUFDUixjQUFTLEdBQVQsU0FBUztnQ0FUSCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7U0FVOUQ7Ozs7O1FBRUssa0NBQU07Ozs7WUFBWixVQUFhLE1BQVU7Ozs7O29DQUNuQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztnQ0FBcEQsU0FBb0QsQ0FBQztnQ0FFL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBRTVDLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztnQ0FBL0IsTUFBTSxHQUFHLFNBQXNCO2dDQUVyQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dDQUUxQixzQkFBTyxNQUFNLEVBQUM7Ozs7YUFDakI7Ozs7O1FBRUssa0NBQU07Ozs7WUFBWixVQUFhLE1BQVU7Ozs7O29DQUNuQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztnQ0FBcEQsU0FBb0QsQ0FBQztnQ0FFL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0NBRTVDLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLG9CQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxvQkFBRSxNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQVMsRUFBQyxFQUFFLEdBQUcsQ0FBQyxFQUFBOztnQ0FBN0gsTUFBTSxHQUFHLFNBQW9IO2dDQUVuSSxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dDQUUxQixzQkFBTyxNQUFNLEVBQUM7Ozs7YUFDakI7Ozs7Ozs7O1FBR0QsbUNBQU87Ozs7OztZQUFQLFVBQVEsRUFBVyxFQUFFLFFBQTBFO2dCQUEvRixpQkFXQztnQkFWRyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFBLFdBQVc7b0JBQ2pDLHNDQUFRLFdBQU8sRUFBRSxZQUFRLEVBQUUsZ0NBQUssQ0FBcUI7b0JBQ3JELHlDQUFRLFdBQU8sRUFBRSxZQUFRLEVBQUUsZ0NBQUssQ0FBd0I7b0JBRXhELElBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7d0JBQ25CLE9BQU8sS0FBSyxDQUFDO3FCQUNoQjtvQkFFRCxPQUFPLFFBQVEsQ0FBQztpQkFDbkIsQ0FBQyxDQUFBO2FBQ0w7Ozs7O1FBRUssa0NBQU07Ozs7WUFBWixVQUFhLE1BQVU7Ozs7O29DQUNuQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztnQ0FBcEQsU0FBb0QsQ0FBQztnQ0FFL0MsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7Z0NBRWxFLHFCQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFBOztnQ0FBL0IsTUFBTSxHQUFHLFNBQXNCO2dDQUVyQyxTQUFTLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dDQUUxQixzQkFBTyxNQUFNLEVBQUM7Ozs7YUFDakI7Ozs7O1FBRUssa0NBQU07Ozs7WUFBWixVQUFhLE1BQVU7Ozs7O29DQUNuQixxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOztnQ0FBcEQsU0FBb0QsQ0FBQztnQ0FFL0MsR0FBRyxHQUFnRyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dDQUU5SyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQ0FFTCxxQkFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQTs7Z0NBQS9CLE1BQU0sR0FBRyxTQUFzQjtnQ0FFckMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztnQ0FDMUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUVwQixzQkFBTyxNQUFNLEVBQUM7Ozs7YUFDakI7Ozs7OztRQUVELGdDQUFJOzs7OztZQUFKLFVBQUssRUFBb0IsRUFBRSxPQUF5QjtnQkFDaEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxvQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUM1Rjs7Ozs7Ozs7UUFHSyxpQ0FBSzs7Ozs7O1lBQVgsVUFBWSxFQUFXLEVBQUUsT0FBeUI7Ozs7OztnQ0FDdkMsS0FBQSxDQUFBLEtBQUEsSUFBSSxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUE7c0NBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQ0FBRSxxQkFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFBO29DQUEvRixzQkFBTyx3QkFBaUUsU0FBdUIsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sR0FBQyxFQUFDOzs7O2FBQzVIOzs7Ozs7O1FBR0ssb0NBQVE7Ozs7O1lBQWQsVUFBZSxFQUFXOzs7OztvQ0FDUCxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBSSxDQUFFLEVBQUUsQ0FBRSxDQUFDLEVBQUE7O2dDQUFoRCxNQUFNLEdBQUcsU0FBdUM7Z0NBQ3RELElBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUU7b0NBQ2IsTUFBTTt3Q0FDRixNQUFNLEVBQUcsR0FBRzt3Q0FDWixJQUFJLEVBQUssV0FBVzt3Q0FDcEIsT0FBTyxFQUFFLFNBQVM7d0NBQ2xCLE1BQU0sRUFBRyxTQUFTO3dDQUNsQixFQUFFLElBQUE7cUNBQ0wsQ0FBQTtpQ0FDSjtnQ0FFRCxzQkFBTyxNQUFNLENBQUUsQ0FBQyxDQUFFLEVBQUM7Ozs7YUFDdEI7Ozs7OztRQUVLLG1DQUFPOzs7OztZQUFiLFVBQWMsR0FBMEIsRUFBRSxPQUF5Qjs7Ozs7d0JBQ3pELEdBQUcscUJBQWtGOzRCQUN2RixZQUFZLEVBQUUsSUFBSTt5QkFDZCxFQUFDO3dCQUVULElBQUcsR0FBRyxFQUFFOzRCQUNKLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEtBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxvQkFBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDO3lCQUM3SDs2QkFBTTs0QkFDSCxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRSxDQUFDOzRCQUNqRCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxvQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRSxDQUFDO3lCQUNsRDt3QkFFRCxzQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBQzs7O2FBQ3RDOzs7Ozs7OztRQUdLLG9DQUFROzs7Ozs7WUFBZCxVQUFlLEdBQWtGLEVBQUUsT0FBeUI7Ozs7Ozs7Z0NBQzNHLEtBQUEsQ0FBQSxLQUFBLE9BQU8sRUFBQyxHQUFHLENBQUE7Z0NBQUUscUJBQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBQTtvQ0FBOUMscUJBQU0sY0FBWSxDQUFDLFNBQTJCO3lDQUNoRCxHQUFHLENBQUMsVUFBTSxHQUFHOzs7Z0RBQUksc0JBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFBOzs7cUNBQUEsQ0FBQyxFQUNuSCxFQUFBO29DQUZELHNCQUFPLFNBRU4sRUFBQTs7OzthQUNKOzs7Ozs7O1FBR0ssdUNBQVc7Ozs7O1lBQWpCLFVBQWtCLEdBQWtGOzs7OztzQ0FDN0YsR0FBRyxDQUFDLFlBQVksSUFBSSxNQUFNLElBQUksR0FBRyxDQUFBO29DQUFqQyx3QkFBaUM7Z0NBQ3pCLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQTtvQ0FBaEQsc0JBQU8sU0FBeUMsRUFBQztvQ0FHN0MscUJBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUksR0FBRyxDQUFDLEVBQUE7b0NBQXJDLHNCQUFPLENBQUMsU0FBNkIsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxhQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBQzs7OzthQUNoRjs7OztRQUVELGlDQUFLOzs7WUFBTDtnQkFDSSxPQUFPLElBQUksWUFBWSxDQUFJLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksb0JBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDO2FBQzFHOzs7Ozs7UUFFSyx3Q0FBWTs7Ozs7WUFBbEIsVUFBbUIsS0FBdUIsRUFBRSxPQUF5Qjs7Ozs7OztnQ0FDcEQsS0FBQSxDQUFBLEtBQUEsT0FBTyxFQUFDLEdBQUcsQ0FBQTtnQ0FBRSxxQkFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBQTtvQ0FBNUQscUJBQU0sY0FBWSxDQUFDLFNBQXlDLEVBQUUsSUFBSTt5Q0FDcEUsR0FBRyxDQUFDLFVBQU0sR0FBRzs7O2dEQUFJLHNCQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBQTs7O3FDQUFBLENBQUMsRUFDbkgsRUFBQTtvQ0FGRCxzQkFBTyxTQUVOLEVBQUE7Ozs7YUFDSjs7Ozs7UUFFRCxpQ0FBSzs7OztZQUFMLFVBQU0sS0FBdUI7Z0JBQXZCLHNCQUFBO29CQUFBLFVBQXVCOztnQkFDekIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3JFOzs7Ozs7UUFFSyw0Q0FBZ0I7Ozs7O1lBQXRCLFVBQXFDLEdBQU87Ozs7Ozs7Z0NBQ2xDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztnQ0FDeEUsbUJBQW1CLEdBQUcsc0JBQXNCLENBQXNELEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQ0FFekgsSUFBRyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsTUFBTSxFQUFFO29DQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7aUNBQ3JEO2dDQUVELElBQUcsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7b0NBQ2xELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztpQ0FDaEQ7Z0NBRUcsUUFBUSxHQUtSO29DQUNBLEdBQUcsRUFBTSxhQUFXLGdCQUFnQixDQUFFLENBQUMsQ0FBRSxDQUFDLElBQU07b0NBQ2hELEtBQUssRUFBSSxFQUFFO29DQUNYLE9BQU8sRUFBRSxFQUFFO2lDQUNkLENBQUM7O29DQUVGLEtBQXVDLHdCQUFBRixTQUFBLG1CQUFtQixDQUFBLGlKQUFFO3VGQUFoRCxRQUFRLFFBQUEsRUFBRSxXQUFXLFFBQUE7OzRDQUM3QixLQUF3QixnQkFBQUEsU0FBQSxXQUFXLENBQUEseUdBQUU7Z0RBQTNCLFVBQVU7Z0RBQ2hCLElBQUcsVUFBVSxZQUFZLFlBQVksRUFBRTtvREFDN0IsS0FBSyxHQUFTLEdBQUcsbUJBQUUsUUFBbUIsRUFBRSxDQUFDO29EQUN6QyxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7b0RBRTFCLElBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO3dEQUN6QyxRQUFRLENBQUMsS0FBSyxtQkFBRSxRQUFrQixFQUFFLEdBQUc7NERBQ25DLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFO3lEQUN4QixDQUFDO3FEQUNMO3lEQUFNLElBQUcsSUFBSSxLQUFLLFFBQVEsRUFBRTt3REFDekIsUUFBUSxDQUFDLEtBQUssbUJBQUUsUUFBa0IsRUFBRSxHQUFHOzREQUNuQyxHQUFHLEVBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7NERBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO3lEQUNsRCxDQUFDO3FEQUNMO2lEQUNKO3FEQUFNLElBQUcsVUFBVSxZQUFZLGNBQWMsRUFBRTtvREFDNUMsUUFBUSxDQUFDLE9BQU8sbUJBQUUsUUFBa0IsRUFBRSxHQUFHLEdBQUcsbUJBQUUsUUFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lEQUNsRjtxREFBTSxJQUFHLFVBQVUsWUFBWSxtQkFBbUIsRUFBRTtvREFDakQsUUFBUSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsbUJBQUUsUUFBbUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lEQUN4RTs2Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O3FDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Z0NBRUQscUJBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQU0sUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFBLFdBQVc7d0NBQy9DLHNDQUFRLFdBQU8sRUFBRSxZQUFRLEVBQUUsZ0NBQUssQ0FBcUI7d0NBQ3JELHlDQUFRLFdBQU8sRUFBRSxZQUFRLEVBQUUsZ0NBQUssQ0FBd0I7d0NBRXhELElBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7NENBQ25CLE9BQU8sS0FBSyxDQUFDO3lDQUNoQjt3Q0FFRCxPQUFPLFFBQVEsQ0FBQztxQ0FDbkIsQ0FBQyxFQUFBOztnQ0FURixTQVNFLENBQUM7Ozs7O2FBQ047Ozs7Ozs7O1FBRUssZ0NBQUk7Ozs7Ozs7WUFBVixVQUFpQyxTQUFtQixFQUFFLElBQVEsRUFBRSxFQUEwRjtnQkFBMUYsbUJBQUE7b0JBQUEsT0FBMEY7O2dCQUF4RixJQUFBLGdCQUFLLEVBQUUsZ0NBQWEsRUFBRSxnREFBVTs7Ozs7OztnQ0FDeEYsZUFBZSxHQUFHLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDO2dDQUU1RSxJQUFHLENBQUMsZUFBZSxFQUFFO29DQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7aUNBQ3JEO2dDQUVELElBQUcsZUFBZSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFO29DQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7aUNBQ2hEO2dDQUVLLGtCQUFrQixHQUFHLG1CQUFtQixDQUFDLFNBQVMsb0JBQUUsSUFBYyxHQUFFLFlBQVksQ0FBQyxDQUFDO2dDQUV4RixJQUFHLENBQUMsa0JBQWtCLEVBQUU7b0NBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQWlCLElBQUksT0FBRyxDQUFDLENBQUM7aUNBQzdDO2dDQUVELElBQUcsQ0FBQyxPQUFPLEVBQUU7b0NBQ1QsT0FBTyxHQUFHLEVBQUUsQ0FBQTtpQ0FDZjtnQ0FDRCxPQUFPLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztnQ0FFZixLQUFBLENBQUEsS0FBQSxPQUFPLEVBQUMsR0FBRyxDQUFBO2dDQUFFLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUksZUFBZSxDQUFDLElBQUksU0FBSSxJQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUE7b0NBQWpGLHFCQUFNLGNBQVksQ0FBQyxTQUE4RDt5Q0FDbkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsYUFBSSxHQUFHLENBQUMsR0FBRyxLQUFDLENBQUM7eUNBQ3pCLEdBQUcsQ0FBQyxVQUFNLEdBQUc7OztnREFBSSxzQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7d0RBQ25HLEtBQUssT0FBQTt3REFDTCxhQUFhLGVBQUE7cURBQ2hCLENBQUMsRUFBQTs7O3FDQUFBLENBQUMsRUFDTixFQUFBO29DQU5ELHNCQUFPLFNBTU4sRUFBQTs7OzthQUNKOzs7Ozs7O1FBRUQsbUNBQU87Ozs7OztZQUFQLFVBQWUsSUFBYSxFQUFFLE9BQXdDO2dCQUNsRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN2Qzs7b0JBalBKRyxlQUFVOzs7Ozt3REFJTUYsV0FBTSxTQUFDLGtCQUFrQjt3REFDekJBLFdBQU0sU0FBQyxvQkFBb0I7d0JBL0JuQyxRQUFRLHVCQWdDQUEsV0FBTSxTQUFDLHVCQUF1Qjt3REFDOUJBLFdBQU0sU0FBQyxxQkFBcUI7d0RBQzVCQSxXQUFNLFNBQUMsVUFBVTt3QkFqQ3pCLElBQUk7d0JBRlksUUFBUTt3QkFGeEIsU0FBUzs7O2dDQURsQjs7Ozs7Ozs7UUNnQmtDSixnQ0FBUTtRQUN0QyxzQkFBbUQsRUFBYyxFQUNsQyxpQkFBNEM7WUFEM0UsWUFFSSxpQkFBTyxTQUNWO1lBSGtELFFBQUUsR0FBRixFQUFFLENBQVk7WUFDbEMsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUEyQjs7U0FFMUU7Ozs7Ozs7O1FBRUQsZ0NBQVM7Ozs7Ozs7WUFBVCxVQUFhLE1BQVUsRUFBRSxRQUFzQixFQUFFLE9BQW9DO2dCQUFyRixpQkE2Q0M7OztnQkE1Q0csSUFBTSxHQUFHLEdBQVMsRUFBRSxDQUFDO2dCQUVyQixJQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO29CQUM5QixHQUFHLENBQUMsSUFBSSxHQUFHLG1CQUFDLE1BQWEsR0FBRSxJQUFJLENBQUM7aUJBQ25DO2dCQUVELElBQUcsUUFBUSxDQUFDLFdBQVcsSUFBSSxtQkFBQyxNQUFhLEdBQUUsWUFBWSxFQUFFO29CQUNyRCxHQUFHLENBQUMsWUFBWSxHQUFHLG1CQUFDLE1BQWEsR0FBRSxZQUFZLENBQUM7aUJBQ25EO3dDQUVXLFFBQVEsRUFBRSxVQUFVOztvQkFDNUIsSUFBTSxLQUFLLEdBQVMsTUFBTSxtQkFBRSxRQUFtQixFQUFFLENBQUM7b0JBQ2xELElBQUcsVUFBVSxZQUFZLGdCQUFnQixFQUFFO3dCQUN2QyxJQUFHLEtBQUssSUFBSSxJQUFJLEVBQUU7OzRCQUNkLElBQU0sa0JBQWdCLEdBQUcsT0FBSyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUU3RSxJQUFHLFVBQVUsWUFBWSxpQkFBaUIsRUFBRTtnQ0FDeEMsR0FBRyxDQUFFLFFBQVEsQ0FBRSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsa0JBQWdCLEVBQUUsT0FBSyxFQUFFLENBQUMsQ0FBQzs2QkFDcEU7aUNBQU0sSUFBRyxVQUFVLFlBQVksZUFBZSxFQUFFO2dDQUM3QyxHQUFHLENBQUUsUUFBUSxDQUFFLEdBQUcsbUJBQUMsS0FBYyxHQUFFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFlBQVksQ0FBQyxHQUFHLEVBQUUsa0JBQWdCLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxHQUFBLENBQUMsQ0FBQzs2QkFDL0Y7aUNBQU0sSUFBRyxVQUFVLFlBQVksa0JBQWtCLEVBQUU7O2dDQUNoRCxJQUFNLEdBQUcsR0FBUyxFQUFFLENBQUM7Z0NBQ3JCLEtBQUksSUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO29DQUNwQixHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBRSxHQUFHLENBQUUsRUFBRSxrQkFBZ0IsRUFBRSxPQUFLLEVBQUUsQ0FBQyxDQUFDO2lDQUN0RTtnQ0FDRCxHQUFHLENBQUUsUUFBUSxDQUFFLEdBQUcsR0FBRyxDQUFDOzZCQUN6QjtpQ0FBTSxJQUFHLFVBQVUsWUFBWSxjQUFjLEVBQUU7Z0NBQzVDLEdBQUcsQ0FBRSxRQUFRLENBQUUsR0FBRyxPQUFLLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsa0JBQWdCLENBQUMsQ0FBQzs2QkFDdkg7eUJBQ0o7cUJBQ0o7eUJBQU0sSUFBRyxVQUFVLFlBQVksZ0JBQWdCLEVBQUU7d0JBQzlDLEdBQUcsQ0FBRSxRQUFRLENBQUUsR0FBRyxLQUFLLENBQUM7d0JBRXhCLElBQUcsVUFBVSxZQUFZLFVBQVUsRUFBRTs0QkFDakMsR0FBRyxDQUFDLEdBQUcsR0FBRyxPQUFLLEVBQUUsQ0FBQyxLQUFLLG9CQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUcsUUFBUSxDQUFDLE1BQU0sb0JBQUUsS0FBWSxFQUFDLENBQUM7eUJBQzFFO3FCQUNKO29CQUVELElBQUcsU0FBUyxLQUFLLEdBQUcsQ0FBRSxRQUFRLENBQUUsRUFBRTt3QkFDOUIsT0FBTyxHQUFHLENBQUUsUUFBUSxDQUFFLENBQUM7cUJBQzFCOzs7O29CQTlCTCxLQUFzQyxJQUFBLEtBQUFHLFNBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQSxnQkFBQTtzREFBN0MsZ0JBQVEsRUFBRSxrQkFBVTtnQ0FBcEIsUUFBUSxFQUFFLFVBQVU7cUJBK0IvQjs7Ozs7Ozs7Ozs7Ozs7O2dCQUVELHlCQUFPLEdBQXNFLEVBQUM7YUFDakY7Ozs7Ozs7OztRQUVLLDhCQUFPOzs7Ozs7OztZQUFiLFVBQTRCLE1BQVUsRUFBRSxJQUFzRCxFQUFFLFFBQXNCLEVBQUUsRUFBOEQ7b0JBQTlELDRCQUE4RCxFQUE1RCxhQUFnQixFQUFoQixxQ0FBZ0IsRUFBRSxxQkFBa0IsRUFBbEIsdUNBQWtCOzs7Ozs7Z0NBQzFKLElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxhQUFhLEVBQUU7b0NBQzFCLHNCQUFPLGFBQWEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLEVBQUM7aUNBQ3BDO2dDQUVELGFBQWEsQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLEdBQUcsTUFBTSxDQUFDO2dDQUVuQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dDQUVwRCxJQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0NBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO2lDQUNuRztvREFFVyxRQUFRLEVBQUUsVUFBVTs7Ozs7Z0RBQ3RCLEtBQUssR0FBUyxJQUFJLG1CQUFFLFFBQW1CLEVBQUUsQ0FBQztzREFDN0MsSUFBSSxJQUFJLEtBQUssQ0FBQTtvREFBYix3QkFBYTtnREFDWixNQUFNLG1CQUFFLFFBQW1CLEVBQUUsc0JBQUcsSUFBSSxFQUFDLENBQUM7OztzREFFbkMsVUFBVSxZQUFZLGdCQUFnQixDQUFBO29EQUF0Qyx5QkFBc0M7Z0RBQy9CLGdCQUFnQixHQUFHLE9BQUssaUJBQWlCLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnREFDdkUsa0JBQWtCLEdBQUcsT0FBSyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3NEQUU5RSxVQUFVLFlBQVksaUJBQWlCLENBQUE7b0RBQXZDLHdCQUF1QztnREFDdEMsS0FBQSxNQUFNLENBQUE7dUVBQUUsUUFBbUI7cURBQUssYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7b0RBQW5DLHdCQUFtQztnREFBRyxLQUFBLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTs7b0RBQUcscUJBQU0sa0JBQWtCO3FEQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFO29EQUNWLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQztvREFDaEIsYUFBYSxlQUFBO2lEQUNoQixDQUFDLEVBQUE7O2dEQUp1RixLQUFBLFNBSXZGLENBQUE7OztnREFKTixNQUE2QixLQUl2QixDQUFDOzs7c0RBQ0QsVUFBVSxZQUFZLGVBQWUsQ0FBQTtvREFBckMsd0JBQXFDO2dEQUMzQyxLQUFBLE1BQU0sQ0FBQTt1RUFBRSxRQUFtQjtnREFBSyxxQkFBTSx3QkFBd0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxhQUFhLENBQUMsRUFBQTs7Z0RBQW5ILE1BQTZCLHFCQUFHLFNBQTBGLENBQUEsQ0FBQzs7O3NEQUVySCxVQUFVLFlBQVksa0JBQWtCLENBQUE7b0RBQXhDLHdCQUF3QztnREFDeEMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0RBQzFCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSyxDQUFFLENBQUMsQ0FBRSxHQUFBLENBQUMsQ0FBQztnREFFeEIscUJBQU0sd0JBQXdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQUE7O2dEQUEvRixRQUFRLEdBQUcsU0FBb0Y7Z0RBQy9GLEdBQUcsR0FBUyxFQUFFLENBQUM7b0VBQ1gsR0FBRztvREFDVCxHQUFHLENBQUUsR0FBRyxDQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFFLEdBQUcsQ0FBRSxHQUFBLENBQUMsQ0FBQzs7O29EQUQ1RCxLQUFpQixTQUFBQSxTQUFBLElBQUksQ0FBQTt3REFBWCxHQUFHO2dFQUFILEdBQUc7cURBRVo7Ozs7Ozs7Ozs7Ozs7OztnREFDRCxNQUFNLG1CQUFFLFFBQW1CLEVBQUUsR0FBRyxHQUFHLENBQUM7OztzREFDOUIsVUFBVSxZQUFZLGNBQWMsQ0FBQTtvREFBcEMseUJBQW9DO2dEQUMxQyxLQUFBLE1BQU0sQ0FBQTt1RUFBRSxRQUFtQjtnREFBSyxxQkFBTSxrQkFBa0I7eURBQ25ELFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEVBQUE7O2dEQUQxRSxNQUE2QixHQUFHLFNBQzBDLENBQUE7Ozs7Z0RBRTNFLElBQUcsVUFBVSxZQUFZLGdCQUFnQixFQUFFO29EQUN4QyxVQUFVLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7b0RBQzVGLElBQUcsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLFFBQVEsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO3dEQUNyRCxNQUFNLG1CQUFFLFFBQW1CLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztxREFDbEU7aURBQ0o7Ozs7Ozs7Ozs7Z0NBckM2QixLQUFBQSxTQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUE7Ozs7OzBEQUE3QyxRQUFRLFFBQUEsRUFBRSxVQUFVLFFBQUE7OERBQXBCLFFBQVEsRUFBRSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQXlDaEMsc0JBQU8sTUFBTSxFQUFDOzs7O2FBQ2pCOztvQkE3R0pHLGVBQVU7Ozs7O3dEQUVNRixXQUFNLFNBQUMsVUFBVTt3QkFWekIsd0JBQXdCOzs7MkJBUGpDO01BZ0JrQyxRQUFROzs7Ozs7Ozs7SUErRzFDLGtDQUEyQyxJQUEyQixFQUFFLElBQWUsRUFBRSxLQUFjLEVBQUUsYUFBMEM7Ozs7Ozt3QkFDekksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQyxDQUFDOzZCQUdyRSxZQUFZLENBQUMsTUFBTTs0QkFBbkIsd0JBQW1CO3dCQUNULHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLGFBQWEsZUFBQSxFQUFFLENBQUMsRUFBQTs7d0JBQWxHLE1BQU0sR0FBRyxTQUF5RixDQUFDOzs0QkFHdkcsc0JBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUc7NEJBQ2YsSUFBRyxhQUFhLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dDQUNsQyxPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQzs2QkFDN0I7NEJBRUQsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLG1CQUFDLENBQVEsR0FBRSxHQUFHLEtBQUssR0FBRyxHQUFBLENBQUMsQ0FBQzt5QkFDN0QsQ0FBQyxFQUFBOzs7O0tBQ0w7Ozs7Ozs7O0lBRUQsc0JBQXlCLEdBQWdCLEVBQUUsUUFBc0IsRUFBRSxFQUFjO1FBQzdFLE9BQU8sT0FBTyxHQUFHLEtBQUssUUFBUTtjQUN4QixHQUFHO2NBQ0gsRUFBRSxDQUFDLEtBQUssb0JBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxRQUFRLENBQUMsTUFBTSxvQkFBRSxHQUFHLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBUyxFQUFDLENBQUE7S0FDN0U7Ozs7OztJQUVELGdCQUFnQixLQUFXLEVBQUUsSUFBVztRQUNwQyxJQUFHLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNoQjs7Ozs7O1FDekpEO1FBQW1DSixpQ0FBUzs7Ozs7Ozs7OztRQUNsQyxnQ0FBUTs7Ozs7O1lBQWQsVUFBa0IsTUFBVSxFQUFFLFFBQXNCOzs7Ozs7O2dDQUNWLEtBQUFHLFNBQUEsUUFBUSxDQUFDLFVBQVUsQ0FBQTs7Ozs7MERBQTdDLFFBQVEsUUFBQSxFQUFFLFVBQVUsUUFBQTtnQ0FDNUIscUJBQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLG1CQUFDLFFBQW1CLEVBQUMsRUFBRSxRQUFRLENBQUMsRUFBQTs7Z0NBQWhFLFNBQWdFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdyRSxzQkFBTyxJQUFJLEVBQUM7Ozs7YUFDZjs0QkFWTDtNQUdtQyxTQUFTLEVBUzNDOzs7Ozs7QUNaRDs7O0FBc0JBO1FBQ0ksT0FBTztZQUNILElBQUk7OzswQkFBQyxJQUFhO2dCQUNkLE9BQVUsSUFBSSxPQUFJLENBQUE7YUFDckI7WUFDRCxJQUFJOzs7MEJBQUMsSUFBYTtnQkFDZCxPQUFVLElBQUksT0FBSSxDQUFBO2FBQ3JCO1lBQ0QsS0FBSzs7Ozs7Z0JBQUwsVUFBTSxJQUFhLEVBQUUsSUFBb0MsRUFBRSxFQUFrQjtnQkFDekUsSUFBRyxJQUFJLEtBQUssTUFBTSxFQUFFO29CQUNoQixPQUFVLElBQUksV0FBTSxFQUFJLENBQUM7aUJBQzVCO3FCQUFNLElBQUcsSUFBSSxLQUFLLE1BQU0sRUFBRTs7b0JBQ3ZCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDNUIsT0FBVSxJQUFJLFdBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQU8sQ0FBQztpQkFDL0Q7Z0JBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx1QkFBb0IsSUFBSSxPQUFHLENBQUMsQ0FBQzthQUNoRDtZQUNELEtBQUs7OztnQkFBTCxVQUFNLEVBQVc7O2dCQUNiLElBQU0sS0FBSyxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFFM0MsSUFBRyxDQUFDLEtBQUssRUFBRTtvQkFDUCxNQUFNLElBQUksU0FBUyxDQUFDLGtCQUFlLEVBQUUsT0FBRyxDQUFDLENBQUM7aUJBQzdDO2dCQUVELE9BQU87b0JBQ0gsSUFBSSxxQkFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUM7b0JBQ2YsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsTUFBTSxHQUFHLE1BQU07b0JBQ3hDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7aUJBQ2xFLENBQUM7YUFDTDtTQUNKLENBQUE7S0FDSjs7Ozs7QUFHRCxxQ0FBd0MsT0FBMkI7O1FBQy9ELElBQU0sUUFBUSxHQUFHSSxhQUFRLENBQUMsTUFBTSxDQUFDO1lBQzdCLFNBQVMsRUFBRTtnQkFDUCxFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMxRCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxJQUFJLEVBQUUsQ0FBRSwwQkFBMEIsRUFBRSxVQUFVLEVBQUVBLGFBQVEsQ0FBRSxFQUFFO2dCQUNqRyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7Z0JBQy9ELEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2FBQ2hGO1NBQ0osQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7S0FDakQ7O1FBU0csa0NBQW1FLGlCQUFxQyxFQUN4RCxFQUFjLEVBQy9CLFFBQW1CO1lBRmlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBb0I7WUFDeEQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtZQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXOytCQU5qQixJQUFJLEdBQUcsRUFBaUM7Z0NBQ3ZDLElBQUksR0FBRyxFQUFxQzs0QkFDaEQsSUFBSSxHQUFHLEVBQTRCO1NBSVg7Ozs7UUFFdEQscURBQWtCOzs7WUFBbEI7Z0JBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzthQUNoRDs7Ozs7O1FBRUQsZ0RBQWE7Ozs7O1lBQWIsVUFBaUMsSUFBYTtnQkFDMUMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQzNEO2dCQUVELDBCQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFFO2FBQ3RDOzs7O1FBRUQsbURBQWdCOzs7WUFBaEI7Z0JBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUM1Qjs7Ozs7UUFFUyxtREFBZ0I7Ozs7WUFBMUIsVUFBMkIsSUFBYTtnQkFDcEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7Ozs7OztRQUVELGdEQUFhOzs7OztZQUFiLFVBQWlCLFdBQXFCO2dCQUNsQyxJQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDMUU7Z0JBRUQsMEJBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUU7YUFDOUM7Ozs7OztRQUVTLG1EQUFnQjs7Ozs7WUFBMUIsVUFBOEIsV0FBcUI7O2dCQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUUvQyxPQUFPQSxhQUFRLENBQUMsTUFBTSxDQUFDO29CQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7b0JBQ3JCLFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO3dCQUNyRCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFBRTt3QkFDeEssRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRTt3QkFDeEQsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFFBQVEsR0FBRzt3QkFDekQsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxvQkFBQyxRQUFRLENBQUMsSUFBSSxHQUFFLEdBQUcsSUFBSSxFQUFFO3dCQUN2RyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUUsVUFBVSxFQUFFLHdCQUF3QixDQUFDLEVBQUU7d0JBQ3hFLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO3dCQUNwQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxRQUFRLElBQUksWUFBWSxFQUFFO3dCQUNyRSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxTQUFTLElBQUksYUFBYSxFQUFFO3dCQUN4RSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBRSxFQUFFO3FCQUN0SDtpQkFDSixDQUFDLENBQUMsR0FBRyxDQUF1QixpQkFBaUIsQ0FBQyxDQUFDO2FBQ25EOzs7Ozs7UUFFRCw4Q0FBVzs7Ozs7WUFBWCxVQUFlLFdBQXFCO2dCQUNoQyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BFO2dCQUVELDBCQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFFO2FBQzFDOzs7Ozs7UUFFUyxpREFBYzs7Ozs7WUFBeEIsVUFBNEIsV0FBcUI7Z0JBQzdDLE9BQU8sSUFBSSxRQUFRLENBQUksV0FBVyxDQUFDLENBQUM7YUFDdkM7O29CQXJFSkQsZUFBVTs7Ozs7d0RBT01GLFdBQU0sU0FBQywwQkFBMEI7d0RBQ2pDQSxXQUFNLFNBQUMsVUFBVTt3QkE3RUxHLGFBQVE7Ozt1Q0FBckM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=