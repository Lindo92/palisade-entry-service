/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { EntryService } from './entry.service';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
export declare class EntryResolver {
    private readonly entryService;
    constructor(entryService: EntryService);
    createEntry(createEntryInput: CreateEntryInput): Promise<import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/entry.entity").EntryDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/entry.entity").EntryDocument>;
    updateEntry(updateEntryInput: UpdateEntryInput): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/entry.entity").EntryDocument>;
    removeEntry(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, any, import("./entities/entry.entity").EntryDocument> & Entry & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/entry.entity").EntryDocument>;
}
