/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class QueryBuilder {
    /**
     * @param {?} repository
     * @param {?} head
     * @param {?} tail
     */
    constructor(repository, head, tail) {
        this.repository = repository;
        this._selector = {};
        this._sort = [];
        this._selector._id = {
            $gt: head,
            $lt: tail
        };
    }
    /**
     * @param {?} fieldOrSelector
     * @param {?=} condition
     * @return {?}
     */
    selector(fieldOrSelector, condition) {
        if (typeof fieldOrSelector === 'string') {
            if (typeof condition !== 'object') {
                condition = {
                    $eq: condition
                };
            }
            if (fieldOrSelector in this._selector) {
                Object.assign(this._selector[fieldOrSelector], condition);
            }
            else {
                this._selector[fieldOrSelector] = condition;
            }
        }
        else {
            for (let key in fieldOrSelector) {
                this.selector(key, fieldOrSelector[key]);
            }
        }
        return this;
    }
    /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    sort(propertyOrSort, direction) {
        if (typeof propertyOrSort === 'string' && direction) {
            this._sort.push({ [propertyOrSort]: direction });
        }
        else {
            this._sort.push(propertyOrSort);
        }
        return this;
    }
    /**
     * @param {?} limit
     * @return {?}
     */
    limit(limit) {
        this._limit = limit;
        return this;
    }
    /**
     * @param {?} skip
     * @return {?}
     */
    skip(skip) {
        this._skip = skip;
        return this;
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    resolve(options) {
        return this.repository.executeQuery(this, options);
    }
    /**
     * @return {?}
     */
    toFindRequest() {
        /** @type {?} */
        const req = {
            selector: this._selector
        };
        if (0 < this._sort.length) {
            req.sort = this._sort;
        }
        if (this._limit != null) {
            req.limit = this._limit;
        }
        if (this._skip != null) {
            req.skip = this._skip;
        }
        return req;
    }
}
if (false) {
    /** @type {?} */
    QueryBuilder.prototype._selector;
    /** @type {?} */
    QueryBuilder.prototype._sort;
    /** @type {?} */
    QueryBuilder.prototype._limit;
    /** @type {?} */
    QueryBuilder.prototype._skip;
    /** @type {?} */
    QueryBuilder.prototype.repository;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJxdWVyeS1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQSxNQUFNOzs7Ozs7SUFPRixZQUErQixVQUFpQyxFQUFFLElBQWEsRUFBRSxJQUFhO1FBQS9ELGVBQVUsR0FBVixVQUFVLENBQXVCO3lCQUxsQixFQUFFO3FCQUN1QixFQUFFO1FBS3JFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHO1lBQ2pCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsR0FBRyxFQUFFLElBQUk7U0FDWixDQUFBO0tBQ0o7Ozs7OztJQUlELFFBQVEsQ0FBQyxlQUE4QyxFQUFFLFNBQWdHO1FBQ3JKLElBQUcsT0FBTyxlQUFlLEtBQUssUUFBUSxFQUFFO1lBQ3BDLElBQUcsT0FBTyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUM5QixTQUFTLEdBQUc7b0JBQ1IsR0FBRyxFQUFFLFNBQVM7aUJBQ2pCLENBQUE7YUFDSjtZQUNELElBQUcsZUFBZSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBRWxDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRSxlQUFlLENBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQTthQUM5RDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFFLGVBQWUsQ0FBRSxHQUFHLFNBQVMsQ0FBQzthQUNqRDtTQUNKO2FBQU07WUFDSCxLQUFJLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7OztJQUlELElBQUksQ0FBQyxjQUE4RCxFQUFFLFNBQTJCO1FBQzVGLElBQUcsT0FBTyxjQUFjLEtBQUssUUFBUSxJQUFJLFNBQVMsRUFBRTtZQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUVELEtBQUssQ0FBQyxLQUFjO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7O0lBRUQsSUFBSSxDQUFDLElBQWE7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUVELE9BQU8sQ0FBQyxPQUF3QjtRQUM1QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUN0RDs7OztJQUVELGFBQWE7O1FBQ1QsTUFBTSxHQUFHLEdBQWlDO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMzQixDQUFDO1FBRUYsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdEIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNwQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDM0I7UUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELE9BQU8sR0FBRyxDQUFDO0tBQ2Q7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFkYW1hbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEh5ZHJhdGVPcHRpb25zIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBRdWVyeUJ1aWxkZXI8VD4ge1xuICAgIFxuICAgIHByb3RlY3RlZCBfc2VsZWN0b3IgOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgPSB7fTtcbiAgICBwcm90ZWN0ZWQgX3NvcnQgOiBBcnJheTxzdHJpbmd8e1twcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYyd9PiA9IFtdO1xuICAgIHByb3RlY3RlZCBfbGltaXQ/IDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfc2tpcD8gOiBudW1iZXI7XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlYWRvbmx5IHJlcG9zaXRvcnkgOiBBZGFtYW50UmVwb3NpdG9yeTxUPiwgaGVhZCA6IHN0cmluZywgdGFpbCA6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9zZWxlY3Rvci5faWQgPSB7XG4gICAgICAgICAgICAkZ3Q6IGhlYWQsXG4gICAgICAgICAgICAkbHQ6IHRhaWxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBzZWxlY3RvcihmaWVsZCA6IHN0cmluZywgY29uZGl0aW9uIDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yIHwgUG91Y2hEQi5GaW5kLkNvbmRpdGlvbk9wZXJhdG9ycyB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pIDogdGhpcztcbiAgICBzZWxlY3RvcihzZWxlY3RvciA6IFBvdWNoREIuRmluZC5TZWxlY3RvcikgOiB0aGlzO1xuICAgIHNlbGVjdG9yKGZpZWxkT3JTZWxlY3RvciA6IHN0cmluZ3xQb3VjaERCLkZpbmQuU2VsZWN0b3IsIGNvbmRpdGlvbj8gOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgfCBQb3VjaERCLkZpbmQuQ29uZGl0aW9uT3BlcmF0b3JzIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbikgOiB0aGlzIHtcbiAgICAgICAgaWYodHlwZW9mIGZpZWxkT3JTZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjb25kaXRpb24gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY29uZGl0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAkZXE6IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGZpZWxkT3JTZWxlY3RvciBpbiB0aGlzLl9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fc2VsZWN0b3JbIGZpZWxkT3JTZWxlY3RvciBdLCBjb25kaXRpb24pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yWyBmaWVsZE9yU2VsZWN0b3IgXSA9IGNvbmRpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQga2V5IGluIGZpZWxkT3JTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0b3Ioa2V5LCBmaWVsZE9yU2VsZWN0b3Jba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNvcnQocHJvcGVydHkgOiBzdHJpbmcsIGRpcmVjdGlvbj8gOiAnYXNjJyB8ICdkZXNjJykgOiB0aGlzO1xuICAgIHNvcnQoc29ydCA6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiAnYXNjJyB8ICdkZXNjJyB9KSA6IHRoaXM7XG4gICAgc29ydChwcm9wZXJ0eU9yU29ydCA6IHN0cmluZ3x7IFtwcm9wTmFtZTogc3RyaW5nXTogJ2FzYycgfCAnZGVzYycgfSwgZGlyZWN0aW9uPyA6ICdhc2MnIHwgJ2Rlc2MnKSA6IHRoaXMge1xuICAgICAgICBpZih0eXBlb2YgcHJvcGVydHlPclNvcnQgPT09ICdzdHJpbmcnICYmIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHsgW3Byb3BlcnR5T3JTb3J0XTogZGlyZWN0aW9uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc29ydC5wdXNoKHByb3BlcnR5T3JTb3J0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgbGltaXQobGltaXQgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX2xpbWl0ID0gbGltaXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBza2lwKHNraXAgOiBudW1iZXIpIDogdGhpcyB7XG4gICAgICAgIHRoaXMuX3NraXAgPSBza2lwO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgcmVzb2x2ZShvcHRpb25zPzogSHlkcmF0ZU9wdGlvbnMpIDogUHJvbWlzZTxUW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeS5leGVjdXRlUXVlcnkodGhpcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIFxuICAgIHRvRmluZFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnN0IHJlcSA6IFBvdWNoREIuRmluZC5GaW5kUmVxdWVzdDxUPiA9IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiB0aGlzLl9zZWxlY3RvclxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgaWYoMCA8IHRoaXMuX3NvcnQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXEuc29ydCA9IHRoaXMuX3NvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX2xpbWl0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5saW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLl9za2lwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJlcS5za2lwID0gdGhpcy5fc2tpcDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlcTtcbiAgICB9XG59XG4iXX0=