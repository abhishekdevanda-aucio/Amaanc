import { Search, PenTool, Hammer, Rocket, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const steps = [
    {
        icon: Search,
        title: "Discover",
        description: "We dive deep into your business goals, challenges, and user needs to define a clear roadmap for success.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
    },
    {
        icon: PenTool,
        title: "Design",
        description: "Our architects and designers create scalable, user-centric solutions that align with your brand and technical requirements.",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
    },
    {
        icon: Hammer,
        title: "Build",
        description: "We implement the solution using agile methodologies, ensuring rapid delivery, code quality, and seamless integration.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
    },
    {
        icon: Rocket,
        title: "Launch",
        description: "We manage the deployment process, ensuring security, performance, and a smooth go-live experience.",
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
    },
    {
        icon: LineChart,
        title: "Scale",
        description: "Post-launch, we continuously monitor, optimize, and enhance your solution to drive long-term growth.",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
    },
]

export function HowWeWorkSection() {
    return (
        <section className="py-20 lg:py-28 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
                    {/* Header Content */}
                    <div className="lg:sticky lg:top-32">
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Our Process
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            How We <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Get Things Done
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            A transparent, agile journey from concept to scalable reality. We believe in clear communication and iterative progress.
                        </p>
                        {/* Optional: Add a CTA or additional info here if needed */}
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
