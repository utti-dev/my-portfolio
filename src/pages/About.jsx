const THINKING_POINTS = [
  {
    title: "Growth mindset",
    detail:
      "Every release is a learning loop. I iterate fast, validate assumptions, and compound results.",
  },
  {
    title: "Problem-solving first",
    detail:
      "I start with the user and business goals, then map the UI to measurable outcomes.",
  },
  {
    title: "Engineering discipline",
    detail:
      "Clean architecture, predictable state, and performance budgets keep teams shipping.",
  },
  {
    title: "Continuous improvement",
    detail:
      "I track Core Web Vitals, accessibility, and UX feedback to drive long-term quality.",
  },
];

function About() {
  return (
    <section className="space-y-8 pb-6" id="about">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          How I Think
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          How I think as a developer<span className="text-brand-accent">.</span>
        </h2>
        <div className="flex max-w-2xl gap-3 text-brand-light/70">
          <span className="mt-1 h-6 w-1 rounded-full bg-brand-accent" />
          <p className="text-base leading-relaxed sm:text-lg">
            I combine product thinking with engineering discipline to build
            interfaces that are fast, accessible, and trusted by users.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="grid gap-4 sm:grid-cols-2">
          {THINKING_POINTS.map((item) => (
            <div key={item.title} className="card-surface p-5">
              <p className="text-sm font-semibold text-brand-light">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-brand-light/70">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-brand-light">
            Working style.
          </h3>
          <div className="card-surface space-y-4 p-5 text-sm text-brand-light/70">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 px-3 py-2 text-xs font-semibold text-brand-accent">
              📍 Based in India — Available Globally
            </div>
            <p>
              I collaborate with teams across the US, Europe, and APAC, adapting
              to overlapping hours for fast feedback loops.
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
              IST (UTC +5:30) — Overlap friendly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



