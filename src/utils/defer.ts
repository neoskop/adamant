export type Deffered<T> = Promise<T> & { resolve(v : T) : void, reject(e : any) : void };

export function defer<T>() : Deffered<T> {
    let resolve : any , reject : any, promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
    });
    
    return Object.assign(promise, { resolve, reject });
}
