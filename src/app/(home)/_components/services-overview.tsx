import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Brain, Workflow, Code2 } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Salesforce Solutions",
    description:
      "End-to-end Salesforce implementations including Sales Cloud, Service Cloud, Marketing Cloud, and custom app development.",
    href: "/services/salesforce",
    features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "CPQ"],
  },
  {
    icon: Brain,
    title: "AI & Analytics",
    description:
      "Harness the power of artificial intelligence with predictive analytics, machine learning models, and intelligent automation.",
    href: "/services/ai-analytics",
    features: ["Predictive Analytics", "ML Models", "Einstein AI", "Data Intelligence"],
  },
  {
    icon: Workflow,
    title: "System Integration",
    description:
      "Connect your enterprise systems seamlessly with robust API development, middleware solutions, and real-time data sync.",
    href: "/services/integration",
    features: ["API Development", "MuleSoft", "Data Sync", "Middleware"],
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Bespoke solutions tailored to your unique business requirements, built with modern technologies and best practices.",
    href: "/services/custom-development",
    features: ["Web Apps", "Mobile Apps", "Portals", "Automation"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">
            Comprehensive Solutions for Digital Transformation
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From Salesforce expertise to AI-powered innovation, we deliver end-to-end solutions that drive measurable
            business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span key={feature} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
