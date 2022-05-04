import { UserRole } from '../enums/user-role.enum';
export declare class CreateAccountInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: UserRole;
}
