"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function deleteAsset(id: string, filePath: string): Promise<void> {
    const supabase = await createClient();
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/login")
    }

    // 1. Delete from Storage
    const { error: storageError } = await supabase.storage
        .from('assets')
        .remove([filePath]);

    if (storageError) {
        console.error("Error deleting from storage:", storageError);
        throw new Error(`Storage delete failed: ${storageError.message}`);
    }

    // 2. Delete from Database
    const { error: dbError } = await supabase
        .from('assets')
        .delete()
        .eq('id', id);

    if (dbError) {
        console.error("Error deleting from database:", dbError);
        throw new Error(`Database delete failed: ${dbError.message}`);
    }
}