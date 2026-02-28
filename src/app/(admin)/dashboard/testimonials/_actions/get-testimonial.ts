"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { Testimonial, TestimonialRow } from "@/data/testimonials"

export async function getTestimonialByIdAdmin(id: string): Promise<Testimonial | null> {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect("/login")

    const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        console.error(`Error fetching testimonial with id ${id}:`, error)
        return null
    }

    const row = data as TestimonialRow
    return {
        id: row.id,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        quote: row.quote,
        author: row.author,
        title: row.title,
        company: row.company,
        imageUrl: row.image_url,
        rating: row.rating ?? 5,
        isFeatured: row.is_featured,
        isPublished: row.is_published,
        displayOrder: row.display_order ?? 0,
    }
}
