import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const insights = [
    {
        title: "The Future of AI in Enterprise Salesforce Implementations",
        excerpt: "How artificial intelligence is reshaping the way large organizations manage customer relationships and data.",
        date: "Mar 15, 2024",
        author: "Abhishek Devanda",
        category: "AI & Salesforce",
        image: "/images/home/insight-ai-salesforce.jpg",
    },
    {
        title: "Navigating Compliance in Regulated Markets",
        excerpt: "Best practices for implementing cloud solutions in banking, insurance, and healthcare sectors.",
        date: "Mar 10, 2024",
        author: "Expert Team",
        category: "Compliance",
        image: "/images/home/insight-compliance.jpg",
    },
    {
        title: "Optimizing Multi-Cloud Architectures for Scale",
        excerpt: "Strategies for improved system performance and reliability across hybrid cloud environments.",
        date: "Feb 28, 2024",
        author: "Tech Lead",
        category: "Architecture",
        image: "/images/home/insight-architecture.webp",
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
                            {/* Abstract Cover Image Placeholder */}
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
                                    <Link href={`/insights/${index}`}>
                                        {insight.title}
                                    </Link>
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-1">
                                    {insight.excerpt}
                                </p>

                                <div className="mt-auto pt-4 border-t border-border/50">
                                    <span className="text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="h-4 w-4" />
                                    </span>
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
