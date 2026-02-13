import {
    Cloud,
    Share2,
    Server,
    GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const techCategories = [
    {
        title: "Strategic Salesforce & AI",
        icon: <Cloud className="w-6 h-6 text-primary" />,
        description: "Intelligence-Driven CRM",
        items: ["Data Cloud", "Agentforce", "Einstein AI", "Sales & Service Clouds", "Revenue Cloud (CPQ)", "Tableau", "Industry Clouds"]
    },
    {
        title: "Seamless Ecosystem Connectivity",
        icon: <Share2 className="w-6 h-6 text-blue-500" />,
        description: "Unified Digital Architecture",
        items: ["MuleSoft", "Boomi", "Jitterbit", "Kafka", "REST/SOAP APIs", "Snowflake", "Azure Logic Apps", "Custom Connectors"]
    },
    {
        title: "Enterprise Backend Solutions",
        icon: <Server className="w-6 h-6 text-emerald-500" />,
        description: "Resilient Infrastructure",
        items: [".NET Core", "SAP S/4HANA", "Azure", "C#", "Microsoft SQL Server", "Microservices", "Legacy Modernization"]
    },
    {
        title: "Lifecycle Operations",
        icon: <GitBranch className="w-6 h-6 text-amber-500" />,
        description: "Managed Quality & Stability",
        items: ["CI/CD Pipelines", "GitHub Actions", "Automated Testing (Selenium)", "Jira", "Azure DevOps", "Managed Services"]
    }
];

export function TechExpertiseSection() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Technology Stack
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        The Technical Architecture of <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Excellence</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Orchestrating a sophisticated technology stack to deliver resilient, AI-driven ecosystems designed for global enterprise scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techCategories.map((category, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col h-full p-6 rounded-3xl border border-border/50 bg-card/30 backdrop-blur-sm hover:shadow-xl hover:bg-card hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/0 via-primary/50 to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-5">
                                    <div className="p-3 rounded-2xl bg-background shadow-xs border border-border/60 group-hover:scale-110 transition-transform duration-300">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground leading-tight">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-medium text-primary mb-6 leading-relaxed font-semibold">
                                    {category.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {category.items.map((item, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="px-2 py-1 text-[10px] font-medium bg-background/80 border border-border/40 text-foreground/70 group-hover:border-primary/20 group-hover:text-foreground transition-colors cursor-default"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
