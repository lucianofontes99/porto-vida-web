create table if not exists appointments (
  id text primary key,
  user_id text not null,
  doctor_id text not null,
  specialty_id text not null,
  kind text not null,
  scheduled_at timestamptz not null,
  status text not null default 'pending_payment',
  notes text not null default '',
  price_cents int not null,
  payment_method text,
  paid_at timestamptz,
  prescription text,
  rating int,
  created_at timestamptz not null default now()
);
create index if not exists appointments_user_idx on appointments (user_id, scheduled_at desc);
create table if not exists profiles (
  user_id text primary key,
  full_name text,
  cpf text,
  phone text,
  birth_date text,
  health_plan text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
