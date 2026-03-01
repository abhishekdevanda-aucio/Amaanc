import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Lightbulb } from "lucide-react";

interface ServiceChallengesProps {
    service: Service;
}

export function ServiceChallenges({ service }: ServiceChallengesProps) {
    if (!service.problems || service.problems.length === 0) return null;

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-linear-to-br from-muted/30 via-background to-muted/20" />
            <div className="absolute top-0 right-0 w-100 h-100 bg-red-500/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary/5 rounded-full blur-[120px]" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    <div className="lg:sticky lg:top-32">
                        <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Business Friction
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                            Common <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">Business Challenges</span> We Address
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We help ambitious organizations overcome operational bottlenecks and system limitations to unlock their full potential.
                        </p>

                        <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <Lightbulb className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="font-bold text-lg">Our Approach</h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Our approach aligns {service.name} with real business outcomes — not just system deployment. We focus on holistic transformation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {service.problems.map((problem, idx) => (
                            <div
                                key={idx}
                                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-red-500/10 hover:border-red-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
                            >
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10 flex gap-4">
                                    <div className="mt-1 bg-red-500/10 border border-red-500/20 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                                        <AlertCircle className="w-5 h-5 text-red-500" />
                                    </div>
                                    <div>
                                        <p className="text-foreground font-semibold leading-relaxed mb-1">
                                            {typeof problem === 'string' ? problem : problem.title}
                                        </p>
                                        {typeof problem !== 'string' && problem.description && (
                                            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{problem.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
