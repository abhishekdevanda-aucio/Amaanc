import { Service } from "@/data/services";
import { CheckCircle2, Quote, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface WhyAmaancProps {
    service: Service;
}

export function WhyAmaanc({ service }: WhyAmaancProps) {
    const data = service.whyAmaanc || {
        title: `A Strategic ${service.name} Partner Since 2012`,
        points: [
            "Business-first consulting approach",
            "Enterprise-grade architecture design",
            "Scalable, future-ready solutions",
            "Long-term partnership mindset",
            "Strong focus on ROI and operational efficiency"
        ],
        clientQuote: {
            text: `Amaanc transformed our ${service.name} ecosystem into a scalable growth engine. Their structured approach and execution clarity made a measurable difference to our operations.`,
            author: "Enterprise Client Perspective"
        }
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-muted/50 via-background to-muted/30" />
            <div className="absolute top-0 left-0 w-100 h-100 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-accent/10 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            <Award className="w-3.5 h-3.5 mr-2 inline-block" />
                            Why Choose Us
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                            {data.title}
                        </h2>
                        <ul className="space-y-4 mb-8">
                            {data.points.map((point, idx) => (
                                <li key={idx} className="group flex items-start gap-4">
                                    <div className="mt-1 w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-foreground/90 font-medium text-lg leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="group relative p-8 md:p-10 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 shadow-lg">
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 rotate-180 pointer-events-none" />

                            <div className="relative z-10 space-y-6">
                                <p className="text-xl text-foreground font-medium italic leading-relaxed">
                                    &quot;{data.clientQuote.text}&quot;
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center">
                                        <span className="text-primary font-bold text-xl">{data.clientQuote.author.charAt(0)}</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{data.clientQuote.author}</p>
                                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mt-1">Client Perspective</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
