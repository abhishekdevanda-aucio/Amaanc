import { Service } from "@/data/services";
import { CheckCircle2, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
            text: `Amaanc transformed our ${service.name} ecosystem into a scalable growth engine.Their structured approach and execution clarity made a measurable difference to our operations.`,
            author: "Enterprise Client Perspective"
        }
    };

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Why Choose Us
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            {data.title}
                        </h2>
                        <ul className="space-y-4 mb-8">
                            {data.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-foreground/90 font-medium">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-background border border-border/50 rounded-2xl p-8 md:p-10 shadow-sm relative">
                        <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 rotate-180 pointer-events-none" />

                        <div className="relative z-10 space-y-6">
                            <p className="text-xl text-foreground font-medium italic leading-relaxed">
                                &quot;{data.clientQuote.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-bold text-lg">{data.clientQuote.author.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">{data.clientQuote.author}</p>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mt-1">Client Perspective</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
