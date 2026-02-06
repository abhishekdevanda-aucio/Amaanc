import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Zap } from "lucide-react";
import { Industry } from "@/data/industries";

interface DetailHeroProps {
    industry: Industry;
}

export function DetailHero({ industry }: DetailHeroProps) {
    return (
        <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-background">
            {/* Background Gradients & Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-200 h-200 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Typography & Content */}
                    <div className="flex flex-col space-y-8 animate-in slide-in-from-left-5 fade-in duration-700 max-w-3xl">
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-3 text-sm font-medium text-primary uppercase tracking-widest">
                                <span className="w-12 h-0.5 bg-linear-to-r from-primary to-transparent"></span>
                                Industry Focus
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                            {industry.name} <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                                Transformation
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed border-l-4 border-primary/20 pl-6">
                            {industry.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    className="h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Consult an Expert
                                    <ArrowRight className="h-5 w-5" />
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
                        <div className="relative w-full max-w-[600px] mx-auto">

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
                                    {/* Tech Overlay Gradient */}
                                    <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
                                </div>

                                {/* Integrated Tech Stack - Floating Pills */}
                                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                                    {industry.techStack && industry.techStack.slice(0, 4).map((tech, i) => (
                                        <div
                                            key={i}
                                            className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-foreground/80 shadow-sm"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                    {industry.techStack && industry.techStack.length > 4 && (
                                        <div className="px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/20 text-xs font-semibold text-primary shadow-sm">
                                            +{industry.techStack.length - 4} More
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Floating "Result" Card - Replacing Generic Stats */}
                            <div className="absolute -top-6 -left-6 z-20 bg-card p-5 rounded-xl border border-border shadow-xl max-w-[200px] animate-float-slow">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                                        <BarChart3 className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold uppercase text-muted-foreground">Impact</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold tracking-tight">
                                        {industry.stats?.[0]?.value || "100%"}
                                    </div>
                                    <div className="text-xs text-muted-foreground leading-tight">
                                        {industry.stats?.[0]?.label || "Success Rate"}
                                    </div>
                                </div>
                            </div>

                            {/* Floating "Solution" Card */}
                            <div className="absolute -bottom-8 -right-8 z-20 bg-primary text-primary-foreground p-5 rounded-xl shadow-xl max-w-[220px] animate-float-delayed hidden xl:block">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-white/20">
                                        <Zap className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="text-xs font-bold uppercase opacity-80">Speed</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-2xl font-bold tracking-tight">
                                        {industry.stats?.[1]?.value || "Fast"}
                                    </div>
                                    <div className="text-xs opacity-80 leading-tight">
                                        {industry.stats?.[1]?.label || "Optimization"}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
