import { registerEnumType } from "@nestjs/graphql";

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

registerEnumType(Priority, {
  name: 'Priority',
});