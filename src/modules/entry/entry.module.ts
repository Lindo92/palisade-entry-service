import { Module } from "@nestjs/common";
import { EntryService } from "./entry.service";
import { EntryResolver } from "./entry.resolver";
import { Entry, EntrySchema } from "./entities/entry.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { EntryController } from "./entry.controller";
import { JwtAuthGuard } from "../authentication/guard/jwt-auth.guard";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
  ],
  providers: [EntryResolver, EntryService, { provide: 'ENTRY_GUARD', useClass: JwtAuthGuard }],
  controllers: [EntryController],
})
export class EntryModule { }
