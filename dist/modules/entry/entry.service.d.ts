/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry, EntryDocument } from './entities/entry.entity';
export declare class EntryService {
    private readonly entryModel;
    constructor(entryModel: Model<EntryDocument>);
    create(createEntryInput: CreateEntryInput): Promise<import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EntryDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EntryDocument>;
    update(id: string, updateEntryInput: UpdateEntryInput): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EntryDocument>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, any, EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EntryDocument>;
}
