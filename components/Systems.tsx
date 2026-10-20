"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";
import { projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/cn";

export function Systems() {
  const [active, setActive] = useState<string>(projects[0].slug);
  const project = projects.find((p) => p.slug === active)!;
  const detailRef = useRef<HTMLDivElement>(null);

  const select = (slug: string) => {
    setActive(slug);
    // On small screens the detail sits below a stack of cards, so bring it into view.
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() =>
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    }
  };

  return (
    <Section id="systems" className="border-t border-[var(--color-line)]">
      <Eyebrow index="05" label="Selected Builds" />

      <div className="mt-7 md:mt-10">
        <div className="grid gap-4 md:grid-cols-12 md:items-end md:gap-10">
          <h2 className="serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.05] tracking-[-0.018em] text-[var(--color-ink)] md:col-span-7">
            What I built along the way.
            <span className="block text-[var(--color-muted)]">
              {projectCount(projects.length)} in production.
            </span>
          </h2>
          <p className="max-w-[46ch] text-[15.5px] leading-[1.65] text-[var(--color-muted)] md:col-span-5">
            Each one shipped with Claude, live today, and solving a problem
            I hit first-hand running businesses in Mexico. Pick one to see
            the architecture, where AI sits, and what it changed.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Builds"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((p) => (
            <BuildCard
              key={p.slug}
              project={p}
              active={p.slug === active}
              onSelect={select}
            />
          ))}
        </div>
      </div>

      <div ref={detailRef} className="scroll-mt-20" />
      <AnimatePresence mode="wait">
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.95] }}
          id="build-detail"
          role="tabpanel"
          className="mt-7"
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
                      {project.jdArea}
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

          <Screens project={project} />

          {/* Architecture */}
          <div className="mt-7 grid gap-8 md:grid-cols-12">
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

function projectCount(n: number) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six"];
  return `${words[n] ?? n} build${n === 1 ? "" : "s"}`;
}

function BuildCard({
  project,
  active,
  onSelect,
}: {
  project: Project;
  active: boolean;
  onSelect: (slug: string) => void;
}) {
  const thumb = project.screens[0];
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls="build-detail"
      onClick={() => onSelect(project.slug)}
      className={cn(
        "group flex w-full cursor-pointer flex-col overflow-hidden rounded-[var(--radius-md)] border bg-[var(--color-bg-elevated)] text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]",
        active
          ? "border-[var(--color-accent)]/60 ring-1 ring-[var(--color-accent)]/30"
          : "border-[var(--color-line)] hover:border-[var(--color-line-strong)]",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg-deep)]">
        <Image
          src={thumb.src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 260px"
          className={cn(
            "object-cover object-top transition-all duration-500 group-hover:scale-[1.03]",
            active ? "opacity-100" : "opacity-90 saturate-[0.85] group-hover:opacity-100 group-hover:saturate-100",
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <span className="serif text-[18px] tracking-tight text-[var(--color-ink)]">
            {project.name}
          </span>
          <span
            className={cn(
              "mono text-[10px] uppercase tracking-[0.16em] transition-colors",
              active ? "text-[var(--color-accent)]" : "text-[var(--color-subtle)]",
            )}
          >
            {active ? "Viewing" : "View →"}
          </span>
        </div>
        <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[var(--color-muted)]">
          {project.card}
        </p>
        <span className="mono mt-auto pt-4 text-[10.5px] uppercase tracking-[0.16em] text-[var(--color-ink-2)]">
          {project.url.replace(/^https?:\/\//, "")}
        </span>
      </div>
    </button>
  );
}

function Screens({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);
  const count = project.screens.length;
  const screen = project.screens[index] ?? project.screens[0];
  const host = project.url.replace(/^https?:\/\//, "");
  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <figure
      className="mt-7"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-line-strong)] bg-[var(--color-bg-elevated)] shadow-[var(--shadow-lift)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-[var(--color-line)] bg-[var(--color-bg-deep)] px-4 py-2.5">
          <span aria-hidden className="hidden gap-1.5 sm:flex">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line-strong)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line-strong)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-line-strong)]" />
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mono mx-auto inline-flex min-w-0 max-w-[70%] items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] px-3 py-1 text-[11px] tracking-[0.04em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <span className="truncate">
              {host}
              <span className="text-[var(--color-subtle)]">{screen.path ?? ""}</span>
            </span>
            <span aria-hidden className="text-[var(--color-subtle)]">↗</span>
          </a>
          <div className="flex items-center gap-1">
            <ArrowButton label="Previous screen" onClick={() => go(-1)}>←</ArrowButton>
            <span className="mono w-[38px] text-center text-[10.5px] tabular-nums tracking-[0.08em] text-[var(--color-subtle)]">
              {index + 1}/{count}
            </span>
            <ArrowButton label="Next screen" onClick={() => go(1)}>→</ArrowButton>
          </div>
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label={`${screen.alt}. Show next screen`}
          className="relative block aspect-[16/10] w-full cursor-e-resize bg-[var(--color-bg-deep)]"
        >
          <Image
            key={screen.src}
            src={screen.src}
            alt={screen.alt}
            fill
            sizes="(max-width: 1080px) 100vw, 1080px"
            className="fade-in object-cover object-top"
          />
        </button>
      </div>

      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="serif text-[15px] tracking-tight text-[var(--color-ink)]">
          {screen.label}
        </span>
        <span className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-subtle)]">
          {screen.note ?? "Live site · captured Oct 2026"}
        </span>
      </figcaption>

      {/* Thumbnail strip */}
      <div className="-mx-1 mt-3 flex snap-x gap-2.5 overflow-x-auto px-1 pb-1">
        {project.screens.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-pressed={i === index}
            aria-label={s.label}
            className="group w-[132px] shrink-0 snap-start text-left sm:w-[150px]"
          >
            <span
              className={cn(
                "relative block aspect-[16/10] overflow-hidden rounded-[var(--radius-sm)] border bg-[var(--color-bg-deep)] transition-all duration-300",
                i === index
                  ? "border-[var(--color-accent)] ring-1 ring-[var(--color-accent)]/40"
                  : "border-[var(--color-line)] opacity-75 group-hover:border-[var(--color-line-strong)] group-hover:opacity-100",
              )}
            >
              <Image
                src={s.src}
                alt=""
                fill
                sizes="150px"
                className="object-cover object-top"
              />
            </span>
            <span
              className={cn(
                "mono mt-1.5 block truncate text-[9.5px] uppercase tracking-[0.14em] transition-colors",
                i === index ? "text-[var(--color-accent)]" : "text-[var(--color-subtle)] group-hover:text-[var(--color-ink-2)]",
              )}
            >
              {s.label}
            </span>
          </button>
        ))}
      </div>
    </figure>
  );
}

function ArrowButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-line)] bg-[var(--color-bg-elevated)] text-[12px] text-[var(--color-muted)] transition-colors hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
    >
      {children}
    </button>
  );
}
