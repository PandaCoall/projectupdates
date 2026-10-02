const PAGES = [
  {
    src: "/flow/page-1.jpg",
    title: "Ad Production Workflow — Overview",
    note: "Six stages from job creation to release. Detailed flow on the next two pages. Footage scrub and ID tool on the last page.",
  },
  {
    src: "/flow/page-2.jpg",
    title: "Part 1 of 2 — Intake, job creation and asset pack (Steps 0–4)",
    note: "Nothing proceeds until each gate is passed. Red boxes are blocked states.",
  },
  {
    src: "/flow/page-3.jpg",
    title: "Part 2 of 2 — Manifest, render, QA, review and approval (Steps 5–9)",
    note: "Every failure is visible and recorded. Every override records who made it and why.",
  },
  {
    src: "/flow/page-4.jpg",
    title: "Separate tool — Footage scrubbing and identification script",
    note: "Triggered when a user uploads their own footage. Processes it, tags it, and stores it for recall.",
  },
] as const;

export const FLOW_SEARCH =
  "Ad Production Workflow flowchart Create a job Build asset pack Prepare edit plan Render first cut Run checks Editor review release Footage Scrub Identification Steps 0 1 2 3 4 5 6 7 8 9 Creative Manifest budget QA approval";

export function isWeekOneFlow(goal: { week: string; number: number }) {
  return goal.week === "w1" && goal.number === 2;
}

export function FlowPanel() {
  return (
    <section className="space-y-4 border-t border-border bg-bg/40 px-4 py-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h4 className="text-base font-semibold">Ad Production Flow Chart</h4>
          <p className="text-sm text-muted">The flowchart document, four pages.</p>
        </div>
        <a
          className="min-h-11 text-sm text-primary underline"
          href="/flow/ad-production-flowchart.pdf"
          download
        >
          Download PDF
        </a>
      </div>
      {PAGES.map((page, index) => (
        <figure key={page.src} className="space-y-2">
          <figcaption>
            <p className="text-sm font-medium">
              Page {index + 1}. {page.title}
            </p>
            <p className="text-sm text-muted">{page.note}</p>
          </figcaption>
          <img
            src={page.src}
            alt={page.title}
            className="w-full rounded-lg border border-border bg-white"
          />
        </figure>
      ))}
    </section>
  );
}
