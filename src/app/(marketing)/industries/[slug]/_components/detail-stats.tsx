import { Industry } from "@/lib/data/industries";

interface DetailStatsProps {
    industry: Industry;
}

export function DetailStats({ industry }: DetailStatsProps) {
    if (!industry.stats || industry.stats.length === 0) return null;

    return (
        <section className="py-12 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/20">
                    {industry.stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center p-4">
                            <span className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base font-medium uppercase tracking-widest opacity-80">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
