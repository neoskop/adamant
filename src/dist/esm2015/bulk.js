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
const BulkOperation = {
    Create: 'create',
    Update: 'update',
    Delete: 'delete',
};
export { BulkOperation };
/**
 * @template T
 */
export class Bulk {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (0 === entities.length) {
                return entities;
            }
            /** @type {?} */
            const docs = yield Promise.all(entities.map((entity) => tslib_1.__awaiter(this, void 0, void 0, function* () {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJidWxrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7O0lBR2xDLFFBQVMsUUFBUTtJQUNqQixRQUFTLFFBQVE7SUFDakIsUUFBUyxRQUFROzs7Ozs7QUFHckIsTUFBTTs7Ozs7Ozs7SUFFRixZQUEyRCxFQUF3QixFQUN0QixXQUFxQixFQUNsQixRQUFzQixFQUN2RCxRQUFtQixFQUNuQixTQUFxQjtRQUpPLE9BQUUsR0FBRixFQUFFLENBQXNCO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQWM7UUFDdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFZO0tBQUk7Ozs7OztJQUV4QyxJQUFJLENBQUMsUUFBYyxFQUFFLFNBQXlCOztZQUMxRCxJQUFHLENBQUMsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN0QixPQUFPLFFBQVEsQ0FBQzthQUNuQjs7WUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFNLE1BQU0sRUFBQyxFQUFFO2dCQUN2RCxJQUFHLENBQUMsQ0FBQyxNQUFNLFlBQVksSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsTUFBTSx1QkFBdUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRjtnQkFFRCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7O2dCQUVyRCxNQUFNLEdBQUcsR0FBeUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLElBQUksU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUMzTSxJQUFHLFNBQVMsS0FBSyxhQUFhLENBQUMsTUFBTSxFQUFFO29CQUNuQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDdkI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7Y0FDZCxDQUFDLENBQUMsQ0FBQzs7WUFFSixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUM1QyxNQUFNLE1BQU0sR0FBMEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUUzRyxJQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO2dCQUNsQixNQUFNLE1BQU0sQ0FBQzthQUNoQjtZQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFCLElBQUcsU0FBUyxLQUFLLGFBQWEsQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDaEM7Z0JBQ0QsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNuQyxDQUFDLENBQUM7WUFFSCxPQUFPLFFBQVEsQ0FBQzs7S0FDbkI7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEQ7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEQ7Ozs7O0lBRUQsTUFBTSxDQUFDLFFBQWM7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDcEQ7Ozs7NENBcERZLE1BQU0sU0FBQyxrQkFBa0I7NENBQ3pCLE1BQU0sU0FBQyxvQkFBb0I7WUFYbkMsUUFBUSx1QkFZQSxNQUFNLFNBQUMsdUJBQXVCO1lBbEJ0QyxRQUFRO1lBQ1IsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBDdG9yIH0gZnJvbSAnLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSB9IGZyb20gJy4vaW5qZWN0b3ItdG9rZW5zJztcbmltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWFya0RlbGV0ZWQsIG1hcmtJZFJldiB9IGZyb20gJy4vdXRpbHMvbWFya3MnO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGVudW0gQnVsa09wZXJhdGlvbiB7XG4gICAgQ3JlYXRlID0gJ2NyZWF0ZScsXG4gICAgVXBkYXRlID0gJ3VwZGF0ZScsXG4gICAgRGVsZXRlID0gJ2RlbGV0ZSdcbn1cblxuZXhwb3J0IGNsYXNzIEJ1bGs8VD4ge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQURBTUFOVF9DT05ORUNUSU9OKSBwcm90ZWN0ZWQgcmVhZG9ubHkgZGIgOiBQb3VjaERCLkRhdGFiYXNlPFQ+LFxuICAgICAgICAgICAgICAgIEBJbmplY3QoQURBTUFOVF9FTlRJVFlfQ0xBU1MpIHByb3RlY3RlZCByZWFkb25seSBlbnRpdHlDbGFzcyA6IEN0b3I8VD4sXG4gICAgICAgICAgICAgICAgQEluamVjdChBREFNQU5UX0VOVElUWV9NRVRBREFUQSkgcHJvdGVjdGVkIHJlYWRvbmx5IG1ldGFkYXRhIDogTWV0YWRhdGE8VD4sXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IGh5ZHJhdG9yIDogSHlkcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIHJlYWRvbmx5IHZhbGlkYXRvciA6IFZhbGlkYXRvcikge31cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgYnVsayhlbnRpdGllcyA6IFRbXSwgb3BlcmF0aW9uIDogQnVsa09wZXJhdGlvbikgOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICBpZigwID09PSBlbnRpdGllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdGllcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZG9jcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudGl0aWVzLm1hcChhc3luYyBlbnRpdHkgPT4ge1xuICAgICAgICAgICAgaWYoIShlbnRpdHkgaW5zdGFuY2VvZiB0aGlzLmVudGl0eUNsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRW50aXR5IFwiJHtlbnRpdHl9XCIgaXMgbm90IGluc3RhbmNlb2YgJHt0aGlzLmVudGl0eUNsYXNzLm5hbWV9YCk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZShlbnRpdHksIHRoaXMubWV0YWRhdGEpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZG9jIDogUG91Y2hEQi5Db3JlLkNoYW5nZXNNZXRhICYgUG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+ID0gdGhpcy5oeWRyYXRvci5kZWh5ZHJhdGUoZW50aXR5LCB0aGlzLm1ldGFkYXRhLCB7IGluY2x1ZGVSZXY6IG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5VcGRhdGUgfHwgb3BlcmF0aW9uID09PSBCdWxrT3BlcmF0aW9uLkRlbGV0ZSB9KTtcbiAgICAgICAgICAgIGlmKG9wZXJhdGlvbiA9PT0gQnVsa09wZXJhdGlvbi5EZWxldGUpIHtcbiAgICAgICAgICAgICAgICBkb2MuX2RlbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgfSkpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5kYi5idWxrRG9jcyhkb2NzKTtcbiAgICAgICAgY29uc3QgZXJyb3JzIDogUG91Y2hEQi5Db3JlLkVycm9yW10gPSByZXN1bHQuZmlsdGVyKHIgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsICdlcnJvcicpKTtcbiAgICAgICAgXG4gICAgICAgIGlmKDAgPCBlcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcnM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJlc3VsdC5mb3JFYWNoKChyZXMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihvcGVyYXRpb24gPT09IEJ1bGtPcGVyYXRpb24uRGVsZXRlKSB7XG4gICAgICAgICAgICAgICAgbWFya0RlbGV0ZWQoZW50aXRpZXNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmtJZFJldihlbnRpdGllc1tpbmRleF0sIHJlcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGVudGl0aWVzO1xuICAgIH1cbiAgICBcbiAgICBjcmVhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5DcmVhdGUpO1xuICAgIH1cbiAgICBcbiAgICB1cGRhdGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5VcGRhdGUpO1xuICAgIH1cbiAgICBcbiAgICBkZWxldGUoZW50aXRpZXMgOiBUW10pIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVsayhlbnRpdGllcywgQnVsa09wZXJhdGlvbi5EZWxldGUpO1xuICAgIH1cbn1cbiJdfQ==