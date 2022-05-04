import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry, EntryDocument } from './entities/entry.entity';

@Injectable()
export class EntryService {
constructor(@InjectModel(Entry.name) private readonly entryModel: Model<EntryDocument>){}
  create(createEntryInput: CreateEntryInput) {
    return this.entryModel.create(createEntryInput);
  }

  findAll() {
    return this.entryModel.find()
  }

  findOne(id: string) {
    return this.entryModel.findById(id);
  }

  update(id: string, updateEntryInput: UpdateEntryInput) {
    return this.entryModel.updateOne({_id: id}, updateEntryInput)
  }

  remove(id: string) {
    return this.entryModel.deleteOne({_id: id});
  }
}
