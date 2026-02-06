"use server";

import { Asset } from "@/types/assets-types";
import { createClient } from "@/lib/supabase/server";
import { mapDbAssetToAsset } from "@/lib/helpers/assets-helper";

export async function getAssets(limit = 50, offset = 0): Promise<Asset[]> {
    const supabase = await createClient();

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
