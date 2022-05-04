import { InputType, Int, Field } from '@nestjs/graphql';
import { Account } from 'src/modules/account/entities/account.entity';
import { Category } from '../enums/category.enum';
import { Priority } from '../enums/priority.enum';

@InputType()
export class CreateEntryInput {
  
  @Field({description: 'The title of the entry, should be concise and hint at what the issue is about.'})
  title!: string;

  @Field({nullable: true, description: 'The description of the entry, a longer description of the issue, laying out more details.'})
  description?: string;

  @Field(type => Priority, {nullable: true, description: 'How prioritized the issue should be, can be LOW, MEDIUM, HIGH or CRITICAL.'})
  priority?: Priority;

  @Field(type => Category, {nullable: true, description: 'The category that the entry belongs to, can be FRONTEND, BACKEND, or DOCUMENTATION.'})
  category?: Category;

  @Field(type => [String], {nullable: true, description: 'An array of URIs of images relevant to the entry.'})
  images?: string[];

  @Field({nullable: true, description: 'A closer description of which area of the application the entry pertains to.'})
  area?: string;

  @Field({nullable: true, description: 'The name of the product that the entry pertains to.'})
  product?: string;

  @Field({nullable: true, description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.'})
  toBeFixed?: string;

  @Field(type => [String], {nullable: true, description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.'})
  assignedDeveloperIds?: string[]

  @Field( {description: 'A id reference to the account that created the entry.'})
  creatorAccountId!: string;

  @Field({defaultValue: false, description: 'A flag to see if a issue is ready for testing or not, false by default.'})
  isReadyForTesting!: boolean;

  @Field({nullable: true, description: 'The resultion status of the issue, examples are that the issue was ignored, is fixed, or that it is fixed but with caveats.'})
  resolutionStatus?: string;

  @Field({defaultValue: false, description: 'A boolean for seeing if the issue has been closed or not. Default value is false.'})
  closed!: boolean;

}
