"use server";

import { createClient } from "@/lib/supabase/server";

export async function deleteAsset(id: string, filePath: string): Promise<void> {
    const supabase = await createClient();

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