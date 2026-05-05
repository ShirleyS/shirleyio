"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { projects } from "@/lib/projects";
import { cn } from "@/lib/cn";

export function Systems() {
  const [active, setActive] = useState<string>(projects[0].slug);
  const project = projects.find((p) => p.slug === active)!;

  return (
    <Section id="systems" className="border-t border-[var(--color-line)]">
      <Eyebrow index="05" label="Selected Systems" />

      <div className="mt-10 md:mt-14">
        <h2 className="serif max-w-[26ch] text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.05] tracking-[-0.018em] text-[var(--color-ink)]">
          Three production systems.{" "}
          <span className="text-[var(--color-muted)]">
            One per responsibility line on the JD.
          </span>
        </h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3 md:gap-7">
          <JDMap
            area="Measurement Intelligence"
            project="RIOS"
            note="Measurement and reporting infrastructure across five operating businesses — completeness, reconciliation, and the executive layer that makes the numbers actionable."
          />
          <JDMap
            area="MarTech Infrastructure"
            project="CasaRuta"
            note="A normalized product catalog, eligibility schema, and programmatic surface — the platform-shaped work of comparing 104 mortgage products on common keys."
          />
          <JDMap
            area="Workflow Automation"
            project="CapitalRuta"
            note="A capital matching layer sequenced deliberately so the deterministic foundation stays in place when the probabilistic underwriting layer arrives."
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12 flex flex-wrap gap-1.5 border-b border-[var(--color-line)] pb-3">
        {projects.map((p) => (
          <button
            key={p.slug}
            onClick={() => setActive(p.slug)}
            className={cn(
              "group relative rounded-full px-4 py-2 text-[13px] tracking-tight transition-colors",
              active === p.slug
                ? "bg-[var(--color-ink)] text-[var(--color-bg)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]",
            )}
          >
            <span className="serif">{p.name}</span>
            <span className="mono ml-2.5 text-[10px] uppercase tracking-[0.14em] opacity-70">
              {p.status}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.95] }}
          className="mt-10"
        >
          {/* Header card */}
          <div className="grid gap-8 rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-7 shadow-[var(--shadow-soft)] md:grid-cols-12 md:gap-10 md:p-10">
            <div className="md:col-span-7">
              <div className="mono flex flex-wrap items-center gap-3 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <span>{project.name}</span>
                <span className="h-px w-6 bg-[var(--color-line-strong)]" />
                <span className="text-[var(--color-subtle)]">
                  {project.status}
                </span>
                {project.jdArea && (
                  <>
                    <span className="h-px w-6 bg-[var(--color-line-strong)]" />
                    <span className="rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/8 px-2 py-0.5 text-[var(--color-accent)]">
                      JD · {project.jdArea}
                    </span>
                  </>
                )}
                {project.url && (
                  <>
                    <span className="h-px w-6 bg-[var(--color-line-strong)]" />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      {project.url.replace(/^https?:\/\//, "")}
                      <span
                        aria-hidden
                        className="text-[var(--color-subtle)] transition-transform duration-300 group-hover:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  </>
                )}
              </div>
              <h3 className="serif mt-4 text-[clamp(1.6rem,2.4vw,2rem)] leading-[1.15] tracking-[-0.012em] text-[var(--color-ink)]">
                {project.tagline}
              </h3>
              <p className="mt-5 text-[15.5px] leading-[1.65] text-[var(--color-muted)]">
                {project.oneLiner}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="mono mb-3 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                The problem
              </div>
              <p
                className="serif text-[15.5px] leading-[1.6] text-[var(--color-ink-2)]"
                dangerouslySetInnerHTML={{ __html: project.problem }}
              />
            </div>
          </div>

          {/* Architecture */}
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="mono mb-5 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
                <span>Architecture</span>
                <span className="h-px flex-1 bg-[var(--color-line)]" />
              </div>
              <ol className="space-y-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)]">
                {project.architecture.map((a, i) => (
                  <li
                    key={a.layer}
                    className="group grid grid-cols-[auto_1fr] gap-5 bg-[var(--color-bg-elevated)] p-5 transition-colors hover:bg-[var(--color-bg-deep)]"
                  >
                    <div className="mono pt-0.5 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)] group-hover:text-[var(--color-accent)]">
                      <div>0{i + 1}</div>
                      <div className="mt-1.5 text-[var(--color-ink-2)]">
                        {a.layer}
                      </div>
                    </div>
                    <p className="text-[14.5px] leading-[1.6] text-[var(--color-muted)]">
                      {a.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="md:col-span-5 space-y-8">
              {/* AI block */}
              <div className="rounded-[var(--radius-md)] border border-[var(--color-line-strong)] bg-[var(--color-bg-deep)] p-6">
                <div className="mono mb-3 flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  AI in the loop
                </div>
                <p
                  className="serif text-[15.5px] leading-[1.6] text-[var(--color-ink-2)]"
                  dangerouslySetInnerHTML={{ __html: project.ai }}
                />
              </div>

              {/* Stack */}
              <div>
                <div className="mono mb-3 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <div className="mono mb-3 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                  Operational impact
                </div>
                <ul className="space-y-2.5">
                  {project.impact.map((i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[14px_1fr] gap-3 text-[14.5px] leading-[1.55] text-[var(--color-ink-2)]"
                      dangerouslySetInnerHTML={{
                        __html: `<span aria-hidden class="mt-[7px] block h-px w-3 bg-[var(--color-line-strong)]"></span><span>${i}</span>`,
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}

function JDMap({
  area,
  project,
  note,
}: {
  area: string;
  project: string;
  note: string;
}) {
  return (
    <div className="group rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-elevated)] p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:shadow-[var(--shadow-lift)]">
      <div className="mono mb-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        JD · {area}
      </div>
      <div className="serif text-[18px] tracking-tight text-[var(--color-ink)]">
        {project}
      </div>
      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--color-muted)]">
        {note}
      </p>
    </div>
  );
}
