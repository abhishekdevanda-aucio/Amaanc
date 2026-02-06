import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ServiceCategory } from "@/lib/data/service-categories";
import { getServicesByCategory } from "@/lib/data/services";
import { Badge } from "@/components/ui/badge";

interface MoreCategoriesProps {
    categories: ServiceCategory[];
    currentCategorySlug: string;
}

export function MoreCategories({ categories, currentCategorySlug }: MoreCategoriesProps) {
    const otherCategories = categories.filter(cat => cat.slug !== currentCategorySlug);

    if (otherCategories.length === 0) return null;

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                        Beyond this Practice
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Explore More Categories
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Discover more specialized solutions across our diverse service portfolio.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherCategories.map((category, index) => {
                        const serviceCount = getServicesByCategory(category.slug).length;
                        // Calculate staggered delay for animation
                        const delayClass = index === 0 ? "delay-0" :
                            index === 1 ? "delay-100" :
                                index === 2 ? "delay-200" :
                                    index === 3 ? "delay-300" : "delay-400";

                        return (
                            <Link
                                key={category.slug}
                                href={`/services/${category.slug}`}
                                className={`group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col h-full hover:-translate-y-2 animate-in slide-in-from-bottom-5 fade-in duration-700 ${delayClass}`}
                            >
                                {/* Image Header */}
                                <div className="h-48 relative overflow-hidden">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                                    {/* Service Count Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium border border-white/10">
                                            {serviceCount} {serviceCount === 1 ? "Service" : "Services"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1">
                                        {category.description}
                                    </p>

                                    <span className="inline-flex items-center text-sm font-semibold text-primary mt-auto group-hover:underline underline-offset-4">
                                        View Services
                                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
