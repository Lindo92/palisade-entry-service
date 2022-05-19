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
    return await this.accountModel.create(createAccountDto);
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
    updateAccountDto: UpdateAccountDto
  ): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(id, updateAccountDto);
  }

  async updateRole(id: string, updateAccountDto: UpdateAccountDto): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(id, { roles: updateAccountDto.roles });
  }

  async delete(id: string): Promise<unknown> {
    return await this.accountModel.findByIdAndDelete(id);
  }

}
