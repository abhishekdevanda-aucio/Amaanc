import {
    Brain,
    Code2,
    ShieldCheck,
    LineChart,
    Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const features = [
    {
        icon: <Brain className="w-8 h-8 text-primary" />,
        title: "Deep Industry Expertise",
        subtitle: "Sector Specialists",
        description: "We don't just know tech; we know your business. Our teams are led by industry veterans who understand your specific challenges.",
        className: "md:col-span-6 bg-primary/5 border-primary/10",
        visual: (
            <div className="absolute right-0 bottom-4 w-1/3 h-full hidden xl:flex flex-col justify-center items-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="relative p-6 -translate-y-4 transform rotate-6 scale-90 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500">
                    <div className="flex -space-x-4">
                        {[
                            { id: 1, z: "z-30", bg: "bg-muted" },
                            { id: 2, z: "z-20", bg: "bg-background" },
                            { id: 3, z: "z-10", bg: "bg-muted" },
                        ].map((item) => (
                            <div key={item.id} className={`w-12 h-12 rounded-full border-2 border-background ${item.bg} flex items-center justify-center relative ${item.z} shadow-sm`}>
                                <Users className="w-5 h-5 text-muted-foreground" />
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-background/90 backdrop-blur rounded-lg px-4 py-2 text-xs font-bold text-center border border-border/50 shadow-sm text-foreground">
                        Expert Team
                    </div>
                </div>
            </div>
        )
    },
    {
        icon: <Code2 className="w-8 h-8 text-blue-500" />,
        title: "Tailored Architecture",
        subtitle: "Custom Solutions",
        description: "One size fits none. We architect solutions that fit your unique workflows, legacy systems, and future goals.",
        className: "md:col-span-4",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
        title: "Compliance First",
        subtitle: "Security & Regs",
        description: "Built-in adherence to industry regulations (GDPR, HIPAA, PCI-DSS, etc.) from day one.",
        className: "md:col-span-4",
    },
    {
        icon: <LineChart className="w-8 h-8 text-purple-500" />,
        title: "Measurable Impact",
        subtitle: "KPI Driven",
        description: "We focus on the metrics that matter. Reduced costs, faster time-to-market, and improved customer satisfaction.",
        className: "md:col-span-6 bg-purple-500/5 border-purple-500/10",
        visual: (
            <div className="absolute top-1/2 -translate-y-1/2 right-12 hidden xl:block w-32 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                <div className="space-y-3 -translate-y-4 transform -rotate-6 scale-90 group-hover:scale-100 group-hover:rotate-0 transition-all duration-500">
                    <div className="h-2.5 w-full bg-purple-500/20 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-3/4 bg-linear-to-r from-purple-500 to-purple-400 rounded-full" />
                    </div>
                    <div className="h-2.5 w-full bg-purple-500/20 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-[90%] bg-linear-to-r from-purple-500 to-purple-400 rounded-full" />
                    </div>
                    <div className="h-2.5 w-full bg-purple-500/20 rounded-full overflow-hidden shadow-inner">
                        <div className="h-full w-1/2 bg-linear-to-r from-purple-500 to-purple-400 rounded-full" />
                    </div>
                </div>
                <div className="mt-3 text-right text-xs font-bold text-purple-600 dark:text-purple-400 transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    Growth Metrics
                </div>
            </div>
        )
    },
];

export function OurApproach() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-1/3 right-0 w-150 h-150 bg-secondary/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Our Methodology
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Why Leaders Choose <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                            Amaanc
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We combine deep industry knowledge with technical excellence to deliver solutions that are not just functional, but transformative.
                    </p>
                </div>

                {/* Bento Grid Layout */}
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

                                    {/* Render Custom Visual if present */}
                                    {feature.visual}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <Badge variant="secondary" className="w-fit mb-3 bg-secondary/50 text-secondary-foreground/80 hover:bg-secondary/70 transition-colors text-xs font-semibold px-2.5 py-0.5 rounded-md">
                                        {feature.subtitle}
                                    </Badge>

                                    <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl">
                                        {feature.description}
                                    </p>
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
