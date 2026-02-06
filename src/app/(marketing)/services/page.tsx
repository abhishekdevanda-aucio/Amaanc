import { HeroSection } from "./_components/hero-section";
import { CategoriesGrid } from "./_components/categories-grid";
import { FeaturedServices } from "./_components/featured-services";
import { ServicesCTA } from "./_components/services-cta";
import { getServiceCategories } from "@/data/services";

export const metadata = {
    title: "Services | Amaanc",
    description: "Explore our comprehensive digital transformation services including Salesforce, AI, System Integration, and more.",
};

export default async function ServicesPage() {
    const categories = await getServiceCategories();

    return (
        <>
            <HeroSection />
            <CategoriesGrid categories={categories} />
            <FeaturedServices />
            <ServicesCTA />
        </>
    );
}
