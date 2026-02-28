import { Service } from "@/data/services";
import { ArrowRight, Trophy } from "lucide-react";
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
        <section className="py-20 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden text-center">

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
                            <Trophy className="w-8 h-8 text-primary" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                            Delivering Measurable <span className="text-primary">Business Outcomes</span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-border/50 my-8">
                            {metricsToDisplay.map((metric, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <Link href="/contact-us">
                                <Button size="lg" className="w-full sm:w-auto mt-4 px-8 text-lg">
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
