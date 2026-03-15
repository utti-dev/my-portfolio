"use client"

import { TrendingUp, Lightbulb, Code, RefreshCw, Globe, Clock, CheckCircle2 } from "lucide-react"

const principles = [
  {
    icon: TrendingUp,
    title: "Quality focused",
    description: "I write clean, maintainable code with proper testing and documentation.",
  },
  {
    icon: Lightbulb,
    title: "Clear communication",
    description: "Regular updates, transparent timelines, and prompt responses to questions.",
  },
  {
    icon: Code,
    title: "Best practices",
    description: "Following industry standards for performance, accessibility, and security.",
  },
  {
    icon: RefreshCw,
    title: "Continuous learning",
    description: "Staying updated with the latest frontend technologies and patterns.",
  },
]

const whyWorkWithMe = [
  "7+ years of professional experience in frontend development.",
  "Worked at Thomson Reuters, NICE, and Quest Global.",
  "Experienced with React, Next.js, TypeScript, and modern tooling.",
  "Received awards for technical excellence at previous companies.",
]

const communicationStyle = [
  "Regular progress updates via email or Slack.",
  "Available for video calls during overlapping hours.",
  "Clear documentation for code and project decisions.",
]

export function Philosophy() {
  return (
    <section id="philosophy" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            How I Work
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A few things about my approach to development and collaboration.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <div
                key={principle.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-xl bg-secondary w-fit group-hover:bg-primary/10 transition-colors">
                  <Icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust & Working Style */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Why Work With Me */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Why work with me
            </h3>
            <ul className="space-y-4">
              {whyWorkWithMe.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Communication Style */}
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Communication style
            </h3>
            <ul className="space-y-4">
              {communicationStyle.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Availability Card */}
        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  Currently Accepting Projects
                </h4>
                <p className="text-muted-foreground">
                  Available for freelance engagements starting now
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground">
                  Hyderabad, India — Working with US, EU, APAC
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                Reply within 24 hours
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            I overlap with US mornings and EU afternoons for real-time collaboration. 
            Prefer async? I document everything and provide daily progress updates.
          </p>
        </div>
      </div>
    </section>
  )
}
