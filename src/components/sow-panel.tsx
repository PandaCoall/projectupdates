const INCLUDED: [string, string][] = [
  [
    "Planning and specification",
    "Finalise architecture, data contracts, dependencies, generation-platform selection, responsibilities and acceptance criteria.",
  ],
  [
    "Private application",
    "Authentication, role-based access, job creation, persistent progress, failure visibility and separate development/staging/production configuration.",
  ],
  [
    "Generation layer",
    "Integrate one presenter recipe and one B-roll generation route initially. Version recipes and retain provider/model settings, task IDs, costs and outputs.",
  ],
  [
    "Background processing",
    "Asynchronous generation, polling, downloads, analysis and rendering; budget reservations, safe retries, reconciliation and cancellation.",
  ],
  [
    "Asset library and tagging",
    "Private uploads and retention; originals, proxies and thumbnails; automated descriptions and tags; usable segment ranges; source, rights, restrictions and approval records. Retain valid originals with no usable ranges and mark them clearly.",
  ],
  [
    "Search and retrieval",
    "Search approved assets before generating more. Implement semantic retrieval and filter results by campaign permissions, rights, expiry and approval status.",
  ],
  [
    "Script verification",
    "Transcription and timing checks against the approved script. Material messaging differences stop progression for review.",
  ],
  [
    "AI edit decisions",
    "Generate constrained editorial instructions covering asset selection, timing, crops, captions, audio, motion, CTA/end frame and approved alternatives. Validate and retain these as versioned Creative Manifests.",
  ],
  [
    "Deterministic rendering",
    "Assemble presenter, B-roll, captions, required voice/audio, music/sound, approved motion, CTA, end frame and mandatory copy using Remotion and media-processing tools.",
  ],
  [
    "Editor review",
    "Show the cut with script beats, selected assets, captions, QA flags and approved alternatives. Support shot replacement, permitted property changes and rejection reasons. Changes create a new manifest/render and rerun QA.",
  ],
  [
    "QA and approval",
    "Technical checks, agreed automated brand/policy checks, recorded overrides and named human approval tied to an exact render version.",
  ],
  [
    "Provider flexibility",
    "Hyrax-owned adapter contracts. Test a second provider during November where access permits; do not make it a prerequisite for the primary production path.",
  ],
  [
    "Operational readiness",
    "Monitoring, audit history, deployment documentation, recovery procedures, rollback, operator training and production verification.",
  ],
  [
    "Evaluation",
    "Measure editor touch time, total human labour, elapsed production time, costs, failures and complete rebuilds.",
  ],
];

const MILESTONES: [string, string, string][] = [
  [
    "29 September–2 October",
    "Agreed implementation pack and initial platform decisions",
    "Scope, dependency owners and acceptance criteria confirmed.",
  ],
  [
    "October — Phase 1",
    "Private foundation, complete assembly, initial generation integrations, asset library/tagging/search, AI manifest creation and minimum review controls",
    "An approved script produces a complete, useful first cut. Build 1 specifically proves an editor can continue a full rendered cut through the tested hand-off, with private inputs, manifest and output versions retained.",
  ],
  [
    "November — Phase 2",
    "Improved retrieval and editorial quality, completed review/approval controls, reliable recovery, monitoring and release candidate",
    "Agreed functionality complete in staging; ready for formal acceptance testing.",
  ],
  [
    "December — Phase 3",
    "System and editor acceptance testing, defect fixes, production deployment, training and stabilisation",
    "Critical tests pass, named production approval is recorded, and recovery/rollback are verified. Deployment target: 14–18 December.",
  ],
];

const BOUNDARIES = [
  "One campaign/product.",
  "One approximately 30-second, 9:16 advert per job.",
  "One presenter recipe and one B-roll generation route.",
  "A curated pilot asset library.",
  "Bounded editor corrections using approved assets and properties.",
];

const EXCLUDED = [
  "Bulk ingestion/tagging of hundreds of thousands of existing videos.",
  "Proprietary model training or a self-hosted GPU fleet.",
  "An unrestricted browser timeline replacing Premiere.",
  "Unlimited variants, multi-platform cut-downs or broad campaign rollout.",
  "Autonomous strategy, unapproved messaging or automatic publishing.",
  "Guaranteed commercial advertising performance.",
  "Ongoing support beyond the agreed December stabilisation period.",
];

const ACCEPTANCE = [
  "All required advert elements are present and technically valid.",
  "Editors can continue the cut without reconstructing the entire advert.",
  "Assets and segments are eligible for the intended use.",
  "Inputs, generation attempts, costs, manifests, renders, corrections and approvals are traceable.",
  "Interrupted work can recover safely.",
  "Private data and media are accessible only to authorised users.",
  "Measured production savings meet the agreed target without reducing accepted quality.",
];

const OBJECTIVE =
  "Build a private production system that takes an approved script through asset retrieval/generation, asset analysis, AI editorial planning, deterministic rendering, QA, editor review and named approval. The system must produce a complete first-cut advert that an editor prefers to use rather than starting from a blank Premiere timeline. If editors discard the cut and rebuild it, the quality milestone has not been achieved.";

export const SOW_SEARCH = [
  "Hyrax AI Advert Production Scope of Work",
  OBJECTIVE,
  ...INCLUDED.flat(),
  ...MILESTONES.flat(),
  ...BOUNDARIES,
  ...EXCLUDED,
  ...ACCEPTANCE,
].join(" ");

export function isWeekOneSow(goal: { week: string; number: number }, milestoneId: string, firstId: string | undefined) {
  return goal.week === "w1" && goal.number === 1 && milestoneId === firstId;
}

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-bg text-xs tracking-wide text-muted uppercase">
            {headers.map((header) => (
              <th key={header} className="px-3 py-2 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-border align-top">
              {row.map((cell, index) => (
                <td key={index} className={index === 0 ? "px-3 py-2 font-medium" : "px-3 py-2 text-muted"}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1 pl-5 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function SowPanel() {
  return (
    <section className="space-y-5 text-sm leading-relaxed">
      <header>
        <h4 className="text-base font-semibold">Hyrax AI Advert Production — Scope of Work</h4>
        <dl className="mt-2 grid gap-1 text-muted sm:grid-cols-2">
          <div>Project period: 29 September–31 December 2026</div>
          <div>Planning: 29 September–2 October</div>
          <div>Development: October–November</div>
          <div>Formal testing, production deployment and stabilisation: December</div>
        </dl>
      </header>

      <div>
        <h5 className="mb-1 font-semibold">Objective</h5>
        <p className="text-muted">{OBJECTIVE}</p>
      </div>

      <div>
        <h5 className="mb-2 font-semibold">Included work</h5>
        <Table headers={["Area", "Scope"]} rows={INCLUDED} />
      </div>

      <div>
        <h5 className="mb-2 font-semibold">Delivery milestones</h5>
        <Table headers={["Period", "Deliverables", "Acceptance"]} rows={MILESTONES} />
        <p className="mt-2 text-muted">
          A prepared manifest is acceptable for Build 1’s assembly test. AI-produced editorial decisions remain
          required for the October end-to-end pilot target.
        </p>
      </div>

      <div>
        <h5 className="mb-1 font-semibold">Scope boundaries</h5>
        <p className="mb-2 text-muted">The initial production path is limited to:</p>
        <Bullets items={BOUNDARIES} />
        <p className="mt-2 text-muted">
          Additional campaigns, formats, recipes or providers require a scope decision after the initial path passes
          its acceptance gate.
        </p>
      </div>

      <div>
        <h5 className="mb-1 font-semibold">Excluded work</h5>
        <Bullets items={EXCLUDED} />
        <p className="mt-2 text-muted">
          Self-hosted ComfyUI remains an assessed architectural option. Implementing it is included only if selected
          as the initial generation route and its infrastructure responsibilities are explicitly agreed.
        </p>
      </div>

      <div>
        <h5 className="mb-1 font-semibold">Acceptance and measurement</h5>
        <p className="mb-2 text-muted">
          Before comparative testing, agree the quality rubric and numerical improvement target with the lead editor
          and second editor.
        </p>
        <p className="mb-2">Acceptance requires:</p>
        <Bullets items={ACCEPTANCE} />
        <p className="mt-2 text-muted">
          A 25% reduction in median editor touch time is a proposed target, subject to agreement. Total human labour
          and elapsed time must also be reported so work is not merely shifted elsewhere.
        </p>
      </div>

      <div>
        <h5 className="mb-1 font-semibold">Dependencies and responsibilities</h5>
        <p className="text-muted">
          Hyrax supplies company-owned accounts, provider access, billing caps, approved scripts, reference
          adverts/source media, brand assets, rights information, campaign rules, two editors and a named release
          owner.
        </p>
        <p className="mt-2 text-muted">
          The delivery team supplies implementation, integration, technical testing, documentation and deployment. The
          schedule assumes a dedicated implementation lead with regular senior engineering review.
        </p>
        <p className="mt-2 text-muted">
          Failed gates must be resolved, narrowed explicitly or rescheduled. New functionality should not be added
          during December’s testing and deployment phase unless necessary to meet the agreed scope.
        </p>
      </div>
    </section>
  );
}
