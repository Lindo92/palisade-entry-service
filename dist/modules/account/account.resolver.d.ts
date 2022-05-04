/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
export declare class AccountResolver {
    private readonly accountService;
    constructor(accountService: AccountService);
    createAccount(createAccountInput: CreateAccountInput): Promise<import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/account.entity").AccountDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/account.entity").AccountDocument>;
    updateAccount(updateAccountInput: UpdateAccountInput): import("mongoose").Query<import("mongodb").UpdateResult, import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/account.entity").AccountDocument>;
    removeAccount(id: string): import("mongoose").Query<import("mongodb").DeleteResult, import("mongoose").Document<unknown, any, import("./entities/account.entity").AccountDocument> & Account & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/account.entity").AccountDocument>;
}
