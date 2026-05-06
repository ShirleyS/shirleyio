export type Project = {
  slug: string;
  name: string;
  status: string;
  url: string;
  jdArea?: string;
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
    status: "In production",
    url: "https://riosuno.com",
    tagline: "Operational intelligence across a multi-vertical portfolio of operating businesses",
    oneLiner:
      "An executive dashboard and data-completeness layer that unifies POS, inventory, and accounting signal across five operating businesses.",
    problem:
      "Each business in the portfolio runs on its own combination of POS, inventory, accounting, and staffing tools. Reports disagreed by 5–15% on any given day. The decisions that mattered — staffing tomorrow, ordering next week, whether last week&rsquo;s pricing change worked — were being made on lagged, incomplete, or inconsistent data.",
    architecture: [
      {
        layer: "Ingestion",
        detail:
          "Vendor adapters (POS and PDF/CSV imports) backfill historical windows on a rolling cursor and watch for late-arriving rows. Every ingestion run is logged and safe to re-run — running the same job twice produces the same result, never duplicate data.",
      },
      {
        layer: "Completeness",
        detail:
          "A first-class completeness layer per entity (Company, Brand, Location) — every dashboard view declares what data it depends on and refuses to render misleading numbers when something is missing or stale.",
      },
      {
        layer: "Reconciliation",
        detail:
          "We compare POS, accounting, and bank deposits in the same units so the numbers actually line up. When they don't, the system flags the gap instead of quietly averaging it away.",
      },
      {
        layer: "Executive layer",
        detail:
          "A small, opinionated set of executive views — daily revenue and trend, ticket size, item mix, labor against forecast, supplier variance — built around what an operator actually decides on, not what's easy to chart.",
      },
      {
        layer: "Agent layer",
        detail:
          "Claude on top, scoped to an explicit memory of business structure, vendors, and known anomalies — used for explanation, summarization, and drafting weekly operating notes that are reviewed before they leave the system.",
      },
    ],
    ai: "Used. Claude handles the unstructured inputs that feed the database &mdash; receipts and statements &mdash; extracting structured fields so the deterministic side can reconcile against them. Every output is validated before it lands.",
    stack: [
      "Next.js · TypeScript",
      "Postgres / warehouse",
      "POS API",
      "Claude (Anthropic)",
      "Netlify",
    ],
    impact: [
      "Month-end close happens in real time instead of after a three-week wait — books are continuous, not retrospective.",
      "We cut waste 5% in the first month, driven by real-time margin and cost alerting.",
      "AI extracts invoices (CFDIs, PDFs, XMLs) and matches them to bank deposits and POS sales — manual reconciliation is gone. For us, that&rsquo;s two full-time jobs eliminated.",
      "Payroll and labor-cost-as-percent-of-revenue tracked continuously per location, not at the end of the period.",
      "Multi-entity, multi-brand, multi-location P&amp;L in one engine — plug a new business in and the executive layer is online in days.",
    ],
  },
  {
    slug: "casaruta",
    name: "CasaRuta",
    status: "In production",
    url: "https://casaruta.com",
    tagline:
      "A Spanish-language mortgage comparison and eligibility engine for Mexican homebuyers",
    oneLiner:
      "104 mortgage products across 30 institutions — banks, Infonavit, FOVISSSTE, SOFOMs, fintechs — normalized into a single comparable schema and matched against a structured buyer profile, with explainable pass/fail reasons.",
    problem:
      "The Mexican home loan market is genuinely fragmented. Different terminology, different rate structures, different eligibility rules across banks, government programs, SOFOMs, and fintechs. A buyer can&rsquo;t make an honest side-by-side comparison without doing institution-by-institution research, and the &ldquo;am I eligible?&rdquo; question is usually answered only after submitting a formal application.",
    architecture: [
      {
        layer: "Normalized catalog",
        detail:
          "104 products across 30 institutions in 6 categories, expressed against one schema — interest rate, CAT, LTV, down payment, tenor — so comparison is structurally honest, not editorially flattened.",
      },
      {
        layer: "Monthly refresh",
        detail:
          "A cron job runs once a month, re-pulls each institution's published rates and product terms, reconciles against the prior snapshot, and surfaces drift as an exception — so the catalog stays honest without anyone manually re-checking 30 banks every month.",
      },
      {
        layer: "Eligibility matcher",
        detail:
          "22 buyer-profile fields evaluated against per-product eligibility rules. Outputs a pass/fail per product with the specific reason, not a black-box score.",
      },
      {
        layer: "Buyer profile capture",
        detail:
          "Quiz, calculators (amortization, Cofinavit, refi), and document checks — designed so the eligibility input is built up casually rather than demanded up front.",
      },
      {
        layer: "Programmatic content surface",
        detail:
          "330 sitemap URLs, 24 mortgage-type pages, 33 SEO segments — the discovery layer that gets buyers to the eligibility engine in the first place.",
      },
      {
        layer: "Accounts + data",
        detail:
          "Supabase auth and data, Netlify functions for webhooks. The unglamorous half of any product that handles a structured user profile.",
      },
    ],
    ai: "Used upstream, not in the user-facing decision. Agents crawled the public web — bank product pages, Infonavit and FOVISSSTE documentation, SOFOM and fintech disclosures — to assemble the 104-product catalog and keep it normalized against one schema. The eligibility outcome shown to a borrower stays deterministic: it has to be auditable, explainable, and stable across runs.",
    stack: [
      "React · TypeScript",
      "Tailwind",
      "Supabase (Postgres + auth)",
      "Netlify",
    ],
    impact: [
      "First normalized side-by-side mortgage comparison covering both private and government programs in MX.",
      "Eligibility-with-reasons UX — buyers learn why they qualify or don&rsquo;t, not just whether.",
      "Bilingual programmatic surface designed for the foreigner-buyer segment specifically.",
    ],
  },
  {
    slug: "capitalruta",
    name: "CapitalRuta",
    status: "In production",
    url: "https://capitalruta.com",
    tagline:
      "A capital matching layer for Mexican entrepreneurs and SMBs",
    oneLiner:
      "Aggregates loans, credit lines, equity, grants, leasing, and trade finance across 10+ institution types and matches them against a structured business profile, with a fit score covering accessibility, cost, speed, and approval likelihood.",
    problem:
      "Even sophisticated founders in Mexico don&rsquo;t have a clean view of what capital is actually accessible to them — at what cost, on what timeline, with what eligibility. The directory exists in fragments across banks, fintechs, government programs, factoring shops, and equity sources. Building a real comparison is a research project, not a workflow.",
    architecture: [
      {
        layer: "Multi-category catalog",
        detail:
          "Provider data split deliberately by category — banks, asset financing, trade finance, venture, government, fintechs — because the schemas and decision criteria genuinely differ.",
      },
      {
        layer: "Hybrid data model",
        detail:
          "The catalog Claude built is the foundation — stable and versioned. On top of it, a writable layer captures provider-submitted edits. Approved edits go live so providers can keep their listings current, without touching the underlying catalog.",
      },
      {
        layer: "Monthly refresh",
        detail:
          "A monthly cron job sweeps each provider for changes — APRs, eligibility windows, ticket sizes, approval timelines — and writes deltas back through the hybrid data model. The static catalog stays fresh without provider-side effort, and approved diffs flow through the same path.",
      },
      {
        layer: "Eligibility + fit",
        detail:
          "Rules engine today covers revenue, months in business, entity type, and bureau requirement. Fit ranking weights accessibility, cost, speed, and approval probability.",
      },
      {
        layer: "Three-role surface",
        detail:
          "Buyer, provider, and admin dashboards — applications, lead routing, claims, reviews, analytics. Multi-tenant from day one because the operating model required it.",
      },
    ],
    ai: "Used upstream, not in the user-facing decision. Claude crawled bank, fintech, government, factoring, and equity provider sources to build the catalog across 10+ institution types. When a business owner gets an eligibility answer, it stays deterministic &mdash; same inputs, same answer, every time, fully explainable.",
    stack: [
      "React · TypeScript",
      "Tailwind",
      "Supabase (Postgres + auth)",
      "Netlify",
    ],
    impact: [
      "First normalized SMB capital comparison in MX covering loans, equity, government, and trade finance under one schema.",
      "Three-role multi-tenant operating model — buyer, provider, admin — running in production.",
      "Fit-score surfaces non-obvious products that match a profile, not just the ones a founder would have searched for.",
    ],
  },
];
