"use client";

import { useState } from "react";

type ProjectItem = {
  name: string;
  summary: string;
  stack: string;
  href: string;
};

type ProjectsSectionProps = {
  projects: ProjectItem[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [view, setView] = useState<"card" | "list">("card");

  return (
    <section id="projects" className="py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">Recent Projects</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Switch between card and list view to explore selected work.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setView("card")}
            className={`icon-button view-toggle-button ${view === "card" ? "view-active" : ""}`}
            aria-label="Card view"
            title="Card view"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M4 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm9 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2V5ZM4 14a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Zm9 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`icon-button view-toggle-button ${view === "list" ? "view-active" : ""}`}
            aria-label="List view"
            title="List view"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M4 6.75A1.75 1.75 0 1 1 4 3.25a1.75 1.75 0 0 1 0 3.5Zm4.5-.75a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 8.5 6Zm-4.5 8.75A1.75 1.75 0 1 1 4 11.25a1.75 1.75 0 0 1 0 3.5ZM8.5 14a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 8.5 14Zm-4.5 8.75A1.75 1.75 0 1 1 4 19.25a1.75 1.75 0 0 1 0 3.5ZM8.5 22a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 8.5 22Z" />
            </svg>
          </button>
        </div>
      </div>

      {view === "card" ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="project-card rounded-2xl border border-edge bg-surface p-6">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                {project.stack}
              </p>
              <a
                href={project.href}
                className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Open Project
              </a>
            </article>
          ))}
        </div>
      ) : (
        <ul className="mt-6 overflow-hidden rounded-2xl border border-edge bg-surface">
          {projects.map((project) => (
            <li key={project.name} className="project-list-item border-b border-edge px-5 py-4 last:border-b-0">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm text-muted">{project.summary}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    {project.stack}
                  </p>
                </div>
                <a
                  href={project.href}
                  className="text-sm font-semibold underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
