import { ArrowUpRight, Blocks } from "lucide-react";

export function IntegratedApproach() {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-in slide-in-from-left-8 fade-in duration-1000">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase">
                            <Blocks className="h-4 w-4" />
                            <span>Cohesive Solutions</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
                            An Integrated, <br className="hidden md:block" />
                            <span className="font-serif italic text-muted-foreground mr-2">Enterprise-Focused</span>
                            <span className="font-semibold">Approach</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-xl text-balance">
                            We don't just deliver isolated implementations; we build cohesive ecosystems. Our services are designed to work together seamlessly, integrating across your enterprise architecture to multiply impact, eliminate silos, and provide a unified foundation for continuous innovation and growth.
                        </p>

                        <div className="pt-4 flex gap-8">
                            <div className="space-y-2">
                                <h4 className="text-4xl font-light text-foreground">10x</h4>
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Multiplied Impact</p>
                            </div>
                            <div className="w-px bg-border"></div>
                            <div className="space-y-2">
                                <h4 className="text-4xl font-light text-foreground">0</h4>
                                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Data Silos</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-in slide-in-from-right-8 fade-in duration-1000 delay-200">
                        {/* Abstract integration visual */}
                        <div className="aspect-square relative w-full flex items-center justify-center">
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-accent/5 rounded-full blur-3xl" />

                            <div className="relative z-10 w-full max-w-[500px] aspect-square">
                                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-8">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-secondary/40 backdrop-blur-sm border border-border/60 rounded-3xl relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 flex items-center justify-center">
                                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <ArrowUpRight className={`w-10 h-10 text-muted-foreground/30 group-hover:text-primary transition-all duration-500 transform group-hover:scale-110 ${i === 1 ? 'rotate-90' : i === 2 ? 'rotate-180' : i === 3 ? 'rotate-0' : '-rotate-90'}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* Central Hub */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-background border-2 border-primary/20 flex items-center justify-center z-20 shadow-2xl shadow-primary/20 backdrop-blur-md">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-tr from-primary to-accent animate-[spin_8s_linear_infinite] flex items-center justify-center">
                                        <div className="w-[60px] h-[60px] bg-background rounded-full flex items-center justify-center animate-[spin_8s_linear_infinite_reverse]">
                                            <Blocks className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
