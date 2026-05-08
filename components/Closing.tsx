const overlap: Array<{ jd: string; me: string }> = [
  {
    jd: "Hire, manage, and guide a team of pre-sales Solutions Architects by providing both technical guidance and career development.",
    me: "Building and leading customer engineering teams from scratch has been the best part of my career. At Clearbit I stood up Solutions Architecture, Customer Success Engineering, and Support Engineering as net-new functions across four product surfaces (Salesforce package, APIs, native integrations, platform) &mdash; hired and developed engineers and architects, set the technical guidance bar, and built career paths from individual contributor through senior leadership. Years of running that, through Series A growth and a HubSpot acquisition, is the closest analog to building this team at Anthropic.",
  },
  {
    jd: "Act as a technical sponsor for high-value strategic customers and advise them on their overall AI adoption strategies or use case scoping and POC execution.",
    me: "Technical sponsorship for strategic customers has been the work &mdash; owning architecture conversations from initial scoping through POC through deployment, and earning the credibility that drove renewal and expansion at Clearbit and Demandbase. The recent Claude work adds practitioner grounding to those conversations: I&rsquo;ve shipped enough to speak from experience, not theory.",
  },
  {
    jd: "Partner closely with Industries sales leadership to identify new strategies to drive adoption of Anthropic products within specific verticals or horizontal use cases.",
    me: "Partnership with sales leadership has been daily work for a decade. At Demandbase I led pre-sales for ABM solutions across financial services, technology, healthcare, and retail customers &mdash; the same vertical mix Anthropic Industries serves. At Clearbit, owning both pre-sales and post-sales technical work meant operating in step with sales leadership on every strategic deal: sourcing patterns, prioritizing target accounts, building the technical case that moved deals from evaluation to close. The reps trusted me in the room because what my teams and I committed to in pre-sales shipped without surprises post-close.",
  },
  {
    jd: "Work with cross-functional teams like product and engineering to ensure Anthropic prioritizes customer feedback or resolves blockers to adoption.",
    me: "Closing the customer-to-product feedback loop has been the core of every customer engineering function I&rsquo;ve built. At Clearbit I stood up Solutions Architecture, Customer Success Engineering, and Support with explicit feedback pathways &mdash; success metrics, customer development, and escalation patterns all feeding product strategy. Across years of running that function, the patterns we surfaced from 1,000+ customer engagements drove what shipped next.",
  },
];

export function Closing() {
  return (
    <section
      id="apply"
      className="relative scroll-mt-[-1rem] border-t border-[var(--color-line)] px-6 py-12 sm:px-8 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[10px] text-[var(--color-muted)]">
            02
          </span>
          <span>Why this role, specifically</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        {/* On the fit — full-width callout */}
        <div className="mb-12 rounded-[var(--radius-md)] border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] p-7 shadow-[var(--shadow-soft)] md:mb-14 md:p-9">
          <div className="mono mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>On the fit</span>
          </div>
          <p className="serif text-[16px] leading-[1.65] text-[var(--color-ink-2)] md:text-[17px]">
            Joined Clearbit pre-Series A and built Solutions Architecture, Customer Success Engineering, and Support Engineering as net-new functions, leading them through the company&rsquo;s growth phase &mdash; supporting tier-one accounts including Stripe, Slack, Meta, Intercom, and Segment. (Acquired by HubSpot in 2023.) Demandbase before that, leading SE for Fortune 500 customers across the same vertical mix Industries serves. Recently shipped three production AI systems with Claude. The combination I&rsquo;d bring on day one: a decade building and leading pre-sales customer engineering, plus hands-on Claude experience.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 className="serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.04] tracking-[-0.018em] text-[var(--color-ink)]">
              I&rsquo;m applying to lead Industries Solutions Architecture at Anthropic
              <span className="block text-[var(--color-muted)]">
                — here&rsquo;s how my experience maps to it.
              </span>
            </h2>

            <p className="mt-7 max-w-[44ch] text-[15.5px] leading-[1.65] text-[var(--color-muted)]">
              Four core responsibilities from the JD, mapped to the closest
              evidence in my actual experience.
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
                    JD line {i + 1}
                  </div>
                  <p className="serif text-[15.5px] leading-[1.45] tracking-tight text-[var(--color-ink)]">
                    {row.jd}
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
