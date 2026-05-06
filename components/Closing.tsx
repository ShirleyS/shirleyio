const overlap: Array<{ jd: string; me: string }> = [
  {
    jd: "Trusted technical advisor through the Claude adoption journey — partner with Account Executives, translate startup requirements into technical solutions, support evaluation through deployment and expansion",
    me: "Embedded technical advisor has been the job since 2014. At Clearbit, running both the SA and CSE org for tier-one accounts (Stripe, Slack, Intercom, Segment in their growth-stage years); at Demandbase before that as Solutions Engineering Lead. Owning both pre-sales and post-sales technical work meant the sales conversations had to scope solutions my own team could actually deliver &mdash; no overclaiming, no half-baked architecture promises in the scoping call. AE partnership was daily work: reps trusted me in the room because what I committed to in pre-sales shipped without surprises post-close.",
  },
  {
    jd: "Win technical evaluations — help startups develop evaluation frameworks to measure Claude's performance for their specific use cases",
    me: "Running technical evaluations was the core of pre-sales at Clearbit and Demandbase. Tier-one deals always came with a POC &mdash; the customer&rsquo;s own data, their use cases, and the criteria they&rsquo;d accept as proof the product worked. My job was scoping that list with them, instrumenting the test, demonstrating results with evidence rather than slides &mdash; and winning the bake-off when an alternative was sitting in the same eval. A decade of doing that is what I&rsquo;d bring to helping startups define what &lsquo;working&rsquo; looks like in their own context &mdash; and proving it head-to-head against the alternatives in the same eval.",
  },
  {
    jd: "Build technical credibility with founders, founding engineers, and startup engineering teams — speak their language, understand build patterns, guide architecture decisions",
    me: "Guiding integration architecture inside customer tech stacks has been the work for a decade. Salestech and marketing tech has a near-infinite number of stack combinations &mdash; every customer with their own CRM, MAP, CDP, attribution, identity, and warehouse layer. At Clearbit and Demandbase as data providers, my job (directly and through my teams) was navigating that uncertainty and getting our data into the place in the customer&rsquo;s stack where it would deliver the highest value. I imagine the same instinct translates to founder-led architecture conversations with Claude-native teams: meet the stack where it is, advise on what actually works, and ship the version the customer can run.",
  },
  {
    jd: "Hands-on building and deploying LLM-powered applications in production — context engineering, evaluation frameworks, modern AI architectures",
    me: "RIOS, CasaRuta, and CapitalRuta are three production LLM-powered systems I designed, built, operate, and use &mdash; across measurement infrastructure (RIOS), product comparison and eligibility logic for 104 mortgage products (CasaRuta), and SMB capital matching (CapitalRuta). For each, I&rsquo;ve had to decide what data Claude sees, what counts as a correct answer, and where Claude does the work vs. where deterministic code handles it. All three systems are live and in use today.",
  },
  {
    jd: "Track record selling technical products in competitive markets + strong technical communication for founders and engineering teams",
    me: "Selling technical solutions has been the job &mdash; defending Clearbit&rsquo;s data layer against ZoomInfo and Apollo in tier-one evaluations; closing enterprise deals at Demandbase in head-to-head bake-offs against 6sense, Terminus, and Engagio. I&rsquo;ve led the data evaluations and product demos in more competitive cycles than I can count, earning trust with founders and engineering teams the way the JD describes &mdash; by understanding what they&rsquo;re building, asking the questions that actually matter, and learning fast where the ground is unfamiliar.",
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
            Solutions Architect for a decade at Clearbit (Series A through HubSpot acquisition) and Demandbase
             &mdash; exactly the
            kind of growth-stage tech companies the JD describes as
            customer audience. At Clearbit I was Head of Solutions Architecture
            and Customer Success Engineering, owning both pre-sales
            and post-sales technical work end-to-end. That ownership
            forced a level of detail in the sales cycle pure pre-sales
            teams don&rsquo;t carry &mdash; every scoping commitment had
            to be one my own delivery team could honor. Recently I&rsquo;ve shipped three production AI systems with
            Claude &mdash; RIOS, CasaRuta, and CapitalRuta &mdash;
            building the same architectural patterns Anthropic&rsquo;s
            startup customers face. That&rsquo;s the combination I&rsquo;d
            bring on day one: full-lifecycle ownership at growth-stage
            tech, plus practitioner-level Claude experience.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <h2 className="serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.04] tracking-[-0.018em] text-[var(--color-ink)]">
              I&rsquo;m applying for one specific role — here&rsquo;s the JD,
              <span className="block text-[var(--color-muted)]">
                line by line, against my experience.
              </span>
            </h2>

            <p className="mt-7 max-w-[44ch] text-[15.5px] leading-[1.65] text-[var(--color-muted)]">
              The four responsibility lines from the JD, mapped to the closest
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
