import { InputType, Int, Field } from '@nestjs/graphql';
import { UserRole } from '../enums/user-role.enum';

@InputType()
export class CreateAccountInput {

  @Field({ description: 'The username of the account holder.' })
  username!: string;

  @Field({ description: 'The first name of the account holder.' })
  firstname!: string;

  @Field({ description: 'The last name of the account holder.' })
  lastname!: string;

  @Field({ description: 'The email of the account holder.' })
  email!: string;

  @Field({ description: 'The password of the account holder.' })
  password!: string

  @Field(type => UserRole, { description: 'The role of the account holder. Accaptable values are: USER, DEVELOPER and ADMIN.' })
  role!: UserRole;
}
