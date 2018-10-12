export function markDeleted<T extends {}>(entity: T): T {
    Object.defineProperty(entity, '_deleted', { configurable: true, value: true });

    return entity;
}

export function markIdRev<T extends {}>(entity: T, res: { id?: string; rev?: string }): T {
    Object.defineProperty(entity, '_id', { configurable: true, value: res.id });
    Object.defineProperty(entity, '_rev', { configurable: true, value: res.rev });

    return entity;
}
