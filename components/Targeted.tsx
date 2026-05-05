type TargetedProps = {
  role: string;
  company: string;
  href?: string;
};

export function Targeted({ role, company, href }: TargetedProps) {
  const inner = (
    <span className="group inline-flex items-center gap-2.5 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)]/80 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink)] backdrop-blur-sm transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-elevated)]">
      <span
        aria-hidden
        className="relative inline-flex h-1.5 w-1.5"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
      </span>
      <span className="mono">
        Currently applying — <span className="text-[var(--color-accent)]">{role}</span>
        <span className="text-[var(--color-subtle)]"> · {company}</span>
      </span>
      {href && (
        <span
          aria-hidden
          className="mono text-[10px] text-[var(--color-subtle)] transition-transform duration-300 group-hover:translate-x-0.5"
        >
          ↗
        </span>
      )}
    </span>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="inline-block">
        {inner}
      </a>
    );
  }
  return inner;
}

export const ROLE = {
  role: "Applied AI Architect, Startups",
  company: "Anthropic",
  href: "https://job-boards.greenhouse.io/anthropic/jobs/5057258008",
};
