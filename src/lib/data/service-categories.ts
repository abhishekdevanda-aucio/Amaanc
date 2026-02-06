export interface ServiceCategory {
    id: string;
    slug: string;
    name: string;
    description: string;
    imageUrl: string;
}

// Static service categories based on specification
export const serviceCategories: ServiceCategory[] = [
    {
        id: "1",
        slug: "core-expertise",
        name: "Core Expertise",
        description: "Our foundational technologies that drive digital transformation—Salesforce, AI, and seamless integrations.",
        imageUrl: "/images/home/industry-finance-services.webp",
    },
    {
        id: "2",
        slug: "enterprise-solutions",
        name: "Enterprise Solutions",
        description: "Enterprise-grade platforms for scalable business operations—.NET and SAP consultancy.",
        imageUrl: "/images/home/industry-utilities.webp",
    },
    {
        id: "3",
        slug: "design-development",
        name: "Design & Development",
        description: "Creating exceptional digital experiences through mobile apps and intuitive UI/UX design.",
        imageUrl: "/images/home/industry-retail.webp",
    },
    {
        id: "4",
        slug: "implementation-support",
        name: "Implementation & Support",
        description: "End-to-end project delivery with robust testing, DevOps, and ongoing customer success.",
        imageUrl: "/images/home/industry-railway.webp",
    },
    {
        id: "5",
        slug: "talent-growth",
        name: "Talent & Growth",
        description: "Building capable teams through training programs and strategic IT recruitment.",
        imageUrl: "/images/home/industry-banking.webp",
    }
];

/**
 * Get all service categories
 */
export function getCategories(): ServiceCategory[] {
    return serviceCategories;
}

/**
 * Get single category by slug
 */
export function getCategoryBySlug(slug: string): ServiceCategory | null {
    return serviceCategories.find(cat => cat.slug === slug) || null;
}
