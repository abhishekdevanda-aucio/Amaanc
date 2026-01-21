import { Users, Target, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-background">
            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">

                    <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm animate-in fade-in zoom-in duration-500">
                        Our Story
                    </Badge>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Driven by <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                            Innovation & Purpose
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        Since 2012, Amaanc has been a trusted partner for businesses seeking to leverage the power of Salesforce and AI. We are a team of dedicated problem solvers committed to driving your success.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {/* Small stats or values as pills/cards */}
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/50 backdrop-blur-sm shadow-xs">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium">Expert Team</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/50 backdrop-blur-sm shadow-xs">
                            <Target className="w-4 h-4 text-accent" />
                            <span className="text-sm font-medium">Results Driven</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 border border-border/50 backdrop-blur-sm shadow-xs">
                            <Zap className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">AI Powered</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
