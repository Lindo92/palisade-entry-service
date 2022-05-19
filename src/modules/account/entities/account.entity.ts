import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Role } from "../enums/role.enum";

export type AccountDocument = Account & Document

@Schema({ timestamps: true })
export class Account {

  @ApiProperty({
    description: 'The username of the account holder.',
    example: 'JohnDoe99',
    type: String,
  })
  @Prop({ required: true, unique: true })
  username!: string;

  @ApiProperty({
    description: 'The first name of the account holder.',
    example: 'John',
    type: String,
  })
  @Prop({ required: true })
  firstname!: string;

  @ApiProperty({
    description: 'The last name of the account holder.',
    example: 'Doe',
    type: String,
  })
  @Prop({ required: true })
  lastname!: string;

  @ApiProperty({
    description: 'The email name of the account holder.',
    example: 'johndoe@gmail.com',
    type: String,
  })
  @Prop({ required: true })
  email!: string;

  @ApiHideProperty()
  @Prop({ required: true })
  password!: string

  @ApiProperty({
    description: 'The account holders roles in regards to the palisade api.',
    example: `'user', 'admin' or 'developer'.`,
    enum: [Role]
  })
  @Prop({ required: true })
  roles!: Role[];

}

export const AccountSchema = SchemaFactory.createForClass(Account);
