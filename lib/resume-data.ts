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
  roleBadge: "Full-Stack · AI Engineer",
  heroTitle: "Full-stack engineer building SaaS and AI-powered products.",
  summary:
    "8+ years building web apps, APIs, dashboards, and cloud systems. React, Next.js, TypeScript, Node.js, Python, FastAPI, PostgreSQL, AWS. LLM chatbots, document search, summarization, and workflow automation.",
};

export const coreFocus: string[] = [
  "React, Next.js, TypeScript",
  "Node.js, Python, FastAPI, Django",
  "PostgreSQL, MongoDB, Redis",
  "OpenAI, RAG, LLM workflows",
  "AWS, Docker, CI/CD",
];

export const education: EducationItem[] = [
  { institution: "B.S. Computer Science — University of Manitoba", period: "2012–2016" },
];

export const expertise: ExpertiseItem[] = [
  {
    name: "Frontend",
    description: "React, Next.js, TypeScript, TailwindCSS.",
    mark: "FE",
  },
  {
    name: "Backend",
    description: "Node.js, Python, FastAPI, Django, REST APIs.",
    mark: "BE",
  },
  {
    name: "AI / LLM",
    description: "OpenAI, RAG, search, summarization, automation.",
    mark: "AI",
  },
  {
    name: "DevOps",
    description: "AWS, Docker, Kubernetes, GitHub Actions.",
    mark: "Ops",
  },
];

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Full-Stack Developer / AI Engineer",
    company: "TechNova",
    period: "2021–2025",
    location: "Vancouver, BC",
    bullets: [
      "Built SaaS dashboards and AI document workflows with React, Next.js, Python, FastAPI, and PostgreSQL.",
      "Integrated LLM chatbots, search, and automation—reduced manual work by ~40%.",
      "Optimized APIs and PostgreSQL queries; cut key endpoint response times 25–35%.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "BrightPath AI Solutions",
    period: "2018–2021",
    location: "Remote",
    bullets: [
      "Delivered SaaS platforms and CRM tools for 10+ clients with React, Node.js, and Django.",
      "Built REST APIs and integrations with Stripe, Twilio, and SendGrid.",
      "Improved page load times 20–30% through frontend and database tuning.",
    ],
  },
  {
    title: "Junior Full-Stack Developer",
    company: "KleinTech",
    period: "2016–2018",
    location: "Remote",
    bullets: [
      "Built websites, admin panels, and e-commerce apps for small business clients.",
      "Developed responsive UIs and backend features with React, Node.js, and MySQL.",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", href: "https://github.com/ypingmoe", icon: "github" },
  { name: "Gmail", href: "mailto:ypingmoe@gmail.com", icon: "gmail" },
  { name: "Twitter", href: "https://x.com/ypingmoe", icon: "twitter" },
  { name: "Telegram", href: "https://t.me/ypingmoe", icon: "telegram" },
];

export const resumeMeta = {
  fullName: "ypingmoe",
  documentTitle: "ypingmoe — Resume",
};
