import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function OtherIndustries() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 lg:p-16">

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                                Don&apos;t See Your Industry?
                            </h2>
                            <blockquote className="text-primary-foreground/90 text-xl font-medium italic leading-relaxed mb-6 border-l-4 border-primary-foreground/30 pl-4 py-1">
                                While we have deep experience in the sectors above, our solutions are adaptable. We welcome the opportunity to partner with clients in any sector seeking digital transformation.
                            </blockquote>
                            <p className="text-primary-foreground/70">
                                Our core technologies—Salesforce, AI, and Cloud Integrations—are industry-agnostic. Let&apos;s talk about your specific needs.
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

                            <Link href="/services" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2"
                                >
                                    View All Services
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
