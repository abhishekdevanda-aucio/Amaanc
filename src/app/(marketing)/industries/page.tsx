import { HeroSection } from "./_components/hero-section";
import { IndustryTicker } from "./_components/industry-ticker";
import { IndustriesGrid } from "./_components/industries-grid";
import { OtherIndustries } from "./_components/other-industries";
import { OurApproach } from "./_components/our-approach";
import { getIndustries } from "@/data/industries";

export const metadata = {
    title: "Industries | Amaanc",
    description: "Explore our industry-specific digital transformation solutions for Finance, Banking, Utilities, and more.",
};

// Revalidate every hour
export const revalidate = 3600;

export default async function IndustriesPage() {
    const industries = await getIndustries();

    return (
        <>
            <HeroSection />
            <IndustryTicker />
            <IndustriesGrid industries={industries} />
            <OurApproach />
            <OtherIndustries />
        </>
    );
}
