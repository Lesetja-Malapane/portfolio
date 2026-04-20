import Link from "next/link";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/volunteer", label: "volunteer" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="mx-auto max-w-2xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-foreground hover:text-accent"
        >
          lesetja.
        </Link>
        <ul className="flex items-center gap-5 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
