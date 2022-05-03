import { registerEnumType } from "@nestjs/graphql";

export enum Category {
  FRONTEND = "frontend",
  DOCUMENTATION = "documentation",
  BACKEND = "backend",
}

registerEnumType(Category, {
  name: 'Category',
});