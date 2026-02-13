import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "Global Banking Architecture Modernization",
    client: "Major Int'l Bank",
    industry: "Banking & Finance",
    description: "Re-engineering legacy financial infrastructure to support real-time, AI-driven personalized customer journeys and secure global compliance.",
    results: ["Over 60% faster Loan Closing", "Faster Onboarding"],
    image: "/images/home/case-study-global-bank-digital-transformation.png",
    href: "/case-studies/global-bank-transformation",
  },
  {
    title: "Crisis-Scale Response & Enquiry Orchestration",
    client: "Govt Health Dept",
    industry: "Public Health Emergency Response",
    description: "Architecting a high-capacity automation framework to manage the surge of public enquiries. By implementing AI-driven triage, we stabilized mission-critical communications and ensured high-priority cases were addressed with architectural precision.",
    results: ["85% Faster Resolution", ">50% Fewer Escalations"],
    image: "/images/home/case-study-healthcare-system-integration.webp",
    href: "/case-studies/public-health-emergency",
  },
  {
    title: "Predictive Grid Intelligence",
    client: "Regional Utility",
    industry: "Energy & Utilities",
    description: "Harnessing real-time Data Cloud analytics to optimize smart meter maintenance and strengthen infrastructure resilience.",
    results: ["25% Improved Stability", "Better Reporting"],
    image: "/images/home/case-study-manufacturing-ai-implementation.webp",
    href: "/case-studies/utilities-grid",
  },
]

export function CaseStudiesTeaser() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
              Proven Performance
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
              Measurable Impact at <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Enterprise Scale
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Explore how we architect resilient solutions that solve complex technical challenges and deliver sustainable commercial growth for industry leaders.
            </p>
          </div>
          <Link href="/case-studies" className="shrink-0 hidden md:inline-flex">
            <Button
              variant="outline"
              className="group inline-flex items-center"
            >
              Explore Our Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

        </div>

        {/* Balanced Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group flex flex-col bg-background border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
            >
              {/* Image Container */}
              <div className="aspect-video relative overflow-hidden bg-muted">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <div className="h-10 w-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4 gap-2">
                  <Badge variant="secondary" className="font-medium truncate">
                    {study.industry}
                  </Badge>
                  {/* Client name hidden on small screens if needed, or kept simple */}
                  {/* <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
                    {study.client}
                  </span> */}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {study.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                  {study.description}
                </p>

                {/* KPI/Results Footer */}
                <div className="pt-5 border-t border-border/50 space-y-2">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 md:hidden text-center">
          <Link href="/case-studies" className="w-full inline-flex">
            <Button
              variant="outline"
              className="w-full inline-flex items-center justify-center gap-2"
            >
              Explore Our Portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
