import { ServiceCategory } from "@/data/services";
import { Badge } from "@/components/ui/badge";

interface CategoryImpactProps {
    category: ServiceCategory;
}

export function CategoryImpact({ category }: CategoryImpactProps) {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                            Business Value
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Delivering Measurable <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                                Business Outcomes
                            </span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our {category.name} services focus on what matters most: driving operational efficiency, enabling scalable growth, and maximizing your return on technology investments. We don't just launch systems; we build foundations for a smarter enterprise.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { value: "40%", label: "Faster Market Speed" },
                            { value: "3x", label: "Higher Engagement" },
                            { value: "99%", label: "System Reliability" },
                            { value: "24/7", label: "Dedicated Support" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-background border border-border/50 rounded-2xl p-6 text-center hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
