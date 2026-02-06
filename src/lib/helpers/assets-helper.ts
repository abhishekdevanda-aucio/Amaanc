import { Asset } from "@/types/assets-types";

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
