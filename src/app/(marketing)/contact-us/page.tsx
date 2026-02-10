import { Metadata } from "next";
import { ContactHero } from "./_components/contact-hero";
import { ContactContent } from "./_components/contact-content";
import { FaqSection } from "./_components/faq-section";
import { MapEmbed } from "./_components/map-embed";

export const metadata: Metadata = {
    title: "Contact Us | Amaanc Limited",
    description:
        "Get in touch with Amaanc for Salesforce consulting, AI solutions, and enterprise integrations. Visit our office or send us a message today.",
};

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactContent />
            <MapEmbed />
            <FaqSection />
        </>
    );
}
