import { CaseStudiesTeaser } from "./_components/case-studies-teaser";
import { CTASection } from "./_components/cta-section";
import { HeroSection } from "./_components/hero-section";
import { IndustriesSection } from "./_components/industries-section";
import { HowWeAreDifferentSection } from "./_components/how-we-are-different";
import { HowWeWorkSection } from "./_components/how-we-work";
import { ServicesOverview } from "./_components/services-overview";
import { StatsSection } from "./_components/stats-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { WhyAmaancSection } from "./_components/why-amaanc-section";
import { InsightsSection } from "./_components/insights-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyAmaancSection />
      <ServicesOverview />
      <IndustriesSection />
      <HowWeAreDifferentSection />
      <HowWeWorkSection />
      <CaseStudiesTeaser />
      <InsightsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
