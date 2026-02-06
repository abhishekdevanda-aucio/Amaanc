import { Industry } from "@/data/industries";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface DetailOverviewProps {
    industry: Industry;
}

export function DetailOverview({ industry }: DetailOverviewProps) {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">

                {/* Section Header - Centered Layout */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Strategic Vision
                    </Badge>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
                        Navigating the<br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            {industry.name} Landscape
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We help forward-thinking organizations adapt, evolve, and lead in a digital-first world
                        through tailored strategies and cutting-edge technology.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column */}
                    <div className="lg:col-span-7 space-y-10 lg:self-end animate-in slide-in-from-right-5 fade-in duration-700 delay-200">
                        {/* Main Description with Editorial Styling */}
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-xl md:text-2xl leading-relaxed text-foreground font-light mb-8 border-l-4 border-primary pl-6">
                                &quot;{industry.description}&quot;
                            </p>
                            <p className="text-muted-foreground leading-loose">
                                {industry.content}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full bg-linear-to-r from-border to-transparent" />
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-5 space-y-8 animate-in slide-in-from-left-5 fade-in duration-700 delay-200">
                        {industry.features && industry.features.length > 0 && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="h-px w-8 bg-primary"></span>
                                    <h3 className="font-semibold uppercase tracking-widest text-primary text-sm">Core Capabilities</h3>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {industry.features.map((feature, idx) => (
                                        <Card key={idx} className="p-3 flex items-center gap-3 border-border/50 hover:border-primary/50 transition-colors bg-background/50 hover:bg-background shadow-xs hover:shadow-md group">
                                            <div className="shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                                                <Check className="h-3.5 w-3.5" />
                                            </div>
                                            <span className="font-medium text-sm text-foreground/90 leading-tight">
                                                {feature}
                                            </span>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
