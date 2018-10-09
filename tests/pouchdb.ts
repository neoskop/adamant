import PouchDB  from 'pouchdb';

PouchDB.plugin(require('pouchdb-adapter-memory'));
PouchDB.plugin(require('pouchdb-upsert'));
PouchDB.plugin(require('pouchdb-find'));

export const MemoryPouchDB = PouchDB.defaults({ adapter: 'memory' });
