import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Check, Code2, Cpu, Layers } from "lucide-react";

interface ServiceOverviewProps {
    service: Service;
}

export function ServiceOverview({ service }: ServiceOverviewProps) {
    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <Badge variant="outline" className="mb-4 p-4 border-primary/20 bg-primary/5 text-primary">
                        Service Ecosystem
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Holistic Value Delivery
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A comprehensive view of how we deliver value through our {service.name.toLowerCase()} capabilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                    {/* Block 1: The Core Value (Large, Top Left) */}
                    <div className="md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 animate-in slide-in-from-bottom-5 fade-in delay-100">
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <Badge variant="outline" className="mb-2 p-2 border-primary/20 bg-primary/5 text-primary">
                                    Strategic Impact
                                </Badge>
                                <h3 className="text-2xl font-bold mb-4">{service.shortDescription}</h3>
                                <p className="text-muted-foreground leading-relaxed max-w-xl">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Block 2: The Tech Engine (Tall, Right) */}
                    <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-3xl border border-border/50 bg-card text-card-foreground p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 animate-in slide-in-from-bottom-5 fade-in delay-200">
                        {/* Abstract Circuit Background */}
                        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-50" />
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-6 text-primary">
                                <Cpu className="w-5 h-5" />
                                <span className="text-sm font-bold uppercase tracking-wider">Tech Engine</span>
                            </div>

                            <div className="space-y-3 flex-1">
                                {service.techStack.map((tech, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors group/item">
                                        <Code2 className="w-4 h-4 text-muted-foreground group-hover/item:text-primary transition-colors" />
                                        <span className="font-medium text-sm text-foreground transition-colors">{tech}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-muted-foreground">Infrastructure</span>
                                    <Badge variant="secondary" className="p-2 bg-primary/10 text-primary border-primary/20">
                                        Enterprise Grade
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Block 3: Key Capabilities (Grid, Bottom Left) */}
                    <div className="md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl border border-border/50 bg-secondary/20 p-8 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
                        <div className="flex items-center gap-2 mb-6">
                            <Layers className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold">Core Capabilities</h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {service.features.slice(0, 6).map((feature, idx) => (
                                <div key={idx} className="group flex items-center gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <Check className="w-3 h-3 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
