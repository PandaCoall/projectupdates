import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { n as matchTeam } from "./team-C3E8MDHu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shared-Be-HsJz0.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_hyrax_default = "create table if not exists hyrax_board (\n  id int primary key default 1,\n  goals jsonb not null default '[]'::jsonb,\n  constraint hyrax_board_one check (id = 1)\n);\n\ninsert into hyrax_board (id, goals)\nvalues (1, '[]'::jsonb)\non conflict (id) do nothing;\n\ncreate table if not exists hyrax_answers (\n  author text primary key,\n  body jsonb not null,\n  updated_at timestamptz not null default now()\n);\n\ncreate table if not exists hyrax_comments (\n  id text primary key,\n  goal_id text not null,\n  author text not null,\n  body text not null,\n  created_at timestamptz not null default now()\n);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_hyrax.sql": _0002_hyrax_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
var emptyDoc = () => ({
	goals: [],
	comments: [],
	answers: []
});
function memberOrThrow(email) {
	const member = matchTeam(email);
	if (!member) throw new Error("That email is not on the team.");
	return member;
}
function blobToken() {
	const value = process.env["BLOB_READ_WRITE_TOKEN"];
	return value && value.trim() ? value.trim() : "";
}
async function readBlob() {
	const token = blobToken();
	if (!token) return null;
	const listed = await fetch("https://vercel.com/api/blob?prefix=team-board.json", { headers: {
		authorization: `Bearer ${token}`,
		"x-api-version": "12"
	} });
	if (!listed.ok) throw new Error("Could not read the team board.");
	const hit = (await listed.json()).blobs?.find((blob) => blob.pathname === "team-board.json");
	if (!hit) return emptyDoc();
	const file = await fetch(hit.url, {
		headers: { authorization: `Bearer ${token}` },
		cache: "no-store"
	});
	if (!file.ok) throw new Error("Could not read the team board.");
	return await file.json();
}
async function writeBlob(doc) {
	const token = blobToken();
	if (!token) return;
	if (!(await fetch("https://vercel.com/api/blob/?pathname=team-board.json", {
		method: "PUT",
		body: JSON.stringify(doc),
		headers: {
			authorization: `Bearer ${token}`,
			"x-api-version": "12",
			"x-vercel-blob-access": "private",
			"x-content-type": "application/json",
			"x-add-random-suffix": "0",
			"x-allow-overwrite": "1"
		}
	})).ok) throw new Error("Could not save the team board.");
}
async function readSql() {
	const sql = await getSql();
	const boards = await sql`select goals from hyrax_board where id = 1`;
	const answers = await sql`select author, body from hyrax_answers order by author`;
	const comments = await sql`
    select id, goal_id, author, body, created_at::text as created_at
    from hyrax_comments
    order by created_at
  `;
	return {
		goals: boards[0]?.goals ?? [],
		comments,
		answers
	};
}
async function readDoc() {
	const blob = await readBlob();
	if (blob) return blob;
	return readSql();
}
var loadShared_createServerFn_handler = createServerRpc({
	id: "c9457b4136f459a1fee90d8c7edafb9ecec1d1cfa590570e1111302762702dc4",
	name: "loadShared",
	filename: "src/lib/shared.ts"
}, (opts) => loadShared.__executeServer(opts));
var loadShared = createServerFn({ method: "POST" }).validator((input) => input).handler(loadShared_createServerFn_handler, async ({ data }) => {
	const member = memberOrThrow(data.email);
	const doc = await readDoc();
	return {
		name: member.name,
		role: member.role,
		goals: doc.goals,
		answers: doc.answers,
		comments: doc.comments
	};
});
var saveGoals_createServerFn_handler = createServerRpc({
	id: "b0c7cb792e7d0700cfeee0557483816d4d19d0eafc88da92c0417ab802ed3d9e",
	name: "saveGoals",
	filename: "src/lib/shared.ts"
}, (opts) => saveGoals.__executeServer(opts));
var saveGoals = createServerFn({ method: "POST" }).validator((input) => input).handler(saveGoals_createServerFn_handler, async ({ data }) => {
	if (memberOrThrow(data.email).role !== "owner") throw new Error("Only the owner can change the board.");
	if (blobToken()) {
		await writeBlob({
			...await readBlob() ?? emptyDoc(),
			goals: data.goals
		});
		return { ok: true };
	}
	await (await getSql())`update hyrax_board set goals = ${JSON.stringify(data.goals)}::jsonb where id = 1`;
	return { ok: true };
});
var saveMyAnswers_createServerFn_handler = createServerRpc({
	id: "ec8a4decd42eafd626832a1d56d3d0dc0d3fae02619880ad9be72a686e09f11f",
	name: "saveMyAnswers",
	filename: "src/lib/shared.ts"
}, (opts) => saveMyAnswers.__executeServer(opts));
var saveMyAnswers = createServerFn({ method: "POST" }).validator((input) => input).handler(saveMyAnswers_createServerFn_handler, async ({ data }) => {
	const member = memberOrThrow(data.email);
	if (blobToken()) {
		const doc = await readBlob() ?? emptyDoc();
		const answers = doc.answers.filter((row) => row.author !== member.name);
		answers.push({
			author: member.name,
			body: data.answers
		});
		await writeBlob({
			...doc,
			answers
		});
		return {
			ok: true,
			author: member.name
		};
	}
	await (await getSql())`
      insert into hyrax_answers (author, body)
      values (${member.name}, ${JSON.stringify(data.answers)}::jsonb)
      on conflict (author) do update
      set body = excluded.body, updated_at = now()
    `;
	return {
		ok: true,
		author: member.name
	};
});
var addComment_createServerFn_handler = createServerRpc({
	id: "a3c280c3aea37e586efb8514a9ddc8e440e9a61f15370078a87cced767967cdc",
	name: "addComment",
	filename: "src/lib/shared.ts"
}, (opts) => addComment.__executeServer(opts));
var addComment = createServerFn({ method: "POST" }).validator((input) => input).handler(addComment_createServerFn_handler, async ({ data }) => {
	const member = memberOrThrow(data.email);
	const body = data.body.trim();
	if (!body) throw new Error("Comment is empty.");
	const row = {
		id: crypto.randomUUID(),
		goal_id: data.goalId,
		author: member.name,
		body,
		created_at: (/* @__PURE__ */ new Date()).toISOString()
	};
	if (blobToken()) {
		const doc = await readBlob() ?? emptyDoc();
		await writeBlob({
			...doc,
			comments: [...doc.comments, row]
		});
		return row;
	}
	return (await (await getSql())`
      insert into hyrax_comments (id, goal_id, author, body)
      values (${row.id}, ${row.goal_id}, ${row.author}, ${row.body})
      returning id, goal_id, author, body, created_at::text as created_at
    `)[0];
});
//#endregion
export { addComment_createServerFn_handler, loadShared_createServerFn_handler, saveGoals_createServerFn_handler, saveMyAnswers_createServerFn_handler };
