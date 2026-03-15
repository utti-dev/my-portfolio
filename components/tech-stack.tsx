"use client"

import { useEffect, useRef } from "react"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Redux", category: "State" },
  { name: "Redux Toolkit", category: "State" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Material UI", category: "Styling" },
  { name: "Jest", category: "Testing" },
  { name: "Playwright", category: "Testing" },
  { name: "Webpack", category: "Build" },
  { name: "Module Federation", category: "Architecture" },
  { name: "REST APIs", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "Git", category: "Tools" },
  { name: "AWS", category: "Cloud" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Agile", category: "Process" },
]

export function TechStack() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest whitespace-nowrap">
            Tech I Work With
          </p>
          <div className="h-px flex-1 bg-border" />
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {/* Duplicate for infinite scroll effect */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 px-5 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default group"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
