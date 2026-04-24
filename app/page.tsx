import Link from "next/link";
import WorkEducationTabs from "./components/WorkEducationTabs";
import Image from "next/image";
import {
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "./components/HeroIcons";

const featuredProjects = [
  {
    title: "ProgressPals",
    description:
      "A habit tracker app for collaborative goal setting — built with Flutter and backed by Firebase.",
    stack: ["Flutter", "Firebase"],
    href: "/projects",
  },
  {
    title: "Memorialy",
    description:
      "An AI journal app that uses natural language processing to help users reflect on their day and track their mental health over time.",
    stack: ["Flutter", "Firebase", "Google Gemini API"],
    href: "/projects",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-6">
      <section className="flex flex-col md:flex-row-reverse md:items-start gap-10">

        <div
          aria-hidden
          className="relative shrink-0 w-44 sm:w-52 aspect-3/4 self-center md:self-start"
        >
          <div className="absolute inset-0 rounded-2xl rotate-6 bg-(--accent-soft)/40 border border-border" />
          <div className="absolute inset-0 rounded-2xl -rotate-3 bg-linear-to-br from-accent-soft via-surface to-background border border-border flex items-center justify-center">
        <Image src="/profile.png" alt="Profile" className="object-cover rounded-2xl" fill style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }} />
          </div>
        </div>

        {/* About Section */}
        <div className="flex max-w-[320px] flex-col sm:max-w-full">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight lowercase leading-tight">
            lesetja here. <span aria-hidden>👋</span>
          </h1>
          <p className="text-muted text-base">
            software engineer from Johannesburg <span aria-hidden>🇿🇦</span>
          </p>

          <p className="mt-6 text-(--foreground)/90 leading-relaxed">
            I&apos;m a solo mobile app developer who enjoys building full-stack
            projects, with a strong preference for front-end work. While mobile
            is my main focus, I&apos;m also curious and actively exploring web
            development.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-surface text-sm hover:border-accent hover:text-accent"
            >
              Resume <DownloadIcon />
            </a>
            <div className="flex items-center gap-1">
              <a
                href="https://linkedin.com/in/lesetja-malapane-644885326"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/lesetja-malapane"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface"
              >
                <GitHubIcon />
              </a>
              <a
                href="mailto:kmalapane155@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-surface"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
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
              <h3 className="font-medium group-hover:text-accent">{p.title}</h3>
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
