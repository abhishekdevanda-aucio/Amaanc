import { ServiceCategory } from "@/data/services";
import { Sparkles } from "lucide-react";

interface CategoryOverviewProps {
    category: ServiceCategory;
}

export function CategoryOverview({ category }: CategoryOverviewProps) {
    return (
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden border-b border-border/40">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[60px_60px]" />
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10 mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase">
                        <Sparkles className="h-4 w-4" />
                        <span>Category Overview</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
                        Strategic Capabilities for <br className="hidden md:block" />
                        <span className="italic text-muted-foreground font-serif">Modern Enterprises</span>
                    </h2>

                    <div className="relative mt-8">
                        {/* Decorative quotes */}
                        <span className="absolute -top-8 -left-10 text-8xl text-primary/10 font-serif leading-none hidden md:block">&ldquo;</span>
                        <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed max-w-3xl text-balance relative z-10">
                            Our <span className="text-foreground font-medium">{category.name.toLowerCase()}</span> services are designed to support business growth, efficiency, and innovation. We provide strategic capabilities that help modern enterprises navigate complex technological landscapes, transforming challenges into sustainable competitive advantages that scale with your organization's vision.
                        </p>
                        <span className="absolute -bottom-16 -right-10 text-8xl text-primary/10 font-serif leading-none hidden md:block">&rdquo;</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
