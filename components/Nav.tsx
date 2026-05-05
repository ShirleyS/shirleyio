"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const links = [
  { href: "#apply", label: "Why this role" },
  { href: "#why", label: "On the work" },
  { href: "#experience", label: "Experience" },
  { href: "#chapter", label: "Chapter II" },
  { href: "#systems", label: "Systems" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4",
      )}
    >
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className={cn(
            "mono group flex items-center gap-2.5 rounded-full border border-transparent px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] transition-all duration-300",
            scrolled &&
              "border-[var(--color-line)] bg-[var(--color-bg-elevated)]/80 shadow-[var(--shadow-soft)] backdrop-blur",
          )}
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] transition-transform duration-500 group-hover:scale-150"
          />
          <span>Shirley Shaw</span>
        </a>
        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border border-transparent px-2 py-1 transition-all duration-300 md:flex",
            scrolled &&
              "border-[var(--color-line)] bg-[var(--color-bg-elevated)]/80 shadow-[var(--shadow-soft)] backdrop-blur",
          )}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:ShirleyShaw.is@gmail.com"
          className={cn(
            "mono hidden items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)] sm:inline-flex",
          )}
        >
          Contact
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
