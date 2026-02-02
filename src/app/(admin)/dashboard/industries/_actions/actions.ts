"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

// Create Industry
export async function createIndustry(prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        overview: formData.get("overview") as string,
        full_description: formData.get("full_description") as string,
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
        return { message: error.message, error: true }
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
    redirect("/dashboard/industries")
}

// Update Industry
export async function updateIndustry(id: string, prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        overview: formData.get("overview") as string,
        full_description: formData.get("full_description") as string,
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
        return { message: error.message, error: true }
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
    revalidatePath(`/industries/${rawData.slug}`)
    redirect("/dashboard/industries")
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
