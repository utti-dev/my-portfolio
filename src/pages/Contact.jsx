function Contact() {
  return (
    <section className="space-y-8 pb-6" id="contact">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
          <span className="h-px w-10 bg-brand-accent" />
          Contact
        </div>
        <h2 className="text-4xl font-semibold text-brand-light sm:text-5xl">
          Contact Me<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          Let's build something memorable together. Share a quick note and I'll
          get back to you within 24-48 hours.
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
          <label className="space-y-2 text-sm font-medium text-brand-light/70">
            Project details
            <textarea
              className="min-h-[140px] w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="Tell me about your project goals..."
            />
          </label>
          <button
            className="btn-primary w-full rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_14px_28px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 sm:w-auto"
            type="submit"
          >
            Send Message
          </button>
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
            Available for new freelance projects starting next month.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

