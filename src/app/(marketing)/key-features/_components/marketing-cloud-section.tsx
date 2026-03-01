import { marketingCloud } from "@/data/salesforce-features";

export function MarketingCloudSection() {
    const Icon = marketingCloud.icon;

    return (
        <section className="relative py-20 overflow-hidden bg-background">
            {/* Background decorations */}
            <div className="absolute top-20 left-0 w-100 h-100 bg-purple-500/10 rounded-full blur-[100px]" />
            
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-3xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Icon className="w-8 h-8 text-purple-500" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                {marketingCloud.name}
                            </h2>
                            <p className="text-lg text-muted-foreground mt-1">
                                {marketingCloud.description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid - Bento Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {marketingCloud.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                        <FeatureIcon className="w-6 h-6 text-purple-500" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-foreground">
                                        {feature.title}
                                    </h3>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
