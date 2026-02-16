import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogsPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/20">
            <h1 className="text-4xl font-bold mb-4">Our Insights</h1>
            <p className="text-muted-foreground mb-8 max-w-md text-center">
                Explore our latest thought leadership on Salesforce, AI, and Enterprise Technology.
            </p>
            <div className="grid gap-4">
                <Link href="/blogs/salesforce-ai-agentforce">
                    <Button variant="link" className="text-lg">Read about Agentforce AI</Button>
                </Link>
                <Link href="/blogs/predictive-ai-data-cloud">
                    <Button variant="link" className="text-lg">Read about Data Cloud & Predictive AI</Button>
                </Link>
                <Link href="/blogs/generative-ai-customer-service">
                    <Button variant="link" className="text-lg">Read about Generative AI in Service</Button>
                </Link>
            </div>
            <Link href="/" className="mt-12">
                <Button variant="outline">Back to Home</Button>
            </Link>
        </div>
    );
}
