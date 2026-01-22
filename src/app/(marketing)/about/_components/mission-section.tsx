import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Rocket, Target, Users, Zap } from "lucide-react";

export function MissionSection() {
    return (
        <section id="mission" className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-8 animate-in slide-in-from-left duration-700 delay-200">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="text-primary bg-primary/10 hover:bg-primary/20 transition-colors">
                                Who We Are
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Driven by a Passion for <span className="text-primary">Solutions</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                At Amaanc, we describe ourselves as &quot;Solution Junkies.&quot; We don&apos;t just write code; we solve complex business
                                problems. Since 2012, we have been dedicated to helping businesses leverage technology to streamline
                                operations and drive growth.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <Card className="bg-muted/50 border-none shadow-sm hover:shadow-md transition-all duration-300 group">
                                <CardContent className="p-6 space-y-3">
                                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <Target className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Our Mission</h3>
                                    <p className="text-sm text-muted-foreground">
                                        To empower organizations with intelligent, scalable technology solutions that deliver measurable results.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="bg-muted/50 border-none shadow-sm hover:shadow-md transition-all duration-300 group">
                                <CardContent className="p-6 space-y-3">
                                    <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                                        <Rocket className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Our Vision</h3>
                                    <p className="text-sm text-muted-foreground">
                                        To be the preferred partner for businesses seeking to innovate and excel in the digital age.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <div className="relative lg:h-150 h-100 rounded-2xl overflow-hidden border bg-background shadow-2xl animate-in slide-in-from-right duration-700 delay-200 group">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5" />

                        {/* Abstract Visual Elements */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-8">
                            {/* Floating Elements Animation */}
                            <div className="relative w-full max-w-75 aspect-square">
                                <div className="absolute top-0 right-0 p-4 bg-card rounded-xl shadow-lg animate-bounce delay-100 border">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <div className="absolute bottom-10 left-0 p-4 bg-card rounded-xl shadow-lg animate-bounce delay-700 border">
                                    <Zap className="h-8 w-8 text-accent" />
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-card rounded-2xl shadow-xl border">
                                    <CheckCircle2 className="h-12 w-12 text-green-500" />
                                </div>
                            </div>

                            <div className="space-y-2 relative z-10">
                                <h4 className="text-2xl font-bold">15+ Years of Excellence</h4>
                                <p className="text-muted-foreground">Delivering robust solutions across industries.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
