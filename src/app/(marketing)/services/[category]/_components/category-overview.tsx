import { ServiceCategory } from "@/data/services";
import { Badge } from "@/components/ui/badge";

interface CategoryOverviewProps {
    category: ServiceCategory;
}

export function CategoryOverview({ category }: CategoryOverviewProps) {
    if (!category.description) return null;

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Strategic Capabilities
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                        Empowering Modern Enterprises
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </div>
        </section>
    );
}
