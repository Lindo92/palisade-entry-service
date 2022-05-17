import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { AccountService } from "./account.service";
import { Account } from "./entities/account.entity";
import { UpsertAccountInput } from "./dto/upsert-account.input";
import { UpdateAccountInput } from "./dto/update-account.input";


@Resolver(() => Account)
export class AccountResolver {
  constructor(private readonly accountService: AccountService) { }

  @Mutation(() => Account)
  createAccount(
    @Args("createAccountInput") upsertAccountInput: UpsertAccountInput
  ) {
    return this.accountService.create(upsertAccountInput);
  }

  @Query(() => [Account], { name: "account" })
  findAll() {
    return this.accountService.find();
  }

  @Query(() => Account, { name: "account" })
  findOne(@Args("id", { type: () => Int }) id: string) {
    return this.accountService.findOne(id);
  }

  @Mutation(() => Account)
  updateAccount(
    @Args("updateAccountInput") updateAccountInput: UpdateAccountInput
  ) {
    return this.accountService.update(
      updateAccountInput.id,
      updateAccountInput
    );
  }

  @Mutation(() => Account)
  removeAccount(@Args("id", { type: () => Int }) id: string) {
    return this.accountService.delete(id);
  }
}
