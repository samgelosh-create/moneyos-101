import Link from "next/link";
import { Card, Disclaimer } from "@/components/ui";
import { curriculum, totalLessons } from "@/content";

const features = [
  ["12 modules", `From the basics to retirement, ${totalLessons()} short lessons.`],
  ["7 calculators", "Budget, debt payoff, compound growth, and more."],
  ["Streaks & XP", "Build the habit, one level at a time."],
  ["AI coach", "Explains concepts — never picks stocks for you."],
];

export default function Landing() {
  return (
    <div>
      <section className="card p-8 text-center">
        <span className="inline-block rounded-full bg-brandsoft px-3 py-1 text-xs text-brand">Free · Educational</span>
        <h1 className="mt-3 text-3xl font-medium">Learn real money skills, one level at a time.</h1>
        <p className="mx-auto mt-2 max-w-md text-muted">
          Budgeting, credit, debt payoff, investing basics and more — taught like a game,
          not a textbook. Build your Money IQ.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <Link href="/onboarding" className="rounded-lg bg-ink px-4 py-2 text-white">Start free</Link>
          <Link href="/calculators" className="rounded-lg border border-line px-4 py-2">Try a calculator</Link>
        </div>
      </section>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {features.map(([t, d]) => (
          <Card key={t}><h3 className="font-medium">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Card>
        ))}
      </div>

      <h2 className="mt-8 text-lg font-medium">What you'll learn</h2>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {curriculum.map((m) => (
          <div key={m.id} className="card px-4 py-3 text-sm">{m.title}</div>
        ))}
      </div>
      <Disclaimer />
    </div>
  );
}
