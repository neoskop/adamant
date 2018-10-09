/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { populate, pushPropertyMetadata } from '../utils/metadata';
/** @typedef {?} */
var Type;
export { Type };
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
export { PropertyMetadata };
if (false) {
    /** @type {?} */
    PropertyMetadata.prototype.type;
    /** @type {?} */
    PropertyMetadata.prototype.required;
    /** @type {?} */
    PropertyMetadata.prototype.default;
}
/**
 * @param {?=} options
 * @return {?}
 */
export function Property(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new PropertyMetadata(), tslib_1.__assign({ type: Reflect.getMetadata('design:type', target, property), required: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbnMvcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVEsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFJekUsSUFBQTs7Ozs7Ozs7SUFLSSxtQ0FBUTs7Ozs7SUFBUixVQUFTLEtBQVcsRUFBRSxHQUFxQjtRQUN2QyxJQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFhLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxpQkFBWSxDQUFDLENBQUM7U0FDaEc7S0FDSjsyQkFiTDtJQWNDLENBQUE7QUFWRCw0QkFVQzs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0sbUJBQW1CLE9BQWdFO0lBQWhFLHdCQUFBLEVBQUEsWUFBZ0U7SUFDckYsT0FBTyxVQUFDLE1BQWMsRUFBRSxRQUF5QjtRQUM3QyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxxQkFDOUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFDMUQsUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1osQ0FBQyxDQUFBO0tBQ04sQ0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuXG5leHBvcnQgdHlwZSBUeXBlID0gdHlwZW9mIEJvb2xlYW4gfCB0eXBlb2YgU3RyaW5nIHwgdHlwZW9mIE51bWJlciB8IHR5cGVvZiBPYmplY3QgfCB0eXBlb2YgRGF0ZSB8IEN0b3I8YW55PjtcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5TWV0YWRhdGEge1xuICAgIHR5cGUhOiBUeXBlO1xuICAgIHJlcXVpcmVkITogYm9vbGVhbjtcbiAgICBkZWZhdWx0PzogYW55O1xuICAgIFxuICAgIHZhbGlkYXRlKHZhbHVlIDogYW55LCBrZXkgOiBzdHJpbmcgfCBzeW1ib2wpIHtcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiBudWxsID09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFByb3BlcnR5IFwiJHt0eXBlb2Yga2V5ID09PSAnc3ltYm9sJyA/IFN5bWJvbC5rZXlGb3Ioa2V5KSA6IGtleX1cIiByZXF1aXJlZGApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvcGVydHkob3B0aW9uczogeyB0eXBlPzogVHlwZSwgcmVxdWlyZWQ/OiBib29sZWFuLCBkZWZhdWx0PzogYW55IH0gPSB7fSkgOiBQcm9wZXJ0eURlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQ6IE9iamVjdCwgcHJvcGVydHk6IHN0cmluZyB8IHN5bWJvbCkgPT4ge1xuICAgICAgICBwdXNoUHJvcGVydHlNZXRhZGF0YSh0YXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5LCBwb3B1bGF0ZShuZXcgUHJvcGVydHlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICB0eXBlOiBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246dHlwZScsIHRhcmdldCwgcHJvcGVydHkpLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9KSlcbiAgICB9XG59XG4iXX0=