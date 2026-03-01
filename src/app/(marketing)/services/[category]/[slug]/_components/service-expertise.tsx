import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ServiceExpertiseProps {
    service: Service;
}

export function ServiceExpertise({ service }: ServiceExpertiseProps) {
    if (!service.solutions || service.solutions.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-100 h-100 bg-blue-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-emerald-500/5 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5 mr-2 inline-block" />
                        Comprehensive Capabilities
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        End-to-End <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">{service.name}</span> Consulting Services
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Comprehensive solutions designed to drive measurable business outcomes and accelerate your transformation journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col h-full"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex-1">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                    <CheckCircle2 className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {solution.title}
                                </h3>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
