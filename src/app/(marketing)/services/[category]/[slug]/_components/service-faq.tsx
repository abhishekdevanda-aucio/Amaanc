"use client";

import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface ServiceFAQProps {
    service: Service;
}

export function ServiceFAQ({ service }: ServiceFAQProps) {
    const faqs = service.faqs && service.faqs.length > 0
        ? service.faqs
        : [
            {
                question: `What makes your ${service.name} consulting different?`,
                answer: `Our approach combines deep technical expertise with a strong focus on business outcomes. We don't just implement software; we design solutions that drive operational efficiency, user adoption, and measurable ROI.`
            },
            {
                question: `How long does a typical ${service.name} engagement take?`,
                answer: `Timelines vary based on the complexity and scope of the project. A standard implementation can take anywhere from a few weeks for basic setups to several months for complex enterprise deployments. We provide a detailed roadmap during our initial strategy phase.`
            },
            {
                question: `Do you provide support after the implementation is complete?`,
                answer: `Yes, we offer comprehensive managed services and ongoing support to ensure your system continues to evolve with your business needs. This includes performance tuning, user training, and phased enhancements.`
            }
        ];

    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-linear-to-r from-primary/20 via-accent/20 to-purple-500/20 rounded-full blur-[120px]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        <HelpCircle className="w-3.5 h-3.5 mr-2 inline-block" />
                        Support & Clarity
                    </Badge>

                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Frequently Asked{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                            Questions
                        </span>
                    </h2>

                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Find answers to common questions about our {service.name} consulting services.
                    </p>
                </div>

                <div className="relative p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50">
                    <Accordion className="w-full space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="border border-border/50 rounded-xl px-6 bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                            >
                                <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary transition-colors hover:no-underline py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
