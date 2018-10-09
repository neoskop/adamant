/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { populate, pushClassMetadata } from '../utils/metadata';
export class EntityMetadata {
}
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
export function Entity(name, options = {}) {
    return (target) => {
        pushClassMetadata(target, populate(new EntityMetadata(), Object.assign({ name, attachments: false }, options)));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbImFubm90YXRpb25zL2VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFRLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSXRFLE1BQU07Q0FLTDs7Ozs7Ozs7Ozs7Ozs7OztBQUVELE1BQU0saUJBQWlCLElBQWEsRUFBRSxVQUlsQyxFQUFFO0lBQ0YsT0FBTyxDQUFDLE1BQWlCLEVBQUUsRUFBRTtRQUN6QixpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksY0FBYyxFQUFFLGtCQUNuRCxJQUFJLEVBQ0osV0FBVyxFQUFFLEtBQUssSUFHZixPQUFPLEVBQ1osQ0FBQyxDQUFDO0tBQ1AsQ0FBQTtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3RvciwgcG9wdWxhdGUsIHB1c2hDbGFzc01ldGFkYXRhIH0gZnJvbSAnLi4vdXRpbHMvbWV0YWRhdGEnO1xuaW1wb3J0IHsgSHlkcmF0b3IgfSBmcm9tICcuLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuLi92YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRW50aXR5TWV0YWRhdGEge1xuICAgIG5hbWUhOiBzdHJpbmc7XG4gICAgYXR0YWNobWVudHMhOiBib29sZWFuO1xuICAgIGh5ZHJhdG9yPzogQ3RvcjxIeWRyYXRvcj47XG4gICAgdmFsaWRhdG9yPzogQ3RvcjxWYWxpZGF0b3I+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRW50aXR5KG5hbWUgOiBzdHJpbmcsIG9wdGlvbnM6IHtcbiAgICBhdHRhY2htZW50cz86IGJvb2xlYW47XG4gICAgaHlkcmF0b3I/OiBDdG9yPEh5ZHJhdG9yPjtcbiAgICB2YWxpZGF0b3I/OiBDdG9yPFZhbGlkYXRvcj47XG59ID0ge30pIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRW50aXR5TWV0YWRhdGEoKSwge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzOiBmYWxzZSxcbiAgICAgICAgICAgIC8vIGh5ZHJhdG9yOiBIeWRyYXRvckltcGwsXG4gICAgICAgICAgICAvLyB2YWxpZGF0b3I6IFZhbGlkYXRvckltcGwsXG4gICAgICAgICAgICAuLi5vcHRpb25zXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG4iXX0=