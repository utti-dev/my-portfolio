function Contact() {
  return (
    <main className="flex-1 space-y-8 pb-6">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-brand-dark sm:text-5xl">
          Contact Me<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          Let's build something memorable together. Share a quick note and I'll
          get back to you within 24-48 hours.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <form className="space-y-4 rounded-2xl border border-brand-dark/10 bg-brand-light p-6 shadow-[0_12px_24px_rgba(38,35,65,0.14)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-brand-dark/70">
              Name
              <input
                className="w-full rounded-xl border border-brand-dark/20 bg-brand-light px-4 py-3 text-sm text-brand-dark outline-none transition placeholder:text-brand-dark/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                type="text"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-brand-dark/70">
              Email
              <input
                className="w-full rounded-xl border border-brand-dark/20 bg-brand-light px-4 py-3 text-sm text-brand-dark outline-none transition placeholder:text-brand-dark/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                type="email"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-brand-dark/70">
            Project details
            <textarea
              className="min-h-[140px] w-full rounded-xl border border-brand-dark/20 bg-brand-light px-4 py-3 text-sm text-brand-dark outline-none transition placeholder:text-brand-dark/50 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="Tell me about your project goals..."
            />
          </label>
          <button
            className="w-full rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-brand-light shadow-[0_14px_28px_rgba(38,35,65,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(38,35,65,0.3)] sm:w-auto"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-4">
          {[
            { label: "Email", value: "hello@lucadcz.com" },
            { label: "Phone", value: "+39 123 456 7890" },
            { label: "Location", value: "Milan, Italy" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-brand-dark/10 bg-brand-light p-6 shadow-[0_12px_24px_rgba(38,35,65,0.14)]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-dark/50">
                {item.label}
              </p>
              <p className="mt-2 text-base font-semibold text-brand-dark">
                {item.value}
              </p>
            </div>
          ))}
          <div className="rounded-2xl border border-brand-accent/40 bg-brand-accent/15 p-6 text-sm text-brand-dark">
            Available for new freelance projects starting next month.
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;

