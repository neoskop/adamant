export interface AdamantIdMeta {
    _id: string;
}

export interface AdamantRevMeta extends AdamantIdMeta {
    _rev: string;
}

export interface AdamantDeletedMeta {
    _deleted: true;
}

export interface AdamantAttachmentsMeta {
    _attachments: PouchDB.Core.Attachments;
}

export interface AdamantEntityMeta extends Partial<AdamantRevMeta>, Partial<AdamantDeletedMeta>, Partial<AdamantAttachmentsMeta> {}
