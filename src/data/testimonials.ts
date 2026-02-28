import { createClient } from "@/lib/supabase/client";

export type Testimonial = {
    id: string;
    createdAt: string;
    updatedAt: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    imageUrl: string | null;
    rating: number;
    isFeatured: boolean;
    isPublished: boolean;
    displayOrder: number;
};

// DB response type (snake_case from Supabase)
export type TestimonialRow = {
    id: string;
    created_at: string;
    updated_at: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    image_url: string | null;
    rating: number;
    is_featured: boolean;
    is_published: boolean;
    display_order: number;
};

function parseTestimonial(row: TestimonialRow): Testimonial {
    return {
        id: row.id,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        quote: row.quote,
        author: row.author,
        title: row.title,
        company: row.company,
        imageUrl: row.image_url,
        rating: row.rating ?? 5,
        isFeatured: row.is_featured,
        isPublished: row.is_published,
        displayOrder: row.display_order ?? 0,
    };
}

/**
 * Fetch all published testimonials ordered by display_order
 */
export async function getTestimonials(): Promise<Testimonial[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_published", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching testimonials:", error);
        return [];
    }

    return (data as TestimonialRow[]).map(parseTestimonial);
}

/**
 * Fetch featured testimonials for homepage (max 3)
 */
export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("is_published", true)
        .eq("is_featured", true)
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false })
        .limit(limit);

    if (error) {
        console.error("Error fetching featured testimonials:", error);
        return [];
    }

    return (data as TestimonialRow[]).map(parseTestimonial);
}

/**
 * Fetch a single testimonial by ID (public — published only)
 */
export async function getTestimonialById(id: string): Promise<Testimonial | null> {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("id", id)
        .eq("is_published", true)
        .single();

    if (error) {
        console.error(`Error fetching testimonial with id ${id}:`, error);
        return null;
    }

    return parseTestimonial(data as TestimonialRow);
}
