const EXPERIENCE = [
  {
    company: "Apple",
    role: "Engineer",
    period: "May 2018 - Present",
    highlights: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js.",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs.",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps.",
    ],
  },
  {
    company: "Microsoft",
    role: "Frontend Developer",
    period: "Jan 2016 - Apr 2018",
    highlights: [
      "Led UI rebuilds for customer dashboards with React and TypeScript.",
      "Introduced shared UI libraries to reduce design debt and speed delivery.",
    ],
  },
  {
    company: "Spotify",
    role: "Product Designer",
    period: "Aug 2014 - Dec 2015",
    highlights: [
      "Partnered with engineering to ship responsive landing pages and tours.",
      "Ran design sprints focused on onboarding and retention.",
    ],
  },
];

function Experience() {
  return (
    <main className="flex-1 space-y-8 pb-6">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-brand-dark sm:text-5xl">
          Experience<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          A timeline of the teams, products, and impacts that shaped my craft
          as a frontend developer.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-3 hidden h-full w-px bg-brand-dark/20 sm:block" />
        <div className="space-y-6">
          {EXPERIENCE.map((item, index) => (
            <article
              key={item.company}
              className="group relative animate-fade-up sm:pl-14 motion-reduce:animate-none"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="absolute left-2 top-7 hidden h-6 w-6 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-light text-brand-accent shadow-[0_6px_14px_rgba(38,35,65,0.12)] sm:flex">
                <span className="h-2 w-2 rounded-full bg-brand-accent" />
              </span>
              <div className="rounded-2xl border border-brand-dark/10 bg-brand-light p-6 shadow-[0_12px_24px_rgba(38,35,65,0.14)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_32px_rgba(38,35,65,0.2)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-semibold text-brand-dark">
                      {item.role}
                    </h3>
                    <span className="text-sm text-brand-dark/50">@</span>
                    <span className="text-lg font-semibold text-brand-accent">
                      {item.company}
                    </span>
                  </div>
                  <span className="rounded-full bg-brand-accent/15 px-3 py-1 text-xs font-semibold text-brand-dark">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-3 text-sm text-brand-dark/70">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-brand-accent/40 bg-brand-accent/15 text-brand-dark">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3 w-3"
                          aria-hidden="true"
                        >
                          <path d="M5 10l3 3 7-7" />
                        </svg>
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Experience;

