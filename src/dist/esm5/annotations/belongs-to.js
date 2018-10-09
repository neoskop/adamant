/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { RelationMetadata } from './relation';
import { populate, pushPropertyMetadata } from '../utils/metadata';
/**
 * @template T
 */
var /**
 * @template T
 */
BelongsToMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(BelongsToMetadata, _super);
    function BelongsToMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BelongsToMetadata;
}(RelationMetadata));
/**
 * @template T
 */
export { BelongsToMetadata };
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
export function BelongsTo(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new BelongsToMetadata(), tslib_1.__assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVsb25ncy10by5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJhbm5vdGF0aW9ucy9iZWxvbmdzLXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzlDLE9BQU8sRUFBUSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUd6RTs7O0FBQUE7SUFBMEMsNkNBQW1COzs7OzRCQUo3RDtFQUkwQyxnQkFBZ0IsRUFBTSxDQUFBOzs7O0FBQWhFLDZCQUFnRTs7Ozs7O0FBRWhFLE1BQU0sb0JBQXVCLE9BQThFO0lBQTlFLHdCQUFBLEVBQUEsWUFBOEU7SUFDdkcsT0FBTyxVQUFDLE1BQWMsRUFBRSxRQUF5QjtRQUM3QyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxxQkFDL0UsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFDMUQsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1osQ0FBQyxDQUFBO0tBQ04sQ0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgRm9yd2FyZFJlZkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBCZWxvbmdzVG9NZXRhZGF0YTxUPiBleHRlbmRzIFJlbGF0aW9uTWV0YWRhdGE8VD4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEJlbG9uZ3NUbzxUPihvcHRpb25zOiB7IHR5cGU/OiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogVCB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IEJlbG9uZ3NUb01ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGU6IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eSksXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiJdfQ==