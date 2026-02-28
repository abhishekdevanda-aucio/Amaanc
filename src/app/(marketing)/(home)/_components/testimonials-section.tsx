import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { getFeaturedTestimonials } from "@/data/testimonials"

export async function TestimonialsSection() {
  const testimonials = await getFeaturedTestimonials(3)

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-l-full -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-3xl rounded-r-full -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
            Client Success
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Strategic Perspectives on <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Transformation</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Reflections from global technology leaders on how we orchestrate resilient architectures and deliver measurable commercial impact.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border border-border/50 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Decorative Top Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-blue-600/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              <CardContent className="p-8 md:p-10 flex flex-col h-full">
                {/* Header: Icon & Stars */}
                <div className="flex items-center justify-between mb-8">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center text-primary relative z-10">
                      <Quote className="w-6 h-6 fill-current" />
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 mb-8 leading-relaxed flex-1 italic text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Footer: Author */}
                <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border/50">
                  <Avatar className="w-12 h-12 border-2 border-background shadow-sm">
                    <AvatarImage src={testimonial.imageUrl ?? undefined} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/5 text-primary font-bold">
                      {testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex flex-col">
                    <cite className="not-italic font-bold text-base text-foreground">
                      {testimonial.author}
                    </cite>
                    <span className="text-muted-foreground text-sm">
                      {testimonial.title}, {testimonial.company}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link href="/testimonials">
            <Button variant="outline" size="lg" className="rounded-full shadow-sm hover:shadow-md transition-all group border-primary/20 hover:border-primary/50 text-foreground">
              Read More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
