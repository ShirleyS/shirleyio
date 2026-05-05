export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <h2 className="serif text-[clamp(1.4rem,2.2vw,1.9rem)] font-normal leading-[1.2] tracking-[-0.012em] text-[var(--color-ink)]">
              Email is the fastest path.
            </h2>
            <a
              href="mailto:ShirleyShaw.is@gmail.com?subject=TPM%2C%20Marketing%20Technology%20%E2%80%94%20Anthropic"
              className="serif group mt-5 inline-flex items-baseline gap-3 text-[clamp(1.3rem,2.2vw,1.8rem)] tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              <span className="link">ShirleyShaw.is@gmail.com</span>
              <span
                aria-hidden
                className="text-[16px] transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <div className="mono mb-4 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
              Elsewhere
            </div>
            <ul className="space-y-2.5 text-[14.5px]">
              <li>
                <a
                  href="https://github.com/shirleys"
                  target="_blank"
                  rel="noreferrer"
                  className="link text-[var(--color-ink-2)]"
                >
                  github.com/shirleys
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shirleyshaw"
                  target="_blank"
                  rel="noreferrer"
                  className="link text-[var(--color-ink-2)]"
                >
                  linkedin.com/in/shirleyshaw
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  className="link text-[var(--color-ink-2)]"
                >
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="mono mb-4 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
              Based in
            </div>
            <p className="text-[14.5px] leading-[1.65] text-[var(--color-ink-2)]">
              Mexico City
              <br />
              <span className="text-[var(--color-muted)]">
                Comfortable working across SF, NYC, and remote-first teams.
              </span>
            </p>
          </div>
        </div>

        <div className="mono mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          <span>© {new Date().getFullYear()} Shirley Shaw</span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-1 w-1 rounded-full bg-[var(--color-accent)]" />
            Built with Claude
          </span>
        </div>
      </div>
    </footer>
  );
}
