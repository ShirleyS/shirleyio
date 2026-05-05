"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Targeted, ROLE } from "@/components/Targeted";

const ease = [0.2, 0.65, 0.3, 0.95] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-8 pt-14 sm:px-8 md:pb-10 md:pt-20 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Role-target strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-5"
        >
          <Targeted role={ROLE.role} company={ROLE.company} href={ROLE.href} />
        </motion.div>

        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease }}
          className="mono mb-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)] md:gap-x-4 md:text-[11px] md:tracking-[0.18em]"
        >
          <span>Based in Mexico City</span>
          <span className="hidden text-[var(--color-line-strong)] md:inline">/</span>
          <span>10 yrs at growth-stage startups · Operator-founder · Daily Claude builder</span>
          <span className="hidden text-[var(--color-line-strong)] md:inline">/</span>
          <span>Open to travel — SF, NYC</span>
        </motion.div>

        {/* Headline + portrait */}
        <div className="grid items-start gap-7 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="serif text-[clamp(1.75rem,2.6vw,2.1rem)] font-normal leading-[1.18] tracking-[-0.015em] text-[var(--color-ink)]"
            >
              <span className="block">
                Solutions Architect for growth-stage startups.
              </span>
              <span className="block italic text-[var(--color-ink-2)]">
                Now shipping three production AI systems with Claude.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="mt-5 max-w-[68ch] text-[15.5px] leading-[1.65] text-[var(--color-muted)] md:text-[16.5px]"
            >
              I&rsquo;m Shirley. Pre-sales SA and CSE leadership at{" "}
              <span className="text-[var(--color-ink)]">Demandbase</span>{" "}
              and{" "}
              <span className="text-[var(--color-ink)]">Clearbit</span>{" "}
              <span className="text-[var(--color-subtle)]">(acq. HubSpot)</span>
              &mdash; tier-one customers Stripe, Slack, Meta, Intercom, Segment.
              Today, in CDMX: five live businesses and AI-native systems I
              ship with{" "}
              <span className="text-[var(--color-ink)]">Claude</span> daily.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-5 flex flex-wrap items-center gap-2.5"
            >
              <CTA href="/resume.pdf" primary>
                Resume
              </CTA>
              <CTA href="#apply">Why this role</CTA>
              <CTA href="#systems">Selected builds</CTA>
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
            className="relative mx-auto max-w-[180px] md:col-span-3 md:mx-0 md:max-w-none"
          >
            <Portrait />
          </motion.div>
        </div>

        {/* Bottom marquee — customers + platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          className="mt-7 grid gap-5 border-t border-[var(--color-line)] pt-4 md:mt-9 md:grid-cols-2 md:gap-10"
        >
          <div>
            <div className="mono mb-3.5 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
              Growth-stage tech companies shipped to / supported
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--color-muted)] md:gap-x-6 md:gap-y-2.5">
              {[
                "Stripe",
                "Slack",
                "Meta",
                "Intercom",
                "Unity",
                "Segment",
                "HubSpot",
                "Snowflake",
                "Asana",
                "Okta",
                "DocuSign",
                "Gong",
                "Qualified",
                "G2",
                "Adobe",
                "Visa",
                "AWS",
                "Accenture",
                "Deloitte",
                "and many, many more",
              ].map((c) => (
                <span
                  key={c}
                  className="serif text-[13px] tracking-tight text-[var(--color-ink-2)]/70 transition-colors hover:text-[var(--color-ink)] md:text-[15px]"
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
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--color-muted)] md:gap-x-6 md:gap-y-2.5">
              {[
                "Salesforce",
                "HubSpot",
                "Marketo",
                "Eloqua",
                "Outreach",
                "Adobe Analytics",
                "Adobe Target",
                "Google Analytics",
                "Google Tag Manager",
                "Segment",
                "Optimizely",
                "Clearbit",
                "Intercom",
                "Responsys",
                "Tray.io",
                "Zapier",
                "and many, many more",
              ].map((p) => (
                <span
                  key={p}
                  className="serif text-[13px] tracking-tight text-[var(--color-ink-2)]/70 transition-colors hover:text-[var(--color-ink)] md:text-[15px]"
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
      {/* Photo plate with refined matte + warm shadow */}
      <div
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[#efeae0]"
        style={{
          boxShadow:
            "0 1px 2px rgba(24,24,24,0.05), 0 12px 28px -12px rgba(72,32,16,0.20), 0 36px 64px -28px rgba(24,24,24,0.18)",
        }}
      >
        <Image
          src="/profile.jpg"
          alt="Shirley Shaw"
          fill
          priority
          sizes="(max-width: 768px) 60vw, 280px"
          className="object-cover object-[52%_28%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          style={{ filter: "saturate(0.94) contrast(1.04)" }}
        />
        {/* Soft editorial gradient — subtle warmth at top, mild shade at bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,250,240,0.10) 0%, transparent 22%, transparent 75%, rgba(40,22,14,0.16) 100%)",
          }}
        />
        {/* Inner hairline highlight for crisp framing */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-black/[0.06]"
        />
        {/* Subtle corner crop-mark — quiet editorial detail */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5"
        >
          <span className="absolute right-0 top-0 h-px w-3.5 bg-white/60" />
          <span className="absolute right-0 top-0 h-3.5 w-px bg-white/60" />
        </span>
      </div>

      {/* Caption — refined two-cell layout */}
      <figcaption className="mt-3.5 flex items-center justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="serif text-[13.5px] tracking-tight text-[var(--color-ink)]">
            Shirley Shaw
          </span>
          <span className="mono text-[9.5px] uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            2026
          </span>
        </div>
        <span className="mono flex items-center gap-1.5 text-[9.5px] uppercase tracking-[0.22em] text-[var(--color-subtle)]">
          <span
            aria-hidden
            className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
          />
          CDMX
        </span>
      </figcaption>
    </figure>
  );
}
