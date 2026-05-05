import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "mono inline-flex items-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)]/60 px-2.5 py-1 text-[10.5px] uppercase tracking-[0.14em] text-[var(--color-muted)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}
