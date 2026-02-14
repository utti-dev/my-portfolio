import LiveLocationCard from "../components/LiveLocationCard.jsx";
import profileImage from "../assets/profile.png";
import resumePdf from "../assets/Utti_Ramesh_Resume.pdf.pdf";

function Home() {
  return (
    <section
      className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)]"
      id="home"
    >
      <section className="space-y-6 animate-fade-up motion-reduce:animate-none">
        <span className="text-sm font-medium text-brand-light/70">
          Hey, I'm Luca
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-light sm:text-5xl lg:text-6xl">
          <span className="text-brand-accent">Frontend</span>
          <br />
          Developer
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-brand-light/70 sm:text-lg">
          I'm a frontend developer based in Italy, I'll help you build
          beautiful websites your users will love.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            className="rounded-xl border border-brand-accent/70 bg-brand-accent/10 px-5 py-3 text-sm font-semibold text-brand-accent shadow-[0_14px_28px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:bg-brand-accent/20"
            href="mailto:uttiramesh53@gmail.com"
          >
            Get in Touch
          </a>
          <a
            className="rounded-xl border border-brand-light/30 bg-brand-dark/50 px-5 py-3 text-sm font-semibold text-brand-light shadow-[0_12px_24px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5"
            href="#projects"
          >
            Browse Projects
          </a>
          <a
            className="rounded-xl border border-brand-accent/50 bg-transparent px-5 py-3 text-sm font-semibold text-brand-accent transition hover:-translate-y-0.5 hover:bg-brand-accent/10"
            href={resumePdf}
            download
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-light/60">
          {["UI Engineering", "Product Design", "Web Performance"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand-light/15 bg-brand-dark/60 px-3 py-2"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid max-w-md grid-cols-2 gap-4 pt-2 sm:grid-cols-3">
          {[
            { value: "6+", label: "Years" },
            { value: "28+", label: "Projects" },
            { value: "14+", label: "Clients" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-brand-light/10 bg-brand-dark/60 p-4 text-center shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
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

        <LiveLocationCard />
      </section>

      <section className="flex justify-center lg:justify-end" aria-hidden="true">
        <div className="relative h-[420px] w-[280px] overflow-hidden rounded-[32px] border border-brand-light/15 bg-brand-dark/70 shadow-[0_18px_36px_rgba(0,0,0,0.45)] sm:h-[480px] sm:w-[320px] lg:h-[520px] lg:w-[360px] animate-float-in motion-reduce:animate-none">
          <img
            className="h-full w-full object-cover grayscale"
            src={profileImage}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-accent">
              Featured
            </p>
            <p className="text-lg font-semibold text-brand-light">
              Where style walks in, doubt walks out.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-accent/60 bg-brand-accent/10 px-4 py-2 text-xs font-semibold text-brand-accent">
              Swipe
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;

