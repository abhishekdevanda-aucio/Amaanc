import { createClient } from "@/lib/supabase/client";

export type Asset = {
    id: string
    fileName: string
    filePath: string
    url: string
    alt: string
    title: string
    contentType: string
    size: number
    tags: string[]
    folder: string
    userId: string
    createdAt: string
    updatedAt: string
}

export type AssetUploadParams = {
    file: File
    folder?: string
    tags?: string
    alt?: string
    title?: string
}

export async function uploadAsset({
    file,
    folder = "uploads",
    alt = "",
    title = ""
}: AssetUploadParams): Promise<Asset> {
    const supabase = createClient();

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

export async function deleteAsset(id: string, filePath: string): Promise<void> {
    const supabase = createClient();

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

export async function getAssets(limit = 50, offset = 0): Promise<Asset[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('assets')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

    if (error) {
        console.error("Error fetching assets:", error);
        return [];
    }

    return data.map(mapDbAssetToAsset);
}

export function mapDbAssetToAsset(dbRecord: any): Asset {
    return {
        id: dbRecord.id,
        fileName: dbRecord.filename,
        filePath: dbRecord.file_path,
        url: dbRecord.public_url,
        alt: dbRecord.alt_text || "",
        title: dbRecord.title || "",
        contentType: dbRecord.content_type,
        size: dbRecord.size,
        tags: dbRecord.tags || [],
        folder: dbRecord.folder,
        userId: dbRecord.user_id,
        createdAt: dbRecord.created_at,
        updatedAt: dbRecord.updated_at
    };
}
