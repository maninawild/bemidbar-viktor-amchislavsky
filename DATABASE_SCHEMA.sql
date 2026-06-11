-- Bemidbar booking/payment schema for Supabase/Postgres.
-- Designed for manual confirmation before payment and YooKassa-first payments.

create type user_role as enum ('owner_admin', 'guide_editor');
create type booking_status as enum (
  'pending_confirmation',
  'confirmed_waiting_payment',
  'paid',
  'completed',
  'cancelled',
  'refunded'
);
create type payment_status as enum (
  'pending',
  'waiting_for_capture',
  'succeeded',
  'cancelled',
  'refunded',
  'failed'
);
create type payout_status as enum (
  'pending',
  'ready',
  'paid',
  'adjusted',
  'cancelled'
);

create table users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role user_role not null default 'guide_editor',
  name text,
  created_at timestamptz not null default now()
);

create table tours (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null,
  description text not null,
  format text not null,
  duration text,
  language text default 'русский',
  image_url text,
  base_price_rub integer,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table tour_slots (
  id uuid primary key default gen_random_uuid(),
  tour_id uuid references tours(id) on delete cascade,
  starts_at timestamptz,
  ends_at timestamptz,
  status text not null default 'available',
  note text,
  created_at timestamptz not null default now()
);

create table bookings (
  id uuid primary key default gen_random_uuid(),
  tour_id uuid references tours(id),
  tour_slot_id uuid references tour_slots(id),
  status booking_status not null default 'pending_confirmation',
  customer_name text not null,
  customer_contact text not null,
  customer_message text,
  participants_count integer,
  confirmed_starts_at timestamptz,
  confirmed_ends_at timestamptz,
  confirmed_price_rub integer,
  admin_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table payments (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  provider text not null default 'yookassa',
  provider_payment_id text unique,
  status payment_status not null default 'pending',
  amount_rub integer not null,
  currency text not null default 'RUB',
  confirmation_url text,
  paid_at timestamptz,
  raw_provider_status text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table payouts (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references bookings(id) on delete cascade,
  payment_id uuid references payments(id) on delete set null,
  status payout_status not null default 'pending',
  gross_amount_rub integer not null,
  site_commission_percent numeric(5,2) not null,
  site_commission_amount_rub integer not null,
  guide_payout_amount_rub integer not null,
  paid_at timestamptz,
  note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table archive_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text not null,
  source text,
  date_label text,
  excerpt text,
  image_url text,
  video_url text,
  external_url text,
  tags text[] not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  caption text,
  year_label text,
  source text,
  category text,
  image_url text not null,
  related_route text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index bookings_status_idx on bookings(status);
create index bookings_tour_id_idx on bookings(tour_id);
create index payments_booking_id_idx on payments(booking_id);
create index payments_provider_payment_id_idx on payments(provider_payment_id);
create index payouts_booking_id_idx on payouts(booking_id);

-- RLS should be enabled before production.
-- owner_admin can access all rows.
-- guide_editor can access content, tours, slots, and booking requests,
-- but not payment provider keys or commission settings.
