import { Section, Eyebrow } from "@/components/ui/Section";

const criteria = [
  { n: "01", k: "A place with an overwhelming amount of opportunities to continue learning" },
  { n: "02", k: "A smart team" },
  { n: "03", k: "Cool products" },
];

export function WhyAnthropic() {
  return (
    <Section id="why" className="border-t border-[var(--color-line)]">
      <Eyebrow index="01" label="Why I'm here" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            After two years out, this is the role.
          </h2>
          <p className="mono mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            The honest version
          </p>
        </div>

        <div className="prose-editorial md:col-span-8">
          <p>
            First, the obvious: after stepping away from tech, I've
            been busy building and supporting five businesses in Mexico
            City. It's gone surprisingly well. The last couple of years have been about engineering
            myself out of the day-to-day &mdash; building the org, the
            processes, and the platform (RIOS) so the businesses run
            without me as a single point of failure.
            My partner co-runs them with a fully capable team behind her;
            the day-to-day continues whether I'm involved or not.
            Stepping back from operations was the goal. Anthropic was
            attractive to me a year ago too &mdash; the timing just
            wasn't right then. <em>It's starting to feel right now.</em>
          </p>

          <p>
            What pulled me toward Anthropic is twofold. This role in particular
            reads as a distinct match for the work I've actually done
            &mdash; pre-sales Solutions Architecture and post-sales Customer Success Engineering
            ownership for growth-stage and enterprise customers, founder-led technical
            conversations, and the architectural advisory work that lives
            between technical evaluation and production deployment. And Anthropic itself is, by almost
            any measure, one of the most attractive places in tech right now
            &mdash; the work, the team, and the trajectory all line up.
            I've been using Claude as a daily operator across my
            businesses, and the rate of capability gains release-over-release
            has been hard to miss &mdash; it's rare to watch a
            product redefine what's possible this quickly. The honest pull is the learning curve. Being inside the work at Anthropic &mdash; instead of watching it from the outside &mdash; is the kind of opportunity I haven't had access to in years. I want to be at Anthropic. This role is the
            cleanest fit; if the team thinks I'd land harder somewhere
            adjacent, I'd hear that conversation too.
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
      <div className="mono mt-9 mb-3 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
        <span>What I look for in a role</span>
        <span className="h-px flex-1 bg-[var(--color-line)]" />
      </div>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3">
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
