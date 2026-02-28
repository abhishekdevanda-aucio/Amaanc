import { getTestimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function TestimonialsGrid() {
    const testimonials = await getTestimonials();

    if (!testimonials || testimonials.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <p className="text-muted-foreground text-lg">No testimonials available at this time.</p>
            </div>
        )
    }

    return (
        <section className="py-20 -mt-24 md:-mt-32 relative z-20">
            <div className="container mx-auto px-4 md:px-6">
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
            </div>
        </section>
    );
}
