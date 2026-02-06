"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

// Update service
export async function updateService(id: string, prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        short_description: formData.get("short_description") as string,
        description: formData.get("description") as string,
        category_id: formData.get("category_id") as string,
        icon: formData.get("icon") as string,
        image_url: formData.get("image_url") as string,
        features: JSON.parse(formData.get("features") as string || "[]"),
        problems: JSON.parse(formData.get("problems") as string || "[]"),
        solutions: JSON.parse(formData.get("solutions") as string || "[]"),
        tech_stack: JSON.parse(formData.get("tech_stack") as string || "[]"),
        is_featured: formData.get("is_featured") === "on",
        is_published: formData.get("is_published") === "on",
        display_order: parseInt(formData.get("display_order") as string) || 0,
    }

    const { error } = await supabase.from("services").update(rawData).eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    const categorySlug = formData.get("category_slug") as string

    revalidatePath("/dashboard/services")
    revalidatePath(`/dashboard/services/${categorySlug}`)
    revalidatePath("/services")
    revalidatePath(`/services/${categorySlug}/${rawData.slug}`)
    return { success: true, categorySlug }
}
