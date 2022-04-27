import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEntryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
