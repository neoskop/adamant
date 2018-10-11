import 'mocha';
import { expect, use } from 'chai';
import { Entity } from './annotations/entity';
import { Id } from './annotations/id';
import { Metadata } from './metadata';
import { Property } from './annotations/property';
import { ValidatorImpl } from './validator-impl';

use(require('chai-as-promised'));

@Entity('default-entity')
export class TestEntity {
    @Id()
    id! : string;
    
    @Property()
    optional?: string;
    
    @Property({ required: true })
    required!: string;
}

describe('ValidatorImpl', () => {
    let metadata : Metadata<TestEntity>;
    let validator : ValidatorImpl;
    
    beforeEach(() => {
        metadata = new Metadata(TestEntity);
        validator = new ValidatorImpl();
    });
    
    describe('validate', () => {
        it('should return a promise', () => {
            expect(validator.validate({ id: 'id', optional: 'optional', required: 'required' }, metadata)).to.be.instanceOf(Promise);
        });
        
        it('should validate valid entity', async () => {
            expect(await validator.validate({ id: 'id', optional: 'optional', required: 'required' }, metadata)).to.be.true;
        });
        
        it('should throw on validation error', () => {
            return expect(validator.validate<TestEntity>({ id: 'id' } as any, metadata)).to.be.eventually.rejectedWith(Error, 'Property "required" required');
        });
    });
    
});

