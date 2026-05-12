import { coreFocus, profile } from "@/lib/resume-data";

export function AboutSection() {
  return (
    <section id="about" className="grid gap-10 py-6 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <p className="inline-flex rounded-full border border-edge px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted">
          {profile.roleBadge}
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-4xl">{profile.heroTitle}</h1>
        <p className="max-w-xl text-base leading-7 text-muted md:text-lg">{profile.summary}</p>
        {/* <a className="action-button-secondary shrink-0 self-start sm:self-auto" href="/resume.pdf" download>
          Download Resume
        </a> */}
      </div>

      <div className="rounded-2xl border border-edge bg-surface p-6">
        <h2 className="text-lg font-semibold">Core focus</h2>
        <ul className="mt-4 space-y-3 text-muted">
          {coreFocus.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
