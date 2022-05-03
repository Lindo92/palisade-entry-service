import {
  Collection,
  Entity,
  Enum,
  IdentifiedReference,
  ManyToMany,
  ManyToOne,
  PrimaryKey,
  Property,
  SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "@mikro-orm/mongodb";
import { ObjectType, Field, Int, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { Category } from "../enums/category.enum";
import { Priority } from "../enums/priority.enum";
import { Account } from "./account.entity";

@ObjectType()
@Entity()
export class Entry {
  @PrimaryKey()
  public _id!: ObjectId;
  
  @Field(type => ID)
  @SerializedPrimaryKey()
  public id!: string;

  @Field()
  @Property()
  public title!: string;

  @Field()
  @Property()
  public description!: string;

  @Field(type => Priority)
  @Enum(() => Priority)
  public priority!: Priority;

  @Field(type => Category)
  @Enum(() => Category)
  public category!: Category;

  @Field(type => [String], {nullable: true})
  @Property()
  public images?: string[];

  @Field()
  @Property()
  public area!: string;

  @Field()
  @Property()
  public product!: string;

  @Field({nullable: true})
  @Property()
  public toBeFixed?: string;

  @Field(type => [Account], {nullable: true})
  @ManyToMany({fixedOrder: true})
  public developer = new Collection<Account>(this)

  @Field(type => Account)
  @ManyToOne()
  public reporter!: IdentifiedReference<Account>;

  @Field()
  @Property()
  public isReadyForTesting!: boolean;

  @Field({nullable: true})
  @Property()
  public resolutionStatus?: string;

  @Field()
  @Property()
  public closed!: boolean;


  @Field(type => GraphQLISODateTime)
  @Property()
  createdAt: Date = new Date();

  @Field(type => GraphQLISODateTime)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
