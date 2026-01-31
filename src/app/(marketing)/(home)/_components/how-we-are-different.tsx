"use client"

import { useEffect, useState } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"

const features = [
    {
        title: "Business-First Consulting",
        description: "We don't just deliver tech; we align it with your strategic business goals. Our consultants speak your language and focus on outcomes that drive real value.",
        image: "/images/home/how-different-business.png"
    },
    {
        title: "Deep Salesforce + AI Expertise",
        description: "Mastery of the ecosystem combined with cutting-edge AI innovation. We help you leverage the full power of the platform to automate and accelerate.",
        image: "/images/home/how-different-salesforce-ai.png"
    },
    {
        title: "Proven Enterprise Frameworks",
        description: "Tested methodologies that minimize risk and maximize ROI. We bring structure and predictability to complex transformations.",
        image: "/images/home/how-different-frameworks.png"
    },
    {
        title: "Agile & Scalable Delivery",
        description: "Rapid deployment models that grow with your business needs. We prioritize flexibility, ensuring your solution adapts as you scale.",
        image: "/images/home/how-different-agile.png"
    },
    {
        title: "Long-Term Partnership",
        description: "We build relationships, not just software. Your success is our success, and we are committed to your growth for the long haul.",
        image: "/images/home/how-different-partnership.png"
    },
    {
        title: "Since-2012 Credibility",
        description: "Over a decade of proven success and stability in the market. You can trust our track record of delivering excellence.",
        image: "/images/home/how-different-credibility.png"
    }
]

export function HowWeAreDifferentSection() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const handlePrevious = () => {
        api?.scrollPrev()
    }

    const handleNext = () => {
        api?.scrollNext()
    }

    // Get current feature data safely
    const activeFeature = features[current] || features[0]

    return (
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto px-4 lg:px-8">

                    {/* Left Column */}
                    <div className="relative py-8 md:px-12 lg:px-16 w-full max-w-md mx-auto lg:max-w-none">
                        {/* Stack Decorators - Hidden on mobile for cleaner look */}
                        <div className="hidden md:block absolute top-4 left-10 w-[calc(100%-5rem)] h-full rounded-[40px] bg-white/5 -rotate-6 scale-95 z-0 transition-transform duration-500" />
                        <div className="hidden md:block absolute top-2 left-12 w-[calc(100%-6rem)] h-full rounded-[40px] bg-white/10 -rotate-3 scale-95 z-0 transition-transform duration-500" />

                        <div className="relative z-10 w-full aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 bg-primary group">
                            <Carousel
                                setApi={setApi}
                                className="w-full h-full"
                                opts={{
                                    loop: true,
                                    align: "start",
                                }}
                            >
                                <CarouselContent className="h-full">
                                    {features.map((feature, index) => (
                                        <CarouselItem key={index} className="h-full">
                                            <div className="relative w-full h-full aspect-square">
                                                <Image
                                                    src={feature.image}
                                                    alt={feature.title}
                                                    fill
                                                    className="object-cover"
                                                    priority={index === 0}
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-0 z-20">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrevious}
                                aria-label="Previous slide"
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full border-white/20 bg-primary/80 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all shadow-lg"
                            >
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-0 z-20">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                aria-label="Next slide"
                                className="h-10 w-10 md:h-12 md:w-12 rounded-full border-white/20 bg-primary/80 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-all shadow-lg"
                            >
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center space-y-6 lg:pr-12 min-h-[350px]">
                        <Badge variant="outline" className="w-fit p-4 border-white/20 bg-white/5 text-primary-foreground/90 font-medium tracking-wide mb-6">
                            We're Different
                        </Badge>

                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={current}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
                                {activeFeature.title}
                            </h2>

                            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                                {activeFeature.description}
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold border-b border-white/30 pb-0.5 hover:border-white transition-all group">
                                Tell Us About Your Salesforce Partner Needs
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
