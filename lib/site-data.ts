export type SocialLink = {
  label: string;
  href: string;
  short: string;
  external?: boolean;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export const site = {
  name: "🔥ypingmoe🔥",
  tagline: ["full-stack engineer", "& saas builder"],
  pronouns: undefined as string | undefined,
  location: "Steinbach, MB, Canada",
  email: "ypingmoe@gmail.com",
  copyrightHolder: "ypingmoe",
  summary:
    "Full-stack engineer with 9+ years delivering SaaS on React/Next.js, TypeScript, Go, PostgreSQL, and cloud—from product UI through async backends, including scoped LLM work. Remote-first; strong at fast iteration, reliability under load, and partnering with product.",
  experienceTitle: "💻PROFESSIONAL EXPERIENCE",
  experience: [
    {
      title: "Full-Stack Web3 Developer",
      company: "Jitura",
      location: "Remote",
      period: "2024–2025",
      bullets: [
        "Shipped full-stack features (React/Next.js + Go) for ops dashboards and real-time tooling; owned 22 releases from design review to production.",
        "Improved async reliability/performance: p95 latency ~900 ms → ~520 ms; ~38% fewer timeout failures (pooling, bounded concurrency/backpressure, query/index tuning). Sev‑2+ incidents ~4/mo → ~1/mo; MTTR ~110 min → ~45 min.",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company: "Blocksmith Labs",
      location: "Remote",
      period: "2023–2024",
      bullets: [
        "Delivered 9 production modules (dashboards, accounts, REST); ~4.5 weeks → ~2.5 weeks typical delivery via shared UI primitives, consistent API client patterns, and a light integration test harness.",
        "~32% fewer client-reported UI bugs; Lighthouse perf ~68 → ~86 (p75) (skeletons, error boundaries, normalized API responses); ~11 → ~6 round-trips per key screen (batching, short-lived cache, consolidated BFF-style reads).",
      ],
    },
    {
      title: "Senior Full-Stack Engineer",
      company: "Ventuals",
      location: "Remote",
      period: "2021–2023",
      bullets: [
        "End-to-end Solana work: program/RPC integration, tx build/simulation, UX for swaps, pools, and wallets.",
        "Hardened mainnet flows (priority fees, retries, idempotency, observability); aligned with security/stakeholders on boundaries and incidents; improved liquidity/position/risk dashboards.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "covidgo.io",
      location: "Freelance",
      period: "2019–2021",
      bullets: [
        "Supported ~8K concurrent shoppers at peak; p95 initial load < ~2.2s on catalog/PDP (CDN caching, responsive images, route-level splitting, selective Firebase denormalization).",
      ],
    },
    {
      title: "WordPress Developer",
      company: "shippingmemo.au",
      location: "Freelance",
      period: "2017–2018",
      bullets: [
        "Launched store (~1.2K SKUs, ~35 categories); 6 integrations (payments, shipping/tax, email, analytics, inventory export).",
      ],
    },
  ] satisfies ExperienceItem[],
  socialLinks: [
    {
      label: "email",
      href: "mailto:ypingmoe@gmail.com",
      short: "@",
    },
    {
      label: "twitter",
      href: "https://x.com/ypiongmoe",
      short: "x",
      external: true,
    },
    {
      label: "telegram",
      href: "https://t.me/ypingmoe",
      short: "tg",
      external: true,
    },
  ] as SocialLink[],
};
