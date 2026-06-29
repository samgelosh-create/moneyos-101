import Link from "next/link";
import { notFound } from "next/navigation";
import { Disclaimer } from "@/components/ui";
import { CALCS } from "@/components/Calculators";

export function generateStaticParams() {
  return Object.keys(CALCS).map((slug) => ({ slug }));
}

export default function CalcPage({ params }: { params: { slug: string } }) {
  const c = CALCS[params.slug];
  if (!c) notFound();
  const Comp = c.Comp;
  return (<div>
    <Link href="/calculators" className="text-sm text-brand">← Calculators</Link>
    <h1 className="mt-2 text-2xl font-medium">{c.title}</h1>
    <p className="mb-4 text-muted">{c.blurb}</p>
    <div className="card p-5"><Comp /></div>
    <Disclaimer />
  </div>);
}
