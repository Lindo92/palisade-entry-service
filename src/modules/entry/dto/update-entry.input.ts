import { CreateEntryInput } from './create-entry.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {
  @Field()
  id: string;
}
