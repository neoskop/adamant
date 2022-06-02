export class AdamantInjectionToken<T> {
    /** @internal */
    readonly ngMetadataName = 'InjectionToken';

    readonly ɵprov: unknown;

    /**
     * @param _desc   Description for the token,
     *                used only for debugging purposes,
     *                it should but does not need to be unique
     */
    constructor(protected _desc: string) {
        this.ɵprov = undefined;
    }

    /**
     * @internal
     */
    get multi(): AdamantInjectionToken<Array<T>> {
        return this as AdamantInjectionToken<Array<T>>;
    }

    toString(): string {
        return `InjectionToken ${this._desc}`;
    }
}

export function throwMissingInjector() {
    throw new Error('Dependency Injection implementation missing, provide "@angular/core" or "injection-js"');
}
