export type Screen = {
  src: string;
  label: string;
  alt: string;
  /** Path shown after the host in the browser chrome, e.g. "/app/scheduling". */
  path?: string;
  /** Overrides the default "Live site" source line under the screen. */
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  status: string;
  url: string;
  jdArea?: string;
  /** Short summary for the selector card. */
  card: string;
  /** Live-site screenshots, captured October 2026. The first one is the card thumbnail. */
  screens: Screen[];
  tagline: string;
  oneLiner: string;
  problem: string;
  architecture: Array<{ layer: string; detail: string }>;
  ai: string;
  stack: string[];
  impact: string[];
};

export const projects: Project[] = [
  {
    slug: "rios",
    name: "RIOS",
    status: "In production · Public SaaS",
    url: "https://holarios.com",
    card: "A remarkably complete operating system for restaurants and cafés in Mexico. It cross-checks sales, cash, discounts, voids, and supplier invoices to catch losses, then measures every peso recovered. Built for our own five businesses, now self-serve.",
    screens: [
      {
        src: "/builds/rios-home.webp",
        label: "Landing",
        alt: "RIOS landing page in English: know if your restaurant is making or losing money today",
      },
      {
        src: "/builds/rios-terminal.webp",
        label: "Card + cash recon",
        alt: "RIOS terminal reconciliation: card terminal charges and tips against POS sales, variances, and the cash expected in the drawer",
        path: "/app/conciliacion-terminal",
        note: "Live demo · illustrative data",
      },
      {
        src: "/builds/rios-forecast.webp",
        label: "Monthly projections",
        alt: "RIOS projections: month-end forecast, a 12-month trend, and one line per year from 2023 to 2026, each year slightly above the last",
        path: "/app/forecasts",
        note: "Demo workspace · illustrative data",
      },
      {
        src: "/builds/rios-rules.webp",
        label: "Detection rules",
        alt: "RIOS detection rules for the cash drawer: differences, repeated variances, excessive cancellations and discounts per shift",
        path: "/app/admin/reglas",
        note: "Live demo · illustrative data",
      },
      {
        src: "/builds/rios-permissions.webp",
        label: "Roles & permissions",
        alt: "RIOS access-by-role matrix: which sections each role (owner, finance, HR, managers, staff, accountant) can see",
        path: "/app/settings?tab=permisos",
        note: "Live demo · illustrative data",
      },
      {
        src: "/builds/rios-whatsapp.webp",
        label: "WhatsApp designer",
        alt: "RIOS WhatsApp designer: choose a role, toggle what it can do on WhatsApp, and drag to build its menu",
        path: "/app/settings?tab=whatsapp",
        note: "Demo workspace · illustrative data",
      },
    ],
    tagline: "A complete operating system for food businesses, built with an operator's instincts and a product manager's discipline",
    oneLiner:
      "Sales, purchasing, invoices, bank, payroll, scheduling, inventory, recipes, and P&L in one place. Underneath, RIOS collects and cross-checks data points from every source to detect where money is quietly leaking, and a completeness layer refuses to show a number it can't stand behind. It started as the internal system for our five businesses and now runs as a public product with a free plan and a paid savings flywheel.",
    problem:
      "Each business in the portfolio ran on its own mix of POS, inventory, accounting, and staffing tools. Reports disagreed by 5–15% on any given day, and losses hid in the gaps between them: a short cash drawer here, a supplier price creep there. The decisions that mattered (staffing tomorrow, ordering next week, whether last week&rsquo;s price change worked) were being made on lagged, incomplete, or inconsistent data.",
    architecture: [
      {
        layer: "Ingestion",
        detail:
          "Adapters for POS, CFDI invoices, bank statements, and PDF/CSV imports backfill history on a rolling cursor and catch late-arriving rows. Every run is logged and idempotent: running the same job twice never duplicates data.",
      },
      {
        layer: "Completeness",
        detail:
          "A completeness layer per company, brand, and location. Every view declares the data it depends on and refuses to render a misleading number when something is missing or stale.",
      },
      {
        layer: "Reconciliation",
        detail:
          "POS sales, terminal payouts, CFDI invoices, and bank deposits compared in the same units, so the numbers actually line up. When they don't, the gap gets flagged instead of averaged away.",
      },
      {
        layer: "Loss detection",
        detail:
          "Independent signals run across POS tickets, voids, discounts, cash counts, invoice lines, recipes, and payroll: short cash drawers, discounts concentrated on one cashier, voided orders that were likely already made, paying a supplier more than your own best price, and ingredient increases eroding plate margin. Every loss is measured in pesos with the receipts attached, opens a tracked episode with an owner, and recovery is re-measured the following month.",
      },
      {
        layer: "Savings flywheel",
        detail:
          "Signal, owned action, pesos recovered and verified against real invoices and bank movements. Purchase lines from every business on RIOS also feed anonymized supplier-price benchmarks, shown only once at least five distinct buyers contribute. Each operator who joins makes the alerts sharper for everyone: a network effect on top of the loop.",
      },
      {
        layer: "Executive layer",
        detail:
          "A small, opinionated set of views (daily sales against target, ticket size, item mix, labor against forecast, the losses open this fortnight) built around what an operator actually decides on, not what's easy to chart.",
      },
      {
        layer: "Agent layer",
        detail:
          "Claude on top, scoped to an explicit memory of business structure, vendors, and known anomalies. Used for explanation, summarization, and drafting weekly operating notes that are reviewed before they leave the system.",
      },
    ],
    ai: "Used. Claude handles the unstructured inputs that feed the database (receipts and statements), extracting structured fields so the deterministic side can reconcile against them. Every output is validated before it lands.",
    stack: [
      "Next.js · TypeScript",
      "Postgres / warehouse",
      "POS API",
      "Claude (Anthropic)",
      "Netlify",
    ],
    impact: [
      "Month-end close happens continuously instead of after a three-week wait.",
      "Waste down 5% in the first month, driven by real-time margin and cost alerting.",
      "Losses caught from multiple independent data points (cash, discounts, voids, supplier prices, recipe margins), each with receipts and a measured recovery.",
      "AI extracts invoices (CFDIs, PDFs, XMLs) and matches them to bank deposits and POS sales. Manual reconciliation is gone: for us, two full-time jobs.",
      "Labor cost as a percent of revenue tracked continuously per location, not at the end of the period.",
      "Multi-entity, multi-brand, multi-location P&amp;L in one engine. A new business is online in days.",
      "Productized at holarios.com: a free plan with no credit card, and a paid savings flywheel that compounds as more operators join.",
    ],
  },
  {
    slug: "algoquehacer",
    name: "AlgoQueHacer",
    status: "In production",
    url: "https://algoquehacer.com",
    card: "Event ticketing for independent organizers in Mexico. One link: we take payment, hold seats, send QR passes, and pay the host after the event.",
    screens: [
      {
        src: "/builds/algoquehacer-home.webp",
        label: "For organizers",
        alt: "AlgoQueHacer organizer landing page: selling tickets for your event, one link",
      },
      {
        src: "/builds/algoquehacer-event.webp",
        label: "Live event page",
        alt: "AlgoQueHacer event page for a Pan de Muerto tasting at Nice Day, with dates, guests, allergies, and checkout in one page",
        path: "/event/pan-de-muerto",
      },
      {
        src: "/builds/algoquehacer-features.webp",
        label: "Everything handled",
        alt: "AlgoQueHacer feature overview: event page, bookings and capacity, changes, automatic emails, control center, alerts",
        note: "Host one-pager",
      },
      {
        src: "/builds/algoquehacer-solicitud.webp",
        label: "Event builder",
        alt: "AlgoQueHacer event application with a live preview of the ticket buyers will receive",
        path: "/solicitud",
      },
      {
        src: "/builds/algoquehacer-pro.webp",
        label: "Pro plan",
        alt: "AlgoQueHacer Pro page: resell cancelled seats, waitlists, team roles, and a monthly report of what Pro earned",
        path: "/pro",
      },
    ],
    tagline:
      "Ticketing and payments for the supper clubs, workshops, and tastings of Mexico City",
    oneLiner:
      "An organizer shares one link. The platform takes card or SPEI payment, holds seats, sends branded QR passes, and pays the host into their own Stripe account 24 hours after the event. Bilingual, mobile-first, and free for free events.",
    problem:
      "Small organizers in Mexico City (supper clubs, ceramics workshops, tastings, classes) sell through Instagram DMs, WhatsApp, and bank transfers. Capacity lives in a notebook, payments are reconciled by hand, and the big ticketing platforms are built and priced for concerts, not a 20-seat dinner paid by SPEI.",
    architecture: [
      {
        layer: "Booking engine",
        detail:
          "Multiple dates and time slots, each with its own capacity and ticket types. Seats are held for 15 minutes during checkout so an event never oversells. Moving a guest keeps the same pass; cancelling a date refunds card buyers automatically.",
      },
      {
        layer: "Payments",
        detail:
          "Stripe Connect destination charges in the host's name. Card money lands in the host's own Stripe balance and is released 24 hours after the seating. SPEI transfers go straight to the host, and the platform bills its fee monthly. Fees are published side by side with Eventbrite and Boletia.",
      },
      {
        layer: "Organizer control center",
        detail:
          "The door list for each date with allergies and check-in, QR scanning from any phone, team roles (co-host, manager, door staff), and sales reporting down to which link sold.",
      },
      {
        layer: "Automated comms",
        detail:
          "Confirmation with a QR pass per ticket, an abandoned-checkout reminder, messages to one guest or a whole date, a sale alert and morning summary for the host, and an optional thank-you and survey the next day.",
      },
      {
        layer: "Distribution",
        detail:
          "Private and discount links, an Instagram-story promo kit whose post is the ticket itself, an embeddable booking module for organizers' own sites, and a read-only MCP endpoint so AI assistants can surface public events.",
      },
    ],
    ai: "Built end to end with Claude Code: roughly 1,500 commits in ten weeks, from first prototype to Stripe Connect payouts in production. Money movement, capacity, and refunds stay deterministic and tested; AI is the build partner, not the ledger.",
    stack: [
      "Next.js · TypeScript",
      "Postgres (Supabase)",
      "Stripe Connect",
      "Resend",
      "Netlify",
    ],
    impact: [
      "Live and selling tickets in CDMX. Organizers go from &ldquo;tell us about your event&rdquo; to a shareable page in a day.",
      "Hosts are paid into their own Stripe account after the event, with refunds, reschedules, and cancellations handled without a support thread.",
      "One codebase serves buyers, hosts, and admins in Spanish and English, on any phone.",
    ],
  },
  {
    slug: "capitalruta",
    name: "CapitalRuta",
    status: "In production",
    url: "https://capitalruta.com",
    card: "A capital matching layer for Mexican SMBs: 108 products from 82 providers, matched to a business profile with a fit score. Rule-based today, AI underwriting on top later.",
    screens: [
      {
        src: "/builds/capitalruta-home.webp",
        label: "Home",
        alt: "CapitalRuta home page: find financing that fits your business, 82 providers and 108 products",
      },
      {
        src: "/builds/capitalruta-directorio.webp",
        label: "Capital directory",
        alt: "CapitalRuta capital directory with filters for category, need, amount, requirements, and industry",
        path: "/directorio",
      },
      {
        src: "/builds/capitalruta-detalle.webp",
        label: "Product detail",
        alt: "CapitalRuta product page for a Banamex SMB loan with pros, key data, and use cases",
        path: "/directorio/banamex/credito-negocios-pymes",
      },
      {
        src: "/builds/capitalruta-simulador.webp",
        label: "Loan simulator",
        alt: "CapitalRuta loan simulator with a sample equipment purchase, expected margin, and a selected product",
        path: "/calculadora-prestamo",
        note: "Live site · sample inputs",
      },
      {
        src: "/builds/capitalruta-proveedores.webp",
        label: "For providers",
        alt: "CapitalRuta provider page: claim a listing, add products, receive qualified applicants, answer reviews, see analytics",
        path: "/para-proveedores",
      },
    ],
    tagline:
      "A capital matching layer for Mexican entrepreneurs and SMBs",
    oneLiner:
      "Aggregates 108 products from 82 providers (loans, credit lines, equity, grants, leasing, and trade finance across 10+ institution types) and matches them against a structured business profile, with a fit score covering accessibility, cost, speed, and approval likelihood.",
    problem:
      "Even sophisticated founders in Mexico don&rsquo;t have a clean view of what capital is actually accessible to them: at what cost, on what timeline, with what eligibility. The directory exists in fragments across banks, fintechs, government programs, factoring shops, and equity sources. Building a real comparison is a research project, not a workflow.",
    architecture: [
      {
        layer: "Multi-category catalog",
        detail:
          "Provider data split deliberately by category (banks, asset financing, trade finance, venture, government, fintechs) because the schemas and decision criteria genuinely differ.",
      },
      {
        layer: "Hybrid data model",
        detail:
          "The catalog Claude built is the foundation, stable and versioned. On top of it, a writable layer captures provider-submitted edits. Approved edits go live so providers can keep their listings current, without touching the underlying catalog.",
      },
      {
        layer: "Monthly refresh",
        detail:
          "A monthly cron job sweeps each provider for changes (APRs, eligibility windows, ticket sizes, approval timelines) and writes deltas back through the hybrid data model. The static catalog stays fresh without provider-side effort, and approved diffs flow through the same path.",
      },
      {
        layer: "Eligibility + fit",
        detail:
          "Rules engine today covers revenue, months in business, entity type, and bureau requirement. Fit ranking weights accessibility, cost, speed, and approval probability.",
      },
      {
        layer: "Three-role surface",
        detail:
          "Buyer, provider, and admin dashboards: applications, lead routing, claims, reviews, analytics. Multi-tenant from day one because the operating model required it.",
      },
    ],
    ai: "Used upstream, not in the user-facing decision. Claude crawled bank, fintech, government, factoring, and equity provider sources to build the catalog across 10+ institution types. When a business owner gets an eligibility answer, it stays deterministic: same inputs, same answer, every time, fully explainable.",
    stack: [
      "React · TypeScript",
      "Tailwind",
      "Supabase (Postgres + auth)",
      "Netlify",
    ],
    impact: [
      "First normalized SMB capital comparison in MX covering loans, equity, government, and trade finance under one schema.",
      "Three-role multi-tenant operating model (buyer, provider, admin) running in production.",
      "Fit-score surfaces non-obvious products that match a profile, not just the ones a founder would have searched for.",
    ],
  },
  {
    slug: "casaruta",
    name: "CasaRuta",
    status: "In production",
    url: "https://casaruta.com",
    card: "A mortgage comparison and eligibility engine: 100+ products from 30+ banks, government programs, SOFOMs, and fintechs on one schema, with explainable pass/fail.",
    screens: [
      {
        src: "/builds/casaruta-home.webp",
        label: "Home",
        alt: "CasaRuta home page: compare mortgages from 30+ institutions and 100+ products",
      },
      {
        src: "/builds/casaruta-directorio.webp",
        label: "Side-by-side comparison",
        alt: "CasaRuta mortgage directory comparing rate, CAT, down payment, term, and estimated monthly payment",
        path: "/directorio",
      },
      {
        src: "/builds/casaruta-detalle.webp",
        label: "Product detail",
        alt: "CasaRuta product page for BBVA's fixed-rate mortgage with key terms, requirements, and an eligibility check",
        path: "/directorio/bbva/hipoteca-fija",
      },
      {
        src: "/builds/casaruta-calculadora.webp",
        label: "Mortgage simulator",
        alt: "CasaRuta mortgage simulator with a sample profile, the estimated monthly payment, and an affordability verdict",
        path: "/calculadora-hipotecaria",
        note: "Live site · sample inputs",
      },
    ],
    tagline:
      "A Spanish-language mortgage comparison and eligibility engine for Mexican homebuyers",
    oneLiner:
      "100+ mortgage products across 30+ institutions (banks, Infonavit, FOVISSSTE, SOFOMs, fintechs), normalized into a single comparable schema and matched against a structured buyer profile, with explainable pass/fail reasons.",
    problem:
      "The Mexican home loan market is genuinely fragmented. Different terminology, different rate structures, different eligibility rules across banks, government programs, SOFOMs, and fintechs. A buyer can&rsquo;t make an honest side-by-side comparison without doing institution-by-institution research, and the &ldquo;am I eligible?&rdquo; question is usually answered only after submitting a formal application.",
    architecture: [
      {
        layer: "Normalized catalog",
        detail:
          "100+ products across 30+ institutions in 6 categories, expressed against one schema (interest rate, CAT, LTV, down payment, tenor) so comparison is structurally honest, not editorially flattened.",
      },
      {
        layer: "Monthly refresh",
        detail:
          "A cron job runs once a month, re-pulls each institution's published rates and product terms, reconciles against the prior snapshot, and surfaces drift as an exception, so the catalog stays honest without anyone manually re-checking 30 banks every month.",
      },
      {
        layer: "Eligibility matcher",
        detail:
          "22 buyer-profile fields evaluated against per-product eligibility rules. Outputs a pass/fail per product with the specific reason, not a black-box score.",
      },
      {
        layer: "Buyer profile capture",
        detail:
          "Quiz, calculators (amortization, Cofinavit, refi), and document checks, designed so the eligibility input is built up casually rather than demanded up front.",
      },
      {
        layer: "Programmatic content surface",
        detail:
          "330 sitemap URLs, 24 mortgage-type pages, 33 SEO segments: the discovery layer that gets buyers to the eligibility engine in the first place.",
      },
      {
        layer: "Accounts + data",
        detail:
          "Supabase auth and data, Netlify functions for webhooks. The unglamorous half of any product that handles a structured user profile.",
      },
    ],
    ai: "Used upstream, not in the user-facing decision. Agents crawled the public web (bank product pages, Infonavit and FOVISSSTE documentation, SOFOM and fintech disclosures) to assemble the 100+ product catalog and keep it normalized against one schema. The eligibility outcome shown to a borrower stays deterministic: it has to be auditable, explainable, and stable across runs.",
    stack: [
      "React · TypeScript",
      "Tailwind",
      "Supabase (Postgres + auth)",
      "Netlify",
    ],
    impact: [
      "First normalized side-by-side mortgage comparison covering both private and government programs in MX.",
      "Eligibility-with-reasons UX: buyers learn why they qualify or don&rsquo;t, not just whether.",
      "Bilingual programmatic surface designed for the foreigner-buyer segment specifically.",
    ],
  },
];
