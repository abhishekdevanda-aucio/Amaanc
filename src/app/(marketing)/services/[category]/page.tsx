import { notFound } from "next/navigation";
import { getServiceCategories, getCategoryBySlug, getServicesByCategory } from "@/lib/data/services";
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
            <ServicesGrid services={services} categorySlug={category} />
            <MoreCategories categories={allCategories} currentCategorySlug={category} />
            <CategoryCTA category={categoryData} />
        </>
    );
}
