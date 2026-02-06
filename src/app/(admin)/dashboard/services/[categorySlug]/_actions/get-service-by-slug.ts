"use server"

import { createClient } from "@/lib/supabase/server"

// Get service by slug for admin (includes unpublished)
export async function getServiceBySlug(slug: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("services")
        .select(`
            *,
            category:service_categories(*)
        `)
        .eq("slug", slug)
        .single()

    if (error) {
        console.error(`Error fetching service ${slug}:`, error)
        return null
    }

    return {
        id: data.id,
        slug: data.slug,
        name: data.name,
        shortDescription: data.short_description,
        description: data.description,
        categoryId: data.category_id,
        category: data.category ? {
            id: data.category.id,
            slug: data.category.slug,
            name: data.category.name,
        } : null,
        icon: data.icon,
        imageUrl: data.image_url,
        features: data.features || [],
        problems: data.problems || [],
        solutions: data.solutions || [],
        techStack: data.tech_stack || [],
        isFeatured: data.is_featured,
        isPublished: data.is_published,
        displayOrder: data.display_order,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
    }
}
