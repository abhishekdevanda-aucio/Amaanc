import { HeroSection } from "./_components/hero-section";
import { IndustryTicker } from "./_components/industry-ticker";
import { IndustriesGrid } from "./_components/industries-grid";
import { OtherIndustries } from "./_components/other-industries";
import { OurApproach } from "./_components/our-approach";

export const metadata = {
    title: "Industries | Amaanc",
    description: "Explore our industry-specific digital transformation solutions for Finance, Banking, Utilities, and more.",
};

export default function IndustriesPage() {
    return (
        <>
            <HeroSection />
            <IndustryTicker />
            <IndustriesGrid />
            <OurApproach />
            <OtherIndustries />
        </>
    );
}
