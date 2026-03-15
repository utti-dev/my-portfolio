"use client"

import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const engagementTypes = [
  {
    name: "Project-Based",
    description: "For well-defined projects with clear requirements and timeline.",
    features: [
      "Fixed scope and deliverables",
      "Milestone-based payments",
      "Source code ownership",
      "Post-launch support period",
    ],
    cta: "Discuss Project",
    popular: false,
  },
  {
    name: "Monthly Retainer",
    description: "For ongoing development work and continuous support.",
    features: [
      "Dedicated hours per month",
      "Flexible task allocation",
      "Regular progress updates",
      "Direct communication",
    ],
    cta: "Learn More",
    popular: true,
  },
  {
    name: "Consulting",
    description: "For code reviews, architecture advice, or technical guidance.",
    features: [
      "Code review and feedback",
      "Architecture recommendations",
      "Performance audit",
      "Documentation",
    ],
    cta: "Get in Touch",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Engagement Models
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            Ways to Work Together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I offer different engagement options depending on your project needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {engagementTypes.map((type) => (
            <div
              key={type.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:border-primary/50 ${
                type.popular
                  ? "bg-primary/5 border-primary/30"
                  : "bg-card border-border"
              }`}
            >
              {type.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {type.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {type.description}
              </p>

              <ul className="space-y-3 mb-8">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full gap-2 ${
                  type.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <Link href="#contact">
                  {type.cta}
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-12">
          All engagements start with a free 30-minute discovery call to understand your needs.
        </p>
      </div>
    </section>
  )
}
