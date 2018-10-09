/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Inject, Injectable, Injector } from '@angular/core';
import { AdamantRepository, equalCheckerFactory } from './repository';
import { Metadata } from './metadata';
import { Bulk } from './bulk';
import { Hydrator } from './hydrator';
import { Validator } from './validator';
import { HydratorImpl } from './hydrator-impl';
import { ValidatorImpl } from './validator-impl';
import { ADAMANT_CONNECTION, ADAMANT_CONNECTION_FACTORY, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID } from './injector-tokens';
/**
 * @return {?}
 */
export function adamantIdFactory() {
    return {
        head: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return name + "_0";
        },
        tail: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            return name + "_9";
        },
        build: /**
         * @param {?} name
         * @param {?} type
         * @param {?} id
         * @return {?}
         */
        function (name, type, id) {
            if (type === String) {
                return name + "_2_" + id;
            }
            else if (type === Number) {
                /** @type {?} */
                var idStr = id.toString();
                return name + "_1_" + '0'.repeat(16 - idStr.length) + idStr;
            }
            throw new Error("Invalid id type \"" + type + "\"");
        },
        parse: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            /** @type {?} */
            var match = /^(.*)_(1|2)_(.*)$/.exec(id);
            if (!match) {
                throw new TypeError("Invalid id \"" + id + "\"");
            }
            return {
                name: /** @type {?} */ ((match[1])),
                type: match[2] === '2' ? String : Number,
                id: match[2] === '2' ? match[3] : Number.parseInt(match[3], 10)
            };
        }
    };
}
/**
 * @param {?} factory
 * @return {?}
 */
export function createAdamantConnection(factory) {
    /** @type {?} */
    var injector = Injector.create({
        providers: [
            { provide: ADAMANT_CONNECTION_FACTORY, useValue: factory },
            { provide: AdamantConnectionManager, deps: [ADAMANT_CONNECTION_FACTORY, ADAMANT_ID, Injector] },
            { provide: ADAMANT_ID, useFactory: adamantIdFactory, deps: [] },
            { provide: ADAMANT_EQUAL_CHECKER, useFactory: equalCheckerFactory, deps: [] }
        ]
    });
    return injector.get(AdamantConnectionManager);
}
var AdamantConnectionManager = /** @class */ (function () {
    function AdamantConnectionManager(connectionFactory, id, injector) {
        this.connectionFactory = connectionFactory;
        this.id = id;
        this.injector = injector;
        this.connections = new Map();
        this.repositories = new Map();
        this.metadata = new Map();
    }
    /**
     * @return {?}
     */
    AdamantConnectionManager.prototype.getOpenConnections = /**
     * @return {?}
     */
    function () {
        return Array.from(this.connections.values());
    };
    /**
     * @template T
     * @param {?} name
     * @return {?}
     */
    AdamantConnectionManager.prototype.getConnection = /**
     * @template T
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (!this.connections.has(name)) {
            this.connections.set(name, this.createConnection(name));
        }
        return /** @type {?} */ ((this.connections.get(name)));
    };
    /**
     * @return {?}
     */
    AdamantConnectionManager.prototype.clearConnections = /**
     * @return {?}
     */
    function () {
        this.connections.clear();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    AdamantConnectionManager.prototype.createConnection = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        return this.connectionFactory(name);
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.getRepository = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        if (!this.repositories.has(entityClass)) {
            this.repositories.set(entityClass, this.createRepository(entityClass));
        }
        return /** @type {?} */ ((this.repositories.get(entityClass)));
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.createRepository = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        /** @type {?} */
        var metadata = this.getMetadata(entityClass);
        return Injector.create({
            parent: this.injector,
            providers: [
                { provide: AdamantConnectionManager, useValue: this },
                { provide: AdamantRepository, deps: [ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_ID, Bulk, Hydrator, Validator] },
                { provide: ADAMANT_ENTITY_CLASS, useValue: entityClass },
                { provide: ADAMANT_ENTITY_METADATA, useValue: metadata, },
                { provide: ADAMANT_CONNECTION, useValue: !metadata.inline ? this.getConnection(/** @type {?} */ ((metadata.name))) : null },
                { provide: HydratorImpl, deps: [ADAMANT_ID, AdamantConnectionManager] },
                { provide: ValidatorImpl, deps: [] },
                { provide: Hydrator, useExisting: metadata.hydrator || HydratorImpl },
                { provide: Validator, useExisting: metadata.validator || ValidatorImpl },
                { provide: Bulk, deps: [ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, Hydrator, Validator] }
            ]
        }).get(AdamantRepository);
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.getMetadata = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        if (!this.metadata.has(entityClass)) {
            this.metadata.set(entityClass, this.createMetadata(entityClass));
        }
        return /** @type {?} */ ((this.metadata.get(entityClass)));
    };
    /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    AdamantConnectionManager.prototype.createMetadata = /**
     * @template T
     * @param {?} entityClass
     * @return {?}
     */
    function (entityClass) {
        return new Metadata(entityClass);
    };
    AdamantConnectionManager.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AdamantConnectionManager.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_CONNECTION_FACTORY,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [ADAMANT_ID,] }] },
        { type: Injector }
    ]; };
    return AdamantConnectionManager;
}());
export { AdamantConnectionManager };
if (false) {
    /** @type {?} */
    AdamantConnectionManager.prototype.connections;
    /** @type {?} */
    AdamantConnectionManager.prototype.repositories;
    /** @type {?} */
    AdamantConnectionManager.prototype.metadata;
    /** @type {?} */
    AdamantConnectionManager.prototype.connectionFactory;
    /** @type {?} */
    AdamantConnectionManager.prototype.id;
    /** @type {?} */
    AdamantConnectionManager.prototype.injector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5lb3Nrb3AvYWRhbWFudC8iLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24tbWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFDSCxpQkFBaUIsRUFBRSxtQkFBbUIsRUFDekMsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFDSCxrQkFBa0IsRUFDbEIsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQ3pFLHFCQUFxQixFQUNyQixVQUFVLEVBR2IsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUkzQixNQUFNO0lBQ0YsT0FBTztRQUNILElBQUk7Ozs7a0JBQUMsSUFBYTtZQUNkLE9BQVUsSUFBSSxPQUFJLENBQUE7U0FDckI7UUFDRCxJQUFJOzs7O2tCQUFDLElBQWE7WUFDZCxPQUFVLElBQUksT0FBSSxDQUFBO1NBQ3JCO1FBQ0QsS0FBSzs7Ozs7O1FBQUwsVUFBTSxJQUFhLEVBQUUsSUFBb0MsRUFBRSxFQUFrQjtZQUN6RSxJQUFHLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2hCLE9BQVUsSUFBSSxXQUFNLEVBQUksQ0FBQzthQUM1QjtpQkFBTSxJQUFHLElBQUksS0FBSyxNQUFNLEVB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b250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gICAgQWRhbWFudFJlcG9zaXRvcnksIGVxdWFsQ2hlY2tlckZhY3Rvcnlcbn0gZnJvbSAnLi9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEN0b3IgfSBmcm9tICcuL3V0aWxzL21ldGFkYXRhJztcbmltcG9ydCB7IE1ldGFkYXRhIH0gZnJvbSAnLi9tZXRhZGF0YSc7XG5pbXBvcnQgeyBCdWxrIH0gZnJvbSAnLi9idWxrJztcbmltcG9ydCB7IEh5ZHJhdG9yIH0gZnJvbSAnLi9oeWRyYXRvcic7XG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5pbXBvcnQgeyBIeWRyYXRvckltcGwgfSBmcm9tICcuL2h5ZHJhdG9yLWltcGwnO1xuaW1wb3J0IHsgVmFsaWRhdG9ySW1wbCB9IGZyb20gJy4vdmFsaWRhdG9yLWltcGwnO1xuaW1wb3J0IHtcbiAgICBBREFNQU5UX0NPTk5FQ1RJT04sXG4gICAgQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSxcbiAgICBBREFNQU5UX0VRVUFMX0NIRUNLRVIsXG4gICAgQURBTUFOVF9JRCxcbiAgICBBZGFtYW50SWQsXG4gICAgQ29ubmVjdGlvbkZhY3Rvcnlcbn0gZnJvbSAnLi9pbmplY3Rvci10b2tlbnMnO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkYW1hbnRJZEZhY3RvcnkoKSA6IEFkYW1hbnRJZCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fMGBcbiAgICAgICAgfSxcbiAgICAgICAgdGFpbChuYW1lIDogc3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZX1fOWBcbiAgICAgICAgfSxcbiAgICAgICAgYnVpbGQobmFtZSA6IHN0cmluZywgdHlwZSA6IHR5cGVvZiBTdHJpbmcgfCB0eXBlb2YgTnVtYmVyLCBpZCA6IHN0cmluZ3xudW1iZXIpIDogc3RyaW5nIHtcbiAgICAgICAgICAgIGlmKHR5cGUgPT09IFN0cmluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtuYW1lfV8yXyR7aWR9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZih0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFN0ciA9IGlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke25hbWV9XzFfJHsnMCcucmVwZWF0KDE2IC0gaWRTdHIubGVuZ3RoKX0ke2lkU3RyfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaWQgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgICB9LFxuICAgICAgICBwYXJzZShpZCA6IHN0cmluZykgOiB7IG5hbWU6IHN0cmluZywgdHlwZTogdHlwZW9mIFN0cmluZyB8IHR5cGVvZiBOdW1iZXIsIGlkIDogc3RyaW5nIHwgbnVtYmVyIH0ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvXiguKilfKDF8MilfKC4qKSQvLmV4ZWMoaWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZighbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIGlkIFwiJHtpZH1cImApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IG1hdGNoWzFdISxcbiAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFsyXSA9PT0gJzInID8gU3RyaW5nIDogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGlkOiBtYXRjaFsyXSA9PT0gJzInID8gbWF0Y2hbM10gOiBOdW1iZXIucGFyc2VJbnQobWF0Y2hbM10sIDEwKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWRhbWFudENvbm5lY3Rpb24oZmFjdG9yeSA6IENvbm5lY3Rpb25GYWN0b3J5KSA6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciB7XG4gICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9DT05ORUNUSU9OX0ZBQ1RPUlksIHVzZVZhbHVlOiBmYWN0b3J5IH0sXG4gICAgICAgICAgICB7IHByb3ZpZGU6IEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlciwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT05fRkFDVE9SWSwgQURBTUFOVF9JRCwgSW5qZWN0b3IgXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0lELCB1c2VGYWN0b3J5OiBhZGFtYW50SWRGYWN0b3J5LCBkZXBzOiBbXSB9LFxuICAgICAgICAgICAgeyBwcm92aWRlOiBBREFNQU5UX0VRVUFMX0NIRUNLRVIsIHVzZUZhY3Rvcnk6IGVxdWFsQ2hlY2tlckZhY3RvcnksIGRlcHM6IFtdIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGluamVjdG9yLmdldChBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRhbWFudENvbm5lY3Rpb25NYW5hZ2VyIHtcbiAgICBcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgUG91Y2hEQi5EYXRhYmFzZTxhbnk+PigpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSByZXBvc2l0b3JpZXMgPSBuZXcgTWFwPEN0b3I8YW55PiwgQWRhbWFudFJlcG9zaXRvcnk8YW55Pj4oKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWV0YWRhdGEgPSBuZXcgTWFwPEN0b3I8YW55PiwgTWV0YWRhdGE8YW55Pj4oKTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEFEQU1BTlRfQ09OTkVDVElPTl9GQUNUT1JZKSBwcm90ZWN0ZWQgcmVhZG9ubHkgY29ubmVjdGlvbkZhY3RvcnkgOiBDb25uZWN0aW9uRmFjdG9yeSxcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFEQU1BTlRfSUQpIHB1YmxpYyByZWFkb25seSBpZCA6IEFkYW1hbnRJZCxcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgaW5qZWN0b3IgOiBJbmplY3Rvcikge31cbiAgICBcbiAgICBnZXRPcGVuQ29ubmVjdGlvbnMoKSA6IFBvdWNoREIuRGF0YWJhc2VbXSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuY29ubmVjdGlvbnMudmFsdWVzKCkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb25uZWN0aW9uPFQgZXh0ZW5kcyB7fSA9IHt9PihuYW1lIDogc3RyaW5nKSA6IFBvdWNoREIuRGF0YWJhc2U8VD4ge1xuICAgICAgICBpZighdGhpcy5jb25uZWN0aW9ucy5oYXMobmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbnMuc2V0KG5hbWUsIHRoaXMuY3JlYXRlQ29ubmVjdGlvbihuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25zLmdldChuYW1lKSE7XG4gICAgfVxuICAgIFxuICAgIGNsZWFyQ29ubmVjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbnMuY2xlYXIoKTtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUNvbm5lY3Rpb24obmFtZSA6IHN0cmluZykgOiBQb3VjaERCLkRhdGFiYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbkZhY3RvcnkobmFtZSk7XG4gICAgfVxuICAgIFxuICAgIGdldFJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgaWYoIXRoaXMucmVwb3NpdG9yaWVzLmhhcyhlbnRpdHlDbGFzcykpIHtcbiAgICAgICAgICAgIHRoaXMucmVwb3NpdG9yaWVzLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVSZXBvc2l0b3J5KGVudGl0eUNsYXNzKSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcmllcy5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZVJlcG9zaXRvcnk8VD4oZW50aXR5Q2xhc3MgOiBDdG9yPFQ+KSA6IEFkYW1hbnRSZXBvc2l0b3J5PFQ+IHtcbiAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldE1ldGFkYXRhKGVudGl0eUNsYXNzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmluamVjdG9yLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50Q29ubmVjdGlvbk1hbmFnZXIsIHVzZVZhbHVlOiB0aGlzIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBZGFtYW50UmVwb3NpdG9yeSwgZGVwczogWyBBREFNQU5UX0NPTk5FQ1RJT04sIEFEQU1BTlRfRU5USVRZX0NMQVNTLCBBREFNQU5UX0VOVElUWV9NRVRBREFUQSwgQURBTUFOVF9FUVVBTF9DSEVDS0VSLCBBREFNQU5UX0lELCBCdWxrLCBIeWRyYXRvciwgVmFsaWRhdG9yXSB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfQ0xBU1MsIHVzZVZhbHVlOiBlbnRpdHlDbGFzcyB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIHVzZVZhbHVlOiBtZXRhZGF0YSwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEFEQU1BTlRfQ09OTkVDVElPTiwgdXNlVmFsdWU6ICFtZXRhZGF0YS5pbmxpbmUgPyB0aGlzLmdldENvbm5lY3Rpb24obWV0YWRhdGEubmFtZSEpIDogbnVsbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogSHlkcmF0b3JJbXBsLCBkZXBzOiBbIEFEQU1BTlRfSUQsIEFkYW1hbnRDb25uZWN0aW9uTWFuYWdlcl0gfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IFZhbGlkYXRvckltcGwsIGRlcHM6IFtdIH0sXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIeWRyYXRvciwgdXNlRXhpc3Rpbmc6IG1ldGFkYXRhLmh5ZHJhdG9yIHx8IEh5ZHJhdG9ySW1wbCB9LFxuICAgICAgICAgICAgICAgIHsgcHJvdmlkZTogVmFsaWRhdG9yLCB1c2VFeGlzdGluZzogbWV0YWRhdGEudmFsaWRhdG9yIHx8IFZhbGlkYXRvckltcGwgfSxcbiAgICAgICAgICAgICAgICB7IHByb3ZpZGU6IEJ1bGssIGRlcHM6IFsgQURBTUFOVF9DT05ORUNUSU9OLCBBREFNQU5UX0VOVElUWV9DTEFTUywgQURBTUFOVF9FTlRJVFlfTUVUQURBVEEsIEh5ZHJhdG9yLCBWYWxpZGF0b3IgXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pLmdldDxBZGFtYW50UmVwb3NpdG9yeTxUPj4oQWRhbWFudFJlcG9zaXRvcnkpO1xuICAgIH1cbiAgICBcbiAgICBnZXRNZXRhZGF0YTxUPihlbnRpdHlDbGFzcyA6IEN0b3I8VD4pIDogTWV0YWRhdGE8VD4ge1xuICAgICAgICBpZighdGhpcy5tZXRhZGF0YS5oYXMoZW50aXR5Q2xhc3MpKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGFkYXRhLnNldChlbnRpdHlDbGFzcywgdGhpcy5jcmVhdGVNZXRhZGF0YShlbnRpdHlDbGFzcykpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5nZXQoZW50aXR5Q2xhc3MpITtcbiAgICB9XG4gICAgXG4gICAgcHJvdGVjdGVkIGNyZWF0ZU1ldGFkYXRhPFQ+KGVudGl0eUNsYXNzIDogQ3RvcjxUPikgOiBNZXRhZGF0YTxUPiB7XG4gICAgICAgIHJldHVybiBuZXcgTWV0YWRhdGE8VD4oZW50aXR5Q2xhc3MpO1xuICAgIH1cbn1cbiJdfQ==