import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Milestone, Rocket, Globe2 } from "lucide-react";

export function OurStorySection() {
    const milestones = [
        {
            year: "2012",
            title: "The Foundation",
            description: "Amaanc began with a singular vision to bridge the gap between complex enterprise goals and evolving technology.",
            icon: <Milestone className="h-6 w-6 text-primary" />
        },
        {
            year: "2016",
            title: "Scaling Operations",
            description: "Expanded our services globally, guiding organizations through pivotal shifts like early cloud migrations.",
            icon: <Globe2 className="h-6 w-6 text-emerald-500" />
        },
        {
            year: "2020",
            title: "Enterprise Dominance",
            description: "Established deep partnerships in finance, healthcare, and retail, handling the most complex tech ecosystems.",
            icon: <CheckCircle2 className="h-6 w-6 text-blue-500" />
        },
        {
            year: "Present",
            title: "Agentic AI & Beyond",
            description: "Pioneering the intelligent automation paradigm, delivering sustained competitive advantage through advanced AI.",
            icon: <Rocket className="h-6 w-6 text-purple-500" />
        }
    ];

    return (
        <section id="our-journey" className="py-24 relative overflow-hidden bg-background">
            <div className="container px-4 mx-auto relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-6 p-4 text-sm font-medium border-primary/20 bg-primary/5 text-primary backdrop-blur-sm rounded-full">
                        Our Journey
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        A decade of <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent animate-gradient bg-size-[300%_auto]">
                            relentless innovation.
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our success isn't just measured in lines of code deployed; it's measured by the tangible growth we unlock for our clients.
                    </p>
                </div>

                <div className="relative border-l border-border/50 ml-4 md:ml-0 md:pl-0 md:border-none space-y-12 md:space-y-20">
                    {/* Timeline center line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border to-transparent -translate-x-1/2" />

                    {milestones.map((m, i) => (
                        <div key={i} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} `}>
                            {/* Marker */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-card shadow-lg items-center justify-center z-10">
                                {m.icon}
                            </div>

                            {/* Mobile marker */}
                            <div className="md:hidden absolute -left-10 mt-1 w-10 h-10 rounded-full border-4 border-background bg-card shadow-lg flex items-center justify-center z-10">
                                {m.icon}
                            </div>

                            {/* Content */}
                            <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} `}>
                                <div className={`p-6 md:p-8 rounded-3xl bg-card/40 border border-border/50 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm group ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} max-w-lg`}>
                                    <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">{m.year}</div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{m.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {m.description}
                                    </p>
                                </div>
                            </div>

                            <div className="hidden md:block flex-1 md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
