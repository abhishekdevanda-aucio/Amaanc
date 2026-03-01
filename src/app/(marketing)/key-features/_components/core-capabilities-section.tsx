import { Badge } from "@/components/ui/badge";
import {
    Layers,
    Zap,
    ShieldCheck,
    BarChart3,
    Globe2,
    Cpu
} from "lucide-react";

const capabilities = [
    {
        title: "Limitless Scalability",
        description: "Built on modern cloud-native architectures that automatically scale to meet the shifting demands of enterprise workloads.",
        icon: <Layers className="w-6 h-6 text-blue-500" />,
        color: "bg-blue-500/10 border-blue-500/20"
    },
    {
        title: "AI-Powered Intelligence",
        description: "Embedded machine learning and AI algorithms that turn raw data into actionable insights for smarter decision-making.",
        icon: <Cpu className="w-6 h-6 text-primary" />,
        color: "bg-primary/10 border-primary/20"
    },
    {
        title: "Bank-Grade Security",
        description: "Enterprise-level encryption, compliance frameworks, and zero-trust security architecture to keep your data safe.",
        icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
        color: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
        title: "Real-time Analytics",
        description: "Comprehensive dashboards and reporting tools providing deep visibility into your operations instantaneously.",
        icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
        color: "bg-amber-500/10 border-amber-500/20"
    },
    {
        title: "Lightning Performance",
        description: "Optimized response times, edge computing, and performant codebases ensuring a seamless user experience.",
        icon: <Zap className="w-6 h-6 text-rose-500" />,
        color: "bg-rose-500/10 border-rose-500/20"
    },
    {
        title: "Global Reach",
        description: "Distributed infrastructure guaranteeing high availability and low latency across all geographic regions.",
        icon: <Globe2 className="w-6 h-6 text-indigo-500" />,
        color: "bg-indigo-500/10 border-indigo-500/20"
    }
];

export function CoreCapabilitiesSection() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                        Core Capabilities
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Engineered for <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Our platform is equipped with industry-leading capabilities designed to future-proof your business operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {capabilities.map((capability, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${capability.color} bg-background group-hover:scale-110 transition-transform duration-300`}>
                                {capability.icon}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {capability.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {capability.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
