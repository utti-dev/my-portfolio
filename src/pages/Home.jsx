import LiveLocationCard from "../components/LiveLocationCard.jsx";

function Home() {
  return (
    <main
      className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)]"
      id="home"
    >
      <section className="space-y-6 animate-fade-up motion-reduce:animate-none">
        <span className="text-sm font-medium text-brand-dark/70">
          Hey, I'm Luca
        </span>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
          <span className="text-brand-accent">Frontend</span>
          <br />
          Developer
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          I'm a frontend developer based in Italy, I'll help you build
          beautiful websites your users will love.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            className="rounded-xl bg-brand-dark px-5 py-3 text-sm font-semibold text-brand-light shadow-[0_14px_28px_rgba(38,35,65,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(38,35,65,0.3)]"
            href="mailto:hello@lucadcz.com"
          >
            Get in Touch
          </a>
          <a
            className="rounded-xl border border-brand-dark/20 bg-brand-light px-5 py-3 text-sm font-semibold text-brand-dark shadow-[0_12px_24px_rgba(38,35,65,0.16)] transition hover:-translate-y-0.5"
            href="/projects"
          >
            Browse Projects
          </a>
        </div>

        <LiveLocationCard />
      </section>

      <section className="flex justify-center lg:justify-end" aria-hidden="true">
        <div className="flex aspect-square w-64 items-center justify-center rounded-full border border-brand-accent/60 p-5 sm:w-72 lg:w-80 animate-float-in motion-reduce:animate-none">
          <img
            className="h-full w-full rounded-full object-cover grayscale"
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop"
            alt=""
          />
        </div>
      </section>
    </main>
  );
}

export default Home;

