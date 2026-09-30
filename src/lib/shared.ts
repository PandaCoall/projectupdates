import { createServerFn } from "@tanstack/react-start";
import type { Answers } from "@/lib/answers";
import { getSql } from "@/lib/db";
import { matchTeam, type TeamRole } from "@/lib/team";
import type { Goal, Status } from "@/lib/tracker";

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

const GOALS_PATH = "team-goals.json";
const COMMENTS_PATH = "team-comments.json";
const ANSWERS_PATH = "team-answers.json";
const LEGACY_PATH = "team-board.json";

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

async function listBlob(pathname: string): Promise<{ url: string; etag?: string } | null> {
  const token = blobToken();
  if (!token) return null;
  const listed = await fetch(`https://vercel.com/api/blob?prefix=${encodeURIComponent(pathname)}`, {
    headers: { authorization: `Bearer ${token}`, "x-api-version": "12" },
    cache: "no-store",
  });
  if (!listed.ok) throw new Error("Could not read the team board.");
  const data = (await listed.json()) as { blobs?: { url: string; pathname: string; etag?: string }[] };
  const hit = data.blobs?.find((blob) => blob.pathname === pathname);
  return hit ? { url: hit.url, etag: hit.etag } : null;
}

async function readJson<T>(pathname: string, fallback: T): Promise<{ value: T; etag?: string; found: boolean }> {
  const hit = await listBlob(pathname);
  if (!hit) return { value: fallback, found: false };
  const file = await fetch(hit.url, {
    headers: { authorization: `Bearer ${blobToken()}` },
    cache: "no-store",
  });
  if (!file.ok) throw new Error("Could not read the team board.");
  return { value: (await file.json()) as T, etag: hit.etag, found: true };
}

async function writeJson(pathname: string, value: unknown, etag?: string): Promise<"ok" | "conflict"> {
  const token = blobToken();
  if (!token) return "ok";
  const headers: Record<string, string> = {
    authorization: `Bearer ${token}`,
    "x-api-version": "12",
    "x-vercel-blob-access": "private",
    "x-content-type": "application/json",
    "x-add-random-suffix": "0",
    "x-allow-overwrite": "1",
  };
  if (etag) headers["x-if-match"] = etag;
  const res = await fetch(`https://vercel.com/api/blob/?pathname=${encodeURIComponent(pathname)}`, {
    method: "PUT",
    body: JSON.stringify(value),
    headers,
  });
  if (res.status === 412 || res.status === 409) return "conflict";
  if (!res.ok) throw new Error("Could not save the team board.");
  return "ok";
}

async function readLegacy(): Promise<Doc | null> {
  const legacy = await readJson<Doc>(LEGACY_PATH, emptyDoc());
  if (!legacy.found) return null;
  return legacy.value;
}

async function readDoc(): Promise<Doc> {
  if (!blobToken()) return readSql();
  const [goalsFile, commentsFile, answersFile, legacy] = await Promise.all([
    readJson<{ goals: Goal[] }>(GOALS_PATH, { goals: [] }),
    readJson<{ comments: SharedComment[] }>(COMMENTS_PATH, { comments: [] }),
    readJson<{ answers: SharedAnswer[] }>(ANSWERS_PATH, { answers: [] }),
    readLegacy(),
  ]);
  const goals = goalsFile.found ? goalsFile.value.goals : (legacy?.goals ?? []);
  const comments = commentsFile.found ? commentsFile.value.comments : (legacy?.comments ?? []);
  const answers = answersFile.found ? answersFile.value.answers : (legacy?.answers ?? []);
  if (legacy && (!goalsFile.found || !commentsFile.found || !answersFile.found)) {
    if (!goalsFile.found) await writeJson(GOALS_PATH, { goals });
    if (!commentsFile.found) await writeJson(COMMENTS_PATH, { comments });
    if (!answersFile.found) await writeJson(ANSWERS_PATH, { answers });
  }
  return { goals, comments, answers };
}

function patchMilestone(goals: Goal[], goalId: string, milestoneId: string, status?: Status, due?: string) {
  return goals.map((goal) =>
    goal.id !== goalId
      ? goal
      : {
          ...goal,
          milestones: goal.milestones.map((milestone) =>
            milestone.id !== milestoneId
              ? milestone
              : {
                  ...milestone,
                  status: status ?? milestone.status,
                  due: due ?? milestone.due,
                },
          ),
        },
  );
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
      await writeJson(GOALS_PATH, { goals: data.goals });
      return { ok: true as const };
    }
    const sql = await getSql();
    await sql`update hyrax_board set goals = ${JSON.stringify(data.goals)}::jsonb where id = 1`;
    return { ok: true as const };
  });

export const updateMilestone = createServerFn({ method: "POST" })
  .validator((input: { email: string; goalId: string; milestoneId: string; status?: Status; due?: string }) => input)
  .handler(async ({ data }) => {
    memberOrThrow(data.email);
    if (blobToken()) {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const file = await readJson<{ goals: Goal[] }>(GOALS_PATH, { goals: [] });
        const base = file.found ? file.value.goals : (await readDoc()).goals;
        const goals = patchMilestone(base, data.goalId, data.milestoneId, data.status, data.due);
        const result = await writeJson(GOALS_PATH, { goals }, attempt < 4 ? file.etag : undefined);
        if (result === "ok") return { ok: true as const, goals };
      }
      throw new Error("Could not save the status. Try again.");
    }
    const sql = await getSql();
    const boards = await sql<{ goals: Goal[] }>`select goals from hyrax_board where id = 1`;
    const goals = patchMilestone(boards[0]?.goals ?? [], data.goalId, data.milestoneId, data.status, data.due);
    await sql`update hyrax_board set goals = ${JSON.stringify(goals)}::jsonb where id = 1`;
    return { ok: true as const, goals };
  });

export const saveMyAnswers = createServerFn({ method: "POST" })
  .validator((input: { email: string; answers: Answers }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    if (blobToken()) {
      const current = await readJson<{ answers: SharedAnswer[] }>(ANSWERS_PATH, { answers: [] });
      const legacy = current.found ? current.value.answers : ((await readLegacy())?.answers ?? []);
      const answers = legacy.filter((row) => row.author !== member.name);
      answers.push({ author: member.name, body: data.answers });
      await writeJson(ANSWERS_PATH, { answers });
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
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const current = await readJson<{ comments: SharedComment[] }>(COMMENTS_PATH, { comments: [] });
        const existing = current.found ? current.value.comments : ((await readLegacy())?.comments ?? []);
        const result = await writeJson(COMMENTS_PATH, { comments: [...existing, row] }, current.etag);
        if (result === "ok") return row;
      }
      throw new Error("Could not add the comment.");
    }
    const sql = await getSql();
    const rows = await sql<SharedComment>`
      insert into hyrax_comments (id, goal_id, author, body)
      values (${row.id}, ${row.goal_id}, ${row.author}, ${row.body})
      returning id, goal_id, author, body, created_at::text as created_at
    `;
    return rows[0];
  });

export const updateMyComment = createServerFn({ method: "POST" })
  .validator((input: { email: string; id: string; body: string }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    const body = data.body.trim();
    if (!body) throw new Error("Comment is empty.");
    if (blobToken()) {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const current = await readJson<{ comments: SharedComment[] }>(COMMENTS_PATH, { comments: [] });
        const existing = current.found ? current.value.comments : ((await readLegacy())?.comments ?? []);
        const hit = existing.find((comment) => comment.id === data.id);
        if (!hit) throw new Error("Comment not found.");
        if (hit.author !== member.name) throw new Error("You can only edit your own comment.");
        const updated = { ...hit, body };
        const result = await writeJson(
          COMMENTS_PATH,
          { comments: existing.map((comment) => (comment.id === data.id ? updated : comment)) },
          attempt < 4 ? current.etag : undefined,
        );
        if (result === "ok") return updated;
      }
      throw new Error("Could not edit the comment.");
    }
    const sql = await getSql();
    const rows = await sql<SharedComment>`
      update hyrax_comments set body = ${body}
      where id = ${data.id} and author = ${member.name}
      returning id, goal_id, author, body, created_at::text as created_at
    `;
    if (!rows[0]) throw new Error("You can only edit your own comment.");
    return rows[0];
  });

export const deleteMyComment = createServerFn({ method: "POST" })
  .validator((input: { email: string; id: string }) => input)
  .handler(async ({ data }) => {
    const member = memberOrThrow(data.email);
    if (blobToken()) {
      for (let attempt = 0; attempt < 5; attempt += 1) {
        const current = await readJson<{ comments: SharedComment[] }>(COMMENTS_PATH, { comments: [] });
        const existing = current.found ? current.value.comments : ((await readLegacy())?.comments ?? []);
        const hit = existing.find((comment) => comment.id === data.id);
        if (!hit) throw new Error("Comment not found.");
        if (hit.author !== member.name) throw new Error("You can only delete your own comment.");
        const result = await writeJson(
          COMMENTS_PATH,
          { comments: existing.filter((comment) => comment.id !== data.id) },
          attempt < 4 ? current.etag : undefined,
        );
        if (result === "ok") return { ok: true as const };
      }
      throw new Error("Could not delete the comment.");
    }
    const sql = await getSql();
    const rows = await sql<{ id: string }>`
      delete from hyrax_comments where id = ${data.id} and author = ${member.name} returning id
    `;
    if (!rows[0]) throw new Error("You can only delete your own comment.");
    return { ok: true as const };
  });
