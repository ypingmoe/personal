export function AboutSection() {
  return (
    <section id="about" className="grid gap-10 py-12 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="inline-flex rounded-full border border-edge px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Full-Stack Developer
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Building AI-powered products with C#, Python, and modern web stacks.
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted md:text-lg">
          I design and ship end-to-end software: intelligent backend systems in C# and Python,
          paired with high-performance frontend experiences in Next.js, TypeScript, and Tailwind
          CSS.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="action-button" href="#contact">
            Start a Project
          </a>
          <a className="action-button-secondary" href="/resume.pdf" download>
            Download Resume
          </a>
          <a className="action-button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-edge bg-surface p-6">
        <h2 className="text-lg font-semibold">Core focus</h2>
        <ul className="mt-4 space-y-3 text-muted">
          <li>Applied AI features for real product workflows</li>
          <li>Scalable API services in C# and Python</li>
          <li>Fast, maintainable UI systems with TypeScript</li>
        </ul>
      </div>
    </section>
  );
}
