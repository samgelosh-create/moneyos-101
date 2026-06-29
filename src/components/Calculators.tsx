"use client";
import { useState } from "react";
import {
  futureValue, monthsToPayoff, totalInterest,
  emergencyFundTarget, budgetSplit, dca,
} from "@/lib/finance";

const usd = (n: number) => "$" + Math.round(n).toLocaleString();

function Slider({ label, value, set, min, max, step = 1, suffix = "" }: {
  label: string; value: number; set: (n: number) => void;
  min: number; max: number; step?: number; suffix?: string;
}) {
  const display = suffix === "$" ? usd(value) : `${value}${suffix}`;
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label className="text-sm text-muted">{label}</label>
        <span className="font-medium">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => set(Number(e.target.value))} className="w-full" />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#f1efe8] p-4">
      <p className="text-sm text-muted">{label}</p>
      <p className="text-2xl font-medium">{value}</p>
    </div>
  );
}

export function BudgetCalc() {
  const [inc, setInc] = useState(4000);
  const s = budgetSplit(inc);
  return (<div>
    <Slider label="Monthly take-home" value={inc} set={setInc} min={1000} max={12000} step={100} suffix="$" />
    <div className="grid grid-cols-3 gap-3">
      <Stat label="Needs 50%" value={usd(s.needs)} />
      <Stat label="Wants 30%" value={usd(s.wants)} />
      <Stat label="Save 20%" value={usd(s.save)} />
    </div>
    <p className="mt-3 text-sm text-muted">A starting frame, not a rule. High-cost areas often run closer to 60/20/20.</p>
  </div>);
}

export function EmergencyCalc() {
  const [exp, setExp] = useState(2500); const [mon, setMon] = useState(6);
  return (<div>
    <Slider label="Monthly essential expenses" value={exp} set={setExp} min={500} max={8000} step={50} suffix="$" />
    <Slider label="Months of cushion" value={mon} set={setMon} min={1} max={12} suffix=" mo" />
    <Stat label="Target fund" value={usd(emergencyFundTarget(exp, mon))} />
  </div>);
}

export function CreditCardCalc() {
  const [bal, setBal] = useState(5000); const [apr, setApr] = useState(22); const [pay, setPay] = useState(200);
  const n = monthsToPayoff(bal, apr / 100, pay);
  const ti = totalInterest(bal, apr / 100, pay);
  return (<div>
    <Slider label="Balance" value={bal} set={setBal} min={500} max={30000} step={100} suffix="$" />
    <Slider label="APR" value={apr} set={setApr} min={5} max={35} suffix="%" />
    <Slider label="Monthly payment" value={pay} set={setPay} min={50} max={2000} step={10} suffix="$" />
    <div className="grid grid-cols-2 gap-3">
      <Stat label="Time to payoff" value={n === null ? "Never" : `${n} mo`} />
      <Stat label="Total interest" value={ti === null ? "—" : usd(ti)} />
    </div>
    {n === null && <p className="mt-3 text-sm text-warn">Your payment is too small to cover monthly interest — the balance would grow.</p>}
  </div>);
}

export function DebtCalc() {
  const [extra, setExtra] = useState(300);
  return (<div>
    <div className="rounded-lg bg-[#f1efe8] p-4 text-sm">
      <p>Card A · $1,200 · 24%</p><p>Card B · $3,500 · 19%</p><p>Loan C · $800 · 11%</p>
    </div>
    <div className="my-4"><Slider label="Extra payment / month" value={extra} set={setExtra} min={50} max={1000} step={10} suffix="$" /></div>
    <div className="grid grid-cols-2 gap-3">
      <Stat label="Snowball order" value="C → A → B" />
      <Stat label="Avalanche order" value="A → B → C" />
    </div>
    <p className="mt-3 text-sm text-muted">With {usd(extra)} extra/month, avalanche saves the most interest; snowball gives quicker early wins.</p>
  </div>);
}

export function CompoundCalc() {
  const [p, setP] = useState(1000); const [pmt, setPmt] = useState(200);
  const [r, setR] = useState(7); const [yr, setYr] = useState(30);
  const fv = futureValue(p, pmt, r / 100, yr);
  const contrib = p + pmt * 12 * yr;
  return (<div>
    <Slider label="Starting amount" value={p} set={setP} min={0} max={50000} step={100} suffix="$" />
    <Slider label="Monthly contribution" value={pmt} set={setPmt} min={0} max={2000} step={25} suffix="$" />
    <Slider label="Annual return" value={r} set={setR} min={1} max={12} suffix="%" />
    <Slider label="Years" value={yr} set={setYr} min={1} max={40} suffix=" yr" />
    <div className="grid grid-cols-2 gap-3">
      <Stat label="Future value" value={usd(fv)} />
      <Stat label="You contributed" value={usd(contrib)} />
    </div>
    <p className="mt-3 text-sm text-muted">Growth from compounding: {usd(fv - contrib)}.</p>
  </div>);
}

export function DcaCalc() {
  const [amt, setAmt] = useState(500);
  const prices = [100, 90, 110, 95, 105];
  const r = dca(amt, prices);
  return (<div>
    <p className="mb-3 text-sm text-muted">Sample prices: $100, $90, $110, $95, $105.</p>
    <Slider label="Invested each period" value={amt} set={setAmt} min={50} max={1000} step={50} suffix="$" />
    <div className="grid grid-cols-2 gap-3">
      <Stat label="Avg cost / share" value={"$" + r.avgCost.toFixed(2)} />
      <Stat label="Total shares" value={r.shares.toFixed(1)} />
    </div>
    <p className="mt-3 text-sm text-muted">DCA reduces timing risk. It does not guarantee a profit and is not a recommendation to buy anything.</p>
  </div>);
}

export function RetirementCalc() {
  const [age, setAge] = useState(30); const [ret, setRet] = useState(65);
  const [rc, setRc] = useState(500); const [rr, setRr] = useState(7);
  const fv = futureValue(0, rc, rr / 100, Math.max(0, ret - age));
  return (<div>
    <Slider label="Current age" value={age} set={setAge} min={18} max={60} />
    <Slider label="Retirement age" value={ret} set={setRet} min={50} max={75} />
    <Slider label="Monthly contribution" value={rc} set={setRc} min={50} max={3000} step={50} suffix="$" />
    <Slider label="Annual return" value={rr} set={setRr} min={3} max={10} suffix="%" />
    <Stat label="Projected balance at retirement" value={usd(fv)} />
    <p className="mt-3 text-sm text-muted">Assumes steady returns and contributions. An employer match would add more.</p>
  </div>);
}

export const CALCS: Record<string, { title: string; blurb: string; Comp: () => JSX.Element }> = {
  "budget": { title: "Budget builder", blurb: "Split income with the 50/30/20 frame", Comp: BudgetCalc },
  "emergency-fund": { title: "Emergency fund", blurb: "How big your cushion should be", Comp: EmergencyCalc },
  "credit-card-payoff": { title: "Credit card payoff", blurb: "Months and interest to clear a balance", Comp: CreditCardCalc },
  "debt-strategy": { title: "Debt strategy", blurb: "Snowball vs. avalanche", Comp: DebtCalc },
  "compound-interest": { title: "Compound interest", blurb: "Watch money grow over time", Comp: CompoundCalc },
  "dca": { title: "Dollar-cost averaging", blurb: "Investing a fixed amount regularly", Comp: DcaCalc },
  "retirement": { title: "Retirement contribution", blurb: "Project a retirement balance", Comp: RetirementCalc },
};
