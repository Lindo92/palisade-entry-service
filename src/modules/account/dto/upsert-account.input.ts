import { InputType, Int, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../enums/user-role.enum';

@InputType()
export class UpsertAccountInput {
  @ApiProperty({
    description: 'The first name of the account holder.',
    example: 'John',
    type: String,
  })
  @Field({ description: 'The first name of the account holder.' })
  firstname!: string;

  @ApiProperty({
    description: 'The last name of the account holder.',
    example: 'Doe',
    type: String,
  })
  @Field({ description: 'The last name of the account holder.' })
  lastname!: string;

  @ApiProperty({
    description: 'The email name of the account holder.',
    example: 'johndoe@gmail.com',
    type: String,
  })
  @Field({ description: 'The email of the account holder.' })
  email!: string;

  @ApiProperty({
    description: 'The secure password of the account holder.',
    example: '!mYSecUr3Pas5w0rd_',
    type: String,
  })
  @Field({ description: 'The password of the account holder.' })
  password!: string

  @ApiProperty({
    description: 'The account holders role in regards to the palisade api.',
    example: `'user', 'admin' or 'developer'.`,
    enum: UserRole
  })
  @Field(type => UserRole, { description: 'The role of the account holder. Accaptable values are: USER, DEVELOPER and ADMIN.' })
  role!: UserRole;
}
