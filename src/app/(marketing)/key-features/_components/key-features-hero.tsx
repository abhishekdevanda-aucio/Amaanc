import { Badge } from "@/components/ui/badge";
import { Sparkles, TerminalSquare, ShieldCheck, Zap } from "lucide-react";

export function KeyFeaturesHero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm group">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Our Key Features
                    </Badge>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-foreground leading-[1.1]">
                        Unleashing Enterprise <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600">
                            Growth & Innovation
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-12">
                        Discover the powerful features and intelligent capabilities that make Amaanc the ideal partner for modernizing your digital infrastructure. We bring robust solutions that work seamlessly across your entire ecosystem.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
                        {[
                            { icon: <TerminalSquare className="w-5 h-5 text-primary" />, label: "Advanced Technology" },
                            { icon: <Zap className="w-5 h-5 text-blue-500" />, label: "High Performance" },
                            { icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, label: "Secure by Design" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center gap-3 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
                                {feature.icon}
                                <span className="font-semibold text-foreground text-sm">{feature.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
