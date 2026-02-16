function Contact() {
  return (
    <section className="space-y-8 pb-6" id="contact">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Contact
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Start your project<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          Tell me about your product goals and timelines. I reply within 24
          hours with next steps and a clear project plan.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <form className="card-surface space-y-4 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-brand-light/70">
              Name
              <input
                className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-brand-light/70">
              Email
              <input
                className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                type="email"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-brand-light/70">
              Project type
              <select className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30">
                <option>New product</option>
                <option>Frontend rebuild</option>
                <option>Performance optimization</option>
                <option>UI/UX improvements</option>
              </select>
            </label>
            <label className="space-y-2 text-sm font-medium text-brand-light/70">
              Timeline
              <select className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30">
                <option>2-4 weeks</option>
                <option>1-2 months</option>
                <option>2-3 months</option>
                <option>Flexible</option>
              </select>
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-brand-light/70">
            Project details
            <textarea
              className="min-h-[140px] w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="Share goals, scope, and current challenges..."
            />
          </label>
          <div className="flex flex-wrap items-center gap-3">
            <button
              className="btn-primary w-full rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_14px_28px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 sm:w-auto"
              type="submit"
            >
              Send Project Details
            </button>
            <a
              className="btn-secondary w-full rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 sm:w-auto"
              href="mailto:uttiramesh53@gmail.com?subject=Free%2030-min%20Consultation"
            >
              Book a Free 30-min Consultation
            </a>
          </div>
          <p className="text-xs text-brand-light/60">
            Response time: within 24 hours on business days.
          </p>
        </form>

        <div className="space-y-4">
          {[
            { label: "Email", value: "uttiramesh53@gmail.com" },
            { label: "Timezone", value: "IST (UTC+5:30)" },
            { label: "Location", value: "Hyderabad, India" },
          ].map((item) => (
            <div
              key={item.label}
              className="card-surface p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-light/50">
                {item.label}
              </p>
              <p className="mt-2 text-base font-semibold text-brand-light">
                {item.value}
              </p>
            </div>
          ))}
          <div className="card-surface p-6 text-sm text-brand-light">
            Currently accepting freelance projects for the next 2–3 weeks.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

