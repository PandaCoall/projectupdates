import { createServerFn } from "@tanstack/react-start";
import type { Answers } from "@/lib/answers";
import { getSql } from "@/lib/db";
import { matchTeam, type TeamRole } from "@/lib/team";
import type { Goal } from "@/lib/tracker";

export type SharedComment = {
  id: string;
  goal_id: string;
  author: string;
  body: string;
  created_at: string;
};

export type SharedAnswer = {
  author: string;
  body: Answers;
};

function memberOrThrow(email: string) {
  const member = matchTeam(email);
  if (!member) throw new Error("That email is not on the team.");
  return member;
}

export const loadShared = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    const sql = await getSql();
    const boards = await sql<{ goals: Goal[] }>`select goals from hyrax_board where id = 1`;
    const answers = await sql<SharedAnswer>`select author, body from hyrax_answers order by author`;
    const comments = await sql<SharedComment>`
      select id, goal_id, author, body, created_at::text as created_at
      from hyrax_comments
      order by created_at
    `;
    return {
      name: member.name,
      role: member.role as TeamRole,
      goals: boards[0]?.goals ?? [],
      answers,
      comments,
    };
  });

export const saveGoals = createServerFn({ method: "POST" })
  .validator((input: { email: string; goals: Goal[] }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    if (member.role !== "owner") throw new Error("Only the owner can change the board.");
    const sql = await getSql();
    await sql`update hyrax_board set goals = ${JSON.stringify(data.goals)}::jsonb where id = 1`;
    return { ok: true as const };
  });

export const saveMyAnswers = createServerFn({ method: "POST" })
  .validator((input: { email: string; answers: Answers }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    const sql = await getSql();
    await sql`
      insert into hyrax_answers (author, body)
      values (${member.name}, ${JSON.stringify(data.answers)}::jsonb)
      on conflict (author) do update
      set body = excluded.body, updated_at = now()
    `;
    return { ok: true as const, author: member.name };
  });

export const addComment = createServerFn({ method: "POST" })
  .validator((input: { email: string; goalId: string; body: string }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    const body = data.body.trim();
    if (!body) throw new Error("Comment is empty.");
    const id = crypto.randomUUID();
    const sql = await getSql();
    const rows = await sql<SharedComment>`
      insert into hyrax_comments (id, goal_id, author, body)
      values (${id}, ${data.goalId}, ${member.name}, ${body})
      returning id, goal_id, author, body, created_at::text as created_at
    `;
    return rows[0];
  });
