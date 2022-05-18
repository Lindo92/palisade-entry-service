import { ApiProperty } from "@nestjs/swagger";

export class FindEntryRawDto {
  @ApiProperty({
    description: 'The filter used to determine which entry to update.',
    example: '{"title": "Empty Arrays"}',
    type: Object,
  })
  filter: Record<string, unknown>;
}