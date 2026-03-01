import { Database, Users, Zap, Network } from "lucide-react";

export function EcosystemOverview() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-accent/5 to-primary/5" />

            {/* Decorative Blobs */}
            <div className="absolute top-0 left-1/4 w-100 h-100 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-accent/10 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                            The Salesforce Cloud{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Ecosystem
                            </span>
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                            Salesforce is more than a CRM—it's a unified, intelligent platform that combines sales automation,
                            customer service excellence, data-driven marketing, and embedded AI to power end-to-end enterprise
                            transformation. With deep integrations across clouds, your teams work from a single source of truth,
                            delivering seamless experiences at every customer touchpoint.
                        </p>
                    </div>

                    {/* Feature Highlights */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Unified Platform */}
                        <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Database className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Unified Data</h3>
                                <p className="text-sm text-muted-foreground">Single source of truth across all clouds</p>
                            </div>
                        </div>

                        {/* AI-Powered */}
                        <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Zap className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">AI-Powered</h3>
                                <p className="text-sm text-muted-foreground">Einstein intelligence embedded everywhere</p>
                            </div>
                        </div>

                        {/* Connected Teams */}
                        <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Connected Teams</h3>
                                <p className="text-sm text-muted-foreground">Seamless collaboration across departments</p>
                            </div>
                        </div>

                        {/* Real-Time Sync */}
                        <div className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/5">
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Network className="w-6 h-6 text-emerald-500" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">Real-Time Sync</h3>
                                <p className="text-sm text-muted-foreground">Instant data flow between all systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
