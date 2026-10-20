import { Section, Eyebrow } from "@/components/ui/Section";

const criteria = [
  { n: "01", k: "A place with an overwhelming amount of opportunities to continue learning" },
  { n: "02", k: "A smart team" },
  { n: "03", k: "Cool products" },
];

const story = [
  {
    label: "Since 2023",
    text: "My partner and I built five businesses in Mexico City from zero, and I built RIOS, the platform that runs them. Then I engineered myself out of the day-to-day: hired and developed the team, wrote the processes, removed every single point of failure. My partner leads the operation now, and the businesses run whether I’m in the room or not.",
  },
  {
    label: "Why the skills stayed sharp",
    text: "Wiring POS, accounting, payroll, and banking together is the same integration and data work I did for customers like Stripe and Slack, with my own P&L on the line. I kept shipping the whole time: four production systems built with Claude. Being the customer taught me what breaks in production and what actually gets adopted.",
  },
  {
    label: "What I’m looking for",
    text: "Leading pre-sales Solutions Architecture and post-sales Customer Success Engineering for growth-stage and enterprise customers: the technical conversations, the advisory work, and the path from evaluation to production. Ideally close to AI, helping customers put it to work.",
  },
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

        <div className="md:col-span-8">
          <p className="serif text-[clamp(18px,1.6vw,21px)] leading-[1.5] tracking-[-0.008em] text-[var(--color-ink)]">
            In 2023 I stepped away from tech roles, not from the work. With
            the businesses I built now running on their own,{" "}
            <em className="text-[var(--color-muted)]">the timing is right to go back in.</em>
          </p>

          <dl className="mt-7 border-t border-[var(--color-line)]">
            {story.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 border-b border-[var(--color-line)] py-5 md:grid-cols-[11rem_1fr] md:gap-8"
              >
                <dt className="mono pt-1 text-[10.5px] uppercase leading-[1.5] tracking-[0.16em] text-[var(--color-subtle)]">
                  {row.label}
                </dt>
                <dd className="text-[15px] leading-[1.65] text-[var(--color-ink-2)]">
                  {row.text}
                </dd>
              </div>
            ))}
          </dl>
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
