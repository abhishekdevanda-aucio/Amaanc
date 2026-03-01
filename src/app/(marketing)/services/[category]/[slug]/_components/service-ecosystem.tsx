import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Hexagon, Layers } from "lucide-react";

interface ServiceEcosystemProps {
    service: Service;
}

export function ServiceEcosystem({ service }: ServiceEcosystemProps) {
    if (!service.techStack || service.techStack.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-br from-muted/50 via-background to-muted/30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-primary/10 via-accent/10 to-purple-500/10 rounded-full blur-[120px]" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        <Layers className="w-3.5 h-3.5 mr-2 inline-block" />
                        Technology Ecosystem
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Deep Expertise Across the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">Ecosystem</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We leverage the full power of modern technology stacks to build scalable, future-ready solutions.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {service.techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="group relative flex items-center justify-center gap-3 px-6 py-5 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-foreground text-sm font-semibold h-full"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex items-center gap-3">
                                <Hexagon className="w-5 h-5 text-primary/70 group-hover:text-primary group-hover:scale-110 transition-all" />
                                <span className="group-hover:text-primary transition-colors">{tech}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-block p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20">
                        <p className="text-muted-foreground text-sm mb-2">
                            <span className="font-bold text-foreground">Need a custom technology stack?</span>
                        </p>
                        <p className="text-muted-foreground text-sm">
                            We adapt to your existing infrastructure and requirements.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
