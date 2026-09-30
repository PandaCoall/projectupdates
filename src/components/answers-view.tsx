import { Plus, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import {
  FLOW_KINDS,
  GEN_ROWS,
  type Answers,
  type Deliverable,
  type FlowKind,
  type FlowStep,
  type Requirement,
  type SowFlag,
  type SowItem,
} from "@/lib/answers";

function nid() {
  return crypto.randomUUID();
}

export function AnswersView({
  answers,
  onChange,
}: {
  answers: Answers;
  onChange: (next: Answers) => void;
}) {
  const sow = answers.sow;

  function setSow(patch: Partial<Answers["sow"]>) {
    onChange({ ...answers, sow: { ...sow, ...patch } });
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-6">
      <p className="text-sm text-muted">
        Write the October answers here in the shape they need to be delivered. The technical
        specification and the development pipeline are not in this tracker.
      </p>

      <Section kicker="Goal 1" title="Scope of work">
        <Label text="What we are building">
          <textarea
            className="field min-h-28"
            value={sow.building}
            onChange={(e) => setSow({ building: e.target.value })}
            placeholder="One short statement of the October product."
          />
        </Label>
        <ListEditor
          label="In scope"
          items={sow.inScope}
          onChange={(inScope) => setSow({ inScope })}
          placeholder="One in-scope item"
        />
        <ListEditor
          label="Out of scope"
          items={sow.outOfScope}
          onChange={(outOfScope) => setSow({ outOfScope })}
          placeholder="One out-of-scope item"
        />
        <DeliverableTable
          rows={sow.deliverables}
          onChange={(deliverables) => setSow({ deliverables })}
        />
        <ListEditor
          label="Basic path that must exist in the first cut"
          items={sow.path}
          onChange={(path) => setSow({ path })}
          placeholder="Path item"
        />
        <Label text="Editor acceptance bar">
          <textarea
            className="field min-h-24"
            value={sow.acceptance}
            onChange={(e) => setSow({ acceptance: e.target.value })}
            placeholder="What has to be true for an editor to prefer this first cut over a blank timeline."
          />
        </Label>
        <div>
          <p className="mb-2 text-sm text-muted">Flags and simpler alternatives</p>
          <ul className="space-y-2">
            {sow.flags.map((flag) => (
              <li key={flag.id} className="grid gap-2 rounded-xl border border-border bg-surface p-3 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  className="field"
                  value={flag.concern}
                  placeholder="What looks unrealistic or unnecessary"
                  onChange={(e) =>
                    setSow({
                      flags: sow.flags.map((f) =>
                        f.id === flag.id ? { ...f, concern: e.target.value } : f,
                      ),
                    })
                  }
                />
                <input
                  className="field"
                  value={flag.alternative}
                  placeholder="Simpler alternative"
                  onChange={(e) =>
                    setSow({
                      flags: sow.flags.map((f) =>
                        f.id === flag.id ? { ...f, alternative: e.target.value } : f,
                      ),
                    })
                  }
                />
                <button
                  type="button"
                  aria-label="Remove flag"
                  className="min-h-11 text-alert"
                  onClick={() => setSow({ flags: sow.flags.filter((f) => f.id !== flag.id) })}
                >
                  <Trash2 size={16} />
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary"
            onClick={() =>
              setSow({ flags: [...sow.flags, { id: nid(), concern: "", alternative: "" } satisfies SowFlag] })
            }
          >
            <Plus size={14} /> Flag
          </button>
        </div>
      </Section>

      <Section kicker="Goal 2" title="Process flowchart">
        <p className="text-sm text-muted">
          Each box is a hand-off. Mark whether it is a person, an AI proposal, deterministic
          software, background work, or an outside provider.
        </p>
        <ol className="relative space-y-0 border-l border-border pl-4">
          {answers.flow.map((step, index) => (
            <li key={step.id} className="relative pb-4">
              <span className="absolute top-4 -left-[1.3rem] size-2.5 rounded-full bg-primary" />
              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-muted">{String(index).padStart(2, "0")}</span>
                  <input
                    className="field min-w-40 flex-1"
                    value={step.title}
                    onChange={(e) => updateStep(answers, onChange, step.id, { title: e.target.value })}
                  />
                  <select
                    className="field w-auto"
                    value={step.kind}
                    aria-label="Step type"
                    onChange={(e) =>
                      updateStep(answers, onChange, step.id, { kind: e.target.value as FlowKind })
                    }
                  >
                    {FLOW_KINDS.map((k) => (
                      <option key={k.id} value={k.id}>
                        {k.label}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    aria-label="Remove step"
                    className="min-h-11 px-2 text-alert"
                    onClick={() =>
                      onChange({ ...answers, flow: answers.flow.filter((s) => s.id !== step.id) })
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <textarea
                  className="field min-h-16"
                  value={step.detail}
                  placeholder="What happens, what is handed on, and where it can stop."
                  onChange={(e) => updateStep(answers, onChange, step.id, { detail: e.target.value })}
                />
              </div>
            </li>
          ))}
        </ol>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-1 text-sm text-primary"
          onClick={() =>
            onChange({
              ...answers,
              flow: [
                ...answers.flow,
                { id: nid(), title: "", kind: "deterministic", detail: "" } satisfies FlowStep,
              ],
            })
          }
        >
          <Plus size={14} /> Step
        </button>
      </Section>

      <Section kicker="Goal 4" title="Requirements and dependencies">
        <p className="text-sm text-muted">
          One row per thing you need. Say who provides it, which stage needs it, and whether work
          actually stops without it.
        </p>
        <ul className="space-y-3">
          {answers.requirements.map((row) => (
            <li key={row.id} className="rounded-xl border border-border bg-surface p-3">
              <div className="grid gap-2 sm:grid-cols-2">
                <input
                  className="field sm:col-span-2"
                  value={row.item}
                  placeholder="Account, asset, decision, or access"
                  onChange={(e) => updateReq(answers, onChange, row.id, { item: e.target.value })}
                />
                <select
                  className="field"
                  value={row.from}
                  aria-label="Provided by"
                  onChange={(e) =>
                    updateReq(answers, onChange, row.id, {
                      from: e.target.value as Requirement["from"],
                    })
                  }
                >
                  <option value="Hyrax">From Hyrax</option>
                  <option value="Mary">From Mary</option>
                  <option value="Both">Both</option>
                </select>
                <input
                  className="field"
                  value={row.stage}
                  placeholder="Stage that needs it"
                  onChange={(e) => updateReq(answers, onChange, row.id, { stage: e.target.value })}
                />
                <label className="flex min-h-11 items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={row.blocker}
                    onChange={(e) => updateReq(answers, onChange, row.id, { blocker: e.target.checked })}
                  />
                  Hard blocker
                </label>
                <button
                  type="button"
                  className="min-h-11 text-left text-sm text-alert"
                  onClick={() =>
                    onChange({
                      ...answers,
                      requirements: answers.requirements.filter((r) => r.id !== row.id),
                    })
                  }
                >
                  Remove
                </button>
                <textarea
                  className="field min-h-16 sm:col-span-2"
                  value={row.notes}
                  placeholder="Notes"
                  onChange={(e) => updateReq(answers, onChange, row.id, { notes: e.target.value })}
                />
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-1 text-sm text-primary"
          onClick={() =>
            onChange({
              ...answers,
              requirements: [
                ...answers.requirements,
                {
                  id: nid(),
                  item: "",
                  from: "Hyrax",
                  stage: "",
                  blocker: false,
                  notes: "",
                },
              ],
            })
          }
        >
          <Plus size={14} /> Requirement
        </button>
      </Section>

      <Section kicker="Goal 5" title="Generation layer">
        <p className="text-sm text-muted">
          Floyo, self-hosted ComfyUI, or a hosted API as the recipe layer under Hyrax. The gated
          build pipeline is not tracked here.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-left text-muted">
                <th className="p-3 font-medium">Question</th>
                <th className="p-3 font-medium">Floyo</th>
                <th className="p-3 font-medium">Self-hosted ComfyUI</th>
                <th className="p-3 font-medium">Hosted API</th>
              </tr>
            </thead>
            <tbody>
              {GEN_ROWS.map((row) => {
                const notes = answers.generation[row.key];
                if (typeof notes === "string") return null;
                return (
                  <tr key={row.key} className="border-b border-border align-top">
                    <th className="p-3 text-left font-medium">{row.label}</th>
                    {(["floyo", "comfy", "hosted"] as const).map((col) => (
                      <td key={col} className="p-2">
                        <textarea
                          className="field min-h-20"
                          value={notes[col]}
                          onChange={(e) =>
                            onChange({
                              ...answers,
                              generation: {
                                ...answers.generation,
                                [row.key]: { ...notes, [col]: e.target.value },
                              },
                            })
                          }
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Label text="Recommendation">
          <textarea
            className="field min-h-28"
            value={answers.generation.recommendation}
            placeholder="The simplest option that is repeatable now and can scale or swap later."
            onChange={(e) =>
              onChange({
                ...answers,
                generation: { ...answers.generation, recommendation: e.target.value },
              })
            }
          />
        </Label>
      </Section>
    </main>
  );
}

function updateStep(
  answers: Answers,
  onChange: (next: Answers) => void,
  id: string,
  patch: Partial<FlowStep>,
) {
  onChange({
    ...answers,
    flow: answers.flow.map((s) => (s.id === id ? { ...s, ...patch } : s)),
  });
}

function updateReq(
  answers: Answers,
  onChange: (next: Answers) => void,
  id: string,
  patch: Partial<Requirement>,
) {
  onChange({
    ...answers,
    requirements: answers.requirements.map((r) => (r.id === id ? { ...r, ...patch } : r)),
  });
}

function Section({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <header>
        <p className="font-mono text-xs tracking-widest text-primary uppercase">{kicker}</p>
        <h2 className="text-xl font-semibold">{title}</h2>
      </header>
      {children}
    </section>
  );
}

function Label({ text, children }: { text: string; children: ReactNode }) {
  return (
    <label className="block text-sm text-muted">
      {text}
      <div className="mt-1 text-fg">{children}</div>
    </label>
  );
}

function DeliverableTable({
  rows,
  onChange,
}: {
  rows: Deliverable[];
  onChange: (rows: Deliverable[]) => void;
}) {
  function patch(id: string, next: Partial<Deliverable>) {
    onChange(rows.map((row) => (row.id === id ? { ...row, ...next } : row)));
  }
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-fg">Deliverables and owners</p>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full min-w-[40rem] border-collapse text-sm">
          <thead>
            <tr className="bg-surface-2 text-left">
              <th className="w-[22%] p-3 font-semibold">Deliverable</th>
              <th className="p-3 font-semibold">Acceptance evidence</th>
              <th className="w-[24%] p-3 font-semibold">Accountable owner</th>
              <th className="w-12 p-3" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "border-t border-border bg-surface" : "border-t border-border bg-bg"}
              >
                <td className="p-2 align-top">
                  <textarea
                    className="field min-h-20"
                    value={row.name}
                    aria-label="Deliverable"
                    onChange={(e) => patch(row.id, { name: e.target.value })}
                  />
                </td>
                <td className="p-2 align-top">
                  <textarea
                    className="field min-h-20"
                    value={row.evidence}
                    aria-label="Acceptance evidence"
                    onChange={(e) => patch(row.id, { evidence: e.target.value })}
                  />
                </td>
                <td className="p-2 align-top">
                  <textarea
                    className="field min-h-20"
                    value={row.owner}
                    aria-label="Accountable owner"
                    onChange={(e) => patch(row.id, { owner: e.target.value })}
                  />
                </td>
                <td className="p-2 align-top">
                  <button
                    type="button"
                    aria-label="Remove deliverable"
                    className="min-h-11 px-2 text-alert"
                    onClick={() => onChange(rows.filter((item) => item.id !== row.id))}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary"
        onClick={() => onChange([...rows, { id: nid(), name: "", evidence: "", owner: "" }])}
      >
        <Plus size={14} /> Deliverable
      </button>
    </div>
  );
}

function ListEditor({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: SowItem[];
  onChange: (items: SowItem[]) => void;
  placeholder: string;
}) {
  return (
    <div>
      <p className="mb-2 text-sm text-muted">{label}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex gap-2">
            <input
              className="field"
              value={item.text}
              placeholder={placeholder}
              onChange={(e) =>
                onChange(items.map((x) => (x.id === item.id ? { ...x, text: e.target.value } : x)))
              }
            />
            <button
              type="button"
              aria-label={`Remove ${label}`}
              className="min-h-11 px-2 text-alert"
              onClick={() => onChange(items.filter((x) => x.id !== item.id))}
            >
              <Trash2 size={16} />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="mt-2 inline-flex min-h-11 items-center gap-1 text-sm text-primary"
        onClick={() => onChange([...items, { id: nid(), text: "" }])}
      >
        <Plus size={14} /> Add
      </button>
    </div>
  );
}
