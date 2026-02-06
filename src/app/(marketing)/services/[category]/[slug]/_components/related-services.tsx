import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Service, resolveServiceIcon } from "@/lib/data/services";
import { cn } from "@/lib/utils";

interface RelatedServicesProps {
    services: Service[];
    categorySlug: string;
}

export function RelatedServices({ services, categorySlug }: RelatedServicesProps) {
    if (services.length === 0) return null;

    return (
        <section className="py-24 relative overflow-hidden bg-secondary/20">
            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                        Explore More
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Complementary Capabilities
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Expand your digital footprint with these related services.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = resolveServiceIcon(service.icon);

                        return (
                            <Link
                                key={service.slug}
                                href={`/services/${categorySlug}/${service.slug}`}
                                className={cn(
                                    "group relative flex flex-col p-8 rounded-3xl border border-border/50 bg-background/50 backdrop-blur-sm",
                                    "hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20",
                                    "transition-all duration-500 animate-in slide-in-from-bottom-5 fade-in"
                                )}
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="absolute top-8 right-8 text-muted-foreground/10 group-hover:text-primary/10 transition-colors duration-500">
                                    <Icon className="w-24 h-24" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                                        {service.name}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                                        {service.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-semibold text-primary">
                                        Learn More
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
