type ExpertiseItem = {
  name: string;
  description: string;
  mark: string;
};

type SkillsSectionProps = {
  expertise: ExpertiseItem[];
};

export function SkillsSection({ expertise }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-8">
      <h2 className="text-2xl font-bold">Technical Strengths</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Motion-enhanced cards highlight the stack I use most for AI-first and full-stack product
        development.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {expertise.map((item, index) => (
          <article
            key={item.name}
            className="skill-card rounded-2xl border border-edge bg-surface p-6 shadow-sm"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="skill-mark">{item.mark}</div>
            <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
