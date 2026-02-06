import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";

interface ServicesGridProps {
    services: Service[];
    categorySlug: string;
}

export function ServicesGrid({ services, categorySlug }: ServicesGridProps) {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                        Service Catalogue
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Available Services
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        Explore our specialized offerings in this practice area.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <Card
                            key={service.slug}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50 flex flex-col"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                        <Settings className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <CardTitle className="text-xl leading-tight mb-1">{service.name}</CardTitle>
                                    </div>
                                </div>
                                <CardDescription className="leading-relaxed text-sm">
                                    {service.shortDescription}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.features.slice(0, 4).map((feature) => (
                                        <span
                                            key={feature}
                                            className="text-xs bg-secondary px-2.5 py-1 rounded-full text-secondary-foreground font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {service.features.length > 4 && (
                                        <span className="text-xs bg-primary/10 px-2.5 py-1 rounded-full text-primary font-medium">
                                            +{service.features.length - 4}
                                        </span>
                                    )}
                                </div>
                                <Link
                                    href={`/services/${categorySlug}/${service.slug}`}
                                    className="inline-flex items-center text-sm font-medium text-primary mt-auto group-hover:underline underline-offset-4"
                                >
                                    View Details
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
