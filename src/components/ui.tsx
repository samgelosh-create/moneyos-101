import Link from "next/link";
import type { ReactNode } from "react";

export function Disclaimer() {
  return (
    <p className="disclaimer mt-6 rounded-lg bg-[#f1efe8] px-3 py-2">
      Educational only. Not financial advice. We do not recommend specific securities.
      Calculators use assumptions and estimates. Consult a qualified professional for
      personal financial decisions.
    </p>
  );
}

export function ProgressRing({ value, size = 110 }: { value: number; size?: number }) {
  const r = size / 2 - 6;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e7e7e4" strokeWidth={8} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#185fa5" strokeWidth={8}
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
        transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle"
        fontSize={size / 4} fontWeight={500} fill="#0f1115">{value}</text>
      <text x="50%" y="66%" textAnchor="middle" fontSize={11} fill="#6b7280">Money IQ</text>
    </svg>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card p-5 ${className}`}>{children}</div>;
}

export function Nav() {
  const items = [["/dashboard", "Dashboard"], ["/learn", "Learn"],
    ["/calculators", "Calculators"], ["/coach", "Coach"], ["/profile", "Profile"]];
  return (
    <header className="border-b border-line bg-white">
      <nav className="container-page flex items-center gap-1 py-3" style={{ paddingBottom: 12, paddingTop: 12 }}>
        <Link href="/" className="mr-auto font-medium">MoneyOS&nbsp;101</Link>
        {items.map(([href, label]) => (
          <Link key={href} href={href} className="rounded-lg px-3 py-1.5 text-sm text-muted hover:bg-[#f1efe8]">{label}</Link>
        ))}
      </nav>
    </header>
  );
}
