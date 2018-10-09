/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { populate, pushPropertyMetadata } from '../utils/metadata';
import 'reflect-metadata';
import { PropertyMetadata } from './property';
/** @enum {string} */
const IdStrategy = {
    Static: 'static',
};
export { IdStrategy };
export class IdMetadata extends PropertyMetadata {
    constructor() {
        super(...arguments);
        this.required = true;
    }
}
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
export function Id(options = {}) {
    return (target, property) => {
        pushPropertyMetadata(target.constructor, property, populate(new IdMetadata(), Object.assign({ strategy: IdStrategy.Static, type: Reflect.getMetadata('design:type', target, property) }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsiYW5ub3RhdGlvbnMvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBUSxNQUFNLFlBQVksQ0FBQzs7O0lBR2hELFFBQVMsUUFBUTs7O0FBS3JCLE1BQU0saUJBQWtCLFNBQVEsZ0JBQWdCOzs7d0JBRXhCLElBQUk7O0NBQzNCOzs7Ozs7Ozs7OztBQUVELE1BQU0sYUFBYSxVQUFrRCxFQUFFO0lBQ25FLE9BQU8sQ0FBQyxNQUFjLEVBQUUsUUFBeUIsRUFBRSxFQUFFO1FBQ2pELG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRSxrQkFDeEUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQzNCLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQ3ZELE9BQU8sRUFDWixDQUFDLENBQUE7S0FDTixDQUFBO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3B1bGF0ZSwgcHVzaFByb3BlcnR5TWV0YWRhdGEgfSBmcm9tICcuLi91dGlscy9tZXRhZGF0YSc7XG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xuaW1wb3J0IHsgUHJvcGVydHlNZXRhZGF0YSwgVHlwZSB9IGZyb20gJy4vcHJvcGVydHknO1xuXG5leHBvcnQgZW51bSBJZFN0cmF0ZWd5IHtcbiAgICBTdGF0aWMgPSAnc3RhdGljJyxcbiAgICAvLyBVdWlkID0gJ3V1aWQnLFxuICAgIC8vIEluY3JlbWVudCA9ICdpbmNyZW1lbnQnXG59XG5cbmV4cG9ydCBjbGFzcyBJZE1ldGFkYXRhIGV4dGVuZHMgUHJvcGVydHlNZXRhZGF0YSB7XG4gICAgc3RyYXRlZ3khOiBJZFN0cmF0ZWd5O1xuICAgIHJlYWRvbmx5IHJlcXVpcmVkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElkKG9wdGlvbnM6IHsgc3RyYXRlZ3k/OiBJZFN0cmF0ZWd5LCB0eXBlPzogVHlwZSB9ID0ge30pIDogUHJvcGVydHlEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5OiBzdHJpbmcgfCBzeW1ib2wpID0+IHtcbiAgICAgICAgcHVzaFByb3BlcnR5TWV0YWRhdGEodGFyZ2V0LmNvbnN0cnVjdG9yLCBwcm9wZXJ0eSwgcG9wdWxhdGUobmV3IElkTWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgc3RyYXRlZ3k6IElkU3RyYXRlZ3kuU3RhdGljLFxuICAgICAgICAgICAgdHlwZTogUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnR5cGUnLCB0YXJnZXQsIHByb3BlcnR5KSxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfSkpXG4gICAgfVxufVxuIl19