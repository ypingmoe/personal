export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export type ExpertiseItem = {
  name: string;
  description: string;
  mark: string;
};

export type EducationItem = {
  institution: string;
  period: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: string;
};

export const profile = {
  roleBadge: "Full-Stack Developer",
  heroTitle: "Full-stack developer and AI developer building high-performance products.",
  summary:
    "I am a full-stack developer, AI developer, and C#/Java developer focused on scalable software, automation, and intelligent systems. I build trading bots, blockchain + AI solutions, and specialized Polymarket bot workflows for production use cases.",
};

export const coreFocus: string[] = [
  "AI product engineering and LLM-powered automation",
  "C#, Java, and Python services for reliable backend systems",
  "Trading bot developer for data-driven execution strategies",
  "Blockchain and AI master workflows, including Polymarket bot development",
];

export const education: EducationItem[] = [
  { institution: "Kyoto Computer School", period: "2012-2014" },
];

export const expertise: ExpertiseItem[] = [
  {
    name: "AI Product Development",
    description: "LLM workflow design, prompt orchestration, and API integration.",
    mark: "AI",
  },
  {
    name: "C# Backend Engineering",
    description: "Robust services with clean architecture, async processing, and APIs.",
    mark: "C#",
  },
  {
    name: "Python Automation",
    description: "Data pipelines, model tooling, and scripting for developer velocity.",
    mark: "PY",
  },
  {
    name: "TypeScript Frontend",
    description: "Modern web UI built with Next.js, React, and Tailwind CSS.",
    mark: "TS",
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Web3 Developer",
    company: "BNRY / BinaryBit",
    period: "10/2023–01/2026",
    location: "Remote, Germany",
    bullets: [
      "Built a production BNB bridge platform with on-chain smart contracts, swap functionality between BNRY and BSC tokens, and a full-featured frontend.",
    ],
  },
  {
    title: "Solana DeFi Engineer",
    company: "Multiple DeFi Teams",
    period: "2020–2023",
    location: "Remote, US",
    bullets: [
      "Integrated Meteora DLMM active pool, open positions management, and DLMM performance tracking for WiseTrade.",
      "Built Memepad launchpad with Meteora-integrated token smart contracts, staking rewards, and holder reward distribution.",
      "Built Pumpfun bonding-curve launchpad fork, including backend, Solana Web3 integration, and liquidity seeding logic.",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/ypingmoe", icon: "github" },
  { name: "Gmail", href: "mailto:ypingmoe@gmail.com", icon: "gmail" },
  { name: "Telegram", href: "https://t.me/ypingmoe", icon: "telegram" },
];

export const resumeMeta = {
  fullName: "Yping Moe",
  documentTitle: "Yping Moe — Resume",
};
