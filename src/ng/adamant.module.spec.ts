import 'mocha';
import './test-init';
import { inject, TestBed } from '@angular/core/testing';
import { AdamantModule } from './adamant.module';
import { expect } from 'chai';
import { AdamantConnectionManager, AdamantRepository, DesignDoc, Entity, Id, View } from '@neoskop/adamant';
import { MemoryPouchDB } from '../../tests/pouchdb';
import { Type } from '@angular/core';
import { AdamantInitializationEnd, AdamantInitializationService } from './adamant-initialization.service';
import { filter, first } from 'rxjs/operators';
import { SinonSpy, spy } from 'sinon';
import { ADAMANT_DESIGN_DOCS, ADAMANT_ENTITIES } from './injector-tokens';

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
    byId = (doc: any) => emit(doc.id);
}

@DesignDoc(Test2Entity, 'test2')
export class Test2DesignDoc {
    @View()
    byId = (doc: any) => emit(doc.id);
}

export function pouchdbFactory(name: string) {
    return new MemoryPouchDB(name);
}

describe('AdamantModule', () => {
    let testUpsertSpy: SinonSpy;
    let test2UpsertSpy: SinonSpy;
    let testQuerySpy: SinonSpy;
    let test2QuerySpy: SinonSpy;
    describe('forRoot', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    AdamantModule.forRoot({
                        factory: pouchdbFactory,
                        entities: [TestEntity],
                        designDocs: [TestDesignDoc]
                    })
                ]
            }).compileComponents();

            testUpsertSpy = spy(TestBed.get(AdamantConnectionManager).getRepository(TestEntity).db, 'upsert');
            testQuerySpy = spy(TestBed.get(AdamantConnectionManager).getRepository(TestEntity).db, 'query');
        });

        it('should create', () => {
            expect(AdamantModule).to.exist;
        });

        it('should provide connection-manager', inject([AdamantConnectionManager], (connection: AdamantConnectionManager) => {
            expect(connection).to.be.instanceOf(AdamantConnectionManager);
            expect((connection as any).connectionFactory).to.be.a('function');
            expect((connection as any).id).to.be.an('object');
            expect((connection as any).injector).to.be.an('object');
            expect(connection.getRepository(TestEntity)).to.be.instanceOf(AdamantRepository);
        }));

        it('should provide entities and design docs', inject(
            [ADAMANT_ENTITIES, ADAMANT_DESIGN_DOCS],
            (entities: Type<any>[][], designDocs: any[][]) => {
                expect(entities)
                    .to.be.an('array')
                    .with.length(1);
                expect(entities[0])
                    .to.be.an('array')
                    .with.length(1);
                expect(entities[0][0]).to.be.equal(TestEntity);

                expect(designDocs)
                    .to.be.an('array')
                    .with.length(1);
                expect(designDocs[0])
                    .to.be.an('array')
                    .with.length(1);
                expect(designDocs[0][0]).to.be.instanceOf(TestDesignDoc);
            }
        ));

        it('should init design docs', inject([AdamantInitializationService], async (initService: AdamantInitializationService) => {
            await initService.events
                .pipe(
                    filter(e => e instanceof AdamantInitializationEnd),
                    first()
                )
                .toPromise();

            expect(testUpsertSpy).to.have.been.calledOnce;
            expect(testUpsertSpy).to.have.been.calledWith('_design/test');

            expect(testQuerySpy).to.have.been.calledOnce;
            expect(testQuerySpy).to.have.been.calledWith('test/byId');
        }));
    });

    describe('forFeature', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    AdamantModule.forRoot({
                        factory: pouchdbFactory,
                        entities: [TestEntity],
                        designDocs: [TestDesignDoc]
                    }),
                    AdamantModule.forFeature({
                        entities: [Test2Entity],
                        designDocs: [Test2DesignDoc]
                    })
                ]
            }).compileComponents();

            testUpsertSpy = spy(TestBed.get(AdamantConnectionManager).getRepository(TestEntity).db, 'upsert');
            testQuerySpy = spy(TestBed.get(AdamantConnectionManager).getRepository(TestEntity).db, 'query');

            test2UpsertSpy = spy(TestBed.get(AdamantConnectionManager).getRepository(Test2Entity).db, 'upsert');
            test2QuerySpy = spy(TestBed.get(AdamantConnectionManager).getRepository(Test2Entity).db, 'query');
        });

        it('should create', () => {
            expect(AdamantModule).not.to.be.undefined;
        });

        it('should provide connection-manager', inject([AdamantConnectionManager], (connection: AdamantConnectionManager) => {
            expect(connection).to.be.instanceOf(AdamantConnectionManager);
            expect(connection.getRepository(TestEntity)).to.be.instanceOf(AdamantRepository);
        }));

        it('should provide entities and design docs', inject(
            [ADAMANT_ENTITIES, ADAMANT_DESIGN_DOCS],
            (entities: Type<any>[][], designDocs: any[][]) => {
                expect(entities)
                    .to.be.an('array')
                    .with.length(2);
                expect(entities[0])
                    .to.be.an('array')
                    .with.length(1);
                expect(entities[0][0]).to.be.equal(TestEntity);
                expect(entities[1])
                    .to.be.an('array')
                    .with.length(1);
                expect(entities[1][0]).to.be.equal(Test2Entity);

                expect(designDocs)
                    .to.be.an('array')
                    .with.length(2);
                expect(designDocs[0])
                    .to.be.an('array')
                    .with.length(1);
                expect(designDocs[0][0]).to.be.instanceOf(TestDesignDoc);
                expect(designDocs[1])
                    .to.be.an('array')
                    .with.length(1);
                expect(designDocs[1][0]).to.be.instanceOf(Test2DesignDoc);
            }
        ));

        it('should init design docs', inject([AdamantInitializationService], async (initService: AdamantInitializationService) => {
            await initService.events
                .pipe(
                    filter(e => e instanceof AdamantInitializationEnd),
                    first()
                )
                .toPromise();

            expect(testUpsertSpy).to.have.been.calledOnce;
            expect(testUpsertSpy).to.have.been.calledWith('_design/test');

            expect(testQuerySpy).to.have.been.calledOnce;
            expect(testQuerySpy).to.have.been.calledWith('test/byId');

            expect(test2UpsertSpy).to.have.been.calledOnce;
            expect(test2UpsertSpy).to.have.been.calledWith('_design/test2');

            expect(test2QuerySpy).to.have.been.calledOnce;
            expect(test2QuerySpy).to.have.been.calledWith('test2/byId');
        }));
    });
});
