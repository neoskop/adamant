import {
    BelongsTo,
    BelongsToMetadata,
    DesignDoc,
    DesignDocMetadataCollection,
    Entity,
    EntityMetadataCollection,
    Filter,
    HasMany,
    HasManyMap,
    HasManyMapMetadata,
    HasManyMetadata,
    Id,
    IdMetadata,
    IdStrategy,
    Inline,
    InlineEntity,
    InlineMetadata,
    Property,
    PropertyMetadata,
    ValidateDoc,
    View
} from '.';

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

        expect(metadata).toBeInstanceOf(EntityMetadataCollection);
    });

    it('should throw on missing entity annotation', () => {
        expect(() => {
            EntityMetadataCollection.create(MissingEntityMetadataFixture);
        }).toThrow(`Missing metadata 'name' for entity "MissingEntityMetadataFixture"`);
    });

    it('should throw on missing id annotation', () => {
        expect(() => {
            EntityMetadataCollection.create(MissingIdMetadataFixture);
        }).toThrow(`Missing metadata 'id' for entity "MissingIdMetadataFixture"`);
    });

    it('should not throw on missing id annotation on inline entity', () => {
        const metadata = EntityMetadataCollection.create(InlineTestEntity);

        expect(metadata).toBeInstanceOf(EntityMetadataCollection);
    });

    it('should provide full metadata', () => {
        const metadata = EntityMetadataCollection.create(FullMetadataFixture);

        expect(metadata.name).toEqual('full');
        expect(metadata.attachments).toBeFalsy();
        expect(metadata.hydrator).toBeUndefined();
        expect(metadata.validator).toBeUndefined();

        expect(metadata.id).toEqual('id');
        expect(metadata.idType).toEqual(String);
        expect(metadata.idStrategy).toEqual(IdStrategy.Static);

        expect(metadata.properties).toBeInstanceOf(Map);

        expect(metadata.properties.get('id')).toEqual(Object.assign(new IdMetadata(), { type: String, strategy: IdStrategy.Static }));
        expect(metadata.properties.get('name')).toEqual(Object.assign(new PropertyMetadata(), { type: String, required: false }));
        expect(metadata.properties.get('belongsToImplicit')).toEqual(
            Object.assign(new BelongsToMetadata(), { type: Implicit, required: false })
        );
        expect(metadata.properties.get('belongsToExplicit')).toEqual(
            Object.assign(new BelongsToMetadata(), { type: Explicit, required: false })
        );
        expect(metadata.properties.get('inlineImplicit')).toEqual(
            Object.assign(new InlineMetadata(), { type: Implicit, required: false })
        );
        expect(metadata.properties.get('inlineExplicit')).toEqual(
            Object.assign(new InlineMetadata(), { type: Explicit, required: false })
        );
        expect(metadata.properties.get('hasMany')).toEqual(Object.assign(new HasManyMetadata(), { type: Explicit, required: false }));
        expect(metadata.properties.get('hasManyMap')).toEqual(
            Object.assign(new HasManyMapMetadata(), { type: Explicit, required: false })
        );
    });
});

describe('EntityMetadataCollection', () => {
    it('create create default metadata', () => {
        const metadata = DesignDocMetadataCollection.create(TestDesignDoc);

        expect(metadata).toBeInstanceOf(DesignDocMetadataCollection);
    });

    it('should provide full metadata', () => {
        const metadata = DesignDocMetadataCollection.create(TestDesignDoc);

        expect(metadata.entity).toEqual(DefaultMetadataFixture);
        expect(metadata.name).toEqual('default-entity');
        expect(metadata.views).toEqual(new Set(['exampleView']));
        expect(metadata.filters).toEqual(new Set(['exampleFilter']));
        expect(metadata.validateDoc).toEqual('exampleValidateDoc');
    });
});
