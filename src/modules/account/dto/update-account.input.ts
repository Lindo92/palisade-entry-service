import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ApiHideProperty } from '@nestjs/swagger';
import { UpsertAccountInput } from './upsert-account.input';

@InputType()
export class UpdateAccountInput extends PartialType(UpsertAccountInput) {

  @ApiHideProperty()
  @Field()
  id: string;
}
