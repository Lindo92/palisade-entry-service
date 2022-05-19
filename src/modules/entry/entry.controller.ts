import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import JwtAuthenticationGuard from "../authentication/guard/jwt-auth.guard";
import { CreateEntryDto } from "./dto/create-entry.dto";
import { FindEntryRawDto } from "./dto/find-entry-raw.dto";
import { UpdateEntryRawDto } from "./dto/update-entry-raw.dto";
import { UpdateEntryDto } from "./dto/update-entry.dto";
import { Entry } from "./entities/entry.entity";
import { EntryService } from "./entry.service";

@ApiTags('entries')
@Controller("entries")
export class EntryController {
  constructor(private readonly entryService: EntryService) { }

  @ApiOperation({
    summary: 'Create Entry',
    description: 'This endpoint is used for creating an entry.',
  })
  @ApiResponse({
    status: 200,
    type: Entry,
    description: `A successful response with the created entries data.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the creation of your entry, Please see error.',
  })
  @ApiBody({
    description: 'The data needed to create an entry an object of type CreateEntryDto.',
    type: () => CreateEntryDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Post("/create")
  create(@Body() CreateEntryDto: CreateEntryDto): Promise<Entry> {
    return this.entryService.create(CreateEntryDto);
  }

  @ApiOperation({
    summary: 'Find All Entries',
    description: 'This endpoint is used for getting a array with all entries.',
  })
  @ApiResponse({
    status: 200,
    type: [Entry],
    description: `A successful response with all available entries.`,
  })
  @ApiResponse({
    status: 500,
    description: 'Something went wrong while trying to get the array of entries, Please see error.',
  })
  @UseGuards(JwtAuthenticationGuard)
  @Get("/find")
  find(): Promise<Entry[]> {
    return this.entryService.find();
  }

  @ApiOperation({
    summary: 'Find Entries Raw',
    description: 'This endpoint is used for finding all entries that match supplied filter.',
  })
  @ApiResponse({
    status: 200,
    type: [Entry],
    description: `A successful response with an array of queried entries.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find entries by and the value.',
    type: () => FindEntryRawDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Get("/find-raw")
  findRaw(@Body() body: FindEntryRawDto): Promise<Entry[]> {
    return this.entryService.findRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Find Entry By Id',
    description: 'This endpoint is used for finding an entry that matches supplied id.',
  })
  @ApiResponse({
    status: 200,
    type: Entry,
    description: `A successful response with an entry.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, Please see error.',
  })
  @ApiQuery({
    name: 'id',
    description: 'The id of the account to be fetched.'
  })
  @UseGuards(JwtAuthenticationGuard)
  @Get("/find-one")
  findOne(@Query("id") id: string): Promise<Entry> {
    return this.entryService.findOne(id);
  }

  @ApiOperation({
    summary: 'Find Entry Raw',
    description: 'This endpoint is used for finding a single entry that match supplied filter. It will return the first entry it finds that matches the filter, if this endpoint is used it should be used with causion, if you search by a key that\'s not unique it\'s extremly unpredictable.',
  })
  @ApiResponse({
    status: 200,
    type: Entry,
    description: `A successful response with first entry that matches filter.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find entries by and the value.',
    type: () => FindEntryRawDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Get("/find-one-raw")
  async findOneRaw(@Body() body: FindEntryRawDto): Promise<Entry> {
    return await this.entryService.findOneRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Update Entry By Id',
    description: 'This endpoint is used for updating an entry that matches supplied id.',
  })
  @ApiResponse({
    status: 200,
    type: Entry,
    description: `A successful update of entry, respone will contain updated entry.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, Please see error.',
  })
  @ApiQuery({
    name: 'id',
    description: 'The id of the entry to be updated.'
  })
  @ApiBody({
    description: 'An updateEntryDto object',
    type: () => UpdateEntryDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Patch("/update")
  async update(
    @Query() id: string,
    @Body() updateEntryDto: UpdateEntryDto
  ): Promise<Entry> {
    return await this.entryService.update(id, updateEntryDto);
  }

  @ApiOperation({
    summary: 'Update Entry Raw',
    description: 'This endpoint is used for Updating a single entry that match supplied filter. It will update the first entry it finds that matches the filter with given information, if this endpoint is used it should be used with causion, if you update by a key that\'s not unique it\'s extremly unpredictable.',
  })
  @ApiResponse({
    status: 200,
    type: Entry,
    description: `A successful response with new updated entry that matches filter.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find entries by and the value, aswell as a updateEntryDto object.',
    type: UpdateEntryRawDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Patch("/update-raw")
  async updateRaw(@Body() body: UpdateEntryRawDto): Promise<unknown> {
    return await this.entryService.updateRaw(body);
  }

  @ApiOperation({
    summary: 'Delete Entry By Id',
    description: 'This endpoint is used for deleting an entry that matches supplied id.',
  })
  @ApiResponse({
    status: 200,
    description: `The delete query ran successfully.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, Please see error.',
  })
  @ApiQuery({
    name: 'id',
    description: 'the id of the entry to be deleted.'
  })
  @UseGuards(JwtAuthenticationGuard)
  @Delete("/delete")
  async delete(@Query("id") id: string): Promise<unknown> {
    return await this.entryService.delete(id);
  }

  @ApiOperation({
    summary: 'Delete Entry Raw',
    description: 'This endpoint is used for deleting a single entry that match supplied filter. It will delete the first entry it finds that matches the filter, if this endpoint is used it should be used with causion, if you delete by a key that\'s not unique it\'s extremly unpredictable.',
  })
  @ApiResponse({
    status: 200,
    description: `The delete query ran successfully.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to delete entries by and the value.',
    type: () => FindEntryRawDto
  })
  @UseGuards(JwtAuthenticationGuard)
  @Delete("/delete-raw")
  async deleteRaw(@Body() body: FindEntryRawDto): Promise<unknown> {
    return await this.entryService.deleteRaw(body.filter);
  }
}
