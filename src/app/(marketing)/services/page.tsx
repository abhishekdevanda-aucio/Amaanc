import { HeroSection } from "./_components/hero-section";
import { CategoriesGrid } from "./_components/categories-grid";
import { FeaturedServices } from "./_components/featured-services";
import { ServicesCTA } from "./_components/services-cta";
import { getCategories } from "@/lib/data/service-categories";

export const metadata = {
    title: "Services | Amaanc",
    description: "Explore our comprehensive digital transformation services including Salesforce, AI, System Integration, and more.",
};

export default function ServicesPage() {
    const categories = getCategories();

    return (
        <>
            <HeroSection />
            <CategoriesGrid categories={categories} />
            <FeaturedServices />
            <ServicesCTA />
        </>
    );
}

