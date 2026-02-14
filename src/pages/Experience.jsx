const EXPERIENCE = [
  {
    company: "FindLaw",
    role: "Web Developer",
    technologies: ["HTML", "CSS", "Bootstrap", "WordPress", "Web API", "JSON"],
    highlights: [
      "Designed and developed responsive attorney websites with mobile-first layouts and cross-browser compatibility.",
      "Maintained and enhanced existing sites, improving UI/UX and resolving production issues.",
      "Optimized performance via refactoring, image optimization, and caching to improve SEO and load times.",
      "Collaborated with attorneys, business teams, and PMs to deliver tailored web solutions.",
    ],
  },
  {
    company: "Quest Global",
    role: "Sr. Software Engineer",
    technologies: ["React", "Redux", "JavaScript (ES6+)", "REST APIs"],
    highlights: [
      "Built a data-driven dashboard with modular, reusable UI components for charts and metrics.",
      "Integrated multiple REST APIs with proper loading and error handling for dynamic insights.",
      "Optimized state updates for large, frequently updated datasets.",
      "Wrote Jest unit tests to validate core UI logic and stability.",
    ],
  },
  {
    company: "NICE",
    role: "Senior Front-End Developer / Team Lead",
    technologies: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Karma", "TDD"],
    highlights: [
      "Led architecture and code reviews, mentoring engineers on quality and best practices.",
      "Improved Core Web Vitals by 25+ points via rendering optimizations and efficient state management.",
      "Implemented SSR/CSR strategies, dynamic imports, and code splitting to boost LCP and TTI.",
      "Used Lighthouse and React Profiler to eliminate performance bottlenecks.",
    ],
  },
  {
    company: "NICE",
    role: "Senior Front-End Developer (MAX)",
    technologies: ["React", "Redux Toolkit", "JavaScript", "TDD", "Playwright"],
    highlights: [
      "Migrated legacy JavaScript UI to React for scalability and performance.",
      "Built a reusable component library to standardize UI across products.",
      "Led performance tuning with Lighthouse and React Profiler.",
    ],
  },
];

function Experience() {
  return (
    <section className="space-y-8 pb-6" id="experience">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Work Experience
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Work Experience<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          Roles, impact, and contributions across enterprise platforms and
          customer-facing products.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
        {EXPERIENCE.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="card-surface group min-w-[85%] flex-shrink-0 snap-start p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.35)] animate-fade-up motion-reduce:animate-none sm:min-w-[70%] md:min-w-0 md:flex-shrink md:snap-none"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
                  {item.company}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-light">
                  {item.role}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-1 text-xs font-semibold text-brand-light/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-brand-light/70">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

