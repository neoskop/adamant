export declare type Deffered<T> = Promise<T> & {
    resolve(v: T): void;
    reject(e: any): void;
};
export declare function defer<T>(): Deffered<T>;
