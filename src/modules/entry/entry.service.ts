import { ConsoleLogger, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
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
    return await this.entryModel.findByIdAndUpdate(id, updateEntryDto, { new: true });
  }

  async updateAssingedDevelopers(id: string, updateEntryDto: UpdateEntryDto): Promise<Entry> {
    return await this.entryModel.findByIdAndUpdate(id, { assignedDeveloperIds: updateEntryDto.assignedDeveloperIds }, { new: true })

  }

  async updateYourOwn(id: string, _id: string, updateEntryDto: UpdateEntryDto): Promise<Entry> {
    try {
      const entry = await this.entryModel.findById(id);
      if (entry.creatorAccountId.toString() === _id.toString()) {
        return await this.update(id, updateEntryDto);
      } else {
        throw new HttpException('You can only update your own entries.', HttpStatus.BAD_REQUEST)
      }
    } catch (error) {
      throw new HttpException('Found no entries created by this account.', HttpStatus.NOT_FOUND);
    }
  }




  async deleteYourOwn(id: string, _id: string): Promise<void> {
    try {
      const entry = await this.entryModel.findById(id);
      if (entry.creatorAccountId.toString() === _id.toString()) {
        return await this.delete(id);
      } else {
        throw new HttpException('You can only delete your own entries.', HttpStatus.BAD_REQUEST)
      }
    } catch (error) {
      throw new HttpException('Found no entries created by this account.', HttpStatus.NOT_FOUND);
    }
  }

  async delete(id: string): Promise<void> {
    await this.entryModel.findByIdAndDelete(id);
  }

}
