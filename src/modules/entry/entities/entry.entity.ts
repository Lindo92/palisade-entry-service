import { ObjectType, Field, Int, ID, GraphQLISODateTime } from "@nestjs/graphql";
import { Category } from "../enums/category.enum";
import { Priority } from "../enums/priority.enum";
import { Account } from "../../account/entities/account.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

export type EntryDocument = Entry & Document;
@ObjectType()
@Schema({timestamps: true})
export class Entry {


  @Field({description: 'The title of the entry, should be concise and hint at what the issue is about.'})
  @Prop({required: true})
  title!: string;

  @Field({nullable: true, description: 'The description of the entry, a longer description of the issue, laying out more details.'})
  @Prop({required: false})
  description?: string;

  @Field(type => Priority, {nullable: true, description: 'How prioritized the issue should be, can be LOW, MEDIUM, HIGH or CRITICAL.'})
  @Prop({required: false})
  priority?: Priority;

  @Field(type => Category, {nullable: true, description: 'The category that the entry belongs to, can be FRONTEND, BACKEND, or DOCUMENTATION.'})
  @Prop({required: false})
  category?: Category;

  @Field(type => [String], {nullable: true, description: 'An array of URIs of images relevant to the entry.'})
  @Prop({required: false})
  images?: string[];

  @Field({nullable: true, description: 'A closer description of which area of the application the entry pertains to.'})
  @Prop({required: false})
  area?: string;

  @Field({nullable: true, description: 'The name of the product that the entry pertains to.'})
  @Prop({required: false})
  product?: string;

  @Field({nullable: true, description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.'})
  @Prop({required: false})
  toBeFixed?: string;

  @Field(type => [Account], {nullable: true, description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.'})
  @Prop({required: false, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }]})
  assignedDeveloperIds?: Account[]

  @Field(type => Account, {description: 'A id reference to the account that created the entry.'})
  @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  creatorAccountId!: Account;

  @Field({defaultValue: false, description: 'A flag to see if a issue is ready for testing or not, false by default.'})
  @Prop({required: true, default: false})
  isReadyForTesting!: boolean;

  @Field({nullable: true, description: 'The resultion status of the issue, examples are that the issue was ignored, is fixed, or that it is fixed but with caveats.'})
  @Prop({required: false})
  resolutionStatus?: string;

  @Field({defaultValue: false, description: 'A boolean for seeing if the issue has been closed or not. Default value is false.'})
  @Prop({required: true, default: false})
  closed!: boolean;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);