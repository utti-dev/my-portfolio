const PROJECTS = [
  {
    title: "AI Enhanced Metrics Dashboard (POC)",
    desc: "Enterprise dashboard delivering real-time data visualization and operational insights.",
    role: "Sr. Software Engineer",
    stack: ["React", "Redux", "JavaScript", "REST APIs"],
    year: "2024",
    highlights: [
      "Built modular UI components for charts, tables, and summary metrics.",
      "Integrated multiple APIs with loading/error states.",
      "Optimized rendering for large, frequently updated datasets.",
    ],
  },
  {
    title: "CXOne Agent Performance",
    desc: "Large-scale platform for agent analytics and performance visibility.",
    role: "Senior Front-End Developer / Team Lead",
    stack: ["React", "Next.js", "TypeScript", "Redux", "Jest"],
    year: "2023",
    highlights: [
      "Improved Core Web Vitals by 25+ points through performance optimizations.",
      "Implemented SSR/CSR strategies with dynamic imports and lazy loading.",
      "Integrated performance monitoring with Lighthouse and React Profiler.",
    ],
  },
  {
    title: "MAX (NICE)",
    desc: "Migration of legacy UI to a modern React-based architecture.",
    role: "Senior Front-End Developer",
    stack: ["React", "Redux Toolkit", "Playwright", "TDD"],
    year: "2022",
    highlights: [
      "Built a reusable component library across apps.",
      "Improved performance with Lighthouse + React Profiler.",
    ],
  },
  {
    title: "Invoice Exchange Platform (Freelance)",
    desc: "Full-stack frontend delivery for an invoice exchange product.",
    role: "Senior Front-End Developer (Freelance)",
    stack: ["React", "Next.js", "Redux Toolkit", "TypeScript"],
    year: "2021",
    highlights: [
      "Built SPA flows with SSR for performance and SEO.",
      "Implemented a11y best practices and cross-browser compatibility.",
      "Automated tests with Playwright + Jest for critical journeys.",
    ],
  },
];

function Projects() {
  return (
    <section className="space-y-8 pb-6" id="projects">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Completed Projects
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Completed Projects<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          A snapshot of delivery-focused projects with measurable impact.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className="card-surface min-w-[85%] flex-shrink-0 snap-start p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.35)] sm:min-w-[70%] md:min-w-0 md:flex-shrink md:snap-none"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
                  Completed Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brand-light">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-brand-light/70">
                  {project.role}
                </p>
              </div>
              <span className="rounded-full border border-brand-light/15 px-3 py-1 text-xs font-semibold text-brand-light/70">
                {project.year}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-brand-light/70">
              {project.desc}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-1 text-xs font-semibold text-brand-light/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-4 space-y-2 text-sm text-brand-light/70">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

