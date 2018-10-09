/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @typedef {?} */
var Deffered;
export { Deffered };
/**
 * @template T
 * @return {?}
 */
export function defer() {
    /** @type {?} */
    let resolve;
    /** @type {?} */
    let reject;
    /** @type {?} */
    let promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    return Object.assign(promise, { resolve, reject });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsidXRpbHMvZGVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNOztJQUNGLElBQUksT0FBTyxDQUdSOztJQUhILElBQW9CLE1BQU0sQ0FHdkI7O0lBSEgsSUFBa0MsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQ3BFLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDZCxNQUFNLEdBQUcsR0FBRyxDQUFDO0tBQ2hCLENBQUMsQ0FBQztJQUVILE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztDQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIERlZmZlcmVkPFQ+ID0gUHJvbWlzZTxUPiAmIHsgcmVzb2x2ZSh2IDogVCkgOiB2b2lkLCByZWplY3QoZSA6IGFueSkgOiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIDogRGVmZmVyZWQ8VD4ge1xuICAgIGxldCByZXNvbHZlIDogYW55ICwgcmVqZWN0IDogYW55LCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbn1cbiJdfQ==