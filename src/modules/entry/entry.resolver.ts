import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EntryService } from './entry.service';
import { Entry } from './entities/entry.entity';
import { CreateEntryInput } from './dto/create-entry.input';
import { UpdateEntryInput } from './dto/update-entry.input';

@Resolver(() => Entry)
export class EntryResolver {
  constructor(private readonly entryService: EntryService) {}

  @Mutation(() => Entry)
  createEntry(@Args('createEntryInput') createEntryInput: CreateEntryInput) {
    return this.entryService.create(createEntryInput);
  }

  @Query(() => [Entry], { name: 'entry' })
  findAll() {
    return this.entryService.findAll();
  }

  @Query(() => Entry, { name: 'entry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.entryService.findOne(id);
  }

  @Mutation(() => Entry)
  updateEntry(@Args('updateEntryInput') updateEntryInput: UpdateEntryInput) {
    return this.entryService.update(updateEntryInput.id, updateEntryInput);
  }

  @Mutation(() => Entry)
  removeEntry(@Args('id', { type: () => Int }) id: number) {
    return this.entryService.remove(id);
  }
}
