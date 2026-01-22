import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Trophy, Users, Zap, ShieldCheck } from "lucide-react";

export function WhyChooseUsSection() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4 animate-in slide-in-from-bottom duration-700">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Partner with Amaanc?</h2>
                    <p className="text-muted-foreground max-w-175 mx-auto text-lg md:text-xl">
                        We blend technical expertise with business acumen to deliver solutions that matter.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(200px,auto)]">
                    {/* Feature 1 - Large Card */}
                    <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden group border-none shadow-xl bg-slate-900 text-white dark:bg-card">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/80 to-purple-900/80 opacity-90 transition-opacity group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />

                        <CardHeader className="relative z-10">
                            <Badge className="w-fit mb-2 bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">
                                Since 2012
                            </Badge>
                            <CardTitle className="text-3xl md:text-4xl font-bold text-white">Legacy of Excellence</CardTitle>
                        </CardHeader>

                        <CardContent className="relative z-10 space-y-6">
                            <p className="text-white/90 text-lg leading-relaxed max-w-md">
                                We&apos;ve evolved from a boutique agency to a global digital powerhouse. Our journey is defined by the businesses we&apos;ve transformed and the innovations we&apos;ve pioneered.
                            </p>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                                    <div className="text-3xl font-bold text-white mb-1">15+</div>
                                    <div className="text-sm text-white/70 font-medium">Years Experience</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
                                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                                    <div className="text-sm text-white/70 font-medium">Client Retention</div>
                                </div>
                            </div>
                        </CardContent>

                        {/* Decorative huge icon */}
                        <Trophy className="absolute -bottom-12 -right-12 h-64 w-64 text-white/5 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                    </Card>

                    {/* Feature 2 */}
                    <Card className="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-accent">
                        <CardHeader>
                            <Zap className="h-8 w-8 text-accent mb-2 group-hover:rotate-12 transition-transform" />
                            <CardTitle>Technical Excellence</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Deep expertise in Salesforce, AI, and modern web application development.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Feature 3 */}
                    <Card className="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-primary">
                        <CardHeader>
                            <Users className="h-8 w-8 text-primary mb-2 group-hover:translate-x-1 transition-transform" />
                            <CardTitle>Client-Centric</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                We prioritize your business goals and work as an extension of your team.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Feature 4 */}
                    <Card className="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-green-500">
                        <CardHeader>
                            <CheckCircle2 className="h-8 w-8 text-green-500 mb-2 group-hover:scale-110 transition-transform" />
                            <CardTitle>Innovation First</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Staying ahead of the curve with the latest technologies and best practices.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Feature 5 */}
                    <Card className="hover:shadow-lg transition-all duration-300 group border-l-4 border-l-purple-500">
                        <CardHeader>
                            <ShieldCheck className="h-8 w-8 text-purple-500 mb-2 group-hover:scale-110 transition-transform" />
                            <CardTitle>Reliable Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Enterprise-grade security standards in everything we build.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
