import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Amaanc transformed our Salesforce implementation from a basic CRM into a powerful business intelligence platform. Their expertise in AI integration has given us a competitive edge.",
    author: "Sarah Chen",
    title: "CTO",
    company: "Global Financial Services",
    image: "/images/home/professional-woman-headshot.png",
  },
  {
    quote:
      "The team's deep understanding of healthcare regulations and technical excellence made our complex integration project a success. We've seen a 40% improvement in operational efficiency.",
    author: "Dr. Michael Roberts",
    title: "Chief Digital Officer",
    company: "Regional Healthcare Network",
    image: "/images/home/professional-man-headshot-portrait-doctor.jpg",
  },
  {
    quote:
      "Working with Amaanc since 2015 has been a game-changer. Their consistent delivery and innovative solutions keep us ahead of the market.",
    author: "Jennifer Walsh",
    title: "VP of Technology",
    company: "Fortune 500 Retailer",
    image: "/images/home/professional-woman-executive-headshot.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-background/70 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our enterprise clients have to say about working with
            Amaanc.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-background/5 border-background/10">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-background/90 mb-6 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-background">{testimonial.author}</div>
                    <div className="text-sm text-background/60">
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
