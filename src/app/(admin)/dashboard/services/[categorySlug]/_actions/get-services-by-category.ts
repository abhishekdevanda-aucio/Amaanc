"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// Get services by category
export async function getServicesByCategory(categoryId: string) {
    const supabase = await createClient()
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/login")
    }

    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("category_id", categoryId)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching services:", error)
        return []
    }

    return data.map(service => ({
        id: service.id,
        slug: service.slug,
        name: service.name,
        shortDescription: service.short_description,
        description: service.description,
        categoryId: service.category_id,
        icon: service.icon,
        imageUrl: service.image_url,
        features: service.features || [],
        problems: service.problems || [],
        solutions: service.solutions || [],
        techStack: service.tech_stack || [],
        isFeatured: service.is_featured,
        isPublished: service.is_published,
        displayOrder: service.display_order,
        createdAt: service.created_at,
        updatedAt: service.updated_at,
    }))
}
