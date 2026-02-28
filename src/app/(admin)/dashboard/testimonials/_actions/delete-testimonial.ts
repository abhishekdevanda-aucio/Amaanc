"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function deleteTestimonial(id: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) redirect("/login")

    const { error } = await supabase.from("testimonials").delete().eq("id", id)

    if (error) throw new Error(error.message)

    revalidatePath("/dashboard/testimonials")
    revalidatePath("/testimonials")
    revalidatePath("/")
}
