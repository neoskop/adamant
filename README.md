# @neoskop/adamant

> PouchDB ORM written in pure Typescript  
> ***adamant***: *too hard to cut, break, or pierce.*

## Features

 - Define your entities and design docs with annotations
 - design docs
    - views
    - filters
    - validate_doc_update (with PouchDB-Plugin or CouchDB)
 - Relations
    - belongsTo
    - hasMany/hasManyMap
    - inline

## Installation
```bash
$ yarn add @neoskop/adamant

$ npm i @neoskop/adamant
```

## Usage

**Write you entities/interfaces at once**  
An entity requires an Entity and an Id annotation.

```typescript
@Entity('person')
class PersonEntity {
    @Id()
    id!: string;
    
    @Property()
    name?: string;
}
```

**Create/update/read from database**

```typescript
declare const connection : AdamantConnectionManager;

const repo = connection.getRepository(PersonEntity);

const person = repo.build({ id: '1', name: 'Jon Doe' });

await repo.create(person); // persist in database

person.name = 'Jane Doe';

await repo.update(person); // update database entry
await repo.upsert(person); // inserts/updates if needed

const personCopy = await repo.read('1'); // personCopy equals person

await repo.delete(personCopy); // marks database entry as deleted (_deleted = true)
```

**Create and resolve relations**

```typescript
@Entity('class')
class ClassEntity {
    @Id()
    id!: string;
    
    @HasMany(Person)
    persons?: Person[];
}

const classRepo = connection.getRepository(ClassEntity);
const personRepo = connection.getRepository(PersonEntity);

const janeDoe = personRepo.build({ id: '1', name: 'Jane Doe' });
const jonDoe = personRepo.build({ id: '2', name: 'Jon Doe' });

await personRepo.bulk.create([ janeDoe, jonDoe ]); // persist multiple entities at once

const cls = classRepo.build({ id: '2a', persons: [ janeDoe, jonDoe ] });

await classRepo.create(cls); // relations will be replace with their id's

```

**Angular Module**

```typescript

@NgModule({
    imports: [
        CommonModule,
        AdamantModule.forRoot({
            factory: …,
            entities: […],
            designDocs: […]
        })
    ]
})
export class AppModule {}

```

## Development

### Install dependencies

```bash
$ yarn
```

### Run tests

```bash
$ yarn test
$ yarn run coverage
```

### Build

```bash
$ yarn build
```

# License

MIT License

Copyright (c) 2018 Neoskop GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Sponsor

[![Neoskop GmbH][neoskop-image]][neoskop-url]

[neoskop-image]: ./neoskop.png
[neoskop-url]: https://www.neoskop.de/
