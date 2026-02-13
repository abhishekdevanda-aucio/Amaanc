import Link from "next/link"
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react"
import { IndustryNavItem, ServiceNavItem } from "@/data/navigation"

const footerLinks = {
  engage: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Resources", href: "/resources" },
    { label: "Events", href: "/events" },
  ],
}

interface FooterProps {
  industries: IndustryNavItem[]
  services: ServiceNavItem[]
}

export function Footer({ industries, services }: FooterProps) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Amaanc</span>
            </Link>
            <p className="text-background/70 mb-4 max-w-sm leading-relaxed">
              Delivering architectural precision through expert Salesforce implementations, AI-powered innovation, and seamless enterprise engineering since 2012.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@amaanc.com"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          {services.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="text-background/70 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Industries */}
          {industries.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </h3>
              <ul className="space-y-2">
                {industries.map((industry) => (
                  <li key={industry.slug}>
                    <Link href={`/industries/${industry.slug}`} className="text-background/70 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Engage With Us */}
          <div>
            <h3 className="font-semibold mb-4">Engage With Us</h3>
            <ul className="space-y-2">
              {footerLinks.engage.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Botteville Gardens
                  <br />
                  Birmingham, B27 7BF
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@amaanc.com" className="hover:text-background transition-colors">
                  info@amaanc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            {/* Left: Cookie Settings */}
            <div className="w-full md:w-auto text-center md:text-left">
              <Link
                href="/cookies"
                className="hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm"
              >
                Cookie Settings
              </Link>
            </div>

            {/* Middle: Copyright */}
            <div className="w-full md:w-auto text-center order-first md:order-0">
              © 2026 Amaanc. All rights reserved.
            </div>

            {/* Right: Privacy Policy */}
            <div className="w-full md:w-auto text-center md:text-right">
              <Link
                href="/privacy"
                className="hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

