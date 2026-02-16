"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// Update Industry
export async function updateIndustry(id: string, prevState: unknown, formData: FormData) {
    const supabase = await createClient()
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/login")
    }

    const rawData = {
        name: formData.get("name") as string,
        tagline: formData.get("tagline") as string || null,
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
