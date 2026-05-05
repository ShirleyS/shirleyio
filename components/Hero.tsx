"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Targeted, ROLE } from "@/components/Targeted";

const ease = [0.2, 0.65, 0.3, 0.95] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-8 pt-20 sm:px-8 md:pb-10 md:pt-20 lg:pt-24"
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
          className="mono mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-subtle)]"
        >
          <span>Based in Mexico City</span>
          <span className="text-[var(--color-line-strong)]">/</span>
          <span>10 yrs · GTM infrastructure & measurement</span>
          <span className="text-[var(--color-line-strong)]">/</span>
          <span>Open to travel or relocation — SF, NYC</span>
        </motion.div>

        {/* Headline + portrait */}
        <div className="grid items-start gap-7 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-9">
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05, ease }}
              className="serif text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)]"
            >
              A decade of{" "}
              <span className="italic text-[var(--color-ink-2)]">
                data-driven growth infrastructure
              </span>{" "}
              for enterprise teams.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.18, ease }}
              className="mt-4 max-w-[60ch] text-[16.5px] leading-[1.6] text-[var(--color-muted)] md:text-[17.5px]"
            >
              I&rsquo;m Shirley. I led customer-facing engineering at{" "}
              <span className="text-[var(--color-ink)]">Clearbit</span>{" "}
              <span className="text-[var(--color-subtle)]">(acq. HubSpot)</span>,{" "}
              <span className="text-[var(--color-ink)]">Demandbase</span>, and{" "}
              <span className="text-[var(--color-ink)]">Oracle Marketing Cloud</span>
              . Today, I build AI-native operational systems{" "}
              <span className="text-[var(--color-ink)]">with Claude</span>{" "}
              &mdash; and{" "}
              <span className="text-[var(--color-ink)]">my five businesses</span>{" "}
              run on top of them.
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
            className="relative md:col-span-3"
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
              Customers shipped to / supported
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[var(--color-muted)]">
              {[
                "Accenture",
                "Adobe",
                "Asana",
                "AWS",
                "Deloitte",
                "DocuSign",
                "G2",
                "Gong",
                "HubSpot",
                "Intercom",
                "Meta",
                "Okta",
                "Qualified",
                "Segment",
                "Slack",
                "Snowflake",
                "Stripe",
                "Unity",
                "Visa",
                "and many, many more",
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
                "Adobe Analytics",
                "Adobe Target",
                "AWS",
                "Clearbit",
                "Eloqua",
                "Google Analytics",
                "Google Tag Manager",
                "HubSpot",
                "Intercom",
                "Marketo",
                "Optimizely",
                "Outreach",
                "Responsys",
                "Salesforce",
                "Segment",
                "Tray.io",
                "Zapier",
                "and many, many more",
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
