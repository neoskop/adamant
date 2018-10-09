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
HasManyMetadata = /** @class */ (function (_super) {
    tslib_1.__extends(HasManyMetadata, _super);
    function HasManyMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HasManyMetadata;
}(RelationMetadata));
/**
 * @template T
 */
export { HasManyMetadata };
/**
 * @template T
 * @param {?} type
 * @param {?=} options
 * @return {?}
 */
export function HasMany(type, options) {
    if (options === void 0) { options = {}; }
    return function (target, property) {
        pushPropertyMetadata(target.constructor, property, populate(new HasManyMetadata(), tslib_1.__assign({ type: type, required: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzLW1hbnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbnMvaGFzLW1hbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDOUMsT0FBTyxFQUFRLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBR3pFOzs7QUFBQTtJQUF3QywyQ0FBbUI7Ozs7MEJBSjNEO0VBSXdDLGdCQUFnQixFQUFNLENBQUE7Ozs7QUFBOUQsMkJBQThEOzs7Ozs7O0FBRTlELE1BQU0sa0JBQXFCLElBQTBCLEVBQUUsT0FBaUQ7SUFBakQsd0JBQUEsRUFBQSxZQUFpRDtJQUNwRyxPQUFPLFVBQUMsTUFBYyxFQUFFLFFBQXlCO1FBQzdDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGVBQWUsRUFBRSxxQkFDN0UsSUFBSSxNQUFBLEVBQ0osUUFBUSxFQUFFLEtBQUssSUFDWixPQUFPLEVBQ1osQ0FBQyxDQUFBO0tBQ04sQ0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVsYXRpb25NZXRhZGF0YSB9IGZyb20gJy4vcmVsYXRpb24nO1xuaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hQcm9wZXJ0eU1ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgRm9yd2FyZFJlZkZuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBIYXNNYW55TWV0YWRhdGE8VD4gZXh0ZW5kcyBSZWxhdGlvbk1ldGFkYXRhPFQ+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBIYXNNYW55PFQ+KHR5cGU6IEN0b3I8VD58Rm9yd2FyZFJlZkZuLCBvcHRpb25zOiB7IHJlcXVpcmVkPzogYm9vbGVhbiwgZGVmYXVsdD86IFQgfSA9IHt9KSA6IFByb3BlcnR5RGVjb3JhdG9yIHtcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0LCBwcm9wZXJ0eTogc3RyaW5nIHwgc3ltYm9sKSA9PiB7XG4gICAgICAgIHB1c2hQcm9wZXJ0eU1ldGFkYXRhKHRhcmdldC5jb25zdHJ1Y3RvciwgcHJvcGVydHksIHBvcHVsYXRlKG5ldyBIYXNNYW55TWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIl19