import { TrendingUp, HeadphonesIcon, Megaphone, Sparkles, Zap } from "lucide-react";

export function UnifiedPlatformSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-accent/5 to-purple-500/5" />
            {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" /> */}

            {/* Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-primary/30 via-accent/30 to-purple-500/30 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Connected Intelligence{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-purple-500">
                            Across the Enterprise
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Every Salesforce cloud operates within a unified data foundation—Customer 360. Your sales, service,
                        and marketing teams share real-time customer insights, while Einstein AI layers predictive intelligence
                        across every interaction. The result? Seamless workflows, deeper customer understanding, and accelerated
                        business outcomes at enterprise scale.
                    </p>
                </div>

                {/* Visual Connection Diagram */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Glassmorphism Card Container */}
                    <div className="relative p-8 md:p-12 rounded-3xl bg-card/30 backdrop-blur-xl border border-white/10 shadow-2xl">
                        {/* Inner Pattern */}
                        <div className="absolute inset-0 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.15),transparent_50%)]" />
                        </div>

                        <div className="relative z-10">
                            {/* Connection Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                                {/* Sales Cloud */}
                                <div className="text-center group">
                                    <div className="relative mb-4 inline-block">
                                        <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                                            <TrendingUp className="w-10 h-10 text-blue-500" />
                                        </div>
                                        {/* Connection Line - Hidden on mobile */}
                                        <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-linear-to-r from-blue-500/50 to-emerald-500/50" />
                                    </div>
                                    <div className="text-sm font-bold text-foreground">Sales Cloud</div>
                                    <div className="text-xs text-muted-foreground mt-1">Pipeline & Revenue</div>
                                </div>

                                {/* Service Cloud */}
                                <div className="text-center group">
                                    <div className="relative mb-4 inline-block">
                                        <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110">
                                            <HeadphonesIcon className="w-10 h-10 text-emerald-500" />
                                        </div>
                                        {/* Connection Line - Hidden on mobile */}
                                        <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-linear-to-r from-emerald-500/50 to-purple-500/50" />
                                    </div>
                                    <div className="text-sm font-bold text-foreground">Service Cloud</div>
                                    <div className="text-xs text-muted-foreground mt-1">Support & Experience</div>
                                </div>

                                {/* Marketing Cloud */}
                                <div className="text-center group">
                                    <div className="relative mb-4 inline-block">
                                        <div className="w-20 h-20 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
                                            <Megaphone className="w-10 h-10 text-purple-500" />
                                        </div>
                                        {/* Connection Line - Hidden on mobile */}
                                        <div className="hidden lg:block absolute top-1/2 left-full w-16 h-0.5 bg-linear-to-r from-purple-500/50 to-amber-500/50" />
                                    </div>
                                    <div className="text-sm font-bold text-foreground">Marketing Cloud</div>
                                    <div className="text-xs text-muted-foreground mt-1">Campaigns & Journeys</div>
                                </div>

                                {/* Einstein AI */}
                                <div className="text-center group">
                                    <div className="relative mb-4 inline-block">
                                        <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-all duration-300 group-hover:scale-110">
                                            <Sparkles className="w-10 h-10 text-amber-500" />
                                        </div>
                                    </div>
                                    <div className="text-sm font-bold text-foreground">Einstein AI</div>
                                    <div className="text-xs text-muted-foreground mt-1">Intelligence & Automation</div>
                                </div>
                            </div>

                            {/* Central Customer 360 Hub */}
                            <div className="text-center">
                                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-primary/20 via-accent/20 to-purple-500/20 border border-white/20 backdrop-blur-sm">
                                    <Zap className="w-6 h-6 text-primary animate-pulse" />
                                    <div>
                                        <div className="text-lg font-bold text-foreground">Customer 360</div>
                                        <div className="text-xs text-muted-foreground">Unified Data Foundation</div>
                                    </div>
                                </div>
                            </div>

                            {/* Benefits List */}
                            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary mb-2">Single Source</div>
                                    <div className="text-sm text-muted-foreground">of customer truth across all teams</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-accent mb-2">Real-Time Sync</div>
                                    <div className="text-sm text-muted-foreground">data flows automatically between clouds</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-500 mb-2">AI-Powered</div>
                                    <div className="text-sm text-muted-foreground">insights embedded everywhere</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
