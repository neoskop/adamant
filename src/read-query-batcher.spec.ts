import { expect, use } from 'chai';
import 'mocha';
import * as sinon from 'sinon';
import { ReadQueryBatcher } from '.';

use(require('sinon-chai'));
use(require('chai-as-promised'));

describe('ReadQueryBatcher', () => {
    let dbMock: { allDocs: sinon.SinonStub };
    let batcher: ReadQueryBatcher;

    beforeEach(() => {
        dbMock = {
            allDocs: sinon.stub().returns({
                rows: [{ doc: { _id: 'a', name: 'A' } }, { doc: { _id: 'b', name: 'B' } }, { doc: { _id: 'c', name: 'C' } }]
            })
        };

        batcher = new ReadQueryBatcher(dbMock as any);
    });

    it('should create', () => {
        expect(batcher).to.exist;
    });

    describe('read', () => {
        it('should query docs once per tick', async () => {
            batcher.read(['a']);
            batcher.read(['b']);
            batcher.read(['c']);

            await sleep(5);

            expect(dbMock.allDocs).to.have.been.calledOnceWith({ include_docs: true, keys: ['a', 'b', 'c'] });
        });

        it('should query multi time in multiple ticks', async () => {
            batcher.read(['a']);

            await sleep(5);

            batcher.read(['b']);

            await sleep(5);

            batcher.read(['c']);

            await sleep(5);

            expect(dbMock.allDocs).to.have.been.calledThrice;
            expect(dbMock.allDocs).to.have.been.calledWith({ include_docs: true, keys: ['a'] });
            expect(dbMock.allDocs).to.have.been.calledWith({ include_docs: true, keys: ['b'] });
            expect(dbMock.allDocs).to.have.been.calledWith({ include_docs: true, keys: ['c'] });
        });

        it('should return only queried items', () => {
            const res = Promise.all([
                expect(batcher.read(['a', 'b'])).to.eventually.be.eql([{ _id: 'a', name: 'A' }, { _id: 'b', name: 'B' }]),
                expect(batcher.read(['c'])).to.eventually.be.eql([{ _id: 'c', name: 'C' }])
            ]);

            return res;
        });

        it('should throw error', () => {
            dbMock.allDocs.throws(new Error('err'));

            return expect(batcher.read(['d'])).to.eventually.rejectedWith('err');
        });
    });
});

function sleep(ms = 0) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}
