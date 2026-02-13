import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Amaanc redefined our technical landscape, evolving a standard CRM into a high-performance Cognitive Intelligence platform. Their architectural mastery in Salesforce and AI integration has provided us with a distinct, data-driven competitive edge.",
    author: "Sarah Chen",
    title: "Director",
    company: "Global Financial Services",
    image: "/images/home/testimonial-1.webp",
  },
  {
    quote:
      "In high-stakes environments, technical resilience is paramount. Amaanc’s deep governance expertise and precision in complex system integration stabilized our infrastructure during critical health emergencies, delivering an 85% improvement in response velocity.",
    author: "Dr. Michael Roberts",
    title: "VP",
    company: "Public Sector Health",
    image: "/images/home/testimonial-2.webp",
  },
  {
    quote:
      "Partnering with Amaanc since 2015 has been foundational to our growth. Their commitment to Full-Lifecycle Orchestration and consistent delivery of innovative, scalable solutions ensures our enterprise remains at the forefront of digital excellence.",
    author: "Jennifer Walsh",
    title: "VP of Technology",
    company: "FTSE 100 Retailer",
    image: "/images/home/testimonial-3.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Strategic Perspectives on <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Reflections from global technology leaders on how we orchestrate resilient architectures and deliver measurable commercial impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background border-border/40 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary/40 mb-6" />
                <blockquote className="text-foreground/80 mb-6 leading-relaxed flex-1 italic text-lg">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-border/40 mt-auto">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="rounded-full object-cover border border-border"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.title}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

