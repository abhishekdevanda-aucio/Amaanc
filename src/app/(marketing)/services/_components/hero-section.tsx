"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background border-b border-border/50">
            {/* Background Gradients & Pattern */}
            <div className="absolute inset-0 z-0">

                {/* Gradient Blobs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse duration-10000" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

                {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="container relative z-10 mx-auto px-4 pt-20 pb-16">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="flex justify-center mb-6 animate-in slide-in-from-bottom-5 fade-in duration-700">
                        <Badge variant="outline" className="p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm rounded-full shadow-sm">
                            Amaanc Services
                        </Badge>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-100">
                        Strategic Solutions for <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-300%">
                            Digital Excellence
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10 animate-in slide-in-from-bottom-5 fade-in duration-700 delay-200">
                        We combine deep industry expertise with cutting-edge technology to build scalable, future-proof digital ecosystems that drive real growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom-5 fade-in duration-700 delay-300">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25 hover:scale-105 transition-all rounded-full">
                                Book a Consultation
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/case-studies" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base hover:bg-secondary/50 transition-all rounded-full">
                                <FileText className="mr-2 h-5 w-5" />
                                View Case Studies
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
