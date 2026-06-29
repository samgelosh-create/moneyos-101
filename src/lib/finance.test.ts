import { describe, expect, it } from "vitest";
import {
  futureValue, monthsToPayoff, totalInterest, payoffOrder,
  emergencyFundTarget, budgetSplit, dca,
} from "./finance";

describe("finance", () => {
  it("future value of monthly contributions", () => {
    expect(Math.round(futureValue(1000, 200, 0.07, 30))).toBe(252111);
  });
  it("retirement projection", () => {
    expect(Math.round(futureValue(0, 500, 0.07, 35))).toBe(900527);
  });
  it("credit card payoff months and interest", () => {
    expect(monthsToPayoff(5000, 0.22, 200)).toBe(34);
    expect(Math.round(totalInterest(5000, 0.22, 200)!)).toBe(1800);
  });
  it("returns null when payment cannot cover interest", () => {
    expect(monthsToPayoff(10000, 0.24, 150)).toBeNull();
  });
  it("avalanche orders by apr, snowball by balance", () => {
    const d = [
      { name: "A", balance: 1200, apr: 0.24, minPayment: 25 },
      { name: "B", balance: 3500, apr: 0.19, minPayment: 70 },
      { name: "C", balance: 800, apr: 0.11, minPayment: 20 },
    ];
    expect(payoffOrder(d, "avalanche").map((x) => x.name)).toEqual(["A", "B", "C"]);
    expect(payoffOrder(d, "snowball").map((x) => x.name)).toEqual(["C", "A", "B"]);
  });
  it("emergency fund and budget split", () => {
    expect(emergencyFundTarget(3000, 6)).toBe(18000);
    expect(budgetSplit(4000)).toEqual({ needs: 2000, wants: 1200, save: 800 });
  });
  it("dca buys more shares when price dips", () => {
    const r = dca(500, [100, 90, 110, 95, 105]);
    expect(Number(r.avgCost.toFixed(2))).toBe(99.5);
  });
});
