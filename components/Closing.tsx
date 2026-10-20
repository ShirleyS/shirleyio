const overlap: Array<{ area: string; what: string; me: string }> = [
  {
    area: "Build and lead the team",
    what: "Hire, develop, and guide pre-sales Solutions Architects, with real technical depth and real career paths.",
    me: "Building and leading customer engineering teams from the ground up has been the most rewarding part of my career. At Clearbit, I established Solutions Architecture, Customer Success Engineering, and Support Engineering as net-new functions spanning four product surfaces: Salesforce package, APIs, native integrations, and the platform itself. I hired and developed engineers and architects, raised the bar for technical guidance, and created career paths that supported growth from Support roles through Customer Success Engineering and Engineering project leaders. Years of running that through Series A growth is the closest analog to building a team like this one.",
  },
  {
    area: "Sponsor strategic customers",
    what: "Be the technical sponsor for high-value accounts, from use-case scoping and POC execution through to production.",
    me: "Technical sponsorship for strategic customers has been the work: owning architecture conversations from initial scoping through POC through deployment, and earning the credibility that drove renewal and expansion at Clearbit and Demandbase. The recent Claude work adds practitioner grounding to those conversations: I&rsquo;ve shipped enough to speak from experience, not theory.",
  },
  {
    area: "Partner with sales leadership",
    what: "Find the strategies, verticals, and horizontal use cases that drive adoption, and build the technical case that moves deals to close.",
    me: "Partnership with sales leadership has been daily work for a decade. At Demandbase I led pre-sales for ABM solutions across financial services, technology, healthcare, and retail customers, the vertical mix most enterprise teams serve. At Clearbit, owning both pre-sales and post-sales technical work meant operating in step with sales leadership on every strategic deal: sourcing patterns, prioritizing target accounts, building the technical case that moved deals from evaluation to close. The reps trusted me in the room because what my teams and I committed to in pre-sales shipped without surprises post-close.",
  },
  {
    area: "Close the loop with product",
    what: "Work with product and engineering so customer feedback gets prioritized and blockers to adoption get resolved.",
    me: "Closing the customer-to-product feedback loop has been the core of every customer engineering function I&rsquo;ve built. At Clearbit I stood up Solutions Architecture, Customer Success Engineering, and Support with explicit feedback pathways, so success metrics, customer development, and escalation patterns all fed product strategy. Across years of running that function, the patterns we surfaced from 1,000+ customer engagements drove what shipped next.",
  },
];

export function Closing() {
  return (
    <section
      id="fit"
      className="relative scroll-mt-[-1rem] border-t border-[var(--color-line)] px-6 py-12 sm:px-8 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[10px] text-[var(--color-muted)]">
            01
          </span>
          <span>What I bring</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        {/* On the fit: full-width callout */}
        <div className="mb-12 rounded-[var(--radius-md)] border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] p-7 shadow-[var(--shadow-soft)] md:mb-14 md:p-9">
          <div className="mono mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>On the fit</span>
          </div>
          <p className="serif text-[16px] leading-[1.65] text-[var(--color-ink-2)] md:text-[17px]">
            Joined Clearbit pre-Series A and built Solutions Architecture, Customer Success Engineering, and Support Engineering as net-new functions, leading them through the company&rsquo;s growth phase and supporting tier-one accounts including Stripe, Slack, Meta, Intercom, and Segment. (Acquired by HubSpot in 2023.) Demandbase before that, leading SE for Fortune 500 customers across financial services, technology, healthcare, and retail. Recently shipped four production systems with Claude. The combination I&rsquo;d bring on day one: a decade building and leading pre-sales customer engineering, plus hands-on Claude experience.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 className="serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.04] tracking-[-0.018em] text-[var(--color-ink)]">
              The work,
              <span className="block text-[var(--color-muted)]">
                and the proof.
              </span>
            </h2>

            <p className="mt-7 max-w-[44ch] text-[15.5px] leading-[1.65] text-[var(--color-muted)]">
              Four things a Solutions Architecture leader owns, and where
              I&rsquo;ve already done each one.
            </p>
          </div>

          <ol className="md:col-span-7">
            {overlap.map((row, i) => (
              <li
                key={i}
                className={`grid grid-cols-1 gap-3 py-5 md:grid-cols-12 md:gap-6 ${
                  i !== overlap.length - 1
                    ? "border-b border-[var(--color-line)]"
                    : ""
                }`}
              >
                <div className="md:col-span-5">
                  <div className="mono mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                    0{i + 1} · {row.area}
                  </div>
                  <p className="serif text-[15.5px] leading-[1.45] tracking-tight text-[var(--color-ink)]">
                    {row.what}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <div className="mono mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                    My evidence
                  </div>
                  <p
                    className="text-[14.5px] leading-[1.65] text-[var(--color-muted)]"
                    dangerouslySetInnerHTML={{ __html: row.me }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
