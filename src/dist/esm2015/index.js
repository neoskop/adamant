/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
export { BelongsTo, BelongsToMetadata } from './annotations/belongs-to';
export { DesignDoc, DesignDocMetadata } from './annotations/design-doc';
export { Entity, EntityMetadata } from './annotations/entity';
export { Filter, FilterMetadata } from './annotations/filter';
export { HasMany, HasManyMetadata } from './annotations/has-many';
export { HasManyMap, HasManyMapMetadata } from './annotations/has-many-map';
export { Id, IdStrategy, IdMetadata } from './annotations/id';
export { Inline, InlineMetadata } from './annotations/inline';
export { InlineEntity, InlineEntityMetadata } from './annotations/inline-entity';
export { Property, PropertyMetadata } from './annotations/property';
export { RelationMetadata } from './annotations/relation';
export { ValidateDoc, ValidateDocMetadata } from './annotations/validate-doc';
export { View, ViewMetadata } from './annotations/view';
export { BulkOperation, Bulk } from './bulk';
export { adamantIdFactory, createAdamantConnection, AdamantConnectionManager } from './connection-manager';
export { Hydrator } from './hydrator';
export { HydratorImpl } from './hydrator-impl';
export { ADAMANT_CONNECTION, ADAMANT_ENTITY_CLASS, ADAMANT_ENTITY_METADATA, ADAMANT_EQUAL_CHECKER, ADAMANT_CONNECTION_FACTORY, ADAMANT_ID } from './injector-tokens';
export { Metadata } from './metadata';
export { QueryBuilder } from './query-builder';
export { equalCheckerFactory, AdamantRepository } from './repository';
export { Validator } from './validator';
export { ValidatorImpl } from './validator-impl';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmVvc2tvcC9hZGFtYW50LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZDQUFjLDBCQUEwQixDQUFDO0FBQ3pDLDZDQUFjLDBCQUEwQixDQUFDO0FBQ3pDLHVDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLHVDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLHlDQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLCtDQUFjLDRCQUE0QixDQUFDO0FBQzNDLDJDQUFjLGtCQUFrQixDQUFDO0FBQ2pDLHVDQUFjLHNCQUFzQixDQUFDO0FBQ3JDLG1EQUFjLDZCQUE2QixDQUFDO0FBQzVDLDJDQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGlDQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGlEQUFjLDRCQUE0QixDQUFDO0FBQzNDLG1DQUFjLG9CQUFvQixDQUFDO0FBRW5DLG9DQUFjLFFBQVEsQ0FBQztBQUN2QixvRkFBYyxzQkFBc0IsQ0FBQztBQUNyQyx5QkFBYyxZQUFZLENBQUM7QUFDM0IsNkJBQWMsaUJBQWlCLENBQUM7QUFDaEMsaUpBQWMsbUJBQW1CLENBQUM7QUFDbEMseUJBQWMsWUFBWSxDQUFDO0FBQzNCLDZCQUFjLGlCQUFpQixDQUFDO0FBQ2hDLHVEQUFjLGNBQWMsQ0FBQztBQUM3QiwwQkFBYyxhQUFhLENBQUM7QUFDNUIsOEJBQWMsa0JBQWtCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Fubm90YXRpb25zL2JlbG9uZ3MtdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9hbm5vdGF0aW9ucy9kZXNpZ24tZG9jJztcbmV4cG9ydCAqIGZyb20gJy4vYW5ub3RhdGlvbnMvZW50aXR5JztcbmV4cG9ydCAqIGZyb20gJy4vYW5ub3RhdGlvbnMvZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYW5ub3RhdGlvbnMvaGFzLW1hbnknO1xuZXhwb3J0ICogZnJvbSAnLi9hbm5vdGF0aW9ucy9oYXMtbWFueS1tYXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hbm5vdGF0aW9ucy9pZCc7XG5leHBvcnQgKiBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fubm90YXRpb25zL2lubGluZS1lbnRpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9hbm5vdGF0aW9ucy9wcm9wZXJ0eSc7XG5leHBvcnQgKiBmcm9tICcuL2Fubm90YXRpb25zL3JlbGF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vYW5ub3RhdGlvbnMvdmFsaWRhdGUtZG9jJztcbmV4cG9ydCAqIGZyb20gJy4vYW5ub3RhdGlvbnMvdmlldyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vYnVsayc7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24tbWFuYWdlcic7XG5leHBvcnQgKiBmcm9tICcuL2h5ZHJhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vaHlkcmF0b3ItaW1wbCc7XG5leHBvcnQgKiBmcm9tICcuL2luamVjdG9yLXRva2Vucyc7XG5leHBvcnQgKiBmcm9tICcuL21ldGFkYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vcXVlcnktYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL3JlcG9zaXRvcnknO1xuZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi92YWxpZGF0b3ItaW1wbCc7XG4iXX0=