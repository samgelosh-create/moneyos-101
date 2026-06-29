import Link from "next/link";
import { Card, ProgressRing, Disclaimer } from "@/components/ui";
import { curriculum, totalLessons } from "@/content";

// Mock progress until Supabase + auth are wired in.
const MOCK = { iq: 62, streak: 6, xp: 1240, doneByModule: { basics: 3, budgeting: 3, emergency: 2, "credit-cards": 1 } as Record<string, number> };

export default function Dashboard() {
  const done = Object.values(MOCK.doneByModule).reduce((a, b) => a + b, 0);
  const pct = Math.round((done / totalLessons()) * 100);
  const current = curriculum.find((m) => { const d = MOCK.doneByModule[m.id] ?? 0; return d > 0 && d < m.lessons.length; }) ?? curriculum[2];
  const cd = MOCK.doneByModule[current.id] ?? 0;
  return (<div>
    <Card>
      <div className="flex items-center gap-5">
        <ProgressRing value={MOCK.iq} />
        <div className="flex-1">
          <h1 className="text-xl font-medium">Welcome back</h1>
          <p className="text-muted">{pct}% of the roadmap complete.</p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-[#f1efe8] p-3"><p className="text-xs text-muted">Streak</p><p className="text-xl font-medium">{MOCK.streak}🔥</p></div>
            <div className="rounded-lg bg-[#f1efe8] p-3"><p className="text-xs text-muted">XP</p><p className="text-xl font-medium">{MOCK.xp.toLocaleString()}</p></div>
            <div className="rounded-lg bg-[#f1efe8] p-3"><p className="text-xs text-muted">Modules</p><p className="text-xl font-medium">{curriculum.filter((m) => (MOCK.doneByModule[m.id] ?? 0) === m.lessons.length).length}/{curriculum.length}</p></div>
          </div>
        </div>
      </div>
    </Card>

    <Card className="mt-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Continue: {current.title}</h3>
        <span className="text-xs text-muted">{cd}/{current.lessons.length}</span>
      </div>
      <p className="mt-1 text-muted">{current.lessons[Math.min(cd, current.lessons.length - 1)].title}</p>
      <Link href={`/lesson/${current.lessons[Math.min(cd, current.lessons.length - 1)].id}`}
        className="mt-3 inline-block rounded-lg bg-ink px-4 py-2 text-sm text-white">Resume lesson</Link>
    </Card>

    <h2 className="mt-6 text-lg font-medium">Your roadmap</h2>
    <Card className="mt-2">
      {curriculum.map((m) => {
        const d = MOCK.doneByModule[m.id] ?? 0;
        const state = d === m.lessons.length ? "done" : d > 0 ? "now" : "lock";
        const color = state === "done" ? "#0f6e56" : state === "now" ? "#185fa5" : "#b4b2a9";
        return (
          <Link key={m.id} href={`/learn/${m.id}`} className="flex items-center gap-3 border-b border-line py-2 last:border-0">
            <span className="h-6 w-6 rounded-full border-2" style={{ borderColor: color }} />
            <span className="flex-1 text-sm" style={{ color: state === "lock" ? "#888780" : undefined }}>{m.title}</span>
            <span className="text-xs text-muted">{d}/{m.lessons.length}</span>
          </Link>
        );
      })}
    </Card>
    <Disclaimer />
  </div>);
}
