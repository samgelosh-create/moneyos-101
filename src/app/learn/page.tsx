import Link from "next/link";
import { curriculum, totalLessons } from "@/content";

export default function Learn() {
  return (<div>
    <h1 className="text-2xl font-medium">Course library</h1>
    <p className="mt-1 text-muted">12 modules · {totalLessons()} lessons.</p>
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      {curriculum.map((m) => (
        <Link key={m.id} href={`/learn/${m.id}`} className="card p-5 hover:border-[#888780]">
          <h3 className="font-medium">{m.title}</h3>
          <p className="mt-1 text-sm text-muted">{m.blurb}</p>
          <p className="mt-2 text-xs text-muted">{m.lessons.length} lessons</p>
        </Link>
      ))}
    </div>
  </div>);
}
