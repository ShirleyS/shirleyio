import { Section, Eyebrow } from "@/components/ui/Section";

export function Coda() {
  return (
    <Section id="coda" className="border-t border-[var(--color-line)]">
      <Eyebrow index="06" label="Coming back" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            Now: Applied AI Architect,
            <span className="block text-[var(--color-muted)]">
              Anthropic.
            </span>
          </h2>
          <p className="mono mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            If the JD lands &mdash; let&rsquo;s talk
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="serif text-[16.5px] leading-[1.65] text-[var(--color-ink-2)] md:text-[17.5px]">
            Ten years architecting and solutioning for growth-stage tech.
            Operator-founder &mdash; jumped into a foreign country I barely spoke the language of, and built five working businesses out of it.
            Recent work shipping production AI systems with Claude. This
            is the role that brings the three together &mdash; helping
            the next wave of Claude-native startups go from evaluation to
            scale.
          </p>
          <p className="mt-4 text-[15.5px] leading-[1.65] text-[var(--color-muted)] md:text-[16.5px]">
            The resume&rsquo;s below. The cover letter is this page. The
            rest is whatever you need to ask me.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <CTA href="/resume.pdf" primary>
              Resume
            </CTA>
            <CTA href="https://linkedin.com/in/shirleyshaw" external>
              LinkedIn
            </CTA>
            <CTA href="mailto:ShirleyShaw.is@gmail.com" external>
              Email
            </CTA>
            <CTA
              href="https://job-boards.greenhouse.io/anthropic/jobs/5057258008"
              external
            >
              The JD
            </CTA>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTA({
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
