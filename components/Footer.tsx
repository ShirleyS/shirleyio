import { CTA } from "@/components/ui/CTA";

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-[-1rem] border-t border-[var(--color-line)] px-6 py-14 sm:px-8 md:py-20">
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-8">
            <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
              Next: leading customer-facing
              <span className="block text-[var(--color-muted)]">
                technical teams again.
              </span>
            </h2>
            <p className="serif mt-5 text-[16.5px] leading-[1.65] text-[var(--color-ink-2)]">
              A decade architecting and solutioning across growth-stage and
              enterprise tech. Three years building businesses and shipping
              production AI with Claude. I&rsquo;m ready to bring both back to a
              team that ships.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <CTA href="mailto:ShirleyShaw.is@gmail.com" primary>
                Email me
              </CTA>
              <CTA href="/resume.pdf">Resume</CTA>
              <CTA href="https://linkedin.com/in/shirleyshaw" external>
                LinkedIn
              </CTA>
            </div>
            <a
              href="mailto:ShirleyShaw.is@gmail.com"
              className="mono mt-4 inline-block text-[11px] tracking-[0.06em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
            >
              ShirleyShaw.is@gmail.com
            </a>
          </div>

          <div className="md:col-span-4 md:pt-2">
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

        <div className="mono mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-5 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
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
