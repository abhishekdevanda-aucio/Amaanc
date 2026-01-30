import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Brain, Workflow, Code2 } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Salesforce Consultancy",
    description:
      "Strategic implementation and optimization of Sales Cloud, Service Cloud, and Marketing Cloud to drive customer success.",
    href: "/services/salesforce",
    features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Einstein AI"],
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Transforming business operations with predictive analytics, machine learning models, and intelligent automation.",
    href: "/services/ai-analytics",
    features: ["Predictive Analytics", "Machine Learning", "Process Automation", "Data Insights"],
  },
  {
    icon: Workflow,
    title: "System Integration",
    description:
      "Seamlessly connecting your enterprise ecosystem with robust API strategies and middleware solutions.",
    href: "/services/integration",
    features: ["API Development", "MuleSoft", "Legacy Modernization", "Real-time Sync"],
  },
  {
    icon: Code2,
    title: "Enterprise Solutions",
    description:
      "End-to-end digital engineering including .NET, SAP consultancy, and custom mobile application development.",
    href: "/services/enterprise",
    features: [".NET Consultancy", "SAP Solutions", "Mobile Apps", "UI/UX Design"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Comprehensive Solutions for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Digital Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
          <Link href="/services" className="inline-flex">
            <Button variant="outline" size="lg" className="inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
