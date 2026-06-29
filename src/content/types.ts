// Curriculum content model. Lessons are short and block-based so the renderer
// can stay dumb and the writing can stay tight.

export type Block =
  | { kind: "text"; body: string }
  | { kind: "callout"; tone: "tip" | "watch" | "note"; body: string }
  | { kind: "example"; title: string; body: string }
  | { kind: "list"; items: string[] };

export type Quiz = {
  prompt: string;
  options: string[];
  answer: number; // index of the correct option
  explain: string;
};

export type Lesson = {
  id: string;        // e.g. "budgeting-50-30-20"
  title: string;
  minutes: number;
  blocks: Block[];
  takeaway: string;  // one-line "what to remember"
  quiz: Quiz;
  xp: number;
};

export type Module = {
  id: string;
  title: string;
  icon: string;      // tabler icon name
  blurb: string;
  lessons: Lesson[];
};
