import {
    LucideIcon,
    Cloud,
    Brain,
    Workflow,
    Code2,
    Laptop,
    Palette,
    Smartphone,
    Users,
    TestTube,
    GitBranch,
    HeartHandshake,
    RefreshCw,
    GraduationCap,
    UserSearch,
    Briefcase,
    Settings,
    Layers,
    Zap
} from "lucide-react";

// Icon mapping for services
export const serviceIconMap: Record<string, LucideIcon> = {
    "salesforce": Cloud,
    "artificial-intelligence": Brain,
    "integrations": Workflow,
    "dotnet": Laptop,
    "sap": Layers,
    "mobile-development": Smartphone,
    "ui-ux-design": Palette,
    "business-analysis": Users,
    "testing": TestTube,
    "devops": GitBranch,
    "customer-success": HeartHandshake,
    "change-management": RefreshCw,
    "training": GraduationCap,
    "it-recruitment": UserSearch,
    "default": Briefcase
};

export interface Service {
    id: string;
    slug: string;
    name: string;
    shortDescription: string;
    description: string;
    categorySlug: string;
    icon: string;
    imageUrl: string;
    features: string[];
    problems: { title: string; description: string }[];
    solutions: { title: string; description: string }[];
    techStack: string[];
    isFeatured?: boolean;
}

// Static services data based on specification
export const services: Service[] = [
    // Core Expertise
    {
        id: "1",
        slug: "salesforce",
        name: "Salesforce Consultancy",
        shortDescription: "Strategic implementation and optimization of Salesforce clouds.",
        description: "Transform your customer relationships with our comprehensive Salesforce expertise. From Sales Cloud to Marketing Cloud, we deliver end-to-end implementation, customization, and optimization services that drive measurable business outcomes.",
        categorySlug: "core-expertise",
        icon: "salesforce",
        imageUrl: "/images/services/salesforce.webp",
        features: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "Einstein AI", "CPQ", "Field Service"],
        problems: [
            { title: "Disconnected Customer Data", description: "Struggling with siloed customer information across multiple systems" },
            { title: "Manual Sales Processes", description: "Time-consuming manual workflows slowing down your sales cycle" },
            { title: "Poor Visibility", description: "Lack of real-time insights into sales pipeline and customer interactions" }
        ],
        solutions: [
            { title: "Unified Platform", description: "Centralize all customer data in a single source of truth" },
            { title: "Automated Workflows", description: "Streamline processes with intelligent automation and AI" },
            { title: "360° Customer View", description: "Gain complete visibility with real-time dashboards and analytics" }
        ],
        techStack: ["Salesforce", "Apex", "Lightning", "Einstein AI", "MuleSoft", "Tableau"],
        isFeatured: true
    },
    {
        id: "2",
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        shortDescription: "Transforming operations with predictive analytics and ML.",
        description: "Harness the power of AI to revolutionize your business operations. Our AI solutions include predictive analytics, machine learning models, natural language processing, and intelligent automation that deliver actionable insights.",
        categorySlug: "core-expertise",
        icon: "artificial-intelligence",
        imageUrl: "/images/services/ai.webp",
        features: ["Predictive Analytics", "Machine Learning", "NLP", "Computer Vision", "Process Automation", "Data Insights"],
        problems: [
            { title: "Data Overload", description: "Unable to extract meaningful insights from massive datasets" },
            { title: "Reactive Decision Making", description: "Making decisions based on historical data rather than predictions" },
            { title: "Manual Analysis", description: "Spending excessive time on repetitive analytical tasks" }
        ],
        solutions: [
            { title: "Intelligent Analytics", description: "AI-powered insights that surface patterns humans might miss" },
            { title: "Predictive Models", description: "Anticipate trends and customer behavior before they happen" },
            { title: "Automated Intelligence", description: "Free your team to focus on strategy while AI handles analysis" }
        ],
        techStack: ["Python", "TensorFlow", "PyTorch", "Azure ML", "AWS SageMaker", "Einstein AI"]
    },
    {
        id: "3",
        slug: "integrations",
        name: "System Integration",
        shortDescription: "Seamlessly connecting your enterprise ecosystem.",
        description: "Break down data silos and create a unified enterprise ecosystem. Our integration experts connect disparate systems, legacy applications, and cloud services using robust API strategies and middleware solutions.",
        categorySlug: "core-expertise",
        icon: "integrations",
        imageUrl: "/images/services/integrations.webp",
        features: ["API Development", "MuleSoft", "Legacy Modernization", "Real-time Sync", "Data Migration", "iPaaS"],
        problems: [
            { title: "System Silos", description: "Multiple systems that don't communicate with each other" },
            { title: "Manual Data Entry", description: "Duplicate data entry across systems causing errors and delays" },
            { title: "Legacy Constraints", description: "Old systems limiting business agility and innovation" }
        ],
        solutions: [
            { title: "Seamless Connectivity", description: "Connect all your systems with robust, scalable integrations" },
            { title: "Automated Data Flow", description: "Real-time data synchronization eliminating manual entry" },
            { title: "Modern Architecture", description: "Modernize legacy systems without disrupting operations" }
        ],
        techStack: ["MuleSoft", "Boomi", "REST APIs", "GraphQL", "Kafka", "Azure Integration"]
    },

    // Enterprise Solutions
    {
        id: "4",
        slug: "dotnet-consultancy",
        name: ".NET Consultancy",
        shortDescription: "Enterprise application development with Microsoft stack.",
        description: "Build robust, scalable enterprise applications with our .NET expertise. From web applications to microservices, we deliver high-performance solutions using the latest Microsoft technologies and best practices.",
        categorySlug: "enterprise-solutions",
        icon: "dotnet",
        imageUrl: "/images/services/dotnet.webp",
        features: [".NET Core", "ASP.NET", "Azure", "Blazor", "Entity Framework", "Microservices"],
        problems: [
            { title: "Outdated Applications", description: "Legacy .NET applications that are difficult to maintain and scale" },
            { title: "Performance Issues", description: "Slow application performance affecting user experience" },
            { title: "Technical Debt", description: "Accumulated shortcuts making future development costly" }
        ],
        solutions: [
            { title: "Modern Architecture", description: "Migrate to .NET Core/8 with cloud-native patterns" },
            { title: "Optimized Performance", description: "Performance tuning and architectural improvements" },
            { title: "Clean Codebase", description: "Refactor and modernize to reduce technical debt" }
        ],
        techStack: [".NET 8", "C#", "Azure", "SQL Server", "Docker", "Kubernetes"],
        isFeatured: true
    },
    {
        id: "5",
        slug: "sap-consultancy",
        name: "SAP Consultancy",
        shortDescription: "Enterprise resource planning and business process optimization.",
        description: "Optimize your business processes with SAP solutions. Our consultants help you implement, customize, and integrate SAP modules to streamline operations, improve efficiency, and drive business growth.",
        categorySlug: "enterprise-solutions",
        icon: "sap",
        imageUrl: "/images/services/sap.webp",
        features: ["SAP S/4HANA", "SAP Fiori", "SAP Integration", "Business Process", "Analytics", "Migration"],
        problems: [
            { title: "Complex Processes", description: "Business processes scattered across multiple systems" },
            { title: "Slow Reporting", description: "Delayed access to critical business information" },
            { title: "Integration Gaps", description: "SAP not properly connected to other business systems" }
        ],
        solutions: [
            { title: "Unified ERP", description: "Consolidate processes in a single SAP platform" },
            { title: "Real-time Insights", description: "SAP Analytics Cloud for immediate business intelligence" },
            { title: "Connected Enterprise", description: "Seamless integration with Salesforce, legacy systems, and more" }
        ],
        techStack: ["SAP S/4HANA", "SAP Fiori", "ABAP", "SAP BTP", "SAP Integration Suite", "CPI"]
    },

    // Design & Development
    {
        id: "6",
        slug: "mobile-development",
        name: "Mobile App Development",
        shortDescription: "Native and cross-platform mobile applications.",
        description: "Create exceptional mobile experiences for iOS and Android. Our mobile development team builds native and cross-platform applications that engage users, drive retention, and deliver business value.",
        categorySlug: "design-development",
        icon: "mobile-development",
        imageUrl: "/images/services/mobile.webp",
        features: ["iOS Native", "Android Native", "React Native", "Flutter", "PWA", "App Store Optimization"],
        problems: [
            { title: "Limited Mobile Presence", description: "Losing customers who prefer mobile interactions" },
            { title: "Poor User Experience", description: "Existing app fails to engage and retain users" },
            { title: "Platform Fragmentation", description: "Maintaining separate iOS and Android codebases" }
        ],
        solutions: [
            { title: "Mobile-First Strategy", description: "Purpose-built apps for your target audience" },
            { title: "Engaging UX", description: "Intuitive interfaces designed for mobile behaviors" },
            { title: "Cross-Platform Efficiency", description: "Single codebase for multiple platforms when appropriate" }
        ],
        techStack: ["Swift", "Kotlin", "React Native", "Flutter", "Firebase", "App Center"],
        isFeatured: true
    },
    {
        id: "7",
        slug: "ui-ux-design",
        name: "UI/UX Design",
        shortDescription: "User-centered design for digital products.",
        description: "Design digital experiences that users love. Our UX researchers and UI designers create intuitive, accessible, and visually stunning interfaces that increase engagement, conversion, and customer satisfaction.",
        categorySlug: "design-development",
        icon: "ui-ux-design",
        imageUrl: "/images/services/uiux.webp",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design", "Accessibility", "Design Systems"],
        problems: [
            { title: "High Bounce Rates", description: "Users leaving due to confusing or frustrating interfaces" },
            { title: "Low Conversion", description: "Visitors not completing desired actions" },
            { title: "Inconsistent Experience", description: "Disjointed design across products and platforms" }
        ],
        solutions: [
            { title: "User-Centered Design", description: "Research-backed design decisions that resonate with users" },
            { title: "Conversion Optimization", description: "Streamlined flows that guide users to action" },
            { title: "Design Systems", description: "Consistent, scalable design language across all touchpoints" }
        ],
        techStack: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle", "Storybook"]
    },

    // Implementation & Support
    {
        id: "8",
        slug: "business-analysis",
        name: "Business Analysis",
        shortDescription: "Bridging business needs and technical solutions.",
        description: "Translate business requirements into actionable technical specifications. Our business analysts work closely with stakeholders to understand needs, document requirements, and ensure successful project delivery.",
        categorySlug: "implementation-support",
        icon: "business-analysis",
        imageUrl: "/images/services/ba.webp",
        features: ["Requirements Gathering", "Process Mapping", "Gap Analysis", "User Stories", "Stakeholder Management", "Documentation"],
        problems: [
            { title: "Misaligned Solutions", description: "Technical solutions that don't meet business needs" },
            { title: "Scope Creep", description: "Projects expanding beyond original requirements" },
            { title: "Communication Gaps", description: "Disconnect between business and technical teams" }
        ],
        solutions: [
            { title: "Clear Requirements", description: "Detailed specifications that align all stakeholders" },
            { title: "Managed Scope", description: "Structured change management and prioritization" },
            { title: "Bridge Communication", description: "BAs as the link between business and technology" }
        ],
        techStack: ["Jira", "Confluence", "Miro", "Lucidchart", "Azure DevOps", "Notion"],
        isFeatured: true
    },
    {
        id: "9",
        slug: "testing",
        name: "Testing Services",
        shortDescription: "Comprehensive automated and manual QA.",
        description: "Ensure quality at every stage with our testing expertise. From automated test suites to manual exploratory testing, we identify defects early, reduce risk, and accelerate time to market.",
        categorySlug: "implementation-support",
        icon: "testing",
        imageUrl: "/images/services/testing.webp",
        features: ["Automation Testing", "Manual Testing", "Performance Testing", "Security Testing", "Mobile Testing", "API Testing"],
        problems: [
            { title: "Production Bugs", description: "Defects reaching production and affecting users" },
            { title: "Slow Release Cycles", description: "Manual testing creating deployment bottlenecks" },
            { title: "Regression Issues", description: "New changes breaking existing functionality" }
        ],
        solutions: [
            { title: "Shift-Left Testing", description: "Catch defects early in the development cycle" },
            { title: "Test Automation", description: "CI/CD integrated automated test suites" },
            { title: "Comprehensive Coverage", description: "Robust regression testing protecting existing features" }
        ],
        techStack: ["Selenium", "Playwright", "Cypress", "JMeter", "Postman", "TestRail"]
    },
    {
        id: "10",
        slug: "devops",
        name: "DevOps & CI/CD",
        shortDescription: "Streamlined delivery pipelines and infrastructure.",
        description: "Accelerate delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure as code, and cloud-native architectures that enable rapid, reliable software releases.",
        categorySlug: "implementation-support",
        icon: "devops",
        imageUrl: "/images/services/devops.webp",
        features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Cloud Architecture", "Monitoring", "Backup & DR"],
        problems: [
            { title: "Slow Deployments", description: "Manual deployment processes taking hours or days" },
            { title: "Environment Inconsistency", description: "Dev, staging, and prod environments that differ" },
            { title: "Limited Visibility", description: "Lack of insight into application and infrastructure health" }
        ],
        solutions: [
            { title: "Automated Pipelines", description: "Push-button deployments in minutes, not hours" },
            { title: "Infrastructure as Code", description: "Reproducible environments using Terraform/Pulumi" },
            { title: "Observability", description: "Comprehensive monitoring, logging, and alerting" }
        ],
        techStack: ["Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Prometheus"]
    },
    {
        id: "11",
        slug: "customer-success",
        name: "Customer Success",
        shortDescription: "Ongoing support and value realization.",
        description: "Maximize the value of your technology investments. Our customer success team provides ongoing support, adoption guidance, and optimization services to ensure you achieve your business objectives.",
        categorySlug: "implementation-support",
        icon: "customer-success",
        imageUrl: "/images/services/customer-success.webp",
        features: ["Managed Services", "User Adoption", "Performance Optimization", "Health Checks", "Roadmap Planning", "24/7 Support"],
        problems: [
            { title: "Low Adoption", description: "Users not fully utilizing implemented solutions" },
            { title: "Reactive Support", description: "Only addressing issues after they cause problems" },
            { title: "Stagnant Systems", description: "Solutions not evolving with business needs" }
        ],
        solutions: [
            { title: "Adoption Programs", description: "Training and change management for user buy-in" },
            { title: "Proactive Monitoring", description: "Identify and resolve issues before they impact users" },
            { title: "Continuous Improvement", description: "Regular reviews and enhancements aligned to your roadmap" }
        ],
        techStack: ["Salesforce Service Cloud", "ServiceNow", "Zendesk", "PagerDuty", "Datadog", "Splunk"]
    },
    {
        id: "12",
        slug: "change-management",
        name: "Change Management",
        shortDescription: "Driving adoption through people-focused transformation.",
        description: "Successfully navigate organizational change with our proven methodologies. We help you manage the human side of transformation, ensuring stakeholder buy-in, user adoption, and lasting business impact.",
        categorySlug: "implementation-support",
        icon: "change-management",
        imageUrl: "/images/services/change-management.webp",
        features: ["Stakeholder Analysis", "Communication Strategy", "Training Programs", "Adoption Metrics", "Resistance Management", "Sustainability"],
        problems: [
            { title: "Resistance to Change", description: "Employees reluctant to adopt new processes or tools" },
            { title: "Failed Implementations", description: "Technical success but business objectives not met" },
            { title: "Knowledge Gaps", description: "Users unsure how to use new systems effectively" }
        ],
        solutions: [
            { title: "Stakeholder Engagement", description: "Early involvement and clear communication" },
            { title: "Structured Programs", description: "Proven frameworks for managing organizational change" },
            { title: "Capability Building", description: "Comprehensive training and ongoing support" }
        ],
        techStack: ["WalkMe", "Whatfix", "LMS Platforms", "Prosci ADKAR", "Kotter 8-Step", "Survey Tools"]
    },

    // Talent & Growth
    {
        id: "13",
        slug: "training",
        name: "Training Programs",
        shortDescription: "Building internal capabilities and expertise.",
        description: "Develop your team's skills with our comprehensive training programs. From Salesforce certifications to AI/ML fundamentals, we deliver customized training that builds lasting organizational capability.",
        categorySlug: "talent-growth",
        icon: "training",
        imageUrl: "/images/services/training.webp",
        features: ["Salesforce Certification", "Technical Training", "Custom Workshops", "Hands-on Labs", "E-Learning", "Assessment"],
        problems: [
            { title: "Skill Gaps", description: "Team lacking expertise in critical technologies" },
            { title: "Vendor Dependency", description: "Over-reliance on external consultants" },
            { title: "Knowledge Loss", description: "Expertise leaving when employees move on" }
        ],
        solutions: [
            { title: "Targeted Training", description: "Programs designed for your specific technology stack" },
            { title: "Internal Expertise", description: "Build in-house capabilities for self-sufficiency" },
            { title: "Knowledge Transfer", description: "Documented processes and shared learnings" }
        ],
        techStack: ["Trailhead", "Pluralsight", "LinkedIn Learning", "Custom LMS", "Hands-on Sandboxes", "Certification Programs"],
        isFeatured: true
    },
    {
        id: "14",
        slug: "it-recruitment",
        name: "IT Recruitment",
        shortDescription: "Strategic talent acquisition for technology roles.",
        description: "Find the right technical talent for your organization. Our IT recruitment specialists understand both technology and culture fit, helping you build high-performing teams quickly and effectively.",
        categorySlug: "talent-growth",
        icon: "it-recruitment",
        imageUrl: "/images/services/recruitment.webp",
        features: ["Permanent Placement", "Contract Staffing", "Executive Search", "Technical Screening", "Market Insights", "Employer Branding"],
        problems: [
            { title: "Talent Shortage", description: "Difficulty finding qualified technical professionals" },
            { title: "Long Hiring Cycles", description: "Positions remaining open for months" },
            { title: "Poor Fit", description: "Hires who don't align with technical or cultural needs" }
        ],
        solutions: [
            { title: "Specialist Network", description: "Access to pre-vetted technical talent pool" },
            { title: "Streamlined Process", description: "Efficient screening and interview coordination" },
            { title: "Holistic Assessment", description: "Technical skills and cultural alignment evaluation" }
        ],
        techStack: ["LinkedIn Recruiter", "Technical Assessments", "ATS Platforms", "Interview.io", "HackerRank", "Reference Checks"]
    }
];

/**
 * Resolves service icon name string to LucideIcon component
 */
export function resolveServiceIcon(iconName: string | null): LucideIcon {
    if (iconName && serviceIconMap[iconName]) {
        return serviceIconMap[iconName];
    }
    return Briefcase;
}

/**
 * Get all services
 */
export function getServices(): Service[] {
    return services;
}

/**
 * Get single service by slug
 */
export function getServiceBySlug(slug: string): Service | null {
    return services.find(service => service.slug === slug) || null;
}

/**
 * Get services by category slug
 */
export function getServicesByCategory(categorySlug: string): Service[] {
    return services.filter(service => service.categorySlug === categorySlug);
}

/**
 * Get related services (same category, excluding current)
 */
export function getRelatedServices(currentSlug: string, categorySlug: string, limit: number = 3): Service[] {
    return services
        .filter(service => service.categorySlug === categorySlug && service.slug !== currentSlug)
        .slice(0, limit);
}

/**
 * Get featured services (one per category)
 */
export function getFeaturedServices(): Service[] {
    return services.filter(service => service.isFeatured === true);
}

