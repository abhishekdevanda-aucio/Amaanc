import Link from "next/link"
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Core Expertise", href: "/services/core-expertise" },
    { label: "Enterprise Solutions", href: "/services/enterprise-solutions" },
    { label: "Design & Development", href: "/services/design-development" },
    { label: "Implementation & Support", href: "/services/implementation-support" },
    { label: "Talent & Growth", href: "/services/talent-growth" },
  ],
  industries: [
    { label: "Financial", href: "/industries/financial" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Banking", href: "/industries/banking" },
    { label: "Utilities", href: "/industries/utilities" },
    { label: "Railway", href: "/industries/railway" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Retail", href: "/industries/retail" },
  ],
  company: [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blogs", href: "/blogs" },
    { label: "Newsroom", href: "/newsroom" },
    { label: "Resources", href: "/resources" },
    { label: "Events", href: "/events" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold">Amaanc</span>
            </Link>
            <p className="text-background/70 mb-4 max-w-xs">
              Delivering expert Salesforce implementations, AI-powered solutions, and seamless system integrations since
              2012.
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
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
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
                  123 Business District
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+14155551234" className="hover:text-background transition-colors">
                  +1 (415) 555-1234
                </a>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Amaanc. All rights reserved. Since 2012.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background focus-visible:rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
