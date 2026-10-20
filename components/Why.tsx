import { Section, Eyebrow } from "@/components/ui/Section";

const criteria = [
  { n: "01", k: "A place with an overwhelming amount of opportunities to continue learning" },
  { n: "02", k: "A smart team" },
  { n: "03", k: "Cool products" },
];

export function Why() {
  return (
    <Section id="why" className="border-t border-[var(--color-line)]">
      <Eyebrow index="01" label="Why I'm here" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.6rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            Three years outside a tech title.
            <span className="block text-[var(--color-muted)]">
              Not one away from the work.
            </span>
          </h2>
          <p className="mono mt-5 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            The honest version
          </p>
        </div>

        <div className="prose-editorial md:col-span-8">
          <p>
            First, the obvious: in 2023 I stepped away from tech roles, not
            from the work. Since then my partner and I have built five
            businesses in Mexico City from zero, and I built the platform that
            runs them. The last two years went into engineering myself out of
            the day-to-day: hiring and developing the team, writing the
            processes, and shipping RIOS so nothing depends on me. It worked.
            My partner leads the full operation now with a capable team behind
            her, and the businesses run whether I&rsquo;m in the room or not.
            With the businesses running on their own, <em>the timing is right
            to go back in.</em>
          </p>

          <p>
            The skills never went stale. Running businesses on top of POS,
            accounting, payroll, and banking systems is the same integration
            and data work I did for customers like Stripe and Slack, with my
            own P&amp;L on the line. And I&rsquo;ve been shipping the whole
            time: four production systems built with Claude, used every day by
            operators, homebuyers, founders, and event hosts. Being the
            customer sharpened exactly what a Solutions Architect needs: what
            breaks in production, what a buyer actually trusts, and what it
            takes for a tool to get adopted instead of shelved.
          </p>

          <p>
            What I&rsquo;m looking for: a role that builds on work I&rsquo;ve
            led for a decade. Pre-sales Solutions Architecture and post-sales
            Customer Success Engineering for growth-stage and enterprise
            customers, founder-level technical conversations, and the advisory
            work that lives between technical evaluation and production
            deployment. Ideally close to AI: I use Claude daily as an operator
            and a builder, the capability gains release over release are hard
            to miss, and I&rsquo;d rather help customers put that into
            production than watch it from the outside.
          </p>

          <p>
            My criteria for any role haven&rsquo;t changed in ten years, in
            this order: an overwhelming amount to keep learning, a smart team,
            and cool products. That framework has never steered me wrong,
            and it&rsquo;s the bar for whatever comes next.
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
    </Section>
  );
}
