import {
  Collection,
  Entity,
  Enum,
  OneToMany,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { ObjectType } from "@nestjs/graphql";
import { UserRole } from "../enums/user-role.enum";
import { Entry } from "./entry.entity";

@ObjectType()
@Entity()
export class Account {
  @PrimaryKey()
  public _id!: ObjectId;

  @SerializedPrimaryKey()
  public id!: string;

  @Property()
  public firstname!: string;

  @Property()
  public lastname!: string;

  @Property()
  public email!: string;

  @Enum(() => UserRole)
  public role!: UserRole;

  @OneToMany(() => Entry, (entry) => entry.id)
  assignedEntries = new Collection<Entry>(this);

  @OneToMany(() => Entry, (entry) => entry.id)
  reportedEntries = new Collection<Entry>(this);
}
