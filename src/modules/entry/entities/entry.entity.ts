import {
  ObjectType,
  Field,
} from "@nestjs/graphql";
import { Category } from "../enums/category.enum";
import { Priority } from "../enums/priority.enum";
import { Account } from "../../account/entities/account.entity";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export type EntryDocument = Entry & Document;
@ObjectType()
@Schema({ timestamps: true })
export class Entry {

  @ApiProperty({
    description: 'The title of the entry, should be concise and hint at what the issue is about.',
    example: 'Get entry by ID returns undefined.',
    type: String,
  })
  @Field({ description: 'The title of the entry, should be concise and hint at what the issue is about.' })
  @Prop({ required: true })
  title!: string;

  @ApiPropertyOptional({
    description: 'The description of the entry, a longer description of the issue, laying out more details.',
    example: 'When I was trying to get a post by its ID using the api, all i got back was undefined, attacked you will find a picture of the api call i made aswell as the logs.',
    type: String,
  })
  @Field({ nullable: true, description: 'The description of the entry, a longer description of the issue, laying out more details.' })
  @Prop({ required: false })
  description?: string;

  @ApiPropertyOptional({
    description: 'How prioritized the issue should be.',
    example: `'Low', 'Medium', 'High' or 'Critical'.`,
    enum: Priority
  })
  @Field(type => Priority, { nullable: true, description: 'How prioritized the issue should be, can be LOW, MEDIUM, HIGH or CRITICAL.' })
  @Prop({ required: false })
  priority?: Priority;

  @ApiPropertyOptional({
    description: 'The category that the entry belongs to.',
    example: `'Frontend', 'Backend' or 'Documentation'.`,
    enum: Category
  })
  @Field(type => Category, { nullable: true, description: 'The category that the entry belongs to, can be FRONTEND, BACKEND, or DOCUMENTATION.' })
  @Prop({ required: false })
  category?: Category;

  @ApiPropertyOptional({
    description: 'An array of URIs of images relevant to the entry.',
    example: `[https://www.dogalize.com/wp-content/uploads/2018/03/ceiling-cat.jpg, https://static.independent.co.uk/2020/09/22/09/Untitled.png?width=1200]`,
    type: [String]
  })
  @Field(type => [String], { nullable: true, description: 'An array of URIs of images relevant to the entry.' })
  @Prop({ required: false })
  images?: string[];

  @ApiPropertyOptional({
    description: 'A closer description of which area of the application the entry pertains to.',
    example: `This error occured in the axios call tied to the ShowEntryById component.`,
    type: String
  })
  @Field({ nullable: true, description: 'A closer description of which area of the application the entry pertains to.' })
  @Prop({ required: false })
  area?: string;

  @ApiPropertyOptional({
    description: 'The name of the product that the entry pertains to.',
    example: `Palisade.`,
    type: String
  })
  @Field({ nullable: true, description: 'The name of the product that the entry pertains to.' })
  @Prop({ required: false })
  product?: string;

  @ApiPropertyOptional({
    description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.',
    example: `1.0.5`,
    type: String
  })
  @Field({ nullable: true, description: 'A promise set by the developer assigned to the entry, should be the number of the version of the app when the entry should be resolved.' })
  @Prop({ required: false })
  toBeFixedByVersion?: string;

  @ApiPropertyOptional({
    description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.',
    example: `[AccountObject, AccountObject, AccountObject]`,
    type: () => [Account]
  })
  @Field(type => [Account], { nullable: true, description: 'An array of account Ids which in turn references the developer or developers assigned to the issue.' })
  @Prop({ required: false, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Account' }] })
  assignedDeveloperIds?: Account[]

  @ApiProperty({
    description: 'A id reference to the account that created the entry.',
    example: '507f1f77bcf86cd799439011',
    type: () => Account,
  })
  @Field(type => Account, { description: 'A id reference to the account that created the entry.' })
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Account' })
  creatorAccountId!: Account;

  @ApiProperty({
    description: 'A flag to see if a issue is ready for testing or not, false by default.',
    example: 'false',
    type: Boolean
  })
  @Field({ defaultValue: false, description: 'A flag to see if a issue is ready for testing or not, false by default.' })
  @Prop({ required: true, default: false })
  isReadyForTesting!: boolean;

  @ApiPropertyOptional({
    description: 'The resultion status of the issue.',
    example: `Issue was ignored, problem lay in reporters use of axios.`,
    type: String
  })
  @Field({ nullable: true, description: 'The resultion status of the issue, examples are that the issue was ignored, is fixed, or that it is fixed but with caveats.' })
  @Prop({ required: false })
  resolutionStatus?: string;

  @ApiProperty({
    description: 'A boolean for seeing if the issue has been closed or not. Default value is false.',
    example: 'false',
    type: Boolean
  })
  @Field({ defaultValue: false, description: 'A boolean for seeing if the issue has been closed or not. Default value is false.' })
  @Prop({ required: true, default: false })
  isClosed!: boolean;
}

export const EntrySchema = SchemaFactory.createForClass(Entry);
