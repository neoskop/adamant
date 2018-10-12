import 'mocha';
import { expect } from 'chai';
import { Entity } from './annotations/entity';
import { Id, IdMetadata, IdStrategy } from './annotations/id';
import { DesignDocMetadataCollection, EntityMetadataCollection } from './metadata';
import { Property, PropertyMetadata } from './annotations/property';
import { BelongsTo, BelongsToMetadata } from './annotations/belongs-to';
import { Inline, InlineMetadata } from './annotations/inline';
import { HasMany, HasManyMetadata } from './annotations/has-many';
import { HasManyMap, HasManyMapMetadata } from './annotations/has-many-map';
import { InlineEntity } from './annotations/inline-entity';
import { DesignDoc } from './annotations/design-doc';
import { View } from './annotations/view';
import { Filter } from './annotations/filter';
import { ValidateDoc } from './annotations/validate-doc';

@Entity('default-entity')
export class DefaultMetadataFixture {
    @Id()
    id!: string;
}

export class MissingEntityMetadataFixture {
    @Id()
    id!: string;
}

@Entity('missing-id')
export class MissingIdMetadataFixture {}

class Implicit {}
class Explicit {}

@Entity('full')
export class FullMetadataFixture {
    @Id()
    id!: string;

    @Property()
    name?: string;

    @BelongsTo()
    belongsToImplicit?: Implicit;

    @BelongsTo({ type: Explicit })
    belongsToExplicit?: Object;

    @Inline()
    inlineImplicit?: Implicit;

    @Inline({ type: Explicit })
    inlineExplicit?: Object;

    @HasMany(Explicit)
    hasMany?: Object[];

    @HasManyMap(Explicit)
    hasManyMap?: { [key: string]: Object };
}

@InlineEntity()
export class InlineTestEntity {
    @Property()
    key?: string;
}

@DesignDoc(DefaultMetadataFixture)
class TestDesignDoc {
    @View()
    exampleView = 'a';

    @Filter()
    exampleFilter = 'b';

    @ValidateDoc()
    exampleValidateDoc = 'c';
}

describe('EntityMetadataCollection', () => {
    it('create create default metadata', () => {
        const metadata = EntityMetadataCollection.create(DefaultMetadataFixture);

        expect(metadata).to.be.instanceOf(EntityMetadataCollection);
    });

    it('should throw on missing entity annotation', () => {
        expect(() => {
            EntityMetadataCollection.create(MissingEntityMetadataFixture);
        }).to.throw(`Missing metadata 'name' for entity "MissingEntityMetadataFixture"`);
    });

    it('should throw on missing id annotation', () => {
        expect(() => {
            EntityMetadataCollection.create(MissingIdMetadataFixture);
        }).to.throw(`Missing metadata 'id' for entity "MissingIdMetadataFixture"`);
    });

    it('should not throw on missing id annotation on inline entity', () => {
        const metadata = EntityMetadataCollection.create(InlineTestEntity);

        expect(metadata).to.be.instanceOf(EntityMetadataCollection);
    });

    it('should provide full metadata', () => {
        const metadata = EntityMetadataCollection.create(FullMetadataFixture);

        expect(metadata.name).to.be.equal('full');
        expect(metadata.attachments).to.be.false;
        expect(metadata.hydrator).to.be.undefined;
        expect(metadata.validator).to.be.undefined;

        expect(metadata.id).to.be.equal('id');
        expect(metadata.idType).to.be.equal(String);
        expect(metadata.idStrategy).to.be.equal(IdStrategy.Static);

        expect(metadata.properties).to.be.instanceOf(Map);

        expect(metadata.properties.get('id')).to.be.eql(Object.assign(new IdMetadata(), { type: String, strategy: IdStrategy.Static }));
        expect(metadata.properties.get('name')).to.be.eql(Object.assign(new PropertyMetadata(), { type: String, required: false }));
        expect(metadata.properties.get('belongsToImplicit')).to.be.eql(
            Object.assign(new BelongsToMetadata(), { type: Implicit, required: false })
        );
        expect(metadata.properties.get('belongsToExplicit')).to.be.eql(
            Object.assign(new BelongsToMetadata(), { type: Explicit, required: false })
        );
        expect(metadata.properties.get('inlineImplicit')).to.be.eql(
            Object.assign(new InlineMetadata(), { type: Implicit, required: false })
        );
        expect(metadata.properties.get('inlineExplicit')).to.be.eql(
            Object.assign(new InlineMetadata(), { type: Explicit, required: false })
        );
        expect(metadata.properties.get('hasMany')).to.be.eql(Object.assign(new HasManyMetadata(), { type: Explicit, required: false }));
        expect(metadata.properties.get('hasManyMap')).to.be.eql(
            Object.assign(new HasManyMapMetadata(), { type: Explicit, required: false })
        );
    });
});

describe('EntityMetadataCollection', () => {
    it('create create default metadata', () => {
        const metadata = DesignDocMetadataCollection.create(TestDesignDoc);

        expect(metadata).to.be.instanceOf(DesignDocMetadataCollection);
    });

    it('should provide full metadata', () => {
        const metadata = DesignDocMetadataCollection.create(TestDesignDoc);

        expect(metadata.entity).to.be.equal(DefaultMetadataFixture);
        expect(metadata.name).to.be.equal('default-entity');
        expect(metadata.views).to.be.eql(new Set(['exampleView']));
        expect(metadata.filters).to.be.eql(new Set(['exampleFilter']));
        expect(metadata.validateDoc).to.be.equal('exampleValidateDoc');
    });
});
