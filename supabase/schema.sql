-- MoneyOS 101 schema. Run in the Supabase SQL editor.
-- Supabase Auth owns auth.users; public.users is the app profile.

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz default now()
);

create table if not exists public.onboarding_profiles (
  user_id uuid primary key references public.users(id) on delete cascade,
  age_range text,
  income_range text,
  savings_range text,
  debt_categories text[],
  confidence_level smallint,
  goals text[],
  completed_at timestamptz default now()
);

create table if not exists public.modules (
  id text primary key,
  title text not null,
  description text,
  icon text,
  sort_order int not null
);

create table if not exists public.lessons (
  id text primary key,
  module_id text references public.modules(id) on delete cascade,
  title text not null,
  body jsonb,
  sort_order int not null,
  xp_reward int default 50
);

create table if not exists public.lesson_progress (
  user_id uuid references public.users(id) on delete cascade,
  lesson_id text references public.lessons(id) on delete cascade,
  status text default 'in_progress',
  completed_at timestamptz,
  primary key (user_id, lesson_id)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  lesson_id text references public.lessons(id) on delete cascade,
  is_correct boolean,
  selected text,
  created_at timestamptz default now()
);

create table if not exists public.calculators_saved (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  calculator text not null,
  inputs jsonb not null,
  result jsonb,
  created_at timestamptz default now()
);

create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  label text not null,
  target_amount numeric,
  target_date date,
  status text default 'active',
  created_at timestamptz default now()
);

create table if not exists public.money_iq_history (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  score int not null,
  reason text,
  created_at timestamptz default now()
);

create table if not exists public.ai_coach_messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  role text not null,
  content text not null,
  created_at timestamptz default now()
);

-- Row Level Security ---------------------------------------------------------
alter table public.users enable row level security;
alter table public.onboarding_profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.calculators_saved enable row level security;
alter table public.goals enable row level security;
alter table public.money_iq_history enable row level security;
alter table public.ai_coach_messages enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;

create policy "own profile" on public.users
  for all using (auth.uid() = id) with check (auth.uid() = id);

-- one owner policy per user-owned table
do $$
declare t text;
begin
  foreach t in array array[
    'onboarding_profiles','lesson_progress','quiz_attempts',
    'calculators_saved','goals','money_iq_history','ai_coach_messages'
  ] loop
    execute format(
      'create policy "own rows" on public.%I for all using (auth.uid() = user_id) with check (auth.uid() = user_id);', t);
  end loop;
end $$;

-- content is world-readable
create policy "public read" on public.modules for select using (true);
create policy "public read" on public.lessons for select using (true);
