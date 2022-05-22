import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";
import RoleGuard from "../authentication/guard/role-auth.guard";
import RequestWithUser from "../authentication/interface/requestWithUser.interface";
import { AccountService } from "./account.service";
import { FindAccountRawDto } from "./dto/find-account-raw.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";
import { Account } from "./entities/account.entity";
import { Role } from "./enums/role.enum";


@ApiTags('accounts')
@Controller("accounts")
export class AccountsController {
  constructor(private readonly accountService: AccountService) { }

  @ApiOperation({
    summary: 'Find All Accounts',
    description: 'This endpoint is used for getting a array with all accounts.',
  })
  @ApiResponse({
    status: 200,
    type: [Account],
    description: `A successful response with all available accounts.`,
  })
  @ApiResponse({
    status: 500,
    description: 'Something went wrong while trying to get the array of accounts, Please see error.',
  })
  @UseGuards(RoleGuard(Role.Admin))
  @Get("/find")
  async find(): Promise<Account[]> {
    const accounts = await this.accountService.find();
    accounts.forEach(account => {
      account.password = undefined
    });
    return accounts;
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
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value.',
    type: () => FindAccountRawDto
  })
  @UseGuards(RoleGuard(Role.Admin))
  @Post("/find-raw")
  async findRaw(@Body() body: FindAccountRawDto): Promise<Account[]> {
    const accounts = await this.accountService.findRaw(body.filter);
    accounts.forEach(account => {
      account.password = undefined
    });
    return accounts;
  }

  @ApiOperation({
    summary: 'Find Accounts by username',
    description: 'This endpoint is used for finding all accounts that match supplied value with their username.',
  })
  @ApiResponse({
    status: 200,
    type: [Account],
    description: `A successful response with an array of queried accounts.`,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation failed or something went wrong with the query. Please see error.',
  })
  @ApiBody({
    description: 'Body must contain a value to match by.',
    type: () => FindAccountRawDto
  })
  @UseGuards(RoleGuard(Role.Admin))
  @Post("/find-username")
  async findByUsername(@Body() body: any): Promise<Account[]> {
    const accounts = await this.accountService.findByUsername(body.value);
    accounts.forEach(account => {
      account.password = undefined
    });
    return accounts;
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
  @UseGuards(RoleGuard(Role.Admin))
  @Get("/find-one")
  async findOne(@Query("id") id: string): Promise<Account> {
    const account = await this.accountService.findOne(id);
    account.password = undefined;
    return account;
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
    description: 'Body must contain a filter object with the key one wants to find accounts by and the value.',
    type: () => FindAccountRawDto
  })
  @UseGuards(RoleGuard(Role.Admin))
  @Post("/find-one-raw")
  async findOneRaw(@Body() body: FindAccountRawDto): Promise<Account> {
    const account = await this.accountService.findOneRaw(body.filter);
    account.password = undefined;
    return account;
  }

  @ApiOperation({
    summary: 'Update Account Role By Id',
    description: 'This endpoint is used for updating the role of an account that matches supplied id.',
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
    description: 'An updateAccountDto object',
    type: () => UpdateAccountDto
  })
  @UseGuards(RoleGuard(Role.Admin))
  @Patch("/update")
  async updateRole(
    @Query("id") id: string,
    @Body() updateAccountDto: UpdateAccountDto
  ): Promise<Account> {
    const account = await this.accountService.updateRole(id, updateAccountDto);
    account.password = undefined;
    return account;
  }

  @ApiOperation({
    summary: 'Update Your Account By Id',
    description: 'This endpoint is used for updating users account.',
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
    description: 'An updateAccountDto object',
    type: () => UpdateAccountDto
  })
  @UseGuards(RoleGuard(Role.User))
  @Patch("/update-your-account")
  async updateYourOwn(
    @Req() request: RequestWithUser,
    @Body() updateAccountDto: UpdateAccountDto
  ): Promise<Account> {
    const account = await this.accountService.update(request.user._id, updateAccountDto);
    account.password = undefined;
    return account;
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
  @UseGuards(RoleGuard(Role.Admin))
  @Delete("/delete")
  async delete(@Query("id") id: string) {
    await this.accountService.delete(id);
  }

  @ApiOperation({
    summary: 'Delete Your Ownd Account By Id',
    description: 'This endpoint is used for deleting your account.',
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
  @UseGuards(RoleGuard(Role.User))
  @Delete("/delete-your-account")
  async deleteYourOwn(@Req() request: RequestWithUser,) {
    await this.accountService.delete(request.user._id);
  }

}
