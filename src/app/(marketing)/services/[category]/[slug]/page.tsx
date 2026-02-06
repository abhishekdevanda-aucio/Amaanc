import { notFound } from "next/navigation";
import {
    getAllServicesForStaticGeneration,
    getServiceBySlug,
    getCategoryBySlug,
    getServicesByCategory
} from "@/data/services";
import { ServiceHero } from "./_components/service-hero";
import { ServiceOverview } from "./_components/service-overview";
import { ProblemsSolutions } from "./_components/problems-solutions";
import { RelatedServices } from "./_components/related-services";
import { ServiceCTA } from "./_components/service-cta";

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

// Generate params for all services at build time
export async function generateStaticParams() {
    const services = await getAllServicesForStaticGeneration();
    return services.map((service) => ({
        category: service.categorySlug,
        slug: service.serviceSlug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug, category } = await params;
    const service = await getServiceBySlug(slug);
    const categoryData = await getCategoryBySlug(category);

    if (!service || !categoryData || service.categorySlug !== category) {
        return {
            title: "Service Not Found | Amaanc",
        };
    }

    return {
        title: `${service.name} | ${categoryData.name} | Amaanc`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { category, slug } = await params;

    // Validate category exists
    const categoryData = await getCategoryBySlug(category);
    if (!categoryData) {
        notFound();
    }

    // Validate service exists and belongs to this category
    const service = await getServiceBySlug(slug);
    if (!service || service.categorySlug !== category) {
        notFound();
    }

    // Get related services (other services in same category, excluding current)
    const allCategoryServices = await getServicesByCategory(category);
    const relatedServices = allCategoryServices
        .filter(s => s.slug !== slug)
        .slice(0, 3);

    return (
        <>
            <ServiceHero service={service} />
            <ServiceOverview service={service} />
            <ProblemsSolutions service={service} />
            <RelatedServices services={relatedServices} categorySlug={category} />
            <ServiceCTA service={service} />
        </>
    );
}
