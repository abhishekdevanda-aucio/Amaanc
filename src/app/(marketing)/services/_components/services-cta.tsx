import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function ServicesCTA() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 lg:p-16">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="services-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#services-grid)" />
                        </svg>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                Let&apos;s discuss how our comprehensive service offerings can help you achieve your digital transformation goals. Our experts are ready to create a tailored solution for your unique challenges.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="inline-flex items-center gap-2"
                                >
                                    <MessageSquare className="h-5 w-5" />
                                    Contact Us Today
                                </Button>
                            </Link>

                            <Link href="/industries" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2"
                                >
                                    View Industries
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
                </div>
            </div>
        </section>
    );
}
