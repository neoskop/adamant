import 'mocha';
import { Entity } from '../src/annotations/entity';
import { Id } from '../src/annotations/id';
import { Property } from '../src/annotations/property';
import { MemoryPouchDB } from './pouchdb';
import { AdamantConnectionManager, createAdamantConnection } from '../src/connection-manager';
import { expect } from 'chai';
import { AdamantRepository } from '../src/repository';

@Entity('test')
class TestEntity {
    @Id()
    id!: string;
    
    @Property()
    property?: string;
}

describe('Simple CRUD', () => {
    let db : PouchDB.Database<any>;
    let connection : AdamantConnectionManager;
    let repository : AdamantRepository<TestEntity>;
    
    beforeEach(async () => {
        db = new MemoryPouchDB('test');
        connection = createAdamantConnection(() => db);
        repository = connection.getRepository(TestEntity);
        
        await db.bulkDocs([
            { _id: 'test_2_a', id: 'a', property: 'propA' },
            { _id: 'test_2_b', id: 'b', property: 'propB' },
            { _id: 'test_2_c', id: 'c', property: null }
        ]);
    });
    
    afterEach(() => {
        return db.destroy();
    });
    
    it('should read single entity', async () => {
        const entity = await repository.read('b');
        
        expect(entity).to.be.instanceOf(TestEntity);
        expect(entity.id).to.be.equal('b');
        expect(entity.property).to.be.equal('propB');
    });
    
    it('should read all entities', async () => {
        const entities = await repository.readAll();
        
        expect(entities.length).to.be.equal(3);
        expect(entities[0].id).to.be.equal('a');
        expect(entities[1].id).to.be.equal('b');
        expect(entities[2].id).to.be.equal('c');
    });
    
    it('should read many entities', async () => {
        const entities = await repository.readAll([ 'c', 'b' ]);
        
        expect(entities.length).to.be.equal(2);
        expect(entities[0].id).to.be.equal('b');
        expect(entities[1].id).to.be.equal('c');
    });
    
    it('should create an entity', async () => {
        const entity = new TestEntity();
        entity.id = 'd';
        
        await repository.create(entity);
        
        expect((entity as any)._id).to.be.equal('test_2_d');
        expect((entity as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
    });
    
    it('should throw on duplicate id', () => {
        const entity = new TestEntity();
        entity.id = 'c';
        
        return expect(repository.create(entity)).to.eventually.rejected;
    });
    
    it('should update an entity', async () => {
        const entity = await repository.read('c');
        entity.property = 'propC';
        
        await repository.update(entity);
    
        expect((entity as any)._id).to.be.equal('test_2_c');
        expect((entity as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        
        expect((await repository.read('c')).property).to.be.equal('propC');
    });
    
    it('should update an entity even without changes', async () => {
        const entity = await repository.read('c');
        
        await repository.update(entity);
    
        expect((entity as any)._id).to.be.equal('test_2_c');
        expect((entity as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        
        expect((await repository.read('c')).property).to.be.null;
    });
    
    it('should upsert an entity', async () => {
        const entity = await repository.read('c');
        entity.property = 'propC';
        
        await repository.upsert(entity);
        
        expect((entity as any)._id).to.be.equal('test_2_c');
        expect((entity as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        
        expect((await repository.read('c')).property).to.be.equal('propC');
    });
    
    it('should not upsert an entity without changes', async () => {
        const entity = await repository.read('c');
        
        await repository.upsert(entity);
        
        expect((entity as any)._id).to.be.equal('test_2_c');
        expect((entity as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
        
        expect((await repository.read('c')).property).to.be.null;
    });
    
    it('should delete an entity', async () => {
        const entity = await repository.read('c');
        
        await repository.delete(entity);
    
        expect((entity as any)._id).to.be.equal('test_2_c');
        expect((entity as any)._deleted).to.be.true;
        expect((entity as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        
        expect(repository.read('c')).to.eventually.rejectedWith('missing');
    });
    
    it('should read with query', async () => {
        const entities = await repository.query().selector('id', { $gte: 'b' }).limit(1).resolve();
        
        expect(entities).to.have.length(1);
        expect(entities[0].id).to.be.equal('b');
    })
});
