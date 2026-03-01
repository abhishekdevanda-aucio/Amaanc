import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, HeadphonesIcon, Megaphone, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function KeyFeaturesHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-background">
            {/* Background Gradients & Patterns */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-125 h-125 bg-primary/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-100 h-100 bg-accent/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-24 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-3xl">
                        {/* Breadcrumbs */}
                        <Breadcrumb className="mb-4">
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Key Features</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>                        <Badge
                            variant="outline"
                            className="mb-6 px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm"
                        >
                            15+ Years of Salesforce Consulting Experience
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
                            Salesforce Cloud{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                                Key Features
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                            Comprehensive capabilities across Sales, Service, Marketing, and AI to power enterprise transformation.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12">
                            <Link href="/contact-us" className="inline-flex">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 h-12 px-8 text-base shadow-lg shadow-primary/25 transition-all hover:scale-105 inline-flex items-center gap-2"
                                >
                                    Get Started Today
                                    <ArrowRight className="h-5 w-5" />
                                </Button>
                            </Link>

                            <Link href="/services" className="inline-flex">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5 transition-all"
                                >
                                    Explore Services
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Floating Cloud Cards */}
                    <div className="relative hidden lg:block h-full min-h-125">
                        <div className="relative mx-auto w-full max-w-lg aspect-square">

                            {/* Sales Cloud Card - Top Right */}
                            <div className="absolute top-8 right-0 w-64 p-5 rounded-2xl bg-card/80 backdrop-blur-xl border border-blue-500/20 shadow-2xl z-20 animate-float-slow hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                        <TrendingUp className="h-6 w-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <div className="text-base font-bold">Sales Cloud</div>
                                        <div className="text-xs text-muted-foreground">Revenue acceleration</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-blue-500 rounded-full animate-pulse" />
                                </div>
                            </div>

                            {/* Service Cloud Card - Bottom Left */}
                            <div className="absolute bottom-12 left-0 w-72 p-5 rounded-2xl bg-card/80 backdrop-blur-xl border border-emerald-500/20 shadow-2xl z-30 animate-float-delayed hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                        <HeadphonesIcon className="h-6 w-6 text-emerald-500" />
                                    </div>
                                    <div>
                                        <div className="text-base font-bold">Service Cloud</div>
                                        <div className="text-xs text-muted-foreground">Exceptional customer service</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[92%] bg-emerald-500 rounded-full animate-pulse" />
                                </div>
                            </div>

                            {/* Marketing Cloud Card - Top Left */}
                            {/* <div className="absolute top-4 left-4 w-64 p-5 rounded-2xl bg-card/80 backdrop-blur-xl border border-purple-500/20 shadow-2xl z-10 animate-float-slow animation-delay-500 hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                                        <Megaphone className="h-6 w-6 text-purple-500" />
                                    </div>
                                    <div>
                                        <div className="text-base font-bold">Marketing Cloud</div>
                                        <div className="text-xs text-muted-foreground">Personalized journeys</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[78%] bg-purple-500 rounded-full animate-pulse" />
                                </div>
                            </div> */}

                            {/* Einstein AI Card - Center Right */}
                            <div className="absolute top-1/2 right-8 -translate-y-1/2 w-64 p-5 rounded-2xl bg-card/80 backdrop-blur-xl border border-amber-500/20 shadow-2xl z-40 animate-float-slow animation-delay-700 hover:-translate-y-2 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                                        <Sparkles className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <div className="text-base font-bold">Einstein AI</div>
                                        <div className="text-xs text-muted-foreground">Predictive intelligence</div>
                                    </div>
                                </div>
                                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[95%] bg-linear-to-r from-amber-500 to-amber-400 rounded-full animate-pulse" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
