/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { populate, pushClassMetadata } from '../utils/metadata';
var EntityMetadata = /** @class */ (function () {
    function EntityMetadata() {
    }
    return EntityMetadata;
}());
export { EntityMetadata };
if (false) {
    /** @type {?} */
    EntityMetadata.prototype.name;
    /** @type {?} */
    EntityMetadata.prototype.attachments;
    /** @type {?} */
    EntityMetadata.prototype.hydrator;
    /** @type {?} */
    EntityMetadata.prototype.validator;
}
/**
 * @param {?} name
 * @param {?=} options
 * @return {?}
 */
export function Entity(name, options) {
    if (options === void 0) { options = {}; }
    return function (target) {
        pushClassMetadata(target, populate(new EntityMetadata(), tslib_1.__assign({ name: name, attachments: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbImFubm90YXRpb25zL2VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBUSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUl0RSxJQUFBOzs7eUJBSkE7SUFTQyxDQUFBO0FBTEQsMEJBS0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxNQUFNLGlCQUFpQixJQUFhLEVBQUUsT0FJaEM7SUFKZ0Msd0JBQUEsRUFBQSxZQUloQztJQUNGLE9BQU8sVUFBQyxNQUFpQjtRQUNyQixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksY0FBYyxFQUFFLHFCQUNuRCxJQUFJLE1BQUEsRUFDSixXQUFXLEVBQUUsS0FBSyxJQUdmLE9BQU8sRUFDWixDQUFDLENBQUM7S0FDUCxDQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdG9yLCBwb3B1bGF0ZSwgcHVzaENsYXNzTWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgeyBIeWRyYXRvciB9IGZyb20gJy4uL2h5ZHJhdG9yJztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4uL3ZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHlNZXRhZGF0YSB7XG4gICAgbmFtZSE6IHN0cmluZztcbiAgICBhdHRhY2htZW50cyE6IGJvb2xlYW47XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRpdHkobmFtZSA6IHN0cmluZywgb3B0aW9uczoge1xuICAgIGF0dGFjaG1lbnRzPzogYm9vbGVhbjtcbiAgICBoeWRyYXRvcj86IEN0b3I8SHlkcmF0b3I+O1xuICAgIHZhbGlkYXRvcj86IEN0b3I8VmFsaWRhdG9yPjtcbn0gPSB7fSkgOiBDbGFzc0RlY29yYXRvciB7XG4gICAgcmV0dXJuICh0YXJnZXQgOiBGdW5jdGlvbikgPT4ge1xuICAgICAgICBwdXNoQ2xhc3NNZXRhZGF0YSh0YXJnZXQsIHBvcHVsYXRlKG5ldyBFbnRpdHlNZXRhZGF0YSgpLCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgYXR0YWNobWVudHM6IGZhbHNlLFxuICAgICAgICAgICAgLy8gaHlkcmF0b3I6IEh5ZHJhdG9ySW1wbCxcbiAgICAgICAgICAgIC8vIHZhbGlkYXRvcjogVmFsaWRhdG9ySW1wbCxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpO1xuICAgIH1cbn1cbiJdfQ==