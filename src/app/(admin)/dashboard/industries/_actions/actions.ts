"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

// Create Industry
export async function createIndustry(prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        description: formData.get("overview") as string,
        content: formData.get("full_description") as string,
        icon_name: formData.get("icon_name") as string,
        image_url: formData.get("image_url") as string,
        is_published: formData.get("is_published") === "on",
        // Parse JSON fields
        features: JSON.parse(formData.get("features") as string || "[]"),
        stats: JSON.parse(formData.get("stats") as string || "[]"),
        challenges: JSON.parse(formData.get("challenges") as string || "[]"),
        tech_stack: JSON.parse(formData.get("tech_stack") as string || "[]"),
        testimonials: JSON.parse(formData.get("testimonials") as string || "[]"),
    }

    const { error } = await supabase.from("industries").insert(rawData)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
    return { success: true }
}

// Update Industry
export async function updateIndustry(id: string, prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        description: formData.get("overview") as string,
        content: formData.get("full_description") as string,
        icon_name: formData.get("icon_name") as string,
        image_url: formData.get("image_url") as string,
        is_published: formData.get("is_published") === "on",
        features: JSON.parse(formData.get("features") as string || "[]"),
        stats: JSON.parse(formData.get("stats") as string || "[]"),
        challenges: JSON.parse(formData.get("challenges") as string || "[]"),
        tech_stack: JSON.parse(formData.get("tech_stack") as string || "[]"),
        testimonials: JSON.parse(formData.get("testimonials") as string || "[]"),
    }

    const { error } = await supabase.from("industries").update(rawData).eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
    revalidatePath(`/industries/${rawData.slug}`)
    return { success: true }
}

// Delete Industry
export async function deleteIndustry(id: string) {
    const supabase = await createClient()

    const { error } = await supabase.from("industries").delete().eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
}

// Get Industry by Slug for Admin (includes unpublished)
export async function getIndustryBySlug(slug: string) {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from("industries")
        .select("*")
        .eq("slug", slug)
        .single()

    if (error) {
        console.error(`Error fetching industry with slug ${slug}:`, error)
        return null
    }

    return {
        id: data.id,
        createdAt: data.created_at,
        name: data.name,
        slug: data.slug,
        description: data.description,
        content: data.content,
        icon: data.icon_name,
        imageUrl: data.image_url,
        features: data.features,
        stats: Array.isArray(data.stats) ? data.stats.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        challenges: Array.isArray(data.challenges) ? data.challenges.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        techStack: data.tech_stack,
        testimonials: Array.isArray(data.testimonials) ? data.testimonials.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        isPublished: data.is_published
    }
}
