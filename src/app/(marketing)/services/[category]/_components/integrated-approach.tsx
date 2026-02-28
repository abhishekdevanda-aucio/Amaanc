import { Badge } from "@/components/ui/badge";
import { ArrowRight, Blocks } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function IntegratedApproach() {
    return (
        <section className="py-20 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            <Blocks className="w-4 h-4 mr-2 inline-block" />
                            Cohesive Solutions
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            An Integrated, <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Enterprise-Focused
                            </span> Approach
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            We don't just deliver isolated implementations; we build cohesive ecosystems. Our services are designed to work together seamlessly, integrating across your enterprise architecture to multiply impact, eliminate silos, and provide a unified foundation for continuous innovation and growth.
                        </p>
                        <Link href="/contact-us">
                            <Button size="lg" className="w-full sm:w-auto">
                                Transform Your Architecture
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="aspect-square relative flex items-center justify-center bg-secondary/20 rounded-3xl border border-border/50 p-8 shadow-sm">
                            <div className="absolute inset-0 bg-linear-to-bl from-primary/5 to-transparent rounded-3xl" />
                            <div className="grid grid-cols-2 gap-4 w-full h-full relative z-10">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-background border border-border/60 rounded-xl shadow-xs flex items-center justify-center">
                                        <Blocks className={`w-8 h-8 text-muted-foreground/30 ${i === 1 ? 'rotate-90' : i === 2 ? 'rotate-180' : i === 3 ? 'rotate-0' : '-rotate-90'}`} />
                                    </div>
                                ))}
                                {/* Central connection */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center z-20 shadow-lg shadow-primary/20 border-4 border-background">
                                    <Blocks className="w-6 h-6 text-primary-foreground" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
