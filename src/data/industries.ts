import { createClient } from "@/lib/supabase/client";
import {
    LucideIcon,
    Landmark,
    Banknote,
    Zap,
    Train,
    Shield,
    ShoppingBag,
    Briefcase,
    Stethoscope,
    Building2,
    Factory,
    Truck,
    Smartphone,
    Laptop,
    Cloud,
    Globe
} from "lucide-react";

// Icon mapping
export const iconMap: Record<string, LucideIcon> = {
    "Finance": Banknote,
    "Banking": Landmark,
    "Utilities": Zap,
    "Railway": Train,
    "Insurance": Shield,
    "Retail": ShoppingBag,
    "Healthcare": Stethoscope,
    "Real Estate": Building2,
    "Manufacturing": Factory,
    "Logistics": Truck,
    "Technology": Laptop,
    "Telecommunications": Smartphone,
    "Cloud": Cloud,
    "Global": Globe,
    "Default": Briefcase
};

export interface Industry {
    id: string;
    name: string;
    tagline: string | null;
    slug: string;
    description: string;
    content: string | null;
    icon: string | null;
    imageUrl: string | null;
    techStack: string[] | null;
    features: string[] | null;
    stats: { label: string; value: string }[] | null;
    challenges: { title: string; problem: string; solution: string }[] | null;
    testimonials: { quote: string; author: string; role: string; company: string; image?: string }[] | null;
    isPublished: boolean;
    createdAt: string;
}

/**
 * Resolves icon name string to LucideIcon component
 */
export function resolveIcon(iconName: string | null): LucideIcon {
    if (iconName && iconMap[iconName]) {
        return iconMap[iconName];
    }
    return Briefcase;
}

// DB response type (snake_case from Supabase)
export type IndustryRow = {
    id: string;
    created_at: string;
    name: string;
    tagline: string | null;
    slug: string;
    description: string;
    content: string | null;
    icon_name: string | null;
    image_url: string | null;
    features: string[] | null;
    stats: { label: string; value: string }[] | null;
    challenges: { title: string; problem: string; solution: string }[] | null;
    tech_stack: string[] | null;
    testimonials: { quote: string; author: string; role: string; company: string; image?: string }[] | null;
    is_published: boolean;
};

/**
 * Parses DB row to Industry (snake_case → camelCase)
 */
function parseIndustry(row: IndustryRow): Industry {
    return {
        id: row.id,
        createdAt: row.created_at,
        name: row.name,
        tagline: row.tagline,
        slug: row.slug,
        description: row.description,
        content: row.content,
        icon: row.icon_name,
        imageUrl: row.image_url,
        features: row.features,
        stats: Array.isArray(row.stats) ? row.stats.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        challenges: Array.isArray(row.challenges) ? row.challenges.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        techStack: row.tech_stack,
        testimonials: Array.isArray(row.testimonials) ? row.testimonials.map((item: any) => typeof item === 'string' ? JSON.parse(item) : item) : [],
        isPublished: row.is_published
    };
}

/**
 * Fetch all published industries
 */
export async function getIndustries(): Promise<Industry[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("industries")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: true });

    if (error) {
        console.error("Error fetching industries:", error);
        return [];
    }

    return (data as IndustryRow[]).map(parseIndustry);
}

/**
 * Fetch single industry by slug
 */
export async function getIndustryBySlug(slug: string): Promise<Industry | null> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("industries")
        .select("*")
        .eq("slug", slug)
        .eq("is_published", true)
        .single();

    if (error) {
        console.error(`Error fetching industry with slug ${slug}:`, error);
        return null;
    }

    return parseIndustry(data as IndustryRow);
}
