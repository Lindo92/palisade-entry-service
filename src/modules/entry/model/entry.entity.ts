import {
  Entity,
  Enum,
  EnumType,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Category } from "../enums/category.enum";
import { Priority } from "../enums/priority.enum";
import { Account } from "./acount.entity";

@ObjectType()
@Entity()
export class Entry {
  @PrimaryKey()
  public _id!: ObjectId;

  @SerializedPrimaryKey()
  public id!: string;

  @Property()
  public title!: string;

  @Property()
  public description!: string;

  @Enum(() => Priority)
  public priority!: Priority;

  @Enum(() => Category)
  public category!: Category;

  @Property()
  public images?: string[];

  @Property()
  public area!: string;

  @Property()
  public product!: string;

  @Property()
  public toBeFixed?: string;

  @ManyToMany()
  public developer?: Account[];

  @ManyToOne()
  public reporter!: Account;

  @Property()
  public isReadyForTesting!: boolean;

  @Property()
  public resolutionStatus?: string;

  @Property()
  public closed!: boolean;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
