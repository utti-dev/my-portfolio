"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 7, suffix: "+", label: "Years of Experience", decimals: 0 },
  { value: 3, suffix: "", label: "Companies Worked With", decimals: 0 },
  { value: 20, suffix: "+", label: "Projects Delivered", decimals: 0 },
  { value: 3, suffix: "", label: "Awards Received", decimals: 0 },
]

function AnimatedNumber({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setDisplayValue(value)
              clearInterval(timer)
            } else {
              setDisplayValue(current)
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
      {displayValue.toFixed(decimals)}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="py-20 lg:py-32 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <AnimatedNumber 
                value={stat.value} 
                suffix={stat.suffix} 
                decimals={stat.decimals} 
              />
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 lg:mt-24 p-8 lg:p-12 bg-card rounded-2xl border border-border">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2">
                Looking for a frontend developer?
              </h3>
              <p className="text-muted-foreground max-w-xl">
                I&apos;m available for freelance projects. Let&apos;s discuss how I can help 
                with your React or Next.js development needs.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
