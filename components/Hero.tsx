"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { CTA } from "@/components/ui/CTA";

const ease = [0.2, 0.65, 0.3, 0.95] as const;

const CUSTOMERS = [
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
];

const PLATFORMS = [
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
];

const META = [
  "Mexico City",
  "10+ years at growth-stage startups",
  "Operator-founder",
  "Open to travel: SF, NYC",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-8 pt-14 sm:px-8 md:pb-10 md:pt-20 lg:pt-24"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        {/* Top meta strip */}
        <motion.ul
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mono mb-7 flex flex-wrap items-center gap-x-4 gap-y-1.5 md:gap-x-2.5 text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)] md:text-[11px] md:tracking-[0.18em]"
        >
          {META.map((m, i) => (
            <li key={m} className="flex items-center gap-2.5 whitespace-nowrap">
              {i > 0 && (
                <span aria-hidden className="hidden h-1 w-1 rounded-full bg-[var(--color-line-strong)] md:inline-block" />
              )}
              {m}
            </li>
          ))}
        </motion.ul>

        {/* Headline + portrait */}
        <div className="grid items-start gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="serif text-[clamp(2rem,3.5vw,2.85rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[var(--color-ink)]"
            >
              Solutions Architect for growth-stage and enterprise teams.
              <span className="mt-1 block italic text-[var(--color-muted)]">
                Now shipping production AI with Claude.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="mt-6 max-w-[60ch] text-[15.5px] leading-[1.7] text-[var(--color-muted)] md:text-[16.5px]"
            >
              I&rsquo;m Shirley. I built and led Solutions Architecture,
              Customer Success Engineering, and Support at{" "}
              <span className="text-[var(--color-ink)]">Clearbit</span>{" "}
              <span className="text-[var(--color-subtle)]">(acq. HubSpot)</span>,
              and led Solutions Engineering at{" "}
              <span className="text-[var(--color-ink)]">Demandbase</span>, for
              tier-one customers like Stripe, Slack, Meta, Intercom, and
              Segment. Today: five live businesses in Mexico City, and the
              AI-native systems behind them, built with{" "}
              <span className="text-[var(--color-ink)]">Claude</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease }}
              className="mt-7 flex flex-wrap items-center gap-2.5"
            >
              <CTA href="/resume.pdf" primary>
                Resume
              </CTA>
              <CTA href="#fit">What I bring</CTA>
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

        {/* Bottom strip: customers + platforms, folded to one row each */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.55, ease }}
          className="mt-7 grid gap-5 border-t border-[var(--color-line)] pt-4 md:mt-9 md:grid-cols-2 md:gap-10"
        >
          <NameList label="Customers and partners shipped to / supported" names={CUSTOMERS} visible={6} />
          <NameList label="Platforms shipped against" names={PLATFORMS} visible={5} />
        </motion.div>
      </div>
    </section>
  );
}

function Portrait() {
  return (
    <figure className="relative">
      {/* Photo plate with refined matte + warm shadow */}
      <div
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-[var(--color-bg-deep)]"
        style={{
          boxShadow:
            "0 1px 2px rgba(24,24,24,0.05), 0 12px 28px -12px rgba(20,28,44,0.16), 0 36px 64px -28px rgba(24,24,24,0.18)",
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
        {/* Soft editorial gradient: subtle warmth at top, mild shade at bottom */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 22%, transparent 75%, rgba(16,22,34,0.14) 100%)",
          }}
        />
        {/* Inner hairline highlight for crisp framing */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[12px] ring-1 ring-inset ring-black/[0.06]"
        />
        {/* Subtle corner crop-mark: quiet editorial detail */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5"
        >
          <span className="absolute right-0 top-0 h-px w-3.5 bg-white/60" />
          <span className="absolute right-0 top-0 h-3.5 w-px bg-white/60" />
        </span>
      </div>

      {/* Caption: refined two-cell layout */}
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
          Mexico City
        </span>
      </figcaption>
    </figure>
  );
}

function NameList({ label, names, visible }: { label: string; names: string[]; visible: number }) {
  const [open, setOpen] = useState(false);
  const shown = open ? names : names.slice(0, visible);
  const hidden = names.length - visible;
  return (
    <div>
      <div className="mono mb-3.5 text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-subtle)]">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[var(--color-muted)] md:gap-x-6 md:gap-y-2.5">
        {shown.map((n) => (
          <span
            key={n}
            className="serif text-[13px] tracking-tight text-[var(--color-ink-2)]/70 transition-colors hover:text-[var(--color-ink)] md:text-[15px]"
          >
            {n}
          </span>
        ))}
        {open && (
          <span className="serif text-[13px] tracking-tight text-[var(--color-subtle)] md:text-[15px]">
            and many, many more
          </span>
        )}
        {hidden > 0 && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mono rounded-full border border-[var(--color-line-strong)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
          >
            {open ? "Show less" : `+${hidden} more`}
          </button>
        )}
      </div>
    </div>
  );
}
