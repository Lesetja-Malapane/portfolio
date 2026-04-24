import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-muted">
        <p>© {new Date().getFullYear()} Lesetja Malapane.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-foreground">
            privacy
          </Link>
          <a
            href="https://github.com/lesetja-malapane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/lesetja-malapane-644885326"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
