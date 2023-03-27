import { Operation } from "./operation";

export interface PlannedOperation{
  operation: Operation,
  lastHappened:Date,
  operationCron: string,
}
