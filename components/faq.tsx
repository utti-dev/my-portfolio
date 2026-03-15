"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What's your hourly or project rate?",
    answer: "I work on both fixed-price projects and hourly/monthly retainers. Rates depend on complexity and timeline. After our discovery call, I provide a detailed proposal with transparent pricing — no hidden fees. Most clients find my rates competitive for senior-level React expertise.",
  },
  {
    question: "How do you handle timezone differences with US/EU clients?",
    answer: "I've worked with US and European teams for 7+ years. I overlap with US East Coast mornings (8-11 AM EST) and EU afternoons. For async work, I provide detailed daily updates on Slack/Notion and turn around feedback within 12-24 hours.",
  },
  {
    question: "What's your development process like?",
    answer: "Weekly sprint cycles with demo calls every Friday (showing working software, not slides). I use Linear/Jira for task tracking, GitHub for code reviews, and Slack/Teams for daily communication. You'll have full visibility into progress at all times.",
  },
  {
    question: "Can you integrate with our existing team and tools?",
    answer: "Absolutely. I've embedded with enterprise teams at Thomson Reuters and NICE, following their existing workflows, code standards, and CI/CD pipelines. I adapt to your tools — whether that's GitHub, GitLab, Bitbucket, or your custom setup.",
  },
  {
    question: "What if the project scope changes mid-way?",
    answer: "Scope changes happen — I get it. For fixed-price projects, I'll provide a change order with updated timeline and cost. For retainer clients, we simply reprioritize within your monthly hours. Either way, full transparency and no surprises.",
  },
  {
    question: "How do I know my code will be maintainable after you leave?",
    answer: "Every project includes comprehensive documentation, inline code comments, and a handoff session. I write clean, TypeScript-first code following industry best practices. Your team will be able to maintain and extend the codebase without me.",
  },
  {
    question: "Do you sign NDAs and work-for-hire agreements?",
    answer: "Yes, standard practice. I'm happy to sign your NDA, MSA, or work-for-hire agreement before we begin. All source code is owned by you upon final payment.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              FAQ
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Common questions answered.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working together. Can&apos;t find what you&apos;re looking for? 
            <a href="#contact" className="text-primary hover:underline ml-1">Get in touch</a>.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
