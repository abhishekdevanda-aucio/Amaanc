import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Stethoscope, Factory, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const industries = [
  {
    icon: Building2,
    title: "Financial Services",
    description: "Digital banking, wealth management, and regulatory compliance solutions.",
    href: "/industries/financial-services",
    image: "/images/home/industry-financial-services.webp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Patient engagement, care coordination, and health data management.",
    href: "/industries/healthcare",
    image: "/images/home/industry-healthcare.webp",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Supply chain optimization, IoT integration, and smart factory solutions.",
    href: "/industries/manufacturing",
    image: "/images/home/industry-manufacturing.webp",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Omnichannel experiences, customer 360, and personalization at scale.",
    href: "/industries/retail",
    image: "/images/home/industry-retail.webp",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            Industries We Serve
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            Deep Expertise Across <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Key Sectors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our industry-specific solutions address unique challenges with proven methodologies developed over 13+ years
            of experience.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <industry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{industry.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Explore Solutions
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
