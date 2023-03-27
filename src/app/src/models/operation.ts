import { OperationType } from "./type";

export interface Operation{
  value: number,
  currency: string,
  type: OperationType,
  desireLevel: number

}
