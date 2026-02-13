import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

// Mock Data for Sample Blog Posts
const blogData = {
    "salesforce-ai-agentforce": {
        title: "The Rise of Autonomous Enterprise: How Salesforce Agentforce is Redefining AI",
        date: "March 15, 2024",
        author: "Abhishek Devanda",
        category: "AI & Salesforce",
        readTime: "5 min read",
        content: `
            <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
                Artificial Intelligence has moved beyond simple predictive models and chatbots. With the introduction of <strong>Salesforce Agentforce</strong>, we are witnessing the dawn of the autonomous enterprise—a paradigm shift where AI agents don't just assist humans but actively perform complex tasks, make decisions, and drive business outcomes.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">From Co-pilots to Autonomous Agents</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Traditional AI assistants, or "co-pilots," rely on human prompts to function. Agentforce changes this dynamic by introducing autonomous agents capable of reasoning, planning, and executing actions across your Salesforce ecosystem. Whether it's resolving a customer service inquiry, qualifying a sales lead, or optimizing a marketing campaign, these agents operate with a level of independence that drastically enhances operational efficiency.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">The Core Components of Agentforce</h2>
            <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li><strong>The Atlas Reasoning Engine:</strong> The brain behind the operation, allowing agents to understand context, plan sequences of actions, and refine their approach based on outcomes.</li>
                <li><strong>Data Cloud Integration:</strong> Agents are grounded in your real-time enterprise data, ensuring every action is relevant, accurate, and personalized.</li>
                <li><strong>Guardrails & Trust:</strong> Built on the Einstein Trust Layer, Agentforce ensures that autonomy doesn't compromise security or compliance.</li>
            </ul>
            <h2 class="text-2xl font-bold mb-4 mt-8">Business Impact</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                For enterprises, the implication is profound. By offloading routine, high-volume tasks to autonomous agents, human teams are freed to focus on strategic initiatives, complex problem-solving, and building deeper customer relationships. This isn't just automation; it's the intelligent orchestration of business processes at scale.
            </p>
        `
    },
    "predictive-ai-data-cloud": {
        title: "Unlocking Business Value: The Synergy of Data Cloud and Predictive AI",
        date: "March 10, 2024",
        author: "Tech Strategy Team",
        category: "Data & Analytics",
        readTime: "4 min read",
        content: `
            <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
                In the modern digital landscape, data is abundant, but actionable intelligence is scarce. The challenge lies not in collecting data, but in unifying it and extracting value. <strong>Salesforce Data Cloud</strong> combined with predictive AI models offers a robust solution to bridge this gap, transforming fragmented data into specific, future-looking insights.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">The Unified Data Foundation</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Predictive AI is only as good as the data it feeds on. Data Cloud ingests, harmonizes, and unifies data from disparate sources—CRM, web, mobile, APIs, and legacy systems—into a single, real-time customer graph. This unified profile is the bedrock upon which accurate predictive models optimize business decisions.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">Predicting the Future vs. Analyzing the Past</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Traditional analytics tells you what happened. Predictive AI, powered by Einstein, tells you what <em>will</em> happen. By analyzing historical patterns within your unified data, businesses can:
            </p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li><strong>Forecast Sales Trends:</strong> Identify potential revenue dips before they occur and adjust strategies proactively.</li>
                <li><strong>Anticipate Customer Churn:</strong> Flag at-risk customers based on subtle behavioral signals and intervene with personalized retention offers.</li>
                <li><strong>Optimize Supply Chain:</strong> Predict demand fluctuations to manage inventory levels more efficiently.</li>
            </ul>
            <h2 class="text-2xl font-bold mb-4 mt-8">Strategic Advantage</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Implementing this synergy allows organizations to move from reactive to proactive operations. It’s not just about efficiency; it’s about agility—the ability to foresee market shifts and customer needs before competitors do.
            </p>
        `
    },
    "generative-ai-customer-service": {
        title: "Revolutionizing Service Excellence: Generative AI in the Contact Center",
        date: "February 28, 2024",
        author: "Service Cloud Experts",
        category: "Customer Service",
        readTime: "6 min read",
        content: `
            <p class="mb-6 text-lg leading-relaxed text-muted-foreground">
                Customer expectations are at an all-time high. They demand instant, personalized, and accurate support 24/7. Integrating <strong>Generative AI</strong> into the contact center through Salesforce Service Cloud is not just an upgrade—it's a revolution in how service is delivered and experienced.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">Empowering Agents, Not Replacing Them</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                The true power of Generative AI lies in augmentation. By embedding AI directly into the agent console, Service Cloud empowers human agents with:
            </p>
            <ul class="list-disc list-inside space-y-2 mb-6 text-muted-foreground">
                <li><strong>Auto-Generated Replies:</strong> Drafting context-aware responses based on conversation history and knowledge base articles, significantly reducing handling time.</li>
                <li><strong>Work Summaries:</strong> Automatically summarizing case interactions upon closure, ensuring accurate record-keeping without manual data entry.</li>
                <li><strong>Knowledge Creation:</strong> Identifying gaps in knowledge articles and drafting new content based on successful case resolutions.</li>
            </ul>
            <h2 class="text-2xl font-bold mb-4 mt-8">Hyper-Personalized Self-Service</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                For customers who prefer self-service, Generative AI enables conversational bots that go beyond rigid scripts. These bots can understand nuance, intent, and sentiment, providing answers that feel human-like and resolving complex queries without ever needing a live agent.
            </p>
            <h2 class="text-2xl font-bold mb-4 mt-8">The Return on Investment</h2>
            <p class="mb-6 leading-relaxed text-muted-foreground">
                Organizations adopting this technology report higher Customer Satisfaction (CSAT) scores, lower cost-to-serve, and improved employee retention as agents are relieved of repetitive tasks to focus on meaningful customer interactions.
            </p>
        `
    }
};

export function generateStaticParams() {
    return Object.keys(blogData).map((slug) => ({
        slug: slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogData[slug as keyof typeof blogData];

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
                <Link href="/">
                    <Button>Return Home</Button>
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-background py-20">
            {/* Hero Section */}
            <div className="container mx-auto px-4 max-w-4xl">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>

                <div className="space-y-6 mb-12 border-b border-border/50 pb-12">
                    <Badge variant="secondary" className="mb-4">
                        {post.category}
                    </Badge>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none text-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Footer CTA */}
                <div className="mt-16 pt-8 border-t border-border/50">
                    <h3 className="text-xl font-bold mb-4">Want to learn more?</h3>
                    <p className="text-muted-foreground mb-6">
                        Discover how we can implement these solutions for your business.
                    </p>
                    <Link href="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
