import 'mocha';
import { expect } from 'chai';
import { adamantIdFactory } from './factories';
import { AdamantId } from './injector-tokens';

describe('adamantIdFactory', () => {
    let id : AdamantId;
    
    
    beforeEach(() => {
        id = adamantIdFactory();
    });
    
    it('should return head', () => {
        expect(id.head('foobar')).to.be.equal('foobar_0');
    });
    
    it('should return tail', () => {
        expect(id.tail('foobar')).to.be.equal('foobar_9');
    });
    
    it('should return string id', () => {
        expect(id.build('foobar', String, 'test')).to.be.equal('foobar_2_test');
    });
    
    it('should return number id', () => {
        expect(id.build('foobar', Number, 1)).to.be.equal('foobar_1_0000000000000001');
    });
    
    it('should throw on invalid id type', () => {
        expect(() => id.build('foobar', Boolean as any, '1')).to.throw('Invalid id type "function Boolean() { [native code] }"');
    });
    
    it('should parse string id', () => {
        expect(id.parse('foobar_2_test')).to.be.eql({
            name: 'foobar',
            type: String,
            id: 'test'
        });
    });
    
    it('should parse number id', () => {
        expect(id.parse('foobar_1_0000000000000001')).to.be.eql({
            name: 'foobar',
            type: Number,
            id: 1
        });
    });
    
    it('should throw on parsing invalid id', () => {
        expect(() => id.parse('invalid')).to.throw('Invalid id "invalid"');
    });
});
