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
        <section className="py-20 bg-background border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                    <HelpCircle className="w-4 h-4 mr-2 inline-block" />
                    Support & Clarity
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-foreground">
                    Frequently Asked Questions
                </h2>

                <div className="text-left">
                    <Accordion className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-lg font-medium text-left hover:text-primary transition-colors hover:no-underline py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
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
