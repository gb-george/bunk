import { IPayouts } from "./payouts.interface";

export interface IExpenseReport  {
    total: number;
    equalShare: number;
    payouts: IPayouts[];
  }