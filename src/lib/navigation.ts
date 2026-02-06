import { IndustryNavItem, ServiceNavItem } from "@/data/navigation"

export type NavigationItem = {
    title: string
    href: string
    description?: string
    items?: NavigationItem[]
    groupedItems?: {
        category: string
        items: NavigationItem[]
    }[]
}

export function getNavData(industries: IndustryNavItem[], services: ServiceNavItem[]): NavigationItem[] {
    return [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
            description: "Explore our complete service portfolio and detailed solutions.",
            groupedItems: services,
        },
        {
            title: "Key Features",
            href: "/key-features",
            description: "Highlights of our technical proficiency in Salesforce and more.",
        },
        {
            title: "Industries",
            href: "/industries",
            description: "Industry-specific solutions for your sector.",
            items: industries.map(ind => ({
                title: ind.name,
                href: `/industries/${ind.slug}`,
                description: ind.description,
            })),
        },
        {
            title: "Engage With Us",
            href: "/engage",
            items: [
                { title: "Case Studies", href: "/case-studies", description: "See how we solved client challenges." },
                { title: "Blogs", href: "/blogs", description: "Insights, trends, and news." },
                { title: "Newsroom", href: "/newsroom", description: "Announcements and press releases." },
                { title: "Resources", href: "/resources", description: "White papers, e-books, and reports." },
                { title: "Events", href: "/events", description: "Webinars and conferences." },
            ],
        },
    ]
}
