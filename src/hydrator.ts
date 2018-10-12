import { AdamantEntityMeta, AdamantRevMeta } from './meta-interfaces';

export interface HydrateOptions {
    depth?: number;
    circularCache?: { [key: string]: any };
}

export abstract class Hydrator<T> {
    abstract hydrate(
        entity: T,
        data: PouchDB.Core.Document<T> & Partial<PouchDB.Core.GetMeta>,
        options?: HydrateOptions
    ): Promise<T & AdamantRevMeta>;

    abstract dehydrate(
        entity: T & AdamantEntityMeta,
        options?: { includeRev?: boolean }
    ): PouchDB.Core.Document<T> & Partial<PouchDB.Core.RevisionIdMeta>;
}
