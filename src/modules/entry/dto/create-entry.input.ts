import { Collection, IdentifiedReference } from '@mikro-orm/core';
import { InputType, Int, Field } from '@nestjs/graphql';
import { Account } from 'src/modules/account/entities/account.entity';
import { Category } from '../enums/category.enum';
import { Priority } from '../enums/priority.enum';

@InputType()
export class CreateEntryInput {

  @Field()
  title!: string;

  @Field()
  description?: string;

  @Field(type => Priority)
  priority?: Priority;

  @Field(type => Category)
  category?: Category;

  @Field(type => [String], {nullable: true})
  images?: string[];

  @Field()
  area?: string;

  @Field()
  product?: string;

  @Field({nullable: true})
  toBeFixed?: string;

  @Field(type => [Account], {nullable: true})
  developer? = new Collection<Account>(this)

  @Field(type => Account)
  reporter!: IdentifiedReference<Account>;

  @Field()
  isReadyForTesting?: boolean;

  @Field({nullable: true})
  resolutionStatus?: string;

  @Field()
  closed!: boolean;

}
