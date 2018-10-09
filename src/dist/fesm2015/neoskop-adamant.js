import 'reflect-metadata';
import { resolveForwardRef, InjectionToken, Inject, Injectable, Injector } from '@angular/core';
import { __awaiter, __rest } from 'tslib';
import * as equal from 'fast-deep-equal';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const CLASS_METADATA = new WeakMap();
/** @type {?} */
const PROPERTY_METADATA = new WeakMap();
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
    return /** @type {?} */ ((CLASS_METADATA.get(target))).filter(a => !type || a instanceof type);
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
    return /** @type {?} */ ((/** @type {?} */ ((PROPERTY_METADATA.get(target))).get(property))).filter(a => !type || a instanceof type);
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
    for (const key of /** @type {?} */ (Object.keys(source))) {
        target[key] = /** @type {?} */ (source[key]);
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PropertyMetadata {
    /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    validate(value, key) {
        if (this.required && null == value) {
            throw new Error(`Property "${typeof key === 'symbol' ? Symbol.keyFor(key) : key}" required`);
        }
    }
}
/**
 * @param {?=} options
 * @return {?}
 */
function Property(options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new PropertyMetadata(), Object.assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class RelationMetadata extends PropertyMetadata {
    /**
     * @param {?} type
     * @return {?}
     */
    set type(type /*| ForwardRefFn */) {
        (/** @type {?} */ (this))._type = type;
    }
    /**
     * @return {?}
     */
    get type() {
        return resolveForwardRef((/** @type {?} */ (this))._type);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class BelongsToMetadata extends RelationMetadata {
}
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function BelongsTo(options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new BelongsToMetadata(), Object.assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DesignDocMetadata {
}
/**
 * @template T
 * @param {?} entity
 * @param {?} name
 * @return {?}
 */
function DesignDoc(entity, name) {
    return (target) => {
        pushClassMetadata(target, populate(new DesignDocMetadata(), {
            entity,
            name
        }));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EntityMetadata {
}
/**
 * @param {?} name
 * @param {?=} options
 * @return {?}
 */
function Entity(name, options = {}) {
    return (target) => {
        pushClassMetadata(target, populate(new EntityMetadata(), Object.assign({ name, attachments: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class FilterMetadata {
}
/**
 * @return {?}
 */
function Filter() {
    return (target, property) => {
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
class HasManyMetadata extends RelationMetadata {
}
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
function HasMany(type, options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMetadata(), Object.assign({ type, required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class HasManyMapMetadata extends RelationMetadata {
}
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
function HasManyMap(type, options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMapMetadata(), Object.assign({ type, required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const IdStrategy = {
    Static: 'static',
};
class IdMetadata extends PropertyMetadata {
    constructor() {
        super(...arguments);
        this.required = true;
    }
}
/**
 * @param {?=} options
 * @return {?}
 */
function Id(options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new IdMetadata(), Object.assign({ strategy: IdStrategy.Static, type: Reflect.getMetadata('design:type', target, property) }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class InlineMetadata extends RelationMetadata {
}
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function Inline(options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new InlineMetadata(), Object.assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class InlineEntityMetadata {
}
/**
 * @param {?=} options
 * @return {?}
 */
function InlineEntity(options = {}) {
    return (target) => {
        pushClassMetadata(target, populate(new InlineEntityMetadata(), Object.assign({}, options, { inline: true })));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValidateDocMetadata {
}
/**
 * @return {?}
 */
function ValidateDoc() {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new ValidateDocMetadata(), {}));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ViewMetadata {
}
/**
 * @return {?}
 */
function View() {
    return (target, property) => {
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
class Hydrator {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Validator {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
const ADAMANT_CONNECTION = new InjectionToken('ADAMANT_CONNECTION');
/** @type {?} */
const ADAMANT_ENTITY_CLASS = new InjectionToken('ADAMANT_ENTITY_CLASS');
/** @type {?} */
const ADAMANT_ENTITY_METADATA = new InjectionToken('ADAMANT_ENTITY_METADATA');
/** @type {?} */
const ADAMANT_EQUAL_CHECKER = new InjectionToken('ADAMANT_EQUAL_CHECKER');
/** @type {?} */
const ADAMANT_CONNECTION_FACTORY = new InjectionToken('ADAMANT_CONNECTION_FACTORY');
/** @type {?} */
const ADAMANT_ID = new InjectionToken('ADAMANT_ID');

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
class Metadata {
    /**
     * @param {?} entity
     */
    constructor(entity) {
        this.entity = entity;
        this.inline = false;
        this.properties = new Map();
        this.parse();
        this.assert();
    }
    /**
     * @return {?}
     */
    parse() {
        /** @type {?} */
        const classMetadata = getClassMetadata(this.entity);
        /** @type {?} */
        const propertyMetadata = getAllPropertyMetadata(this.entity);
        for (const annotation of classMetadata) {
            if (annotation instanceof EntityMetadata || annotation instanceof InlineEntityMetadata) {
                Object.assign(this, annotation);
            }
        }
        for (const [property, annotations] of propertyMetadata) {
            for (const annotation of annotations) {
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
    }
    /**
     * @return {?}
     */
    assert() {
        for (const key of (/** @type {?} */ ((this.inline ? [] : ['id', 'idStrategy', 'name', 'attachments'])))) {
            if (null == this[key]) {
                throw new Error(`Missing metadata '${key}' for entity "${this.entity.name}"`);
            }
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {string} */
const BulkOperation = {
    Create: 'create',
    Update: 'update',
    Delete: 'delete',
};
/**
 * @template T
 */
class Bulk {
    /**
     * @param {?} db
     * @param {?} entityClass
     * @param {?} metadata
     * @param {?} hydrator
     * @param {?} validator
     */
    constructor(db, entityClass, metadata, hydrator, validator) {
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
    bulk(entities, operation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (0 === entities.length) {
                return entities;
            }
            /** @type {?} */
            const docs = yield Promise.all(entities.map((entity) => __awaiter(this, void 0, void 0, function* () {
                if (!(entity instanceof this.entityClass)) {
                    throw new Error(`Entity "${entity}" is not instanceof ${this.entityClass.name}`);
                }
                yield this.validator.validate(entity, this.metadata);
                /** @type {?} */
                const doc = this.hydrator.dehydrate(entity, this.metadata, { includeRev: operation === BulkOperation.Update || operation === BulkOperation.Delete });
                if (operation === BulkOperation.Delete) {
                    doc._deleted = true;
                }
                return doc;
            })));
            /** @type {?} */
            const result = yield this.db.bulkDocs(docs);
            /** @type {?} */
            const errors = result.filter(r => Object.prototype.hasOwnProperty.call(r, 'error'));
            if (0 < errors.length) {
                throw errors;
            }
            result.forEach((res, index) => {
                if (operation === BulkOperation.Delete) {
                    markDeleted(entities[index]);
                }
                markIdRev(entities[index], res);
            });
            return entities;
        });
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    create(entities) {
        return this.bulk(entities, BulkOperation.Create);
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    update(entities) {
        return this.bulk(entities, BulkOperation.Update);
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    delete(entities) {
        return this.bulk(entities, BulkOperation.Delete);
    }
}
/** @nocollapse */
Bulk.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_CLASS,] }] },
    { type: Metadata, decorators: [{ type: Inject, args: [ADAMANT_ENTITY_METADATA,] }] },
    { type: Hydrator },
    { type: Validator }
];

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
    let resolve;
    /** @type {?} */
    let reject;
    /** @type {?} */
    let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return Object.assign(promise, { resolve, reject });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ReadQueryBatcher {
    /**
     * @param {?} db
     */
    constructor(db) {
        this.db = db;
        this.queue = [];
    }
    /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    read(keys) {
        this.queue.push(...keys);
        return this.schedule().then(docs => {
            return keys
                .map(key => docs.find(doc => doc._id === key))
                .filter(Boolean)
                .map(doc => JSON.parse(JSON.stringify(doc)));
        });
    }
    /**
     * @template T
     * @return {?}
     */
    schedule() {
        if (!this.deffered) {
            setImmediate(() => {
                this.execute();
            });
            this.deffered = defer();
            this.deffered.then(() => {
                delete this.deffered;
            }, () => {
                delete this.deffered;
            });
        }
        return this.deffered;
    }
    /**
     * @return {?}
     */
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keys = this.queue.filter((v, i, a) => i === a.indexOf(v));
            this.queue = [];
            try {
                const { rows } = yield this.db.allDocs({
                    include_docs: true,
                    keys
                }); /** @type {?} */
                ((this.deffered)).resolve(rows.map(r => r.doc).filter(Boolean));
            }
            catch (e) {
                /** @type {?} */ ((this.deffered)).reject(e);
            }
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class QueryBuilder {
    /**
     * @param {?} repository
     * @param {?} head
     * @param {?} tail
     */
    constructor(repository, head, tail) {
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
    selector(fieldOrSelector, condition) {
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
            for (let key in fieldOrSelector) {
                this.selector(key, fieldOrSelector[key]);
            }
        }
        return this;
    }
    /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    sort(propertyOrSort, direction) {
        if (typeof propertyOrSort === 'string' && direction) {
            this._sort.push({ [propertyOrSort]: direction });
        }
        else {
            this._sort.push(propertyOrSort);
        }
        return this;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    limit(limit) {
        this._limit = limit;
        return this;
    }
    /**
     * @param {?} skip
     * @return {?}
     */
    skip(skip) {
        this._skip = skip;
        return this;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    resolve(options) {
        return this.repository.executeQuery(this, options);
    }
    /**
     * @return {?}
     */
    toFindRequest() {
        /** @type {?} */
        const req = {
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
    }
}

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
class AdamantRepository {
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
    constructor(db, entityClass, metadata, equal$$1, id, bulk, hydrator, validator) {
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
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
            const _a = /** @type {?} */ (document), d1 = __rest(_a, ["_id", "_rev"]);
            const _b = /** @type {?} */ (existingDoc), d2 = __rest(_b, ["_id", "_rev"]);
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
            return this.hydrator.hydrate(Object.create(this.entityClass.prototype), yield this._readRaw(id), this.metadata, options);
        });
    }
    /**
     * \@internal
     * @param {?} id
     * @return {?}
     */
    _readRaw(id) {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all((yield this._readAllRaw(opt))
                .map((doc) => __awaiter(this, void 0, void 0, function* () { return this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options); })));
        });
    }
    /**
     * \@internal
     * @param {?} opt
     * @return {?}
     */
    _readAllRaw(opt) {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
            return yield Promise.all((yield this.db.find(query.toFindRequest())).docs
                .map((doc) => __awaiter(this, void 0, void 0, function* () { return this.hydrator.hydrate(Object.create(this.entityClass.prototype), doc, this.metadata, options); })));
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
        return __awaiter(this, void 0, void 0, function* () {
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
                const _a = /** @type {?} */ (document), d1 = __rest(_a, ["_id", "_rev"]);
                const _b = /** @type {?} */ (existingDoc), d2 = __rest(_b, ["_id", "_rev"]);
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
        var { depth, circularCache } = _a, options = __rest(_a, ["depth", "circularCache"]);
        return __awaiter(this, void 0, void 0, function* () {
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
                .map((doc) => __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HydratorImpl extends Hydrator {
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
        return __awaiter(this, void 0, void 0, function* () {
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
/**
 * @template T
 * @param {?} repo
 * @param {?} keys
 * @param {?} depth
 * @param {?} circularCache
 * @return {?}
 */
function readAllWithCircularCache(repo, keys, depth, circularCache) {
    return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ValidatorImpl extends Validator {
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    validate(entity, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const [property, annotation] of metadata.properties) {
                yield annotation.validate(entity[/** @type {?} */ (property)], property);
            }
            return true;
        });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function adamantIdFactory() {
    return {
        /**
         * @param {?} name
         * @return {?}
         */
        head(name) {
            return `${name}_0`;
        },
        /**
         * @param {?} name
         * @return {?}
         */
        tail(name) {
            return `${name}_9`;
        },
        /**
         * @param {?} name
         * @param {?} type
         * @param {?} id
         * @return {?}
         */
        build(name, type, id) {
            if (type === String) {
                return `${name}_2_${id}`;
            }
            else if (type === Number) {
                /** @type {?} */
                const idStr = id.toString();
                return `${name}_1_${'0'.repeat(16 - idStr.length)}${idStr}`;
            }
            throw new Error(`Invalid id type "${type}"`);
        },
        /**
         * @param {?} id
         * @return {?}
         */
        parse(id) {
            /** @type {?} */
            const match = /^(.*)_(1|2)_(.*)$/.exec(id);
            if (!match) {
                throw new TypeError(`Invalid id "${id}"`);
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
    const injector = Injector.create({
        providers: [
            { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
            { provide: AdamantConnectionManager, deps: [ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Injector] },
            { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
            { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] }
        ]
    });
    return injector.get(AdamantConnectionManager);
}
class AdamantConnectionManager {
    /**
     * @param {?} connectionFactory
     * @param {?} id
     * @param {?} injector
     */
    constructor(connectionFactory, id, injector) {
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
    getOpenConnections() {
        return Array.from(this.connections.values());
    }
    /**
     * @template T
     * @param {?} name
     * @return {?}
     */
    getConnection(name) {
        if (!this.connections.has(name)) {
            this.connections.set(name, this.createConnection(name));
        }
        return /** @type {?} */ ((this.connections.get(name)));
    }
    /**
     * @return {?}
     */
    clearConnections() {
        this.connections.clear();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    createConnection(name) {
        return this.connectionFactory(name);
    }
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    getRepository(entityClass) {
        if (!this.repositories.has(entityClass)) {
            this.repositories.set(entityClass, this.createRepository(entityClass));
        }
        return /** @type {?} */ ((this.repositories.get(entityClass)));
    }
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    createRepository(entityClass) {
        /** @type {?} */
        const metadata = this.getMetadata(entityClass);
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
    }
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    getMetadata(entityClass) {
        if (!this.metadata.has(entityClass)) {
            this.metadata.set(entityClass, this.createMetadata(entityClass));
        }
        return /** @type {?} */ ((this.metadata.get(entityClass)));
    }
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    createMetadata(entityClass) {
        return new Metadata(entityClass);
    }
}
AdamantConnectionManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AdamantConnectionManager.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION_FACTORY,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BelongsTo, BelongsToMetadata, DesignDoc, DesignDocMetadata, Entity, EntityMetadata, Filter, FilterMetadata, HasMany, HasManyMetadata, HasManyMap, HasManyMapMetadata, Id, IdStrategy, IdMetadata, Inline, InlineMetadata, InlineEntity, InlineEntityMetadata, Property, PropertyMetadata, RelationMetadata, ValidateDoc, ValidateDocMetadata, View, ViewMetadata, BulkOperation, Bulk, adamantIdFactory, createAdamantConnection, AdamantConnectionManager, Hydrator, HydratorImpl, ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Metadata, QueryBuilder, equalCheckerFactory, AdamantRepository, Validator, ValidatorImpl };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmVvc2tvcC1hZGFtYW50LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3V0aWxzL21ldGFkYXRhLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL3Byb3BlcnR5LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL3JlbGF0aW9uLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2JlbG9uZ3MtdG8udHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvZGVzaWduLWRvYy50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9lbnRpdHkudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvZmlsdGVyLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2hhcy1tYW55LnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Fubm90YXRpb25zL2hhcy1tYW55LW1hcC50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9pZC50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy9pbmxpbmUudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvaW5saW5lLWVudGl0eS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9hbm5vdGF0aW9ucy92YWxpZGF0ZS1kb2MudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvYW5ub3RhdGlvbnMvdmlldy50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9oeWRyYXRvci50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC92YWxpZGF0b3IudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvaW5qZWN0b3ItdG9rZW5zLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3V0aWxzL21hcmtzLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L21ldGFkYXRhLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2J1bGsudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvdXRpbHMvZGVmZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvcmVhZC1xdWVyeS1iYXRjaGVyLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3F1ZXJ5LWJ1aWxkZXIudHMiLCJuZzovL0BuZW9za29wL2FkYW1hbnQvcmVwb3NpdG9yeS50cyIsIm5nOi8vQG5lb3Nrb3AvYWRhbWFudC9oeWRyYXRvci1pbXBsLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L3ZhbGlkYXRvci1pbXBsLnRzIiwibmc6Ly9AbmVvc2tvcC9hZGFtYW50L2Nvbm5lY3Rpb24tbWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBDdG9yPFQ+ID0gRnVuY3Rpb24gfCB7IG5ldyguLi5hcmdzIDogYW55W10pIDogVDsgcHJvdG90eXBlOiBUIH07XG5cbmV4cG9ydCBjb25zdCBDTEFTU19NRVRBREFUQSA9IG5ldyBXZWFrTWFwPEN0b3I8YW55PiwgYW55W10+KCk7XG5leHBvcnQgY29uc3QgUFJPUEVSVFlfTUVUQURBVEEgPSBuZXcgV2Vha01hcDxDdG9yPGFueT4sIE1hcDxzdHJpbmd8c3ltYm9sLCBhbnlbXT4+KCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc01ldGFkYXRhPFQgPSBhbnk+KHRhcmdldCA6IEN0b3I8YW55PiwgdHlwZT8gOiBDdG9yPFQ+KSA6IFRbXSB7XG4gICAgaWYoIUNMQVNTX01FVEFEQVRBLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIENMQVNTX01FVEFEQVRBLmdldCh0YXJnZXQpIS5maWx0ZXIoYSA9PiAhdHlwZSB8fCBhIGluc3RhbmNlb2YgdHlwZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoQ2xhc3NNZXRhZGF0YSh0YXJnZXQgOiBDdG9yPGFueT4sIG1ldGFkYXRhIDogYW55KSB7XG4gICAgaWYoIUNMQVNTX01FVEFEQVRBLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgIENMQVNTX01FVEFEQVRBLnNldCh0YXJnZXQsIFtdKTtcbiAgICB9XG4gICAgQ0xBU1NfTUVUQURBVEEuZ2V0KHRhcmdldCkhLnB1c2gobWV0YWRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlNZXRhZGF0YTxUID0gYW55Pih0YXJnZXQgOiBhbnksIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wsIHR5cGU/IDogQ3Rvcjxhbnk+KSA6IFRbXSB7XG4gICAgaWYoIVBST1BFUlRZX01FVEFEQVRBLmhhcyh0YXJnZXQpIHx8ICFQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuaGFzKHByb3BlcnR5KSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBQUk9QRVJUWV9NRVRBREFUQS5nZXQodGFyZ2V0KSEuZ2V0KHByb3BlcnR5KSEuZmlsdGVyKGEgPT4gIXR5cGUgfHwgYSBpbnN0YW5jZW9mIHR5cGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsUHJvcGVydHlNZXRhZGF0YTxUID0gYW55Pih0YXJnZXQgOiBhbnkpIDogTWFwPHN0cmluZ3xzeW1ib2wsIFRbXT4ge1xuICAgIGlmKCFQUk9QRVJUWV9NRVRBREFUQS5oYXModGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0IDogYW55LCBwcm9wZXJ0eSA6IHN0cmluZyB8IHN5bWJvbCwgbWV0YWRhdGEgOiBhbnkpIHtcbiAgICBpZighUFJPUEVSVFlfTUVUQURBVEEuaGFzKHRhcmdldCkpIHtcbiAgICAgICAgUFJPUEVSVFlfTUVUQURBVEEuc2V0KHRhcmdldCwgbmV3IE1hcCgpKTtcbiAgICB9XG4gICAgXG4gICAgaWYoIVBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpIS5oYXMocHJvcGVydHkpKSB7XG4gICAgICAgIFBST1BFUlRZX01FVEFEQVRBLmdldCh0YXJnZXQpIS5zZXQocHJvcGVydHksIFtdKTtcbiAgICB9XG4gICAgXG4gICAgUFJPUEVSVFlfTUVUQURBVEEuZ2V0KHRhcmdldCkhLmdldChwcm9wZXJ0eSkhLnB1c2gobWV0YWRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGU8VD4odGFyZ2V0IDogVCwgc291cmNlIDogUGFydGlhbDxUPikgOiBUIHtcbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkgYXMgKGtleW9mIFQpW10pIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSBhcyBUW2tleW9mIFRdO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBUeXBlID0gdHlwZW9mIEJvb2xlYW4gfCB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciB8IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgRGF0ZSB8IEN0b3I8YW55PjtcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5TWV0YWRhdGEge1xuICAgIHR5cGUhOiBUeXBlO1xuICAgIHJlcXVpcmVkITogYm9vbGVhbjtcbiAgICBkZWZhdWx0PzogYW55O1xuICAgIFxuICAgIHZhbGlkYXRlKHZhbHVlIDogYW55LCBrZXkgOiBzdHJpbmcgfCBzeW1ib2wpIHtcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiBudWxsID09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IFwiJHt0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IFN5bWJvbC5rZXlGb3Ioa2V5KSA6IGtleX1cIiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydHkob3B0aW9uczogeyB0eXBlPzogVHlwZSwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogYW55IH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgUHJvcGVydHlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZXNvbHZlRm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ3RvciB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuL3Byb3BlcnR5JztcblxuZXhwb3J0IGNsYXNzIFJlbGF0aW9uTWV0YWRhdGE8VD4gZXh0ZW5kcyBQcm9wZXJ0eU1ldGFkYXRhIHtcbiAgICByZXF1aXJlZCE6IGJvb2xlYW47XG4gICAgZGVmYXVsdD86IFQ7XG4gICAgLy8gcHJpdmF0ZSBfZW50aXR5ISA6IEZvcndhcmRSZWZGbiB8IEN0b3I8VD47XG4gICAgXG4gICAgc2V0IHR5cGUodHlwZSA6IEN0b3I8VD4gLyp8IEZvcndhcmRSZWZGbiAqLykge1xuICAgICAgICAodGhpcyBhcyBhbnkpLl90eXBlID0gdHlwZTtcbiAgICB9XG4gICAgZ2V0IHR5cGUoKSA6IEN0b3I8VD4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUZvcndhcmRSZWYoKHRoaXMgYXMgYW55KS5fdHlwZSk7XG4gICAgfVxuICAgIFxufVxuIiwiaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgRm9yd2FyZFJlZkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG9NZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEJlbG9uZ3NUbzxUPihvcHRpb25zOiB7IHR5cGU/OiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IEJlbG9uZ3NUb01ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGU6IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eSksXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuZXhwb3J0IGNsYXNzIERlc2lnbkRvY01ldGFkYXRhPFQ+IHtcbiAgICBlbnRpdHkhOiBDdG9yPFQ+O1xuICAgIG5hbWUhOiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBleHBvcnQgY29uc3QgZW1pdCA6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlc2lnbkRvYzxUPihlbnRpdHkgOiBDdG9yPFQ+LCBuYW1lOiBzdHJpbmcpIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRGVzaWduRG9jTWV0YWRhdGE8VD4oKSwge1xuICAgICAgICAgICAgZW50aXR5LFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0b3IgfSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5TWV0YWRhdGEge1xuICAgIG5hbWUhOiBzdHJpbmc7XG4gICAgYXR0YWNobWVudHMhOiBib29sZWFuO1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50aXR5KG5hbWUgOiBzdHJpbmcsIG9wdGlvbnM6IHtcbiAgICBhdHRhY2htZW50cz86IGJvb2xlYW47XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59ID0ge30pIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRW50aXR5TWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGh5ZHJhdG9yOiBIeWRyYXRvckltcGwsXG4gICAgICAgICAgICAvLyB2YWxpZGF0b3I6IFZhbGlkYXRvckltcGwsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlck1ldGFkYXRhIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXIoKSA6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIHBvcHVsYXRlKG5ldyBGaWx0ZXJNZXRhZGF0YSgpLCB7XG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueU1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzTWFueTxUPih0eXBlOiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgb3B0aW9uczogeyByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSGFzTWFueU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueU1hcE1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzTWFueU1hcDxUPih0eXBlOiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgb3B0aW9uczogeyByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSGFzTWFueU1hcE1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhLCBUeXBlIH0gZnJvbSAnLi9wcm9wZXJ0eSc7XG5cbmV4cG9ydCBlbnVtIElkU3RyYXRlZ3kge1xuICAgIFN0YXRpYyA9ICdzdGF0aWMnLFxuICAgIC8vIFV1aWQgPSAndXVpZCcsXG4gICAgLy8gSW5jcmVtZW50ID0gJ2luY3JlbWVudCdcbn1cblxuZXhwb3J0IGNsYXNzIElkTWV0YWRhdGEgZXh0ZW5kcyBQcm9wZXJ0eU1ldGFkYXRhIHtcbiAgICBzdHJhdGVneSE6IElkU3RyYXRlZ3k7XG4gICAgcmVhZG9ubHkgcmVxdWlyZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSWQob3B0aW9uczogeyBzdHJhdGVneT86IElkU3RyYXRlZ3ksIHR5cGU/OiBUeXBlIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSWRNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICBzdHJhdGVneTogSWRTdHJhdGVneS5TdGF0aWMsXG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9yZWxhdGlvbic7XG5pbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBGb3J3YXJkUmVmRm4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElubGluZU1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSW5saW5lPFQ+KG9wdGlvbnM6IHsgdHlwZT86IEN0b3I8VD58Rm9yd2FyZFJlZkZuLCByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSW5saW5lTWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0b3IgfSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgSW5saW5lRW50aXR5TWV0YWRhdGEge1xuICAgIGlubGluZSE6IHRydWU7XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJbmxpbmVFbnRpdHkob3B0aW9uczoge1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufSA9IHt9KSA6IENsYXNzRGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldCA6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHB1c2hDbGFzc01ldGFkYXRhKHRhcmdldCwgcG9wdWxhdGUobmV3IElubGluZUVudGl0eU1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIC8vIGh5ZHJhdG9yOiBIeWRyYXRvckltcGwsXG4gICAgICAgICAgICAvLyB2YWxpZGF0b3I6IFZhbGlkYXRvckltcGwsXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICAgICAgaW5saW5lOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlRG9jTWV0YWRhdGEge31cblxuZXhwb3J0IGZ1bmN0aW9uIFZhbGlkYXRlRG9jKCkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgVmFsaWRhdGVEb2NNZXRhZGF0YSgpLCB7XG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuXG5leHBvcnQgY2xhc3MgVmlld01ldGFkYXRhIHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBWaWV3KCkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgVmlld01ldGFkYXRhKCksIHtcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBIeWRyYXRlT3B0aW9ucyB7XG4gICAgZGVwdGg/IDogbnVtYmVyO1xuICAgIGNpcmN1bGFyQ2FjaGU/IDogeyBbIGtleSA6IHN0cmluZyBdIDogYW55IH07XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIeWRyYXRvciB7XG4gICAgYWJzdHJhY3QgaHlkcmF0ZTxUPihlbnRpdHkgOiBULCBkYXRhIDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUG91Y2hEQi5Db3JlLkdldE1ldGEsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIDogUHJvbWlzZTxUPjtcbiAgICBcbiAgICBhYnN0cmFjdCBkZWh5ZHJhdGU8VD4oZW50aXR5IDogVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgb3B0aW9ucz8gOiB7IGluY2x1ZGVSZXY/IDogYm9vbGVhbiB9KSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPjtcbn1cblxuXG4iLCJpbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJy4vbWV0YWRhdGEnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVmFsaWRhdG9yIHtcbiAgICBhYnN0cmFjdCB2YWxpZGF0ZTxUPihlbnRpdHkgOiBULCBfbWV0YWRhdGEgOiBNZXRhZGF0YTxUPikgOiBQcm9taXNlPHRydWU+O1xufVxuIiwiaW1wb3J0IHsgQ3RvciB9IGZyb20gJy4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBFcXVhbENoZWNrZXIge1xuICAgIChhIDogYW55LCBiIDogYW55KTogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3Rpb25GYWN0b3J5PFQgZXh0ZW5kcyB7fSA9IHt9PiB7XG4gICAgKG5hbWUgOiBzdHJpbmcpOiBQb3VjaERCLkRhdGFiYXNlPFQ+XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRhbWFudElkIHtcbiAgICBoZWFkKG5hbWUgOiBzdHJpbmcpIDogc3RyaW5nO1xuICAgIHRhaWwobmFtZSA6IHN0cmluZykgOiBzdHJpbmc7XG4gICAgYnVpbGQobmFtZSA6IHN0cmluZywgdHlwZSA6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZ3xudW1iZXIpIDogc3RyaW5nO1xuICAgIHBhcnNlKGlkIDogc3RyaW5nKSA6IHsgbmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciwgaWQgOiBzdHJpbmcgfCBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGNvbnN0IEFEQU1BTlRfQ09OTkVDVElPTiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxQb3VjaERCLkRhdGFiYXNlPignQURBTUFOVF9DT05ORUNUSU9OJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9FTlRJVFlfQ0xBU1MgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q3Rvcjxhbnk+PignQURBTUFOVF9FTlRJVFlfQ0xBU1MnKTtcbmV4cG9ydCBjb25zdCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNZXRhZGF0YTxhbnk+PignQURBTUFOVF9FTlRJVFlfTUVUQURBVEEnKTtcbmV4cG9ydCBjb25zdCBBREFNQU5UX0VRVUFMX0NIRUNLRVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48RXF1YWxDaGVja2VyPignQURBTUFOVF9FUVVBTF9DSEVDS0VSJyk7XG5leHBvcnQgY29uc3QgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlkgPSBuZXcgSW5qZWN0aW9uVG9rZW48Q29ubmVjdGlvbkZhY3Rvcnk+KCdBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWScpO1xuZXhwb3J0IGNvbnN0IEFEQU1BTlRfSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48QWRhbWFudElkPignQURBTUFOVF9JRCcpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG1hcmtEZWxldGVkPFQgZXh0ZW5kcyB7fT4oZW50aXR5IDogVCkgOiBUIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZW50aXR5LCAnX2RlbGV0ZWQnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRydWUgfSk7XG4gICAgXG4gICAgcmV0dXJuIGVudGl0eTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJZFJldjxUIGV4dGVuZHMge30+KGVudGl0eSA6IFQsIHJlcyA6IHsgaWQ/IDogc3RyaW5nLCByZXY/IDogc3RyaW5nIH0pIDogVCB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVudGl0eSwgJ19pZCcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogcmVzLmlkIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksICdfcmV2JywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiByZXMucmV2IH0pO1xuICAgIFxuICAgIHJldHVybiBlbnRpdHk7XG59XG4iLCJpbXBvcnQgeyBDdG9yLCBnZXRBbGxQcm9wZXJ0eU1ldGFkYXRhLCBnZXRDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBJZE1ldGFkYXRhLCBJZFN0cmF0ZWd5IH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pZCc7XG5pbXBvcnQgeyBQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9wcm9wZXJ0eSc7XG5pbXBvcnQgeyBFbnRpdHlNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZW50aXR5JztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBCZWxvbmdzVG9NZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvYmVsb25ncy10byc7XG5pbXBvcnQgeyBIYXNNYW55TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2hhcy1tYW55JztcbmltcG9ydCB7IEhhc01hbnlNYXBNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnktbWFwJztcbmltcG9ydCB7IElubGluZU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pbmxpbmUnO1xuaW1wb3J0IHsgSW5saW5lRW50aXR5TWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZS1lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgTWV0YWRhdGE8VD4ge1xuICAgIHJlYWRvbmx5IGlubGluZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYXR0YWNobWVudHM/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGh5ZHJhdG9yITogQ3RvcjxIeWRyYXRvcj47XG4gICAgcmVhZG9ubHkgdmFsaWRhdG9yITogQ3RvcjxWYWxpZGF0b3I+O1xuICAgIFxuICAgIHJlYWRvbmx5IGlkISA6IGtleW9mIFQ7XG4gICAgcmVhZG9ubHkgaWRUeXBlITogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXI7XG4gICAgcmVhZG9ubHkgaWRTdHJhdGVneSEgOiBJZFN0cmF0ZWd5O1xuICAgIFxuICAgIHJlYWRvbmx5IHByb3BlcnRpZXMgPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgUHJvcGVydHlNZXRhZGF0YXxJZE1ldGFkYXRhfEJlbG9uZ3NUb01ldGFkYXRhPGFueT58SGFzTWFueU1ldGFkYXRhPGFueT58SGFzTWFueU1hcE1ldGFkYXRhPGFueT58SW5saW5lTWV0YWRhdGE8YW55Pj4oKTtcbiAgICAvLyByZWFkb25seSBiZWxvbmdzVG8gPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgQmVsb25nc1RvTWV0YWRhdGE8YW55Pj4oKTtcbiAgICAvLyByZWFkb25seSBoYXNNYW55ID0gbmV3IE1hcDxzdHJpbmcgfCBzeW1ib2wsIEhhc01hbnlNZXRhZGF0YTxhbnk+PigpO1xuICAgIC8vIHJlYWRvbmx5IGhhc01hbnlNYXAgPSBuZXcgTWFwPHN0cmluZyB8IHN5bWJvbCwgSGFzTWFueU1hcE1ldGFkYXRhPGFueT4+KCk7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eSA6IEN0b3I8VD4pIHtcbiAgICAgICAgdGhpcy5wYXJzZSgpO1xuICAgICAgICB0aGlzLmFzc2VydCgpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgcGFyc2UoKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzTWV0YWRhdGEgPSBnZXRDbGFzc01ldGFkYXRhPEVudGl0eU1ldGFkYXRhIHwgSW5saW5lRW50aXR5TWV0YWRhdGE+KHRoaXMuZW50aXR5KTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlNZXRhZGF0YSA9IGdldEFsbFByb3BlcnR5TWV0YWRhdGE8SWRNZXRhZGF0YT4odGhpcy5lbnRpdHkpO1xuICAgICAgICBcbiAgICAgICAgZm9yKGNvbnN0IGFubm90YXRpb24gb2YgY2xhc3NNZXRhZGF0YSkge1xuICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEVudGl0eU1ldGFkYXRhIHx8IGFubm90YXRpb24gaW5zdGFuY2VvZiBJbmxpbmVFbnRpdHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9ucyBdIG9mIHByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgIGZvcihjb25zdCBhbm5vdGF0aW9uIG9mIGFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElkTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5pZCA9IHByb3BlcnR5O1xuICAgICAgICAgICAgICAgICAgICAodGhpcyBhcyBhbnkpLmlkVHlwZSA9IGFubm90YXRpb24udHlwZTtcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMgYXMgYW55KS5pZFN0cmF0ZWd5ID0gYW5ub3RhdGlvbi5zdHJhdGVneTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYmVsb25nc1RvLnNldChwcm9wZXJ0eSwgYW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmhhc01hbnkuc2V0KHByb3BlcnR5LCBhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1hcE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaGFzTWFueU1hcC5zZXQocHJvcGVydHksIGFubm90YXRpb24pO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BlcnRpZXMuc2V0KHByb3BlcnR5LCBhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGFzc2VydCgpIHtcbiAgICAgICAgZm9yKGNvbnN0IGtleSBvZiAoKHRoaXMuaW5saW5lID8gW10gOiBbICdpZCcsICdpZFN0cmF0ZWd5JywgJ25hbWUnLCAnYXR0YWNobWVudHMnIF0pIGFzIChrZXlvZiBNZXRhZGF0YTxUPilbXSkpIHtcbiAgICAgICAgICAgIGlmKG51bGwgPT0gdGhpc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIG1ldGFkYXRhICcke2tleX0nIGZvciBlbnRpdHkgXCIke3RoaXMuZW50aXR5Lm5hbWV9XCJgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSB9IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcbmltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFya0RlbGV0ZWQsIG1hcmtJZFJldiB9IGZyb20gJy4vdXRpbHMvbWFya3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGVudW0gQnVsa09wZXJhdGlvbiB7XG4gICAgQ3JlYXRlID0gJ2NyZWF0ZScsXG4gICAgVXBkYXRlID0gJ3VwZGF0ZScsXG4gICAgRGVsZXRlID0gJ2RlbGV0ZSdcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGs8VD4ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge31cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgYnVsayhlbnRpdGllcyA6IFRbXSwgb3BlcmF0aW9uIDogQnVsa09wZXJhdGlvbikgOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBpZigwID09PSBlbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudGl0aWVzLm1hcChhc3luYyBlbnRpdHkgPT4ge1xuICAgICAgICAgICAgaWYoIShlbnRpdHkgaW5zdGFuY2VvZiB0aGlzLmVudGl0eUNsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW50aXR5IFwiJHtlbnRpdHl9XCIgaXMgbm90IGluc3RhbmNlb2YgJHt0aGlzLmVudGl0eUNsYXNzLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhICYgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5VcGRhdGUgfHwgb3BlcmF0aW9uID09PSBCdWxrT3BlcmF0aW9uLkRlbGV0ZSB9KTtcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5EZWxldGUpIHtcbiAgICAgICAgICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5idWxrRG9jcyhkb2NzKTtcbiAgICAgICAgY29uc3QgZXJyb3JzIDogUG91Y2hEQi5Db3JlLkVycm9yW10gPSByZXN1bHQuZmlsdGVyKHIgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsICdlcnJvcicpKTtcbiAgICAgICAgXG4gICAgICAgIGlmKDAgPCBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgbWFya0RlbGV0ZWQoZW50aXRpZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtJZFJldihlbnRpdGllc1tpbmRleF0sIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5DcmVhdGUpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5VcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5EZWxldGUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIERlZmZlcmVkPFQ+ID0gUHJvbWlzZTxUPiAmIHsgcmVzb2x2ZSh2IDogVCkgOiB2b2lkLCByZWplY3QoZSA6IGFueSkgOiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIDogRGVmZmVyZWQ8VD4ge1xuICAgIGxldCByZXNvbHZlIDogYW55ICwgcmVqZWN0IDogYW55LCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbn1cbiIsImltcG9ydCB7IGRlZmVyLCBEZWZmZXJlZCB9IGZyb20gJy4vdXRpbHMvZGVmZXInO1xuXG5leHBvcnQgY2xhc3MgUmVhZFF1ZXJ5QmF0Y2hlciB7XG4gICAgcXVldWUgOiBzdHJpbmdbXSA9IFtdO1xuICAgIGRlZmZlcmVkPyA6IERlZmZlcmVkPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxhbnk+W10+O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWFkb25seSBkYiA6IFBvdWNoREIuRGF0YWJhc2UpIHt9XG4gICAgXG4gICAgcmVhZDxUPihrZXlzIDogc3RyaW5nW10pIDogUHJvbWlzZTxQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD5bXT4ge1xuICAgICAgICB0aGlzLnF1ZXVlLnB1c2goLi4ua2V5cyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZTxUPigpLnRoZW4oZG9jcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ga2V5c1xuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+IGRvY3MuZmluZChkb2MgPT4gZG9jLl9pZCA9PT0ga2V5KSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgICAgICAgLm1hcChkb2MgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkb2MpKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgc2NoZWR1bGU8VD4oKSA6IERlZmZlcmVkPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIGlmKCF0aGlzLmRlZmZlcmVkKSB7XG4gICAgICAgICAgICBzZXRJbW1lZGlhdGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkID0gZGVmZXIoKTtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZGVmZmVyZWRcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kZWZmZXJlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmRlZmZlcmVkO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgZXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMucXVldWUuZmlsdGVyKCh2LCBpLCBhKSA9PiBpID09PSBhLmluZGV4T2YodikpO1xuICAgICAgICB0aGlzLnF1ZXVlID0gW107XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyByb3dzIH0gPSBhd2FpdCB0aGlzLmRiLmFsbERvY3Moe1xuICAgICAgICAgICAgICAgIGluY2x1ZGVfZG9jczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBrZXlzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCEucmVzb2x2ZShyb3dzLm1hcChyID0+IHIuZG9jKS5maWx0ZXIoQm9vbGVhbikpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQhLnJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEFkYW1hbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEh5ZHJhdGVPcHRpb25zIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUJ1aWxkZXI8VD4ge1xuICAgIFxuICAgIHByb3RlY3RlZCBfc2VsZWN0b3IgOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgPSB7fTtcbiAgICBwcm90ZWN0ZWQgX3NvcnQgOiBBcnJheTxzdHJpbmd8e1twcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYyd9PiA9IFtdO1xuICAgIHByb3RlY3RlZCBfbGltaXQ/IDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfc2tpcD8gOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHJlcG9zaXRvcnkgOiBBZGFtYW50UmVwb3NpdG9yeTxUPiwgaGVhZCA6IHN0cmluZywgdGFpbCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zZWxlY3Rvci5faWQgPSB7XG4gICAgICAgICAgICAkZ3Q6IGhlYWQsXG4gICAgICAgICAgICAkbHQ6IHRhaWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZWxlY3RvcihmaWVsZCA6IHN0cmluZywgY29uZGl0aW9uIDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yIHwgUG91Y2hEQi5GaW5kLkNvbmRpdGlvbk9wZXJhdG9ycyB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pIDogdGhpcztcbiAgICBzZWxlY3RvcihzZWxlY3RvciA6IFBvdWNoREIuRmluZC5TZWxlY3RvcikgOiB0aGlzO1xuICAgIHNlbGVjdG9yKGZpZWxkT3JTZWxlY3RvciA6IHN0cmluZ3xQb3VjaERCLkZpbmQuU2VsZWN0b3IsIGNvbmRpdGlvbj8gOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgfCBQb3VjaERCLkZpbmQuQ29uZGl0aW9uT3BlcmF0b3JzIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbikgOiB0aGlzIHtcbiAgICAgICAgaWYodHlwZW9mIGZpZWxkT3JTZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjb25kaXRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZGl0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAkZXE6IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGZpZWxkT3JTZWxlY3RvciBpbiB0aGlzLl9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc2VsZWN0b3JbIGZpZWxkT3JTZWxlY3RvciBdLCBjb25kaXRpb24pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yWyBmaWVsZE9yU2VsZWN0b3IgXSA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZpZWxkT3JTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3Ioa2V5LCBmaWVsZE9yU2VsZWN0b3Jba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNvcnQocHJvcGVydHkgOiBzdHJpbmcsIGRpcmVjdGlvbj8gOiAnYXNjJyB8ICdkZXNjJykgOiB0aGlzO1xuICAgIHNvcnQoc29ydCA6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiAnYXNjJyB8ICdkZXNjJyB9KSA6IHRoaXM7XG4gICAgc29ydChwcm9wZXJ0eU9yU29ydCA6IHN0cmluZ3x7IFtwcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYycgfSwgZGlyZWN0aW9uPyA6ICdhc2MnIHwgJ2Rlc2MnKSA6IHRoaXMge1xuICAgICAgICBpZih0eXBlb2YgcHJvcGVydHlPclNvcnQgPT09ICdzdHJpbmcnICYmIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHsgW3Byb3BlcnR5T3JTb3J0XTogZGlyZWN0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHByb3BlcnR5T3JTb3J0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgbGltaXQobGltaXQgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBza2lwKHNraXAgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX3NraXAgPSBza2lwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmVzb2x2ZShvcHRpb25zPzogSHlkcmF0ZU9wdGlvbnMpIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeS5leGVjdXRlUXVlcnkodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIHRvRmluZFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcSA6IFBvdWNoREIuRmluZC5GaW5kUmVxdWVzdDxUPiA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiB0aGlzLl9zZWxlY3RvclxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYoMCA8IHRoaXMuX3NvcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXEuc29ydCA9IHRoaXMuX3NvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2xpbWl0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5saW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9za2lwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5za2lwID0gdGhpcy5fc2tpcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IEN0b3IsIGdldEFsbFByb3BlcnR5TWV0YWRhdGEsIGdldENsYXNzTWV0YWRhdGEsIGdldFByb3BlcnR5TWV0YWRhdGEsIHBvcHVsYXRlIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucywgSHlkcmF0b3IgfSBmcm9tICcuL2h5ZHJhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IG1hcmtEZWxldGVkLCBtYXJrSWRSZXYgfSBmcm9tICcuL3V0aWxzL21hcmtzJztcbmltcG9ydCAqIGFzIGVxdWFsIGZyb20gJ2Zhc3QtZGVlcC1lcXVhbCc7XG5pbXBvcnQgeyBSZWFkUXVlcnlCYXRjaGVyIH0gZnJvbSAnLi9yZWFkLXF1ZXJ5LWJhdGNoZXInO1xuaW1wb3J0IHsgUXVlcnlCdWlsZGVyIH0gZnJvbSAnLi9xdWVyeS1idWlsZGVyJztcbmltcG9ydCB7IERlc2lnbkRvY01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9kZXNpZ24tZG9jJztcbmltcG9ydCB7IFZpZXdNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvdmlldyc7XG5pbXBvcnQgeyBGaWx0ZXJNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvZmlsdGVyJztcbmltcG9ydCB7IFZhbGlkYXRlRG9jTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3ZhbGlkYXRlLWRvYyc7XG5pbXBvcnQge1xuICAgIEFEQU1BTlRfQ09OTkVDVElPTixcbiAgICBBREFNQU5UX0VOVElUWV9DTEFTUyxcbiAgICBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgRXF1YWxDaGVja2VyXG59IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcblxuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxDaGVja2VyRmFjdG9yeSgpIHtcbiAgICByZXR1cm4gZXF1YWw7XG59XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcXVlcnlCYXRjaGVyID0gbmV3IFJlYWRRdWVyeUJhdGNoZXIodGhpcy5kYik7XG4gICAgXG4gICAgY29uc3RydWN0b3IoQEluamVjdChBREFNQU5UX0NPTk5FQ1RJT04pIHByb3RlY3RlZCByZWFkb25seSBkYiA6IFBvdWNoREIuRGF0YWJhc2U8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9DTEFTUykgcHJvdGVjdGVkIHJlYWRvbmx5IGVudGl0eUNsYXNzIDogQ3RvcjxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRU5USVRZX01FVEFEQVRBKSBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPixcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfRVFVQUxfQ0hFQ0tFUikgcHJvdGVjdGVkIHJlYWRvbmx5IGVxdWFsIDogRXF1YWxDaGVja2VyLFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9JRCkgcHJvdGVjdGVkIHJlYWRvbmx5IGlkIDogQWRhbWFudElkLFxuICAgICAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBidWxrIDogQnVsazxUPixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaHlkcmF0b3IgOiBIeWRyYXRvcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdmFsaWRhdG9yIDogVmFsaWRhdG9yKSB7XG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGNyZWF0ZShlbnRpdHkgOiBUKSA6IFByb21pc2U8VD4ge1xuICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBzZXJ0KGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5fdXBzZXJ0KHRoaXMuaWQuYnVpbGQodGhpcy5tZXRhZGF0YS5uYW1lISwgdGhpcy5tZXRhZGF0YS5pZFR5cGUsIGVudGl0eVsgdGhpcy5tZXRhZGF0YS5pZCBdIGFzIGFueSksIGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF91cHNlcnQoaWQgOiBzdHJpbmcsIGRvY3VtZW50IDogUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ICYgUGFydGlhbDxQb3VjaERCLkNvcmUuUmV2aXNpb25JZE1ldGE+KSA6IFByb21pc2U8UG91Y2hEQi5VcHNlcnRSZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYi51cHNlcnQoaWQsIGV4aXN0aW5nRG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMSwgX3JldjogXzIsIC4uLmQxIH0gPSBkb2N1bWVudCBhcyBhbnk7XG4gICAgICAgICAgICBjb25zdCB7IF9pZDogXzMsIF9yZXY6IF80LCAuLi5kMiB9ID0gZXhpc3RpbmdEb2MgYXMgYW55O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih0aGlzLmVxdWFsKGQxLCBkMikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdXBkYXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZGIucHV0KGRvYyk7XG4gICAgICAgIFxuICAgICAgICBtYXJrSWRSZXYoZW50aXR5LCByZXN1bHQpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgZGVsZXRlKGVudGl0eSA6IFQpIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlKGVudGl0eSwgdGhpcy5tZXRhZGF0YSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkb2MgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQYXJ0aWFsPFBvdWNoREIuQ29yZS5SZXZpc2lvbklkTWV0YT4gJiBQb3VjaERCLkNvcmUuQ2hhbmdlc01ldGEgPSB0aGlzLmh5ZHJhdG9yLmRlaHlkcmF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEsIHsgaW5jbHVkZVJldjogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGRvYy5fZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmRiLnB1dChkb2MpO1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgcmVzdWx0KTtcbiAgICAgICAgbWFya0RlbGV0ZWQoZW50aXR5KTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgfVxuICAgIFxuICAgIHJlYWQoaWQgOiBudW1iZXIgfCBzdHJpbmcsIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWQodGhpcy5pZC5idWlsZCh0aGlzLm1ldGFkYXRhLm5hbWUhLCB0aGlzLm1ldGFkYXRhLmlkVHlwZSwgaWQpLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkKGlkIDogc3RyaW5nLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh5ZHJhdG9yLmh5ZHJhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIGF3YWl0IHRoaXMuX3JlYWRSYXcoaWQpLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIGFzeW5jIF9yZWFkUmF3KGlkIDogc3RyaW5nKSA6IFByb21pc2U8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4oWyBpZCBdKTtcbiAgICAgICAgaWYoIXJlc3VsdFsgMCBdKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgc3RhdHVzIDogNDA0LFxuICAgICAgICAgICAgICAgIG5hbWUgICA6ICdub3RfZm91bmQnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdtaXNzaW5nJyxcbiAgICAgICAgICAgICAgICByZWFzb24gOiAnbWlzc2luZycsXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdFsgMCBdO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyByZWFkQWxsKGlkcz8gOiAoc3RyaW5nIHwgbnVtYmVyKVtdLCBvcHRpb25zPyA6IEh5ZHJhdGVPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG9wdCA6IFBvdWNoREIuQ29yZS5BbGxEb2NzV2l0aEtleXNPcHRpb25zICYgUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoaW5SYW5nZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBpbmNsdWRlX2RvY3M6IHRydWVcbiAgICAgICAgfSBhcyBhbnk7XG4gICAgICAgIFxuICAgICAgICBpZihpZHMpIHtcbiAgICAgICAgICAgIG9wdC5rZXlzID0gaWRzLm1hcChpZCA9PiB0aGlzLmlkLmJ1aWxkKHRoaXMubWV0YWRhdGEubmFtZSEsIHRoaXMubWV0YWRhdGEuaWRUeXBlLCBpZCkpLnNvcnQoKGEsIGIpID0+IGEubG9jYWxlQ29tcGFyZShiKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHQuc3RhcnRrZXkgPSB0aGlzLmlkLmhlYWQodGhpcy5tZXRhZGF0YS5uYW1lISk7XG4gICAgICAgICAgICBvcHQuZW5ka2V5ID0gdGhpcy5pZC50YWlsKHRoaXMubWV0YWRhdGEubmFtZSEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZEFsbChvcHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGwob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucywgb3B0aW9ucz8gOiBIeWRyYXRlT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoKGF3YWl0IHRoaXMuX3JlYWRBbGxSYXcob3B0KSlcbiAgICAgICAgICAgIC5tYXAoYXN5bmMgZG9jID0+IHRoaXMuaHlkcmF0b3IuaHlkcmF0ZShPYmplY3QuY3JlYXRlKHRoaXMuZW50aXR5Q2xhc3MucHJvdG90eXBlKSwgZG9jLCB0aGlzLm1ldGFkYXRhLCBvcHRpb25zKSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICAvKiogQGludGVybmFsICovXG4gICAgYXN5bmMgX3JlYWRBbGxSYXcob3B0IDogUG91Y2hEQi5Db3JlLkFsbERvY3NXaXRoS2V5c09wdGlvbnMgfCBQb3VjaERCLkNvcmUuQWxsRG9jc1dpdGhpblJhbmdlT3B0aW9ucykgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIGlmKG9wdC5pbmNsdWRlX2RvY3MgJiYgJ2tleXMnIGluIG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucXVlcnlCYXRjaGVyLnJlYWQ8VD4ob3B0LmtleXMpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKGF3YWl0IHRoaXMuZGIuYWxsRG9jczxUPihvcHQpKS5yb3dzLm1hcChyID0+IHIuZG9jISkuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBcbiAgICBxdWVyeSgpIDogUXVlcnlCdWlsZGVyPFQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBRdWVyeUJ1aWxkZXI8VD4odGhpcywgdGhpcy5pZC5oZWFkKHRoaXMubWV0YWRhdGEubmFtZSEpLCB0aGlzLmlkLnRhaWwodGhpcy5tZXRhZGF0YS5uYW1lISkpO1xuICAgIH1cbiAgICBcbiAgICBhc3luYyBleGVjdXRlUXVlcnkocXVlcnkgOiBRdWVyeUJ1aWxkZXI8VD4sIG9wdGlvbnM/IDogSHlkcmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKChhd2FpdCB0aGlzLmRiLmZpbmQocXVlcnkudG9GaW5kUmVxdWVzdCgpKSkuZG9jc1xuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIG9wdGlvbnMpKVxuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIGJ1aWxkKHByb3BzIDogUGFydGlhbDxUPiA9IHt9KSA6IFQge1xuICAgICAgICByZXR1cm4gcG9wdWxhdGUoT2JqZWN0LmNyZWF0ZSh0aGlzLmVudGl0eUNsYXNzLnByb3RvdHlwZSksIHByb3BzKTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgcGVyc2lzdERlc2lnbkRvYzxUIGV4dGVuZHMge30+KGRvYyA6IFQpIDogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGNsYXNzQW5ub3RhdGlvbnMgPSBnZXRDbGFzc01ldGFkYXRhKGRvYy5jb25zdHJ1Y3RvciwgRGVzaWduRG9jTWV0YWRhdGEpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eUFubm90YXRpb25zID0gZ2V0QWxsUHJvcGVydHlNZXRhZGF0YTxWaWV3TWV0YWRhdGEgfCBGaWx0ZXJNZXRhZGF0YSB8IFZhbGlkYXRlRG9jTWV0YWRhdGE+KGRvYy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIFxuICAgICAgICBpZigxICE9PSBjbGFzc0Fubm90YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZXNpZ24gZG9jIGFubm90YXRpb24gcmVxdWlyZWRgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoY2xhc3NBbm5vdGF0aW9uc1sgMCBdLmVudGl0eSAhPT0gdGhpcy5lbnRpdHlDbGFzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGRlc2lnbiBkb2MgZW50aXR5YCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGxldCBkb2N1bWVudCA6IHtcbiAgICAgICAgICAgIF9pZCA6IHN0cmluZztcbiAgICAgICAgICAgIHZpZXdzIDogeyBbIGtleSA6IHN0cmluZyBdIDogeyBtYXAgOiBzdHJpbmcsIHJlZHVjZT8gOiBzdHJpbmcgfSB9O1xuICAgICAgICAgICAgZmlsdGVycyA6IHsgWyBrZXkgOiBzdHJpbmcgXSA6IHN0cmluZyB9O1xuICAgICAgICAgICAgdmFsaWRhdGVfZG9jX3VwZGF0ZT8gOiBzdHJpbmc7XG4gICAgICAgIH0gPSB7XG4gICAgICAgICAgICBfaWQgICAgOiBgX2Rlc2lnbi8ke2NsYXNzQW5ub3RhdGlvbnNbIDAgXS5uYW1lfWAsXG4gICAgICAgICAgICB2aWV3cyAgOiB7fSxcbiAgICAgICAgICAgIGZpbHRlcnM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbnMgXSBvZiBwcm9wZXJ0eUFubm90YXRpb25zKSB7XG4gICAgICAgICAgICBmb3IoY29uc3QgYW5ub3RhdGlvbiBvZiBhbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBWaWV3TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgOiBhbnkgPSBkb2NbIHByb3BlcnR5IGFzIGtleW9mIFQgXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnZpZXdzWyBwcm9wZXJ0eSBhcyBzdHJpbmcgXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmlld3NbIHByb3BlcnR5IGFzIHN0cmluZyBdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcCAgIDogdmFsdWUubWFwLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkdWNlOiB2YWx1ZS5yZWR1Y2UgJiYgdmFsdWUucmVkdWNlLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEZpbHRlck1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZpbHRlcnNbIHByb3BlcnR5IGFzIHN0cmluZyBdID0gZG9jWyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFZhbGlkYXRlRG9jTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudmFsaWRhdGVfZG9jX3VwZGF0ZSA9IGRvY1sgcHJvcGVydHkgYXMga2V5b2YgVCBdLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmRiLnVwc2VydDxhbnk+KGRvY3VtZW50Ll9pZCwgZXhpc3RpbmdEb2MgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBfaWQ6IF8xLCBfcmV2OiBfMiwgLi4uZDEgfSA9IGRvY3VtZW50IGFzIGFueTtcbiAgICAgICAgICAgIGNvbnN0IHsgX2lkOiBfMywgX3JldjogXzQsIC4uLmQyIH0gPSBleGlzdGluZ0RvYyBhcyBhbnk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHRoaXMuZXF1YWwoZDEsIGQyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgdmlldzxULCBQIGV4dGVuZHMga2V5b2YgVD4oZGVzaWduRG9jIDogQ3RvcjxUPiwgbmFtZSA6IFAsIHsgZGVwdGgsIGNpcmN1bGFyQ2FjaGUsIC4uLm9wdGlvbnMgfSA6IEh5ZHJhdGVPcHRpb25zICYgUG91Y2hEQi5RdWVyeS5PcHRpb25zPFQsIGFueT4gPSB7fSkge1xuICAgICAgICBjb25zdCBjbGFzc0Fubm90YXRpb24gPSBnZXRDbGFzc01ldGFkYXRhKGRlc2lnbkRvYywgRGVzaWduRG9jTWV0YWRhdGEpWyAwIF07XG4gICAgICAgIFxuICAgICAgICBpZighY2xhc3NBbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYERlc2lnbiBkb2MgYW5ub3RhdGlvbiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZihjbGFzc0Fubm90YXRpb24uZW50aXR5ICE9PSB0aGlzLmVudGl0eUNsYXNzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgZGVzaWduIGRvYyBlbnRpdHlgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvcGVydHlBbm5vdGF0aW9uID0gZ2V0UHJvcGVydHlNZXRhZGF0YShkZXNpZ25Eb2MsIG5hbWUgYXMgc3RyaW5nLCBWaWV3TWV0YWRhdGEpO1xuICAgICAgICBcbiAgICAgICAgaWYoIXByb3BlcnR5QW5ub3RhdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHZpZXcgXCIke25hbWV9XCJgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICB9XG4gICAgICAgIG9wdGlvbnMuaW5jbHVkZV9kb2NzID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLmFsbCgoYXdhaXQgdGhpcy5yYXdWaWV3KGAke2NsYXNzQW5ub3RhdGlvbi5uYW1lfS8ke25hbWV9YCwgb3B0aW9ucykpXG4gICAgICAgICAgICAucm93cy5tYXAocm93ID0+IHJvdy5kb2MhKVxuICAgICAgICAgICAgLm1hcChhc3luYyBkb2MgPT4gdGhpcy5oeWRyYXRvci5oeWRyYXRlKE9iamVjdC5jcmVhdGUodGhpcy5lbnRpdHlDbGFzcy5wcm90b3R5cGUpLCBkb2MsIHRoaXMubWV0YWRhdGEsIHtcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBjaXJjdWxhckNhY2hlXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgKVxuICAgIH1cbiAgICBcbiAgICByYXdWaWV3PFIgPSBUPihuYW1lIDogc3RyaW5nLCBvcHRpb25zPyA6IFBvdWNoREIuUXVlcnkuT3B0aW9uczxSLCBhbnk+KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRiLnF1ZXJ5KG5hbWUsIG9wdGlvbnMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFByb3BlcnR5TWV0YWRhdGEsIFR5cGUgfSBmcm9tICcuL2Fubm90YXRpb25zL3Byb3BlcnR5JztcbmltcG9ydCB7IElubGluZU1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9pbmxpbmUnO1xuaW1wb3J0IHsgSGFzTWFueU1hcE1ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueS1tYXAnO1xuaW1wb3J0IHsgbWFya0lkUmV2IH0gZnJvbSAnLi91dGlscy9tYXJrcyc7XG5pbXBvcnQgeyBIeWRyYXRlT3B0aW9ucywgSHlkcmF0b3IgfSBmcm9tICcuL2h5ZHJhdG9yJztcbmltcG9ydCB7IEFkYW1hbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL3JlbGF0aW9uJztcbmltcG9ydCB7IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB9IGZyb20gJy4vY29ubmVjdGlvbi1tYW5hZ2VyJztcbmltcG9ydCB7IEhhc01hbnlNZXRhZGF0YSB9IGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnknO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcbmltcG9ydCB7IEJlbG9uZ3NUb01ldGFkYXRhIH0gZnJvbSAnLi9hbm5vdGF0aW9ucy9iZWxvbmdzLXRvJztcbmltcG9ydCB7IElkTWV0YWRhdGEgfSBmcm9tICcuL2Fubm90YXRpb25zL2lkJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQURBTUFOVF9JRCwgQWRhbWFudElkIH0gZnJvbSAnLi9pbmplY3Rvci10b2tlbnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHlkcmF0b3JJbXBsIGV4dGVuZHMgSHlkcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9JRCkgcHJvdGVjdGVkIHJlYWRvbmx5IGlkIDogQWRhbWFudElkLFxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCByZWFkb25seSBjb25uZWN0aW9uTWFuYWdlciA6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBcbiAgICBkZWh5ZHJhdGU8VD4oZW50aXR5IDogVCwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgb3B0aW9ucz8gOiB7IGluY2x1ZGVSZXY/IDogYm9vbGVhbiB9KSA6IFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPiB7XG4gICAgICAgIGNvbnN0IGRvYyA6IGFueSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgaWYob3B0aW9ucyAmJiBvcHRpb25zLmluY2x1ZGVSZXYpIHtcbiAgICAgICAgICAgIGRvYy5fcmV2ID0gKGVudGl0eSBhcyBhbnkpLl9yZXY7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKG1ldGFkYXRhLmF0dGFjaG1lbnRzICYmIChlbnRpdHkgYXMgYW55KS5fYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIGRvYy5fYXR0YWNobWVudHMgPSAoZW50aXR5IGFzIGFueSkuX2F0dGFjaG1lbnRzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF07XG4gICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUmVsYXRpb25NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVsYXRpb25NZXRhZGF0YSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0TWV0YWRhdGEoYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBCZWxvbmdzVG9NZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jWyBwcm9wZXJ0eSBdID0gcmVsYXRpb25Ub0lkKHZhbHVlLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9ICh2YWx1ZSBhcyBhbnlbXSkubWFwKHJlbCA9PiByZWxhdGlvblRvSWQocmVsLCByZWxhdGlvbk1ldGFkYXRhLCB0aGlzLmlkKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSGFzTWFueU1hcE1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWwgOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxbIGtleSBdID0gcmVsYXRpb25Ub0lkKHZhbHVlWyBrZXkgXSwgcmVsYXRpb25NZXRhZGF0YSwgdGhpcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSByZWw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSW5saW5lTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1sgcHJvcGVydHkgXSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0UmVwb3NpdG9yeShhbm5vdGF0aW9uLnR5cGUpLmh5ZHJhdG9yLmRlaHlkcmF0ZSh2YWx1ZSwgcmVsYXRpb25NZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIFByb3BlcnR5TWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICBkb2NbIHByb3BlcnR5IF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgSWRNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBkb2MuX2lkID0gdGhpcy5pZC5idWlsZChtZXRhZGF0YS5uYW1lISwgbWV0YWRhdGEuaWRUeXBlLCB2YWx1ZSBhcyBhbnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodW5kZWZpbmVkID09PSBkb2NbIHByb3BlcnR5IF0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jWyBwcm9wZXJ0eSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZG9jIGFzIFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPiAmIFBhcnRpYWw8UG91Y2hEQi5Db3JlLlJldmlzaW9uSWRNZXRhPjtcbiAgICB9XG4gICAgXG4gICAgYXN5bmMgaHlkcmF0ZTxUIGV4dGVuZHMge30+KGVudGl0eSA6IFQsIGRhdGEgOiBQb3VjaERCLkNvcmUuRG9jdW1lbnQ8VD4gJiBQb3VjaERCLkNvcmUuR2V0TWV0YSwgbWV0YWRhdGEgOiBNZXRhZGF0YTxUPiwgeyBkZXB0aCA9IEluZmluaXR5LCBjaXJjdWxhckNhY2hlID0ge30gfSA6IEh5ZHJhdGVPcHRpb25zID0ge30pIDogUHJvbWlzZTxUPiB7XG4gICAgICAgIGlmKGRhdGEuX2lkIGluIGNpcmN1bGFyQ2FjaGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaXJjdWxhckNhY2hlWyBkYXRhLl9pZCBdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjaXJjdWxhckNhY2hlWyBkYXRhLl9pZCBdID0gZW50aXR5O1xuICAgICAgICBcbiAgICAgICAgbWFya0lkUmV2KGVudGl0eSwgeyBpZDogZGF0YS5faWQsIHJldjogZGF0YS5fcmV2IH0pO1xuICAgICAgICBcbiAgICAgICAgaWYobWV0YWRhdGEuYXR0YWNobWVudHMpIHtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbnRpdHksICdfYXR0YWNobWVudHMnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IGRhdGEuX2F0dGFjaG1lbnRzIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlIDogYW55ID0gZGF0YVsgcHJvcGVydHkgYXMga2V5b2YgVCBdO1xuICAgICAgICAgICAgaWYobnVsbCA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gbnVsbCE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBSZWxhdGlvbk1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uTWV0YWRhdGEgPSB0aGlzLmNvbm5lY3Rpb25NYW5hZ2VyLmdldE1ldGFkYXRhKGFubm90YXRpb24udHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0aW9uUmVwb3NpdG9yeSA9IHRoaXMuY29ubmVjdGlvbk1hbmFnZXIuZ2V0UmVwb3NpdG9yeShhbm5vdGF0aW9uLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEJlbG9uZ3NUb01ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkodmFsdWUpID8gY2lyY3VsYXJDYWNoZVt2YWx1ZV0gOiBhd2FpdCByZWxhdGlvblJlcG9zaXRvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuX3JlYWQodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwdGg6IGRlcHRoIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2lyY3VsYXJDYWNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIEhhc01hbnlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5WyBwcm9wZXJ0eSBhcyBrZXlvZiBUIF0gPSBhd2FpdCByZWFkQWxsV2l0aENpcmN1bGFyQ2FjaGUocmVsYXRpb25SZXBvc2l0b3J5LCB2YWx1ZSwgZGVwdGggLSAxLCBjaXJjdWxhckNhY2hlKSBhcyBhbnk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGFubm90YXRpb24gaW5zdGFuY2VvZiBIYXNNYW55TWFwTWV0YWRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcChrID0+IHZhbHVlWyBrIF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRpdGllcyA9IGF3YWl0IHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZShyZWxhdGlvblJlcG9zaXRvcnksIHZhbHVlcywgZGVwdGggLSAxLCBjaXJjdWxhckNhY2hlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbCA6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsWyBrZXkgXSA9IGVudGl0aWVzLmZpbmQoZSA9PiBlLl9pZCA9PT0gdmFsdWVbIGtleSBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eVsgcHJvcGVydHkgYXMga2V5b2YgVCBdID0gcmVsO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoYW5ub3RhdGlvbiBpbnN0YW5jZW9mIElubGluZU1ldGFkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IGF3YWl0IHJlbGF0aW9uUmVwb3NpdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oeWRyYXRvci5oeWRyYXRlKHJlbGF0aW9uUmVwb3NpdG9yeS5idWlsZCgpLCB2YWx1ZSwgcmVsYXRpb25NZXRhZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihhbm5vdGF0aW9uIGluc3RhbmNlb2YgUHJvcGVydHlNZXRhZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QuZ2V0UHJvdG90eXBlT2YoZW50aXR5KSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICBpZighZGVzY3JpcHRvciB8fCBkZXNjcmlwdG9yLndyaXRhYmxlIHx8IGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlbIHByb3BlcnR5IGFzIGtleW9mIFQgXSA9IHVucGFjayh2YWx1ZSwgYW5ub3RhdGlvbi50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0eTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRBbGxXaXRoQ2lyY3VsYXJDYWNoZTxUPihyZXBvIDogQWRhbWFudFJlcG9zaXRvcnk8VD4sIGtleXMgOiBzdHJpbmdbXSwgZGVwdGggOiBudW1iZXIsIGNpcmN1bGFyQ2FjaGUgOiB7IFsga2V5IDogc3RyaW5nIF0gOiBhbnkgfSkgOiBQcm9taXNlPFRbXT4ge1xuICAgIGNvbnN0IGZpbHRlcmVkS2V5cyA9IGtleXMuZmlsdGVyKGsgPT4gIWNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkoaykpO1xuICAgIGxldCBmcm9tRGIgOiBUW107XG4gICAgXG4gICAgaWYoZmlsdGVyZWRLZXlzLmxlbmd0aCkge1xuICAgICAgICBmcm9tRGIgPSBhd2FpdCByZXBvLl9yZWFkQWxsKHsga2V5czogZmlsdGVyZWRLZXlzLCBpbmNsdWRlX2RvY3M6IHRydWUgfSwgeyBkZXB0aCwgY2lyY3VsYXJDYWNoZSB9KTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGtleXMubWFwKGtleSA9PiB7XG4gICAgICAgIGlmKGNpcmN1bGFyQ2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGNpcmN1bGFyQ2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGZyb21EYiAmJiBmcm9tRGIuZmluZChlID0+IChlIGFzIGFueSkuX2lkID09PSBrZXkpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHJlbGF0aW9uVG9JZDxUPihyZWwgOiBzdHJpbmcgfCBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+LCBpZCA6IEFkYW1hbnRJZCkgOiBzdHJpbmcge1xuICAgIHJldHVybiB0eXBlb2YgcmVsID09PSAnc3RyaW5nJ1xuICAgICAgICA/IHJlbFxuICAgICAgICA6IGlkLmJ1aWxkKG1ldGFkYXRhLm5hbWUhLCBtZXRhZGF0YS5pZFR5cGUsIHJlbFsgbWV0YWRhdGEuaWQgXSBhcyBhbnkpXG59XG5cbmZ1bmN0aW9uIHVucGFjayh2YWx1ZSA6IGFueSwgdHlwZSA6IFR5cGUpIDogYW55IHtcbiAgICBpZih0eXBlID09PSBEYXRlICYmIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiB2YWx1ZTtcbn1cbiIsImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JJbXBsIGV4dGVuZHMgVmFsaWRhdG9yIHtcbiAgICBhc3luYyB2YWxpZGF0ZTxUPihlbnRpdHkgOiBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+KSA6IFByb21pc2U8dHJ1ZT4ge1xuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IGFubm90YXRpb24udmFsaWRhdGUoZW50aXR5W3Byb3BlcnR5IGFzIGtleW9mIFRdLCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbn1cbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWRhbWFudFJlcG9zaXRvcnksIGVxdWFsQ2hlY2tlckZhY3Rvcnlcbn0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEN0b3IgfSBmcm9tICcuL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBIeWRyYXRvckltcGwgfSBmcm9tICcuL2h5ZHJhdG9yLWltcGwnO1xuaW1wb3J0IHsgVmFsaWRhdG9ySW1wbCB9IGZyb20gJy4vdmFsaWRhdG9yLWltcGwnO1xuaW1wb3J0IHtcbiAgICBBREFNQU5UX0NPTk5FQ1RJT04sXG4gICAgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgQ29ubmVjdGlvbkZhY3Rvcnlcbn0gZnJvbSAnLi9pbmplY3Rvci10b2tlbnMnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkYW1hbnRJZEZhY3RvcnkoKSA6IEFkYW1hbnRJZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fMGBcbiAgICAgICAgfSxcbiAgICAgICAgdGFpbChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fOWBcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQobmFtZSA6IHN0cmluZywgdHlwZSA6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZ3xudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfV8yXyR7aWR9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFN0ciA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9XzFfJHsnMCcucmVwZWF0KDE2IC0gaWRTdHIubGVuZ3RoKX0ke2lkU3RyfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWQgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgICB9LFxuICAgICAgICBwYXJzZShpZCA6IHN0cmluZykgOiB7IG5hbWU6IHN0cmluZywgdHlwZTogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXIsIGlkIDogc3RyaW5nIHwgbnVtYmVyIH0ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvXiguKilfKDF8MilfKC4qKSQvLmV4ZWMoaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGlkIFwiJHtpZH1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1hdGNoWzFdISxcbiAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFsyXSA9PT0gJzInID8gU3RyaW5nIDogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGlkOiBtYXRjaFsyXSA9PT0gJzInID8gbWF0Y2hbM10gOiBOdW1iZXIucGFyc2VJbnQobWF0Y2hbM10sIDEwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRhbWFudENvbm5lY3Rpb24oZmFjdG9yeSA6IENvbm5lY3Rpb25GYWN0b3J5KSA6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIHVzZVZhbHVlOiBmYWN0b3J5IH0sXG4gICAgICAgICAgICB7IHByb3ZpZGU6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWSwgQURBTUFOVF9JRCwgSW5qZWN0b3IgXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0lELCB1c2VGYWN0b3J5OiBhZGFtYW50SWRGYWN0b3J5LCBkZXBzOiBbXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0VRVUFMX0NIRUNLRVIsIHVzZUZhY3Rvcnk6IGVxdWFsQ2hlY2tlckZhY3RvcnksIGRlcHM6IFtdIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluamVjdG9yLmdldChBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyIHtcbiAgICBcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgUG91Y2hEQi5EYXRhYmFzZTxhbnk+PigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXBvc2l0b3JpZXMgPSBuZXcgTWFwPEN0b3I8YW55PiwgQWRhbWFudFJlcG9zaXRvcnk8YW55Pj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgPSBuZXcgTWFwPEN0b3I8YW55PiwgTWV0YWRhdGE8YW55Pj4oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZKSBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbkZhY3RvcnkgOiBDb25uZWN0aW9uRmFjdG9yeSxcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfSUQpIHB1YmxpYyByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaW5qZWN0b3IgOiBJbmplY3Rvcikge31cbiAgICBcbiAgICBnZXRPcGVuQ29ubmVjdGlvbnMoKSA6IFBvdWNoREIuRGF0YWJhc2VbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29ubmVjdGlvbnMudmFsdWVzKCkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb25uZWN0aW9uPFQgZXh0ZW5kcyB7fSA9IHt9PihuYW1lIDogc3RyaW5nKSA6IFBvdWNoREIuRGF0YWJhc2U8VD4ge1xuICAgICAgICBpZighdGhpcy5jb25uZWN0aW9ucy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMuc2V0KG5hbWUsIHRoaXMuY3JlYXRlQ29ubmVjdGlvbihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zLmdldChuYW1lKSE7XG4gICAgfVxuICAgIFxuICAgIGNsZWFyQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuY2xlYXIoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSA6IHN0cmluZykgOiBQb3VjaERCLkRhdGFiYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbkZhY3RvcnkobmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGdldFJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgaWYoIXRoaXMucmVwb3NpdG9yaWVzLmhhcyhlbnRpdHlDbGFzcykpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVSZXBvc2l0b3J5KGVudGl0eUNsYXNzKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcmllcy5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1ldGFkYXRhKGVudGl0eUNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIsIHVzZVZhbHVlOiB0aGlzIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50UmVwb3NpdG9yeSwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSwgQURBTUFOVF9FUVVBTF9DSEVDS0VSLCBBREFNQU5UX0lELCBCdWxrLCBIeWRyYXRvciwgVmFsaWRhdG9yXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfQ0xBU1MsIHVzZVZhbHVlOiBlbnRpdHlDbGFzcyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIHVzZVZhbHVlOiBtZXRhZGF0YSwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfQ09OTkVDVElPTiwgdXNlVmFsdWU6ICFtZXRhZGF0YS5pbmxpbmUgPyB0aGlzLmdldENvbm5lY3Rpb24obWV0YWRhdGEubmFtZSEpIDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHlkcmF0b3JJbXBsLCBkZXBzOiBbIEFEQU1BTlRfSUQsIEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlcl0gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFZhbGlkYXRvckltcGwsIGRlcHM6IFtdIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIeWRyYXRvciwgdXNlRXhpc3Rpbmc6IG1ldGFkYXRhLmh5ZHJhdG9yIHx8IEh5ZHJhdG9ySW1wbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVmFsaWRhdG9yLCB1c2VFeGlzdGluZzogbWV0YWRhdGEudmFsaWRhdG9yIHx8IFZhbGlkYXRvckltcGwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEJ1bGssIGRlcHM6IFsgQURBTUFOVF9DT05ORUNUSU9OLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIEh5ZHJhdG9yLCBWYWxpZGF0b3IgXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLmdldDxBZGFtYW50UmVwb3NpdG9yeTxUPj4oQWRhbWFudFJlcG9zaXRvcnkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRNZXRhZGF0YTxUPihlbnRpdHlDbGFzcyA6IEN0b3I8VD4pIDogTWV0YWRhdGE8VD4ge1xuICAgICAgICBpZighdGhpcy5tZXRhZGF0YS5oYXMoZW50aXR5Q2xhc3MpKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVNZXRhZGF0YShlbnRpdHlDbGFzcykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1ldGFkYXRhPFQ+KGVudGl0eUNsYXNzIDogQ3RvcjxUPikgOiBNZXRhZGF0YTxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGE8VD4oZW50aXR5Q2xhc3MpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJlcXVhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFJQSxNQUFhLGNBQWMsR0FBRyxJQUFJLE9BQU8sRUFBb0IsQ0FBQzs7QUFDOUQsTUFBYSxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBd0MsQ0FBQzs7Ozs7OztBQUVyRiwwQkFBMEMsTUFBa0IsRUFBRSxJQUFlO0lBQ3pFLElBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQzVCLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFFRCwwQkFBTyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUks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