import { Module } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryResolver } from './entry.resolver';

@Module({
  providers: [EntryResolver, EntryService]
})
export class EntryModule {}
