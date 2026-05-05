const overlap: Array<{ jd: string; me: string }> = [
  {
    jd: "Trusted technical advisor through the Claude adoption journey — partner with Account Executives, translate startup requirements into technical solutions, support evaluation through deployment and expansion",
    me: "Embedded technical advisor has been the job since 2014. At Demandbase as Solutions Engineering Lead, at Clearbit running both the SA and CSE org for tier-one accounts (Stripe, Slack, Meta, Intercom, Unity, Segment in their growth-stage years). Owning both pre-sales and post-sales technical work meant the sales conversations had to scope solutions my own team could actually deliver &mdash; no overclaiming, no half-baked architecture promises in the scoping call. AE partnership was daily work: reps trusted me in the room because what I committed to in pre-sales shipped without surprises post-close.",
  },
  {
    jd: "Win technical evaluations — help startups develop evaluation frameworks to measure Claude's performance for their specific use cases",
    me: "Eval design for AI products is where I&rsquo;ve spent the last two years. RIOS, CasaRuta, and CapitalRuta each required me to build the eval framework from scratch &mdash; golden datasets, regression suites, drift detection, and the human-review boundaries that decide where the system can and can&rsquo;t be trusted. Same pattern carried over from a decade of enterprise technical evaluations: define what &lsquo;working&rsquo; means in the customer&rsquo;s context, instrument for it, and make the technical case empirically rather than rhetorically.",
  },
  {
    jd: "Build technical credibility with founders, founding engineers, and startup engineering teams — speak their language, understand build patterns, guide architecture decisions",
    me: "I&rsquo;ve been a founder-shaped operator for the last two years and a technical leader at growth-stage startups for a decade before that &mdash; Vero (Series A), Demandbase (mid-stage), Clearbit (Series A through HubSpot acquisition). The constraints, velocity, and trade-offs early-stage teams make are the constraints I live in daily. And I&rsquo;ve made every architecture decision a Claude-native company faces: deterministic vs agentic boundaries, eval discipline, when to invest in observability, when human review is non-negotiable, where the rules end and the model begins.",
  },
  {
    jd: "Hands-on building and deploying LLM-powered applications in production — context engineering, evaluation frameworks, modern AI architectures",
    me: "RIOS, CasaRuta, and CapitalRuta are three production LLM-powered systems I designed, built, and operate &mdash; across measurement infrastructure (RIOS), product comparison and eligibility logic for 104 mortgage products (CasaRuta), and SMB capital matching (CapitalRuta). Context engineering, eval-loop design, retrieval boundaries, prompt versioning, and the deterministic/agentic split are decisions I&rsquo;ve made deliberately for each. Comfortable with Python and the Anthropic API/SDK as my daily build surface. Not theoretical &mdash; running today.",
  },
  {
    jd: "Track record selling technical products in competitive markets + strong technical communication for founders and engineering teams",
    me: "Selling technical solutions has been the job &mdash; closing enterprise deals at Demandbase against Marketo, Bizible, and the rest of the ABM market; defending Clearbit&rsquo;s data layer against ZoomInfo and Apollo in tier-one bake-offs. The honest caveat: I haven&rsquo;t carried a quota formally. I&rsquo;ve been the technical lead on more competitive evaluations than I can count, and I&rsquo;ve earned trust with founders and engineering teams the way the JD describes &mdash; by speaking the language, knowing the build patterns, and not bluffing on what I don&rsquo;t know. Quota-bearing OTE is the one piece I&rsquo;d be ramping into; everything else is daily work.",
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
            Solutions Architect for a decade at Demandbase and Clearbit
            (Series A through HubSpot acquisition) &mdash; exactly the
            kind of growth-stage tech companies the JD describes as
            customer audience. At Clearbit I was Head of Solutions Architecture
            and Customer Success Engineering, owning both pre-sales
            and post-sales technical work end-to-end. That ownership
            forced a level of detail in the sales cycle pure pre-sales
            teams don&rsquo;t carry &mdash; every scoping commitment had
            to be one my own delivery team could honor. Recently I&rsquo;ve shipped three production AI systems with
            Claude &mdash; RIOS, CasaRuta, and CapitalRuta &mdash;
            building the same architectural patterns
            Anthropic&rsquo;s startup customers face. I also run five food
            and beverage businesses in CDMX with my partner; the operator
            chair is what taught me what production reality actually
            demands of a system. That&rsquo;s the combination I&rsquo;d
            bring on day one &mdash; full-lifecycle ownership at
            growth-stage tech, plus practitioner-level Claude experience.
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
