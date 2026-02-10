"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "How quickly can your team start on a new project?",
        answer: "Our team is designed for agility. Typically, we can initiate the discovery phase within 48-72 hours of contract signing. We'll assemble the right experts for your specific needs and hit the ground running.",
    },
    {
        question: "Do you offer post-implementation support?",
        answer: "Absolutely. We believe in long-term partnerships. We offer various support packages, ranging from on-demand troubleshooting to comprehensive managed services, ensuring your systems continue to operate at peak performance.",
    },
    {
        question: "Can you integrate with our existing legacy systems?",
        answer: "Yes, integration is one of our core strengths. We specialize in connecting modern platforms like Salesforce with legacy ERPs, databases, and custom applications to create a unified data ecosystem.",
    },
    {
        question: "What industries do you specialize in?",
        answer: "While we have broad experience, we have deep expertise in Manufacturing, Financial Services, Healthcare, and Retail. Our solutions are tailored to the specific compliance and operational challenges of these sectors.",
    },
];

export function FaqSection() {
    return (
        <section className="bg-linear-to-r from-primary/5 via-accent/5 to-primary/5 py-16 border-t border-border/50">
            <div className="container px-4 mx-auto max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground max-w-lg mx-auto">
                        Everything you need to know about partnering with Amaanc.
                    </p>
                </div>

                <Accordion className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden [&]:border-b px-0"
                        >
                            <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors hover:no-underline px-6 py-4">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <p className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
