"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    company: z.string().min(1, "Company name is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
    const result = contactFormSchema.safeParse(data);

    if (!result.success) {
        return { error: "Invalid form data" };
    }

    const supabase = await createClient();

    try {
        const { error } = await supabase
            .from("leads")
            .insert([
                {
                    name: result.data.name,
                    email: result.data.email,
                    phone: result.data.phone,
                    company: result.data.company,
                    message: result.data.message,
                    status: 'new', // Default status for new leads
                    created_at: new Date().toISOString(),
                },
            ]);

        if (error) {
            console.error("Supabase error:", error);
            return { error: "Failed to submit inquiry. Please try again later." };
        }

        return { success: true };
    } catch (err) {
        console.error("Submission error:", err);
        return { error: "An unexpected error occurred" };
    }
}
