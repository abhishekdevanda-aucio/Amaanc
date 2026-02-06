"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export async function createCategory(prevState: unknown, formData: FormData) {
    const supabase = await createClient()

    const rawData = {
        name: formData.get("name") as string,
        slug: formData.get("slug") as string,
        description: formData.get("description") as string,
        image_url: formData.get("image_url") as string,
        display_order: parseInt(formData.get("display_order") as string) || 0,
    }

    const { error } = await supabase.from("service_categories").insert(rawData)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/services")
    revalidatePath("/services")
    return { success: true }
}
