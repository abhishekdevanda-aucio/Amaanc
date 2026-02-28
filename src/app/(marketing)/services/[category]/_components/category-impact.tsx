import { BarChart3 } from "lucide-react";

export function CategoryImpact() {
    return (
        <section className="relative py-24 lg:py-32 bg-slate-950 text-slate-50 overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] opacity-50" />

            {/* Pure CSS Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-in slide-in-from-bottom-8 fade-in duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 text-slate-300 text-sm font-medium tracking-wide uppercase backdrop-blur-md">
                        <BarChart3 className="h-4 w-4 text-primary" />
                        <span>Business Value</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight">
                        Delivering Measurable <br className="hidden md:block" />
                        <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-primary via-blue-400 to-accent">Business Outcomes</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto text-balance mt-8">
                        We focus on creating tangible value through enhanced operational efficiency, robust scalability, intelligent automation, and data-driven decision making. Our approach ensures that every initiative aligns directly with your core business objectives, driving measurable ROI and sustainable long-term growth.
                    </p>
                </div>
            </div>
        </section>
    );
}
