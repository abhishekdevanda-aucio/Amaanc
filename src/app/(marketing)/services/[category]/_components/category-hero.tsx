import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { ServiceCategory } from "@/data/services";

interface CategoryHeroProps {
    category: ServiceCategory;
    serviceCount: number;
}

export function CategoryHero({ category, serviceCount }: CategoryHeroProps) {
    return (
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-200 h-200 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-6 animate-in slide-in-from-left-5 fade-in duration-700 max-w-3xl">
                        {/* Breadcrumbs */}
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link href="/services" />}>Services</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{category.name}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                                {category.name}
                            </span>{" "}
                            Consulting Services
                        </h1>

                        <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl leading-relaxed">
                            Strategic technology capabilities designed to drive scalable enterprise transformation.
                        </p>

                        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                            <span className="px-2">15+ Years of Consulting Excellence</span>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Speak With Our Experts
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="#services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-8 text-base inline-flex items-center gap-2"
                                >
                                    View All Services
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative animate-in slide-in-from-right-5 fade-in duration-700 delay-200 hidden lg:block">
                        <div className="relative w-full max-w-[600px] mx-auto">
                            {/* Abstract Pattern Background */}
                            <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-linear-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-linear-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />

                            {/* Main Image Container */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <div className="aspect-4/3 relative">
                                    <Image
                                        src={category.imageUrl}
                                        alt={category.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
