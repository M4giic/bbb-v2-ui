import { Operation } from "./operation";
import { PlannedOperation } from "./plannedOperation";
import { TypeFamily } from "./typeFamily";

export interface Wallet{
  id : string,
  name : string,
  operations: Operation[],
  plannedOpertaions: PlannedOperation[],
  types: TypeFamily[],
}
