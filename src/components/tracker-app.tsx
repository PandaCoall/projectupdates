import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Navigate } from "@tanstack/react-router";
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
import { addComment, deleteMyComment, loadShared, saveGoals, saveMyAnswers, updateMilestone, updateMyComment, type SharedAnswer, type SharedComment } from "@/lib/shared";
import { matchTeam, type TeamMember } from "@/lib/team";
import { withAnswers } from "@/lib/answers";
import {
  STATUSES,
  WEEKS,
  loadState,
  nextNumber,
  progress,
  saveState,
  seedData,
  withOctoberGoals,
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

const WHO_KEY = "hyrax-team-email";

export function TrackerApp() {
  const [state, setState] = useState<TrackerState | null>(null);
  const [week, setWeek] = useState<"all" | WeekId>("all");
  const [status, setStatus] = useState<"all" | Status>("all");
  const [query, setQuery] = useState("");
  const [draft, setDraft] = useState<Draft | null>(null);
  const [view, setView] = useState<"board" | "answers" | "people">("board");
  const [toast, setToast] = useState("");
  const [who, setWho] = useState<TeamMember | null>(null);
  const [gateReady, setGateReady] = useState(false);
  const [comments, setComments] = useState<SharedComment[]>([]);
  const [teamAnswers, setTeamAnswers] = useState<SharedAnswer[]>([]);

  useEffect(() => {
    setState(loadState());
    const saved = sessionStorage.getItem(WHO_KEY);
    setWho(saved ? matchTeam(saved) : null);
    setGateReady(true);
  }, []);

  useEffect(() => {
    if (state) saveState(state);
  }, [state]);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!who) return;
    let cancel = false;
    loadShared({ data: { email: who.email } })
      .then((snap) => {
        if (cancel) return;
        setComments(snap.comments);
        setTeamAnswers(snap.answers);
        const merged = withOctoberGoals(snap.goals);
        setState((prev) => {
          if (!prev) return prev;
          const mine = snap.answers.find((row) => row.author === who.name);
          return {
            ...prev,
            goals: merged.goals,
            answers: mine ? mine.body : prev.answers,
          };
        });
        if (merged.changed && who.role === "owner") {
          saveGoals({ data: { email: who.email, goals: merged.goals } }).catch(() =>
            setToast("Could not save the board."),
          );
        }
      })
      .catch(() => setToast("Could not open the shared tracker."));
    return () => {
      cancel = true;
    };
  }, [who]);

  const counts = useMemo(() => {
    const ms = state?.goals.flatMap((g) => g.milestones) ?? [];
    return {
      goals: state?.goals.length ?? 0,
      milestones: ms.length,
      done: ms.filter((m) => m.status === "done").length,
      blocked: ms.filter((m) => m.status === "blocked").length,
    };
  }, [state]);

  if (!gateReady || !state) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 text-muted">Loading tracker…</main>
    );
  }

  const memberOnly = who?.role === "member";

  if (!who) return <Navigate to="/enter" />;
  const member = who;

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

  function commit(fn: (s: TrackerState) => TrackerState) {
    setState((current) => {
      if (!current) return current;
      const next = fn(current);
      if (member.role === "owner") {
        saveGoals({ data: { email: member.email, goals: next.goals } }).catch(() =>
          setToast("Could not save the board."),
        );
      }
      return next;
    });
  }

  function editComment(id: string, body: string) {
    updateMyComment({ data: { email: member.email, id, body } })
      .then((row) => setComments((prev) => prev.map((comment) => (comment.id === id ? row : comment))))
      .catch(() => setToast("Could not edit that comment."));
  }

  function removeComment(id: string) {
    deleteMyComment({ data: { email: member.email, id } })
      .then(() => setComments((prev) => prev.filter((comment) => comment.id !== id)))
      .catch(() => setToast("Could not delete that comment."));
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
        if (member.role === "owner") {
          saveGoals({ data: { email: member.email, goals: data.goals } }).catch(() =>
            setToast("Could not save the board."),
          );
        }
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
              {who.name} · {who.role}.{" "}
              <button
                type="button"
                className="underline"
                onClick={() => {
                  sessionStorage.removeItem(WHO_KEY);
                  setWho(null);
                }}
              >
                Use another email
              </button>
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
            {!memberOnly && (
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
            )}
            <IconButton label="Export" onClick={exportJson}>
              <Download size={16} />
            </IconButton>
            {!memberOnly && (
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
            )}
            {!memberOnly && (
            <IconButton
              label="Reset"
              onClick={() => {
                if (confirm("Replace the shared board with the original Week 1 seed?")) {
                  const next = seedData();
                  setState(next);
                  saveGoals({ data: { email: who.email, goals: next.goals } }).catch(() =>
                    setToast("Could not save the board."),
                  );
                  setToast("Reset");
                }
              }}
            >
              <RotateCcw size={16} />
            </IconButton>
            )}
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
        <>
        <AnswersView
          answers={state.answers}
          onChange={(answers) => {
            setState({ ...state, answers });
            saveMyAnswers({ data: { email: who.email, answers } })
              .then(() => {
                setTeamAnswers((prev) => [
                  ...prev.filter((row) => row.author !== who.name),
                  { author: who.name, body: answers },
                ]);
                setToast(`Saved under ${who.name}`);
              })
              .catch(() => setToast("Could not save answers."));
          }}
        />
        {teamAnswers.filter((row) => row.author !== who.name).length > 0 && (
          <section className="mx-auto max-w-5xl space-y-3 px-4 pb-8">
            <h2 className="text-sm font-semibold">Everyone else's answers</h2>
            {teamAnswers
              .filter((row) => row.author !== who.name)
              .map((row) => (
                <article key={row.author} className="rounded-xl border border-border bg-surface p-4 text-sm">
                  <p className="font-medium">{row.author}</p>
                  <p className="mt-2 whitespace-pre-wrap text-muted">{row.body.sow.building || "No scope written yet."}</p>
                </article>
              ))}
          </section>
        )}
        </>
      ) : view === "people" ? (
        <PeopleView />
      ) : (
      <main className="mx-auto max-w-5xl px-4 py-6">
        <section className="mb-6 rounded-xl border border-border bg-surface p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold">Team comments</h2>
            <button
              type="button"
              className="min-h-11 text-sm text-primary"
              onClick={() => {
                loadShared({ data: { email: who.email } })
                  .then((snap) => {
                    setComments(snap.comments);
                    setTeamAnswers(snap.answers);
                    if (snap.goals.length > 0) {
                      setState((prev) => (prev ? { ...prev, goals: snap.goals } : prev));
                    }
                    setToast("Team comments updated");
                  })
                  .catch(() => setToast("Could not refresh comments."));
              }}
            >
              Refresh
            </button>
          </div>
          {comments.length === 0 ? (
            <p className="text-sm text-muted">No comments yet. A comment here is visible to Mary, Jay, and Ben.</p>
          ) : (
            <ul className="space-y-2">
              {comments.map((comment) => {
                const goal = state.goals.find((item) => item.id === comment.goal_id);
                return (
                  <li key={comment.id} className="text-sm">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-muted">
                      {" "}
                      on {goal ? goal.title : "a goal"}: {comment.body}
                    </span>
                    {comment.author === member.name && (
                      <CommentActions
                        onEdit={(body) => editComment(comment.id, body)}
                        onDelete={() => removeComment(comment.id)}
                        body={comment.body}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
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
                {!memberOnly && (
                <button
                  type="button"
                  className="text-sm text-primary"
                  onClick={() =>
                    setDraft({ kind: "goal", isNew: true, goal: blankGoal(state.goals, w.id) })
                  }
                >
                  Add goal
                </button>
                )}
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
                        commit((s) => ({ ...s, goals: s.goals.filter((x) => x.id !== g.id) }));
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
                    onStatus={(mid, next) => {
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
                      }));
                      updateMilestone({
                        data: { email: who.email, goalId: g.id, milestoneId: mid, status: next },
                      }).catch(() => setToast("Could not save the status."));
                    }}
                    onDue={(mid, due) => {
                      patch((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : {
                                ...goal,
                                milestones: goal.milestones.map((m) => (m.id === mid ? { ...m, due } : m)),
                              },
                        ),
                      }));
                      updateMilestone({
                        data: { email: who.email, goalId: g.id, milestoneId: mid, due },
                      }).catch(() => setToast("Could not save the due date."));
                    }}
                    onNotes={(mid, notes) =>
                      commit((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : {
                                ...goal,
                                milestones: goal.milestones.map((m) => (m.id === mid ? { ...m, notes } : m)),
                              },
                        ),
                      }))
                    }
                    onDeleteMs={(mid) =>
                      commit((s) => ({
                        ...s,
                        goals: s.goals.map((goal) =>
                          goal.id !== g.id
                            ? goal
                            : { ...goal, milestones: goal.milestones.filter((m) => m.id !== mid) },
                        ),
                      }))
                    }
                    locked={memberOnly}
                    comments={comments.filter((c) => c.goal_id === g.id)}
                    me={member.name}
                    onComment={(body) => {
                      addComment({ data: { email: who.email, goalId: g.id, body } })
                        .then((row) => setComments((prev) => [...prev, row]))
                        .catch(() => setToast("Could not add the comment."));
                    }}
                    onEditComment={editComment}
                    onDeleteComment={removeComment}
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
              commit((s) => ({
                ...s,
                goals: next.isNew
                  ? [...s.goals, next.goal]
                  : s.goals.map((g) => (g.id === next.goal.id ? next.goal : g)),
              }));
            } else {
              commit((s) => ({
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
  onNotes,
  onDeleteMs,
  locked,
  comments,
  me,
  onComment,
  onEditComment,
  onDeleteComment,
}: {
  goal: Goal;
  onEdit: () => void;
  onDelete: () => void;
  onAddMs: () => void;
  onEditMs: (m: Milestone) => void;
  onStatus: (id: string, status: Status) => void;
  onDue: (id: string, due: string) => void;
  onNotes: (id: string, notes: string) => void;
  onDeleteMs: (id: string) => void;
  locked: boolean;
  comments: SharedComment[];
  me: string;
  onComment: (body: string) => void;
  onEditComment: (id: string, body: string) => void;
  onDeleteComment: (id: string) => void;
}) {
  const p = progress(goal);
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const allOpen = goal.milestones.length > 0 && goal.milestones.every((m) => open[m.id]);
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
      <div className="flex justify-end border-t border-border px-4 py-2">
        <button
          type="button"
          className="min-h-11 text-sm text-primary"
          onClick={() =>
            setOpen(
              allOpen ? {} : Object.fromEntries(goal.milestones.map((m) => [m.id, true])),
            )
          }
        >
          {allOpen ? "Minimise all" : "Maximise all"}
        </button>
      </div>
      <ul>
        {goal.milestones.map((m) => {
          const expanded = !!open[m.id];
          return (
          <li
            key={m.id}
            className="border-t border-border"
          >
            <div className="grid gap-2 px-4 py-3 sm:grid-cols-[auto_1fr_9.5rem_9rem_auto] sm:items-start">
            <StatusMark status={m.status} />
            <div className="min-w-0">
              <button
                type="button"
                className="text-left text-sm font-medium"
                aria-expanded={expanded}
                onClick={() => setOpen((current) => ({ ...current, [m.id]: !current[m.id] }))}
              >
                {expanded ? "▾" : "▸"} {m.title}
              </button>
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
            {!locked && (
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
            )}
            </div>
            {expanded && (
              <MilestoneBody notes={m.notes} locked={locked} label={m.title} onSave={(notes) => onNotes(m.id, notes)} />
            )}
          </li>
          );
        })}
      </ul>
      {!locked && (
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
      )}
      <GoalComments
        comments={comments}
        me={me}
        onComment={onComment}
        onEditComment={onEditComment}
        onDeleteComment={onDeleteComment}
      />
    </article>
  );
}

function MilestoneBody({
  notes,
  locked,
  label,
  onSave,
}: {
  notes: string;
  locked: boolean;
  label: string;
  onSave: (notes: string) => void;
}) {
  const [value, setValue] = useState(notes);
  useEffect(() => setValue(notes), [notes]);
  return (
    <div className="border-t border-border bg-bg/40 px-4 py-3">
      {locked ? (
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{notes}</p>
      ) : (
        <textarea
          className="field min-h-40 font-sans text-sm leading-relaxed"
          aria-label={`Edit ${label}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => {
            if (value !== notes) onSave(value);
          }}
        />
      )}
    </div>
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
        className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-border bg-surface p-4"
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
                className="field min-h-64"
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

export function EmailGate({ onMatch }: { onMatch: (member: TeamMember) => void }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  return (
    <main className="grid min-h-screen place-items-center bg-bg px-4 text-fg">
      <form
        className="w-full max-w-md space-y-3 rounded-xl border border-border bg-surface p-5"
        onSubmit={(e) => {
          e.preventDefault();
          const member = matchTeam(email);
          if (!member) {
            setError("That email is not on the team.");
            return;
          }
          onMatch(member);
        }}
      >
        <p className="font-mono text-xs tracking-widest text-primary uppercase">Hyrax</p>
        <h1 className="text-xl font-semibold">Team link</h1>
        <p className="text-sm leading-relaxed text-muted">
          Enter the email already on the team list. No Google account. If it matches, you can comment
          and add answers under your name.
        </p>
        <input
          className="field"
          type="text"
          inputMode="email"
          required
          autoComplete="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-sm text-alert">{error}</p>}
        <button type="submit" className="min-h-11 w-full rounded-lg bg-primary text-sm font-semibold text-primary-ink">
          Continue
        </button>
      </form>
    </main>
  );
}

function CommentActions({
  body,
  onEdit,
  onDelete,
}: {
  body: string;
  onEdit: (body: string) => void;
  onDelete: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(body);
  if (editing) {
    return (
      <form
        className="mt-2 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!draft.trim()) return;
          onEdit(draft.trim());
          setEditing(false);
        }}
      >
        <input className="field" value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button type="submit" className="min-h-11 rounded-lg border border-border px-3 text-sm">
          Save
        </button>
        <button type="button" className="min-h-11 px-2 text-sm text-muted" onClick={() => setEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }
  return (
    <span className="ml-2 inline-flex gap-2">
      <button
        type="button"
        className="text-sm text-primary"
        onClick={() => {
          setDraft(body);
          setEditing(true);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className="text-sm text-alert"
        onClick={() => {
          if (confirm("Delete your comment?")) onDelete();
        }}
      >
        Delete
      </button>
    </span>
  );
}

function GoalComments({
  comments,
  me,
  onComment,
  onEditComment,
  onDeleteComment,
}: {
  comments: SharedComment[];
  me: string;
  onComment: (body: string) => void;
  onEditComment: (id: string, body: string) => void;
  onDeleteComment: (id: string) => void;
}) {
  const [text, setText] = useState("");
  return (
    <div className="space-y-2 border-t border-border px-4 py-3">
      {comments.map((comment) => (
        <div key={comment.id} className="text-sm">
          <span className="font-medium">{comment.author}.</span>{" "}
          <span className="text-muted">{comment.body}</span>
          {comment.author === me && (
            <CommentActions
              body={comment.body}
              onEdit={(body) => onEditComment(comment.id, body)}
              onDelete={() => onDeleteComment(comment.id)}
            />
          )}
        </div>
      ))}
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!text.trim()) return;
          onComment(text.trim());
          setText("");
        }}
      >
        <input
          className="field"
          value={text}
          placeholder="Comment under your name"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="min-h-11 rounded-lg border border-border px-3 text-sm">
          Comment
        </button>
      </form>
    </div>
  );
}
