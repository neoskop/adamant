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
InlineMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(InlineMetadata, _super);
    function InlineMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InlineMetadata;
}(RelationMetadata));
/**
 * @template T
 */
export { InlineMetadata };
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
export function Inline(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new InlineMetadata(), tslib_1.__assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbImFubm90YXRpb25zL2lubGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM5QyxPQUFPLEVBQVEsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFHekU7OztBQUFBO0lBQXVDLDBDQUFtQjs7Ozt5QkFKMUQ7RUFJdUMsZ0JBQWdCLEVBQU0sQ0FBQTs7OztBQUE3RCwwQkFBNkQ7Ozs7OztBQUU3RCxNQUFNLGlCQUFvQixPQUE4RTtJQUE5RSx3QkFBQSxFQUFBLFlBQThFO0lBQ3BHLE9BQU8sVUFBQyxNQUFjLEVBQUUsUUFBeUI7UUFDN0Msb0JBQW9CLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksY0FBYyxFQUFFLHFCQUM1RSxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMxRCxRQUFRLEVBQUUsS0FBSyxJQUNaLE9BQU8sRUFDWixDQUFDLENBQUE7S0FDTixDQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWxhdGlvbk1ldGFkYXRhIH0gZnJvbSAnLi9yZWxhdGlvbic7XG5pbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBGb3J3YXJkUmVmRm4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIElubGluZU1ldGFkYXRhPFQ+IGV4dGVuZHMgUmVsYXRpb25NZXRhZGF0YTxUPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gSW5saW5lPFQ+KG9wdGlvbnM6IHsgdHlwZT86IEN0b3I8VD58Rm9yd2FyZFJlZkZuLCByZXF1aXJlZD86IGJvb2xlYW4sIGRlZmF1bHQ/OiBUIH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgSW5saW5lTWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIl19