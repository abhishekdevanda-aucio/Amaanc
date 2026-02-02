import { Landmark, Banknote, Zap, Train, Shield, ShoppingBag, LucideIcon } from "lucide-react";

export interface Industry {
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    image: string;
    features: string[];
    stats: { label: string; value: string }[];
    challenges: { title: string; problem: string; solution: string }[];
    techStack: string[];
    testimonials: { quote: string; author: string; role: string; company: string; image?: string }[];
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
        stats: [
            { label: "Compliance Rate", value: "99.9%" },
            { label: "Faster Processing", value: "40%" },
            { label: "Cost Reduction", value: "25%" },
        ],
        challenges: [
            { title: "Legacy Infrastructure", problem: "Outdated core systems slowing down innovation and integration.", solution: "API-first modernization layer to bridge legacy and modern apps." },
            { title: "Regulatory Compliance", problem: "Constantly changing regulations requiring manual reporting.", solution: "Automated compliance engines and real-time audit trails." },
            { title: "Data Security Threats", problem: "Increasing sophistication of cyberattacks targeting customer financial data.", solution: "Zero-trust security architecture with advanced encryption standards." },
            { title: "Customer Fragmentation", problem: "Disjointed customer view across multiple separate banking products.", solution: "Unified Customer Data Platform (CDP) for holistic 360-degree insights." },
        ],
        techStack: ["Salesforce Financial Services Cloud", "MuleSoft", "Tableau", "AWS"],
        testimonials: [
            {
                quote: "Amaanc's expertise in financial regulations and cloud modernization helped us launch our new digital banking platform in record time.",
                author: "Sarah Jenkins",
                role: "CTO",
                company: "Global Finex Corp"
            },
            {
                quote: "The security architecture they implemented has given us complete peace of mind while opening up new API revenue streams.",
                author: "James Miller",
                role: "CISO",
                company: "Sterling Trust Bank"
            },
            {
                quote: "The security architecture they implemented has given us complete peace of mind while opening up new API revenue streams.",
                author: "James Miller",
                role: "CISO",
                company: "Sterling Trust Bank"
            }
        ]
    },
    {
        title: "Banking",
        slug: "banking",
        description: "Next-gen banking experiences powered by secure and scalable technology.",
        fullDescription: "Our banking solutions focus on delivering seamless, omnichannel experiences for customers while optimizing back-office operations. We specialize in core banking modernization, mobile banking apps, and open banking integrations.",
        icon: Landmark,
        image: "/images/home/industry-banking.webp",
        features: ["Core Banking", "Mobile Banking", "Open Banking APIs", "Regulatory Compliance"],
        stats: [
            { label: "Customer Retention", value: "+15%" },
            { label: "Onboarding Time", value: "-60%" },
            { label: "Transactions/Sec", value: "10k+" },
        ],
        challenges: [
            { title: "Customer Experience", problem: "Fragmented user journeys across mobile and web channels.", solution: "Unified omnichannel platform with personalized insights." },
            { title: "Data Silos", problem: "Customer data locked in disparate systems preventing 360 view.", solution: "Centralized data lake with Customer 360 implementation." },
            { title: "Legacy Core Banking", problem: "Inflexible core systems unable to support rapid product launches.", solution: "Hollow-the-core strategy with microservices-based overlay adoption." },
            { title: "Fintech Competition", problem: "Losing market share to agile, digital-native neobanks.", solution: "Rapid deployment of white-label digital wallet app and competitive API ecosystem." },
        ],
        techStack: ["nCino", "Salesforce", "Azure", "React Native"],
        testimonials: [
            {
                quote: "The unified customer 360 view has completely transformed how our relationship managers interact with clients. A game changer.",
                author: "David Chen",
                role: "VP of Retail Banking",
                company: "Metro City Bank"
            },
            {
                quote: "Our mobile app uptake increased by 200% after the redesign and performance optimization delivered by the team.",
                author: "Amanda Lee",
                role: "Digital Product Lead",
                company: "Horizon Credit Union"
            }
        ]
    },
    {
        title: "Utilities",
        slug: "utilities",
        description: "Smart grid solutions and operational efficiency for utility providers.",
        fullDescription: "We empower utility companies to manage resources more efficiently through smart grid technologies, IoT integration, and predictive maintenance. Our solutions help reduce downtime and improve service delivery.",
        icon: Zap,
        image: "/images/home/industry-utilities.webp",
        features: ["Smart Grid", "IoT Integration", "Predictive Maintenance", "Resource Management"],
        stats: [
            { label: "Outage Reduction", value: "30%" },
            { label: "Field Efficiency", value: "50%" },
            { label: "Asset Lifespan", value: "+20%" },
        ],
        challenges: [
            { title: "Grid Reliability", problem: "Unpredictable outages and aging infrastructure.", solution: "IoT-enabled predictive maintenance and real-time monitoring." },
            { title: "Field Operations", problem: "Inefficient manual scheduling and dispatching.", solution: "AI-optimized field service management and mobile apps." },
            { title: "Customer Engagement", problem: "Passive relationship with consumers limit demand response program success.", solution: "Interactive customer portals with real-time usage analytics and alerts." },
            { title: "Renewable Integration", problem: "Instability caused by intermittent renewable energy sources.", solution: "AI-driven load balancing and distributed energy resource management (DERMS)." },
        ],
        techStack: ["Salesforce Field Service", "IoT Cloud", "Azure IoT", "SAP IS-U"],
        testimonials: [
            {
                quote: "Our field technicians are 50% more productive thanks to the mobile workforce management solution implemented by Amaanc.",
                author: "Michael Ross",
                role: "Head of Operations",
                company: "EcoPower Utilities"
            },
            {
                quote: "The predictive maintenance algorithms have saved us millions in prevented equipment failures over the last year.",
                author: "Dr. Emily Stanton",
                role: "Director of Asset Management",
                company: "GridSouth Energy"
            }
        ]
    },
    {
        title: "Railway",
        slug: "railway",
        description: "Modernizing railway infrastructure with digital signaling and passenger systems.",
        fullDescription: "Amaanc delivers innovative solutions for the railway industry, focusing on signaling automation, passenger information systems, and asset management. We help operators improve safety, punctuality, and operational cost-efficiency.",
        icon: Train,
        image: "/images/home/industry-railway.webp",
        features: ["Signaling Automation", "Passenger Information Systems", "Asset Management", "Safety Systems"],
        stats: [
            { label: "On-Time Performance", value: "98%" },
            { label: "Maintenance Savings", value: "20%" },
            { label: "Passenger Satisfaction", value: "4.8/5" },
        ],
        challenges: [
            { title: "Safety Criticality", problem: "Zero tolerance for errors in signaling and control.", solution: "SIL-4 certified automation systems with redundant fail-safes." },
            { title: "Passenger Info", problem: "Delayed or inaccurate travel updates causing frustration.", solution: "Real-time PIS integrated with train tracking data." },
            { title: "Asset Maintenance", problem: "Unplanned breakdowns of rolling stock causing schedule disruptions.", solution: "Predictive maintenance using vibration sensors and machine learning." },
            { title: "Operational Efficiency", problem: "Manual track inspection is slow, dangerous, and costly.", solution: "Automated drone-based inspection and computer vision anomaly detection." },
        ],
        techStack: ["Siemens Scada", "AWS IoT", "Socket.io", "React"],
        testimonials: [
            {
                quote: "Real-time passenger information has significantly reduced complaints and improved overall satisfaction scores.",
                author: "Elena Vostok",
                role: "Director of Services",
                company: "RapidRail Networks"
            },
            {
                quote: "Automating our depot management operations has streamlined maintenance scheduling and improved fleet availability.",
                author: "Thomas Wright",
                role: "Fleet Manager",
                company: "TransNational Rail"
            }
        ]
    },
    {
        title: "Insurance",
        slug: "insurance",
        description: "Data-driven insurance solutions for better risk assessment and claims processing.",
        fullDescription: "Transforming the insurance value chain with data analytics, AI, and process automation. We help insurers accelerate claims processing, personalize policies, and improve fraud detection capabilities.",
        icon: Shield,
        image: "/images/home/industry-insurance.webp",
        features: ["Claims Automation", "Risk Assessment", "Policy Management", "Fraud Prevention"],
        stats: [
            { label: "Claims Processing", value: "3x Faster" },
            { label: "Fraud Detection", value: "95%" },
            { label: "Policy Issuance", value: "Instant" },
        ],
        challenges: [
            { title: "Fraudulent Claims", problem: "Rising cost of claims fraud affecting profitability.", solution: "AI-powered anomaly detection and risk scoring models." },
            { title: "Slow Processing", problem: "Manual underwriting taking weeks to approve policies.", solution: "Automated underwriting engines for instant quotes." },
            { title: "Customer Churn", problem: "High policyholder turnover due to lack of meaningful engagement.", solution: "Personalized lifestyle apps and usage-based insurance (UBI) models." },
            { title: "Legacy Systems", problem: "Inability to integrate with modern third-party data sources.", solution: "API gateway implementation to connect legacy cores with insurtech partners." },
        ],
        techStack: ["Guidewire", "Salesforce Industries", "Einstein AI", "Python"],
        testimonials: [
            {
                quote: "We've cut our claims processing time by 70% while improving fraud detection accuracy. The ROI was immediate.",
                author: "Robert Thorne",
                role: "Chief Claims Officer",
                company: "SafeGuard Insurance"
            },
            {
                quote: "The personalized policy recommendation engine has boosted our upsell conversion rates by double digits.",
                author: "Jessica Li",
                role: "VP of Marketing",
                company: "NextGen Assurance"
            }
        ]
    },
    {
        title: "Retail",
        slug: "retail",
        description: "Omnichannel retail strategies to engage customers and optimize supply chains.",
        fullDescription: "We enable retailers to deliver unified shopping experiences across online and offline channels. Our solutions include e-commerce platforms, inventory management systems, and personalized customer engagement tools.",
        icon: ShoppingBag,
        image: "/images/home/industry-retail.webp",
        features: ["E-commerce", "Inventory Management", "Customer Engagement", "Supply Chain Optimization"],
        stats: [
            { label: "Online Sales", value: "+45%" },
            { label: "Inventory Accuracy", value: "99%" },
            { label: "Return Rate", value: "-15%" },
        ],
        challenges: [
            { title: "Inventory Visibility", problem: "Stock discrepancies between online and physical stores.", solution: "Real-time unified inventory management system." },
            { title: "Personalization", problem: "Generic marketing failing to convert shoppers.", solution: "AI-driven product recommendations and loyalty programs." },
            { title: "Supply Chain Disruption", problem: "Lack of visibility into supplier delays affecting stock availability.", solution: "End-to-end supply chain control tower with predictive analytics." },
            { title: "Checkout Friction", problem: "Long queues in-store leading to abandoned sales.", solution: "Contactless mobile POS and scan-and-go technology implementation." },
        ],
        techStack: ["Salesforce Commerce Cloud", "Shopify Plus", "Klaviyo", "Google Analytics 4"],
        testimonials: [
            {
                quote: "Integrating our online and offline inventory has eliminated stockouts and boosted our omnichannel sales significantly.",
                author: "Lisa Wong",
                role: "Head of Digital",
                company: "StyleHub Retail"
            },
            {
                quote: "We finally have a single view of our customer, allowing us to deliver truly personalized offers that drive loyalty.",
                author: "Mark Davidson",
                role: "CMO",
                company: "MarketFresh Grocers"
            }
        ]
    },
];
