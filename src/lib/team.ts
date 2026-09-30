export type TeamRole = "owner" | "member";

export type TeamMember = {
  name: string;
  email: string;
  role: TeamRole;
};

/**
 * The only people who can open the tracker.
 * Owner can edit the board. Members can comment and add their own answers.
 * Replace these with the real team. Emails are matched exactly, ignoring case.
 */
export const TEAM: TeamMember[] = [
  { name: "Mary", email: "mary@hyraxteam", role: "owner" },
  { name: "Jay", email: "jeremiahworkpc@gmail.com", role: "owner" },
  { name: "Ben", email: "ben@hyrax.com", role: "owner" },
];

export function matchTeam(email: string): TeamMember | null {
  const clean = email.trim().toLowerCase();
  return TEAM.find((member) => member.email.toLowerCase() === clean) ?? null;
}
