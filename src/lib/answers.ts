export type SowItem = { id: string; text: string };
export type Deliverable = { id: string; name: string; evidence: string; owner: string };
export type SowFlag = { id: string; concern: string; alternative: string };

export type FlowKind = "human" | "ai" | "deterministic" | "async" | "external";

export type FlowStep = {
  id: string;
  title: string;
  kind: FlowKind;
  detail: string;
};

export type Requirement = {
  id: string;
  item: string;
  from: "Hyrax" | "Mary" | "Both";
  stage: string;
  blocker: boolean;
  notes: string;
};

export type GenNotes = {
  floyo: string;
  comfy: string;
  hosted: string;
};

export type Answers = {
  sow: {
    building: string;
    inScope: SowItem[];
    outOfScope: SowItem[];
    deliverables: Deliverable[];
    path: SowItem[];
    acceptance: string;
    flags: SowFlag[];
  };
  flow: FlowStep[];
  requirements: Requirement[];
  generation: {
    recommendation: string;
    repeatability: GenNotes;
    api: GenNotes;
    queue: GenNotes;
    versioning: GenNotes;
    scale: GenNotes;
    swap: GenNotes;
  };
};

export const FLOW_KINDS: { id: FlowKind; label: string }[] = [
  { id: "human", label: "Human approval" },
  { id: "ai", label: "AI-driven" },
  { id: "deterministic", label: "Deterministic" },
  { id: "async", label: "Background" },
  { id: "external", label: "External provider" },
];

export const GEN_ROWS: { key: keyof Answers["generation"]; label: string }[] = [
  { key: "repeatability", label: "Repeatable recipes" },
  { key: "api", label: "Headless / API call from Hyrax" },
  { key: "queue", label: "Queue large job volumes" },
  { key: "versioning", label: "Version the workflows" },
  { key: "scale", label: "Scale workers independently" },
  { key: "swap", label: "Swap a model without redesigning Hyrax" },
];

function nid() {
  return crypto.randomUUID();
}

function item(text = ""): SowItem {
  return { id: nid(), text };
}

function deliverable(name: string, evidence: string, owner: string): Deliverable {
  return { id: nid(), name, evidence, owner };
}

export function seedDeliverables(): Deliverable[] {
  return [
    deliverable(
      "Working pilot path",
      "A complete job runs in the deployed environment and produces the agreed editor handoff",
      "Mary with engineering support",
    ),
    deliverable(
      "Recipe and provider decision",
      "Versioned inputs, results, failures, cost and editor assessment from the bounded comparison",
      "Mary and senior engineer",
    ),
    deliverable(
      "Retained asset library",
      "Approved segments can be found and used; unapproved or restricted ranges cannot be rendered",
      "Mary; editor owns usability approval",
    ),
    deliverable(
      "Review and approval path",
      "A correction creates a new version; acceptance and release decisions remain distinct",
      "Editors and release owner",
    ),
    deliverable(
      "Specification and operating guide",
      "Data contracts, deployment, recovery, access and known limitations documented",
      "Mary and senior engineer",
    ),
    deliverable(
      "Measurement report",
      "Matched baseline and pilot timings, accepted outcomes, cost and failure analysis",
      "Mary and lead editor",
    ),
  ];
}

const emptyGen = (): GenNotes => ({ floyo: "", comfy: "", hosted: "" });

export function emptyAnswers(): Answers {
  return {
    sow: {
      building: "",
      inScope: [item()],
      outOfScope: [item()],
      deliverables: seedDeliverables(),
      path: [
        item("UGC / presenter"),
        item("B-roll"),
        item("Captions"),
        item("Voice / audio"),
        item("Music / sound"),
        item("CTA / end frame"),
        item("Assembled first cut"),
      ],
      acceptance: "",
      flags: [{ id: nid(), concern: "", alternative: "" }],
    },
    flow: [
      "Campaign / product rules",
      "Job creation and budget",
      "Asset retrieval or generation",
      "Private storage and rights",
      "Analysis and search",
      "Creative Manifest",
      "Deterministic render",
      "QA checks",
      "Editor review",
      "Named approval",
    ].map((title) => ({ id: nid(), title, kind: "deterministic" as FlowKind, detail: "" })),
    requirements: [
      {
        id: nid(),
        item: "",
        from: "Hyrax",
        stage: "Before build",
        blocker: false,
        notes: "",
      },
    ],
    generation: {
      recommendation: "",
      repeatability: emptyGen(),
      api: emptyGen(),
      queue: emptyGen(),
      versioning: emptyGen(),
      scale: emptyGen(),
      swap: emptyGen(),
    },
  };
}

export function withAnswers<T extends { answers?: Answers }>(state: T): T & { answers: Answers } {
  const answers = state.answers ?? emptyAnswers();
  const rows = answers.sow.deliverables as Array<Deliverable & { text?: string }>;
  const shaped = rows.every((row) => typeof row.name === "string");
  const deliverables = shaped
    ? rows
    : rows.some((row) => row.text)
      ? rows.map((row) => ({
          id: row.id,
          name: row.text ?? "",
          evidence: row.evidence ?? "",
          owner: row.owner ?? "",
        }))
      : seedDeliverables();
  return { ...state, answers: { ...answers, sow: { ...answers.sow, deliverables } } };
}
