import { Search, Lightbulb, Hammer, LineChart, Trophy, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Discovery",
        description: "In-depth analysis of your current infrastructure and business goals to identify key opportunities.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        number: "02",
        icon: Lightbulb,
        title: "Strategy",
        description: "Developing a tailored roadmap utilizing best-in-class technology solutions specific to your sector.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        number: "03",
        icon: Hammer,
        title: "Implementation",
        description: "Agile deployment ensuring minimal disruption, rapid ROI, and seamless integration with existing systems.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        number: "04",
        icon: LineChart,
        title: "Optimization",
        description: "Continuous monitoring, refinement, and scaling to ensure sustained growth and long-term success.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
];

export function DetailProcess() {
    return (
        <section className="py-24 bg-secondary/30 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

                    {/* Header Content - Sticky Left Column */}
                    <div className="lg:sticky lg:top-32 text-center lg:text-left">
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Our Methodology
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                            A Proven Path to <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Digital Excellence
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We follow a structured, iterative process designed to deliver high-impact results while managing risk and ensuring alignment with your strategic vision.
                        </p>

                        {/* Desktop Insight Card */}
                        <div className="hidden lg:block mt-12 relative group max-w-md">
                            {/* Gradient Border/Glow Effect */}
                            <div className="absolute -inset-0.5 bg-linear-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

                            <div className="relative rounded-2xl bg-card/40 backdrop-blur-xl border border-white/10 p-6 overflow-hidden">
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                                            <Trophy className="h-6 w-6 text-primary" />
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight">
                                            Outcome-Focused
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Every step is measured against Key Performance Indicators (KPIs) to ensure tangible business value.
                                    </p>

                                    <Link href="/contact" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link">
                                        Start Your Journey
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps List - Right Column */}
                    <div className="relative space-y-8 lg:space-y-12 pt-4">
                        {/* Vertical Connector Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-border md:left-8 border-l-2 border-dashed border-border/60" />

                        {steps.map((step, index) => (
                            <div key={index} className="relative flex gap-6 group">
                                {/* Icon */}
                                <div className={cn(
                                    "relative z-10 shrink-0 w-16 h-16 rounded-2xl border-2 flex items-center justify-center bg-background transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                                    step.border,
                                    step.bg
                                )}>
                                    <step.icon className={cn("w-7 h-7", step.color)} />
                                </div>

                                {/* Content */}
                                <div className="pt-2">
                                    <h3 className={cn("text-xl font-bold mb-3 transition-colors duration-300", step.color)}>
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
