import { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";
import { CoreValuesSection } from "./_components/core-values-section";
import { OurStorySection } from "./_components/our-story-section";
import { AboutCTASection } from "./_components/cta-section";

export const metadata: Metadata = {
    title: "About Us | Amaanc",
    description: "Learn about Amaanc's journey, our core values, and our commitment to empowering businesses through digital transformation, scalable architecture, and agentic AI.",
};

export default function AboutUsPage() {
    return (
        <>
            <HeroSection />
            <OurStorySection />
            <CoreValuesSection />
            <AboutCTASection />
        </>
    );
}
