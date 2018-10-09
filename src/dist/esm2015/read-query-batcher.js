/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { defer } from './utils/defer';
export class ReadQueryBatcher {
    /**
     * @param {?} db
     */
    constructor(db) {
        this.db = db;
        this.queue = [];
    }
    /**
     * @template T
     * @param {?} keys
     * @return {?}
     */
    read(keys) {
        this.queue.push(...keys);
        return this.schedule().then(docs => {
            return keys
                .map(key => docs.find(doc => doc._id === key))
                .filter(Boolean)
                .map(doc => JSON.parse(JSON.stringify(doc)));
        });
    }
    /**
     * @template T
     * @return {?}
     */
    schedule() {
        if (!this.deffered) {
            setImmediate(() => {
                this.execute();
            });
            this.deffered = defer();
            this.deffered.then(() => {
                delete this.deffered;
            }, () => {
                delete this.deffered;
            });
        }
        return this.deffered;
    }
    /**
     * @return {?}
     */
    execute() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keys = this.queue.filter((v, i, a) => i === a.indexOf(v));
            this.queue = [];
            try {
                const { rows } = yield this.db.allDocs({
                    include_docs: true,
                    keys
                }); /** @type {?} */
                ((this.deffered)).resolve(rows.map(r => r.doc).filter(Boolean));
            }
            catch (e) {
                /** @type {?} */ ((this.deffered)).reject(e);
            }
        });
    }
}
if (false) {
    /** @type {?} */
    ReadQueryBatcher.prototype.queue;
    /** @type {?} */
    ReadQueryBatcher.prototype.deffered;
    /** @type {?} */
    ReadQueryBatcher.prototype.db;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC1xdWVyeS1iYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbInJlYWQtcXVlcnktYmF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFaEQsTUFBTTs7OztJQUlGLFlBQStCLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO3FCQUhqQyxFQUFFO0tBR21DOzs7Ozs7SUFFeEQsSUFBSSxDQUFJLElBQWU7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxJQUFJO2lCQUNOLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUNmLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEQsQ0FBQyxDQUFDO0tBQ047Ozs7O0lBRVMsUUFBUTtRQUNkLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsWUFBWSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTthQUN2QixFQUFFLEdBQUcsRUFBRTtnQkFDSixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7YUFDdkIsQ0FBQyxDQUFDO1NBQ047UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDeEI7Ozs7SUFFZSxPQUFPOzs7WUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVoQixJQUFJO2dCQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29CQUNuQyxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsSUFBSTtpQkFDUCxDQUFDLENBQUM7a0JBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQzlEO1lBQUMsT0FBTSxDQUFDLEVBQUU7bUNBQ1AsSUFBSSxDQUFDLFFBQVEsR0FBRSxNQUFNLENBQUMsQ0FBQzthQUMxQjs7S0FDSjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVmZXIsIERlZmZlcmVkIH0gZnJvbSAnLi91dGlscy9kZWZlcic7XG5cbmV4cG9ydCBjbGFzcyBSZWFkUXVlcnlCYXRjaGVyIHtcbiAgICBxdWV1ZSA6IHN0cmluZ1tdID0gW107XG4gICAgZGVmZmVyZWQ/IDogRGVmZmVyZWQ8UG91Y2hEQi5Db3JlLkRvY3VtZW50PGFueT5bXT47XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IGRiIDogUG91Y2hEQi5EYXRhYmFzZSkge31cbiAgICBcbiAgICByZWFkPFQ+KGtleXMgOiBzdHJpbmdbXSkgOiBQcm9taXNlPFBvdWNoREIuQ29yZS5Eb2N1bWVudDxUPltdPiB7XG4gICAgICAgIHRoaXMucXVldWUucHVzaCguLi5rZXlzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnNjaGVkdWxlPFQ+KCkudGhlbihkb2NzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBrZXlzXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gZG9jcy5maW5kKGRvYyA9PiBkb2MuX2lkID09PSBrZXkpKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICAgICAgICAubWFwKGRvYyA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRvYykpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBzY2hlZHVsZTxUPigpIDogRGVmZmVyZWQ8UG91Y2hEQi5Db3JlLkRvY3VtZW50PFQ+W10+IHtcbiAgICAgICAgaWYoIXRoaXMuZGVmZmVyZWQpIHtcbiAgICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGVmZmVyZWQgPSBkZWZlcigpO1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5kZWZmZXJlZFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRlZmZlcmVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVmZmVyZWQ7XG4gICAgfVxuICAgIFxuICAgIHByb3RlY3RlZCBhc3luYyBleGVjdXRlKCkge1xuICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5xdWV1ZS5maWx0ZXIoKHYsIGksIGEpID0+IGkgPT09IGEuaW5kZXhPZih2KSk7XG4gICAgICAgIHRoaXMucXVldWUgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IHJvd3MgfSA9IGF3YWl0IHRoaXMuZGIuYWxsRG9jcyh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZV9kb2NzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGtleXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRlZmZlcmVkIS5yZXNvbHZlKHJvd3MubWFwKHIgPT4gci5kb2MpLmZpbHRlcihCb29sZWFuKSk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCEucmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19