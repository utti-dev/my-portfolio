"use client"

import { useState } from "react"
import { Code2, Layers, Zap, Smartphone, Accessibility, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "React & Next.js Development",
    description: "Building production-ready web applications using React, Next.js, TypeScript, and modern frontend tools.",
  },
  {
    icon: Layers,
    title: "Frontend Architecture",
    description: "Designing scalable component systems, state management solutions, and micro-frontend architectures.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Improving Core Web Vitals, implementing code-splitting, lazy loading, and bundle optimization.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Development",
    description: "Creating mobile-first, accessible interfaces that work across all devices and screen sizes.",
  },
  {
    icon: Accessibility,
    title: "Code Refactoring",
    description: "Modernizing legacy codebases with TypeScript migration, better patterns, and improved test coverage.",
  },
  {
    icon: Database,
    title: "API Integration",
    description: "Connecting frontends with REST and GraphQL APIs, handling state management and data fetching.",
  },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            What I Can Help With
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I offer frontend development services for teams and businesses looking for 
            experienced React and Next.js expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? "bg-card border-primary/50 shadow-lg shadow-primary/5" 
                    : "bg-card/50 border-border hover:border-border/80"
                }`}
              >
                {/* Icon */}
                <div className={`mb-6 p-3 rounded-xl w-fit transition-colors duration-300 ${
                  isHovered ? "bg-primary/10" : "bg-secondary"
                }`}>
                  <Icon 
                    size={24} 
                    className={`transition-colors duration-300 ${
                      isHovered ? "text-primary" : "text-muted-foreground"
                    }`} 
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator on hover */}
                <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                  isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                }`}>
                  <ArrowRight size={20} className="text-primary" />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
