import { emptyAnswers, withAnswers, type Answers } from "@/lib/answers";
import { GUIDE_GOAL_ID, octoberGuideGoal } from "@/lib/october-guide";
import { octoberSpecGoal, SPEC_GOAL_ID } from "@/lib/october-spec";

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

export function withOctoberGoals(goals: Goal[]) {
  const hasSpec = goals.some((goal) => goal.id === SPEC_GOAL_ID);
  const hasGuide = goals.some((goal) => goal.id === GUIDE_GOAL_ID);
  if (!hasSpec) return { goals: [octoberSpecGoal(), octoberGuideGoal()], changed: true };
  if (!hasGuide) {
    const index = goals.findIndex((goal) => goal.id === SPEC_GOAL_ID);
    const next = [...goals];
    next.splice(index + 1, 0, octoberGuideGoal());
    return { goals: next, changed: true };
  }
  return { goals, changed: false };
}

export function seedData(): TrackerState {
  return {
    project: "Hyrax AI Video Production Pilot",
    briefDate: "2026-09-28",
    answers: emptyAnswers(),
    people: [],
    goals: [octoberSpecGoal(), octoberGuideGoal()],
  };
}

export function loadState(): TrackerState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem(LEGACY_KEY);
    if (raw) {
      const parsed = withAnswers(JSON.parse(raw) as TrackerState);
      const state = { ...parsed, people: parsed.people ?? [] };
      const next = withOctoberGoals(state.goals);
      if (next.goals.some((goal) => goal.id === SPEC_GOAL_ID)) {
        return { ...state, goals: next.goals };
      }
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
