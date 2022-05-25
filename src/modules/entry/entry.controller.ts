import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "../account/enums/role.enum";
import RoleGuard from "../authentication/guard/role-auth.guard";
import RequestWithUser from "../authentication/interface/requestWithUser.interface";
import { CreateEntryDto } from "./dto/create-entry.dto";
import { FindEntryRawDto } from "./dto/find-entry-raw.dto";
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
  @UseGuards(RoleGuard(Role.User))
  @Post("/create")
  create(
    @Body() CreateEntryDto: CreateEntryDto,
    @Req() request: RequestWithUser): Promise<Entry> {
    CreateEntryDto = {
      ...CreateEntryDto,
      creatorAccountId: request.user._id
    }
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
  @UseGuards(RoleGuard(Role.User))
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
  @HttpCode(200)
  @UseGuards(RoleGuard(Role.User))
  @Post("/find-raw")
  findRaw(@Body() body: FindEntryRawDto): Promise<Entry[]> {
    return this.entryService.findRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Find Entries By Title, with regex',
    description: 'This endpoint is used for finding all entries that match supplied title.',
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
    description: 'Body must contain a value to match by.',
    type: () => FindEntryRawDto
  })
  @HttpCode(200)
  @UseGuards(RoleGuard(Role.User))
  @Post("/find-title")
  findByName(@Body() body: any): Promise<Entry[]> {
    return this.entryService.findByTitle(body.value)
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
  @UseGuards(RoleGuard(Role.User))
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
  @HttpCode(200)
  @UseGuards(RoleGuard(Role.User))
  @Post("/find-one-raw")
  async findOneRaw(@Body() body: FindEntryRawDto): Promise<Entry> {
    return await this.entryService.findOneRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Update Owned Entry By Id',
    description: 'This endpoint is used for updating an entry that matches supplied id and that the user has created.',
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
  @UseGuards(RoleGuard(Role.User))
  @Patch('/update-your-entry')
  async updateYourOwn(
    @Query("id") id: string,
    @Body() updateEntryDto: UpdateEntryDto,
    @Req() request: RequestWithUser
  ): Promise<Entry> {
    return await this.entryService.updateYourOwn(id, request.user._id, updateEntryDto);
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
  @UseGuards(RoleGuard(Role.Developer))
  @Patch("/update")
  async update(
    @Query("id") id: string,
    @Body() updateEntryDto: UpdateEntryDto
  ): Promise<Entry> {
    return await this.entryService.update(id, updateEntryDto);
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
  @UseGuards(RoleGuard(Role.Admin))
  @Delete("/delete")
  async delete(@Query("id") id: string): Promise<void> {
    await this.entryService.delete(id);
  }

  @ApiOperation({
    summary: 'Delete Your Own Entry By Id',
    description: 'This endpoint is used for deleting an entry that you own and that matches supplied id.',
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
  @UseGuards(RoleGuard(Role.User))
  @Delete("/delete-your-own")
  async deleteYourOwn(
    @Query("id") id: string,
    @Req() request: RequestWithUser): Promise<void> {
    await this.entryService.deleteYourOwn(id, request.user._id);
  }

}
