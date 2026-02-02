import { Landmark, Banknote, Zap, Train, Shield, ShoppingBag } from "lucide-react";

export interface Industry {
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    icon: any;
    image: string;
    features: string[];
}

export const industries: Industry[] = [
    {
        title: "Finance",
        slug: "finance",
        description: "Digital transformation solutions for modern financial institutions.",
        fullDescription: "We help financial institutions navigate the complex landscape of digital transformation. From modernizing legacy systems to implementing AI-driven analytics, our solutions ensure security, compliance, and enhanced customer experiences.",
        icon: Banknote,
        image: "/images/home/industry-finance-services.webp",
        features: ["Risk Management", "Fraud Detection", "Customer Analytics", "Secure Payments"],
    },
    {
        title: "Banking",
        slug: "banking",
        description: "Next-gen banking experiences powered by secure and scalable technology.",
        fullDescription: "Our banking solutions focus on delivering seamless, omnichannel experiences for customers while optimizing back-office operations. We specialize in core banking modernization, mobile banking apps, and open banking integrations.",
        icon: Landmark,
        image: "/images/home/industry-banking.webp",
        features: ["Core Banking", "Mobile Banking", "Open Banking APIs", "Regulatory Compliance"],
    },
    {
        title: "Utilities",
        slug: "utilities",
        description: "Smart grid solutions and operational efficiency for utility providers.",
        fullDescription: "We empower utility companies to manage resources more efficiently through smart grid technologies, IoT integration, and predictive maintenance. Our solutions help reduce downtime and improve service delivery.",
        icon: Zap,
        image: "/images/home/industry-utilities.webp",
        features: ["Smart Grid", "IoT Integration", "Predictive Maintenance", "Resource Management"],
    },
    {
        title: "Railway",
        slug: "railway",
        description: "Modernizing railway infrastructure with digital signaling and passenger systems.",
        fullDescription: "Amaanc delivers innovative solutions for the railway industry, focusing on signaling automation, passenger information systems, and asset management. We help operators improve safety, punctuality, and operational cost-efficiency.",
        icon: Train,
        image: "/images/home/industry-railway.webp",
        features: ["Signaling Automation", "Passenger Information Systems", "Asset Management", "Safety Systems"],
    },
    {
        title: "Insurance",
        slug: "insurance",
        description: "Data-driven insurance solutions for better risk assessment and claims processing.",
        fullDescription: "Transforming the insurance value chain with data analytics, AI, and process automation. We help insurers accelerate claims processing, personalize policies, and improve fraud detection capabilities.",
        icon: Shield,
        image: "/images/home/industry-insurance.webp",
        features: ["Claims Automation", "Risk Assessment", "Policy Management", "Fraud Prevention"],
    },
    {
        title: "Retail",
        slug: "retail",
        description: "Omnichannel retail strategies to engage customers and optimize supply chains.",
        fullDescription: "We enable retailers to deliver unified shopping experiences across online and offline channels. Our solutions include e-commerce platforms, inventory management systems, and personalized customer engagement tools.",
        icon: ShoppingBag,
        image: "/images/home/industry-retail.webp",
        features: ["E-commerce", "Inventory Management", "Customer Engagement", "Supply Chain Optimization"],
    },
];
