const CASE_STUDIES = [
  {
    title: "Invoice Exchange Platform",
    role: "Senior Front-End Developer (Freelance)",
    year: "2023",
    problem:
      "A complex invoice workflow needed a fast, secure UI that could scale for enterprise buyers.",
    approach:
      "Designed a React + Next.js architecture with reusable components, SSR for SEO, and robust data flows.",
    challenges:
      "Balancing SPA speed with SSR, plus maintaining accessibility across multiple workflows.",
    results:
      "Launched a stable frontend with WCAG-aligned UX, optimized performance, and reliable transaction flows.",
    businessImpact:
      "Reduced workflow friction, improved buyer confidence, and supported enterprise-scale growth.",
    beforeAfter:
      "Before: slow pages and inconsistent UX. After: faster navigation, reusable UI system, and smoother workflows.",
    stack: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "TypeScript",
      "REST APIs",
      "Playwright",
      "Jest",
    ],
  },
  {
    title: "CXOne Agent Performance",
    role: "Senior Front-End Developer / Team Lead",
    year: "2022",
    problem:
      "Enterprise users struggled with slow dashboards and unclear performance insights.",
    approach:
      "Implemented SSR/CSR strategy, modular data visualizations, and performance budgeting.",
    challenges:
      "Large datasets, frequent updates, and maintaining UX consistency across teams.",
    results:
      "Improved Core Web Vitals by 25+ points and delivered faster time-to-insight for agents.",
    businessImpact:
      "Helped leaders identify performance gaps faster, improving operational decisions.",
    beforeAfter:
      "Before: long load times and laggy charts. After: snappy dashboards and optimized rendering.",
    stack: ["React", "Next.js", "TypeScript", "Redux", "Jest", "Lighthouse"],
  },
  {
    title: "AI Enhanced Metrics Dashboard",
    role: "Sr. Software Engineer (POC)",
    year: "2021",
    problem:
      "Needed a prototype for real-time analytics that could handle complex datasets.",
    approach:
      "Built modular UI components, integrated REST APIs, and optimized render cycles.",
    challenges:
      "Frequent data refreshes and chart-heavy screens.",
    results:
      "Delivered a reliable POC with smooth interactions and scalable components.",
    businessImpact:
      "Enabled stakeholder buy-in with a demo-ready analytics experience.",
    beforeAfter:
      "Before: brittle prototypes. After: stable UI with reusable data modules.",
    stack: ["React", "Redux", "JavaScript", "REST APIs", "Jest"],
  },
];

function Projects() {
  return (
    <section className="space-y-8 pb-6" id="projects">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Case Studies
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Case Studies<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          Deep dives into problems solved, engineering decisions, and business
          outcomes.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
        {CASE_STUDIES.map((project, index) => (
          <article
            key={project.title}
            className="card-surface min-w-[85%] flex-shrink-0 snap-start p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_36px_rgba(0,0,0,0.35)] sm:min-w-[70%] md:min-w-0 md:flex-shrink md:snap-none"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
                  Case Study {String(index + 1).padStart(2, "0")}
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

            <div className="mt-4 space-y-3 text-sm text-brand-light/70">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Problem
                </p>
                <p className="mt-1">{project.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  My Approach
                </p>
                <p className="mt-1">{project.approach}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Challenges
                </p>
                <p className="mt-1">{project.challenges}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Results / Impact
                </p>
                <p className="mt-1">{project.results}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Business impact
                </p>
                <p className="mt-1">{project.businessImpact}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                  Before vs After
                </p>
                <p className="mt-1">{project.beforeAfter}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light/50">
                Tech Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-1 text-xs font-semibold text-brand-light/70"
                >
                  {tech}
                </span>
              ))}
              </div>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;

