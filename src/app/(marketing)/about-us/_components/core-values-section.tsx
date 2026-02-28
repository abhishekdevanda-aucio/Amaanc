import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Shield, Zap, Users, Lightbulb, Target } from "lucide-react";

export function CoreValuesSection() {
    const values = [
        {
            title: "Innovation First",
            description: "We constantly explore the boundaries of technology to deliver forward-thinking solutions.",
            icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
            bg: "bg-amber-500/10",
        },
        {
            title: "Uncompromising Quality",
            description: "Excellence is not an option; it's our standard. We build robust and scalable systems.",
            icon: <Shield className="h-6 w-6 text-primary" />,
            bg: "bg-primary/10",
        },
        {
            title: "Client-Centricity",
            description: "Your goals are our goals. We align our strategies perfectly with your business objectives.",
            icon: <Target className="h-6 w-6 text-emerald-500" />,
            bg: "bg-emerald-500/10",
        },
        {
            title: "Agile Execution",
            description: "We adapt quickly, deliver iteratively, and ensure speed without sacrificing precision.",
            icon: <Zap className="h-6 w-6 text-blue-500" />,
            bg: "bg-blue-500/10",
        },
        {
            title: "Collaborative Spirit",
            description: "We believe the best results come from open communication and true partnership.",
            icon: <Users className="h-6 w-6 text-pink-500" />,
            bg: "bg-pink-500/10",
        },
        {
            title: "Integrity always",
            description: "Transparent processes, honest communication, and ethical practices in everything we do.",
            icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />,
            bg: "bg-purple-500/10",
        },
    ];

    return (
        <section className="py-24 bg-card/30">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground text-lg">
                        The principles that guide our decisions, shape our culture, and define how we partner with you.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, idx) => (
                        <Card key={idx} className="bg-background/50 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                            <CardHeader>
                                <div className={`p-3 rounded-xl w-fit mb-4 ${value.bg}`}>
                                    {value.icon}
                                </div>
                                <CardTitle className="text-xl">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base text-muted-foreground">
                                    {value.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
