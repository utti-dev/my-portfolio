import Link from "next/link"
import { Github, Linkedin, Twitter, MessageCircle } from "lucide-react"

const navigation = {
  main: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Github, href: "https://github.com/uttiramesh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/utti-ramesh-13912320a", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/uttiramesh", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/918985336750", label: "WhatsApp" },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Utti Ramesh
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Senior React & Next.js developer with 7+ years at Thomson Reuters, NICE, 
              and Quest Global. Building fast, scalable frontends that grow your business.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navigation.main.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-medium text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {navigation.social.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </Link>
                )
              })}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Based in Hyderabad, India<br />
              Available globally (IST / UTC+5:30)
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Utti Ramesh. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
