import { Entity, EntityMetadataCollection, Id, Property, ValidatorImpl } from '.';

@Entity('default-entity')
export class TestEntity {
    @Id()
    id!: string;

    @Property()
    optional?: string;

    @Property({ required: true })
    required!: string;
}

describe('ValidatorImpl', () => {
    let metadata: EntityMetadataCollection<TestEntity>;
    let validator: ValidatorImpl<TestEntity>;

    beforeEach(() => {
        metadata = EntityMetadataCollection.create(TestEntity);
        validator = new ValidatorImpl(metadata);
    });

    describe('validate', () => {
        it('should return a promise', () => {
            expect(validator.validate({ id: 'id', optional: 'optional', required: 'required' })).toBeInstanceOf(Promise);
        });

        it('should validate valid entity', async () => {
            expect(await validator.validate({ id: 'id', optional: 'optional', required: 'required' })).toBeTruthy();
        });

        it('should throw on validation error', () => {
            return expect(validator.validate({ id: 'id' } as any)).rejects.toEqual(new Error('Property "required" required'));
        });
    });
});
