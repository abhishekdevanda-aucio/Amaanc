import { Service } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

interface ServiceExpertiseProps {
    service: Service;
}

export function ServiceExpertise({ service }: ServiceExpertiseProps) {
    if (!service.solutions || service.solutions.length === 0) return null;

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center md:text-left mb-16 max-w-2xl">
                    <Badge variant="outline" className="mb-4 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                        Comprehensive Capabilities
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                        End-to-End <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">{service.name}</span> Consulting Services
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.solutions.map((solution, idx) => (
                        <Card
                            key={idx}
                            className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 flex flex-col h-full"
                        >
                            <CardHeader>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0 mt-1">
                                        {/* Fallback icon if no specific icon is provided */}
                                        <Settings className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-xl leading-tight mb-1 group-hover:text-primary transition-colors">
                                            {solution.title}
                                        </CardTitle>
                                    </div>
                                </div>
                                <CardDescription className="leading-relaxed">
                                    {solution.description}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
