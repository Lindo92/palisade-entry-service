import { CreateAccountInput } from './create-account.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { ApiHideProperty } from '@nestjs/swagger';

@InputType()
export class UpdateAccountInput extends PartialType(CreateAccountInput) {

  @ApiHideProperty()
  @Field()
  id: string;
}
