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
    var resolve;
    /** @type {?} */
    var reject;
    /** @type {?} */
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return Object.assign(promise, { resolve: resolve, reject: reject });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsidXRpbHMvZGVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxNQUFNOztJQUNGLElBQUksT0FBTyxDQUdSOztJQUhILElBQW9CLE1BQU0sQ0FHdkI7O0lBSEgsSUFBa0MsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLFVBQUMsR0FBRyxFQUFFLEdBQUc7UUFDaEUsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLE1BQU0sR0FBRyxHQUFHLENBQUM7S0FDaEIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztDQUN0RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIERlZmZlcmVkPFQ+ID0gUHJvbWlzZTxUPiAmIHsgcmVzb2x2ZSh2IDogVCkgOiB2b2lkLCByZWplY3QoZSA6IGFueSkgOiB2b2lkIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZlcjxUPigpIDogRGVmZmVyZWQ8VD4ge1xuICAgIGxldCByZXNvbHZlIDogYW55ICwgcmVqZWN0IDogYW55LCBwcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlcywgcmVqKSA9PiB7XG4gICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgIHJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwcm9taXNlLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbn1cbiJdfQ==