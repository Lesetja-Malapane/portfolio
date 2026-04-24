import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "projects — Lesetja Malapane",
  description: "Things I've built.",
};

type Project = {
  title: string;
  period: string;
  description: string;
  stack: string[];
  links?: { label: string; href: string }[];
  imageUrl?: string;
  sectionRef?: string;
};

const projects: Project[] = [
  {
    title: "Progress Pals",
    period: "2026",
    description:
      "A mobile companion app for tracking daily habits and goals. Flutter + Firebase, with Google Maps for location-tagged entries.",
    stack: ["Flutter", "Firebase", "Google Maps API", "SQL"],
    imageUrl: "/progress_pals.png",
    links: [
      {label: "App Store", href: "https://apps.apple.com/sa/app/progress-pals/id6759215046"},
    ],
    sectionRef: "progress_pals",
  },
  {
    title: "Memorialy",
    period: "2026 - Present",
    description: "An AI Journal app that uses natural language processing to help users reflect on their day and track their mental health over time.",
    stack: ["Flutter", "Firebase", "Google Gemini API"],
    imageUrl: "/memorialy.png",
    links: [
      {label: "App Store", href: "https://apps.apple.com/us/app/memorialy-ai-journal/id6760933658"},
      {label: "Web page", href: "https://memorialy.app"}
    ],
    sectionRef: "memorialy",
  }
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight lowercase">
          my projects.
        </h1>
        <p className="mt-2 text-muted">
          Things I&apos;ve shipped, broken, fixed, and shipped again.
        </p>
      </header>

      <ul className="flex flex-col gap-6">
        {projects.map((p) => (
          <li
            key={p.title}
            className="rounded-xl border border-border bg-surface overflow-hidden"
          >
            <div
              aria-hidden
              className="h-60 w-full bg-linear-to-br from-accent-soft via-surface to-background border-b border-border flex items-center justify-center"
            >
              {/* <span className="font-mono text-xs text-accent/70 tracking-widest uppercase">
                {p.title}
              </span> */}
              {p.imageUrl && (
                <Image src={p.imageUrl} alt={p.title} className="object-cover object-top w-full h-full" width={1920} height={36}/>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-medium">{p.title}</h2>
                <span className="font-mono text-xs text-muted">
                  {p.period}
                </span>
              </div>
              <p className="mt-2 text-sm text-(--foreground)/90 leading-relaxed">
                {p.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-mono rounded-md bg-(--accent-soft)/40 text-accent px-2 py-0.5"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              {p.links && p.links.length > 0 && (
                <div className="mt-4 flex gap-4 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
