import Link from "next/link"
import { Search, PenTool, Hammer, Rocket, LineChart, ArrowRight, Trophy } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const steps = [
    {
        icon: Search,
        title: "Strategic Discovery",
        description: "We perform a deep-dive analysis of your architectural landscape and business KPIs to define a high-impact roadmap for success.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        icon: PenTool,
        title: "Solution Architecture",
        description: "Our lead architects design resilient, scalable enterprise solutions that seamlessly integrate with your existing tech stack and brand vision.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        icon: Hammer,
        title: "Precision Engineering",
        description: "Leveraging agile methodologies and modern DevOps (CI/CD), we deliver high-quality code and robust system integrations at speed.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        icon: Rocket,
        title: "Deployment & Validation",
        description: "We orchestrate the go-live process with rigorous security auditing and performance testing to ensure mission-critical stability.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
    {
        icon: LineChart,
        title: "Managed Optimization & Customer Success",
        description: "Post-deployment, we provide continuous monitoring and strategic enhancements to drive long-term ROI and operational growth.",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
    },
]

export function HowWeWorkSection() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
                    {/* Header Content */}
                    <div className="lg:sticky lg:top-32 text-center lg:text-left">
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Strategic Methodology
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            The Blueprint for <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Enterprise Success
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            A transparent, high-velocity journey from initial architecture to global scale. We harmonize technical precision with strategic business objectives to ensure every deployment delivers maximum impact.
                        </p>
                        {/* Desktop Process Insight Card */}
                        <div className="hidden lg:block mt-12 relative group">
                            {/* Gradient Border/Glow Effect - Enhanced Blue Glow */}
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />

                            <div className="relative rounded-2xl bg-card/40 backdrop-blur-xl border border-white/10 p-6 overflow-hidden shadow-lg">
                                <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10 shrink-0 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                                            <Trophy className="h-6 w-6 text-primary" />
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight">
                                            Architectural Excellence
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        Our refined delivery framework is built upon <span className="text-primary font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">13+ years</span> of technical leadership, designed to mitigate enterprise risk and accelerate your digital evolution.
                                    </p>

                                    <Link href="/case-studies" className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors group/link">
                                        View Success Stories
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Steps List */}
                    <div className="relative space-y-8 lg:space-y-12">
                        {/* Vertical Connector Line */}
                        <div className="absolute left-8 top-8 bottom-8 w-px bg-border md:left-8 dashed-line" />

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
    )
}
