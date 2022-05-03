import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Entry } from './model/entry.entity';
import { Account } from './model/account.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Entry, Account])],
  providers: [EntryResolver, EntryService]
})
export class EntryModule { }
