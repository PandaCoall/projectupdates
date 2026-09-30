import { useState, type FormEvent } from "react";
import { Copy, Trash2 } from "lucide-react";
import type { Person } from "@/lib/tracker";

export function PeopleView({
  people,
  onChange,
}: {
  people: Person[];
  onChange: (people: Person[]) => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  function add(e: FormEvent) {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!clean.includes("@")) return;
    if (people.some((p) => p.email === clean)) {
      setNote("That email is already on the team.");
      return;
    }
    onChange([...people, { id: crypto.randomUUID(), name: name.trim(), email: clean }]);
    setName("");
    setEmail("");
    setNote("Added. Copy the note and send it from your own email.");
  }

  async function copyInvite(person: Person) {
    const who = person.name || person.email;
    const text = `Hi ${who},\n\nYou're on the private Hyrax October tracker team. This is not a public signup and no Google account is needed.\n\nYour email on the team list: ${person.email}\n\nOpen the tracker I shared with you. Your name is already on the team list.`;
    await navigator.clipboard.writeText(text);
    setNote(`Invite note copied for ${person.email}. Paste it into your email.`);
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 py-6">
      <header>
        <p className="font-mono text-xs tracking-widest text-primary uppercase">Team</p>
        <h2 className="text-xl font-semibold">Invite your team</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          For your small team only. Add a name and email, then copy a note and send it yourself.
          Nobody creates a Google account, and this list is not a public sign-up.
        </p>
      </header>

      <form onSubmit={add} className="grid gap-2 rounded-xl border border-border bg-surface p-4 sm:grid-cols-[1fr_1.2fr_auto]">
        <input
          className="field"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="field"
          type="email"
          required
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="min-h-11 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-ink">
          Add
        </button>
      </form>
      {note && <p className="text-sm text-muted">{note}</p>}

      {people.length === 0 ? (
        <p className="rounded-xl border border-dashed border-border px-4 py-8 text-center text-sm text-muted">
          No one added yet.
        </p>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {people.map((person) => (
            <li key={person.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
              <div className="min-w-40 flex-1">
                <p className="font-medium">{person.name || "Unnamed"}</p>
                <p className="text-sm text-muted">{person.email}</p>
              </div>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-3 text-sm"
                onClick={() => copyInvite(person)}
              >
                <Copy size={16} /> Copy invite
              </button>
              <button
                type="button"
                className="min-h-11 px-2 text-alert"
                aria-label={`Remove ${person.email}`}
                onClick={() => onChange(people.filter((p) => p.id !== person.id))}
              >
                <Trash2 size={16} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
