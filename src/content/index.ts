import type { Module, Lesson } from "./types";
import { moneyBasics, budgeting, emergencyFunds } from "./modules/foundations";
import { creditCards, debtPayoff, creditScore } from "./modules/credit-debt";
import { investingBasics, dcaModule, retirement } from "./modules/investing";
import { taxes, insurance, psychology } from "./modules/life";

export const curriculum: Module[] = [
  moneyBasics, budgeting, emergencyFunds,
  creditCards, debtPayoff, creditScore,
  investingBasics, dcaModule, retirement,
  taxes, insurance, psychology,
];

export const moduleById = (id: string) => curriculum.find((m) => m.id === id);

export function lessonById(id: string): { module: Module; lesson: Lesson } | null {
  for (const m of curriculum) {
    const lesson = m.lessons.find((l) => l.id === id);
    if (lesson) return { module: m, lesson };
  }
  return null;
}

export const totalLessons = () =>
  curriculum.reduce((acc, m) => acc + m.lessons.length, 0);

export type { Module, Lesson } from "./types";
