import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Entry } from './entities/entry.entity';


@Module({
  imports: [MikroOrmModule.forFeature([Entry])],
  providers: [EntryResolver, EntryService]
})
export class EntryModule { }
