/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Validator } from './validator';
export class ValidatorImpl extends Validator {
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    validate(entity, metadata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            for (const [property, annotation] of metadata.properties) {
                yield annotation.validate(entity[/** @type {?} */ (property)], property);
            }
            return true;
        });
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsidmFsaWRhdG9yLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3hDLE1BQU0sb0JBQXFCLFNBQVEsU0FBUzs7Ozs7OztJQUNsQyxRQUFRLENBQUksTUFBVSxFQUFFLFFBQXNCOztZQUNoRCxLQUFJLE1BQU0sQ0FBRSxRQUFRLEVBQUUsVUFBVSxDQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtnQkFDdkQsTUFBTSxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sbUJBQUMsUUFBbUIsRUFBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsT0FBTyxJQUFJLENBQUM7O0tBQ2Y7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJy4vdmFsaWRhdG9yJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5cbmV4cG9ydCBjbGFzcyBWYWxpZGF0b3JJbXBsIGV4dGVuZHMgVmFsaWRhdG9yIHtcbiAgICBhc3luYyB2YWxpZGF0ZTxUPihlbnRpdHkgOiBULCBtZXRhZGF0YSA6IE1ldGFkYXRhPFQ+KSA6IFByb21pc2U8dHJ1ZT4ge1xuICAgICAgICBmb3IoY29uc3QgWyBwcm9wZXJ0eSwgYW5ub3RhdGlvbiBdIG9mIG1ldGFkYXRhLnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IGFubm90YXRpb24udmFsaWRhdGUoZW50aXR5W3Byb3BlcnR5IGFzIGtleW9mIFRdLCBwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbn1cbiJdfQ==