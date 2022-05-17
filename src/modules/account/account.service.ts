import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UpdateResult } from "mongodb";
import { FilterQuery, Model } from "mongoose";
import { UpsertAccountInput } from "./dto/upsert-account.input";
import { UpdateAccountRawDto } from "./dto/update-account-raw.dto";
import { Account, AccountDocument } from "./entities/account.entity";
import { UpdateAccountInput } from "./dto/update-account.input";

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>
  ) { }

  async create(upcertAccountInput: UpsertAccountInput) {
    return await this.accountModel.create(upcertAccountInput);
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
    upcertAccountInput: UpdateAccountInput
  ): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(id, upcertAccountInput);
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
