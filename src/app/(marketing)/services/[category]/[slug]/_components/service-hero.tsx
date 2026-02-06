import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { getCategoryBySlug } from "@/data/service-categories";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface ServiceHeroProps {
    service: Service;
}

export async function ServiceHero({ service }: ServiceHeroProps) {
    const category = await getCategoryBySlug(service.categorySlug);

    return (
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-background">
            {/* Background Gradients & Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] bg-[size:50px_50px] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Content */}
                    <div className="flex flex-col space-y-6 animate-in slide-in-from-left-5 fade-in duration-700 max-w-3xl">
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
                                    <BreadcrumbLink render={<Link href={`/services/${service.categorySlug}`} />}>
                                        {category?.name}
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{service.name}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                                {service.name}
                            </span>
                        </h1>
                        <div className="flex items-center gap-4">
                            <Badge variant="outline" className="p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                                {category?.name}
                            </Badge>
                        </div>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary/20 pl-6 animate-in slide-in-from-left-5 fade-in duration-700 delay-100">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Get Started
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="relative animate-in slide-in-from-right-5 fade-in duration-700 delay-200 hidden lg:block">
                        <div className="relative w-full max-w-[600px] mx-auto">
                            {/* Abstract Pattern Background */}
                            <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-linear-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-linear-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl" />

                            {/* Main Image Container */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <div className="aspect-square md:aspect-4/3 relative">
                                    <Image
                                        src={service.imageUrl || "/placeholder.svg"}
                                        alt={service.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-1000"
                                        priority
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
