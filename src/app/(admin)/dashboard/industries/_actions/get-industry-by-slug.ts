"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// Get Industry by Slug for Admin (includes unpublished)
export async function getIndustryBySlug(slug: string) {
    const supabase = await createClient()
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/login")
    }

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
        tagline: data.tagline,
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
