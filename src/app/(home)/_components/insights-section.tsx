import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Mock data for insights - in a real app this would come from a CMS
const insights = [
    {
        title: "The Future of AI in Enterprise Salesforce Implementations",
        excerpt: "How artificial intelligence is reshaping the way large organizations manage customer relationships and data.",
        date: "Mar 15, 2024",
        author: "Abhishek Devanda",
        category: "AI & Salesforce",
        color: "bg-blue-500",
    },
    {
        title: "Navigating Compliance in Regulated Markets",
        excerpt: "Best practices for implementing cloud solutions in banking, insurance, and healthcare sectors.",
        date: "Mar 10, 2024",
        author: "Expert Team",
        category: "Compliance",
        color: "bg-green-500",
    },
    {
        title: "Optimizing Multi-Cloud Architectures for Scale",
        excerpt: "Strategies for improved system performance and reliability across hybrid cloud environments.",
        date: "Feb 28, 2024",
        author: "Tech Lead",
        category: "Architecture",
        color: "bg-purple-500",
    },
];

export function InsightsSection() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
                            Thought Leadership
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                            Ideas & Insights
                        </h2>
                    </div>
                    <Button variant="outline" className="group" asChild>
                        <Link href="/insights">
                            View All Articles
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((insight, index) => (
                        <article
                            key={index}
                            className="flex flex-col group bg-card border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Abstract Cover Image Placeholder */}
                            <div className="h-48 w-full bg-muted relative overflow-hidden">
                                <div className={`absolute inset-0 opacity-10 ${insight.color} mix-blend-multiply`} />
                                <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
                                <Badge className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background">
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
            </div>
        </section>
    );
}
