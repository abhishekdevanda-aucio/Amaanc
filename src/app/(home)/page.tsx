import { CaseStudiesTeaser } from "./_components/case-studies-teaser";
import { CTASection } from "./_components/cta-section";
import { HeroSection } from "./_components/hero-section";
import { IndustriesSection } from "./_components/industries-section";
import { ServicesOverview } from "./_components/services-overview";
import { StatsSection } from "./_components/stats-section";
import { TestimonialsSection } from "./_components/testimonials-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <IndustriesSection />
      <CaseStudiesTeaser />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
