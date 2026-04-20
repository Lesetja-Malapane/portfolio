import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/volunteer", label: "volunteer" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70">
      <nav className="mx-auto max-w-3xl flex items-center justify-between px-6 py-6">
        <ul className="flex items-center gap-7 text-base text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="hover:text-foreground transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
