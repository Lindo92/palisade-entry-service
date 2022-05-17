import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AccountService } from "./account.service";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountRawDto } from "./dto/update-account-raw.dto";
import { UpdateAccountInput } from "./dto/update-account.input";
import { Account } from "./entities/account.entity";

@ApiTags('accounts')
@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountService: AccountService) { }

  @ApiOperation({
    summary: 'Create Account',
    description: 'This endpoint is used for creating an account.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with the created accounts data.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the creation of your account, Please see error.',
  })
  @ApiBody({
    description: 'The data needed to create an account an object of type CreateAccountInput.'
  })
  @Post("/create")
  create(@Body() createAccountInput: CreateAccountInput): Promise<Account> {
    return this.accountService.create(createAccountInput);
  }

  @ApiOperation({
    summary: 'Find All Accounts',
    description: 'This endpoint is used for getting a array with all accounts.',
  })
  @ApiResponse({
    status: 200,
    type: [Account],
    description: `A successful response with all available accounts..`,
  })
  @ApiResponse({
    status: 500,
    description: 'Something went wrong while trying to get the array of accounts, Please see error.',
  })
  @Get("/find")
  find(): Promise<Account[]> {
    return this.accountService.find();
  }

  @ApiOperation({
    summary: 'Find Accounts Raw',
    description: 'This endpoint is used for finding all accounts that match supplied filter.',
  })
  @ApiResponse({
    status: 200,
    type: [Account],
    description: `A successful response with an array of queried accounts.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value.'
  })
  @Get("/find-raw")
  findRaw(@Body() body: Record<string, unknown>): Promise<Account[]> {
    return this.accountService.findRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Find Account By Id',
    description: 'This endpoint is used for finding an account that matches supplied id.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with an account.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, Please see error.',
  })
  @ApiQuery({
    name: 'id',
    description: 'The id of the account to be fetched.'
  })
  @Get("/find-one")
  findOne(@Query() id: string): Promise<Account> {
    return this.accountService.findOne(id);
  }

  @ApiOperation({
    summary: 'Find Account Raw',
    description: 'This endpoint is used for finding a single account that match supplied filter. It will return the first account it finds that matches the filter, if this endpoint is used it should be used with causion, if you search by a key that\'s not unique it\'s extremly unpredictable.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with first account that matches filter.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value.'
  })
  @Get("/find-one-raw")
  async findOneRaw(@Body() body: Record<string, any>): Promise<Account> {
    return await this.findOneRaw(body.filter);
  }

  @ApiOperation({
    summary: 'Update Account By Id',
    description: 'This endpoint is used for updating an account that matches supplied id.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful update of account, respone will contain updated account.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, Please see error.',
  })
  @ApiQuery({
    name: 'id',
    description: 'The id of the account to be updated.'
  })
  @ApiBody({
    description: 'An updateAccountInput object'
  })
  @Patch("/update")
  async update(
    @Query() id: string,
    @Body() updateAccountInput: UpdateAccountInput
  ): Promise<Account> {
    return await this.update(id, updateAccountInput);
  }

  @ApiOperation({
    summary: 'Update Account Raw',
    description: 'This endpoint is used for Updating a single account that match supplied filter. It will update the first account it finds that matches the filter with given information, if this endpoint is used it should be used with causion, if you update by a key that\'s not unique it\'s extremly unpredictable.',
  })
  @ApiResponse({
    status: 200,
    type: Account,
    description: `A successful response with new updated account that matches filter.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query, most likely the filter was constructed incorrectly, Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value, aswell as a updateAccountInput object.'
  })
  @Patch("/update-raw")
  async updateRaw(@Body() body: UpdateAccountRawDto): Promise<unknown> {
    return await this.accountService.updateRaw(body);
  }

  @ApiOperation({
    summary: 'Delete Account By Id',
    description: 'This endpoint is used for deleting an account that matches supplied id.',
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
    description: 'the id of the account to be deleted.'
  })
  @Delete("/delete")
  async delete(@Query() id: string): Promise<unknown> {
    return await this.accountService.delete(id);
  }

  @ApiOperation({
    summary: 'Delete Account Raw',
    description: 'This endpoint is used for deleting a single account that match supplied filter. It will delete the first account it finds that matches the filter, if this endpoint is used it should be used with causion, if you delete by a key that\'s not unique it\'s extremly unpredictable.',
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
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value.'
  })
  @Delete("/delete-raw")
  async deleteRaw(@Body() body: Record<string, unknown>): Promise<unknown> {
    return await this.accountService.deleteRaw(body.filter);
  }
}
