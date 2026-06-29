import Link from "next/link";
import { notFound } from "next/navigation";
import { curriculum, moduleById } from "@/content";

export function generateStaticParams() {
  return curriculum.map((m) => ({ module: m.id }));
}

export default function ModulePage({ params }: { params: { module: string } }) {
  const m = moduleById(params.module);
  if (!m) notFound();
  return (<div>
    <Link href="/learn" className="text-sm text-brand">← Library</Link>
    <h1 className="mt-2 text-2xl font-medium">{m.title}</h1>
    <p className="text-muted">{m.blurb}</p>
    <div className="mt-4 space-y-2">
      {m.lessons.map((l, i) => (
        <Link key={l.id} href={`/lesson/${l.id}`} className="card flex items-center justify-between p-4 hover:border-[#888780]">
          <span>{l.title}</span>
          <span className="text-xs text-muted">Lesson {i + 1} · {l.minutes} min</span>
        </Link>
      ))}
    </div>
  </div>);
}
