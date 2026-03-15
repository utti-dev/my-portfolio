"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    year: "2022-2025",
    company: "NICE",
    role: "Senior Front-End Developer / Team Lead",
    title: "CXOne Agent Performance Dashboard",
    description: "Developed performance dashboards for the CXOne contact center platform using React, Next.js, and TypeScript. Implemented micro-frontend architecture with Module Federation and optimized Core Web Vitals.",
    responsibilities: "Led frontend development, implemented SSR/CSR hybrid strategy, code splitting, and lazy loading. Worked with Redux Toolkit for state management.",
    stack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Module Federation", "Jest", "AWS"],
  },
  {
    id: 2,
    year: "2021-2022",
    company: "Quest Global",
    role: "Sr. Software Engineer",
    title: "AI-Enhanced Metrics Dashboard",
    description: "Built a real-time analytics dashboard for manufacturing data using React and Redux. Created modular, reusable UI components with optimized render cycles.",
    responsibilities: "Developed UI components, integrated REST APIs, implemented loading states and error handling. Focused on performance optimization for data-heavy screens.",
    stack: ["React", "Redux", "JavaScript", "REST APIs", "Jest", "Postman"],
  },
  {
    id: 3,
    year: "2017-2021",
    company: "Thomson Reuters",
    role: "Web Developer",
    title: "FindLaw Attorney Websites Platform",
    description: "Developed responsive websites for law firms on the FindLaw platform. Focused on mobile-first design, performance optimization, and SEO best practices.",
    responsibilities: "Built responsive layouts, optimized page load times, implemented caching strategies, and maintained brand consistency across multiple sites.",
    stack: ["HTML5", "CSS3", "JavaScript", "WordPress", "Bootstrap", "REST APIs"],
  },
]

export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextCase = () => {
    setActiveIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevCase = () => {
    setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  return (
    <section id="work" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Case Studies
            </h2>
            <p className="text-muted-foreground mt-2">
              Projects I have worked on at previous companies.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevCase}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
              aria-label="Previous case study"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextCase}
              className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-colors"
              aria-label="Next case study"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveIndex(index)}
              className={`group text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeIndex === index
                  ? "bg-card border-primary/50 shadow-lg shadow-primary/5"
                  : "bg-card/50 border-border hover:border-border/80"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary">
                  {study.company}
                </span>
                <span className="text-sm text-muted-foreground">{study.year}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {study.role}
              </p>
            </button>
          ))}
        </div>

        {/* Active Case Study Detail */}
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {caseStudies[activeIndex].company}
                  </span>
                  <span className="text-muted-foreground">
                    {caseStudies[activeIndex].year}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                  {caseStudies[activeIndex].title}
                </h3>
                <p className="text-muted-foreground">
                  {caseStudies[activeIndex].role}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    Overview
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudies[activeIndex].description}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">
                    My Responsibilities
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {caseStudies[activeIndex].responsibilities}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <div>
                <h4 className="font-medium text-foreground mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeIndex].stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
