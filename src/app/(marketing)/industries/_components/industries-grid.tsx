import Link from "next/link";
import Image from "next/image";
import { industries } from "@/lib/data/industries";
import { ArrowRight } from "lucide-react";

export function IndustriesGrid() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry) => (
                        <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}`}
                            className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:border-primary/50"
                        >
                            {/* Image Header */}
                            <div className="h-48 relative overflow-hidden shrink-0">
                                <Image
                                    src={industry.image || "/placeholder.svg"}
                                    alt={industry.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex flex-col flex-1 relative">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <industry.icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {industry.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-1">
                                    {industry.description}
                                </p>

                                <span className="inline-flex items-center text-sm font-medium text-primary mt-auto group-hover:underline underline-offset-4">
                                    Explore Solutions
                                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
