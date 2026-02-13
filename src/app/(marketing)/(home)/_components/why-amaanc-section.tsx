import {
    Zap,
    Rocket,
    Globe,
    Briefcase,
    Layers,
    History,
    TrendingUp,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <History className="w-8 h-8 text-primary" />,
        title: "The Foundation of Enterprise Trust Established 2012",
        subtitle: "13+ Years",
        description: "True expertise is forged over time. Since 2012, we have specialized in navigating the intricacies of global enterprise ecosystems, turning technical complexity into streamlined operational success for industry leaders.",
        className: "md:col-span-6 bg-primary/5 border-primary/10",
    },
    {
        icon: <Zap className="w-8 h-8 text-amber-500" />,
        title: "Precision Engineering & Agentic AI",
        subtitle: "True Artificial Intelligence",
        description: "Transforming the world’s leading CRM into a cognitive enterprise powerhouse. Our team architects scalable, AI-enhanced solutions that bridge the gap between technical complexity and intuitive user experiences.",
        className: "md:col-span-4",
    },
    {
        icon: <Briefcase className="w-8 h-8 text-blue-600" />,
        title: "Strategic Value Alignment Outcome-Driven Architecture",
        subtitle: "ROI Focused",
        description: "We look beyond the code to the bottom line. Our 'Business-First' philosophy ensures that every piece of work that we do for our prestigious clients, is architected to eliminate operational friction and accelerate your specific commercial milestones.",
        className: "md:col-span-4",
    },
    {
        icon: <Globe className="w-8 h-8 text-indigo-500" />,
        title: "Global Governance & Compliance",
        subtitle: "Strategic International Frameworks",
        description: "Architecting secure, multi-region ecosystems that exceed global regulatory mandates. We ensure your Salesforce and AI deployments remain fully compliant with GDPR, HIPAA, ISO & other standards required by our clients, while maintaining peak operational integrity.",
        className: "md:col-span-6 bg-blue-500/5 border-blue-500/10",
        visual: (
            <div className="absolute top-1/3 -translate-y-1/2 right-8 hidden lg:block opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="grid grid-cols-2 gap-3 transform rotate-12">
                    {['GDPR', 'HIPAA', 'ISO', 'SOC2'].map((tag, i) => (
                        <div key={i} className="bg-background/80 backdrop-blur border border-blue-500/20 px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 shadow-sm">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        icon: <Layers className="w-8 h-8 text-emerald-500" />,
        title: "Full-Lifecycle Orchestration",
        subtitle: "Unified Technical Delivery",
        description: "From initial strategy and architectural design to advanced DevOps (CI/CD) and long-term Change Management. We serve as your dedicated technical partner, ensuring seamless execution across every phase of the digital evolution.",
        className: "md:col-span-5 bg-emerald-500/5 border-emerald-500/10",
        visual: (
            <div className="mt-6 hidden lg:flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <div className="h-1.5 w-12 bg-emerald-500/30 rounded-full" />
                <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full" />
                <div className="h-1.5 w-12 bg-emerald-500 rounded-full" />
                <div className="text-xs font-semibold text-emerald-700">Delivery Pipeline</div>
            </div>
        )
    },
    {
        icon: <Rocket className="w-8 h-8 text-purple-500" />,
        title: "High-Velocity Enterprise Frameworks",
        subtitle: "Optimized Scalability",
        description: "Merging agile delivery with enterprise-grade rigor. We leverage Automated Testing and CI/CD pipelines to ensure fast, high-quality results that scale seamlessly with your organizational growth.",
        className: "md:col-span-5",
        visual: (
            <div className="absolute top-6 right-8 hidden lg:block opacity-30 group-hover:opacity-80 transition-opacity">
                <TrendingUp className="w-16 h-16 text-purple-500" />
            </div>
        )
    },
];

export function WhyAmaancSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Why Partner With Us
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        The Amaanc <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                            Strategic Edge
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        We don&apos;t just deploy tools; we redefine how businesses operate. From Salesforce architecture to AI-driven automation, we provide the technical depth that industry leaders trust for their mission-critical operations.
                    </p>
                </div>

                {/* Bento Grid Layout - 10 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-10 gap-6 lg:gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={cn(
                                "group relative p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col justify-between h-full bg-background",
                                feature.className
                            )}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full w-full">
                                {/* Header: Icon + Action */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3.5 rounded-2xl bg-muted/50 border border-border/50 group-hover:bg-background group-hover:scale-110 group-hover:shadow-md transition-all duration-300 shrink-0">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <Badge variant="secondary" className="w-fit mb-3 bg-secondary/50 text-secondary-foreground/80 hover:bg-secondary/70 transition-colors text-xs font-semibold px-2.5 py-0.5 rounded-md">
                                        {feature.subtitle}
                                    </Badge>



                                    <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl">
                                        {feature.description}
                                    </p>

                                    {/* Render Custom Visual if present */}
                                    {feature.visual}
                                </div>
                            </div>

                            {/* Decorative corner accent */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-br from-transparent to-current/5 rounded-tl-[100px] -mr-8 -mb-8 group-hover:scale-125 transition-transform duration-500 opacity-50 z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
