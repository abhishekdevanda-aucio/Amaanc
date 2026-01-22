import { Building2, Landmark, Factory, TrainFront, Briefcase, ShoppingBag, ShieldCheck } from "lucide-react";

const industries = [
    { icon: <Landmark className="w-6 h-6" />, name: "Finance" },
    { icon: <Building2 className="w-6 h-6" />, name: "Banking" },
    { icon: <Factory className="w-6 h-6" />, name: "Utilities" },
    { icon: <TrainFront className="w-6 h-6" />, name: "Railways" },
    { icon: <Briefcase className="w-6 h-6" />, name: "Insurance" },
    { icon: <ShoppingBag className="w-6 h-6" />, name: "Retail" },
];

export function TrustSection() {
    return (
        <section className="py-16 bg-muted/30 border-y border-border/50 relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-3 justify-center md:justify-start">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                            Trusted by Enterprises
                        </h2>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Delivering mission-critical solutions across regulated industries.
                        </p>
                    </div>

                    <div className="h-px bg-border flex-1 mx-8 hidden md:block" />
                </div>

                <div className="relative">
                    {/* Gradient Masks for separate look */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-muted/30 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-muted/30 to-transparent z-10" />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {industries.map((industry, index) => (
                            <div
                                key={index}
                                className="group flex flex-col items-center justify-center p-6 bg-background rounded-xl border border-border/50 shadow-xs hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="mb-4 p-3 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    {industry.icon}
                                </div>
                                <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                                    {industry.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
