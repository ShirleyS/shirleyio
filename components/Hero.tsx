"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Targeted, ROLE } from "@/components/Targeted";

const ease = [0.2, 0.65, 0.3, 0.95] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-14 pt-28 sm:px-8 md:pb-20 md:pt-32 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Role-target strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-7"
        >
          <Targeted role={ROLE.role} company={ROLE.company} href={ROLE.href} />
        </motion.div>

        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mono mb-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)] md:mb-10"
        >
          <span>Based in Mexico City</span>
          <span className="text-[var(--color-line-strong)]">/</span>
          <span>10 yrs · martech, CDP, measurement</span>
          <span className="text-[var(--color-line-strong)]">/</span>
          <span>Open to travel or relocation — SF, NYC, remote-first</span>
        </motion.div>

        {/* Headline + portrait */}
        <div className="grid items-end gap-12 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-8">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="serif text-[clamp(2.4rem,5.6vw,4.2rem)] font-normal leading-[1.04] tracking-[-0.02em] text-[var(--color-ink)]"
            >
              A decade across{" "}
              <span className="italic text-[var(--color-ink-2)]">
                marketing measurement, martech infrastructure, and AI-native
                workflows.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="mt-7 max-w-[58ch] text-[16.5px] leading-[1.65] text-[var(--color-muted)] md:text-[17.5px]"
            >
              I&rsquo;m Shirley. I led customer-facing engineering at{" "}
              <span className="text-[var(--color-ink)]">Clearbit</span>{" "}
              <span className="text-[var(--color-subtle)]">(acq. HubSpot)</span>,{" "}
              <span className="text-[var(--color-ink)]">Demandbase</span>,{" "}
              <span className="text-[var(--color-ink)]">Vero</span>, and{" "}
              <span className="text-[var(--color-ink)]">Oracle Marketing Cloud</span>
              . Today I build AI-native operational systems from Mexico City
              and run{" "}
              <span className="text-[var(--color-ink)]">five operating businesses</span>{" "}
              on infrastructure I built.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-9 flex flex-wrap items-center gap-2.5"
            >
              <CTA href="/resume.pdf" primary>
                Resume
              </CTA>
              <CTA href="#apply">Why this role</CTA>
              <CTA href="#systems">Selected systems</CTA>
              <CTA href="https://github.com/shirleys" external>
                GitHub
              </CTA>
              <CTA href="https://linkedin.com/in/shirleyshaw" external>
                LinkedIn
              </CTA>
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
            className="relative md:col-span-4"
          >
            <Portrait />
          </motion.div>
        </div>

        {/* Bottom marquee — customers + platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          className="mt-14 grid gap-8 border-t border-[var(--color-line)] pt-5 md:mt-16 md:grid-cols-2 md:gap-12"
        >
          <div>
            <div className="mono mb-3.5 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
              Customers shipped to / supported
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[var(--color-muted)]">
              {[
                "Stripe",
                "Slack",
                "Intercom",
                "Facebook",
                "Adobe",
                "AWS",
                "Visa",
                "Accenture",
                "Deloitte",
                "Unity",
                "Zendesk",
              ].map((c) => (
                <span
                  key={c}
                  className="serif text-[15px] tracking-tight text-[var(--color-ink-2)]/70 transition-colors hover:text-[var(--color-ink)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="mono mb-3.5 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
              Platforms shipped against
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[var(--color-muted)]">
              {[
                "Salesforce",
                "Eloqua",
                "Marketo",
                "Responsys",
                "Adobe Analytics",
                "Adobe Target",
                "Google Analytics",
                "Optimizely",
                "Tag management",
              ].map((p) => (
                <span
                  key={p}
                  className="serif text-[15px] tracking-tight text-[var(--color-ink-2)]/70 transition-colors hover:text-[var(--color-ink)]"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CTA({
  href,
  children,
  primary,
  external,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] tracking-tight transition-all duration-300";
  const styles = primary
    ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-bg)] hover:bg-[var(--color-ink-2)] hover:shadow-[var(--shadow-lift)]"
    : "border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)]/60 text-[var(--color-ink)] hover:border-[var(--color-ink)] hover:bg-[var(--color-bg-elevated)]";
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}

function Portrait() {
  return (
    <figure className="relative">
      {/* Quiet decorative offset card behind the portrait — adds depth without ornamentation */}
      <div
        aria-hidden
        className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-bg-deep)] md:block"
      />
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-deep)] shadow-[var(--shadow-lift)] ring-1 ring-[var(--color-line-strong)]">
        <Image
          src="/profile.jpg"
          alt="Shirley Shaw"
          fill
          priority
          sizes="(max-width: 768px) 70vw, 360px"
          className="object-cover object-[50%_28%]"
        />
      </div>
      <figcaption className="relative mt-4 flex items-baseline justify-between gap-3 border-t border-[var(--color-line)] pt-3">
        <span className="serif text-[14px] tracking-tight text-[var(--color-ink)]">
          Shirley Shaw
        </span>
        <span className="mono flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
          <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
          CDMX · MX
        </span>
      </figcaption>
    </figure>
  );
}
