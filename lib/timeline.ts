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
    role: "Head of Solutions Architecture & Customer Success Engineering",
    range: "2018 — 2023 · acq. HubSpot 2023",
    location: "San Francisco / Mexico City",
    positioning:
      "Owned the full pre- and post-sales customer engineering surface of a B2B data platform — implementations, native integrations, partnerships, platform.",
    systems: [
      "Salesforce package",
      "REST + streaming APIs",
      "Native integrations",
      "Data enrichment pipelines",
      "Identity resolution",
      "CRM + MAP architecture",
    ],
    surface:
      "Stood up Customer Success Engineering and Support Engineering as net-new functions covering four product surfaces — Salesforce package, APIs, native integrations, platform — and the internal/external success metrics, customer development, and escalation pathways that feed each of them into product strategy. Across five years, our teams supported <strong>over a thousand SMB, mid-market, and enterprise customers</strong> — plus the prospects in active sales cycles who needed engineering depth before they&rsquo;d sign.",
    customers: ["Intercom", "Meta", "Slack", "Stripe", "Twilio", "Unity"],
    detail:
      "For years, I ran both the pre-sales and post-sales customer engineering teams at Clearbit &mdash; through implementation, ongoing customer success, and the cross-sell, upsell, and renewal cycles that came after. That structure forces a discipline pure pre-sales teams don&rsquo;t carry: every architecture and scoping commitment made early has to be one the team can honor years into the account. It&rsquo;s the operating model behind real technical advisory: what we sold, my teams had to deliver across the full account lifecycle and beyond.",
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
      "Built and shipped internal tooling I&rsquo;m still proud of &mdash; including an <strong>industry-first real-time sales alerting system that surfaced previously anonymous B2B web visitors to reps the moment they landed</strong> (JS + Slack), a Python/Rails research tool, a Ruby/Rails sales scoping tool, and Rails/JS event tracking into GA. Same pattern every time: find a manual loop sales or marketing was running by hand, make the work visible, then automate the part that was safe to automate.",
    customers: ["Accenture", "Adobe", "AWS", "Databricks", "Deloitte", "McKinsey", "Visa"],
    detail:
      "Demandbase is where I learned what winning a competitive technical evaluation actually requires &mdash; the customer&rsquo;s own data, their use cases, their pass criteria, and the discipline to instrument the proof and deliver against it. The technical case has to hold up to a sophisticated buyer in evidence, not in slides.",
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
