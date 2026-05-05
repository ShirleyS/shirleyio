import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-[-1rem] px-6 py-12 sm:px-8 md:py-16 lg:py-20",
        className,
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1080px]", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

type EyebrowProps = {
  index?: string;
  label: string;
  className?: string;
};

export function Eyebrow({ index, label, className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "mono flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]",
        className,
      )}
    >
      {index && (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[10px] text-[var(--color-muted)]">
          {index}
        </span>
      )}
      <span>{label}</span>
      <span className="h-px flex-1 bg-[var(--color-line)]" />
    </div>
  );
}
