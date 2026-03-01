import { Service } from "@/data/services";
import { ArrowRight, Trophy, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceMetricsProps {
    service: Service;
}

export function ServiceMetrics({ service }: ServiceMetricsProps) {
    const defaultMetrics = [
        { label: "Years Experience", value: "15+" },
        { label: "Successful Projects", value: "150+" },
        { label: "Client Retention", value: "95%" }
    ];

    const metricsToDisplay = service.metrics && service.metrics.length > 0
        ? service.metrics
        : defaultMetrics;

    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-primary/20 via-accent/20 to-purple-500/20 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                    {/* Inner gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_50%)]" />

                    <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-2">
                            <Trophy className="w-8 h-8 text-primary" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                            Delivering Measurable{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                                Business Outcomes
                            </span>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Track record of excellence in delivering enterprise-grade solutions that drive real business value.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 mt-8">
                            {metricsToDisplay.map((metric, idx) => (
                                <div key={idx} className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative z-10 space-y-3">
                                        <TrendingUp className="w-6 h-6 text-primary mx-auto" />
                                        <div className="text-4xl md:text-5xl font-bold text-foreground">
                                            {metric.value}
                                        </div>
                                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                            {metric.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Link href="/contact-us">
                                <Button size="lg" className="px-8 py-6 text-base shadow-lg shadow-primary/25 hover:scale-105 transition-all">
                                    Start Your {service.name} Transformation Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
