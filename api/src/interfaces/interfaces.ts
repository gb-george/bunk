export interface Expense {
  name: string;
  expense: number;
}

export interface Payout {
  owes: string;
  owed: string;
  expense: number;
}

export interface ExpenseReport  {
  total: number;
  equalShare: number;
  payouts: Payout[];
}
