"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"

const roles = [
  "React Developer",
  "Next.js Expert",
  "Performance Optimizer",
  "Frontend Architect",
]

const socialLinks = [
  { icon: Github, href: "https://github.com/uttiramesh", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/utti-ramesh-13912320a", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/uttiramesh", label: "Twitter" },
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-24 lg:pt-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Info */}
          <div className="flex flex-col gap-8">
            {/* Profile Photo */}
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
              <Image
                src="/images/profile.png"
                alt="Utti Ramesh - Freelance React & Next.js Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Label with Typing Animation */}
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Freelance{" "}
                <span className="inline-block min-w-[180px]">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
              Utti Ramesh
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Senior Frontend Developer with 7+ years of experience building 
              <span className="text-foreground font-medium"> React</span> and 
              <span className="text-foreground font-medium"> Next.js</span> applications 
              at Thomson Reuters, NICE, and Quest Global.
            </p>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4 mt-4">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#work" },
                { label: "Projects", href: "#services" },
              ].map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="h-px w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground transition-all duration-300" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building performant, accessible web applications using 
                React, Next.js, TypeScript, and Redux. My work focuses on frontend architecture, 
                performance optimization, and delivering clean, maintainable code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Previously, I worked as a Senior Frontend Developer at NICE on the CXOne platform, 
                as a Software Engineer at Quest Global, and as a Web Developer at Thomson Reuters 
                on the FindLaw platform.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;m currently available for freelance projects and would be happy to discuss 
                how I can help with your frontend development needs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 gap-2"
              >
                <Link href="#contact">
                  Get in Touch
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-secondary rounded-full px-6 gap-2"
              >
                <Link href="#work">
                  View My Work
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-muted-foreground hover:text-foreground rounded-full px-6 gap-2"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download size={16} />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
