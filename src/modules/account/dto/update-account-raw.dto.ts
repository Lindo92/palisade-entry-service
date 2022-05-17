import { ApiProperty } from "@nestjs/swagger";
import { UpdateAccountInput } from "./update-account.input";

export class UpdateAccountRawDto {
  @ApiProperty({
    description: 'The filter used to determine which account to update.',
    example: 'filter: {email: johndoe@gmail.com}',
    type: Object,
  })
  filter: Record<string, unknown>;

  @ApiProperty({
    description: 'An Update Account Dto.',
    type: () => UpdateAccountInput,
  })
  updateAccountInput: UpdateAccountInput
}
