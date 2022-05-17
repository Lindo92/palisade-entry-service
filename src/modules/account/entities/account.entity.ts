import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../enums/user-role.enum";

export type AccountDocument = Account & Document
@ObjectType()
@Schema({ timestamps: true })
export class Account {
  @ApiProperty({
    description: 'The first name of the account holder.',
    example: 'John',
    type: String,
  })
  @Prop({ required: true })
  @Field({ description: 'The first name of the account holder.' })
  firstname!: string;

  @ApiProperty({
    description: 'The last name of the account holder.',
    example: 'Doe',
    type: String,
  })
  @Prop({ required: true })
  @Field({ description: 'The last name of the account holder.' })
  lastname!: string;

  @ApiProperty({
    description: 'The email name of the account holder.',
    example: 'johndoe@gmail.com',
    type: String,
  })
  @Prop({ required: true })
  @Field({ description: 'The email of the account holder.' })
  email!: string;

  @ApiHideProperty()
  @Prop({ required: true })
  @Field({ description: 'The password of the account holder.' })
  password!: string

  @ApiProperty({
    description: 'The account holders role in regards to the palisade api.',
    example: `'user', 'admin' or 'developer'.`,
    enum: UserRole
  })
  @Prop({ required: true })
  @Field(type => UserRole, { description: 'The role of the account holder. Accaptable values are: USER, DEVELOPER and ADMIN.' })
  role!: UserRole;

}

export const AccountSchema = SchemaFactory.createForClass(Account);
