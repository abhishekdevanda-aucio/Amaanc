import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getFeaturedServices } from "@/data/services";

export async function FeaturedServices() {
    const featuredServices = await getFeaturedServices();

    if (featuredServices.length === 0) {
        return null;
    }

    return (
        <section className="py-20">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                            Top Picks
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                            Featured Services
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Our most sought-after solutions from each practice area that drive immediate business impact.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredServices.map((service) => (
                        <Card
                            key={service.slug}
                            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                        >
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                                        <Settings className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <CardTitle className="text-lg leading-tight">{service.name}</CardTitle>
                                </div>
                                <CardDescription className="leading-relaxed">{service.shortDescription}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {service.features.slice(0, 3).map((feature) => (
                                        <span key={feature} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/services/${service.categorySlug}/${service.slug}`}
                                    className="inline-flex items-center text-sm font-medium text-primary hover:gap-2 transition-all"
                                >
                                    Learn More
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
