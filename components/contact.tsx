"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Clock, Send, ArrowUpRight, Phone, MessageCircle } from "lucide-react"

const projectTypes = [
  { value: "new-app", label: "New Application" },
  { value: "existing", label: "Existing Project" },
  { value: "consulting", label: "Consulting" },
  { value: "other", label: "Other" },
]

const timelines = [
  { value: "1-month", label: "Within 1 month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-months-plus", label: "3+ months" },
  { value: "flexible", label: "Flexible" },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "Click to reveal email",
    href: "mailto:ramesh@rameshutti.com",
    displayValue: "ramesh@rameshutti.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Click to call",
    href: "tel:+918985336750",
    displayValue: "+91 89853 36750",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/918985336750",
    displayValue: "Message me",
  },
  {
    icon: Clock,
    label: "Timezone",
    value: "IST (UTC+5:30)",
    href: null,
    displayValue: null,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    href: null,
    displayValue: null,
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    timeline: "",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Reset form
    setFormData({
      name: "",
      email: "",
      projectType: "",
      timeline: "",
      details: "",
    })
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
            Get in Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Have a project in mind? Send me a message and I&apos;ll get back to you 
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Project type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Timeline
                </label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                >
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="details" className="text-sm font-medium text-foreground">
                Project details
              </label>
              <Textarea
                id="details"
                placeholder="Tell me about your project, goals, and any specific requirements..."
                rows={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="bg-background border-border focus:border-primary resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Response time: within 24 hours on business days.
            </p>
          </form>

          {/* Contact Info & Sidebar */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                const Wrapper = info.href ? "a" : "div"
                const wrapperProps = info.href
                  ? { href: info.href, className: "group" }
                  : {}

                return (
                  <Wrapper key={info.label} {...wrapperProps}>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="p-3 rounded-xl bg-secondary">
                        <Icon size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                      {info.href && (
                        <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </Wrapper>
                )
              })}
            </div>

            {/* Availability Note */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
              <p className="font-medium text-foreground mb-2">
                Currently available for freelance work
              </p>
              <p className="text-muted-foreground">
                I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
