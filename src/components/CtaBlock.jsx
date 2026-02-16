function CtaBlock({ eyebrow, title, description, primary, secondary }) {
  return (
    <section className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/60">
            {eyebrow}
          </p>
        )}
        <h3 className="text-xl font-semibold text-brand-light">{title}</h3>
        <p className="max-w-2xl text-sm text-brand-light/70">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        {primary && (
          <a
            className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_14px_28px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5"
            href={primary.href}
          >
            {primary.label}
          </a>
        )}
        {secondary && (
          <a
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            href={secondary.href}
          >
            {secondary.label}
          </a>
        )}
      </div>
    </section>
  );
}

export default CtaBlock;

