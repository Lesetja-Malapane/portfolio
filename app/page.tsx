import Link from "next/link";
import WorkEducationTabs from "./components/WorkEducationTabs";

const featuredProjects = [
  {
    title: "Gitlytics",
    description:
      "A mobile app that visualises GitHub collaboration — built with Flutter and backed by Firebase.",
    stack: ["Flutter", "Firebase", "Python", "React", "Docker"],
    href: "/projects",
  },
  {
    title: "Socket Battle (CLI)",
    description:
      "A command-line multiplayer game in Java using raw socket connections.",
    stack: ["Java", "Sockets", "CLI"],
    href: "/projects",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div
            aria-hidden
            className="size-20 shrink-0 rounded-full bg-surface border border-border flex items-center justify-center text-2xl font-mono text-accent"
          >
            L
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight lowercase">
              hi, lesetja here. <span aria-hidden>👋</span>
            </h1>
            <p className="text-muted text-sm sm:text-base">
              software engineer from Johannesburg{" "}
              <span aria-hidden>🇿🇦</span>
            </p>
          </div>
        </div>

        <p className="text-(--foreground)/90 leading-relaxed">
          Frontend curious, backend grounded — I build across the stack and
          enjoy turning rough ideas into something you can click, tap and break.
          I&apos;m currently studying at{" "}
          <a
            href="https://www.wethinkcode.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            WeThinkCode_
          </a>{" "}
          and sharpening the fundamentals through{" "}
          <a
            href="https://theodinproject.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            The Odin Project
          </a>
          .
        </p>

        <p className="text-(--foreground)/90 leading-relaxed">
          Most days you&apos;ll find me writing Java, Python or JavaScript —
          pushing pixels with React, shipping mobile screens with Flutter, and
          occasionally breaking things in Docker just to put them back
          together.
        </p>
      </section>

      <WorkEducationTabs />

      <section className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold tracking-tight lowercase">
            featured projects.
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent"
          >
            view all →
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {featuredProjects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-xl border border-border bg-surface p-5 hover:border-accent"
            >
              <h3 className="font-medium group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
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
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold tracking-tight lowercase mb-4">
          elsewhere.
        </h2>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li>
            <a
              href="mailto:kmalapane155@gmail.com"
              className="hover:text-accent"
            >
              email →
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lesetja-malapane"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              github →
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/lesetja-malapane-644885326"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin →
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
