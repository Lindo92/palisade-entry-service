import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { UpdateEntryRawDto } from "./dto/update-entry-raw.dto";
import { Entry, EntryDocument } from "./entities/entry.entity";
import { CreateEntryDto } from "./dto/create-entry.dto";
import { UpdateEntryDto } from "./dto/update-entry.dto";

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private readonly entryModel: Model<EntryDocument>
  ) { }

  async create(createEntryDto: CreateEntryDto): Promise<Entry> {
    return await this.entryModel.create(createEntryDto);
  }

  async find(): Promise<Entry[]> {
    return await this.entryModel.find();
  }

  async findRaw(filter: FilterQuery<EntryDocument>): Promise<Entry[]> {
    return await this.entryModel.find(filter);
  }

  async findOne(id: string): Promise<Entry> {
    return await this.entryModel.findById(id);
  }

  async findOneRaw(filter: FilterQuery<EntryDocument>): Promise<Entry> {
    return await this.entryModel.findOne(filter);
  }

  async update(id: string, updateEntryDto: UpdateEntryDto): Promise<Entry> {
    return await this.entryModel.findByIdAndUpdate(id, updateEntryDto);
  }

  async updateRaw(body: UpdateEntryRawDto): Promise<unknown> {
    return await this.entryModel.updateOne(
      body.filter,
      body.updateAccountDto
    );
  }

  async delete(id: string): Promise<unknown> {
    return await this.entryModel.findByIdAndDelete(id);
  }

  async deleteRaw(filter: FilterQuery<Entry>): Promise<unknown> {
    return await this.entryModel.findOneAndDelete(filter);
  }
}
