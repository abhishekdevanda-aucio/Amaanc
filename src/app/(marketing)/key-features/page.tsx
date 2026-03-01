import { Metadata } from "next";
import { KeyFeaturesHero } from "./_components/hero-section";
import { EcosystemOverview } from "./_components/ecosystem-overview";
import { SalesCloudSection } from "./_components/sales-cloud-section";
import { ServiceCloudSection } from "./_components/service-cloud-section";
import { MarketingCloudSection } from "./_components/marketing-cloud-section";
import { EinsteinAISection } from "./_components/einstein-ai-section";
import { UnifiedPlatformSection } from "./_components/unified-platform-section";
import { CTASection } from "@/app/(marketing)/(home)/_components/cta-section";

export const metadata: Metadata = {
    title: "Salesforce Cloud Key Features | Sales, Service, Marketing & AI | Amaanc",
    description: "Explore comprehensive Salesforce capabilities across Sales Cloud, Service Cloud, Marketing Cloud, and Einstein AI. 15+ years of Salesforce consulting expertise to power your enterprise transformation.",
};

export default function KeyFeaturesPage() {
    return (
        <main className="flex flex-col min-h-screen">
            <KeyFeaturesHero />
            <EcosystemOverview />
            <SalesCloudSection />
            <ServiceCloudSection />
            <MarketingCloudSection />
            <EinsteinAISection />
            <UnifiedPlatformSection />
            <CTASection />
        </main>
    );
}
