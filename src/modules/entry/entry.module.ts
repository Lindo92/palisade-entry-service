import { Module } from "@nestjs/common";
import { EntryService } from "./entry.service";
import { Entry, EntrySchema } from "./entities/entry.entity";
import { MongooseModule } from "@nestjs/mongoose";
import { EntryController } from "./entry.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
  ],
  providers: [EntryService],
  controllers: [EntryController],
})
export class EntryModule { }
