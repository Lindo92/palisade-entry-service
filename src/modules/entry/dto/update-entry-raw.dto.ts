import { ApiProperty } from "@nestjs/swagger";
import { UpdateEntryDto } from "./update-entry.dto";

export class UpdateEntryRawDto {
  @ApiProperty({
    description: 'The filter used to determine which entry to update.',
    example: '{"title": "Empty Arrays"}',
    type: Object,
  })
  filter: Record<string, unknown>;

  @ApiProperty({
    description: 'An Update Entry Dto.',
    type: () => UpdateEntryDto,
  })
  updateAccountDto: UpdateEntryDto
}