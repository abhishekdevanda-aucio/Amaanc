import { Industry } from "@/data/industries";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface DetailTestimonialProps {
    industry: Industry;
}

export function DetailTestimonial({ industry }: DetailTestimonialProps) {
    const testimonials = industry.testimonials
    if (!testimonials || testimonials.length === 0) return null;

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Client Success
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Success Stories<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            How We Empower {industry.name} Leaders
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {testimonials.map((testimonial, idx) => {
                        const isLast = idx === testimonials.length - 1;
                        const isOdd = testimonials.length % 2 !== 0;
                        const shouldCenter = isLast && isOdd;

                        return (
                            <div
                                key={idx}
                                className={`bg-card border border-border/50 rounded-4xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${shouldCenter ? "md:col-span-2 md:w-3/4 md:mx-auto" : ""
                                    }`}
                            >
                                {/* Decorative Top Gradient */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/50 via-blue-600/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col h-full">
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
                                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="text-xl font-medium leading-relaxed text-foreground mb-8 flex-1">
                                        {testimonial.quote}
                                    </blockquote>

                                    {/* Footer: Author */}
                                    <div className="flex items-center gap-4 pt-6 mt-auto border-t border-border/50">
                                        <Avatar className="w-12 h-12 border-2 border-background shadow-sm">
                                            <AvatarImage src={testimonial.image} alt={testimonial.author} />
                                            <AvatarFallback className="bg-primary/5 text-primary font-bold">
                                                {testimonial.author.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col">
                                            <cite className="not-italic font-bold text-base text-foreground">
                                                {testimonial.author}
                                            </cite>
                                            <span className="text-muted-foreground text-sm">
                                                {testimonial.role}, {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
