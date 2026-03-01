import { notFound } from "next/navigation";
import { getServiceCategories, getCategoryBySlug, getServicesByCategory } from "@/data/services";
import { CategoryHero } from "./_components/category-hero";
import { CategoryOverview } from "./_components/category-overview";
import { ServicesGrid } from "./_components/services-grid";
import { CategoryImpact } from "./_components/category-impact";
import { IntegratedApproach } from "./_components/integrated-approach";

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

// Generate params for all categories at build time
export async function generateStaticParams() {
    const categories = await getServiceCategories();
    return categories.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { category } = await params;
    const categoryData = await getCategoryBySlug(category);

    if (!categoryData) {
        return {
            title: "Category Not Found | Amaanc",
        };
    }

    return {
        title: `${categoryData.name} | Services | Amaanc`,
        description: categoryData.description,
    };
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;
    const categoryData = await getCategoryBySlug(category);

    if (!categoryData) {
        notFound();
    }

    const services = await getServicesByCategory(category);
    const allCategories = await getServiceCategories();

    return (
        <>
            <CategoryHero category={categoryData} serviceCount={services.length} />
            <CategoryOverview category={categoryData} />
            <ServicesGrid services={services} categorySlug={category} />
            <CategoryImpact category={categoryData} />
            <IntegratedApproach />
        </>
    );
}
