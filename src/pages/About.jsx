function About() {
  return (
    <main className="flex-1 space-y-8 pb-6" id="about">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-brand-dark sm:text-5xl">
          About me<span className="text-brand-accent">.</span>
        </h2>
        <div className="flex max-w-2xl gap-3 text-brand-dark/70">
          <span className="mt-1 h-6 w-1 rounded-full bg-brand-accent" />
          <p className="text-base leading-relaxed sm:text-lg">
            Developing beautiful and functional websites is what I love doing,
            and that's why I give my all in every new challenge.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-brand-dark">My Stack.</h3>
          <div className="rounded-2xl bg-brand-light/70 p-4 shadow-[0_10px_22px_rgba(38,35,65,0.12)]">
            <div className="flex flex-wrap gap-2">
              {[
                "Web Design",
                "UI/UX Expertise",
                "HTML/CSS",
                "Team Player",
                "JavaScript Proficiency",
                "React",
                "Problem Solving",
                "Trends Research",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark/80 shadow-[0_6px_14px_rgba(38,35,65,0.12)]"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-accent" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-brand-dark">
            My Special Place.
          </h3>
          <div className="rounded-2xl border border-brand-dark/10 bg-brand-light p-4 shadow-[0_12px_24px_rgba(38,35,65,0.14)]">
            <div
              className="globe-alt"
              role="img"
              aria-label="World map pointing to Hyderabad"
              style={{ "--lat": "17.4065", "--lon": "78.4772" }}
            >
              <div className="globe-alt__sphere">
                <div className="globe-alt__spin">
                  <div className="globe-alt__map">
                    <div className="globe-alt__marker">
                      <span />
                    </div>
                  </div>
                  <div className="globe-alt__grid" />
                </div>
                <div className="globe-alt__glow" />
              </div>
              <div className="globe-alt__halo animate-drift motion-reduce:animate-none" />
            </div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand-accent/40 bg-brand-accent/15 px-3 py-1 text-xs font-semibold text-brand-dark">
              Hyderabad, India
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

export default About;

