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

export const navigationData: NavigationItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
        description: "Explore our complete service portfolio and detailed solutions.",
        groupedItems: [
            {
                category: "Core Expertise",
                items: [
                    { title: "Salesforce Consultancy", href: "/services/core-expertise/salesforce-consultancy", description: "Expert Salesforce implementation and optimization." },
                    { title: "Artificial Intelligence", href: "/services/core-expertise/artificial-intelligence", description: "AI solutions to transform your business." },
                    { title: "Integrations", href: "/services/core-expertise/integrations", description: "Seamless data and system integrations." },
                ],
            },
            {
                category: "Enterprise Solutions",
                items: [
                    { title: ".NET Consultancy", href: "/services/enterprise-solutions/dotnet-consultancy" },
                    { title: "SAP Consultancy", href: "/services/enterprise-solutions/sap-consultancy" },
                ],
            },
            {
                category: "Design & Development",
                items: [
                    { title: "App Development", href: "/services/design-development/app-development", description: "Android & iOS mobile applications." },
                    { title: "UI / UX Design", href: "/services/design-development/ui-ux-design" },
                ],
            },
            {
                category: "Implementation & Support",
                items: [
                    { title: "Business Analysis", href: "/services/implementation-support/business-analysis" },
                    { title: "Testing (QA)", href: "/services/implementation-support/testing" },
                    { title: "DevOps", href: "/services/implementation-support/devops" },
                    { title: "Customer Success", href: "/services/implementation-support/customer-success" },
                    { title: "Change Management", href: "/services/implementation-support/change-management" },
                ],
            },
            {
                category: "Talent & Growth",
                items: [
                    { title: "Training", href: "/services/talent-growth/training" },
                    { title: "IT Recruitment", href: "/services/talent-growth/it-recruitment" },
                ],
            },
        ],
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
        items: [
            { title: "Finance", href: "/industries/finance", description: "Digital transformation for financial institutions." },
            { title: "Banking", href: "/industries/banking", description: "Modernize banking operations and customer experience." },
            { title: "Utilities", href: "/industries/utilities", description: "Smart solutions for energy and utility providers." },
            { title: "Railway", href: "/industries/railway", description: "Operational efficiency for the railway sector." },
            { title: "Insurance", href: "/industries/insurance", description: "Advanced analytics and policy management systems." },
            { title: "Retail", href: "/industries/retail", description: "Omnichannel strategies for modern retail." },
        ],
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
