import { EventEmitter, Inject, Injectable, Type } from '@angular/core';
import { AdamantConnectionManager, DesignDocMetadataCollection } from '@neoskop/adamant';
import { Observable } from 'rxjs';
import { ADAMANT_DESIGN_DOCS } from './injector-tokens';

export class AdamantEvent<T> {
    constructor(public readonly entity: Type<T>) {}
}

export class AdamantPersistDesignDocStart<T = any, D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D) {
        super(entity);
    }
}

export class AdamantPersistDesignDocEnd<T = any, D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D) {
        super(entity);
    }
}

export class AdamantPersistDesignDocError<T = any, D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D, public readonly error: any) {
        super(entity);
    }
}

export class AdamantWarmupViewStart<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D, public readonly view: K) {
        super(entity);
    }
}

export class AdamantWarmupViewEnd<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D, public readonly view: K) {
        super(entity);
    }
}

export class AdamantWarmupViewError<T = any, D = any, K extends keyof D = any> extends AdamantEvent<T> {
    constructor(entity: Type<T>, public readonly designDoc: D, public readonly view: K, public readonly error: any) {
        super(entity);
    }
}

export class AdamantInitializationStart {
    constructor(public readonly designDocCount: number, public readonly viewCount: number) {}
}
export class AdamantInitializationEnd {}

export type AdamantInitializationEvent =
    | AdamantPersistDesignDocStart<any, any>
    | AdamantPersistDesignDocEnd<any, any>
    | AdamantPersistDesignDocError<any, any>
    | AdamantWarmupViewStart<any, any, any>
    | AdamantWarmupViewEnd<any, any, any>
    | AdamantWarmupViewError<any, any, any>
    | AdamantInitializationStart
    | AdamantInitializationEnd;

@Injectable()
export class AdamantInitializationService {
    protected readonly emitter = new EventEmitter<AdamantInitializationEvent>();
    readonly events: Observable<AdamantInitializationEvent> = this.emitter.asObservable();

    protected readonly designDocs: object[];

    constructor(@Inject(ADAMANT_DESIGN_DOCS) designDocs: any[][], protected readonly connectionManager: AdamantConnectionManager) {
        this.designDocs = flatten(designDocs);
    }

    async persist(): Promise<void> {
        for (const designDoc of this.designDocs) {
            const metadata = DesignDocMetadataCollection.create(designDoc.constructor as any);

            try {
                this.emitter.emit(new AdamantPersistDesignDocStart(metadata.entity, designDoc));
                await this.connectionManager.getRepository(metadata.entity).persistDesignDoc(designDoc);
                this.emitter.emit(new AdamantPersistDesignDocEnd(metadata.entity, designDoc));
            } catch (e) {
                this.emitter.emit(new AdamantPersistDesignDocError(metadata.entity, designDoc, e));
            }
        }
    }

    async warmup(): Promise<void> {
        for (const designDoc of this.designDocs) {
            const metadata = DesignDocMetadataCollection.create(designDoc.constructor as any);

            for (const view of metadata.views) {
                try {
                    this.emitter.emit(new AdamantWarmupViewStart(metadata.entity, designDoc as any, view));
                    await this.connectionManager.getRepository(metadata.entity).view(designDoc.constructor as any, view);
                    this.emitter.emit(new AdamantWarmupViewEnd(metadata.entity, designDoc as any, view));
                } catch (e) {
                    this.emitter.emit(new AdamantWarmupViewError(metadata.entity, designDoc as any, view, e));
                }
            }
        }
    }

    async initialize(): Promise<void> {
        const viewCount = this.designDocs
            .map(designDoc => DesignDocMetadataCollection.create(designDoc.constructor as any).views.size)
            .reduce((t, c) => t + c, 0);
        this.emitter.emit(new AdamantInitializationStart(this.designDocs.length, viewCount));
        await this.persist();
        await this.warmup();
        this.emitter.emit(new AdamantInitializationEnd());
    }
}

function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((r, c) => r.concat(c), []);
}
