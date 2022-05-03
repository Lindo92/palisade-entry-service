import { registerEnumType } from "@nestjs/graphql";

export enum UserRole {
  ADMIN = "admin",
  DEVELOPER = "developer",
  USER = "user",
}

registerEnumType(UserRole, {
  name: 'UserRole',
});