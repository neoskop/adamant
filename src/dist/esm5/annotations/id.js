/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { populate, pushPropertyMetadata } from '../utils/metadata';
import 'reflect-metadata';
import { PropertyMetadata } from './property';
/** @enum {string} */
var IdStrategy = {
    Static: 'static',
};
export { IdStrategy };
var IdMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(IdMetadata, _super);
    function IdMetadata() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.required = true;
        return _this;
    }
    return IdMetadata;
}(PropertyMetadata));
export { IdMetadata };
if (false) {
    /** @type {?} */
    IdMetadata.prototype.strategy;
    /** @type {?} */
    IdMetadata.prototype.required;
}
/**
 * @param {?=} options
 * @return {?}
 */
export function Id(options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new IdMetadata(), tslib_1.__assign({ strategy: IdStrategy.Static, type: Reflect.getMetadata('design:type', target, property) }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbnMvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkUsT0FBTyxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsZ0JBQWdCLEVBQVEsTUFBTSxZQUFZLENBQUM7OztJQUdoRCxRQUFTLFFBQVE7OztBQUtyQixJQUFBO0lBQWdDLHNDQUFnQjs7O3lCQUV4QixJQUFJOzs7cUJBWjVCO0VBVWdDLGdCQUFnQixFQUcvQyxDQUFBO0FBSEQsc0JBR0M7Ozs7Ozs7Ozs7O0FBRUQsTUFBTSxhQUFhLE9BQW9EO0lBQXBELHdCQUFBLEVBQUEsWUFBb0Q7SUFDbkUsT0FBTyxVQUFDLE1BQWMsRUFBRSxRQUF5QjtRQUM3QyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSSxVQUFVLEVBQUUscUJBQ3hFLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUMzQixJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUN2RCxPQUFPLEVBQ1osQ0FBQyxDQUFBO0tBQ04sQ0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcbmltcG9ydCB7IFByb3BlcnR5TWV0YWRhdGEsIFR5cGUgfSBmcm9tICcuL3Byb3BlcnR5JztcblxuZXhwb3J0IGVudW0gSWRTdHJhdGVneSB7XG4gICAgU3RhdGljID0gJ3N0YXRpYycsXG4gICAgLy8gVXVpZCA9ICd1dWlkJyxcbiAgICAvLyBJbmNyZW1lbnQgPSAnaW5jcmVtZW50J1xufVxuXG5leHBvcnQgY2xhc3MgSWRNZXRhZGF0YSBleHRlbmRzIFByb3BlcnR5TWV0YWRhdGEge1xuICAgIHN0cmF0ZWd5ITogSWRTdHJhdGVneTtcbiAgICByZWFkb25seSByZXF1aXJlZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJZChvcHRpb25zOiB7IHN0cmF0ZWd5PzogSWRTdHJhdGVneSwgdHlwZT86IFR5cGUgfSA9IHt9KSA6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIHBvcHVsYXRlKG5ldyBJZE1ldGFkYXRhKCksIHtcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBJZFN0cmF0ZWd5LlN0YXRpYyxcbiAgICAgICAgICAgIHR5cGU6IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjp0eXBlJywgdGFyZ2V0LCBwcm9wZXJ0eSksXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKVxuICAgIH1cbn1cbiJdfQ==