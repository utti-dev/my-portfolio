"use client"

import Image from "next/image"

const companies = [
  {
    name: "Thomson Reuters",
    logo: "/images/logos/thomson-reuters.png",
    duration: "4+ years",
  },
  {
    name: "NICE",
    logo: "/images/logos/nice.png",
    duration: "2+ years",
  },
  {
    name: "Quest Global",
    logo: "/images/logos/quest-global.jpg",
    duration: "1+ year",
  },
]

export function TrustedBy() {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Trusted by teams at
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="group flex flex-col items-center gap-3"
              >
                <div className="relative h-16 w-44 p-2 rounded-lg bg-white/90 hover:bg-white transition-all duration-300 hover:scale-105">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {company.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
