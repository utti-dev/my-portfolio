const SERVICES = [
  {
    title: "UI Engineering",
    desc: "Design systems and component libraries that scale across teams.",
    deliverables: ["Reusable components", "Storybook docs", "Design tokens"],
  },
  {
    title: "Performance Audits",
    desc: "Speed-focused reviews to improve Core Web Vitals and UX.",
    deliverables: ["Lighthouse review", "Bundle analysis", "Fix roadmap"],
  },
  {
    title: "Product Prototyping",
    desc: "Clickable prototypes and polished MVPs to validate ideas fast.",
    deliverables: ["Rapid wireframes", "MVP build", "Stakeholder demos"],
  },
  {
    title: "Accessibility",
    desc: "Inclusive, standards-based interfaces for every user.",
    deliverables: ["WCAG review", "ARIA patterns", "Keyboard support"],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discover",
    desc: "Align on goals, users, and success metrics.",
  },
  {
    step: "02",
    title: "Design",
    desc: "Craft clean UX flows and visual direction.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Ship responsive, tested UI with best practices.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Monitor, iterate, and optimize after release.",
  },
];

function Services() {
  return (
    <section className="space-y-8 pb-6" id="services">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Services
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Services I offer<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          Product-focused frontend execution with a balance of design polish and
          engineering rigor.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-brand-light/10 bg-brand-dark/70 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(0,0,0,0.45)] animate-fade-up motion-reduce:animate-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="text-lg font-semibold text-brand-light">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-brand-light/70">{service.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-1 text-xs font-semibold text-brand-light/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-5 rounded-2xl border border-brand-light/10 bg-brand-dark/70 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
          <div>
            <h3 className="text-lg font-semibold text-brand-light">How I work</h3>
            <p className="mt-2 text-sm text-brand-light/70">
              A simple, transparent workflow that keeps teams aligned and
              shipping quickly.
            </p>
          </div>
          <ol className="space-y-4">
            {PROCESS.map((item) => (
              <li key={item.step} className="flex gap-4 text-sm">
                <span className="mt-1 h-6 w-10 rounded-full border border-brand-accent/60 bg-brand-accent/10 text-center text-xs font-semibold text-brand-accent">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-brand-light">{item.title}</p>
                  <p className="text-brand-light/70">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="rounded-2xl bg-brand-accent/15 p-4 text-sm text-brand-light">
            Typical engagements include audits, design system builds, and
            end-to-end product launches.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

