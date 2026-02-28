import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Hexagon } from "lucide-react";

interface ServiceEcosystemProps {
    service: Service;
}

export function ServiceEcosystem({ service }: ServiceEcosystemProps) {
    if (!service.techStack || service.techStack.length === 0) return null;

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center md:text-left mb-16 max-w-2xl">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Technology Ecosystem
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        Deep Expertise Across the <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Ecosystem</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {service.techStack.map((tech, idx) => (
                        <div
                            key={idx}
                            className="group flex items-center gap-3 px-6 py-4 bg-background border border-border/50 rounded-2xl hover:border-primary/30 hover:shadow-sm transition-all text-foreground text-sm font-medium h-full"
                        >
                            <Hexagon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                            <span>{tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
