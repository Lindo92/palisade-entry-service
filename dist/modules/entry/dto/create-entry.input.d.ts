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
    assignedDeveloperIds?: string[];
    creatorAccountId: string;
    isReadyForTesting: boolean;
    resolutionStatus?: string;
    closed: boolean;
}
