import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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
    return await this.entryModel.findByIdAndUpdate(id, updateEntryDto);
  }

  async updateAssingedDevelopers(id: string, updateEntryDto: UpdateEntryDto): Promise<Entry> {
    return await this.entryModel.findByIdAndUpdate(id, { assignedDeveloperIds: updateEntryDto.assignedDeveloperIds })

  }
  async updateYourOwn(entryId: string, _id: string, updateEntryDto: UpdateEntryDto): Promise<any> {
    const check = false;
    const yourEntries: any = await this.findRaw({ creatorAccountId: _id });
    try {
      yourEntries.forEach(entry => {
        if (entry._id === entryId) {
          return this.update(entryId, updateEntryDto)
        }
        else {
          throw new HttpException('You can only update your own entries.', HttpStatus.BAD_REQUEST);
        }
      });
    } catch (error) {
      throw new HttpException('You do not have any created entries to update.', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteYourOwn(entryId: string, _id: string): Promise<any> {
    const check = false;
    const yourEntries: any = await this.findRaw({ creatorAccountId: _id });
    try {
      yourEntries.forEach(entry => {
        if (entry._id === entryId) {
          return this.delete(entryId);
        }
        else {
          throw new HttpException('You can only delete your own entries.', HttpStatus.BAD_REQUEST);
        }
      });
    } catch (error) {
      throw new HttpException('You do not have any created entries to delete.', HttpStatus.BAD_REQUEST);
    }
  }

  async delete(id: string): Promise<unknown> {
    return await this.entryModel.findByIdAndDelete(id);
  }

}
