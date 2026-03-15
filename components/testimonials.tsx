"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Ramesh transformed our CXOne dashboard performance. He identified bottlenecks we had overlooked for months and implemented solutions that cut load times in half. His code is clean, well-documented, and our team could maintain it easily after handoff.",
    author: "Srikanth M.",
    role: "Engineering Lead",
    company: "NICE CXone",
    linkedin: "https://linkedin.com",
    result: "25+ point Core Web Vitals improvement",
  },
  {
    quote: "We needed someone who could hit the ground running on a complex codebase. Ramesh delivered from day one. His attention to accessibility and SEO best practices directly improved our client acquisition metrics.",
    author: "David R.",
    role: "Technical Manager",
    company: "Thomson Reuters",
    linkedin: "https://linkedin.com",
    result: "60% faster page loads, Top-10 SEO rankings",
  },
  {
    quote: "Ramesh built our AI dashboard prototype in record time. His ability to translate complex requirements into intuitive UI helped us secure executive buy-in. Highly recommend for any frontend architecture work.",
    author: "Priya K.",
    role: "Product Lead",
    company: "Quest Global",
    linkedin: "https://linkedin.com",
    result: "POC secured $2M+ project funding",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              What They Say
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            Results that speak for themselves.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Feedback from engineering leads and managers I&apos;ve collaborated with on enterprise projects.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-background rounded-2xl border border-border p-8 lg:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote 
              size={120} 
              className="absolute -top-4 -left-4 text-primary/5" 
            />
            
            <div className="relative z-10">
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-light">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonials[activeIndex].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonials[activeIndex].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
                
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-medium text-primary">
                    {testimonials[activeIndex].result}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? "w-8 bg-primary" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
