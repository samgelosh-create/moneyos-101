"use client";
import { useState } from "react";
import Link from "next/link";

const QS = [
  { k: "age", q: "What's your age range?", multi: false, o: ["Under 18", "18–24", "25–34", "35–44", "45–54", "55+"] },
  { k: "income", q: "Annual income range?", multi: false, o: ["Under $25k", "$25k–50k", "$50k–75k", "$75k–120k", "$120k+"] },
  { k: "savings", q: "How much do you have saved?", multi: false, o: ["$0", "Under $1k", "$1k–5k", "$5k–20k", "$20k+"] },
  { k: "debt", q: "Any of these debts? (pick all)", multi: true, o: ["Credit card", "Student loans", "Car loan", "Mortgage", "None"] },
  { k: "confidence", q: "How confident are you with money?", multi: false, o: ["Just starting", "Getting by", "Fairly confident", "Very confident"] },
  { k: "goal", q: "Top goal right now?", multi: false, o: ["Build emergency fund", "Pay off debt", "Start investing", "Save for a goal", "Understand basics"] },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [ans, setAns] = useState<Record<string, string | string[]>>({ debt: [] });
  if (step >= QS.length) {
    return (<div className="card p-8 text-center">
      <h1 className="text-2xl font-medium">You're set up.</h1>
      <p className="mt-2 text-muted">We'll tailor your roadmap.</p>
      <Link href="/dashboard" className="mt-4 inline-block rounded-lg bg-ink px-4 py-2 text-white">Go to dashboard</Link>
    </div>);
  }
  const s = QS[step];
  const pick = (o: string) => {
    if (s.multi) {
      const cur = (ans.debt as string[]) ?? [];
      setAns({ ...ans, debt: cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o] });
    } else setAns({ ...ans, [s.k]: o });
  };
  const sel = (o: string) => s.multi ? ((ans.debt as string[]) ?? []).includes(o) : ans[s.k] === o;
  return (<div className="card p-6">
    <div className="flex justify-between text-sm text-muted"><span>Step {step + 1} of {QS.length}</span><span>{s.multi ? "select any" : "pick one"}</span></div>
    <div className="my-3 h-1.5 rounded-full bg-line"><div className="h-1.5 rounded-full bg-brand" style={{ width: `${(step / QS.length) * 100}%` }} /></div>
    <h2 className="text-lg font-medium">{s.q}</h2>
    <div className="mt-3 grid gap-2 sm:grid-cols-2">
      {s.o.map((o) => (
        <button key={o} onClick={() => pick(o)}
          className={`rounded-lg border px-4 py-2 text-left text-sm ${sel(o) ? "border-brand bg-brandsoft" : "border-line"}`}>{o}</button>
      ))}
    </div>
    <div className="mt-5 flex justify-between">
      <button onClick={() => setStep(step - 1)} disabled={step === 0} className="rounded-lg border border-line px-4 py-2 text-sm disabled:opacity-40">Back</button>
      <button onClick={() => setStep(step + 1)} className="rounded-lg bg-ink px-4 py-2 text-sm text-white">{step === QS.length - 1 ? "Finish" : "Next"}</button>
    </div>
  </div>);
}
