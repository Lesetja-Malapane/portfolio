import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "contact — Lesetja Malapane",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight lowercase">
          contact me.
        </h1>
        <p className="mt-2 text-muted">
          Got a project, a question, or just want to say hi? Drop a message
          below — it lands straight in my inbox.
        </p>
      </header>

      <ContactForm />

      <section className="mt-12">
        <h2 className="text-sm font-mono uppercase tracking-wider text-muted mb-4">
          or find me elsewhere
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li>
            <a
              href="https://linkedin.com/in/lesetja-malapane-644885326"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-surface px-4 py-3 hover:border-accent transition-colors"
            >
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs text-muted">in/lesetja-malapane</div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/lesetja-malapane"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-border bg-surface px-4 py-3 hover:border-accent transition-colors"
            >
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs text-muted">@lesetja-malapane</div>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
