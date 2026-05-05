import { Section, Eyebrow } from "@/components/ui/Section";

const criteria = [
  { n: "01", k: "A place with an overwhelming amount of opportunities to continue learning" },
  { n: "02", k: "A smart team" },
  { n: "03", k: "Cool products" },
];

export function WhyAnthropic() {
  return (
    <Section id="why" className="border-t border-[var(--color-line)]">
      <Eyebrow index="02" label="Why I'm here" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            I&rsquo;m not actively searching.
          </h2>
          <p className="mono mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            The honest version
          </p>
        </div>

        <div className="prose-editorial md:col-span-8">
          <p>
            On the obvious question first &mdash; yes, I do co-operate five
            active businesses. The reason I can step into a full-time role
            is that the last two years of work have been about exactly that:
            building the org, the processes, and the platform (RIOS) so the
            businesses run without me as a single point of failure. My
            partner co-operates them with a fully capable team behind her;
            the day-to-day continues whether I&rsquo;m involved or not.
            Stepping back from operations was the goal. That work is done.
            Anthropic was attractive to me a year ago too &mdash; the timing
            just wasn&rsquo;t right then.
          </p>

          <p>
            What pulled me toward Anthropic is twofold. This role in particular
            reads like an unusual fit with the experience I&rsquo;ve actually
            built &mdash; martech infrastructure, measurement, vendor and
            platform coordination, the operational layer underneath all of it.
            And Anthropic itself is, by almost any measure, one of the most
            attractive places in tech right now &mdash; the work, the team,
            and the trajectory all line up. It&rsquo;s one of the few companies
            whose work I&rsquo;d want to be inside of regardless of role; if a
            different growth opportunity at Anthropic fit better than this one,
            I&rsquo;d be open to that conversation too.
          </p>

          <p>
            After a decade of doing this, my honest evaluation criteria for any
            job have stayed the same three things, in this order: a place with
            an overwhelming amount of opportunities to continue learning, a
            smart team, and cool products. That framework has never led me
            wrong. Anthropic clears all three.
          </p>
        </div>
      </div>

      {/* Three-criteria strip */}
      <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
        {criteria.map((c) => (
          <div
            key={c.n}
            className="group flex items-baseline gap-3 bg-[var(--color-bg-elevated)] px-5 py-4 transition-colors hover:bg-[var(--color-bg-deep)]"
          >
            <span className="mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
              {c.n}
            </span>
            <span className="serif text-[16px] tracking-tight text-[var(--color-ink)]">
              {c.k}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .prose-editorial p {
          font-family: var(--font-serif);
          font-size: clamp(16.5px, 1.4vw, 18.5px);
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: var(--color-ink-2);
          margin-bottom: 1.2em;
        }
        .prose-editorial p:last-child { margin-bottom: 0; }
        .prose-editorial em {
          font-style: italic;
          color: var(--color-ink);
        }
      `}</style>
    </Section>
  );
}
