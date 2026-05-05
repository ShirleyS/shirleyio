export type Project = {
  slug: string;
  name: string;
  status: string;
  url: string;
  jdArea: string;
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
    jdArea: "Measurement Intelligence",
    tagline: "Operational intelligence for a multi-location hospitality portfolio",
    oneLiner:
      "An executive dashboard and data-completeness layer that unifies POS, inventory, and accounting signal across five operating businesses.",
    problem:
      "Each business in the portfolio runs on its own combination of POS, inventory, accounting, and staffing tools. Reports disagreed by 5–15% on any given day. The decisions that mattered — staffing tomorrow, ordering next week, whether last week&rsquo;s pricing change worked — were being made on lagged, incomplete, or inconsistent data.",
    architecture: [
      {
        layer: "Ingestion",
        detail:
          "Vendor adapters (Parrot POS and others) backfill historical windows on a rolling cursor and watch for late-arriving rows. Every ingestion run is logged, idempotent, and replayable.",
      },
      {
        layer: "Completeness",
        detail:
          "A first-class completeness layer per entity (empresa / marca / ubicación) — every dashboard view declares what data it depends on and refuses to render misleading numbers when something is missing or stale.",
      },
      {
        layer: "Reconciliation",
        detail:
          "Same-grain comparisons across POS, accounting, and bank deposits. Drift is surfaced as an exception rather than averaged into a misleadingly clean total.",
      },
      {
        layer: "Executive layer",
        detail:
          "A small, opinionated set of executive views — daily revenue and trend, ticket size, item mix, labor against forecast, supplier variance — built around what an operator actually decides on, not what&rsquo;s easy to chart.",
      },
      {
        layer: "Agent layer",
        detail:
          "Claude on top, scoped to an explicit memory of business structure, vendors, and known anomalies — used for explanation, summarization, and drafting weekly operating notes that are reviewed before they leave the system.",
      },
    ],
    ai: "Used. Claude reads the warehouse for natural-language queries, anomaly explanation (&ldquo;why is Tuesday low?&rdquo;), and structured drafting of the weekly operating note. Every Claude touchpoint sits behind a deterministic data fetch and a human review step before the output is acted on.",
    stack: [
      "Next.js · TypeScript",
      "Postgres / warehouse",
      "Parrot POS API",
      "Claude (Anthropic)",
      "Vercel",
    ],
    impact: [
      "Reporting variance across systems collapsed from days of reconciliation to a labeled exception per shift.",
      "Operator decisions on staffing and ordering now happen against trustworthy daily data, not week-old PDFs.",
      "Same engine — plug a new business in, and the executive layer is online in days.",
    ],
  },
  {
    slug: "casaruta",
    name: "CasaRuta",
    status: "In production",
    url: "https://casaruta.com",
    jdArea: "MarTech Infrastructure",
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
          "330 sitemap URLs, 24 mortgage-type pages, 33 SEO segments, 12 bilingual guides for foreigners — the discovery layer that gets buyers to the eligibility engine in the first place.",
      },
      {
        layer: "Accounts + payments",
        detail:
          "Supabase auth and data, Stripe for subscription tiers, Netlify functions for webhooks. The unglamorous half of any product that handles money.",
      },
    ],
    ai: "Deliberately none. An eligibility outcome shown to a borrower has to be auditable, explainable, and stable across runs — that&rsquo;s a deterministic problem, not a probabilistic one. The interesting AI work here is upstream (research, normalization tooling) rather than in the user-facing decision.",
    stack: [
      "React 18 · Vite · TypeScript",
      "Tailwind v4",
      "Supabase (Postgres + auth)",
      "Stripe",
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
    jdArea: "Workflow Automation",
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
          "Static seed catalog plus a Supabase layer of approved diffs (provider_edits) — so providers can update their listings without forking the source of truth.",
      },
      {
        layer: "Eligibility + fit",
        detail:
          "Phase-1 rules engine: revenue, months in business, entity type, bureau requirement. Fit ranking weights accessibility, cost, speed, and approval probability.",
      },
      {
        layer: "Three-role surface",
        detail:
          "Buyer, provider, and admin dashboards — applications, lead routing, claims, reviews, analytics. Multi-tenant from day one because the operating model required it.",
      },
      {
        layer: "Probabilistic layer (planned)",
        detail:
          "Phase 2/3 introduces approval-probability heuristics and external data signals (SAT, bureau, bank-connection). Designed so the deterministic eligibility layer stays the foundation and the probabilistic layer sits on top — never as a fallback when the rules are unclear.",
      },
    ],
    ai: "Deliberately none, today. Same reasoning as CasaRuta: an eligibility answer shown to a small-business owner has to be auditable. The AI layer is sequenced — it gets introduced where the underlying problem is genuinely probabilistic (approval likelihood, signal scoring) rather than as a shortcut around the rule-based work.",
    stack: [
      "React 18 · Vite · TypeScript",
      "Tailwind v4 · Radix UI",
      "Supabase (Postgres + auth)",
      "Stripe",
      "Netlify",
    ],
    impact: [
      "First normalized SMB capital comparison in MX covering loans, equity, government, and trade finance under one schema.",
      "Three-role multi-tenant operating model — buyer, provider, admin — running in production.",
      "Fit-score surfaces non-obvious products that match a profile, not just the ones a founder would have searched for.",
    ],
  },
];
