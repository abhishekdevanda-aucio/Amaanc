import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, ArrowRight } from "lucide-react";

interface ServiceChallengesProps {
    service: Service;
}

export function ServiceChallenges({ service }: ServiceChallengesProps) {
    if (!service.problems || service.problems.length === 0) return null;

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Business Friction
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Common <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Business Challenges</span> We Address
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We help ambitious organizations overcome operational bottlenecks and system limitations to unlock their full potential.
                        </p>

                        <div className="bg-background border border-border/50 rounded-2xl p-6 mt-8">
                            <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
                            <p className="text-muted-foreground text-sm">
                                Our approach aligns {service.name} with real business outcomes — not just system deployment. We focus on holistic transformation.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {service.problems.map((problem, idx) => (
                            <div
                                key={idx}
                                className="bg-background border border-border/50 rounded-2xl p-6 flex gap-4 hover:border-primary/30 transition-colors shadow-sm"
                            >
                                <div className="mt-1 bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                                    <AlertCircle className="w-4 h-4 text-primary" />
                                </div>
                                <div className="pt-1">
                                    <p className="text-foreground font-medium leading-relaxed">
                                        {typeof problem === 'string' ? problem : problem.title}
                                    </p>
                                    {typeof problem !== 'string' && problem.description && (
                                        <p className="text-muted-foreground text-sm mt-1">{problem.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
