import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function AboutCTASection() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-blue-600 to-accent p-8 md:p-12 lg:p-16 shadow-2xl">

                    {/* Decorative background elements inside the primary card */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-black/10 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance tracking-tight">
                                Ready to rethink what's possible?
                            </h2>
                            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed max-w-2xl">
                                Join forces with Amaanc. We bring the architectural vision and execution horsepower to turn your most ambitious ideas into reality. Let's build the future together.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto h-14 px-8 text-base rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 inline-flex items-center gap-2 bg-background text-foreground hover:bg-background/90"
                                >
                                    <Calendar className="h-5 w-5" />
                                    Partner With Us
                                </Button>
                            </Link>

                            <Link href="/services" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto h-14 px-8 text-base rounded-full bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2 hover:border-primary-foreground transition-all"
                                >
                                    Explore Services
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Global reach badge below CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                        Transforming Businesses Worldwide • Uncompromising Quality • Agile Execution
                    </p>
                </div>

            </div>
        </section>
    );
}
