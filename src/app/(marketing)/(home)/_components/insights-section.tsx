import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const insights = [
    {
        title: "The Rise of Autonomous Enterprise: How Salesforce Agentforce is Redefining AI",
        excerpt: "Agentforce introduces autonomous agents capable of reasoning, planning, and executing actions across your Salesforce ecosystem, moving beyond simple co-pilots.",
        date: "Mar 15, 2024",
        author: "Abhishek Devanda",
        category: "AI & Salesforce",
        image: "/images/home/insight-ai-salesforce.jpg",
        slug: "salesforce-ai-agentforce",
    },
    {
        title: "Unlocking Business Value: The Synergy of Data Cloud and Predictive AI",
        excerpt: "Transform fragmented data into future-looking insights. Learn how unifying your data foundation powers accurate predictive models for strategic advantage.",
        date: "Mar 10, 2024",
        author: "Tech Strategy Team",
        category: "Data & Analytics",
        image: "/images/home/insight-architecture.webp",
        slug: "predictive-ai-data-cloud",
    },
    {
        title: "Revolutionizing Service Excellence: Generative AI in the Contact Center",
        excerpt: "Empower agents and delight customers with GenAI. From auto-generated replies to hyper-personalized self-service, discover the service revolution.",
        date: "Feb 28, 2024",
        author: "Service Cloud Experts",
        category: "Customer Service",
        image: "/images/home/insight-compliance.jpg",
        slug: "generative-ai-customer-service",
    },
];

export function InsightsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            Thought Leadership
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Ideas & <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Insights</span>
                        </h2>
                    </div>
                    <Link href="/blogs" className="hidden md:inline-flex">
                        <Button variant="outline" className="group inline-flex items-center">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <article
                            key={index}
                            className="flex flex-col group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Abstract Cover Image */}
                            <div className="h-48 w-full bg-muted relative overflow-hidden">
                                <Image
                                    src={insight.image}
                                    alt={insight.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm text-foreground hover:bg-background shadow-sm">
                                    {insight.category}
                                </Badge>
                            </div>

                            <div className="flex-1 p-6 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3 w-3" />
                                        <span>{insight.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User className="h-3 w-3" />
                                        <span>{insight.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    <Link href={`/blogs/${insight.slug}`}>
                                        {insight.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-1">
                                    {insight.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-border/50">
                                    <Link href={`/blogs/${insight.slug}`} className="inline-block">
                                        <span className="text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 flex justify-center md:hidden">
                    <Link href="/blogs" className="inline-flex w-full sm:w-auto">
                        <Button variant="outline" className="group inline-flex items-center w-full justify-center">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
