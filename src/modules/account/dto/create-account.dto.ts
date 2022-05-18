import { ApiProperty } from "@nestjs/swagger";
import { UserRole } from "../enums/user-role.enum";


export class CreateAccountDto {

  @ApiProperty({
    description: 'The username of the account holder.',
    example: 'JohnDoe99',
    type: String,
  })
  username!: string;

  @ApiProperty({
    description: 'The first name of the account holder.',
    example: 'John',
    type: String,
  })
  firstname!: string;

  @ApiProperty({
    description: 'The last name of the account holder.',
    example: 'Doe',
    type: String,
  })
  lastname!: string;

  @ApiProperty({
    description: 'The email name of the account holder.',
    example: 'johndoe@gmail.com',
    type: String,
  })
  email!: string;

  @ApiProperty({
    description: 'The secure password of the account holder.',
    example: '!mYSecUr3Pas5w0rd_',
    type: String,
  })
  password!: string

  @ApiProperty({
    description: 'The account holders role in regards to the palisade api.',
    example: `'user', 'admin' or 'developer'.`,
    enum: UserRole
  })
  role!: UserRole;
}