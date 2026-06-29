"use client";
import { useState } from "react";
import Link from "next/link";
import type { Lesson, Block } from "@/content/types";

function BlockView({ b }: { b: Block }) {
  if (b.kind === "text") return <p className="mt-3 leading-relaxed">{b.body}</p>;
  if (b.kind === "list")
    return <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px]">{b.items.map((x, i) => <li key={i}>{x}</li>)}</ul>;
  if (b.kind === "example")
    return <div className="mt-3 rounded-lg bg-[#f1efe8] p-4"><p className="font-medium">{b.title}</p><p className="mt-1 text-sm">{b.body}</p></div>;
  const tone = b.tone === "watch" ? "#854f0b" : b.tone === "tip" ? "#0f6e56" : "#185fa5";
  return <div className="mt-3 rounded-lg border-l-2 p-3 text-sm" style={{ borderColor: tone, background: "#fff" }}>{b.body}</div>;
}

export function LessonView({ lesson, moduleId }: { lesson: Lesson; moduleId: string }) {
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  return (<div>
    <Link href={`/learn/${moduleId}`} className="text-sm text-brand">← Back to module</Link>
    <article className="card mt-2 p-6">
      <h1 className="text-2xl font-medium">{lesson.title}</h1>
      {lesson.blocks.map((b, i) => <BlockView key={i} b={b} />)}
      <p className="mt-4 rounded-lg bg-brandsoft px-3 py-2 text-sm text-brand">Remember: {lesson.takeaway}</p>
    </article>

    <section className="card mt-4 p-6">
      <h2 className="text-lg font-medium">Quick check</h2>
      <p className="mt-1">{lesson.quiz.prompt}</p>
      <div className="mt-3 space-y-2">
        {lesson.quiz.options.map((o, i) => {
          const isAns = i === lesson.quiz.answer;
          const show = picked !== null;
          const cls = !show ? "border-line" : isAns ? "border-good bg-[#e1f5ee]" : i === picked ? "border-warn" : "border-line";
          return (
            <button key={i} onClick={() => setPicked(i)} disabled={picked !== null}
              className={`block w-full rounded-lg border px-4 py-2 text-left text-sm ${cls}`}>{o}</button>
          );
        })}
      </div>
      {picked !== null && <p className="mt-3 text-sm text-muted">{lesson.quiz.explain}</p>}
      <button onClick={() => setDone(true)}
        className="mt-4 rounded-lg bg-ink px-4 py-2 text-sm text-white">
        {done ? `Completed · +${lesson.xp} XP` : `Complete lesson (+${lesson.xp} XP)`}
      </button>
    </section>
  </div>);
}
