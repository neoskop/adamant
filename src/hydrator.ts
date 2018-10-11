import { Metadata } from './metadata';
import { AdamantEntityMeta, AdamantRevMeta } from './meta-interfaces';

export interface HydrateOptions {
    depth?: number;
    circularCache?: { [key: string]: any };
}

export abstract class Hydrator {
    abstract hydrate<T>(
        entity: T,
        data: PouchDB.Core.Document<T> & PouchDB.Core.GetMeta,
        metadata: Metadata<T>,
        options?: HydrateOptions
    ): Promise<T & AdamantRevMeta>;

    abstract dehydrate<T>(
        entity: T & AdamantEntityMeta,
        metadata: Metadata<T>,
        options?: { includeRev?: boolean }
    ): PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
}
