"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#apply", label: "Why this role" },
  { href: "#why", label: "Why I'm here" },
  { href: "#experience", label: "Experience" },
  { href: "#chapter", label: "The Detour" },
  { href: "#systems", label: "Builds" },
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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        backgroundColor: scrolled ? "#f6f2ea" : "transparent",
        borderBottom: scrolled
          ? "1px solid #e3ddd0"
          : "1px solid transparent",
        paddingTop: scrolled ? 8 : 16,
        paddingBottom: scrolled ? 8 : 16,
        transition:
          "background-color 240ms ease, border-color 240ms ease, padding 240ms ease",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="mono group flex items-center gap-2.5 px-1 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] transition-colors duration-300"
        >
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] transition-transform duration-500 group-hover:scale-150"
          />
          <span>Shirley Shaw</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
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
          className="mono hidden items-center gap-1.5 px-1 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)] sm:inline-flex"
        >
          Contact
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
