import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Amaanc transformed our Salesforce implementation from a basic CRM into a powerful business intelligence platform. Their expertise in AI integration has given us a competitive edge.",
    author: "Sarah Chen",
    title: "CTO",
    company: "Global Financial Services",
    image: "/images/home/testimonial-1.webp",
  },
  {
    quote:
      "The team's deep understanding of healthcare regulations and technical excellence made our complex integration project a success. We've seen a 40% improvement in operational efficiency.",
    author: "Dr. Michael Roberts",
    title: "Chief Digital Officer",
    company: "Regional Healthcare Network",
    image: "/images/home/testimonial-2.webp",
  },
  {
    quote:
      "Working with Amaanc since 2015 has been a game-changer. Their consistent delivery and innovative solutions keep us ahead of the market.",
    author: "Jennifer Walsh",
    title: "VP of Technology",
    company: "Fortune 500 Retailer",
    image: "/images/home/testimonial-3.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
            What Our <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our enterprise clients have to say about working with
            Amaanc.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background border-border/40 shadow-xs hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/40 mb-6" />
                <blockquote className="text-foreground/80 mb-6 leading-relaxed min-h-[80px]">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-border/40">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="rounded-full object-cover aspect-square h-12 w-12 border border-border"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.title}, {testimonial.company}
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
