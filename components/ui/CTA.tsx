export function CTA({
  href,
  children,
  primary,
  external,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] tracking-tight transition-all duration-300";
  const styles = primary
    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-ink-2)] hover:shadow-[var(--shadow-lift)]"
    : "border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)]/60 text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-elevated)]";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}
