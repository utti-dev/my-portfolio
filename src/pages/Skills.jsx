const SKILLS = [
  {
    label: "UI/UX Design",
    value: 92,
    desc: "Designing clean, intuitive interfaces.",
  },
  {
    label: "Frontend Development",
    value: 95,
    desc: "Building responsive, production-ready UI.",
  },
  {
    label: "Design Systems",
    value: 88,
    desc: "Scalable components and tokens.",
  },
  {
    label: "Accessibility",
    value: 90,
    desc: "Inclusive, standards-based UX.",
  },
  {
    label: "Motion & Interaction",
    value: 85,
    desc: "Micro-interactions and smooth motion.",
  },
  {
    label: "Performance",
    value: 89,
    desc: "Fast, optimized experiences.",
  },
];

function Skills() {
  return (
    <section className="space-y-8 pb-6" id="skills">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Skills
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Skills<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          A balanced toolkit that brings visual polish, accessible UX, and
          robust engineering to every project.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:snap-none sm:overflow-visible sm:pb-0 sm:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.label}
              className="card-surface group min-w-[85%] flex-shrink-0 snap-start p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.35)] animate-fade-up motion-reduce:animate-none sm:min-w-0 sm:flex-shrink sm:snap-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between text-sm font-semibold text-brand-light/80">
                <span>{skill.label}</span>
                <span className="text-brand-accent">{skill.value}%</span>
              </div>
              <p className="mt-2 text-sm text-brand-light/70">{skill.desc}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-brand-light/10">
                <div
                  className="h-2 origin-left rounded-full bg-brand-accent animate-grow motion-reduce:animate-none"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="card-surface space-y-5 p-6">
          <div>
            <h3 className="text-lg font-semibold text-brand-light">Toolbox</h3>
            <p className="mt-2 text-sm text-brand-light/70">
              The tools and frameworks I use daily to deliver polished web
              experiences.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Framer Motion",
              "Storybook",
              "Figma",
              "GitHub",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand-light/20 bg-brand-dark/60 px-4 py-2 text-xs font-semibold text-brand-light/70 shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-brand-accent/60 hover:text-brand-light hover:shadow-[0_10px_18px_rgba(0,0,0,0.45)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-brand-accent/15 p-4 text-sm text-brand-light">
            Currently exploring WebGL and advanced interactions for immersive
            product storytelling.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

