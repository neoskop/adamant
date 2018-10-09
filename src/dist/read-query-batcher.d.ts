/// <reference types="pouchdb-find" />
/// <reference types="pouchdb-core" />
/// <reference types="pouchdb-mapreduce" />
/// <reference types="pouchdb-replication" />
/// <reference types="pouchdb-upsert" />
import { Deffered } from './utils/defer';
export declare class ReadQueryBatcher {
    protected readonly db: PouchDB.Database;
    queue: string[];
    deffered?: Deffered<PouchDB.Core.Document<any>[]>;
    constructor(db: PouchDB.Database);
    read<T>(keys: string[]): Promise<PouchDB.Core.Document<T>[]>;
    protected schedule<T>(): Deffered<PouchDB.Core.Document<T>[]>;
    protected execute(): Promise<void>;
}
