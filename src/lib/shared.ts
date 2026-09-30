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

type Doc = {
  goals: Goal[];
  comments: SharedComment[];
  answers: SharedAnswer[];
};

const emptyDoc = (): Doc => ({ goals: [], comments: [], answers: [] });

function memberOrThrow(email: string) {
  const member = matchTeam(email);
  if (!member) throw new Error("That email is not on the team.");
  return member;
}

function blobToken() {
  const value = process.env["BLOB_READ_WRITE_TOKEN"];
  return value && value.trim() ? value.trim() : "";
}

async function readBlob(): Promise<Doc | null> {
  const token = blobToken();
  if (!token) return null;
  const listed = await fetch("https://vercel.com/api/blob?prefix=team-board.json", {
    headers: { authorization: `Bearer ${token}`, "x-api-version": "12" },
  });
  if (!listed.ok) throw new Error("Could not read the team board.");
  const data = (await listed.json()) as { blobs?: { url: string; pathname: string }[] };
  const hit = data.blobs?.find((blob) => blob.pathname === "team-board.json");
  if (!hit) return emptyDoc();
  const file = await fetch(hit.url, {
    headers: { authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!file.ok) throw new Error("Could not read the team board.");
  return (await file.json()) as Doc;
}

async function writeBlob(doc: Doc) {
  const token = blobToken();
  if (!token) return;
  const res = await fetch("https://vercel.com/api/blob/?pathname=team-board.json", {
    method: "PUT",
    body: JSON.stringify(doc),
    headers: {
      authorization: `Bearer ${token}`,
      "x-api-version": "12",
      "x-vercel-blob-access": "private",
      "x-content-type": "application/json",
      "x-add-random-suffix": "0",
      "x-allow-overwrite": "1",
    },
  });
  if (!res.ok) throw new Error("Could not save the team board.");
}

async function readSql(): Promise<Doc> {
  const sql = await getSql();
  const boards = await sql<{ goals: Goal[] }>`select goals from hyrax_board where id = 1`;
  const answers = await sql<SharedAnswer>`select author, body from hyrax_answers order by author`;
  const comments = await sql<SharedComment>`
    select id, goal_id, author, body, created_at::text as created_at
    from hyrax_comments
    order by created_at
  `;
  return { goals: boards[0]?.goals ?? [], comments, answers };
}

async function readDoc(): Promise<Doc> {
  const blob = await readBlob();
  if (blob) return blob;
  return readSql();
}

export const loadShared = createServerFn({ method: "POST" })
  .validator((input: { email: string }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    const doc = await readDoc();
    return {
      name: member.name,
      role: member.role as TeamRole,
      goals: doc.goals,
      answers: doc.answers,
      comments: doc.comments,
    };
  });

export const saveGoals = createServerFn({ method: "POST" })
  .validator((input: { email: string; goals: Goal[] }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    if (member.role !== "owner") throw new Error("Only the owner can change the board.");
    if (blobToken()) {
      const doc = (await readBlob()) ?? emptyDoc();
      await writeBlob({ ...doc, goals: data.goals });
      return { ok: true as const };
    }
    const sql = await getSql();
    await sql`update hyrax_board set goals = ${JSON.stringify(data.goals)}::jsonb where id = 1`;
    return { ok: true as const };
  });

export const saveMyAnswers = createServerFn({ method: "POST" })
  .validator((input: { email: string; answers: Answers }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    if (blobToken()) {
      const doc = (await readBlob()) ?? emptyDoc();
      const answers = doc.answers.filter((row) => row.author !== member.name);
      answers.push({ author: member.name, body: data.answers });
      await writeBlob({ ...doc, answers });
      return { ok: true as const, author: member.name };
    }
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
    const row: SharedComment = {
      id: crypto.randomUUID(),
      goal_id: data.goalId,
      author: member.name,
      body,
      created_at: new Date().toISOString(),
    };
    if (blobToken()) {
      const doc = (await readBlob()) ?? emptyDoc();
      await writeBlob({ ...doc, comments: [...doc.comments, row] });
      return row;
    }
    const sql = await getSql();
    const rows = await sql<SharedComment>`
      insert into hyrax_comments (id, goal_id, author, body)
      values (${row.id}, ${row.goal_id}, ${row.author}, ${row.body})
      returning id, goal_id, author, body, created_at::text as created_at
    `;
    return rows[0];
  });
