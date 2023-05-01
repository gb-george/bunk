import { ExpenseReport, Payout, Expense } from "../interfaces/interfaces";

interface Balance {
  [name: string]: number;
}

export function calculatePayouts(expenses: Expense[]): ExpenseReport {
  // Combine expenses of users with same name
  const combinedExpenses = expenses.reduce(
    (acc: Record<string, number>, curr: Expense) => {
      if (!acc[curr.name]) {
        acc[curr.name] = 0;
      }
      acc[curr.name] += curr.expense;
      return acc;
    },
    {}
  );

  //total amount
  const total = Object.values(combinedExpenses).reduce(
    (acc: number, curr: number) => acc + curr,
    0
  );

  // equal share for each person
  const numPeople = new Set(expenses.map((expense) => expense.name)).size;
  const equalShare = total / numPeople;

  // calculate how much each person owes or is owed
  const balance: Balance = {};
  for (let name in combinedExpenses) {
    if (!balance[name]) {
      balance[name] = 0;
    }
    balance[name] += combinedExpenses[name] - equalShare;
  }

  // convert the balance object into an array of payouts
  const payouts: Payout[] = [];
  for (let oweName in balance) {
    for (let owedName in balance) {
      if (
        oweName !== owedName &&
        balance[oweName] < 0 &&
        balance[owedName] > 0
      ) {
        const expense = Math.min(-balance[oweName], balance[owedName]);
        payouts.push({
          owes: oweName,
          owed: owedName,
          expense: Math.round(expense * 100) / 100,
        });
        balance[oweName] += expense;
        balance[owedName] -= expense;
      }
    }
  }

  return {
    total: Math.round(total * 100) / 100,
    equalShare: Math.round(equalShare * 100) / 100,
    payouts: payouts,
  };
}
