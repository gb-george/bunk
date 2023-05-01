import { calculatePayouts } from "../services/payouts.service";

describe("calculatePayouts", () => {
  it("should return correct payouts for equal expenses", () => {
    const expenses = [
      { name: "Alice", expense: 10 },
      { name: "Bob", expense: 10 },
      { name: "Charlie", expense: 10 },
      { name: "Dave", expense: 10 },
    ];
    const result = calculatePayouts(expenses);
    expect(result.total).toBe(40);
    expect(result.equalShare).toBe(10);
    expect(result.payouts).toHaveLength(0);
  });

  it("should return correct payouts for unequal expenses", () => {
    const expenses = [
      { name: "Alice", expense: 10 },
      { name: "Bob", expense: 20 },
      { name: "Charlie", expense: 30 },
      { name: "Dave", expense: 40 },
    ];
    const result = calculatePayouts(expenses);
    expect(result.total).toBe(100);
    expect(result.equalShare).toBe(25);
    expect(result.payouts).toEqual([
      { owes: "Alice", owed: "Charlie", expense: 5 },
      { owes: "Alice", owed: "Dave", expense: 10 },
      { owes: "Bob", owed: "Dave", expense: 5 },
    ]);
  });

  it("should return correct payouts for equal expenses and same name", () => {
    const expenses = [
      { name: "Alice", expense: 10 },
      { name: "Bob", expense: 20 },
      { name: "Charlie", expense: 20 },
      { name: "Dave", expense: 20 },
      { name: "Alice", expense: 10 },
    ];
    const result = calculatePayouts(expenses);
    expect(result.total).toBe(80);
    expect(result.equalShare).toBe(20);
    expect(result.payouts).toEqual([]);
  });
});
