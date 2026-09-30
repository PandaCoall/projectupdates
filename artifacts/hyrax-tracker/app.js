const STORAGE_KEY = "hyrax-october-tracker-v2";

const STATUSES = [
  { id: "not_started", label: "Not started" },
  { id: "in_progress", label: "In progress" },
  { id: "blocked", label: "Blocked" },
  { id: "done", label: "Done" },
];

const WEEKS = [
  { id: "w1", label: "Week 1 — 1–7 Oct 2026", lockedSeed: true },
  { id: "w2", label: "Week 2 — 8–14 Oct 2026", lockedSeed: false },
  { id: "w3", label: "Week 3 — 15–21 Oct 2026", lockedSeed: false },
  { id: "w4", label: "Week 4 — 22–31 Oct 2026", lockedSeed: false },
];

function uid() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random();
}

function seedData() {
  return {
    project: "Hyrax AI Video Production Pilot",
    briefDate: "2026-09-28",
    updatedAt: new Date().toISOString(),
    goals: [
      {
        id: uid(),
        week: "w1",
        number: 1,
        title: "Define Scope of Work",
        description:
          "Turn the 28 Sep 2026 overview into a concise October SOW: what is actually being built, in/out of scope, deliverables.\nProduct: controlled internal production line from an approved performance-marketing script to a near-finished 9:16 first-cut advert for editor review. AI proposes bounded decisions; deterministic software executes them. Not a single generative-video model making the whole ad.\nPilot UX is narrow: one approved campaign/product, one approved script, one 9:16 ~30s format, one presenter workflow, one ad per job.\nFlag anything unrealistic, unnecessary, or achievable more simply, and recommend the alternative.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          {
            id: uid(),
            title: "Write concise October SOW (in / out of scope + deliverables)",
            status: "not_started",
            due: "2026-10-03",
            notes:
              "Use overview sections: What we are building, What we are not building in the first month, What success means after one month. Out of scope includes autonomous strategy, unlimited variants, browser Premiere replacement, auto-publish, commercial-performance claims.",
          },
          {
            id: uid(),
            title: "Define the editor first-cut acceptance bar",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "Editor prefers system first-cut over a blank Premiere timeline. If they throw it away and rebuild, the milestone is not met.",
          },
          {
            id: uid(),
            title: "Confirm end-to-end basic path items",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "UGC/presenter, B-roll, captions, voice/audio where required, music/sound, CTA/end frame, assembled first cut. Can be rough if it saves editor time.",
          },
        ],
      },
      {
        id: uid(),
        week: "w1",
        number: 2,
        title: "Create Process Flowchart",
        description:
          "Turn overview Steps 0–9 and the Systems table into a technical flowchart of actual systems and hand-offs: job creation → asset retrieval/generation → storage → analysis → Creative Manifest/edit decisions → rendering → QA → editor review → approval.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          {
            id: uid(),
            title: "Map job creation → asset retrieval/generation → storage → analysis",
            status: "not_started",
            due: "2026-10-05",
            notes:
              "Steps 0–4: campaign/product rules, job + budget, presenter/UGC + supporting assets, private retention/rights, search-before-generate.",
          },
          {
            id: uid(),
            title: "Map Creative Manifest / edit decisions → rendering → QA → editor review → approval",
            status: "not_started",
            due: "2026-10-05",
            notes:
              "Steps 5–9: transcript + Creative Manifest, Remotion/FFmpeg render, QA/policy checks, bounded editor correction, named approval + history.",
          },
          {
            id: uid(),
            title: "Mark external providers/APIs, async/background, AI vs deterministic, human approval points",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "Systems table: web app, DB/storage, durable jobs, provider adapters, asset intelligence, Edit Director, renderer, QA/approval. AI proposes; renderer executes. Human gates: editor review + policy/brand/release approval.",
          },
        ],
      },
      {
        id: uid(),
        week: "w1",
        number: 3,
        title: "Prepare Technical Specification / Build Guide",
        description:
          "Turn the overview into the implementation specification: data model/schemas, APIs, integrations, job states, storage structure, Creative Manifest, rendering flow, authentication, deployment, error/retry behaviour.\nProposed stack is a direction, not mandatory. Preserve: controlled inputs, repeatability, traceability, private storage, rights awareness, human approval.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          {
            id: uid(),
            title: "Specify data model, schemas, job states, storage structure",
            status: "not_started",
            due: "2026-10-06",
            notes:
              "Named contracts from the brief: Campaign/Product Policy, Job, Asset, Asset Segment, Creative Manifest, Review Decision, Provider Attempt. Version them.",
          },
          {
            id: uid(),
            title: "Specify APIs, integrations, Creative Manifest, rendering flow",
            status: "not_started",
            due: "2026-10-06",
            notes:
              "Proposed direction in brief: Next.js/React app, provider adapters (submit/poll/retrieve), Remotion + FFmpeg render from Manifest. Recommend simpler alternatives where justified.",
          },
          {
            id: uid(),
            title: "Specify auth, deployment, error/retry; recommend simpler stack where justified",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "Brief proposes Supabase auth/RLS/storage, Trigger.dev durable jobs, idempotency + budget reservation, Vercel app vs separate render workers. Principles to keep: controlled inputs, repeatability, traceability, private storage, rights awareness, human approval.",
          },
        ],
      },
      {
        id: uid(),
        week: "w1",
        number: 4,
        title: "Identify Requirements / Dependencies",
        description:
          "Concrete checklist of everything needed: accounts, API access, credentials, infrastructure, existing assets, reference ads, campaign rules, editor input, decisions.\nDo not wait for everything. Identify what is required for each stage and what actually blocks progress.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          {
            id: uid(),
            title: "List accounts, API access, credentials, infrastructure",
            status: "not_started",
            due: "2026-10-04",
            notes:
              "From brief: company-owned dev/prod accounts, billing/recovery, paid-generation cap; confirm Floyo/UGC real export or API; provider keys; GitHub, Vercel, storage, worker/render environment.",
          },
          {
            id: uid(),
            title: "List existing assets, reference ads, campaign rules, editor input, decisions",
            status: "not_started",
            due: "2026-10-04",
            notes:
              "Hyrax to provide: named lead + second editor; named brand/policy/release owner; one approved campaign/product + script + visual brief; 5–10 test scripts; three editable reference ads with source media; brand kit, CTA/end-frame, type/motion, music rules, asset-library access.",
          },
          {
            id: uid(),
            title: "Tag each item by stage and whether it is a hard blocker",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "Do not wait for the full list. Split by stage. Call out risks: provider APIs, private storage, background processing, rendering, rights, data protection, campaign approvals, day-to-day operation.",
          },
        ],
      },
      {
        id: uid(),
        week: "w1",
        number: 5,
        title: "Finalise Development Roadmap",
        description:
          "Break October into small, gated stages with a clear deliverable and acceptance test for each. Prove one thing at a time. Get the narrow end-to-end production path working first, then expand models, providers, campaigns, variants, automation.\nMeasure actual editor touch time during the pilot: is time from approved script → acceptable finished advert materially lower than the current manual workflow?\nAlso compare Floyo vs self-hosted ComfyUI vs hosted/API generation layers as the recipe layer under Hyrax (not as the whole production workflow). Provider-independent.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          {
            id: uid(),
            title: "Draft gated October stages with deliverable + acceptance test each",
            status: "not_started",
            due: "2026-10-06",
            notes:
              "Brief delivery process: one active gate at a time — asset quality/repeatability, then retention/search, then deterministic rendering, then constrained edit selection. Small PRs with evidence.",
          },
          {
            id: uid(),
            title: "Define editor touch-time measurement for the pilot",
            status: "not_started",
            due: "2026-10-07",
            notes: "Approved script → acceptable finished advert vs current manual workflow.",
          },
          {
            id: uid(),
            title: "Compare Floyo / self-hosted ComfyUI / hosted API generation layer",
            status: "not_started",
            due: "2026-10-07",
            notes:
              "Need versioned recipes callable from Hyrax. Check headless/API ComfyUI, job queue, workflow versioning, independent GPU workers, local models + external APIs. Recommend simplest architecture for repeatability now and scale later.",
          },
        ],
      },
    ],
  };
}

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return seedData();
}

function save() {
  state.updatedAt = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  render();
}

function goalProgress(g) {
  const t = g.milestones.length;
  if (!t) return { done: 0, total: 0, pct: 0 };
  const done = g.milestones.filter((m) => m.status === "done").length;
  return { done, total: t, pct: Math.round((done / t) * 100) };
}

function nextGoalNumber(week) {
  const nums = state.goals.filter((g) => g.week === week).map((g) => g.number);
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

function counts() {
  const ms = state.goals.flatMap((g) => g.milestones);
  return {
    goals: state.goals.length,
    milestones: ms.length,
    done: ms.filter((m) => m.status === "done").length,
    blocked: ms.filter((m) => m.status === "blocked").length,
    wip: ms.filter((m) => m.status === "in_progress").length,
  };
}

const el = {
  weeks: document.getElementById("weeks"),
  weekFilter: document.getElementById("weekFilter"),
  statusFilter: document.getElementById("statusFilter"),
  search: document.getElementById("search"),
  modal: document.getElementById("modal"),
  toast: document.getElementById("toast"),
  sGoals: document.getElementById("sGoals"),
  sMs: document.getElementById("sMs"),
  sDone: document.getElementById("sDone"),
  sBlock: document.getElementById("sBlock"),
};

function toast(msg) {
  el.toast.textContent = msg;
  el.toast.style.display = "block";
  setTimeout(() => (el.toast.style.display = "none"), 2200);
}

function filteredGoals() {
  const week = el.weekFilter.value;
  const st = el.statusFilter.value;
  const q = el.search.value.trim().toLowerCase();
  return state.goals.filter((g) => {
    if (week !== "all" && g.week !== week) return false;
    const blob = (g.title + " " + g.description + " " + g.notes + " " + g.milestones.map((m) => m.title + " " + m.notes).join(" ")).toLowerCase();
    if (q && !blob.includes(q)) return false;
    if (st !== "all" && !g.milestones.some((m) => m.status === st)) return false;
    return true;
  });
}

function render() {
  const c = counts();
  el.sGoals.textContent = c.goals;
  el.sMs.textContent = c.milestones;
  el.sDone.textContent = c.done;
  el.sBlock.textContent = c.blocked;

  const goals = filteredGoals();
  el.weeks.innerHTML = WEEKS.map((w) => {
    const wg = goals.filter((g) => g.week === w.id).sort((a, b) => a.number - b.number);
    const body = wg.length
      ? wg.map(renderGoal).join("")
      : `<div class="empty">No goals in this week yet. Add one when this week is planned.</div>`;
    return `<section class="week" data-week="${w.id}">
      <div class="week-head">
        <h2>${w.label}</h2>
        <div class="meta">${wg.length} goal${wg.length === 1 ? "" : "s"}
          <button data-act="add-goal" data-week="${w.id}">+ Goal</button>
        </div>
      </div>
      ${body}
    </section>`;
  }).join("");
}

function renderGoal(g) {
  const p = goalProgress(g);
  return `<article class="goal" data-id="${g.id}">
    <div class="goal-head">
      <div class="goal-num">G${g.number}</div>
      <div>
        <h3 class="goal-title">${esc(g.title)}</h3>
        <p class="goal-desc">${esc(g.description || "")}</p>
      </div>
      <div class="goal-meta">
        <div class="progress-wrap">
          <div class="progress-bar"><span style="width:${p.pct}%"></span></div>
          <div class="progress-label">${p.done}/${p.total} · due ${g.due || "—"}</div>
        </div>
      </div>
    </div>
    <div class="milestones">
      ${g.milestones.map((m) => renderMs(g.id, m)).join("")}
    </div>
    <div class="add-row">
      <button data-act="add-ms" data-gid="${g.id}">+ Milestone</button>
    </div>
    <div class="goal-actions">
      <button data-act="edit-goal" data-gid="${g.id}">Edit goal</button>
      <button class="danger" data-act="del-goal" data-gid="${g.id}">Delete goal</button>
    </div>
  </article>`;
}

function renderMs(gid, m) {
  const opts = STATUSES.map(
    (s) => `<option value="${s.id}" ${s.id === m.status ? "selected" : ""}>${s.label}</option>`
  ).join("");
  return `<div class="ms" data-mid="${m.id}">
    <div class="status-dot ${m.status}"></div>
    <div>
      <div class="title">${esc(m.title)}</div>
      ${m.notes ? `<div class="notes">${esc(m.notes)}</div>` : ""}
    </div>
    <select data-act="status" data-gid="${gid}" data-mid="${m.id}">${opts}</select>
    <input type="date" value="${m.due || ""}" data-act="due" data-gid="${gid}" data-mid="${m.id}">
    <div class="ms-actions">
      <button data-act="edit-ms" data-gid="${gid}" data-mid="${m.id}">Edit</button>
      <button class="danger" data-act="del-ms" data-gid="${gid}" data-mid="${m.id}">Del</button>
    </div>
  </div>`;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function findGoal(id) {
  return state.goals.find((g) => g.id === id);
}

document.body.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-act]");
  if (!btn) return;
  const act = btn.dataset.act;
  if (act === "add-goal") openGoalForm({ week: btn.dataset.week });
  if (act === "edit-goal") openGoalForm(findGoal(btn.dataset.gid));
  if (act === "del-goal") {
    if (confirm("Delete this goal and its milestones?")) {
      state.goals = state.goals.filter((g) => g.id !== btn.dataset.gid);
      save();
    }
  }
  if (act === "add-ms") openMsForm({ gid: btn.dataset.gid });
  if (act === "edit-ms") {
    const g = findGoal(btn.dataset.gid);
    const m = g.milestones.find((x) => x.id === btn.dataset.mid);
    openMsForm({ gid: g.id, ...m });
  }
  if (act === "del-ms") {
    const g = findGoal(btn.dataset.gid);
    g.milestones = g.milestones.filter((x) => x.id !== btn.dataset.mid);
    save();
  }
  if (act === "export") exportJson();
  if (act === "import") document.getElementById("fileIn").click();
  if (act === "reset") {
    if (confirm("Reset to the original Week 1 seed? This replaces local data.")) {
      state = seedData();
      save();
      toast("Reset to seed");
    }
  }
});

document.body.addEventListener("change", (e) => {
  const t = e.target;
  if (t.dataset.act === "status") {
    const g = findGoal(t.dataset.gid);
    const m = g.milestones.find((x) => x.id === t.dataset.mid);
    m.status = t.value;
    save();
  }
  if (t.dataset.act === "due") {
    const g = findGoal(t.dataset.gid);
    const m = g.milestones.find((x) => x.id === t.dataset.mid);
    m.due = t.value;
    save();
  }
});

["weekFilter", "statusFilter", "search"].forEach((id) => {
  document.getElementById(id).addEventListener("input", render);
});

function openGoalForm(g) {
  const isNew = !g.id;
  const week = g.week || "w2";
  el.modal.hidden = false;
  el.modal.innerHTML = `<div class="modal">
    <h3>${isNew ? "New goal" : "Edit goal"}</h3>
    <label>Week</label>
    <select id="fWeek">${WEEKS.map((w) => `<option value="${w.id}" ${w.id === week ? "selected" : ""}>${w.label}</option>`).join("")}</select>
    <label>Number</label>
    <input id="fNum" type="number" min="1" value="${g.number || nextGoalNumber(week)}">
    <label>Title</label>
    <input id="fTitle" value="${esc(g.title || "")}">
    <label>Description</label>
    <textarea id="fDesc">${esc(g.description || "")}</textarea>
    <label>Goal due</label>
    <input id="fDue" type="date" value="${g.due || ""}">
    <label>Goal notes</label>
    <textarea id="fNotes">${esc(g.notes || "")}</textarea>
    <div class="modal-actions">
      <button id="fCancel">Cancel</button>
      <button class="primary" id="fSave">Save</button>
    </div>
  </div>`;
  el.modal.querySelector("#fCancel").onclick = () => (el.modal.hidden = true);
  el.modal.querySelector("#fSave").onclick = () => {
    const payload = {
      week: document.getElementById("fWeek").value,
      number: Number(document.getElementById("fNum").value) || 1,
      title: document.getElementById("fTitle").value.trim() || "Untitled goal",
      description: document.getElementById("fDesc").value,
      due: document.getElementById("fDue").value,
      notes: document.getElementById("fNotes").value,
    };
    if (isNew) {
      state.goals.push({ id: uid(), milestones: [], ...payload });
    } else {
      Object.assign(findGoal(g.id), payload);
    }
    el.modal.hidden = true;
    save();
  };
}

function openMsForm({ gid, id, title, status, due, notes }) {
  el.modal.hidden = false;
  el.modal.innerHTML = `<div class="modal">
    <h3>${id ? "Edit milestone" : "New milestone"}</h3>
    <label>Title</label>
    <input id="fTitle" value="${esc(title || "")}">
    <label>Status</label>
    <select id="fStatus">${STATUSES.map((s) => `<option value="${s.id}" ${s.id === (status || "not_started") ? "selected" : ""}>${s.label}</option>`).join("")}</select>
    <label>Due date</label>
    <input id="fDue" type="date" value="${due || ""}">
    <label>Notes</label>
    <textarea id="fNotes">${esc(notes || "")}</textarea>
    <div class="modal-actions">
      <button id="fCancel">Cancel</button>
      <button class="primary" id="fSave">Save</button>
    </div>
  </div>`;
  el.modal.querySelector("#fCancel").onclick = () => (el.modal.hidden = true);
  el.modal.querySelector("#fSave").onclick = () => {
    const g = findGoal(gid);
    const payload = {
      title: document.getElementById("fTitle").value.trim() || "Untitled milestone",
      status: document.getElementById("fStatus").value,
      due: document.getElementById("fDue").value,
      notes: document.getElementById("fNotes").value,
    };
    if (id) Object.assign(g.milestones.find((m) => m.id === id), payload);
    else g.milestones.push({ id: uid(), ...payload });
    el.modal.hidden = true;
    save();
  };
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "hyrax-tracker.json";
  a.click();
  toast("Exported");
}

document.getElementById("fileIn").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  file.text().then((t) => {
    try {
      const data = JSON.parse(t);
      if (!data.goals) throw new Error("Invalid file");
      state = data;
      save();
      toast("Imported");
    } catch (err) {
      alert("Could not import: " + err.message);
    }
    e.target.value = "";
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}

render();
