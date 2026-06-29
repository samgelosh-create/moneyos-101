import { notFound } from "next/navigation";
import { curriculum, lessonById } from "@/content";
import { LessonView } from "@/components/LessonView";
import { Disclaimer } from "@/components/ui";

export function generateStaticParams() {
  return curriculum.flatMap((m) => m.lessons.map((l) => ({ lessonId: l.id })));
}

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  const found = lessonById(params.lessonId);
  if (!found) notFound();
  return (<div>
    <LessonView lesson={found.lesson} moduleId={found.module.id} />
    <Disclaimer />
  </div>);
}
