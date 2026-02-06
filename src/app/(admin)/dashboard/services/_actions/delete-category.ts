"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

export async function deleteCategory(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from("service_categories")
        .delete()
        .eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/services")
    revalidatePath("/services")
}
