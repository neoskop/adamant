export declare function markDeleted<T extends {}>(entity: T): T;
export declare function markIdRev<T extends {}>(entity: T, res: {
    id?: string;
    rev?: string;
}): T;
