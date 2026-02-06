"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

// Delete service
export async function deleteService(id: string, categorySlug: string) {
    const supabase = await createClient()

    const { error } = await supabase.from("services").delete().eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/services")
    revalidatePath(`/dashboard/services/${categorySlug}`)
    revalidatePath("/services")
}
