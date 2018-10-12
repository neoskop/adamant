import 'mocha';
import { expect, use } from 'chai';
import { QueryBuilder } from './query-builder';

use(require('sinon-chai'));

describe('QueryBuilder', () => {
    let builder: QueryBuilder<any>;

    beforeEach(() => {
        builder = new QueryBuilder(null!, 'entity_0', 'entity_9');
    });

    it('should create empty query builder', () => {
        expect(builder).to.exist;
        expect(builder.toFindRequest()).to.be.eql({
            selector: {
                _id: {
                    $gt: 'entity_0',
                    $lt: 'entity_9'
                }
            }
        });
    });

    describe('limit', () => {
        it('should return query with limit', () => {
            expect(builder.limit(10).toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    }
                },
                limit: 10
            });
        });
    });

    describe('skip', () => {
        it('should return query with skip', () => {
            expect(builder.skip(10).toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    }
                },
                skip: 10
            });
        });
    });

    describe('sort', () => {
        it('should sort query with string sort', () => {
            expect(builder.sort('field').toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    }
                },
                sort: ['field']
            });
        });

        it('should sort query with string sort asc', () => {
            expect(builder.sort('field', 'asc').toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    }
                },
                sort: [{ field: 'asc' }]
            });
        });

        it('should sort query with object sort', () => {
            expect(builder.sort({ field: 'desc' }).toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    }
                },
                sort: [{ field: 'desc' }]
            });
        });
    });

    describe('selector', () => {
        it('should select for field/condition', () => {
            expect(builder.selector('field', 'foobar').toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    },
                    field: {
                        $eq: 'foobar'
                    }
                }
            });
        });

        it('should select for field/condition-operator', () => {
            expect(
                builder
                    .selector('field', { $gt: '0' })
                    .selector('field', { $lt: '9' })
                    .toFindRequest()
            ).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    },
                    field: {
                        $gt: '0',
                        $lt: '9'
                    }
                }
            });
        });

        it('should select for selector', () => {
            expect(builder.selector({ field: { $gt: '0', $lt: '9' } }).toFindRequest()).to.be.eql({
                selector: {
                    _id: {
                        $gt: 'entity_0',
                        $lt: 'entity_9'
                    },
                    field: {
                        $gt: '0',
                        $lt: '9'
                    }
                }
            });
        });
    });
});
