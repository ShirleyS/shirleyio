import { Section, Eyebrow } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";

const businesses: Array<{
  name: string;
  role: string;
  note: string;
  href?: string;
}> = [
  {
    name: "Nice Day Coffee",
    role: "Specialty coffee · daily ops",
    note: "Roma Norte, CDMX",
    href: "https://www.instagram.com/nicedaymx/",
  },
  {
    name: "Nice Day Panadería",
    role: "Bakery, sister concept",
    note: "Production + retail",
    href: "https://www.instagram.com/nicedaymx/",
  },
  {
    name: "Bocaza",
    role: "Restaurant",
    note: "Multi-channel ops",
    href: "https://www.instagram.com/bocazamx/",
  },
  {
    name: "Abasto Café",
    role: "Café",
    note: "Operations + supply",
    href: "https://www.instagram.com/abastocafe/",
  },
  {
    name: "Tripulante Roastery",
    role: "Roastery + wholesale",
    note: "B2B coffee supply",
  },
];

const skills = [
  "Attribution & measurement",
  "Targeting",
  "Marketing",
  "Negotiations",
  "Sales",
  "Coding",
  "Design",
  "Projections",
  "Prioritization",
  "Team building",
  "Operational excellence",
  "Navigating the unknown",
];

const alignments: Array<{
  k: string;
  title: string;
  body: string;
}> = [
  {
    k: "Measurement",
    title: "Marketing measurement & analytics, applied off-platform.",
    body:
      "Designed the operational reporting layer from scratch — daily revenue, ticket size, item-level mix, labor hours against forecasted demand, supply variance. The same instinct that wired event tracking and attribution at Demandbase, applied to a P&amp;L I had to actually defend at the end of the month.",
  },
  {
    k: "Experimentation",
    title: "Pricing, staffing, and menu as a continuous experimentation surface.",
    body:
      "Pricing iteration on individual SKUs. Staffing tested against rolling demand windows. Menu experiments instrumented before launch — what we&rsquo;re measuring, over what period, against what control. Real-world A/B testing where the variance comes from a hundred sources you don&rsquo;t fully control. You learn fast what your measurement was actually capable of telling you.",
  },
  {
    k: "Martech",
    title: "Customer data systems, in a non-tech context.",
    body:
      "POS, loyalty, inventory, accounting, scheduling, and a small content surface — all integrated badly by default, and slowly stitched into something legible. Same problem shape as enterprise martech: too many platforms, none with a shared customer key, every report disagreeing slightly. The fix is the same too: invest in the integration layer before you trust any of the dashboards.",
  },
  {
    k: "Coordination",
    title: "Cross-functional program management at small scale, high velocity.",
    body:
      "Operations, vendors, contractors, accountants, lawyers, staffing, logistics, customer-facing teams — coordinated across a language I started without and a regulatory environment I had to learn from primary sources. The skill that scales here is exactly the one that scales in enterprise TPM: getting the right people aligned on a single sequenced plan, fast.",
  },
  {
    k: "Automation",
    title: "Workflow automation as a small-team multiplier.",
    body:
      "AI-assisted operational tooling for forecasting, inventory ordering, labor planning, supplier comms, and internal documentation. Each workflow modeled deliberately — what&rsquo;s deterministic, what&rsquo;s probabilistic, where the human review sits, what gets logged. The kind of thinking the &ldquo;Marketing Workflow Automation&rdquo; line of the Anthropic JD describes, built first for myself.",
  },
  {
    k: "Ambiguity",
    title: "Building infrastructure under genuine uncertainty.",
    body:
      "Standing up systems with no playbook, in a country whose tax code I learned in real time, with hiring decisions that carried legal weight before I&rsquo;d hired anyone. Tech-startup ambiguity has nothing on this. The lesson that transferred most cleanly: when the ground is moving, build the instrumentation first.",
  },
];

export function Entrepreneurial() {
  return (
    <Section id="chapter" className="border-t border-[var(--color-line)]">
      <Eyebrow index="04" label="Chapter II — Operations as a laboratory" />

      <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.05] tracking-[-0.018em] text-[var(--color-ink)]">
            What easier way to become a founder
            <span className="text-[var(--color-muted)]">
              {" "}
              than moving to a country where you barely speak the language,
              definitely don&rsquo;t know the tax code, and have absolutely no
              idea what legal responsibilities you&rsquo;re about to have toward
              the employees you haven&rsquo;t hired yet?
            </span>
          </h2>
        </div>

        <div className="prose-editorial md:col-span-7">
          <p>
            After more than a decade in tech, I&rsquo;d done most of the things
            I&rsquo;d set out to do. I&rsquo;d led teams. Built systems. Worked
            with companies whose products I genuinely respected. Contributed to
            infrastructure that mattered to the people running it. The one
            thing I hadn&rsquo;t done was build something from zero, on my own
            terms, with the operational consequences sitting squarely on me.
          </p>
          <p>
            So my partner and I moved to Mexico City and started a small
            portfolio of hospitality and retail businesses together. The line
            above is the joke we kept making to ourselves. It was also,
            strictly, accurate.
          </p>
          <p>
            What I want to be clear about &mdash; because it&rsquo;s the part
            people misread &mdash; is that this wasn&rsquo;t a step away from
            technical work. It was a deliberate expansion of the surface I was
            willing to operate on. The systems thinking didn&rsquo;t change.
            The customers, the staff, the regulators, the supply chain, the
            measurement layer &mdash; those just became the new stack. The
            problems were still operational. The tools were still
            infrastructure. The questions were still about ambiguity,
            measurement, and trust.
          </p>
          <p>
            And the result, plainly: by most of the operating measures that
            matter for businesses of this kind &mdash; unit economics,
            retention, ticket size, cost discipline, growth across locations
            &mdash; these businesses are outperforming their peer set. I
            don&rsquo;t think that&rsquo;s an accident. The startup skillsets
            I built in tech are the direct reason we&rsquo;re at this level,
            and the thing that sets us apart from most operators in the
            category.
          </p>

          <p>
            Most of what I&rsquo;ve learned here sharpens directly against the
            work the Anthropic TPM role describes. The messy real world is an
            unreasonably good teacher about workflow design, vendor
            coordination, and the gap between &ldquo;the dashboard says&rdquo;
            and &ldquo;what actually happened on the floor.&rdquo;
          </p>
        </div>
      </div>

      {/* Businesses */}
      <div className="mt-14 border-t border-[var(--color-line)] pt-8 md:mt-16">
        <div className="mono mb-6 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span>The portfolio</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
          <span className="text-[var(--color-accent)]">Outperforming on most operating measures</span>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 md:grid-cols-5">
          {businesses.map((b) => {
            const cardClass =
              "group block bg-[var(--color-bg-elevated)] p-5 transition-colors duration-300 hover:bg-[var(--color-bg-deep)]";
            const inner = (
              <>
                <div className="flex items-start justify-between gap-2">
                  <div className="serif text-[15.5px] leading-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
                    {b.name}
                  </div>
                  {b.href && (
                    <span
                      aria-hidden
                      className="mono text-[10px] text-[var(--color-subtle)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
                    >
                      ↗
                    </span>
                  )}
                </div>
                <div className="mono mt-2.5 text-[10px] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                  {b.role}
                </div>
                <div className="mt-1 text-[12.5px] text-[var(--color-muted)]">
                  {b.note}
                </div>
              </>
            );
            return b.href ? (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <div key={b.name} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Skills brought block */}
        <div className="mt-10">
          <div className="mono mb-4 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            <span>Skills carried over from the previous decade</span>
            <span className="h-px flex-1 bg-[var(--color-line)]" />
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 md:grid-cols-4">
            {skills.map((s) => (
              <li
                key={s}
                className="bg-[var(--color-bg-elevated)] px-4 py-3 text-[13.5px] leading-tight tracking-tight text-[var(--color-ink-2)] transition-colors hover:bg-[var(--color-bg-deep)] hover:text-[var(--color-ink)]"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Role-alignment grid */}
      <div className="mt-14 md:mt-16">
        <div className="mono mb-8 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span>Where this maps onto the role</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {alignments.map((a) => (
            <article
              key={a.k}
              className="group relative rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {a.k}
                </div>
                <span
                  aria-hidden
                  className="mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]"
                >
                  ↳ TPM JD
                </span>
              </div>
              <h3 className="serif mt-4 text-[20px] leading-[1.25] tracking-tight text-[var(--color-ink)]">
                {a.title}
              </h3>
              <p
                className="mt-3 text-[14.5px] leading-[1.65] text-[var(--color-muted)]"
                dangerouslySetInnerHTML={{ __html: a.body }}
              />
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .prose-editorial p {
          font-family: var(--font-serif);
          font-size: clamp(16.5px, 1.35vw, 18.5px);
          line-height: 1.62;
          letter-spacing: -0.005em;
          color: var(--color-ink-2);
          margin-bottom: 1.3em;
        }
        .prose-editorial p:last-child { margin-bottom: 0; }
      `}</style>
    </Section>
  );
}
