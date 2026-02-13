import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cloud, Brain, Workflow, Code2 } from "lucide-react"

const services = [
  {
    icon: Cloud,
    title: "Strategic Salesforce Orchestration",
    subtitle: "Optimizing Customer Ecosystems",
    description:
      "We provide high-level implementation and architectural optimization of Sales, Service, and Marketing Clouds. Our goal is to transform your CRM into a seamless engine for long-term customer success and operational efficiency.",
    href: "/services/salesforce",
    features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Revenue Cloud"],
  },
  {
    icon: Brain,
    title: "Cognitive Enterprise Intelligence",
    subtitle: "Predictive & Agentic Solutions",
    description:
      "Elevating business operations through advanced predictive analytics, machine learning, and intelligent automation. We integrate Einstein AI to turn raw data into actionable insights and autonomous workflows.",
    href: "/services/ai-analytics",
    features: ["Predictive Analytics", "Machine Learning", "Einstein AI", "Data Insights"],
  },
  {
    icon: Workflow,
    title: "Unified Digital Architecture",
    subtitle: "Seamless Ecosystem Connectivity",
    description:
      "Connecting your enterprise landscape through robust API strategies, MuleSoft integration, and middleware excellence. We specialize in legacy modernization and real-time synchronization to ensure total data fluidity.",
    href: "/services/integration",
    features: ["MuleSoft", "API Strategy", "Legacy Modernization", "Real-time Sync"],
  },
  {
    icon: Code2,
    title: "Full-Stack Digital Engineering",
    subtitle: "Resilient SAP & .NET Infrastructure",
    description:
      "Delivering mission-critical engineering including SAP solutions, .NET consultancy, and bespoke application development. From UI/UX design to backend stability, we build scalable platforms for complex organizational needs.",
    href: "/services/enterprise",
    features: ["SAP Solutions", ".NET Consultancy", "Custom Apps", "UI/UX Design"],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 text-center md:text-left">
          <div className="max-w-2xl">
            <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Accelerating <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Enterprise Evolution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leveraging deep technical mastery in Salesforce and AI to turn complex enterprise challenges into measurable commercial advantages.
            </p>
          </div>
          <Link href="/services" className="shrink-0 hidden md:inline-flex">
            <Button variant="outline" className="group inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-1">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl leading-tight mb-1 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
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
        <div className="mt-12 flex justify-center md:hidden">
          <Link href="/services" className="w-full inline-flex">
            <Button variant="outline" size="lg" className="w-full inline-flex items-center justify-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
