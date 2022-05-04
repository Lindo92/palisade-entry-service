import { Collection, IdentifiedReference } from '@mikro-orm/core';
import { Account } from 'src/modules/account/entities/account.entity';
import { Category } from '../enums/category.enum';
import { Priority } from '../enums/priority.enum';
export declare class CreateEntryInput {
    title: string;
    description?: string;
    priority?: Priority;
    category?: Category;
    images?: string[];
    area?: string;
    product?: string;
    toBeFixed?: string;
    developer?: Collection<Account, unknown>;
    reporter: IdentifiedReference<Account>;
    isReadyForTesting?: boolean;
    resolutionStatus?: string;
    closed: boolean;
}
