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
  name: "ypingmoe",
  tagline: ["full-stack engineer", "· ai"],
  pronouns: undefined as string | undefined,
  location: "Burnaby, BC, Canada",
  email: "ypingmoe@gmail.com",
  copyrightHolder: "ypingmoe",
  summary:
    "Full-stack engineer with 8+ years building SaaS apps, APIs, and dashboards. React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS. Ships LLM chatbots, search, and automation end to end.",
  experienceTitle: "experience",
  experience: [
    {
      title: "Senior Full-Stack Developer / AI Engineer",
      company: "TechNova",
      location: "Vancouver, BC",
      period: "2021–2025",
      bullets: [
        "Built SaaS dashboards and AI document workflows with React, Next.js, Python, FastAPI, and PostgreSQL.",
        "Integrated LLM chatbots, search, and automation—reduced manual work by ~40%.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "BrightPath AI Solutions",
      location: "Remote",
      period: "2018–2021",
      bullets: [
        "Delivered SaaS platforms and CRM tools for 10+ clients with React, Node.js, and Django.",
        "Built REST APIs and third-party integrations; improved page load times 20–30%.",
      ],
    },
    {
      title: "Junior Full-Stack Developer",
      company: "KleinTech",
      location: "Remote",
      period: "2016–2018",
      bullets: [
        "Built websites, admin panels, and e-commerce apps for small business clients.",
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
      label: "github",
      href: "https://github.com/ypingmoe",
      short: "gh",
      external: true,
    },
    {
      label: "twitter",
      href: "https://x.com/ypingmoe",
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
