import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import { ServiceForm } from "../_components/service-form"

interface PageProps {
    params: Promise<{ categorySlug: string; serviceSlug: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { serviceSlug } = await params
    const supabase = await createClient()

    const { data: service } = await supabase
        .from("services")
        .select("name")
        .eq("slug", serviceSlug)
        .single()

    return {
        title: service ? `Edit ${service.name} | Dashboard` : "Service Not Found",
    }
}

export default async function EditServicePage({ params }: PageProps) {
    const { categorySlug, serviceSlug } = await params
    const supabase = await createClient()

    // Fetch category
    const { data: category } = await supabase
        .from("service_categories")
        .select("*")
        .eq("slug", categorySlug)
        .single()

    if (!category) {
        notFound()
    }

    // Fetch service
    const { data: service } = await supabase
        .from("services")
        .select("*")
        .eq("slug", serviceSlug)
        .single()

    if (!service) {
        notFound()
    }

    const categoryForForm = {
        id: category.id,
        slug: category.slug,
        name: category.name,
    }

    const serviceForForm = {
        id: service.id,
        slug: service.slug,
        name: service.name,
        shortDescription: service.short_description || "",
        description: service.description,
        categoryId: service.category_id,
        icon: service.icon || "",
        imageUrl: service.image_url || "",
        features: service.features || [],
        problems: service.problems || [],
        solutions: service.solutions || [],
        techStack: service.tech_stack || [],
        isFeatured: service.is_featured || false,
        isPublished: service.is_published || false,
        displayOrder: service.display_order || 0,
    }

    return (
        <div className="flex flex-col gap-8 p-6 w-full">
            <ServiceForm initialData={serviceForForm} category={categoryForForm} />
        </div>
    )
}
