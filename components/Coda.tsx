import { Section, Eyebrow } from "@/components/ui/Section";
import { CTA } from "@/components/ui/CTA";

export function Coda() {
  return (
    <Section id="coda" className="border-t border-[var(--color-line)]">
      <Eyebrow index="06" label="Coming back" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            Next: leading customer-facing
            <span className="block text-[var(--color-muted)]">
              technical teams again.
            </span>
          </h2>
          <p className="mono mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            If the fit is there, let&rsquo;s talk
          </p>
        </div>

        <div className="md:col-span-7">
          <p className="serif text-[16.5px] leading-[1.65] text-[var(--color-ink-2)] md:text-[17.5px]">
            A decade architecting and solutioning across growth-stage and enterprise tech. Three years building businesses and shipping production AI with Claude. I&rsquo;m ready to bring both back to a team that ships.
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
            <CTA href="mailto:ShirleyShaw.is@gmail.com">
              Email
            </CTA>
          </div>
        </div>
      </div>
    </Section>
  );
}

