import { ApiHideProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Role } from "../enums/role.enum";


export class UpdateAccountDto {

  @ApiHideProperty()
  id: string;

  @ApiPropertyOptional({
    description: 'The first name of the account holder.',
    example: 'John',
    type: String,
  })
  firstname?: string;

  @ApiPropertyOptional({
    description: 'The last name of the account holder.',
    example: 'Doe',
    type: String,
  })
  lastname?: string;

  @ApiPropertyOptional({
    description: 'The email name of the account holder.',
    example: 'johndoe@gmail.com',
    type: String,
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'The secure password of the account holder.',
    example: '!mYSecUr3Pas5w0rd_',
    type: String,
  })
  password?: string

  @ApiPropertyOptional({
    description: 'The account holders role in regards to the palisade api.',
    example: `'user', 'admin' or 'developer'.`,
    enum: [Role]
  })
  roles?: Role[];
}