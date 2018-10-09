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

describe('Bulk', () => {
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
    
    it('should create in bulk', async () => {
        const d = new TestEntity();
        d.id = 'd';
        const e = new TestEntity();
        e.id = 'e';
        
        await repository.bulk.create([ d, e ]);
        
        expect((d as any)._id).to.be.equal('test_2_d');
        expect((d as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
        
        expect((e as any)._id).to.be.equal('test_2_e');
        expect((e as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
    });
    
    it('should update in bulk in bulk', async () => {
        const [ a, b ] = await repository.readAll([ 'a', 'b' ]);
        a.property = 'A';
        b.property = 'B';
        
        await repository.bulk.update([ a, b ]);
    
        expect((a as any)._id).to.be.equal('test_2_a');
        expect((a as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
    
        expect((b as any)._id).to.be.equal('test_2_b');
        expect((b as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        
        const entities = await repository.readAll();
        expect((entities[0] as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        expect((entities[1] as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        expect((entities[2] as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
    });
    
    it('should delete in bulk in bulk', async () => {
        const [ a, b ] = await repository.readAll([ 'a', 'b' ]);
        
        await repository.bulk.delete([ a, b ]);
    
        expect((a as any)._id).to.be.equal('test_2_a');
        expect((a as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        expect((a as any)._deleted).to.be.true;
    
        expect((b as any)._id).to.be.equal('test_2_b');
        expect((b as any)._rev).to.match(/^2-[a-z0-9]{32}$/);
        expect((b as any)._deleted).to.be.true;
        
        const entities = await repository.readAll();
        expect(entities).to.have.length(1);
        expect((entities[0] as any)._rev).to.match(/^1-[a-z0-9]{32}$/);
    });
});
