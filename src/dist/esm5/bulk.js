/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA } from './injector-tokens';
import { Inject } from '@angular/core';
import { markDeleted, markIdRev } from './utils/marks';
import { Metadata } from './metadata';
/** @enum {string} */
var BulkOperation = {
    Create: 'create',
    Update: 'update',
    Delete: 'delete',
};
export { BulkOperation };
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var docs, result, errors;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (0 === entities.length) {
                            return [2 /*return*/, entities];
                        }
                        return [4 /*yield*/, Promise.all(entities.map(function (entity) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var doc;
                                return tslib_1.__generator(this, function (_a) {
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
export { Bulk };
if (false) {
    /** @type {?} */
    Bulk.prototype.db;
    /** @type {?} */
    Bulk.prototype.entityClass;
    /** @type {?} */
    Bulk.prototype.metadata;
    /** @type {?} */
    Bulk.prototype.hydrator;
    /** @type {?} */
    Bulk.prototype.validator;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJidWxrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0lBR2xDLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFROzs7Ozs7O0lBS2pCLGNBQTJELEVBQXdCLEVBQ3RCLFdBQXFCLEVBQ2xCLFFBQXNCLEVBQ3ZELFFBQW1CLEVBQ25CLFNBQXFCO1FBSk8sT0FBRSxHQUFGLEVBQUUsQ0FBc0I7UUFDdEIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBYztRQUN2RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQVk7S0FBSTs7Ozs7O0lBRXhDLG1CQUFJOzs7OztJQUFwQixVQUFxQixRQUFjLEVBQUUsU0FBeUI7Ozs7Ozs7d0JBQzFELElBQUcsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ3RCLHNCQUFPLFFBQVEsRUFBQzt5QkFDbkI7d0JBRVkscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQU0sTUFBTTs7Ozs7NENBQ3BELElBQUcsQ0FBQyxDQUFDLE1BQU0sWUFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0RBQ3RDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBVyxNQUFNLDZCQUF1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQU0sQ0FBQyxDQUFDOzZDQUNwRjs0Q0FFRCxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzs0Q0FBcEQsU0FBb0QsQ0FBQzs0Q0FFL0MsR0FBRyxHQUF5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEtBQUssYUFBYSxDQUFDLE1BQU0sSUFBSSxTQUFTLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7NENBQzNNLElBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUU7Z0RBQ25DLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDOzZDQUN2Qjs0Q0FDRCxzQkFBTyxHQUFHLEVBQUM7OztpQ0FDZCxDQUFDLENBQUMsRUFBQTs7d0JBWkcsSUFBSSxHQUFHLFNBWVY7d0JBRVkscUJBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dCQUFyQyxNQUFNLEdBQUcsU0FBNEI7d0JBQ3JDLE1BQU0sR0FBMEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQWhELENBQWdELENBQUMsQ0FBQzt3QkFFM0csSUFBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRTs0QkFDbEIsTUFBTSxNQUFNLENBQUM7eUJBQ2hCO3dCQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSzs0QkFDdEIsSUFBRyxTQUFTLEtBQUssYUFBYSxDQUFDLE1BQU0sRUFBRTtnQ0FDbkMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzZCQUNoQzs0QkFDRCxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQyxDQUFDLENBQUM7d0JBRUgsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ25COzs7OztJQUVELHFCQUFNOzs7O0lBQU4sVUFBTyxRQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEOzs7OztJQUVELHFCQUFNOzs7O0lBQU4sVUFBTyxRQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEOzs7OztJQUVELHFCQUFNOzs7O0lBQU4sVUFBTyxRQUFjO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3BEOzs7Z0RBcERZLE1BQU0sU0FBQyxrQkFBa0I7Z0RBQ3pCLE1BQU0sU0FBQyxvQkFBb0I7Z0JBWG5DLFFBQVEsdUJBWUEsTUFBTSxTQUFDLHVCQUF1QjtnQkFsQnRDLFFBQVE7Z0JBQ1IsU0FBUzs7ZUFEbEI7O1NBY2EsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSB9IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcbmltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFya0RlbGV0ZWQsIG1hcmtJZFJldiB9IGZyb20gJy4vdXRpbHMvbWFya3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGVudW0gQnVsa09wZXJhdGlvbiB7XG4gICAgQ3JlYXRlID0gJ2NyZWF0ZScsXG4gICAgVXBkYXRlID0gJ3VwZGF0ZScsXG4gICAgRGVsZXRlID0gJ2RlbGV0ZSdcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGs8VD4ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge31cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgYnVsayhlbnRpdGllcyA6IFRbXSwgb3BlcmF0aW9uIDogQnVsa09wZXJhdGlvbikgOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBpZigwID09PSBlbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudGl0aWVzLm1hcChhc3luYyBlbnRpdHkgPT4ge1xuICAgICAgICAgICAgaWYoIShlbnRpdHkgaW5zdGFuY2VvZiB0aGlzLmVudGl0eUNsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW50aXR5IFwiJHtlbnRpdHl9XCIgaXMgbm90IGluc3RhbmNlb2YgJHt0aGlzLmVudGl0eUNsYXNzLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhICYgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5VcGRhdGUgfHwgb3BlcmF0aW9uID09PSBCdWxrT3BlcmF0aW9uLkRlbGV0ZSB9KTtcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5EZWxldGUpIHtcbiAgICAgICAgICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5idWxrRG9jcyhkb2NzKTtcbiAgICAgICAgY29uc3QgZXJyb3JzIDogUG91Y2hEQi5Db3JlLkVycm9yW10gPSByZXN1bHQuZmlsdGVyKHIgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsICdlcnJvcicpKTtcbiAgICAgICAgXG4gICAgICAgIGlmKDAgPCBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgbWFya0RlbGV0ZWQoZW50aXRpZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtJZFJldihlbnRpdGllc1tpbmRleF0sIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5DcmVhdGUpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5VcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5EZWxldGUpO1xuICAgIH1cbn1cbiJdfQ==