/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model } from 'mongoose';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account, AccountDocument } from './entities/account.entity';
export declare class AccountService {
    private readonly accountModel;
    constructor(accountModel: Model<AccountDocument>);
    create(createAccountInput: CreateAccountInput): Promise<import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AccountDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AccountDocument>;
    update(id: string, updateAccountInput: UpdateAccountInput): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AccountDocument>;
    remove(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, any, AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, AccountDocument>;
}
