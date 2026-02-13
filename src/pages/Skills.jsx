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
    <main className="flex-1 space-y-8 pb-6">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-brand-dark sm:text-5xl">
          Skills<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          A balanced toolkit that brings visual polish, accessible UX, and
          robust engineering to every project.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.label}
              className="group rounded-2xl border border-brand-dark/10 bg-brand-light p-6 shadow-[0_12px_24px_rgba(38,35,65,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(38,35,65,0.2)] animate-fade-up motion-reduce:animate-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between text-sm font-semibold text-brand-dark/80">
                <span>{skill.label}</span>
                <span className="text-brand-accent">{skill.value}%</span>
              </div>
              <p className="mt-2 text-sm text-brand-dark/70">{skill.desc}</p>
              <div className="mt-4 h-2 w-full rounded-full bg-brand-dark/10">
                <div
                  className="h-2 origin-left rounded-full bg-brand-accent animate-grow motion-reduce:animate-none"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-5 rounded-2xl border border-brand-dark/10 bg-brand-light p-6 shadow-[0_12px_24px_rgba(38,35,65,0.14)]">
          <div>
            <h3 className="text-lg font-semibold text-brand-dark">Toolbox</h3>
            <p className="mt-2 text-sm text-brand-dark/70">
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
                className="rounded-full border border-brand-dark/20 bg-brand-light px-4 py-2 text-xs font-semibold text-brand-dark/70 shadow-[0_6px_14px_rgba(38,35,65,0.12)] transition hover:-translate-y-0.5 hover:border-brand-accent/60 hover:text-brand-dark hover:shadow-[0_10px_18px_rgba(38,35,65,0.18)]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="rounded-2xl bg-brand-accent/15 p-4 text-sm text-brand-dark">
            Currently exploring WebGL and advanced interactions for immersive
            product storytelling.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Skills;

