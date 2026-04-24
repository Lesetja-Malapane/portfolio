import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "volunteer — Lesetja Malapane",
  description: "Volunteer work and community contributions.",
};

type Entry = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  contributions: string[];
};

const entries: Entry[] = [
  {
    role: "Recruitment Ambassador",
    organization: "WeThinkCode_",
    period: "Oct 2025 – Feb 2026",
    location: "Johannesburg, GP",
    description: "Supported the recruitment process for aspiring learners.",
    contributions: [
      "Introduced Aspiring learners to fundimentals of programming using Python",
      "Hosted workshops and Q&A sessions to guide applicants through the admissions process.",
      "Guided prospective students in understanding the unique peer-learning model and curriculum of WeThinkCode_.",
    ],
  },
];

export default function VolunteerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight lowercase">
          volunteer experience.
        </h1>
        <p className="mt-2 text-muted">
          Community work, mentoring, and causes I&apos;ve given my time to.
        </p>
      </header>

      <ol className="relative flex flex-col gap-8 border-l border-border pl-6">
        {entries.map((e) => (
          <li key={`${e.role}-${e.organization}`} className="relative">
            <span className="absolute -left-7.75 top-2 size-2.5 rounded-full bg-accent ring-4 ring-background" />
            <div className="rounded-xl border border-border bg-surface p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-medium">
                  {e.role}{" "}
                  <span className="text-muted font-normal">
                    @ {e.organization}
                  </span>
                </h2>
                <span className="font-mono text-xs text-muted">
                  {e.period}
                </span>
              </div>
              {e.location && (
                <p className="mt-1 text-xs text-muted">{e.location}</p>
              )}
              <p className="mt-3 text-sm text-(--foreground)/90 leading-relaxed">
                {e.description}
              </p>
              <ul className="mt-4 flex flex-col gap-1.5 text-sm text-muted leading-relaxed list-disc pl-5 marker:text-accent">
                {e.contributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
