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
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Entry } from "src/modules/entry/entities/entry.entity";
import { UserRole } from "../enums/user-role.enum";


@ObjectType()
@Entity()
export class Account {
  @PrimaryKey()
  public _id!: ObjectId;

  @Field(type => ID)
  @SerializedPrimaryKey()
  public id!: string;

  @Field()
  @Property()
  public firstname!: string;

  @Field()
  @Property()
  public lastname!: string;

  @Field()
  @Property()
  public email!: string;

  @Field(type => UserRole)
  @Enum(() => UserRole)
  public role!: UserRole;

  @Field(type => [Entry], {nullable: true})
  @OneToMany(() => Entry, (entry) => entry.id)
  assignedEntries = new Collection<Entry>(this);

  @Field(type => [Entry], {nullable: true})
  @OneToMany(() => Entry, (entry) => entry.id)
  reportedEntries = new Collection<Entry>(this);
}
