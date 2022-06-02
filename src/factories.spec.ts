import { AdamantId, adamantIdFactory } from '.';

describe('adamantIdFactory', () => {
    let id: AdamantId;

    beforeEach(() => {
        id = adamantIdFactory();
    });

    it('should return head', () => {
        expect(id.head('foobar')).toEqual('foobar_0');
    });

    it('should return tail', () => {
        expect(id.tail('foobar')).toEqual('foobar_9');
    });

    it('should return string id', () => {
        expect(id.build('foobar', String, 'test')).toEqual('foobar_2_test');
    });

    it('should return number id', () => {
        expect(id.build('foobar', Number, 1)).toEqual('foobar_1_0000000000000001');
    });

    it('should throw on invalid id type', () => {
        expect(() => id.build('foobar', Boolean as any, '1')).toThrow('Invalid id type "function Boolean() { [native code] }"');
    });

    it('should parse string id', () => {
        expect(id.parse('foobar_2_test')).toEqual({
            name: 'foobar',
            type: String,
            id: 'test'
        });
    });

    it('should parse number id', () => {
        expect(id.parse('foobar_1_0000000000000001')).toEqual({
            name: 'foobar',
            type: Number,
            id: 1
        });
    });

    it('should throw on parsing invalid id', () => {
        expect(() => id.parse('invalid')).toThrow('Invalid id "invalid"');
    });
});
