import { ReadQueryBatcher } from '.';

describe('ReadQueryBatcher', () => {
    let dbMock: { allDocs: jest.SpyInstance };
    let batcher: ReadQueryBatcher;

    beforeEach(() => {
        dbMock = {
            allDocs: jest.fn().mockReturnValue({
                rows: [{ doc: { _id: 'a', name: 'A' } }, { doc: { _id: 'b', name: 'B' } }, { doc: { _id: 'c', name: 'C' } }]
            })
        };

        batcher = new ReadQueryBatcher(dbMock as any);
    });

    it('should create', () => {
        expect(batcher).not.toBeUndefined();
    });

    describe('read', () => {
        it('should query docs once per tick', async () => {
            batcher.read(['a']);
            batcher.read(['b']);
            batcher.read(['c']);

            await sleep(5);

            expect(dbMock.allDocs).toHaveBeenCalledWith({ include_docs: true, keys: ['a', 'b', 'c'] });
        });

        it('should query multi time in multiple ticks', async () => {
            batcher.read(['a']);

            await sleep(5);

            batcher.read(['b']);

            await sleep(5);

            batcher.read(['c']);

            await sleep(5);

            expect(dbMock.allDocs).toHaveBeenCalledTimes(3);
            expect(dbMock.allDocs).toHaveBeenCalledWith({ include_docs: true, keys: ['a'] });
            expect(dbMock.allDocs).toHaveBeenCalledWith({ include_docs: true, keys: ['b'] });
            expect(dbMock.allDocs).toHaveBeenCalledWith({ include_docs: true, keys: ['c'] });
        });

        it('should return only queried items', () => {
            const res = Promise.all([
                expect(batcher.read(['a', 'b'])).resolves.toEqual([{ _id: 'a', name: 'A' }, { _id: 'b', name: 'B' }]),
                expect(batcher.read(['c'])).resolves.toEqual([{ _id: 'c', name: 'C' }])
            ]);

            return res;
        });

        it('should throw error', () => {
            dbMock.allDocs.mockRejectedValue(new Error('err'));

            return expect(batcher.read(['d'])).rejects.toEqual(new Error('err'));
        });
    });
});

function sleep(ms = 0) {
    return new Promise<void>(resolve => {
        setTimeout(() => resolve(), ms);
    });
}
