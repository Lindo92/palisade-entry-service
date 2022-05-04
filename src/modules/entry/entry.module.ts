import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';
import { Entry, EntrySchema } from './entities/entry.entity';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }])],
  providers: [EntryResolver, EntryService]
})
export class EntryModule { }
