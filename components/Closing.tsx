import { Targeted, ROLE } from "@/components/Targeted";

const overlap: Array<{ jd: string; me: string }> = [
  {
    jd: "Marketing Measurement Intelligence — MMM, incrementality, brand lift, attribution",
    me: "A decade in measurement infrastructure: ABM attribution at Demandbase, identity and enrichment at Clearbit, lifecycle reporting at Oracle Marketing Cloud — and operational measurement systems I&rsquo;ve built from zero across five live businesses.",
  },
  {
    jd: "MarTech Infrastructure & Vendor Management — strategic platform assessments, vendor relationships, governance",
    me: "Implementations and migrations across Salesforce, Eloqua, Marketo, Adobe Analytics, Google Analytics, Google AdWords, Facebook Ads, Optimizely, tag management, and many more sales and martech solutions &mdash; plus sales engineering evaluations of new systems and the operational layer of vendor coordination, support, and post-launch health across thousands of customer implementations I&rsquo;ve supported directly or indirectly through my team.",
  },
  {
    jd: "Marketing Workflow Automation — AI-powered automation, governance frameworks, impact measurement",
    me: "RIOS, CasaRuta, and CapitalRuta — three production systems where I&rsquo;ve already done the deliberate design work of deciding what&rsquo;s deterministic, what&rsquo;s agentic, and where the human review sits.",
  },
  {
    jd: "Cross-functional coordination — Data Science, Growth, Brand, Product, Engineering, Privacy, Finance",
    me: "Five years owning that exact cross-section at Clearbit as Head of CSE / Solutions Architecture &mdash; running the layer where customer escalations became product signal and partnership integrations became renewal levers.",
  },
];

export function Closing() {
  return (
    <section
      id="apply"
      className="relative scroll-mt-24 border-t border-[var(--color-line)] px-6 py-12 sm:px-8 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mono mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[10px] text-[var(--color-muted)]">
            01
          </span>
          <span>Why this role, specifically</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Targeted
              role={ROLE.role}
              company={ROLE.company}
              href={ROLE.href}
            />
            <h2 className="serif mt-8 text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.04] tracking-[-0.018em] text-[var(--color-ink)]">
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
