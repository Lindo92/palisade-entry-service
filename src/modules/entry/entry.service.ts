import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';
import { Entry } from './entities/entry.entity';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry)
    private readonly entryRepository: EntityRepository<Entry>,
  ) { }

  create(createEntryInput: CreateEntryInput) {
    return this.entryRepository.create(createEntryInput);
  }

  findAll() {
    return this.entryRepository.findAll()
  }

  findOne(id: string) {

    const findOneOption = {
      id: id
    }

    return this.entryRepository.findOne(findOneOption);
  }

  update(id: string, updateEntryInput: UpdateEntryInput) {
    return this.entryRepository.nativeUpdate(id, updateEntryInput)
  }

  remove(id: string) {
    return this.entryRepository.nativeDelete(id);
  }
}
