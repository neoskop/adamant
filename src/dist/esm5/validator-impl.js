/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Validator } from './validator';
var ValidatorImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ValidatorImpl, _super);
    function ValidatorImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    ValidatorImpl.prototype.validate = /**
     * @template T
     * @param {?} entity
     * @param {?} metadata
     * @return {?}
     */
    function (entity, metadata) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var e_1, _a, _b, _c, _d, property, annotation, e_1_1;
            return tslib_1.__generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _e.trys.push([0, 5, 6, 7]);
                        _b = tslib_1.__values(metadata.properties), _c = _b.next();
                        _e.label = 1;
                    case 1:
                        if (!!_c.done) return [3 /*break*/, 4];
                        _d = tslib_1.__read(_c.value, 2), property = _d[0], annotation = _d[1];
                        return [4 /*yield*/, annotation.validate(entity[/** @type {?} */ (property)], property)];
                    case 2:
                        _e.sent();
                        _e.label = 3;
                    case 3:
                        _c = _b.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/, true];
                }
            });
        });
    };
    return ValidatorImpl;
}(Validator));
export { ValidatorImpl };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLWltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsidmFsaWRhdG9yLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBR3hDLElBQUE7SUFBbUMseUNBQVM7Ozs7Ozs7Ozs7SUFDbEMsZ0NBQVE7Ozs7OztJQUFkLFVBQWtCLE1BQVUsRUFBRSxRQUFzQjs7Ozs7Ozt3QkFDVixLQUFBLGlCQUFBLFFBQVEsQ0FBQyxVQUFVLENBQUE7Ozs7MERBQTdDLFFBQVEsUUFBQSxFQUFFLFVBQVUsUUFBQTt3QkFDNUIscUJBQU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLG1CQUFDLFFBQW1CLEVBQUMsRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQWhFLFNBQWdFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBR3JFLHNCQUFPLElBQUksRUFBQzs7OztLQUNmO3dCQVZMO0VBR21DLFNBQVMsRUFTM0MsQ0FBQTtBQVRELHlCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuaW1wb3J0IHsgTWV0YWRhdGEgfSBmcm9tICcuL21ldGFkYXRhJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRvckltcGwgZXh0ZW5kcyBWYWxpZGF0b3Ige1xuICAgIGFzeW5jIHZhbGlkYXRlPFQ+KGVudGl0eSA6IFQsIG1ldGFkYXRhIDogTWV0YWRhdGE8VD4pIDogUHJvbWlzZTx0cnVlPiB7XG4gICAgICAgIGZvcihjb25zdCBbIHByb3BlcnR5LCBhbm5vdGF0aW9uIF0gb2YgbWV0YWRhdGEucHJvcGVydGllcykge1xuICAgICAgICAgICAgYXdhaXQgYW5ub3RhdGlvbi52YWxpZGF0ZShlbnRpdHlbcHJvcGVydHkgYXMga2V5b2YgVF0sIHByb3BlcnR5KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxufVxuIl19