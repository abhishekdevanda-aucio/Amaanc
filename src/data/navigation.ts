"use server";

import { NavigationItem } from "@/lib/navigation"
import { createClient } from "@/lib/supabase/server"

export type IndustryNavItem = {
    name: string
    slug: string
    description: string
}

export type ServiceNavItem = {
    title: string
    href: string
    category: string
    items: NavigationItem[]
}

/**
 * Fetch published industries for navigation (header/footer)
 */
export async function getIndustriesForNav(): Promise<IndustryNavItem[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("industries")
        .select("name, slug, description")
        .eq("is_published", true)
        .order("name", { ascending: true })

    if (error) {
        console.error("Error fetching industries for nav:", error)
        return []
    }

    return data.map((row) => ({
        name: row.name,
        slug: row.slug,
        description: row.description || ""
    }))
}

export async function getServicesForNav(): Promise<ServiceNavItem[]> {
    const supabase = await createClient()

    // Fetch categories with their services
    const { data: categories, error } = await supabase
        .from("service_categories")
        .select(`
            name,
            slug,
            services (
                name,
                slug,
                short_description,
                is_published
            )
        `)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching services for nav:", error)
        return []
    }

    // Transform and filter categories that have services
    return categories
        .map((cat) => ({
            title: cat.name,
            href: `/services/${cat.slug}`,
            category: cat.name,
            items: (cat.services || [])
                .filter((service: any) => service.is_published)
                .map((service: any) => ({
                    title: service.name,
                    href: `/services/${cat.slug}/${service.slug}`,
                    description: service.short_description || "",
                })),
        }))
        .filter((cat) => cat.items.length > 0)
}