import profileImage from "../assets/profile.png";
import resumePdf from "../assets/Utti_Ramesh_Resume.pdf.pdf";

function Home() {
  return (
    <section
      className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)]"
      id="home"
    >
      <section className="space-y-6 text-center lg:text-left animate-fade-up motion-reduce:animate-none">
        <span className="text-sm font-medium text-brand-light/70">
          Freelance React & Next.js Developer
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-light sm:text-5xl lg:text-6xl">
          I turn slow, confusing UIs into fast, conversion-ready React products.
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-brand-light/70 sm:text-lg lg:mx-0">
          I help founders, product managers, and growing teams ship premium
          frontend experiences that feel effortless to use. From architecture to
          performance optimization, I deliver scalable, business-ready UI.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
          <a
            className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_14px_28px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5"
            href="#contact"
          >
            Start Your Project
          </a>
          <a
            className="btn-secondary rounded-xl px-5 py-3 text-sm font-semibold shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            href="#projects"
          >
            View Case Studies
          </a>
          <a
            className="btn-ghost rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            href={resumePdf}
            download
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-light/60 lg:justify-start">
          {[
            "Freelance React Developer",
            "Frontend Developer India",
            "Next.js Developer",
            "React Performance Optimization",
            "Hire React Developer",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mx-auto grid max-w-md grid-cols-2 gap-4 pt-2 sm:grid-cols-3 lg:mx-0">
          {[
            { value: "7.6+", label: "Years" },
            { value: "30+", label: "Projects" },
            { value: "10+", label: "Enterprise Releases" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-surface p-4 text-center"
            >
              <p className="text-lg font-semibold text-brand-accent">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-light/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center lg:justify-end" aria-hidden="true">
        <div className="relative h-[400px] w-[280px] overflow-hidden rounded-[28px] border border-brand-light/15 bg-brand-dark/60 shadow-[0_16px_30px_rgba(0,0,0,0.35)] sm:h-[460px] sm:w-[320px] lg:h-[520px] lg:w-[360px] animate-float-in motion-reduce:animate-none">
          <img
            className="h-full w-full object-cover grayscale"
            src={profileImage}
            alt="Utti Ramesh, freelance React developer based in Hyderabad"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
              Premium Delivery
            </p>
            <p className="text-lg font-semibold text-brand-light">
              Clean UI. Fast performance. Confident results.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/60 bg-brand-accent/10 px-4 py-2 text-xs font-semibold text-brand-accent">
              Scroll
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;

