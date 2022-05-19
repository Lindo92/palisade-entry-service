import { ApiProperty } from "@nestjs/swagger";
import { UpdateAccountDto } from "./update-account.dto";


export class UpdateAccountRawDto {
  @ApiProperty({
    description: 'The filter used to determine which account to update.',
    example: '{email: johndoe@gmail.com}',
    type: Object,
  })
  filter: Record<string, unknown>;

  @ApiProperty({
    description: 'An Update Account Dto.',
    type: () => UpdateAccountDto,
  })
  updateAccountDto: UpdateAccountDto
}
