# MoneyOS 101

A free financial-literacy app: budgeting, credit, debt payoff, investing basics,
retirement, taxes, insurance, and money psychology. Taught in short, interactive
lessons with seven calculators.

**Educational only. Not financial advice. We do not recommend specific securities.
Calculators use assumptions and estimates. Consult a qualified professional for
personal financial decisions.**

## Stack
Next.js (App Router) · TypeScript · Tailwind · Supabase (Postgres + Auth) · Recharts.

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in Supabase keys
npm run dev
```
Open http://localhost:3000

## Test the finance math
```bash
npm run test       # vitest, formulas in src/lib/finance.ts
npm run typecheck
```

## Database
1. Create a Supabase project.
2. Paste `supabase/schema.sql` into the SQL editor and run it.
3. Seed `modules` and `lessons` from `src/content` (a seed script is a good next step).
4. Put the project URL and anon key in `.env.local`.

## Structure
```
src/app          routes (landing, onboarding, dashboard, learn, lesson, calculators, coach, profile)
src/components    UI building blocks + calculator engines
src/content       the 12-module curriculum (typed data)
src/lib           finance.ts (pure, tested), money-iq.ts, supabase clients
supabase          schema.sql with RLS
```

## What is finished vs. scaffolded
- **Finished:** the 7 calculators (real, tested math) and the curriculum content.
- **Scaffolded:** auth wiring, dashboard data, coach. Routes render with the bundled
  content/mock data so the app runs before Supabase is connected.

## AI coach
Disabled by default (`COACH_ENABLED=false`). When enabled it must teach concepts only
and refuse specific securities, trades, or personalized allocation. See `src/app/coach`.
