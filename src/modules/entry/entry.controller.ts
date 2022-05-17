import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CreateEntryInput } from "./dto/create-entry.input";
import { UpdateEntryInput } from "./dto/update-entry.input";
import { Entry } from "./entities/entry.entity";
import { EntryService } from "./entry.service";

@Controller("entries")
export class EntryController {
  constructor(private readonly entryService: EntryService) { }

  @Post("/create")
  create(@Body() CreateEntryInput: CreateEntryInput): Promise<Entry> {
    return this.entryService.create(CreateEntryInput);
  }

  @Get("/find")
  find(): Promise<Entry[]> {
    return this.entryService.find();
  }

  @Get("/find-raw")
  findRaw(@Body() body: Record<string, unknown>): Promise<Entry[]> {
    return this.entryService.findRaw(body.filter);
  }

  @Get("/find-one")
  findOne(@Query("id") id: string): Promise<Entry> {
    return this.entryService.findOne(id);
  }

  @Get("/find-one-raw")
  async findOneRaw(@Body() body: Record<string, any>): Promise<Entry> {
    return await this.findOneRaw(body.filter);
  }

  @Patch("/update")
  async update(
    @Query() id: string,
    @Body() updateEntryInput: UpdateEntryInput
  ): Promise<Entry> {
    return await this.update(id, updateEntryInput);
  }

  @Patch("/update-raw")
  async updateRaw(@Body() body: Record<string, unknown>): Promise<unknown> {
    return await this.entryService.updateRaw(body);
  }

  @Delete("/delete")
  async delete(@Query("id") id: string): Promise<unknown> {
    return await this.entryService.delete(id);
  }

  @Delete("/delete-raw")
  async deleteRaw(@Body() body: Record<string, unknown>): Promise<unknown> {
    return await this.entryService.deleteRaw(body.filter);
  }
}
