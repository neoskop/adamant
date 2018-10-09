/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { defer } from './utils/defer';
var ReadQueryBatcher = /** @class */ (function () {
    function ReadQueryBatcher(db) {
        this.db = db;
        this.queue = [];
    }
    /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    ReadQueryBatcher.prototype.read = /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    function (keys) {
        var _a;
        (_a = this.queue).push.apply(_a, tslib_1.__spread(keys));
        return this.schedule().then(function (docs) {
            return keys
                .map(function (key) { return docs.find(function (doc) { return doc._id === key; }); })
                .filter(Boolean)
                .map(function (doc) { return JSON.parse(JSON.stringify(doc)); });
        });
    };
    /**
     * @template T
     * @return {?}
     */
    ReadQueryBatcher.prototype.schedule = /**
     * @template T
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.deffered) {
            setImmediate(function () {
                _this.execute();
            });
            this.deffered = defer();
            this.deffered.then(function () {
                delete _this.deffered;
            }, function () {
                delete _this.deffered;
            });
        }
        return this.deffered;
    };
    /**
     * @return {?}
     */
    ReadQueryBatcher.prototype.execute = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keys, rows, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = this.queue.filter(function (v, i, a) { return i === a.indexOf(v); });
                        this.queue = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.db.allDocs({
                                include_docs: true,
                                keys: keys
                            })];
                    case 2:
                        rows = (_a.sent()).rows;
                        ((this.deffered)).resolve(rows.map(function (r) { return r.doc; }).filter(Boolean));
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        /** @type {?} */ ((this.deffered)).reject(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ReadQueryBatcher;
}());
export { ReadQueryBatcher };
if (false) {
    /** @type {?} */
    ReadQueryBatcher.prototype.queue;
    /** @type {?} */
    ReadQueryBatcher.prototype.deffered;
    /** @type {?} */
    ReadQueryBatcher.prototype.db;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1xdWVyeS1iYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbInJlYWQtcXVlcnktYmF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFaEQsSUFBQTtJQUlJLDBCQUErQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtxQkFIakMsRUFBRTtLQUdtQzs7Ozs7O0lBRXhELCtCQUFJOzs7OztJQUFKLFVBQVEsSUFBZTs7UUFDbkIsQ0FBQSxLQUFBLElBQUksQ0FBQyxLQUFLLENBQUEsQ0FBQyxJQUFJLDRCQUFJLElBQUksR0FBRTtRQUV6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQy9CLE9BQU8sSUFBSTtpQkFDTixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQWYsQ0FBZSxDQUFDLEVBQWpDLENBQWlDLENBQUM7aUJBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztTQUNwRCxDQUFDLENBQUM7S0FDTjs7Ozs7SUFFUyxtQ0FBUTs7OztJQUFsQjtRQUFBLGlCQWNDO1FBYkcsSUFBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixZQUFZLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFBO2FBQ3ZCLEVBQUU7Z0JBQ0MsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFBO2FBQ3ZCLENBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3hCOzs7O0lBRWUsa0NBQU87OztJQUF2Qjs7Ozs7O3dCQUNVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQzt3QkFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Ozs7d0JBR0sscUJBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0NBQ25DLFlBQVksRUFBRSxJQUFJO2dDQUNsQixJQUFJLE1BQUE7NkJBQ1AsQ0FBQyxFQUFBOzt3QkFITSxJQUFJLEdBQUssQ0FBQSxTQUdmLENBQUEsS0FIVTswQkFLWixJQUFJLENBQUMsUUFBUSxHQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDOzs7OzJDQUUzRCxJQUFJLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQyxHQUFDOzs7Ozs7S0FFOUI7MkJBakRMO0lBa0RDLENBQUE7QUFoREQsNEJBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmZXIsIERlZmZlcmVkIH0gZnJvbSAnLi91dGlscy9kZWZlcic7XG5cbmV4cG9ydCBjbGFzcyBSZWFkUXVlcnlCYXRjaGVyIHtcbiAgICBxdWV1ZSA6IHN0cmluZ1tdID0gW107XG4gICAgZGVmZmVyZWQ/IDogRGVmZmVyZWQ8UG91Y2hEQi5Db3JlLkRvY3VtZW50PGFueT5bXT47XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGRiIDogUG91Y2hEQi5EYXRhYmFzZSkge31cbiAgICBcbiAgICByZWFkPFQ+KGtleXMgOiBzdHJpbmdbXSkgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaCguLi5rZXlzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlPFQ+KCkudGhlbihkb2NzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBrZXlzXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZG9jcy5maW5kKGRvYyA9PiBkb2MuX2lkID09PSBrZXkpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAubWFwKGRvYyA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRvYykpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBzY2hlZHVsZTxUPigpIDogRGVmZmVyZWQ8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+W10+IHtcbiAgICAgICAgaWYoIXRoaXMuZGVmZmVyZWQpIHtcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQgPSBkZWZlcigpO1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kZWZmZXJlZFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRlZmZlcmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmZmVyZWQ7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBhc3luYyBleGVjdXRlKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5xdWV1ZS5maWx0ZXIoKHYsIGksIGEpID0+IGkgPT09IGEuaW5kZXhPZih2KSk7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHRoaXMuZGIuYWxsRG9jcyh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGtleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkIS5yZXNvbHZlKHJvd3MubWFwKHIgPT4gci5kb2MpLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCEucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19