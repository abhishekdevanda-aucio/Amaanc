import { notFound } from "next/navigation";
import { getCategories, getCategoryBySlug } from "@/lib/data/service-categories";
import { getServicesByCategory } from "@/lib/data/services";
import { CategoryHero } from "./_components/category-hero";
import { ServicesGrid } from "./_components/services-grid";
import { CategoryCTA } from "./_components/category-cta";
import { MoreCategories } from "./_components/more-categories";

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

// Generate params for all categories at build time
export async function generateStaticParams() {
    const categories = getCategories();
    return categories.map((category) => ({
        category: category.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { category } = await params;
    const categoryData = getCategoryBySlug(category);

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
    const categoryData = getCategoryBySlug(category);

    if (!categoryData) {
        notFound();
    }

    const services = getServicesByCategory(category);
    const allCategories = getCategories();

    return (
        <>
            <CategoryHero category={categoryData} serviceCount={services.length} />
            <ServicesGrid services={services} categorySlug={category} />
            <MoreCategories categories={allCategories} currentCategorySlug={category} />
            <CategoryCTA category={categoryData} />
        </>
    );
}
