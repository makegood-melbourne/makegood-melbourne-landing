-- One-row table read daily by .github/workflows/supabase-keep-alive.yml
-- so the free Supabase project registers database activity and does not pause.
create table if not exists public.keep_alive (
  id int primary key,
  created_at timestamptz not null default now()
);

insert into public.keep_alive (id) values (1) on conflict (id) do nothing;

alter table public.keep_alive enable row level security;

create policy "Anyone can read keep_alive"
  on public.keep_alive for select
  to anon
  using (true);

grant select on public.keep_alive to anon;
