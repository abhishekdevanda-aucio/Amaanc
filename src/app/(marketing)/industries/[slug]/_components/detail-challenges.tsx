import { Industry } from "@/lib/data/industries";
import { Badge } from "@/components/ui/badge";

interface DetailChallengesProps {
    industry: Industry;
}

export function DetailChallenges({ industry }: DetailChallengesProps) {
    if (!industry.challenges || industry.challenges.length === 0) return null;

    return (
        <section className="py-24 bg-background relative overflow-hidden">

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Problem Solving
                    </Badge>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Bridging the Gap Between <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Issue & Innovation
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We don&apos;t just identify problems; we architect the definitive solutions that move {industry.title} leaders forward.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {industry.challenges.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-card border border-border/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:border-primary/20"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex items-start gap-4 mb-6">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm shrink-0">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-bold leading-tight pt-1 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="space-y-6 relative">
                                {/* Vertical Connector Line */}
                                <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border/50 group-hover:bg-primary/20 transition-colors" />

                                {/* Problem Item */}
                                <div className="relative pl-10">
                                    <div className="absolute left-[15px] top-1.5 w-2 h-2 rounded-full bg-red-400 border-2 border-card z-10" />
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        <span className="font-semibold text-foreground block mb-1">Challenge</span>
                                        {item.problem}
                                    </p>
                                </div>

                                {/* Solution Item */}
                                <div className="relative pl-10">
                                    <div className="absolute left-[15px] top-1.5 w-2 h-2 rounded-full bg-green-500 border-2 border-card z-10" />
                                    <p className="text-foreground/90 font-medium text-sm leading-relaxed">
                                        <span className="font-semibold text-primary block mb-1">Impact</span>
                                        {item.solution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
