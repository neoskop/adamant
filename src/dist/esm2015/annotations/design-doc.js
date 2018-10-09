/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { populate, pushClassMetadata } from '../utils/metadata';
/**
 * @template T
 */
export class DesignDocMetadata {
}
if (false) {
    /** @type {?} */
    DesignDocMetadata.prototype.entity;
    /** @type {?} */
    DesignDocMetadata.prototype.name;
}
/**
 * @template T
 * @param {?} entity
 * @param {?} name
 * @return {?}
 */
export function DesignDoc(entity, name) {
    return (target) => {
        pushClassMetadata(target, populate(new DesignDocMetadata(), {
            entity,
            name
        }));
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzaWduLWRvYy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJhbm5vdGF0aW9ucy9kZXNpZ24tZG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVEsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFdEUsTUFBTTtDQUdMOzs7Ozs7Ozs7Ozs7O0FBTUQsTUFBTSxvQkFBdUIsTUFBZ0IsRUFBRSxJQUFZO0lBQ3ZELE9BQU8sQ0FBQyxNQUFpQixFQUFFLEVBQUU7UUFDekIsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixFQUFLLEVBQUU7WUFDM0QsTUFBTTtZQUNOLElBQUk7U0FDUCxDQUFDLENBQUMsQ0FBQztLQUNQLENBQUE7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN0b3IsIHBvcHVsYXRlLCBwdXNoQ2xhc3NNZXRhZGF0YSB9IGZyb20gJy4uL3V0aWxzL21ldGFkYXRhJztcblxuZXhwb3J0IGNsYXNzIERlc2lnbkRvY01ldGFkYXRhPFQ+IHtcbiAgICBlbnRpdHkhOiBDdG9yPFQ+O1xuICAgIG5hbWUhOiBzdHJpbmc7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgICBleHBvcnQgY29uc3QgZW1pdCA6IGFueTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERlc2lnbkRvYzxUPihlbnRpdHkgOiBDdG9yPFQ+LCBuYW1lOiBzdHJpbmcpIDogQ2xhc3NEZWNvcmF0b3Ige1xuICAgIHJldHVybiAodGFyZ2V0IDogRnVuY3Rpb24pID0+IHtcbiAgICAgICAgcHVzaENsYXNzTWV0YWRhdGEodGFyZ2V0LCBwb3B1bGF0ZShuZXcgRGVzaWduRG9jTWV0YWRhdGE8VD4oKSwge1xuICAgICAgICAgICAgZW50aXR5LFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICB9KSk7XG4gICAgfVxufVxuIl19