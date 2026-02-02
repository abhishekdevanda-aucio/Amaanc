import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/lib/data/industries";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        return {
            title: "Industry Not Found",
        };
    }

    return {
        title: `${industry.title} | Amaanc`,
        description: industry.description,
    };
}

export default async function IndustryPage({ params }: PageProps) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);

    if (!industry) {
        notFound();
    }

    const Icon = industry.icon;

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex flex-col gap-4">
                        <Link href="/industries" className="inline-flex w-fit -ml-4 mb-4">
                            <Button
                                variant="ghost"
                                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Industries
                            </Button>
                        </Link>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-xl bg-primary/10">
                                <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {industry.title}
                            </h1>
                        </div>
                        <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            {industry.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 mx-auto grid md:grid-cols-[2fr_1fr] gap-12">
                    {/* Left Column: Description & Features */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {industry.fullDescription}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold tracking-tight">Key Solutions</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {industry.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-2 border rounded-lg p-4">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: CTA & Additional Info */}
                    <div className="space-y-6">
                        <Card className="bg-primary text-primary-foreground border-none">
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-xl font-bold">Ready to Transform?</h3>
                                <p className="opacity-90">
                                    Partner with Amaanc to leverage our {industry.title} expertise for your digital transformation journey.
                                </p>
                                <Link href="/contact" className="inline-flex w-full">
                                    <Button size="lg" variant="secondary" className="w-full font-semibold">
                                        Get in Touch
                                    </Button>
                                </Link>

                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-6 space-y-4">
                                <h3 className="text-lg font-semibold">Why Amaanc?</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Deep industry knowledge</li>
                                    <li>• Tailored digital solutions</li>
                                    <li>• End-to-end implementation</li>
                                    <li>• Continuous support</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
