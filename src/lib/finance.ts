// Pure financial math. No UI, no side effects. Unit-tested in finance.test.ts.
// Everything here is illustrative. Not financial advice.

/** Future value of a starting principal plus a fixed monthly contribution,
 *  compounded monthly. */
export function futureValue(
  principal: number,
  monthlyContribution: number,
  annualRate: number,
  years: number,
): number {
  const r = annualRate / 12;
  const n = years * 12;
  if (r === 0) return principal + monthlyContribution * n;
  const growth = Math.pow(1 + r, n);
  return principal * growth + monthlyContribution * ((growth - 1) / r);
}

/** Months to pay off a balance given a fixed monthly payment and annual APR.
 *  Returns null if the payment never covers the monthly interest. */
export function monthsToPayoff(
  balance: number,
  annualApr: number,
  monthlyPayment: number,
): number | null {
  const r = annualApr / 12;
  if (r === 0) return Math.ceil(balance / monthlyPayment);
  if (monthlyPayment <= balance * r) return null;
  const n = -Math.log(1 - (balance * r) / monthlyPayment) / Math.log(1 + r);
  return Math.ceil(n);
}

/** Total interest paid over the life of a fixed-payment payoff. */
export function totalInterest(
  balance: number,
  annualApr: number,
  monthlyPayment: number,
): number | null {
  const n = monthsToPayoff(balance, annualApr, monthlyPayment);
  if (n === null) return null;
  return Math.max(0, monthlyPayment * n - balance);
}

export type Debt = { name: string; balance: number; apr: number; minPayment: number };

/** Payoff order for the two common strategies.
 *  snowball = smallest balance first; avalanche = highest APR first. */
export function payoffOrder(debts: Debt[], strategy: "snowball" | "avalanche"): Debt[] {
  const copy = [...debts];
  copy.sort((a, b) =>
    strategy === "snowball" ? a.balance - b.balance : b.apr - a.apr,
  );
  return copy;
}

/** Emergency fund target = months of cushion x monthly essential expenses. */
export function emergencyFundTarget(monthlyExpenses: number, months: number): number {
  return monthlyExpenses * months;
}

/** 50/30/20 split of monthly take-home pay. */
export function budgetSplit(takeHome: number) {
  return { needs: takeHome * 0.5, wants: takeHome * 0.3, save: takeHome * 0.2 };
}

/** Dollar-cost averaging: shares bought and the average cost per share when
 *  the same amount is invested at each price. */
export function dca(amountPerPeriod: number, prices: number[]) {
  const shares = prices.reduce((acc, p) => acc + amountPerPeriod / p, 0);
  const invested = amountPerPeriod * prices.length;
  return { shares, invested, avgCost: invested / shares };
}
