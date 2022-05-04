import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAccountInput } from './dto/create-account.input';
import { UpdateAccountInput } from './dto/update-account.input';
import { Account, AccountDocument } from './entities/account.entity';

@Injectable()
export class AccountService {
constructor(@InjectModel(Account.name) private readonly accountModel: Model<AccountDocument>){}
  create(createAccountInput: CreateAccountInput) {
    return this.accountModel.create(createAccountInput);
  }

  findAll() {
    return this.accountModel.find()
  }

  findOne(id: string) {
    return this.accountModel.findById(id);
  }

  update(id: string, updateAccountInput: UpdateAccountInput) {
    return this.accountModel.updateOne({_id: id}, updateAccountInput)
  }

  remove(id: string) {
    return this.accountModel.deleteOne({_id: id});
  }
}
