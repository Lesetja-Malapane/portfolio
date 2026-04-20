import type { Metadata } from "next";

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
};

const projects: Project[] = [
  {
    title: "Gitlytics",
    period: "Sept 2024 – Present",
    description:
      "A mobile app for visualising GitHub collaboration patterns. Built with Flutter on the frontend and Firebase for auth + data; a Python service crunches the Git history.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Python",
      "React",
      "SQLite",
      "Docker",
      "HTML/CSS",
    ],
    links: [
      { label: "Source", href: "https://github.com/lesetja-malapane" },
    ],
  },
  {
    title: "Socket Battle",
    period: "WeThinkCode_",
    description:
      "A two-player command-line game written in Java using raw socket connections. Lightweight protocol, hand-rolled game loop, turn-based state synced between peers.",
    stack: ["Java", "Sockets", "CLI"],
    links: [
      { label: "Source", href: "https://github.com/lesetja-malapane" },
    ],
  },
  {
    title: "Odin E-Commerce",
    period: "Jan 2025 – Present",
    description:
      "A storefront built as part of The Odin Project — product grid, cart state, checkout flow. Deployed on GitHub Pages.",
    stack: ["React", "JavaScript", "HTML/CSS"],
    links: [
      { label: "Source", href: "https://github.com/lesetja-malapane" },
    ],
  },
  {
    title: "Battleship",
    period: "2025",
    description:
      "Classic battleship game implemented from scratch in vanilla JavaScript — no framework, no libraries. Drag-to-place ships, turn logic, win detection.",
    stack: ["JavaScript", "HTML", "CSS"],
    links: [
      { label: "Source", href: "https://github.com/lesetja-malapane" },
    ],
  },
  {
    title: "Progress Pals",
    period: "2025",
    description:
      "A mobile companion app for tracking daily habits and goals. Flutter + Firebase, with Google Maps for location-tagged entries.",
    stack: ["Flutter", "Firebase", "Google Maps API", "SQL"],
  },
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
              className="h-36 w-full bg-linear-to-br from-accent-soft via-surface to-background border-b border-border flex items-center justify-center"
            >
              <span className="font-mono text-xs text-accent/70 tracking-widest uppercase">
                {p.title}
              </span>
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
