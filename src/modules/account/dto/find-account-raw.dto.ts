import { ApiProperty } from "@nestjs/swagger";

export class FindAccountRawDto {
  @ApiProperty({
    description: 'The filter used to determine which account to update.',
    example: '{email: johndoe@gmail.com}',
    type: Object,
  })
  filter: Record<string, unknown>;
}