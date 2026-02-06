import { Service } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

interface ProblemsSolutionsProps {
    service: Service;
}

export function ProblemsSolutions({ service }: ProblemsSolutionsProps) {
    return (
        <section className="py-24 relative bg-background/50">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Header - Matching ServiceOverview */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                        Real Challenges, Real Solutions
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Turning Obstacles into Opportunities
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        We don&apos;t just identify problems; we engineer robust solutions that drive growth.
                    </p>
                </div>

                <div className="space-y-6 max-w-5xl mx-auto">
                    {service.problems.map((problem, idx) => (
                        <div
                            key={idx}
                            className="group relative grid md:grid-cols-2 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-in slide-in-from-bottom-5 fade-in"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Central Connector/Divider (Desktop) */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background border border-border items-center justify-center shadow-sm">
                                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>

                            {/* Problem Section */}
                            <div className="p-8 md:pr-12 border-b md:border-b-0 md:border-r border-border/50 bg-red-500/2 group-hover:bg-red-500/4 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
                                        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-red-600/80 dark:text-red-400/80 mb-2 block">
                                            The Challenge
                                        </span>
                                        <h3 className="text-xl font-bold mb-3 text-red-950 dark:text-red-50">
                                            {problem.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Solution Section */}
                            <div className="p-8 md:pl-12 bg-green-500/2 group-hover:bg-green-500/4transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-wider text-green-600/80 dark:text-green-400/80 mb-2 block">
                                            Our Solution
                                        </span>
                                        <h3 className="text-xl font-bold mb-3 text-green-950 dark:text-green-50">
                                            {service.solutions[idx]?.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.solutions[idx]?.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
