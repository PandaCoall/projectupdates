import { TEAM } from "@/lib/team";

export function PeopleView() {
  return (
    <main className="mx-auto max-w-3xl space-y-4 px-4 py-6">
      <header>
        <p className="font-mono text-xs tracking-widest text-primary uppercase">Team</p>
        <h2 className="text-xl font-semibold">Fixed team</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          These emails are set in the app. Opening the link asks for an email. A match can comment
          and add answers under that name. A member cannot change the board. This is not a public
          sign-up and it does not use Google.
        </p>
      </header>
      <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {TEAM.map((member) => (
          <li key={member.email} className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted">{member.email}</p>
            </div>
            <span className="text-xs tracking-wide text-primary uppercase">{member.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
