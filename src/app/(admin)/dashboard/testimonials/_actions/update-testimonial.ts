"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function updateTestimonial(id: string, prevState: unknown, formData: FormData) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect("/login")

    const rawData = {
        quote: formData.get("quote") as string,
        author: formData.get("author") as string,
        title: formData.get("title") as string,
        company: formData.get("company") as string,
        image_url: (formData.get("image_url") as string) || null,
        rating: parseInt(formData.get("rating") as string, 10) || 5,
        is_featured: formData.get("is_featured") === "on",
        is_published: formData.get("is_published") !== "off",
        display_order: parseInt(formData.get("display_order") as string, 10) || 0,
    }

    const { error } = await supabase.from("testimonials").update(rawData).eq("id", id)

    if (error) throw new Error(error.message)

    revalidatePath("/dashboard/testimonials")
    revalidatePath("/testimonials")
    revalidatePath("/")
    redirect("/dashboard/testimonials")
}
