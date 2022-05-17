import { CreateEntryInput } from './create-entry.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ApiHideProperty } from '@nestjs/swagger';

@InputType()
export class UpdateEntryInput extends PartialType(CreateEntryInput) {

  @ApiHideProperty()
  @Field()
  id: string;
}
