import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
            {/* Dynamic Background Gradients */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 animate-pulse animation-delay-700" />
            </div>

            <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">

                <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm shadow-sm gap-2 rounded-full">
                    <span>About Amaanc</span>
                </Badge>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground text-balance max-w-5xl leading-[1.1]">
                    Orchestrating the Future of <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-size-[300%_auto]">
                        Enterprise Technology
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12">
                    We combine visionary architecture, elite talent, and agentic AI to solve the most complex digital transformation challenges.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
                    <Link href="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-xl shadow-primary/20 transition-all hover:scale-105 rounded-full inline-flex items-center gap-2">
                            Start Your Transformation
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="#our-journey" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base border-primary/20 hover:bg-primary/5 transition-all rounded-full">
                            Discover Our Story
                        </Button>
                    </Link>
                </div>

                {/* Floating Stats / Trust indicators */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-10 border-t border-border/50 w-full max-w-4xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-black text-foreground mb-1">2012</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Established</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-black text-foreground mb-1">50+</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Engineers</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-black text-foreground mb-1">12</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Industries</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl md:text-4xl font-black text-foreground mb-1">Global</div>
                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Presence</div>
                    </div>
                </div>

            </div>
        </section>
    );
}
