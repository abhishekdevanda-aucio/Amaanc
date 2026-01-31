import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Stethoscope, Factory, ShoppingCart, Landmark, TrainFront } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const industries = [
  {
    icon: Landmark,
    title: "Finance",
    description: "Wealth management, fintech integration, and regulatory compliance.",
    href: "/industries/finance",
    image: "/images/home/industry-finance-services.webp",
  },
  {
    icon: Building2,
    title: "Banking",
    description: "Digital banking transformation, secure customer portals, and personalization.",
    href: "/industries/banking",
    image: "/images/home/industry-banking.webp",
  },
  {
    icon: Factory, // Using Factory for Utilities as generic industrial icon
    title: "Utilities",
    description: "Grid modernization, customer engagement, and field service management.",
    href: "/industries/utilities",
    image: "/images/home/industry-utilities.webp",
  },
  {
    icon: TrainFront,
    title: "Railway",
    description: "Operational efficiency, passenger experience, and asset management.",
    href: "/industries/railway",
    image: "/images/home/industry-railway.webp",
  },
  {
    icon: Stethoscope, // Using Stethoscope/Shield for insurance usually, keeping Stethoscope if health insurance, but Briefcase/Shield better for general. Let's switch to Shield or similar if available, or keep Briefcase.
    title: "Insurance",
    description: "Claims processing automation, policy management, and customer insights.",
    href: "/industries/insurance",
    image: "/images/home/industry-insurance.webp",
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description: "Omnichannel commerce, supply chain visibility, and loyalty programs.",
    href: "/industries/retail",
    image: "/images/home/industry-retail.webp",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden shrink-0">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <industry.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">{industry.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary mt-auto">
                  Explore Solutions
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Other Industries Messaging */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-sm">
          <blockquote className="text-lg md:text-xl text-foreground font-medium italic mb-6">
            &ldquo;While we have deep experience in the industries above, our solutions are adaptable. We welcome the opportunity to partner with clients in any sector seeking digital transformation.&rdquo;
          </blockquote>
          <Link href="/contact" className="inline-flex">
            <Button variant="outline">
              Discuss Your Industry Needs
            </Button>
          </Link>

        </div>
      </div>
    </section>
  )
}
