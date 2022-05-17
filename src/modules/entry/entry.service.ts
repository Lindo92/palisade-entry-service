import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { CreateEntryInput } from "./dto/create-entry.input";
import { UpdateEntryInput } from "./dto/update-entry.input";
import { Entry, EntryDocument } from "./entities/entry.entity";

@Injectable()
export class EntryService {
  constructor(
    @InjectModel(Entry.name) private readonly entryModel: Model<EntryDocument>
  ) {}

  async create(createEntryInput: CreateEntryInput): Promise<Entry> {
    return await this.entryModel.create(createEntryInput);
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

  async findOneRaw(filter: FilterQuery<EntryDocument>): Promise<Entry[]> {
    return await this.entryModel.findOne(filter);
  }

  async update(id: string, updateEntryInput: UpdateEntryInput): Promise<Entry> {
    return await this.entryModel.findByIdAndUpdate(id, updateEntryInput);
  }

  async updateRaw(body: Record<string, unknown>): Promise<unknown> {
    return await this.entryModel.updateOne(
      body.filter,
      body.updateAccountInput
    );
  }

  async delete(id: string): Promise<unknown> {
    return await this.entryModel.findByIdAndDelete(id);
  }

  async deleteRaw(filter: FilterQuery<Entry>): Promise<unknown> {
    return await this.entryModel.findOneAndDelete(filter);
  }
}
