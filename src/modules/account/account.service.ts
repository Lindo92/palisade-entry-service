import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Account, AccountDocument } from "./entities/account.entity";
import { CreateAccountDto } from "./dto/create-account.dto";
import { UpdateAccountDto } from "./dto/update-account.dto";

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name)
    private readonly accountModel: Model<AccountDocument>
  ) { }

  async create(createAccountDto: CreateAccountDto) {
    const account = await this.accountModel.create(createAccountDto);
    account.password = undefined;
    return account;
  }

  async find(): Promise<Account[]> {
    const accounts = await this.accountModel.find();
    accounts.forEach(account => {
      account.password = undefined
    });
    return accounts;
  }

  async findRaw(filter: FilterQuery<AccountDocument>): Promise<Account[]> {
    const accounts = await this.accountModel.find(filter);
    return accounts;
  }

  async findByUsername(value: string): Promise<Account[]> {
    const accounts = await this.accountModel.find({ username: { $regex: value } })
    return accounts;
  }

  async findOne(id: string): Promise<Account> {
    const account = await this.accountModel.findById(id);
    return account;
  }

  async findOneRaw(filter: FilterQuery<AccountDocument>): Promise<Account> {
    const account = await this.accountModel.findOne(filter);
    return account;

  }

  async update(
    id: string,
    updateAccountDto: UpdateAccountDto
  ): Promise<Account> {
    this.accountModel
    const account = await this.accountModel.findByIdAndUpdate(id, updateAccountDto, { new: true });
    return account;
  }

  async updateRole(id: string, updateAccountDto: UpdateAccountDto): Promise<Account> {
    const account = await this.accountModel.findByIdAndUpdate(id, { roles: updateAccountDto.roles }, { new: true });
    return account;
  }

  async delete(id: string): Promise<void> {
    await this.accountModel.findByIdAndDelete(id);
  }

}
