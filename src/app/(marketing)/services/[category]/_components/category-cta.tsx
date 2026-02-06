import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { ServiceCategory } from "@/data/service-categories";

interface CategoryCTAProps {
    category: ServiceCategory;
}

export function CategoryCTA({ category }: CategoryCTAProps) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="relative overflow-hidden rounded-2xl bg-primary p-8 md:p-12 lg:p-16">
                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                                Ready to Get Started with {category.name}?
                            </h2>
                            <p className="text-primary-foreground/80 text-lg leading-relaxed">
                                Our experts are ready to discuss how we can help you achieve your goals.
                                Let&apos;s create a tailored solution for your unique challenges.
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
                                    Contact Us
                                </Button>
                            </Link>

                            <Link href="/services" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 inline-flex items-center gap-2"
                                >
                                    <ArrowLeft className="h-5 w-5" />
                                    All Services
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
