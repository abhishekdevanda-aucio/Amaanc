import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { ServiceForm } from "../_components/service-form"
import { getCategoryBySlug } from "../../_actions/get-category-by-slug"

interface PageProps {
    params: Promise<{ categorySlug: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { categorySlug } = await params
    const supabase = await createClient()

    const { data: category } = await supabase
        .from("service_categories")
        .select("name")
        .eq("slug", categorySlug)
        .single()

    return {
        title: category ? `New Service | ${category.name} | Dashboard` : "Category Not Found",
    }
}

export default async function NewServicePage({ params }: PageProps) {
    const { categorySlug } = await params

    const category = await getCategoryBySlug(categorySlug)

    if (!category) {
        notFound()
    }

    return (
        <div className="flex flex-col gap-8 p-6 w-full">
            <ServiceForm category={category} />
        </div>
    )
}
