/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { UserRole } from "../enums/user-role.enum";
export declare type AccountDocument = Account & Document;
export declare class Account {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: UserRole;
}
export declare const AccountSchema: import("mongoose").Schema<import("mongoose").Document<Account, any, any>, import("mongoose").Model<import("mongoose").Document<Account, any, any>, any, any, any>, {}, {}>;
