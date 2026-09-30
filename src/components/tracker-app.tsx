import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Calendar,
  Circle,
  CircleCheck,
  CircleDashed,
  Download,
  OctagonAlert,
  Plus,
  RotateCcw,
  Search,
  Trash2,
  Upload,
} from "lucide-react";
import { AnswersView } from "@/components/answers-view";
import { PeopleView } from "@/components/people-view";
import { withAnswers } from "@/lib/answers";
import {
  STATUSES,
  WEEKS,
  loadState,
  nextNumber,
  progress,
  saveState,
  seedData,
  type Goal,
  type Milestone,
  type Status,
  type TrackerState,
  type WeekId,
} from "@/lib/tracker";

type Draft =
  | { kind: "goal"; goal: Goal; isNew: boolean }
  | { kind: "ms"; gid: string; ms: Milestone; isNew: boolean };

function uid() {
  return crypto.randomUUID();
}

export function TrackerApp() {
  const [state, setState] = useState<TrackerState | null>(null);
  const [week, setWeek] = useState<"all" | WeekId>("all");
  const [status, setStatus] = useState<"all" | Status>("all");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [view, setView] = useState<"board" | "answers" | "people">("board");
  const [toast, setToast] = useState("");

  useEffect(() => {
    setState(loadState());
  }, []);

  useEffect(() => {
    if (state) saveState(state);
  }, [state]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const counts = useMemo(() => {
    const ms = state?.goals.flatMap((g) => g.milestones) ?? [];
    return {
      goals: state?.goals.length ?? 0,
      milestones: ms.length,
      done: ms.filter((m) => m.status === "done").length,
      blocked: ms.filter((m) => m.status === "blocked").length,
    };
  }, [state]);

  if (!state) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 text-muted">Loading tracker…</main>
    );
  }

  const q = query.trim().toLowerCase();
  const visible = state.goals.filter((g) => {
    if (week !== "all" && g.week !== week) return false;
    const blob = `${g.title} ${g.description} ${g.notes} ${g.milestones.map((m) => `${m.title} ${m.notes}`).join(" ")}`.toLowerCase();
    if (q && !blob.includes(q)) return false;
    if (status !== "all" && !g.milestones.some((m) => m.status === status)) return false;
    return true;
  });

  function patch(fn: (s: TrackerState) => TrackerState) {
    setState((s) => (s ? fn(s) : s));
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "hyrax-tracker.json";
    a.click();
    URL.revokeObjectURL(a.href);
    setToast("Exported");
  }

  function importJson(file: File) {
    file.text().then((text) => {
      try {
        const data = withAnswers(JSON.parse(text) as TrackerState);
        if (!Array.isArray(data.goals)) throw new Error("Missing goals");
        setState(data);
        setToast("Imported");
      } catch {
        setToast("Import failed");
      }
    });
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-4 px-4 py-4">
          <div className="min-w-44">
            <p className="font-mono text-xs tracking-wide text-primary">HYRAX</p>
            <h1 className="text-lg font-semibold leading-tight">October tracker</h1>
            <p className="text-sm text-muted">
              {view === "board"
                ? "Goals, milestones, status, due date, notes"
                : view === "answers"
                  ? "SOW, flowchart, requirements, generation layer"
                  : "Private team list. No Google account."}
            </p>
          </div>
          <div className="flex rounded-lg border border-border p-1">
            <button
              type="button"
              className={`min-h-11 rounded-md px-3 text-sm ${view === "board" ? "bg-primary font-semibold text-primary-ink" : ""}`}
              onClick={() => setView("board")}
            >
              Board
            </button>
            <button
              type="button"
              className={`min-h-11 rounded-md px-3 text-sm ${view === "answers" ? "bg-primary font-semibold text-primary-ink" : ""}`}
              onClick={() => setView("answers")}
            >
              Answers
            </button>
            <button
              type="button"
              className={`min-h-11 rounded-md px-3 text-sm ${view === "people" ? "bg-primary font-semibold text-primary-ink" : ""}`}
              onClick={() => setView("people")}
            >
              Team
            </button>
          </div>
          <dl className="flex flex-1 flex-wrap gap-2">
            <Stat label="Goals" value={counts.goals} />
            <Stat label="Milestones" value={counts.milestones} />
            <Stat label="Done" value={counts.done} />
            <Stat label="Blocked" value={counts.blocked} />
          </dl>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-primary px-3 text-sm font-semibold text-primary-ink"
              onClick={() =>
                setDraft({
                  kind: "goal",
                  isNew: true,
                  goal: blankGoal(state.goals, week === "all" ? "w2" : week),
                })
              }
            >
              <Plus size={16} /> Goal
            </button>
            <IconButton label="Export" onClick={exportJson}>
              <Download size={16} />
            </IconButton>
            <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm">
              <Upload size={16} /> Import
              <input
                type="file"
                accept="application/json"
                className="sr-only"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) importJson(f);
                  e.target.value = "";
                }}
              />
            </label>
            <IconButton
              label="Reset"
              onClick={() => {
                if (confirm("Replace this board with the original Week 1 seed?")) {
                  setState(seedData());
                  setToast("Reset");
                }
              }}
            >
              <RotateCcw size={16} />
            </IconButton>
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap gap-2 px-4 pb-4">
          <select
            className="min-h-11 rounded-lg border border-border bg-surface px-3 text-sm"
            value={week}
            onChange={(e) => setWeek(e.target.value as "all" | WeekId)}
          >
            <option value="all">All weeks</option>
            {WEEKS.map((w) => (
              <option key={w.id} value={w.id}>
                {w.label}
              </option>
            ))}
          </select>
          <select
            className="min-h-11 rounded-lg border border-border bg-surface px-3 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value as "all" | Status)}
          >
            <option value="all">Any status</option>
            {STATUSES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
          <label className="flex min-h-11 min-w-52 flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm">
            <Search size={16} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-full bg-transparent outline-none placeholder:text-muted"
            />
          </label>
        </div>
      </header>

      {view === "answers" ? (
        <AnswersView
          answers={state.answers}
          onChange={(answers) => setState({ ...state, answers })}
        />
      ) : view === "people" ? (
        <PeopleView people={state.people} onChange={(people) => setState({ ...state, people })} />
      ) : (
      <main className="mx-auto max-w-5xl px-4 py-6">
        {WEEKS.filter((w) => week === "all" || week === w.id).map((w) => {
          const goals = visible
            .filter((g) => g.week === w.id)
            .sort((a, b) => a.number - b.number);
          return (
            <section key={w.id} className="mb-8">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="font-mono text-xs tracking-widest text-muted uppercase">
                  {w.label} · {w.range} 2026
                </h2>
                <button
                  type="button"
                  className="text-sm text-primary"
                  onClick={() =>
                    setDraft({ kind: "goal", isNew: true, goal: blankGoal(state.goals, w.id) })
                  }
                >
                  Add goal
                </button>
              </div>
              {goals.length === 0 ? (
                <p className="rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted">
                  Nothing planned for this week yet.
                </p>
              ) : (
                goals.map((g) => (
                  <GoalCard
                    key={g.id}
                    goal={g}
                    onEdit={() => setDraft({ kind: "goal", isNew: false, goal: structuredClone(g) })}
                    onDelete={() => {
                      if (confirm("Delete this goal and its milestones?")) {
                        patch((s) => ({ ...s, goals: s.goals.filter((x) => x.id !== g.id) }));
                      }
                    }}
                    onAddMs={() =>
                      setDraft({
                        kind: "ms",
                        gid: g.id,
                        isNew: true,
                        ms: { id: uid(), title: "", status: "not_started", due: "", notes: "" },
                      })
                    }
                    onEditMs={(m) =>
                      setDraft({ kind: "ms", gid: g.id, isNew: false, ms: structuredClone(m) })
                    }
                    onStatus={(mid, next) =>
                      patch((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : {
                                ...goal,
                                milestones: goal.milestones.map((m) =>
                                  m.id === mid ? { ...m, status: next } : m,
                                ),
                              },
                        ),
                      }))
                    }
                    onDue={(mid, due) =>
                      patch((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : {
                                ...goal,
                                milestones: goal.milestones.map((m) =>
                                  m.id === mid ? { ...m, due } : m,
                                ),
                              },
                        ),
                      }))
                    }
                    onDeleteMs={(mid) =>
                      patch((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : { ...goal, milestones: goal.milestones.filter((m) => m.id !== mid) },
                        ),
                      }))
                    }
                  />
                ))
              )}
            </section>
          );
        })}
      </main>
      )}

      {draft && (
        <Editor
          draft={draft}
          onClose={() => setDraft(null)}
          onSave={(next) => {
            if (next.kind === "goal") {
              patch((s) => ({
                ...s,
                goals: next.isNew
                  ? [...s.goals, next.goal]
                  : s.goals.map((g) => (g.id === next.goal.id ? next.goal : g)),
              }));
            } else {
              patch((s) => ({
                ...s,
                goals: s.goals.map((g) => {
                  if (g.id !== next.gid) return g;
                  return {
                    ...g,
                    milestones: next.isNew
                      ? [...g.milestones, next.ms]
                      : g.milestones.map((m) => (m.id === next.ms.id ? next.ms : m)),
                  };
                }),
              }));
            }
            setDraft(null);
          }}
        />
      )}

      {toast && (
        <p className="fixed right-4 bottom-4 rounded-lg border border-border bg-surface px-4 py-2 text-sm">
          {toast}
        </p>
      )}
    </div>
  );
}

function blankGoal(goals: Goal[], week: WeekId): Goal {
  return {
    id: uid(),
    week,
    number: nextNumber(goals, week),
    title: "",
    description: "",
    notes: "",
    due: "",
    milestones: [],
  };
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-20 rounded-lg border border-border bg-surface px-3 py-2">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="text-lg font-semibold leading-none">{value}</dd>
    </div>
  );
}

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-surface px-3 text-sm"
      onClick={onClick}
    >
      {children}
      <span>{label}</span>
    </button>
  );
}

function GoalCard({
  goal,
  onEdit,
  onDelete,
  onAddMs,
  onEditMs,
  onStatus,
  onDue,
  onDeleteMs,
}: {
  goal: Goal;
  onEdit: () => void;
  onDelete: () => void;
  onAddMs: () => void;
  onEditMs: (m: Milestone) => void;
  onStatus: (id: string, status: Status) => void;
  onDue: (id: string, due: string) => void;
  onDeleteMs: (id: string) => void;
}) {
  const p = progress(goal);
  return (
    <article className="mb-3 overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex gap-3 p-4">
        <span className="mt-0.5 h-fit rounded-md bg-primary/15 px-2 py-1 font-mono text-xs text-primary">
          G{goal.number}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold">{goal.title}</h3>
          {goal.description && (
            <p className="mt-1 text-sm leading-relaxed whitespace-pre-wrap text-muted">
              {goal.description}
            </p>
          )}
          {goal.notes && <p className="mt-2 text-sm whitespace-pre-wrap">{goal.notes}</p>}
        </div>
        <div className="hidden w-28 shrink-0 text-right sm:block">
          <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
            <div className="h-full bg-primary" style={{ width: `${p.pct}%` }} />
          </div>
          <p className="mt-1 text-xs text-muted">
            {p.done}/{p.total}
            {goal.due ? ` · ${goal.due}` : ""}
          </p>
        </div>
      </div>
      <ul>
        {goal.milestones.map((m) => (
          <li
            key={m.id}
            className="grid gap-2 border-t border-border px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start"
          >
            <StatusMark status={m.status} />
            <div className="min-w-0">
              <p className="text-sm font-medium">{m.title}</p>
              {m.notes && <p className="mt-1 text-sm leading-relaxed text-muted">{m.notes}</p>}
            </div>
            <select
              aria-label="Status"
              className="min-h-11 rounded-lg border border-border bg-bg px-2 text-sm"
              value={m.status}
              onChange={(e) => onStatus(m.id, e.target.value as Status)}
            >
              {STATUSES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
            <label className="flex min-h-11 items-center gap-2 rounded-lg border border-border bg-bg px-2 text-sm">
              <Calendar size={14} className="shrink-0 text-muted" />
              <input
                type="date"
                aria-label="Due date"
                className="w-full bg-transparent outline-none"
                value={m.due}
                onChange={(e) => onDue(m.id, e.target.value)}
              />
            </label>
            <div className="flex gap-1">
              <button type="button" className="min-h-11 px-2 text-sm text-muted" onClick={() => onEditMs(m)}>
                Edit
              </button>
              <button
                type="button"
                aria-label="Delete milestone"
                className="min-h-11 px-2 text-alert"
                onClick={() => onDeleteMs(m.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between border-t border-border px-4 py-2">
        <button type="button" className="min-h-11 text-sm text-primary" onClick={onAddMs}>
          Add milestone
        </button>
        <div className="flex gap-3">
          <button type="button" className="min-h-11 text-sm" onClick={onEdit}>
            Edit goal
          </button>
          <button type="button" className="min-h-11 text-sm text-alert" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

function StatusMark({ status }: { status: Status }) {
  const cls = "mt-1 text-muted";
  if (status === "done") return <CircleCheck size={16} className="mt-1 text-primary" />;
  if (status === "blocked") return <OctagonAlert size={16} className="mt-1 text-alert" />;
  if (status === "in_progress") return <CircleDashed size={16} className={cls} />;
  return <Circle size={16} className={cls} />;
}

function Editor({
  draft,
  onClose,
  onSave,
}: {
  draft: Draft;
  onClose: () => void;
  onSave: (d: Draft) => void;
}) {
  const [local, setLocal] = useState(draft);
  const goal = local.kind === "goal" ? local.goal : null;
  const ms = local.kind === "ms" ? local.ms : null;

  return (
    <div className="fixed inset-0 z-40 flex items-start justify-center bg-bg/70 px-4 pt-16">
      <form
        className="w-full max-w-lg rounded-xl border border-border bg-surface p-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (local.kind === "goal" && !local.goal.title.trim()) return;
          if (local.kind === "ms" && !local.ms.title.trim()) return;
          onSave(local);
        }}
      >
        <h2 className="mb-3 text-base font-semibold">
          {local.kind === "goal"
            ? local.isNew
              ? "New goal"
              : "Edit goal"
            : local.isNew
              ? "New milestone"
              : "Edit milestone"}
        </h2>
        {goal && (
          <>
            <Field label="Week">
              <select
                className="field"
                value={goal.week}
                onChange={(e) =>
                  setLocal({
                    ...local,
                    kind: "goal",
                    goal: { ...goal, week: e.target.value as WeekId },
                  })
                }
              >
                {WEEKS.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label} · {w.range}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Number">
              <input
                className="field"
                type="number"
                min={1}
                value={goal.number}
                onChange={(e) =>
                  setLocal({
                    ...local,
                    kind: "goal",
                    goal: { ...goal, number: Number(e.target.value) || 1 },
                  })
                }
              />
            </Field>
            <Field label="Title">
              <input
                className="field"
                value={goal.title}
                required
                onChange={(e) =>
                  setLocal({ ...local, kind: "goal", goal: { ...goal, title: e.target.value } })
                }
              />
            </Field>
            <Field label="Description">
              <textarea
                className="field min-h-24"
                value={goal.description}
                onChange={(e) =>
                  setLocal({
                    ...local,
                    kind: "goal",
                    goal: { ...goal, description: e.target.value },
                  })
                }
              />
            </Field>
            <Field label="Due">
              <input
                className="field"
                type="date"
                value={goal.due}
                onChange={(e) =>
                  setLocal({ ...local, kind: "goal", goal: { ...goal, due: e.target.value } })
                }
              />
            </Field>
            <Field label="Notes">
              <textarea
                className="field min-h-20"
                value={goal.notes}
                onChange={(e) =>
                  setLocal({ ...local, kind: "goal", goal: { ...goal, notes: e.target.value } })
                }
              />
            </Field>
          </>
        )}
        {ms && (
          <>
            <Field label="Title">
              <input
                className="field"
                required
                value={ms.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setLocal((d) => (d.kind === "ms" ? { ...d, ms: { ...d.ms, title } } : d));
                }}
              />
            </Field>
            <Field label="Status">
              <select
                className="field"
                value={ms.status}
                onChange={(e) => {
                  const status = e.target.value as Status;
                  setLocal((d) => (d.kind === "ms" ? { ...d, ms: { ...d.ms, status } } : d));
                }}
              >
                {STATUSES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Due">
              <input
                className="field"
                type="date"
                value={ms.due}
                onChange={(e) => {
                  const due = e.target.value;
                  setLocal((d) => (d.kind === "ms" ? { ...d, ms: { ...d.ms, due } } : d));
                }}
              />
            </Field>
            <Field label="Notes">
              <textarea
                className="field min-h-20"
                value={ms.notes}
                onChange={(e) => {
                  const notes = e.target.value;
                  setLocal((d) => (d.kind === "ms" ? { ...d, ms: { ...d.ms, notes } } : d));
                }}
              />
            </Field>
          </>
        )}
        <div className="mt-4 flex justify-end gap-2">
          <button type="button" className="min-h-11 rounded-lg border border-border px-4 text-sm" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="mb-3 block text-sm text-muted">
      {label}
      <div className="mt-1 text-fg">{children}</div>
    </label>
  );
}
