import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Industry } from "@/data/industries";

interface DetailHeroProps {
    industry: Industry;
}

export function DetailHero({ industry }: DetailHeroProps) {
    return (
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-background">
            {/* Background Gradients & Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-200 h-200 bg-primary/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-primary/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-8 items-center">

                    {/* Left Column: Typography & Content */}
                    <div className="flex flex-col space-y-8 animate-in slide-in-from-left-5 fade-in duration-700 max-w-3xl">
                        <Breadcrumb className="mb-2">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/industries">Industries</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>{industry.name}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                            {(() => {
                                const text = industry.tagline || industry.name;
                                const words = text.split(" ");
                                if (words.length < 2) return text;
                                const lastTwo = words.slice(-2).join(" ");
                                const rest = words.slice(0, -2).join(" ");
                                return (
                                    <>
                                        {rest} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">{lastTwo}</span>
                                    </>
                                );
                            })()}
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary/20 pl-6">
                            {industry.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    className="bg-(--main-charcoal) hover:bg-zinc-700 h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Consult an Expert
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/industries" className="inline-flex">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="h-12 px-8 text-base transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Explore Industries
                                </Button>
                            </Link>
                        </div>

                        {/* Industry Stats - Differentiating Feature */}
                        <div className="pt-8 border-t border-border/50">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {industry.stats && industry.stats.slice(0, 3).map((stat, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <p className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</p>
                                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual Component - Tech Ecosystem Style */}
                    <div className="relative animate-in slide-in-from-right-5 fade-in duration-700 delay-200 hidden lg:block">
                        <div className="relative w-full max-w-150 mx-auto">

                            {/* Abstract Pattern Background */}
                            <div className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-linear-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-linear-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl" />

                            {/* Main Image Container */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                                <div className="aspect-square md:aspect-4/3 relative">
                                    <Image
                                        src={industry.imageUrl || "/placeholder.svg"}
                                        alt={industry.name}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-1000"
                                        priority
                                    />
                                </div>

                                {/* Integrated Tech Stack - Floating Pills */}
                                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                    {industry.techStack && industry.techStack.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-foreground/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-background/90 hover:border-primary/50 cursor-default"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
