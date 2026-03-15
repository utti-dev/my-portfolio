import { MessageSquare, FileSearch, Code2, Rocket, CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your project goals, technical requirements, and timeline. I ask the right questions to understand your business needs.",
    duration: "30 min call",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Proposal & Scope",
    description: "Within 48 hours, you receive a detailed proposal with clear deliverables, timeline, and investment. No hidden costs.",
    duration: "48 hours",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description: "I build your project with weekly demos and progress updates. You see working software, not slide decks.",
    duration: "Agile sprints",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Handoff",
    description: "Thorough testing, documentation, and deployment. Your team gets full knowledge transfer and ongoing support.",
    duration: "Smooth transition",
  },
]

export function Process() {
  return (
    <section id="process" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            From first call to launch in 4 simple steps.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A proven process that eliminates surprises and keeps your project on track.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-6 lg:gap-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl border border-border p-6 lg:p-8 h-full hover:border-primary/50 transition-colors group">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <step.icon size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Duration Badge */}
                <div className="flex items-center gap-2 text-xs text-primary">
                  <CheckCircle2 size={14} />
                  <span>{step.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to start? Most projects kick off within 1-2 weeks.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Schedule your discovery call
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
