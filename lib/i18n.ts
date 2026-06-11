export type Locale = "en" | "fr";

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type SiteCopy = {
  tagline: string[];
  summary: string;
  experienceTitle: string;
  rightsReserved: string;
  experience: ExperienceItem[];
  controls: {
    theme: string;
    language: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
    langEn: string;
    langFr: string;
  };
};

export const translations: Record<Locale, SiteCopy> = {
  en: {
    tagline: ["full-stack engineer", "· ai"],
    summary:
      "Full-stack engineer with 8+ years building SaaS apps, APIs, and dashboards. React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS. Ships LLM chatbots, search, and automation end to end.",
    experienceTitle: "experience",
    rightsReserved: "All rights reserved.",
    controls: {
      theme: "theme",
      language: "language",
      themeLight: "light",
      themeDark: "dark",
      themeSystem: "system",
      langEn: "english",
      langFr: "french",
    },
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
        bullets: ["Built websites, admin panels, and e-commerce apps for small business clients."],
      },
    ],
  },
  fr: {
    tagline: ["ingénieur full-stack", "· ia"],
    summary:
      "Ingénieur full-stack avec plus de 8 ans d'expérience sur des apps SaaS, APIs et tableaux de bord. React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS. Déploie des chatbots LLM, la recherche et l'automatisation de bout en bout.",
    experienceTitle: "expérience",
    rightsReserved: "Tous droits réservés.",
    controls: {
      theme: "thème",
      language: "langue",
      themeLight: "clair",
      themeDark: "sombre",
      themeSystem: "système",
      langEn: "anglais",
      langFr: "français",
    },
    experience: [
      {
        title: "Développeur Full-Stack Senior / Ingénieur IA",
        company: "TechNova",
        location: "Vancouver, BC",
        period: "2021–2025",
        bullets: [
          "Création de tableaux de bord SaaS et de workflows documentaires IA avec React, Next.js, Python, FastAPI et PostgreSQL.",
          "Intégration de chatbots LLM, recherche et automatisation — réduction du travail manuel d'environ 40 %.",
        ],
      },
      {
        title: "Développeur Full-Stack",
        company: "BrightPath AI Solutions",
        location: "À distance",
        period: "2018–2021",
        bullets: [
          "Livraison de plateformes SaaS et outils CRM pour plus de 10 clients avec React, Node.js et Django.",
          "APIs REST et intégrations tierces ; amélioration des temps de chargement de 20 à 30 %.",
        ],
      },
      {
        title: "Développeur Full-Stack Junior",
        company: "KleinTech",
        location: "À distance",
        period: "2016–2018",
        bullets: [
          "Sites web, panneaux d'administration et apps e-commerce pour des clients PME.",
        ],
      },
    ],
  },
};

export function getCopy(locale: Locale): SiteCopy {
  return translations[locale];
}
