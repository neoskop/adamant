import { defer, Deffered } from './utils/defer';

export class ReadQueryBatcher {
    queue: string[] = [];
    deffered?: Deffered<Map<string, PouchDB.Core.Document<any>[]>>;

    protected nextTick =
        typeof process !== 'undefined' && process && process.nextTick instanceof Function
            ? process.nextTick
            : typeof setImmediate !== 'undefined'
                ? setImmediate
                : setTimeout;

    constructor(protected readonly db: PouchDB.Database) {}

    read<T>(keys: string[]): Promise<PouchDB.Core.Document<T>[]> {
        this.queue.push(...keys);

        return this.schedule<T>().then(docs => {
            return keys
                .map(key => docs.get(key))
                .filter(Boolean)
                .map(doc => JSON.parse(JSON.stringify(doc)));
        });
    }

    protected schedule<T>(): Deffered<Map<string, PouchDB.Core.Document<T>[]>> {
        if (!this.deffered) {
            this.nextTick(() => {
                this.execute();
            });
            this.deffered = defer();
        }

        return this.deffered;
    }

    protected async execute() {
        const keys = this.queue.filter((v, i, a) => i === a.indexOf(v));
        this.queue = [];
        const deffered = this.deffered!;
        delete this.deffered;

        try {
            const { rows } = await this.db.allDocs({
                include_docs: true,
                keys
            });

            deffered!.resolve(
                new Map(
                    rows
                        .map(r => r.doc)
                        .filter(Boolean)
                        .map(doc => [doc!._id, doc] as [string, any])
                )
            );
        } catch (e) {
            deffered!.reject(e);
        }
    }
}
