-- Heavier keep alive: each ping writes to the database, not just reads.
-- Called every few hours by .github/workflows/supabase-keep-alive.yml via
-- POST /rest/v1/rpc/keep_alive_ping with the public anon key.

alter table public.keep_alive add column if not exists pinged_at timestamptz;
alter table public.keep_alive add column if not exists ping_count bigint not null default 0;

create table if not exists public.keep_alive_log (
  id bigint generated always as identity primary key,
  pinged_at timestamptz not null default now(),
  source text
);

-- No policies: anon cannot read or write this table directly, only through the function below.
alter table public.keep_alive_log enable row level security;

create or replace function public.keep_alive_ping(p_source text default 'github')
returns table (ping_count bigint, pinged_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Log at most one row every 10 minutes, so the public endpoint cannot be used to flood the table.
  if not exists (
    select 1 from public.keep_alive_log l
    where l.pinged_at > now() - interval '10 minutes'
  ) then
    insert into public.keep_alive_log (source) values (left(coalesce(p_source, 'github'), 50));
  end if;

  return query
    update public.keep_alive k
       set pinged_at = now(),
           ping_count = k.ping_count + 1
     where k.id = 1
    returning k.ping_count, k.pinged_at;
end;
$$;

grant execute on function public.keep_alive_ping(text) to anon;
