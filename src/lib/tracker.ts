import { emptyAnswers, withAnswers, type Answers } from "@/lib/answers";

export const STORAGE_KEY = "hyrax-october-tracker-v3";
const LEGACY_KEY = "hyrax-october-tracker-v2";

export const STATUSES = [
  { id: "not_started", label: "Not started" },
  { id: "in_progress", label: "In progress" },
  { id: "blocked", label: "Blocked" },
  { id: "done", label: "Done" },
] as const;

export type Status = (typeof STATUSES)[number]["id"];

export const WEEKS = [
  { id: "w1", label: "Week 1", range: "1–7 Oct" },
  { id: "w2", label: "Week 2", range: "8–14 Oct" },
  { id: "w3", label: "Week 3", range: "15–21 Oct" },
  { id: "w4", label: "Week 4", range: "22–31 Oct" },
] as const;

export type WeekId = (typeof WEEKS)[number]["id"];

export type Milestone = {
  id: string;
  title: string;
  status: Status;
  due: string;
  notes: string;
};

export type Goal = {
  id: string;
  week: WeekId;
  number: number;
  title: string;
  description: string;
  notes: string;
  due: string;
  milestones: Milestone[];
};

export type Person = {
  id: string;
  name: string;
  email: string;
};

export type TrackerState = {
  project: string;
  briefDate: string;
  goals: Goal[];
  answers: Answers;
  people: Person[];
};

function id() {
  return crypto.randomUUID();
}

function ms(title: string, due: string, notes: string): Milestone {
  return { id: id(), title, status: "not_started", due, notes };
}

export function seedData(): TrackerState {
  return {
    project: "Hyrax AI Video Production Pilot",
    briefDate: "2026-09-28",
    answers: emptyAnswers(),
    people: [],
    goals: [
      {
        id: id(),
        week: "w1",
        number: 1,
        title: "Define Scope of Work",
        description:
          "Turn the 28 Sep 2026 overview into a concise October SOW: what is being built, in and out of scope, and deliverables. Flag anything unrealistic or simpler to do another way.\nProduct: controlled internal line from an approved script to a near-finished 9:16 first cut. AI proposes bounded decisions. Deterministic software executes them.\nPilot is narrow: one campaign or product, one approved script, one ~30s 9:16, one presenter workflow, one ad per job.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          ms(
            "Write concise October SOW (in / out of scope + deliverables)",
            "2026-10-03",
            "Out of scope includes autonomous strategy, unlimited variants, a browser Premiere, auto-publish, and commercial-performance claims.",
          ),
          ms(
            "Define the editor first-cut acceptance bar",
            "2026-10-07",
            "Editor prefers the system first cut over a blank Premiere timeline. If they throw it away and rebuild, the milestone is not met.",
          ),
          ms(
            "Confirm the end-to-end basic path",
            "2026-10-07",
            "UGC/presenter, B-roll, captions, voice/audio where required, music/sound, CTA/end frame, assembled first cut.",
          ),
        ],
      },
      {
        id: id(),
        week: "w1",
        number: 2,
        title: "Create Process Flowchart",
        description:
          "Turn overview steps 0–9 and the systems table into a technical flowchart of real systems and hand-offs.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          ms(
            "Map job creation through asset retrieval, storage and analysis",
            "2026-10-05",
            "Steps 0–4: rules, job and budget, presenter and supporting assets, private retention and rights, search before generate.",
          ),
          ms(
            "Map Creative Manifest through render, QA, review and approval",
            "2026-10-05",
            "Steps 5–9: transcript and manifest, deterministic render, QA and policy checks, bounded editor correction, named approval.",
          ),
          ms(
            "Mark providers, async work, AI versus deterministic, and human gates",
            "2026-10-07",
            "AI proposes. The renderer executes. Human gates are editor review and policy, brand or release approval.",
          ),
        ],
      },
      {
        id: id(),
        week: "w1",
        number: 3,
        title: "Prepare Technical Specification / Build Guide",
        description:
          "Turn the overview into the implementation spec: data contracts, APIs, integrations, job states, storage, Creative Manifest, rendering, auth, deployment, error and retry. The proposed stack is a direction, not a mandate.",
        notes: "Answered outside this tracker. Use the development pipeline for this goal.",
        due: "2026-10-07",
        milestones: [
          ms(
            "Specify data model, schemas, job states and storage",
            "2026-10-06",
            "Contracts: Campaign/Product Policy, Job, Asset, Asset Segment, Creative Manifest, Review Decision, Provider Attempt.",
          ),
          ms(
            "Specify APIs, integrations, Creative Manifest and rendering flow",
            "2026-10-06",
            "Proposed direction: Next.js app, provider adapters, Remotion plus FFmpeg from the manifest. Recommend simpler alternatives where justified.",
          ),
          ms(
            "Specify auth, deployment, error and retry",
            "2026-10-07",
            "Keep controlled inputs, repeatability, traceability, private storage, rights awareness and human approval.",
          ),
        ],
      },
      {
        id: id(),
        week: "w1",
        number: 4,
        title: "Identify Requirements / Dependencies",
        description:
          "Checklist of accounts, API access, credentials, infrastructure, assets, reference ads, campaign rules, editor input and decisions. Tag each by stage and whether it actually blocks progress.",
        notes: "",
        due: "2026-10-07",
        milestones: [
          ms(
            "List accounts, API access, credentials and infrastructure",
            "2026-10-04",
            "Company-owned accounts, billing, paid-generation cap. Confirm Floyo or UGC export or API. Keys, GitHub, storage, render environment.",
          ),
          ms(
            "List assets, reference ads, campaign rules and editor input",
            "2026-10-04",
            "Lead and second editor. Named brand, policy or release owner. One approved campaign, script and brief. Five to ten test scripts. Three editable reference ads. Brand kit and asset library.",
          ),
          ms(
            "Tag each item by stage and whether it is a hard blocker",
            "2026-10-07",
            "Do not wait for the full list. Call out provider APIs, private storage, background jobs, rendering, rights, data protection and approvals.",
          ),
        ],
      },
      {
        id: id(),
        week: "w1",
        number: 5,
        title: "Finalise Development Roadmap",
        description:
          "Break October into small gated stages with a deliverable and acceptance test each. Prove the narrow end-to-end path first. Measure editor touch time from approved script to an acceptable first cut versus the current manual workflow. Recommend the generation layer under Hyrax: Floyo, self-hosted ComfyUI, or hosted APIs.",
        notes: "The gated build pipeline lives in the development tool. This tracker only holds the generation-layer comparison.",
        due: "2026-10-07",
        milestones: [
          ms(
            "Draft gated October stages with a deliverable and acceptance test each",
            "2026-10-06",
            "One active gate at a time: asset quality, then retention and search, then deterministic rendering, then constrained edit selection.",
          ),
          ms(
            "Define editor touch-time measurement for the pilot",
            "2026-10-07",
            "Approved script to acceptable finished advert versus the current manual workflow.",
          ),
          ms(
            "Compare Floyo, self-hosted ComfyUI and hosted API generation",
            "2026-10-07",
            "Versioned recipes called by Hyrax. Check headless ComfyUI, queues, workflow versioning, independent GPU workers, local models plus external APIs. Provider-independent.",
          ),
        ],
      },
    ],
  };
}

export function loadState(): TrackerState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_KEY);
    if (raw) {
      const parsed = withAnswers(JSON.parse(raw) as TrackerState);
      return { ...parsed, people: parsed.people ?? [] };
    }
  } catch {
    /* fall through */
  }
  return seedData();
}

export function saveState(state: TrackerState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function nextNumber(goals: Goal[], week: WeekId) {
  const nums = goals.filter((g) => g.week === week).map((g) => g.number);
  return (nums.length ? Math.max(...nums) : 0) + 1;
}

export function progress(goal: Goal) {
  const total = goal.milestones.length;
  const done = goal.milestones.filter((m) => m.status === "done").length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}
