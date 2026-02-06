"use server"

import { createClient } from "@/lib/supabase/server"

export async function getCategories() {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("service_categories")
        .select(`
            *,
            services(count)
        `)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching categories:", error)
        return []
    }

    return data.map(cat => ({
        id: cat.id,
        slug: cat.slug,
        name: cat.name,
        description: cat.description,
        imageUrl: cat.image_url,
        displayOrder: cat.display_order,
        serviceCount: cat.services?.[0]?.count || 0,
        createdAt: cat.created_at,
        updatedAt: cat.updated_at,
    }))
}
