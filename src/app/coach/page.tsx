"use client";
import { useState } from "react";
import { Disclaimer } from "@/components/ui";

const CANNED: Record<string, string> = {
  "snowball vs avalanche": "Both pay several debts by putting extra money toward one at a time. Avalanche targets the highest interest rate first and costs the least overall. Snowball targets the smallest balance first for a quicker, motivating win. Avalanche wins on math; snowball wins on momentum.",
  "emergency fund": "An emergency fund is 3–6 months of essential expenses kept somewhere safe and easy to reach, like a separate savings account. Its job is to keep a surprise from turning into high-interest debt. Many people start with a $1,000 cushion, then build from there.",
  "dca": "Dollar-cost averaging means investing a fixed amount on a regular schedule regardless of price. You buy more shares when prices are low and fewer when high, which smooths your average cost and removes the pressure to time the market. It reduces timing risk but doesn't guarantee a profit.",
  "credit score": "A credit score (roughly 300–850) estimates how reliably you repay. The biggest factors are paying on time and keeping balances low relative to your limits. Checking your own score never hurts it.",
};

function answer(q: string): string {
  const k = Object.keys(CANNED).find((key) => q.toLowerCase().includes(key));
  return k ? CANNED[k] + "\n\nThis is general education, not personalized advice." :
    "I can explain budgeting, debt payoff, credit, and investing concepts — but I won't recommend specific stocks, crypto, or trades. Try asking how a concept works.";
}

export default function Coach() {
  const [msgs, setMsgs] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "Hey! I can explain money concepts. I'll never tell you to buy a specific investment. What's on your mind?" },
  ]);
  const [input, setInput] = useState("");
  const send = (q: string) => {
    if (!q.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: answer(q) }]);
    setInput("");
  };
  return (<div>
    <h1 className="text-2xl font-medium">Money coach</h1>
    <p className="mt-1 text-muted">Concepts and trade-offs only. No specific stock, crypto, or trade recommendations.</p>
    <div className="card mt-4 space-y-3 p-5">
      {msgs.map((m, i) => (
        <div key={i} className={m.role === "user" ? "text-right" : ""}>
          <span className={`inline-block max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2 text-sm ${m.role === "user" ? "bg-ink text-white" : "bg-[#f1efe8]"}`}>{m.text}</span>
        </div>
      ))}
    </div>
    <div className="mt-3 flex gap-2">
      <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(input)}
        placeholder="Ask how something works…" className="flex-1 rounded-lg border border-line px-3 py-2 text-sm" />
      <button onClick={() => send(input)} className="rounded-lg bg-ink px-4 py-2 text-sm text-white">Ask</button>
    </div>
    <Disclaimer />
  </div>);
}
