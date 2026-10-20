"use client";

/** The five operating businesses, each card leading with its logo. */
const businesses: Array<{
  name: string;
  logo: string;
  role: string;
  note: string;
  href?: string;
  press?: Array<{ label: string; url: string }>;
}> = [
  {
    name: "Nice Day Coffee",
    logo: "/portfolio/nice-day-cat.png",
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
    logo: "/portfolio/nice-day-cat.png",
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
    logo: "/portfolio/bocaza-croc.png",
    role: "Restaurant",
    note: "Cuauhtémoc, CDMX",
    href: "https://www.instagram.com/bocazamx/",
  },
  {
    name: "Abasto Café",
    logo: "/portfolio/abasto.svg",
    role: "Café",
    note: "Miguel Hidalgo, CDMX",
    href: "https://www.instagram.com/abastocafe/",
  },
  {
    name: "Tripulante Roastery",
    logo: "/portfolio/tripulante.png",
    role: "Roastery + wholesale",
    note: "Miguel Hidalgo, CDMX",
  },
];

export function Portfolio() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-3 md:grid-cols-5">
      {businesses.map((b) => {
        const cardClass =
          "group block border-t-2 border-[var(--color-accent)]/30 bg-[var(--color-bg-elevated)] p-5 transition-colors duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-deep)]";
        const inner = (
          <>
            <div className="mb-4 flex h-14 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="max-h-full max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
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
  );
}
