export type TimelineEntry = {
  company: string;
  role: string;
  range: string;
  location: string;
  positioning: string;
  systems: string[];
  surface: string;
  customers?: string[];
  detail: string;
};

export const timeline: TimelineEntry[] = [
  {
    company: "Clearbit",
    role: "Head of Customer Success Engineering · Solutions Architecture / Sales Engineering",
    range: "2018 — 2023 · acq. HubSpot 2023",
    location: "San Francisco / Mexico City",
    positioning:
      "Owned the full pre- and post-sales engineering surface of a B2B data platform — implementations, native integrations, partnerships, platform.",
    systems: [
      "Salesforce package",
      "REST + streaming APIs",
      "Native integrations",
      "Data enrichment pipelines",
      "Identity resolution",
      "CRM + MAP architecture",
    ],
    surface:
      "Stood up Customer Success Engineering and Support Engineering as net-new functions covering four product surfaces — Salesforce package, APIs, native integrations, platform — and the internal/external success metrics, customer development, and escalation pathways that feed each of them into product strategy. Five years of running that operating layer.",
    customers: ["Stripe", "Slack", "Intercom", "Facebook", "Unity", "Zendesk"],
    detail:
      "The interesting part was the operating layer underneath the org chart: how a CSE escalation became a product signal, how a partner integration became a renewal lever, how a quiet metric in the platform exposed a coverage gap nobody had named yet. Five years of running that layer is what taught me what TPM work actually feels like.",
  },
  {
    company: "Demandbase",
    role: "Solutions Engineering Lead",
    range: "2016 — 2018",
    location: "San Francisco",
    positioning:
      "Implemented and scoped account-based marketing solutions inside enterprise martech stacks — the kind of work where the diagram on the whiteboard had to survive contact with eight existing systems.",
    systems: [
      "Salesforce",
      "Eloqua",
      "Marketo",
      "Adobe Analytics",
      "Adobe Target",
      "Google Analytics",
      "Optimizely",
      "Tag Management",
    ],
    surface:
      "Shipped internal tooling I still think fondly about &mdash; including an <strong>industry-first real-time sales alerting system that revealed previously anonymous B2B web traffic to reps in the moment</strong> (JS + Slack), a Python/Rails data research tool, a Ruby/Rails central sales scoping tool, and Rails/JS event tracking against GA. The pattern was always the same: find the manual loop, instrument it, then automate the part that&rsquo;s safe to automate.",
    customers: ["Adobe", "Accenture", "AWS", "Deloitte", "Visa"],
    detail:
      "This is where I learned that &ldquo;solutions engineering&rdquo; in enterprise martech is, functionally, applied program management — you&rsquo;re sequencing technical change across three or four teams that don&rsquo;t share a roadmap, and the reporting layer is what holds the whole thing together.",
  },
  {
    company: "Vero",
    role: "Customer Success Engineer",
    range: "2015 — 2016",
    location: "San Francisco",
    positioning:
      "Behavioral and transactional email infrastructure — the layer where marketing intent becomes deliverable bytes.",
    systems: [
      "Event tracking",
      "Deliverability monitoring",
      "Migration tooling",
      "Behavioral / transactional pipelines",
    ],
    surface:
      "Debugging client integrations end to end, repairing deliverability, building Ruby/JS tooling for the platform, leading migrations off legacy ESPs, writing the documentation that actually got read.",
    detail:
      "Smaller team, sharper edges. Owning the customer technical relationship from first event to first sent campaign teaches you to write code, copy, and explanations with the same level of care.",
  },
  {
    company: "Oracle Marketing Cloud",
    role: "Senior Expert Services Specialist",
    range: "2013 — 2014",
    location: "San Francisco",
    positioning:
      "Enterprise email — multi-touch lifecycle programs at scale, with the reporting anomalies and segmentation puzzles that come with that volume.",
    systems: [
      "Oracle Responsys",
      "Lifecycle program design",
      "SQL segmentation",
      "Proprietary filtering",
      "Python automation",
    ],
    surface:
      "Executed lifecycle programs, debugged anomalous reporting, automated time-intensive work for the Campaign Services team in Python, ran client escalations end-to-end.",
    detail:
      "First exposure to enterprise marketing infrastructure at real scale — and to the truth that most of the value is in the segmentation and the troubleshooting, not the campaign itself.",
  },
];
