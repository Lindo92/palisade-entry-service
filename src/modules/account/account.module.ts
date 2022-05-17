import { Module } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountResolver } from "./account.resolver";
import { Account, AccountSchema } from "./entities/account.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { AccountController } from "./account.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
  ],
  providers: [AccountResolver, AccountService],
  controllers: [AccountController],
})
export class AccountModule {}
