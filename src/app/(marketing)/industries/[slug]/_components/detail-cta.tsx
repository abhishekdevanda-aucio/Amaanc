import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Industry } from "@/lib/data/industries";

interface DetailCTAProps {
    industry: Industry;
}

export function DetailCTA({ industry }: DetailCTAProps) {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 md:p-12 lg:p-16 shadow-2xl">

                    {/* Decorative Elements - Blurs */}
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-20">
                        {/* Text Content */}
                        <div className="max-w-3xl flex-1">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance leading-tight">
                                Ready to Transform Your <br className="hidden lg:block" />
                                {industry.title} Operations?
                            </h2>
                            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
                                Leverage our deep expertise in {industry.title.toLowerCase()} to drive efficiency, innovation, and growth. Let&apos;s build a future-proof roadmap together.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-4 md:gap-8">
                                <div className="flex items-center gap-2 text-primary-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span className="font-medium">Industry-Specific Solutions</span>
                                </div>
                                <div className="flex items-center gap-2 text-primary-foreground/90">
                                    <CheckCircle2 className="w-5 h-5 text-accent" />
                                    <span className="font-medium">Rapid ROI</span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="h-14 px-8 w-full sm:w-auto text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all gap-2"
                                >
                                    <Calendar className="h-5 w-5" />
                                    Schedule Consultation
                                </Button>
                            </Link>

                            <Link href="/services" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 w-full sm:w-auto text-base bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2"
                                >
                                    Explore Services
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Line */}
                <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <p className="text-sm text-muted-foreground font-medium">
                        Trusted by leading {industry.title.toLowerCase()} enterprises worldwide
                    </p>
                </div>
            </div>
        </section>
    );
}
