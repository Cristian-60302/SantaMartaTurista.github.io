-- Esquema sugerido para mover la bitacora de localStorage a Neon.
-- GitHub Pages no debe conectarse directamente a Neon porque expondria
-- credenciales. Usa estas tablas desde un backend/API intermedio.

create table if not exists app_users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create table if not exists places (
  id text primary key,
  name text not null,
  region text not null,
  categories text[] not null default '{}',
  description text not null,
  image_url text,
  image_credit text,
  created_at timestamptz not null default now()
);

create table if not exists visited_places (
  user_id uuid not null references app_users(id) on delete cascade,
  place_id text not null references places(id) on delete cascade,
  visited_at timestamptz not null default now(),
  primary key (user_id, place_id)
);

create table if not exists reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references app_users(id) on delete cascade,
  place_id text not null references places(id) on delete cascade,
  rating int not null check (rating between 1 and 5),
  text text not null check (length(trim(text)) >= 10),
  created_at timestamptz not null default now()
);

create index if not exists reviews_place_id_created_at_idx
  on reviews (place_id, created_at desc);

create table if not exists guides (
  id text primary key,
  name text not null,
  specialty text not null,
  zones text[] not null default '{}',
  languages text[] not null default '{}',
  bio text not null,
  image_url text,
  created_at timestamptz not null default now()
);

create table if not exists guide_ratings (
  id uuid primary key default gen_random_uuid(),
  guide_id text not null references guides(id) on delete cascade,
  user_id uuid not null references app_users(id) on delete cascade,
  rating int not null check (rating between 1 and 5),
  created_at timestamptz not null default now(),
  unique (guide_id, user_id)
);

create table if not exists providers (
  id text primary key,
  name text not null,
  type text not null,
  scope text not null,
  description text not null,
  website text,
  verify_note text,
  created_at timestamptz not null default now()
);

create table if not exists activities (
  id text primary key,
  place_id text references places(id) on delete set null,
  title text not null,
  category text not null,
  latitude numeric(9,6) not null,
  longitude numeric(9,6) not null,
  description text not null,
  guide_ids text[] not null default '{}',
  provider_ids text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists plans (
  id text primary key,
  name text not null,
  duration text not null,
  style text not null,
  activity_ids text[] not null default '{}',
  guide_ids text[] not null default '{}',
  provider_ids text[] not null default '{}',
  includes text[] not null default '{}',
  created_at timestamptz not null default now()
);

insert into places (id, name, region, categories, description, image_url, image_credit)
values
  ('tayrona', 'Parque Tayrona', 'Santa Marta, Magdalena', array['naturaleza','playa'], 'Playas, selva seca tropical, senderos y miradores frente a la Sierra Nevada.', 'https://commons.wikimedia.org/wiki/Special:FilePath/Parque%20Nacional%20Natural%20Tayrona%207.jpg', 'Hugo A. Quintero G. / Wikimedia Commons'),
  ('cartagena', 'Cartagena amurallada', 'Cartagena, Bolivar', array['cultura','playa'], 'Murallas, plazas coloniales, gastronomia caribena y atardeceres sobre el mar.', 'https://commons.wikimedia.org/wiki/Special:FilePath/Ciudad%20amurallada%20fog.jpg', 'Felipe Ortega Grijalba / Wikimedia Commons'),
  ('guajira', 'Cabo de la Vela', 'Uribia, La Guajira', array['naturaleza','cultura','playa'], 'Desierto, mar, rancherias Wayuu y paisajes singulares del Caribe colombiano.', 'https://commons.wikimedia.org/wiki/Special:FilePath/Cabo%20de%20la%20vela%20%28%20Guajira%20%29.jpg', 'Kobaor / Wikimedia Commons')
on conflict (id) do nothing;
