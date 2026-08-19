alter table appointments add column if not exists dependent_id text;
create table if not exists dependents (
  id text primary key,
  user_id text not null,
  name text not null,
  relation text not null default 'familiar',
  birth_date text,
  created_at timestamptz not null default now()
);
create index if not exists dependents_user_idx on dependents (user_id);
create table if not exists preconsult (
  appointment_id text primary key,
  user_id text not null,
  chief_complaint text not null default '',
  meds text not null default '',
  allergies text not null default '',
  photo text,
  updated_at timestamptz not null default now()
);
