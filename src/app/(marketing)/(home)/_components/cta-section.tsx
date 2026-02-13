import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-12 lg:p-16 shadow-2xl">

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance tracking-tight">
                Architect Your Enterprise Future
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                Leverage our 14+ years of technical leadership in Salesforce, AI, and Complex Integrations to drive measurable commercial impact. Let’s discuss how we can orchestrate a resilient digital roadmap tailored to your global objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto inline-flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule a Strategic Consultation
                </Button>
              </Link>

              <Link href="/services" className="inline-flex">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2 hover:border-primary-foreground"
                >
                  Explore Our Methodology
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            Strategic Partner to 150+ Global Enterprises Since 2012 • 98% Technical Excellence Rating
          </p>
        </div>
      </div>
    </section>
  )
}
