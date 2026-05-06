"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { timeline } from "@/lib/timeline";
import { cn } from "@/lib/cn";

export function Timeline() {
  const [open, setOpen] = useState<string | null>(timeline[0].company);
  return (
    <Section id="experience" className="border-t border-[var(--color-line)]">
      <Eyebrow index="04" label="Experience" />

      <div className="mt-7 grid gap-8 md:mt-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-normal leading-[1.08] tracking-[-0.018em] text-[var(--color-ink)]">
            Ten years building, integrating, and deploying the tools sales,
            marketing, and revenue teams rely on. 
            </h2>
            <br></br>
            <h2 className="serif text-[clamp(1.9rem,3.6vw,2.8rem)] font-normal leading-[1.08] tracking-[-0.018em] text-[var(--color-ink)]">  
            Before AI.
          </h2>
          <p className="mono mt-6 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            Click any row to expand
          </p>
        </div>

        <div className="md:col-span-8">
          <ol className="relative">
            {/* Vertical hairline */}
            <div
              aria-hidden
              className="absolute left-[7px] top-3 bottom-3 w-px bg-[var(--color-line)]"
            />
            {timeline.map((entry, i) => {
              const isOpen = open === entry.company;
              return (
                <li key={entry.company} className="relative pl-9">
                  {/* Node */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 top-[22px] inline-flex h-[15px] w-[15px] items-center justify-center rounded-full border bg-[var(--color-bg)] transition-all duration-300",
                      isOpen
                        ? "border-[var(--color-accent)]"
                        : "border-[var(--color-line-strong)]",
                    )}
                  >
                    <span
                      className={cn(
                        "block h-[5px] w-[5px] rounded-full transition-all duration-300",
                        isOpen
                          ? "bg-[var(--color-accent)]"
                          : "bg-[var(--color-line-strong)]",
                      )}
                    />
                  </span>

                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : entry.company)
                    }
                    className={cn(
                      "group block w-full cursor-pointer border-b py-5 text-left transition-colors duration-300",
                      i === timeline.length - 1
                        ? "border-transparent"
                        : "border-[var(--color-line)]",
                    )}
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div className="flex items-baseline gap-3">
                        <h3 className="serif text-[20px] font-normal tracking-tight text-[var(--color-ink)]">
                          {entry.company}
                        </h3>
                        <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-subtle)]">
                          {entry.range}
                        </span>
                      </div>
                      <span
                        aria-hidden
                        className={cn(
                          "mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)] transition-all duration-300",
                          isOpen && "text-[var(--color-accent)]",
                        )}
                      >
                        {isOpen ? "—" : "+"}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[14.5px] text-[var(--color-muted)]">
                      {entry.role}
                    </p>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.95] }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-5 pt-5">
                            <p className="serif text-[16.5px] leading-[1.6] text-[var(--color-ink-2)]">
                              {entry.positioning}
                            </p>

                            <div>
                              <div className="mono mb-2 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                                Systems
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {entry.systems.map((s) => (
                                  <Pill key={s}>{s}</Pill>
                                ))}
                              </div>
                            </div>

                            <p
                              className="text-[14.5px] leading-[1.65] text-[var(--color-muted)]"
                              dangerouslySetInnerHTML={{ __html: entry.surface }}
                            />

                            {entry.customers && (
                              <div>
                                <div className="mono mb-2 text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                                  Owned customer relationships
                                </div>
                                <div className="serif text-[15px] text-[var(--color-ink-2)]">
                                  {entry.customers.join(" · ")}
                                </div>
                              </div>
                            )}

                            <p
                              className="border-l border-[var(--color-line-strong)] pl-4 text-[14.5px] italic leading-[1.65] text-[var(--color-muted)]"
                              dangerouslySetInnerHTML={{ __html: entry.detail }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </Section>
  );
}
