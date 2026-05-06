"use client";

import { Section, Eyebrow } from "@/components/ui/Section";

const businesses: Array<{
  name: string;
  role: string;
  note: string;
  href?: string;
  press?: Array<{ label: string; url: string }>;
}> = [
  {
    name: "Nice Day Coffee",
    role: "Specialty coffee",
    note: "Cuauhtémoc, CDMX",
    href: "https://www.instagram.com/nicedaymx/",
    press: [
      { label: "Vogue MX", url: "https://www.vogue.mx/agenda/cultura/articulos/cafes-mas-lindos-cdmx/14486" },
      { label: "Café con Pan", url: "https://cafeconpan.mx/nice-day-coffee-cuauhtemoc-cdmx/" },
    ],
  },
  {
    name: "Nice Day Panadería",
    role: "Bakery",
    note: "Roma Norte, CDMX",
    href: "https://www.instagram.com/nicedaymx/",
    press: [
      { label: "Food and Pleasure", url: "https://foodandpleasure.com/nice-day-coffee-en-la-roma/" },
      { label: "Mex Best", url: "https://mex-best.mx/bebidas/2025/01/16/6-nuevas-cafeterias-para-visitar-en-la-cdmx/" },
    ],
  },
  {
    name: "Bocaza",
    role: "Restaurant",
    note: "Cuauhtémoc, CDMX",
    href: "https://www.instagram.com/bocazamx/",
  },
  {
    name: "Abasto Café",
    role: "Café",
    note: "Miguel Hidalgo, CDMX",
    href: "https://www.instagram.com/abastocafe/",
  },
  {
    name: "Tripulante Roastery",
    role: "Roastery + wholesale",
    note: "Miguel Hidalgo, CDMX",
  },
];

const skills = [
  "Analytics and Attribution",
  "ICP and Targeting",
  "Forecasting and Modeling",
  "Sales and Negotiations"
];

export function Entrepreneurial() {
  return (
    <Section id="chapter" className="border-t border-[var(--color-line)]">
      <Eyebrow index="05" label="The Detour" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <h2 className="serif text-[clamp(1.9rem,3.4vw,2.7rem)] font-normal leading-[1.06] tracking-[-0.018em] text-[var(--color-ink)]">
            So, what&rsquo;s the easiest way to become a founder?
          </h2>
          <ul className="mt-6 space-y-3 text-[15.5px] leading-[1.65] text-[var(--color-muted)]">
            <li className="flex gap-3">
              <span aria-hidden className="mono pt-1 text-[11px] text-[var(--color-subtle)]">
                01
              </span>
              <span>
                Pick a country where your vocabulary is roughly &ldquo;hola, gracias, cenicero.&rdquo;
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mono pt-1 text-[11px] text-[var(--color-subtle)]">
                02
              </span>
              <span>
                Pick a tax code where your coffee comes with an XML.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mono pt-1 text-[11px] text-[var(--color-subtle)]">
                03
              </span>
              <span>
                Hire one person. Find out &lsquo;at-will employment&rsquo; doesn&rsquo;t translate.
              </span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mono pt-1 text-[11px] text-[var(--color-subtle)]">
                04
              </span>
              <span>Pick anything but the one thing you&rsquo;ve done for ten plus years. Do it again anyway.</span>
            </li>
          </ul>
        </div>

        <div className="prose-editorial md:col-span-6">
          <p>
            After a decade in tech, I&rsquo;d done most of what I&rsquo;d set
            out to do &mdash; except build a business from zero, on my own
            terms. So my partner and I moved to CDMX and together started a
            small portfolio of operating businesses. The
            systems thinking carried over. Only the inputs changed &mdash;
            customers, staff, regulators, supply chain.
          </p>
          <p>
            Five live locations across CDMX, all operating today. The startup
            skillsets I built in tech &mdash; instrumentation, measurement,
            systems thinking, ruthless prioritization &mdash; are the direct
            reason we&rsquo;ve been able to scale from one location to five,
            and what sets us apart from most operators in the category.
          </p>
        </div>
      </div>

      {/* Previous career goals — all done */}
      <div className="mt-9 border-t border-[var(--color-line)] pt-6 md:mt-10">
        <div className="mono mb-4 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span>Previous career goals</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
          <span className="text-[var(--color-accent)]">All done</span>
        </div>
        <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
          {[
            "Early on — work at a big company.",
            "Build and lead great teams.",
            "Make meaningful contributions to a company that lead to a successful exit event.",
            "Start my own thing and make it successful.",
          ].map((goal, i) => (
            <li
              key={goal}
              className="group flex items-start gap-3 bg-[var(--color-bg-elevated)] px-5 py-4 transition-colors hover:bg-[var(--color-bg-deep)]"
            >
              <span className="mono mt-[3px] text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                0{i + 1}
              </span>
              <span className="serif text-[15px] leading-[1.5] tracking-tight text-[var(--color-subtle)] line-through decoration-[var(--color-line-strong)] decoration-1 underline-offset-[3px]">
                {goal}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Businesses */}
      <div className="mt-9 border-t border-[var(--color-line)] pt-6 md:mt-10">
        <div className="mono mb-5 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span>The portfolio</span>
          <span className="h-px flex-1 bg-[var(--color-line)]" />
          <span className="text-[var(--color-accent)]">
            Five locations · Operating across Mexico City
          </span>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 md:grid-cols-5">
          {businesses.map((b) => {
            const cardClass =
              "group block border-t-2 border-[var(--color-accent)]/30 bg-[var(--color-bg-elevated)] p-5 transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-deep)]";
            const inner = (
              <>
                <div className="flex min-h-[2.6em] items-start justify-between gap-2">
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
                <div className="mono mt-2.5 text-[10px] uppercase leading-tight tracking-[0.14em] text-[var(--color-subtle)]">
                  {b.role}
                </div>
                <div className="mt-0.5 text-[12.5px] text-[var(--color-muted)]">
                  {b.note}
                </div>
                {b.press && b.press.length > 0 && (
                  <div className="mt-3 border-t border-[var(--color-line)] pt-2.5">
                    <div className="mono mb-1.5 text-[9.5px] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                      Featured
                    </div>
                    <ul className="space-y-1">
                      {b.press.map((p) => (
                        <li key={p.url} className="flex items-baseline gap-2">
                          <span
                            aria-hidden
                            className="mono text-[8.5px] text-[var(--color-subtle)]"
                          >
                            ↗
                          </span>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[11px] leading-tight text-[var(--color-muted)] underline decoration-[var(--color-line-strong)] underline-offset-[3px] transition-colors hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)]"
                          >
                            {p.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
            return b.href ? (
              <div
                key={b.name}
                role="button"
                tabIndex={0}
                onClick={() => window.open(b.href, "_blank", "noopener,noreferrer")}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    window.open(b.href, "_blank", "noopener,noreferrer");
                  }
                }}
                className={cardClass + " cursor-pointer"}
              >
                {inner}
              </div>
            ) : (
              <div key={b.name} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        {/* Skills carried over */}
        <div className="mt-8">
          <div className="mono mb-4 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
            <span>Skills carried over from tech</span>
            <span className="h-px flex-1 bg-[var(--color-line)]" />
            <span className="text-[var(--color-accent)]">
              The edge most F&amp;B operators don&rsquo;t bring
            </span>
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

      <style>{`
        .prose-editorial p {
          font-family: var(--font-serif);
          font-size: clamp(16px, 1.3vw, 17.5px);
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: var(--color-ink-2);
          margin-bottom: 1.1em;
        }
        .prose-editorial p:last-child { margin-bottom: 0; }
      `}</style>
    </Section>
  );
}
