import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Stats } from "@/components/stats"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Process } from "@/components/process"
import { Philosophy } from "@/components/philosophy"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechStack />
      <Stats />
      <Services />
      <CaseStudies />
      <Process />
      <Philosophy />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
