import 'mocha';
import { expect, use } from 'chai';
import { Entity } from './annotations/entity';
import { Id } from './annotations/id';
import { EntityMetadataCollection } from './metadata';
import { Property } from './annotations/property';
import { ValidatorImpl } from './validator-impl';

use(require('chai-as-promised'));

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
            expect(validator.validate({ id: 'id', optional: 'optional', required: 'required' })).to.be.instanceOf(Promise);
        });

        it('should validate valid entity', async () => {
            expect(await validator.validate({ id: 'id', optional: 'optional', required: 'required' })).to.be.true;
        });

        it('should throw on validation error', () => {
            return expect(validator.validate({ id: 'id' } as any)).to.be.eventually.rejectedWith(Error, 'Property "required" required');
        });
    });
});
