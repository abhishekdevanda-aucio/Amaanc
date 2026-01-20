import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Global Bank Digital Transformation",
    client: "Fortune 500 Bank",
    industry: "Financial Services",
    results: ["40% increase in sales efficiency", "60% faster customer onboarding", "$2M annual savings"],
    image: "/placeholder.svg",
    href: "/case-studies/global-bank-transformation",
  },
  {
    title: "Healthcare System Integration",
    client: "Regional Healthcare Network",
    industry: "Healthcare",
    results: ["Unified 15 hospital systems", "Real-time patient data access", "30% reduction in admin time"],
    image: "/placeholder.svg",
    href: "/case-studies/healthcare-integration",
  },
  {
    title: "Manufacturing AI Implementation",
    client: "Global Manufacturer",
    industry: "Manufacturing",
    results: ["25% reduction in downtime", "Predictive maintenance enabled", "15% cost savings"],
    image: "/placeholder.svg",
    href: "/case-studies/manufacturing-ai",
  },
]

export function CaseStudiesTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">Real Results for Real Businesses</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover how we&apos;ve helped enterprises transform their operations and achieve measurable outcomes.
            </p>
          </div>
          <Button variant="outline" asChild className="shrink-0 bg-transparent">
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Featured Case Study */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Link
            href={caseStudies[0].href}
            className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={caseStudies[0].image || "/placeholder.svg"}
                alt={caseStudies[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <Badge variant="secondary" className="mb-3">
                {caseStudies[0].industry}
              </Badge>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {caseStudies[0].title}
              </h3>
              <p className="text-muted-foreground mb-4">{caseStudies[0].client}</p>
              <ul className="space-y-2">
                {caseStudies[0].results.map((result) => (
                  <li key={result} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </Link>

          {/* Secondary Case Studies */}
          <div className="flex flex-col gap-6">
            {caseStudies.slice(1).map((study) => (
              <Link
                key={study.title}
                href={study.href}
                className="group flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-all"
              >
                <div className="w-32 h-24 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {study.industry}
                  </Badge>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{study.client}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
