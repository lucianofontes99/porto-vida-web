alter table profiles add column if not exists plan_slug text;
alter table profiles add column if not exists plan_started_at timestamptz;
create table if not exists contact_messages (
  id text primary key,
  name text not null,
  email text not null,
  subject text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);
