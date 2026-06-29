// Transparent Money IQ scoring. Explainable on purpose.
export type MoneyIqInput = {
  confidenceLevel: number;   // 1-4 from onboarding
  hasHighInterestDebt: boolean;
  lessonsCompleted: number;
  quizzesCorrect: number;
  calculatorsUsed: number;   // distinct, 0-7
};

export function moneyIqScore(i: MoneyIqInput): number {
  let base = 35 + i.confidenceLevel * 6;        // 41-59
  if (i.hasHighInterestDebt) base -= 5;
  const fromLessons = Math.min(i.lessonsCompleted * 2, 24);
  const fromQuizzes = Math.min(i.quizzesCorrect, 12);
  const fromCalcs = Math.min(i.calculatorsUsed, 7) * 1.5;
  return Math.max(0, Math.min(100, Math.round(base + fromLessons + fromQuizzes + fromCalcs)));
}
