"use server"

import { createClient } from "@/lib/supabase/server"

export async function getCategoryBySlug(slug: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("service_categories")
        .select("*")
        .eq("slug", slug)
        .single()

    if (error) {
        console.error(`Error fetching category ${slug}:`, error)
        return null
    }

    return {
        id: data.id,
        slug: data.slug,
        name: data.name,
        description: data.description,
        imageUrl: data.image_url,
        displayOrder: data.display_order,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
    }
}
