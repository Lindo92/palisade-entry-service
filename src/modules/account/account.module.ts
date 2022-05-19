import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account, AccountSchema } from './entities/account.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './account.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }])],
  providers: [AccountService],
  controllers: [AccountsController],
  exports: [AccountService]
})
export class AccountModule { }
