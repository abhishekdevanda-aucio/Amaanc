import type { LucideIcon } from "lucide-react";
import {
    TrendingUp,
    Target,
    Users,
    BarChart3,
    Calendar,
    Workflow,
    MessageSquare,
    TicketCheck,
    Clock,
    Bot,
    HeadphonesIcon,
    FileText,
    Send,
    Megaphone,
    Mail,
    BarChart2,
    UserCheck,
    Sparkles,
    Brain,
    Lightbulb,
    LineChart,
    Shield,
    Zap,
} from "lucide-react";

export interface CloudFeature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface SalesforceCloud {
    name: string;
    slug: string;
    icon: LucideIcon;
    description: string;
    color: string; // Tailwind color prefix (e.g., 'blue-500', 'emerald-500')
    features: CloudFeature[];
}

export const salesCloud: SalesforceCloud = {
    name: "Sales Cloud",
    slug: "sales-cloud",
    icon: TrendingUp,
    description:
        "Accelerate revenue growth with intelligent sales automation and pipeline management.",
    color: "blue-500",
    features: [
        {
            icon: Target,
            title: "Lead & Opportunity Management",
            description:
                "Track and nurture leads through every stage of the sales funnel with automated scoring and intelligent routing.",
        },
        {
            icon: BarChart3,
            title: "Sales Forecasting & Analytics",
            description:
                "AI-powered forecasting and real-time dashboards provide complete visibility into pipeline health and revenue projections.",
        },
        {
            icon: Users,
            title: "Account & Contact Management",
            description:
                "360-degree customer view with complete interaction history, org charts, and relationship mapping.",
        },
        {
            icon: Calendar,
            title: "Activity & Task Automation",
            description:
                "Streamline daily workflows with automated task creation, email tracking, and calendar synchronization.",
        },
        {
            icon: Workflow,
            title: "Sales Process Automation",
            description:
                "Design custom sales processes with approval workflows, validation rules, and automated actions.",
        },
        {
            icon: BarChart2,
            title: "Performance Management",
            description:
                "Track team performance with leaderboards, goal tracking, and comprehensive sales metrics.",
        },
    ],
};

export const serviceCloud: SalesforceCloud = {
    name: "Service Cloud",
    slug: "service-cloud",
    icon: HeadphonesIcon,
    description:
        "Deliver exceptional customer service with omnichannel support and intelligent case management.",
    color: "emerald-500",
    features: [
        {
            icon: TicketCheck,
            title: "Case Management",
            description:
                "Efficiently manage customer inquiries across all channels with intelligent case routing and prioritization.",
        },
        {
            icon: MessageSquare,
            title: "Omnichannel Support",
            description:
                "Provide seamless support across phone, email, chat, social media, and messaging apps from a unified console.",
        },
        {
            icon: FileText,
            title: "Knowledge Base",
            description:
                "Empower customers and agents with a centralized knowledge repository featuring AI-powered article suggestions.",
        },
        {
            icon: Bot,
            title: "Service Automation",
            description:
                "Automate routine tasks with macros, quick actions, and intelligent workflows to boost agent productivity.",
        },
        {
            icon: Clock,
            title: "SLA Management",
            description:
                "Track and enforce service level agreements with automated escalations and milestone tracking.",
        },
        {
            icon: BarChart3,
            title: "Service Analytics",
            description:
                "Monitor service performance with real-time metrics on response times, CSAT, and agent efficiency.",
        },
    ],
};

export const marketingCloud: SalesforceCloud = {
    name: "Marketing Cloud",
    slug: "marketing-cloud",
    icon: Megaphone,
    description:
        "Create personalized customer journeys with data-driven marketing automation at scale.",
    color: "purple-500",
    features: [
        {
            icon: Send,
            title: "Journey Builder",
            description:
                "Design and automate personalized customer journeys across email, mobile, social, and web channels.",
        },
        {
            icon: Mail,
            title: "Email Studio",
            description:
                "Create, personalize, and send targeted email campaigns with dynamic content and A/B testing capabilities.",
        },
        {
            icon: UserCheck,
            title: "Audience Segmentation",
            description:
                "Build precise audience segments using AI-driven insights and unified customer data for targeted campaigns.",
        },
        {
            icon: BarChart2,
            title: "Analytics & Reporting",
            description:
                "Track campaign performance with real-time dashboards, attribution modeling, and ROI analysis.",
        },
        {
            icon: Workflow,
            title: "Marketing Automation",
            description:
                "Automate lead nurturing, scoring, and follow-ups with trigger-based campaigns and behavioral targeting.",
        },
        {
            icon: Megaphone,
            title: "Social Media Marketing",
            description:
                "Manage, schedule, and analyze social campaigns across all major platforms with unified social listening.",
        },
    ],
};

export const einsteinAI: SalesforceCloud = {
    name: "Einstein AI",
    slug: "einstein-ai",
    icon: Sparkles,
    description:
        "Unlock predictive insights and intelligent automation with AI embedded across every cloud.",
    color: "amber-500",
    features: [
        {
            icon: Brain,
            title: "Predictive Analytics",
            description:
                "Leverage machine learning to predict customer behavior, identify trends, and forecast outcomes with precision.",
        },
        {
            icon: Lightbulb,
            title: "Intelligent Recommendations",
            description:
                "Get AI-powered next-best-action recommendations for sales, service, and marketing interactions.",
        },
        {
            icon: Bot,
            title: "Einstein Bots",
            description:
                "Build conversational AI chatbots that handle routine inquiries and seamlessly hand off to human agents.",
        },
        {
            icon: LineChart,
            title: "Lead & Opportunity Scoring",
            description:
                "Automatically score and prioritize leads and opportunities based on conversion probability and revenue potential.",
        },
        {
            icon: Zap,
            title: "Process Automation",
            description:
                "Automate complex workflows with AI-driven decision-making and intelligent document processing.",
        },
        {
            icon: Shield,
            title: "AI-Powered Insights",
            description:
                "Surface hidden patterns and anomalies in your data with natural language queries and automated insights.",
        },
    ],
};

export const salesforceClouds: SalesforceCloud[] = [
    salesCloud,
    serviceCloud,
    marketingCloud,
    einsteinAI,
];
