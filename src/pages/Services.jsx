const SERVICES = [
  {
    title: "React & Next.js App Development",
    problem: "You need a reliable frontend team without hiring full-time.",
    solution:
      "Design and build React/Next.js apps with reusable components and clean architecture.",
    impact:
      "Ship faster, reduce technical risk, and scale your UI with confidence.",
  },
  {
    title: "Frontend Architecture & Refactoring",
    problem: "The codebase is hard to change and releases keep slowing down.",
    solution:
      "Refactor UI layers, unify patterns, and improve state management and structure.",
    impact:
      "Cleaner code, faster releases, and fewer regressions across teams.",
  },
  {
    title: "UI Performance Optimization",
    problem: "Slow pages and laggy UI hurt conversions and retention.",
    solution:
      "Analyze Core Web Vitals, optimize rendering, and shrink bundle size.",
    impact:
      "Improved Lighthouse scores, smoother UX, and higher engagement.",
  },
  {
    title: "Responsive Web Development",
    problem: "Mobile experience feels inconsistent across devices and screens.",
    solution:
      "Build mobile-first layouts with clear hierarchy and stable UI patterns.",
    impact: "Better mobile engagement and fewer drop-offs.",
  },
  {
    title: "Accessibility & UX Improvements",
    problem: "Users struggle with navigation, focus, and unclear UX flows.",
    solution:
      "Apply WCAG-friendly patterns, semantic HTML, and frictionless journeys.",
    impact:
      "More inclusive product, better usability, and stronger trust signals.",
  },
  {
    title: "API Integration & State Management",
    problem: "Data flows are brittle and UI states are hard to maintain.",
    solution:
      "Integrate APIs cleanly and use predictable state architecture.",
    impact:
      "Reliable data-driven UI with fewer bugs and clearer business logic.",
  },
];

function Services() {
  return (
    <section className="space-y-8 pb-6" id="services">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          How I Can Help You
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Freelance services that move your product forward
          <span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          I partner with founders and product teams to design, build, and improve
          React experiences that are fast, reliable, and conversion-friendly.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:snap-none md:overflow-visible md:grid-cols-2">
        {SERVICES.map((service, index) => (
          <article
            key={service.title}
            className="card-surface group min-w-[85%] flex-shrink-0 snap-start p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.35)] animate-fade-up motion-reduce:animate-none sm:min-w-[70%] md:min-w-0 md:flex-shrink md:snap-none"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <h3 className="text-lg font-semibold text-brand-light">
              {service.title}
            </h3>
            <div className="mt-3 space-y-3 text-sm text-brand-light/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Business problem
                </p>
                <p className="mt-1">{service.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Technical solution
                </p>
                <p className="mt-1">{service.solution}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Business impact
                </p>
                <p className="mt-1 text-brand-accent">{service.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;

