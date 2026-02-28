import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";
import { Service } from "@/data/services";

interface ServicesGridProps {
    services: Service[];
    categorySlug: string;
}

export function ServicesGrid({ services, categorySlug }: ServicesGridProps) {
    return (
        <section className="py-24 lg:py-32 bg-secondary/20 relative">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-in slide-in-from-bottom-8 fade-in duration-1000">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-foreground text-sm font-medium mb-6 uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                            Service Catalogue
                        </div>
                        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                            Our Core <span className="font-semibold">Service Offerings</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${categorySlug}/${service.slug}`}
                            className="group block"
                        >
                            <div className="h-full relative bg-background rounded-3xl p-8 border border-border/40 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/5">
                                {/* Subtle gradient background on hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:-translate-y-1">
                                        <Settings className="h-6 w-6 text-foreground/70 group-hover:text-primary-foreground transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                                        {service.name}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1 font-light">
                                        {service.shortDescription}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-foreground group-hover:text-primary mt-auto transition-colors duration-300">
                                        Explore Service
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
