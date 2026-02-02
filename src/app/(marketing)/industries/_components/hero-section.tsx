import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
    return (
        <section className="relative min-h-[60vh] flex flex-col justify-center overflow-hidden bg-background pt-20">
            {/* Background Gradients & Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-200 h-200 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center">

                <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                    <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                    Industry-Focused Innovation
                </Badge>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground max-w-4xl mx-auto">
                    Transforming Industries with<br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                        Digital Excellence
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    We deliver specialized, regulatory-compliant technology implementations tailored to the unique challenges of Finance, Banking, Utilities, and beyond.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
                    <Link href="/contact">
                        <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20">
                            Start Your Transformation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}