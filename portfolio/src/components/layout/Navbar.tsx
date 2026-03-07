"use client";
import Link from "next/link";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
];

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.07] bg-[#08080f]/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Link
        href="/"
        className="font-display text-lg font-black tracking-tight text-[var(--text)] hover:opacity-80 transition-opacity"
      >
        TQL<span className="text-[var(--accent)]">.</span>
      </Link>

      <ul className="hidden md:flex items-center gap-9">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-medium tracking-wide text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="rounded-md bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  );
}
