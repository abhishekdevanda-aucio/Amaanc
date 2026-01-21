import { CaseStudiesTeaser } from "./_components/case-studies-teaser";
import { CTASection } from "./_components/cta-section";
import { HeroSection } from "./_components/hero-section";
import { IndustriesSection } from "./_components/industries-section";
import { ServicesOverview } from "./_components/services-overview";
import { StatsSection } from "./_components/stats-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { WhyAmaancSection } from "./_components/why-amaanc-section";
import { TrustSection } from "./_components/trust-section";
import { InsightsSection } from "./_components/insights-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyAmaancSection />
      <TrustSection />
      <ServicesOverview />
      <IndustriesSection />
      <CaseStudiesTeaser />
      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
