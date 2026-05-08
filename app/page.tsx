"use client";

import { useEffect, useState } from "react";
import { AboutSection } from "@/app/components/AboutSection";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { SkillsSection } from "@/app/components/SkillsSection";

const expertise = [
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

const socialLinks = [
  { name: "GitHub", href: "https://github.com/your-username", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-profile", icon: "linkedin" },
  { name: "X", href: "https://x.com/your-handle", icon: "x" },
];

const projects = [
  {
    name: "AI Support Copilot",
    summary: "Internal assistant for ticket triage, response drafting, and intent classification.",
    stack: "Python, FastAPI, OpenAI API, Redis",
    href: "https://github.com/your-username/ai-support-copilot",
  },
  {
    name: "C# Microservice Platform",
    summary: "Event-driven service suite for user billing and notifications with observability.",
    stack: "C#, .NET, PostgreSQL, Docker",
    href: "https://github.com/your-username/csharp-microservices",
  },
  {
    name: "Portfolio Analytics Dashboard",
    summary: "Realtime product analytics panel with typed APIs and modular UI components.",
    stack: "Next.js, TypeScript, Tailwind CSS",
    href: "https://github.com/your-username/portfolio-dashboard",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const savedTheme = window.localStorage.getItem("theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && preferredDark) ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onToggleTheme={toggleTheme} />

      <main id="home" className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-14">
        <AboutSection />
        <SkillsSection expertise={expertise} />
        <ProjectsSection projects={projects} />
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  );
}
