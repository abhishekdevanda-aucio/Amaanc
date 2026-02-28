import { createClient } from "@/lib/supabase/client"

// =====================================================
// TYPES
// =====================================================

export interface ServiceCategory {
    id: string
    slug: string
    name: string
    description: string
    imageUrl: string
    displayOrder: number
    serviceCount?: number
}

export interface Service {
    id: string
    slug: string
    name: string
    shortDescription: string
    description: string
    categoryId: string
    categorySlug: string
    categoryName: string
    icon: string
    imageUrl: string
    features: string[]
    problems: { title: string; description: string }[]
    solutions: { title: string; description: string }[]
    techStack: string[]
    isFeatured: boolean
    isPublished: boolean
    displayOrder: number
    metrics?: { label: string; value: string }[]
    whyAmaanc?: { title: string; points: string[]; clientQuote: { text: string; author: string } }
    faqs?: { question: string; answer: string }[]
}

// =====================================================
// CATEGORY FUNCTIONS
// =====================================================

// Get all published categories with service count
export async function getServiceCategories(): Promise<ServiceCategory[]> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("service_categories")
        .select(`
            *,
            services(count)
        `)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching service categories:", error)
        return []
    }

    return data.map(cat => ({
        id: cat.id,
        slug: cat.slug,
        name: cat.name,
        description: cat.description || "",
        imageUrl: cat.image_url || "",
        displayOrder: cat.display_order || 0,
        serviceCount: cat.services?.[0]?.count || 0,
    }))
}

// Get category by slug
export async function getCategoryBySlug(slug: string): Promise<ServiceCategory | null> {
    const supabase = createClient()

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
        description: data.description || "",
        imageUrl: data.image_url || "",
        displayOrder: data.display_order || 0,
    }
}

// =====================================================
// SERVICE FUNCTIONS
// =====================================================

// Get all published services
export async function getServices(): Promise<Service[]> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("services")
        .select(`
            *,
            category:service_categories(id, slug, name)
        `)
        .eq("is_published", true)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching services:", error)
        return []
    }

    return data.map(service => ({
        id: service.id,
        slug: service.slug,
        name: service.name,
        shortDescription: service.short_description || "",
        description: service.description,
        categoryId: service.category_id,
        categorySlug: service.category?.slug || "",
        categoryName: service.category?.name || "",
        icon: service.icon || "",
        imageUrl: service.image_url || "",
        features: service.features || [],
        problems: service.problems || [],
        solutions: service.solutions || [],
        techStack: service.tech_stack || [],
        isFeatured: service.is_featured || false,
        isPublished: service.is_published || false,
        displayOrder: service.display_order || 0,
        metrics: service.metrics || [],
        whyAmaanc: service.why_amaanc || null,
        faqs: service.faqs || [],
    }))
}

// Get featured services
export async function getFeaturedServices(): Promise<Service[]> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("services")
        .select(`
            *,
            category:service_categories(id, slug, name)
        `)
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching featured services:", error)
        return []
    }

    return data.map(service => ({
        id: service.id,
        slug: service.slug,
        name: service.name,
        shortDescription: service.short_description || "",
        description: service.description,
        categoryId: service.category_id,
        categorySlug: service.category?.slug || "",
        categoryName: service.category?.name || "",
        icon: service.icon || "",
        imageUrl: service.image_url || "",
        features: service.features || [],
        problems: service.problems || [],
        solutions: service.solutions || [],
        techStack: service.tech_stack || [],
        isFeatured: service.is_featured || false,
        isPublished: service.is_published || false,
        displayOrder: service.display_order || 0,
        metrics: service.metrics || [],
        whyAmaanc: service.why_amaanc || null,
        faqs: service.faqs || [],
    }))
}

// Get services by category slug
export async function getServicesByCategory(categorySlug: string): Promise<Service[]> {
    const supabase = createClient()

    // First get the category ID
    const { data: category } = await supabase
        .from("service_categories")
        .select("id, slug, name")
        .eq("slug", categorySlug)
        .single()

    if (!category) {
        return []
    }

    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_published", true)
        .eq("category_id", category.id)
        .order("display_order", { ascending: true })

    if (error) {
        console.error("Error fetching services by category:", error)
        return []
    }

    return data.map(service => ({
        id: service.id,
        slug: service.slug,
        name: service.name,
        shortDescription: service.short_description || "",
        description: service.description,
        categoryId: service.category_id,
        categorySlug: category.slug,
        categoryName: category.name,
        icon: service.icon || "",
        imageUrl: service.image_url || "",
        features: service.features || [],
        problems: service.problems || [],
        solutions: service.solutions || [],
        techStack: service.tech_stack || [],
        isFeatured: service.is_featured || false,
        isPublished: service.is_published || false,
        displayOrder: service.display_order || 0,
        metrics: service.metrics || [],
        whyAmaanc: service.why_amaanc || null,
        faqs: service.faqs || [],
    }))
}

// Get service by slug (for service detail page)
export async function getServiceBySlug(slug: string): Promise<Service | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("services")
        .select(`
            *,
            category:service_categories(id, slug, name)
        `)
        .eq("slug", slug)
        .eq("is_published", true)
        .single()

    if (error) {
        console.error(`Error fetching service ${slug}:`, error)
        return null
    }

    return {
        id: data.id,
        slug: data.slug,
        name: data.name,
        shortDescription: data.short_description || "",
        description: data.description,
        categoryId: data.category_id,
        categorySlug: data.category?.slug || "",
        categoryName: data.category?.name || "",
        icon: data.icon || "",
        imageUrl: data.image_url || "",
        features: data.features || [],
        problems: data.problems || [],
        solutions: data.solutions || [],
        techStack: data.tech_stack || [],
        isFeatured: data.is_featured || false,
        isPublished: data.is_published || false,
        displayOrder: data.display_order || 0,
        metrics: data.metrics || [],
        whyAmaanc: data.why_amaanc || null,
        faqs: data.faqs || [],
    }
}

// Get all services with categories for static generation
export async function getAllServicesForStaticGeneration(): Promise<{ categorySlug: string; serviceSlug: string }[]> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from("services")
        .select(`
            slug,
            category:service_categories(slug)
        `)
        .eq("is_published", true)

    if (error) {
        console.error("Error fetching services for static generation:", error)
        return []
    }

    return data.map(service => ({
        categorySlug: Array.isArray(service.category) ? service.category[0]?.slug : (service.category as any)?.slug || "",
        serviceSlug: service.slug,
    })).filter(item => item.categorySlug)
}
