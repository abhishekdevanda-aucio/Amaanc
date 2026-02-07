"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// Delete Industry
export async function deleteIndustry(id: string) {
    const supabase = await createClient()
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/login")
    }

    const { error } = await supabase.from("industries").delete().eq("id", id)

    if (error) {
        throw new Error(error.message)
    }

    revalidatePath("/dashboard/industries")
    revalidatePath("/industries")
}
