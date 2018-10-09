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
HasManyMapMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HasManyMapMetadata, _super);
    function HasManyMapMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HasManyMapMetadata;
}(RelationMetadata));
/**
 * @template T
 */
export { HasManyMapMetadata };
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
export function HasManyMap(type, options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMapMetadata(), tslib_1.__assign({ type: type, required: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLW1hbnktbWFwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbImFubm90YXRpb25zL2hhcy1tYW55LW1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM5QyxPQUFPLEVBQVEsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFHekU7OztBQUFBO0lBQTJDLDhDQUFtQjs7Ozs2QkFKOUQ7RUFJMkMsZ0JBQWdCLEVBQU0sQ0FBQTs7OztBQUFqRSw4QkFBaUU7Ozs7Ozs7QUFFakUsTUFBTSxxQkFBd0IsSUFBMEIsRUFBRSxPQUFpRDtJQUFqRCx3QkFBQSxFQUFBLFlBQWlEO0lBQ3ZHLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7UUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksa0JBQWtCLEVBQUUscUJBQ2hGLElBQUksTUFBQSxFQUNKLFFBQVEsRUFBRSxLQUFLLElBQ1osT0FBTyxFQUNaLENBQUMsQ0FBQTtLQUNOLENBQUE7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbGF0aW9uTWV0YWRhdGEgfSBmcm9tICcuL3JlbGF0aW9uJztcbmltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoUHJvcGVydHlNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IEZvcndhcmRSZWZGbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgSGFzTWFueU1hcE1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSGFzTWFueU1hcDxUPih0eXBlOiBDdG9yPFQ+fEZvcndhcmRSZWZGbiwgb3B0aW9uczogeyByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSGFzTWFueU1hcE1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiJdfQ==