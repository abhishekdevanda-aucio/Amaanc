import { createClient } from "@/lib/supabase/server"

export type IndustryNavItem = {
    name: string
    slug: string
    description: string
}

/**
 * Fetch published industries for navigation (header/footer)
 * Returns minimal data needed for nav links
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
