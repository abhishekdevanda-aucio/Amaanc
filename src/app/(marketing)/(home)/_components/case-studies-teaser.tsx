import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    title: "Global Bank Digital Transformation",
    client: "Major Int'l Bank",
    industry: "Banking & Finance",
    description: "Modernized legacy banking systems to enable real-time personalized customer experiences.",
    results: ["40% efficiency boost", "Faster onboarding"],
    image: "/images/home/case-study-global-bank-digital-transformation.png",
    href: "/case-studies/global-bank-transformation",
  },
  {
    title: "Insurance Claims Automation",
    client: "National Insurer",
    industry: "Insurance",
    description: "Implemented AI-driven claims processing to reduce settlement time and improve fraud detection.",
    results: ["60% faster claims", "99.9% accuracy"],
    image: "/images/home/case-study-healthcare-system-integration.webp", // keeping image filename for now to avoid breaking build, ideally rename asset too but out of scope
    href: "/case-studies/insurance-automation",
  },
  {
    title: "Smart Grid Data Management",
    client: "Regional Utility",
    industry: "Utilities",
    description: "Unified data platform for smart meter analytics and predictive grid maintenance.",
    results: ["25% less outages", "$2M annual savings"],
    image: "/images/home/case-study-manufacturing-ai-implementation.webp", // keeping image filename for now
    href: "/case-studies/utilities-grid",
  },
]

export function CaseStudiesTeaser() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
              Real Results for Real Businesses
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Discover how we&apos;ve helped enterprises transform their operations and achieve measurable outcomes.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 hidden md:inline-flex group">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Balanced Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
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
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="font-medium">
                    {study.industry}
                  </Badge>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {study.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
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
          <Button variant="outline" asChild className="w-full">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}
