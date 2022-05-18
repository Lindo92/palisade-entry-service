import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateResult } from "mongodb";
import { FilterQuery, Model } from "mongoose";
import { CreateAccountInput } from "./input/create-account.input";
import { UpdateAccountRawDto } from "./dto/update-account-raw.dto";
import { Account, AccountDocument } from "./entities/account.entity";
import { UpdateAccountInput } from "./input/update-account.input";
import { CreateAccountDto } from "./dto/create-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>
  ) { }

  async create(createAccountInput: CreateAccountInput | CreateAccountDto) {
    return await this.accountModel.create(createAccountInput);
  }

  async find(): Promise<Account[]> {
    return await this.accountModel.find();
  }

  async findRaw(filter: FilterQuery<AccountDocument>): Promise<Account[]> {
    return await this.accountModel.find(filter);
  }

  async findOne(id: string): Promise<Account> {
    return await this.accountModel.findById(id);
  }

  async findOneRaw(filter: FilterQuery<AccountDocument>): Promise<Account> {
    return await this.accountModel.findOne(filter);
  }

  async update(
    id: string,
    updateAccountInput: UpdateAccountInput | UpdateAccountDto
  ): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(id, updateAccountInput);
  }

  async updateRaw(body: UpdateAccountRawDto): Promise<UpdateResult> {
    return await this.accountModel.updateOne(
      body.filter,
      body.updateAccountInput
    );
  }

  async delete(id: string): Promise<unknown> {
    return await this.accountModel.findByIdAndDelete(id);
  }

  async deleteRaw(filter: FilterQuery<AccountDocument>): Promise<unknown> {
    return await this.accountModel.findOneAndDelete(filter);
  }
}
