import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountResolver } from './account.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Account } from './entities/account.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Account])],
  providers: [AccountResolver, AccountService]
})
export class AccountModule {}
