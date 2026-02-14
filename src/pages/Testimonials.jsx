const TESTIMONIALS = [
  {
    quote:
      "Ramesh translated complex requirements into a clean, high-performing UI. He was proactive, fast, and thoughtful about every detail.",
    name: "Ananya Rao",
    role: "Product Manager",
    company: "CX Analytics",
    impact: "Reduced time-to-insight by 40%",
  },
  {
    quote:
      "Our design system accelerated delivery across teams. The components were consistent, accessible, and easy to extend.",
    name: "Mateo Alvarez",
    role: "Design Lead",
    company: "Enterprise SaaS",
    impact: "Cut UI build time by 30%",
  },
  {
    quote:
      "Ramesh raised our performance baseline and helped us reach top Lighthouse scores without sacrificing UX.",
    name: "Sarah Kim",
    role: "Engineering Manager",
    company: "Digital Platform",
    impact: "Improved Core Web Vitals by 25+ points",
  },
];

const METRICS = [
  { value: "25+ pts", label: "Core Web Vitals lift" },
  { value: "40%", label: "Faster insights delivered" },
  { value: "15+", label: "Cross-team launches" },
];

function Testimonials() {
  return (
    <section className="space-y-8 pb-6" id="testimonials">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Testimonials
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Trusted by teams<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          A few words from partners and leads who have shipped products with me.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((item, index) => (
          <figure
            key={item.name}
            className="flex h-full flex-col justify-between rounded-2xl border border-brand-light/10 bg-brand-dark/70 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(0,0,0,0.45)] animate-fade-up motion-reduce:animate-none"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <blockquote className="text-sm leading-relaxed text-brand-light/70">
              "{item.quote}"
            </blockquote>
            <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-brand-light">
                  {item.name}
                </p>
                <p className="text-xs text-brand-light/60">
                  {item.role}, {item.company}
                </p>
              </div>
              <span className="rounded-full border border-brand-accent/40 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent">
                {item.impact}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {METRICS.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-brand-light/10 bg-brand-dark/70 p-4 text-center shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
          >
            <p className="text-lg font-semibold text-brand-accent">
              {metric.value}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

