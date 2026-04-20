"use client";

import { useState } from "react";

type Entry = {
  org: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

const work: Entry[] = [
  {
    org: "The Odin Project",
    role: "Self-directed Learner",
    period: "Jan 2025 – Present",
    location: "Remote",
    bullets: [
      "Built dynamic websites hosted on GitHub Pages.",
      "Developed an e-commerce website from the ground up.",
      "Created a Battleship game in vanilla JavaScript, HTML and CSS.",
    ],
  },
  {
    org: "WeThinkCode_",
    role: "Software Engineering Student",
    period: "Sept 2024 – Dec 2025",
    location: "Johannesburg, GP",
    bullets: [
      "Developed a Flutter mobile app backed by SQL, Firebase and the Google Maps API.",
      "Built a command-line game in Java using socket connections for multiplayer.",
      "Explored ways to visualise GitHub collaboration in a team-work setting.",
    ],
  },
];

const education: Entry[] = [
  {
    org: "WeThinkCode_",
    role: "National Diploma, Computer Software Engineering",
    period: "Sept 2024 – Dec 2025",
    location: "Johannesburg, GP",
    bullets: [
      "Peer-learning, project-based curriculum with no formal lectures.",
      "Coursework in algorithms, systems programming, web and mobile development.",
    ],
  },
];

export default function WorkEducationTabs() {
  const [tab, setTab] = useState<"work" | "education">("work");
  const entries = tab === "work" ? work : education;

  return (
    <section className="mt-16">
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setTab("work")}
          className={`text-sm font-mono px-3 py-1 rounded-md border ${
            tab === "work"
              ? "border-accent text-accent bg-(--accent-soft)/30"
              : "border-border text-muted hover:text-foreground"
          }`}
        >
          work
        </button>
        <button
          onClick={() => setTab("education")}
          className={`text-sm font-mono px-3 py-1 rounded-md border ${
            tab === "education"
              ? "border-accent text-accent bg-(--accent-soft)/30"
              : "border-border text-muted hover:text-foreground"
          }`}
        >
          education
        </button>
      </div>

      <ul className="flex flex-col gap-5">
        {entries.map((e) => (
          <li
            key={`${e.org}-${e.role}`}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {e.org}{" "}
                <span className="text-muted font-normal">· {e.role}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </div>
            {e.location && (
              <p className="mt-1 text-xs text-muted">{e.location}</p>
            )}
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-(--foreground)/90 leading-relaxed list-disc pl-5 marker:text-accent">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
