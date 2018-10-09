/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
QueryBuilder = /** @class */ (function () {
    function QueryBuilder(repository, head, tail) {
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
    QueryBuilder.prototype.selector = /**
     * @param {?} fieldOrSelector
     * @param {?=} condition
     * @return {?}
     */
    function (fieldOrSelector, condition) {
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
            for (var key in fieldOrSelector) {
                this.selector(key, fieldOrSelector[key]);
            }
        }
        return this;
    };
    /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    QueryBuilder.prototype.sort = /**
     * @param {?} propertyOrSort
     * @param {?=} direction
     * @return {?}
     */
    function (propertyOrSort, direction) {
        var _a;
        if (typeof propertyOrSort === 'string' && direction) {
            this._sort.push((_a = {}, _a[propertyOrSort] = direction, _a));
        }
        else {
            this._sort.push(propertyOrSort);
        }
        return this;
    };
    /**
     * @param {?} limit
     * @return {?}
     */
    QueryBuilder.prototype.limit = /**
     * @param {?} limit
     * @return {?}
     */
    function (limit) {
        this._limit = limit;
        return this;
    };
    /**
     * @param {?} skip
     * @return {?}
     */
    QueryBuilder.prototype.skip = /**
     * @param {?} skip
     * @return {?}
     */
    function (skip) {
        this._skip = skip;
        return this;
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    QueryBuilder.prototype.resolve = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return this.repository.executeQuery(this, options);
    };
    /**
     * @return {?}
     */
    QueryBuilder.prototype.toFindRequest = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var req = {
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
    };
    return QueryBuilder;
}());
/**
 * @template T
 */
export { QueryBuilder };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZW9za29wL2FkYW1hbnQvIiwic291cmNlcyI6WyJxdWVyeS1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFHQTs7O0FBQUE7SUFPSSxzQkFBK0IsVUFBaUMsRUFBRSxJQUFhLEVBQUUsSUFBYTtRQUEvRCxlQUFVLEdBQVYsVUFBVSxDQUF1Qjt5QkFMbEIsRUFBRTtxQkFDdUIsRUFBRTtRQUtyRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRztZQUNqQixHQUFHLEVBQUUsSUFBSTtZQUNULEdBQUcsRUFBRSxJQUFJO1NBQ1osQ0FBQTtLQUNKOzs7Ozs7SUFJRCwrQkFBUTs7Ozs7SUFBUixVQUFTLGVBQThDLEVBQUUsU0FBZ0c7UUFDckosSUFBRyxPQUFPLGVBQWUsS0FBSyxRQUFRLEVBQUU7WUFDcEMsSUFBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLFNBQVMsR0FBRztvQkFDUixHQUFHLEVBQUUsU0FBUztpQkFDakIsQ0FBQTthQUNKO1lBQ0QsSUFBRyxlQUFlLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFFbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFFLGVBQWUsQ0FBRSxFQUFFLFNBQVMsQ0FBQyxDQUFBO2FBQzlEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLENBQUUsZUFBZSxDQUFFLEdBQUcsU0FBUyxDQUFDO2FBQ2pEO1NBQ0o7YUFBTTtZQUNILEtBQUksSUFBSSxHQUFHLElBQUksZUFBZSxFQUFFO2dCQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM1QztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0lBSUQsMkJBQUk7Ozs7O0lBQUosVUFBSyxjQUE4RCxFQUFFLFNBQTJCOztRQUM1RixJQUFHLE9BQU8sY0FBYyxLQUFLLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQUcsR0FBQyxjQUFjLElBQUcsU0FBUyxNQUFHLENBQUM7U0FDcEQ7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7SUFFRCw0QkFBSzs7OztJQUFMLFVBQU0sS0FBYztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztLQUNmOzs7OztJQUVELDJCQUFJOzs7O0lBQUosVUFBSyxJQUFhO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUM7S0FDZjs7Ozs7SUFFRCw4QkFBTzs7OztJQUFQLFVBQVEsT0FBd0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCxvQ0FBYTs7O0lBQWI7O1FBQ0ksSUFBTSxHQUFHLEdBQWlDO1lBQ3RDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMzQixDQUFDO1FBRUYsSUFBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdEIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3pCO1FBRUQsSUFBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNwQixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDM0I7UUFFRCxJQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ25CLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUN6QjtRQUVELE9BQU8sR0FBRyxDQUFDO0tBQ2Q7dUJBbkZMO0lBb0ZDLENBQUE7Ozs7QUFqRkQsd0JBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWRhbWFudFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgSHlkcmF0ZU9wdGlvbnMgfSBmcm9tICcuL2h5ZHJhdG9yJztcblxuZXhwb3J0IGNsYXNzIFF1ZXJ5QnVpbGRlcjxUPiB7XG4gICAgXG4gICAgcHJvdGVjdGVkIF9zZWxlY3RvciA6IFBvdWNoREIuRmluZC5TZWxlY3RvciA9IHt9O1xuICAgIHByb3RlY3RlZCBfc29ydCA6IEFycmF5PHN0cmluZ3x7W3Byb3BOYW1lOiBzdHJpbmddOiAnYXNjJyB8ICdkZXNjJ30+ID0gW107XG4gICAgcHJvdGVjdGVkIF9saW1pdD8gOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9za2lwPyA6IG51bWJlcjtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgcmVwb3NpdG9yeSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+LCBoZWFkIDogc3RyaW5nLCB0YWlsIDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdG9yLl9pZCA9IHtcbiAgICAgICAgICAgICRndDogaGVhZCxcbiAgICAgICAgICAgICRsdDogdGFpbFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdG9yKGZpZWxkIDogc3RyaW5nLCBjb25kaXRpb24gOiBQb3VjaERCLkZpbmQuU2VsZWN0b3IgfCBQb3VjaERCLkZpbmQuQ29uZGl0aW9uT3BlcmF0b3JzIHwgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbikgOiB0aGlzO1xuICAgIHNlbGVjdG9yKHNlbGVjdG9yIDogUG91Y2hEQi5GaW5kLlNlbGVjdG9yKSA6IHRoaXM7XG4gICAgc2VsZWN0b3IoZmllbGRPclNlbGVjdG9yIDogc3RyaW5nfFBvdWNoREIuRmluZC5TZWxlY3RvciwgY29uZGl0aW9uPyA6IFBvdWNoREIuRmluZC5TZWxlY3RvciB8IFBvdWNoREIuRmluZC5Db25kaXRpb25PcGVyYXRvcnMgfCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuKSA6IHRoaXMge1xuICAgICAgICBpZih0eXBlb2YgZmllbGRPclNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYodHlwZW9mIGNvbmRpdGlvbiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25kaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgICRlcTogY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZmllbGRPclNlbGVjdG9yIGluIHRoaXMuX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLl9zZWxlY3RvclsgZmllbGRPclNlbGVjdG9yIF0sIGNvbmRpdGlvbilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0b3JbIGZpZWxkT3JTZWxlY3RvciBdID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yKGxldCBrZXkgaW4gZmllbGRPclNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RvcihrZXksIGZpZWxkT3JTZWxlY3RvcltrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgXG4gICAgc29ydChwcm9wZXJ0eSA6IHN0cmluZywgZGlyZWN0aW9uPyA6ICdhc2MnIHwgJ2Rlc2MnKSA6IHRoaXM7XG4gICAgc29ydChzb3J0IDogeyBbcHJvcE5hbWU6IHN0cmluZ106ICdhc2MnIHwgJ2Rlc2MnIH0pIDogdGhpcztcbiAgICBzb3J0KHByb3BlcnR5T3JTb3J0IDogc3RyaW5nfHsgW3Byb3BOYW1lOiBzdHJpbmddOiAnYXNjJyB8ICdkZXNjJyB9LCBkaXJlY3Rpb24/IDogJ2FzYycgfCAnZGVzYycpIDogdGhpcyB7XG4gICAgICAgIGlmKHR5cGVvZiBwcm9wZXJ0eU9yU29ydCA9PT0gJ3N0cmluZycgJiYgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0LnB1c2goeyBbcHJvcGVydHlPclNvcnRdOiBkaXJlY3Rpb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zb3J0LnB1c2gocHJvcGVydHlPclNvcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBsaW1pdChsaW1pdCA6IG51bWJlcikgOiB0aGlzIHtcbiAgICAgICAgdGhpcy5fbGltaXQgPSBsaW1pdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHNraXAoc2tpcCA6IG51bWJlcikgOiB0aGlzIHtcbiAgICAgICAgdGhpcy5fc2tpcCA9IHNraXA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICByZXNvbHZlKG9wdGlvbnM/OiBIeWRyYXRlT3B0aW9ucykgOiBQcm9taXNlPFRbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXBvc2l0b3J5LmV4ZWN1dGVRdWVyeSh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgXG4gICAgdG9GaW5kUmVxdWVzdCgpIHtcbiAgICAgICAgY29uc3QgcmVxIDogUG91Y2hEQi5GaW5kLkZpbmRSZXF1ZXN0PFQ+ID0ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IHRoaXMuX3NlbGVjdG9yXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICBpZigwIDwgdGhpcy5fc29ydC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJlcS5zb3J0ID0gdGhpcy5fc29ydDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYodGhpcy5fbGltaXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxLmxpbWl0ID0gdGhpcy5fbGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuX3NraXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmVxLnNraXAgPSB0aGlzLl9za2lwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVxO1xuICAgIH1cbn1cbiJdfQ==