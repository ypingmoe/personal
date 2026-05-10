export function AboutSection() {
  return (
    <section id="about" className="grid gap-10 py-6 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="inline-flex rounded-full border border-edge px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Full-Stack Developer
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-4xl">
          Full-stack developer and AI developer building high-performance products.
        </h1>
        <p className="max-w-xl text-base leading-7 text-muted md:text-lg">
          I am a full-stack developer, AI developer, and C#/Java developer focused on scalable
          software, automation, and intelligent systems. I build trading bots, blockchain + AI
          solutions, and specialized Polymarket bot workflows for production use cases.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="action-button-secondary" href="/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-edge bg-surface p-6">
        <h2 className="text-lg font-semibold">Core focus</h2>
        <ul className="mt-4 space-y-3 text-muted">
          <li>AI product engineering and LLM-powered automation</li>
          <li>C#, Java, and Python services for reliable backend systems</li>
          <li>Trading bot developer for data-driven execution strategies</li>
          <li>Blockchain and AI master workflows, including Polymarket bot development</li>
        </ul>
      </div>
    </section>
  );
}
