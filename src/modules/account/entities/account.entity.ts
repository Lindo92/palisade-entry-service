import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { UserRole } from "../enums/user-role.enum";

export type AccountDocument = Account & Document
@ObjectType()
@Schema({timestamps: true})
export class Account {
  @Prop({required: true})
  @Field({description: 'The first name of the account holder.'})
  firstname!: string;

  @Prop({required: true})
  @Field({description: 'The last name of the account holder.'})
  lastname!: string;

  @Prop({required: true})
  @Field({description: 'The email of the account holder.'})
  email!: string;

  @Prop({required: true})
  @Field({description: 'The password of the account holder.'})
  password!: string

  @Prop({required: true})
  @Field(type => UserRole, {description: 'The role of the account holder. Accaptable values are: USER, DEVELOPER and ADMIN.'})
  role!: UserRole;

}

export const AccountSchema = SchemaFactory.createForClass(Account);
