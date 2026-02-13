const PROJECTS = [
  {
    title: "Music Streaming Dashboard",
    desc: "A responsive analytics dashboard built with React, D3, and realtime data.",
    tags: ["React", "D3", "Realtime"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    span: "lg:col-span-7",
  },
  {
    title: "E-commerce Redesign",
    desc: "A conversion-focused storefront with micro-interactions and fast load times.",
    tags: ["UX", "Performance", "A/B Testing"],
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    title: "Design System Library",
    desc: "Reusable components, tokens, and docs to unify product teams.",
    tags: ["Tokens", "Storybook", "Docs"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    span: "lg:col-span-5",
  },
  {
    title: "SaaS Marketing Site",
    desc: "High-converting landing pages with animated storytelling sections.",
    tags: ["Motion", "Landing", "SEO"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    span: "lg:col-span-7",
  },
];

function Projects() {
  return (
    <main className="flex-1 space-y-8 pb-6">
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold text-brand-dark sm:text-5xl">
          Projects<span className="text-brand-accent">.</span>
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-dark/70 sm:text-lg">
          Selected work that blends clean interfaces, strong UX, and performant
          engineering.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {PROJECTS.map((project, index) => (
          <article
            key={project.title}
            className={`group relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-light shadow-[0_12px_24px_rgba(38,35,65,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_32px_rgba(38,35,65,0.2)] ${project.span} animate-fade-up motion-reduce:animate-none`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/25 via-brand-light/10 to-brand-light/30 opacity-0 transition duration-300 group-hover:opacity-100" />
            <img
              className="h-44 w-full object-cover grayscale transition duration-500 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
            <div className="relative space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-dark/20 bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-dark/70">
                  {project.desc}
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition group-hover:translate-x-1"
                type="button"
              >
                View case study
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;

