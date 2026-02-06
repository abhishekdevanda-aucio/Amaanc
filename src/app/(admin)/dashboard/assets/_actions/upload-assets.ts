"use server";

import { createClient } from "@/lib/supabase/server";
import { Asset, AssetUploadParams } from "@/types/assets-types";
import { mapDbAssetToAsset } from "@/lib/helpers/assets-helper";

export async function uploadAsset({
    file,
    folder = "uploads",
    alt = "",
    title = ""
}: AssetUploadParams): Promise<Asset> {
    const supabase = await createClient();

    // 1. Upload file to Supabase Storage
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('assets')
        .upload(filePath, file);

    if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
    }

    // 2. Get public URL
    const { data: { publicUrl } } = supabase.storage
        .from('assets')
        .getPublicUrl(filePath);

    // 3. Get current user
    const { data: { user } } = await supabase.auth.getUser();

    // 4. Save metadata to 'assets' table
    const { data: assetData, error: dbError } = await supabase
        .from('assets')
        .insert({
            user_id: user?.id,
            filename: fileName,
            file_path: filePath,
            public_url: publicUrl,
            content_type: file.type,
            size: file.size,
            alt_text: alt || file.name,
            title: title || file.name,
            tags: [], // Parsing tags could be improved
            folder: folder
        })
        .select()
        .single();

    if (dbError) {
        // Cleanup storage if DB insert fails? For now, just throw
        console.error("Database insert failed:", dbError);
        throw new Error(`Database save failed: ${dbError.message}`);
    }

    return mapDbAssetToAsset(assetData);
}