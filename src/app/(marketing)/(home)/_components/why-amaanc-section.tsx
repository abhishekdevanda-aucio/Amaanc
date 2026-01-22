import { Zap, Shield, Rocket, Globe, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Established Since 2012",
        subtitle: "Proven Enterprise Delivery",
        description: "Over a decade of success in complex ecosystems. We have a track record of transforming businesses through technology.",
        stats: ["10+ Years", "50+ Clients"],
        className: "md:col-span-6 bg-primary/5 border-primary/20",
        hasButton: true,
    },
    {
        icon: <Rocket className="w-8 h-8 text-accent" />,
        title: "Salesforce + AI First",
        subtitle: "Future-Proof Platforms",
        description: "Scalable platforms integrated with cutting-edge AI.",
        className: "md:col-span-4",
        hasButton: false,
    },
    {
        icon: <Shield className="w-8 h-8 text-green-600" />,
        title: "Business-Led",
        subtitle: "Outcomes Over Tools",
        description: "We focus on tangible business outcomes and ROI.",
        className: "md:col-span-4",
        hasButton: false,
    },
    {
        icon: <Globe className="w-8 h-8 text-blue-500" />,
        title: "EMEA & Global",
        subtitle: "Regulated Markets",
        description: "Deep expertise in building compliant solutions across multiple regions. We navigate complex regulatory landscapes with ease.",
        stats: ["GDPR Compliant", "Multi-Region"],
        className: "md:col-span-6 bg-blue-500/5 border-blue-500/20",
        hasButton: true,
    },
];

export function WhyAmaancSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Why Choose Us
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                        More Than Just a <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Technology Partner
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We combine deep technical expertise with strategic business insight to deliver solutions that drive real growth.
                    </p>
                </div>

                {/* Bento Grid Layout - 60/40 Split with Optimized Spacing */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative p-6 md:p-8 rounded-3xl border border-border/50 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between h-full",
                                feature.className
                            )}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-5">
                                    <div className="p-3 rounded-xl bg-background border border-border shadow-xs group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    {feature.hasButton && (
                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors">
                                            <ArrowUpRight className="h-5 w-5" />
                                        </Button>
                                    )}
                                </div>

                                <Badge variant="secondary" className="w-fit mb-3 bg-background/50 backdrop-blur-md text-xs font-medium">
                                    {feature.subtitle}
                                </Badge>

                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground tracking-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-5 flex-1">
                                    {feature.description}
                                </p>

                                {feature.stats && (
                                    <div className="mt-auto pt-5 border-t border-border/30 flex flex-wrap gap-3">
                                        {feature.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                                                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                {stat}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-br from-transparent to-primary/5 rounded-tl-[100px] -mr-8 -mb-8 group-hover:scale-125 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
