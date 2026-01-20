import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-primary" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="container px-4 md:px-6 text-center space-y-8 relative z-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground max-w-2xl mx-auto">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-[600px] mx-auto leading-relaxed">
                    Let's discuss how we can help you achieve your goals with our tailored solutions.
                    Join the hundreds of businesses growing with Amaanc.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                    <Button size="lg" variant="secondary" className="h-14 px-8 text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
                        <Link href="/contact" className="gap-2">
                            Get in Touch <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="h-14 px-8 text-base rounded-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm"
                    >
                        View Case Studies
                    </Button>
                </div>

                <p className="text-sm text-primary-foreground/60 pt-8">
                    No credit card required for initial consultation.
                </p>
            </div>
        </section>
    );
}
