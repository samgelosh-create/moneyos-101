import Link from "next/link";
import { Disclaimer } from "@/components/ui";
import { CALCS } from "@/components/Calculators";

export default function CalcHub() {
  return (<div>
    <h1 className="text-2xl font-medium">Calculators</h1>
    <p className="mt-1 text-muted">Plug in your own numbers. Everything runs in your browser — nothing is stored.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {Object.entries(CALCS).map(([slug, c]) => (
        <Link key={slug} href={`/calculators/${slug}`} className="card p-5 hover:border-[#888780]">
          <h3 className="font-medium">{c.title}</h3>
          <p className="mt-1 text-sm text-muted">{c.blurb}</p>
        </Link>
      ))}
    </div>
    <Disclaimer />
  </div>);
}
