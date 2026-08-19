create table if not exists documents (
  id text primary key,
  user_id text not null,
  appointment_id text,
  kind text not null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);
create index if not exists documents_user_idx on documents (user_id, created_at desc);
create index if not exists documents_apt_idx on documents (appointment_id);
create table if not exists vitals (
  id text primary key,
  user_id text not null,
  kind text not null,
  systolic int,
  diastolic int,
  value_num int,
  note text not null default '',
  noted_at timestamptz not null default now()
);
create index if not exists vitals_user_idx on vitals (user_id, noted_at desc);
