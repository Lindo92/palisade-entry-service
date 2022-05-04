import { Category } from "../enums/category.enum";
import { Priority } from "../enums/priority.enum";
import { Account } from "../../account/entities/account.entity";
import mongoose from "mongoose";
export declare type EntryDocument = Entry & Document;
export declare class Entry {
    title: string;
    description?: string;
    priority?: Priority;
    category?: Category;
    images?: string[];
    area?: string;
    product?: string;
    toBeFixed?: string;
    assignedDeveloperIds?: Account[];
    creatorAccountId: Account;
    isReadyForTesting: boolean;
    resolutionStatus?: string;
    closed: boolean;
}
export declare const EntrySchema: mongoose.Schema<mongoose.Document<Entry, any, any>, mongoose.Model<mongoose.Document<Entry, any, any>, any, any, any>, {}, {}>;
