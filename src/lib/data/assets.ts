import { createClient } from "@/lib/supabase/client";

export type Asset = {
    fileName: string
    fileId: string
    url: string
    alt: string
    title: string
    type: string
    mimeType: string
    size: number
    width: number
    height: number
    tags: string[]
    folder: string
    createdBy: string
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
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = `${folder}/${fileName}`;

    const { error: uploadError } = await supabase.storage
        .from('assets')
        .upload(filePath, file);

    if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
    }

    const { data: { publicUrl } } = supabase.storage
        .from('assets')
        .getPublicUrl(filePath);

    // In a real app, you might save this to a database table 'assets'
    // For now, returning a constructed Asset object
    const now = new Date().toISOString();

    return {
        fileId: fileName, // Using fileName as ID for now
        fileName: fileName,
        url: publicUrl,
        alt: alt || file.name,
        title: title || file.name,
        type: "image", // Assuming image for now
        mimeType: file.type,
        size: file.size,
        width: 0, // Would need image processing to get dimensions
        height: 0,
        tags: [],
        folder: folder,
        createdBy: "user", // Placeholder
        createdAt: now,
        updatedAt: now
    };
}
