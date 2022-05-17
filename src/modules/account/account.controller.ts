import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { AccountService } from "./account.service";
import { CreateAccountInput } from "./dto/create-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";
import { Account } from "./entities/account.entity";

@Controller("accounts")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post("/create")
  create(@Body() createAccountInput: CreateAccountInput): Promise<Account> {
    return this.accountService.create(createAccountInput);
  }

  @Get("/find")
  find(): Promise<Account[]> {
    return this.accountService.find();
  }

  @Get("/find-raw")
  findRaw(@Body() body: Record<string, unknown>): Promise<Account[]> {
    return this.accountService.findRaw(body.filter);
  }

  @Get("/find-one")
  findOne(@Query("id") id: string): Promise<Account> {
    return this.accountService.findOne(id);
  }

  @Get("/find-one-raw")
  async findOneRaw(@Body() body: Record<string, any>): Promise<Account> {
    return await this.findOneRaw(body.filter);
  }

  @Patch("/update")
  async update(
    @Query("id") id: string,
    @Body() updateAccountInput: UpdateAccountInput
  ): Promise<Account> {
    return await this.update(id, updateAccountInput);
  }

  @Patch("/update-raw")
  async updateRaw(@Body() body: Record<string, unknown>): Promise<unknown> {
    return await this.accountService.updateRaw(body);
  }

  @Delete("/delete")
  async delete(@Query("id") id: string): Promise<unknown> {
    return await this.accountService.delete(id);
  }

  @Delete("/delete-raw")
  async deleteRaw(@Body() body: Record<string, unknown>): Promise<unknown> {
    return await this.accountService.deleteRaw(body.filter);
  }
}
