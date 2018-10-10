import 'mocha';
import './test-init';
import { inject, TestBed } from '@angular/core/testing';
import { ADAMANT_DESIGN_DOCS, ADAMANT_ENTITIES, AdamantModule } from './adamant.module';
import { expect } from 'chai';
import { AdamantConnectionManager, AdamantRepository, DesignDoc, Entity, Id, View } from '@neoskop/adamant';
import { MemoryPouchDB } from '../../tests/pouchdb'
import { Type } from '@angular/core';

@Entity('test')
export class TestEntity {
    @Id()
    id!: string;
}

@Entity('test2')
export class Test2Entity {
    @Id()
    id!: string;
}

@DesignDoc(TestEntity, 'test')
export class TestDesignDoc {
    @View()
    byId = (doc : any) => emit(doc.id);
}

@DesignDoc(Test2Entity, 'test2')
export class Test2DesignDoc {
    @View()
    byId = (doc : any) => emit(doc.id);
}

export function pouchdbFactory(name : string) {
    return new MemoryPouchDB(name);
}

describe('AdamantModule', () => {
    describe('forRoot', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    AdamantModule.forRoot({
                        factory   : pouchdbFactory,
                        entities  : [ TestEntity ],
                        designDocs: [ TestDesignDoc ]
                    })
                ]
            }).compileComponents();
        });
    
        it('should create', () => {
            expect(AdamantModule).to.exist;
        });
    
        it('should provide connection-manager', inject([ AdamantConnectionManager ], (connection : AdamantConnectionManager) => {
            expect(connection).to.be.instanceOf(AdamantConnectionManager);
            expect(connection.getRepository(TestEntity)).to.be.instanceOf(AdamantRepository)
        }));
    
        it('should provide entities and design docs', inject([ ADAMANT_ENTITIES, ADAMANT_DESIGN_DOCS ], (entities : Type<any>[][], designDocs : any[][]) => {
            expect(entities).to.be.an('array').with.length(1);
            expect(entities[ 0 ]).to.be.an('array').with.length(1);
            expect(entities[ 0 ][ 0 ]).to.be.equal(TestEntity);
        
            expect(designDocs).to.be.an('array').with.length(1);
            expect(designDocs[ 0 ]).to.be.an('array').with.length(1);
            expect(designDocs[ 0 ][ 0 ]).to.be.instanceOf(TestDesignDoc);
        }));
    });
    
    describe('forFeature', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    AdamantModule.forRoot({
                        factory   : pouchdbFactory,
                        entities  : [ TestEntity ],
                        designDocs: [ TestDesignDoc ]
                    }),
                    AdamantModule.forFeature({
                        entities: [ Test2Entity ],
                        designDocs: [ Test2DesignDoc ]
                    })
                ]
            }).compileComponents();
        });
        
        it('should create', () => {
            expect(AdamantModule).not.to.be.undefined
        });
        
        it('should provide connection-manager', inject([ AdamantConnectionManager ], (connection : AdamantConnectionManager) => {
            expect(connection).to.be.instanceOf(AdamantConnectionManager);
            expect(connection.getRepository(TestEntity)).to.be.instanceOf(AdamantRepository)
        }));
        
        it('should provide entities and design docs', inject([ ADAMANT_ENTITIES, ADAMANT_DESIGN_DOCS ], (entities : Type<any>[][], designDocs : any[][]) => {
            expect(entities).to.be.an('array').with.length(2);
            expect(entities[ 0 ]).to.be.an('array').with.length(1);
            expect(entities[ 0 ][ 0 ]).to.be.equal(TestEntity);
            expect(entities[ 1 ]).to.be.an('array').with.length(1);
            expect(entities[ 1 ][ 0 ]).to.be.equal(Test2Entity);
            
            expect(designDocs).to.be.an('array').with.length(2);
            expect(designDocs[ 0 ]).to.be.an('array').with.length(1);
            expect(designDocs[ 0 ][ 0 ]).to.be.instanceOf(TestDesignDoc);
            expect(designDocs[ 1 ]).to.be.an('array').with.length(1);
            expect(designDocs[ 1 ][ 0 ]).to.be.instanceOf(Test2DesignDoc);
        }));
    });
});
