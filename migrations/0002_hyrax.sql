create table if not exists hyrax_board (
  id int primary key default 1,
  goals jsonb not null default '[]'::jsonb,
  constraint hyrax_board_one check (id = 1)
);

insert into hyrax_board (id, goals)
values (1, '[]'::jsonb)
on conflict (id) do nothing;

create table if not exists hyrax_answers (
  author text primary key,
  body jsonb not null,
  updated_at timestamptz not null default now()
);

create table if not exists hyrax_comments (
  id text primary key,
  goal_id text not null,
  author text not null,
  body text not null,
  created_at timestamptz not null default now()
);
