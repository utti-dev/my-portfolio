const PRINCIPLES = [
  {
    title: "Work philosophy",
    detail:
      "Build the smallest solution that delivers the biggest user and business impact.",
  },
  {
    title: "Engineering standards",
    detail:
      "Performance budgets, accessibility checks, and predictable architecture are non‑negotiable.",
  },
  {
    title: "Communication style",
    detail:
      "Weekly checkpoints, async updates, and clear timelines keep delivery transparent.",
  },
];

const WHY_WORK_WITH_ME = [
  "Direct collaboration with a senior engineer—no handoffs.",
  "Clear weekly updates with delivery checkpoints and risk visibility.",
  "Experience across enterprise platforms and high-growth startups.",
  "Accessibility and quality baked into the build, not added later.",
];

const COMMUNICATION = [
  "Kickoff call to align goals and success metrics.",
  "Mid-week progress notes with blockers and next steps.",
  "End-of-week delivery recap with demos and priorities.",
];

const TESTIMONIALS = [
  {
    name: "Founder, SaaS Startup",
    quote: "Testimonial coming soon — client feedback in review.",
  },
  {
    name: "Product Manager, Enterprise",
    quote: "Testimonial coming soon — client feedback in review.",
  },
  {
    name: "CTO, Small Business",
    quote: "Testimonial coming soon — client feedback in review.",
  },
];

function Authority() {
  return (
    <section className="space-y-8 pb-6" id="authority">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Trust & Authority
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Built for credibility, clarity, and client results
          <span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          I believe the best frontend work blends performance, clarity, and
          empathy. My goal is to ship interfaces that users trust and teams can
          scale.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:snap-none sm:overflow-visible sm:pb-0 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <div
                key={item.title}
                className="card-surface min-w-[85%] flex-shrink-0 snap-start p-5 sm:min-w-0 sm:flex-shrink sm:snap-none"
              >
                <p className="text-sm font-semibold text-brand-light">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-brand-light/70">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="card-surface space-y-3 p-6">
            <h3 className="text-lg font-semibold text-brand-light">
              Why work with me
            </h3>
            <ul className="space-y-2 text-sm text-brand-light/70">
              {WHY_WORK_WITH_ME.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-surface space-y-3 p-6">
            <h3 className="text-lg font-semibold text-brand-light">
              Communication style
            </h3>
            <ul className="space-y-2 text-sm text-brand-light/70">
              {COMMUNICATION.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card-surface p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/60">
              Availability
            </p>
            <p className="mt-2 text-lg font-semibold text-brand-light">
              Booking new freelance projects
            </p>
            <p className="mt-2 text-sm text-brand-light/70">
              Next availability: within 2–3 weeks. Response within 24 hours.
            </p>
          </div>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:flex-col sm:snap-none sm:overflow-visible sm:pb-0">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.name}
                className="card-surface min-w-[85%] flex-shrink-0 snap-start p-5 sm:min-w-0 sm:flex-shrink sm:snap-none"
              >
                <p className="text-sm text-brand-light/70">“{item.quote}”</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/60">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Authority;

