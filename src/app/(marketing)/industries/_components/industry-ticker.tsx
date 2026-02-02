import { Landmark, Banknote, Zap, Train, Shield, ShoppingBag } from "lucide-react";

export function IndustryTicker() {
    const scrollIndustries = [
        { icon: Banknote, name: "Finance" },
        { icon: Landmark, name: "Banking" },
        { icon: Zap, name: "Utilities" },
        { icon: Train, name: "Railway" },
        { icon: Shield, name: "Insurance" },
        { icon: ShoppingBag, name: "Retail" },
    ];

    return (
        <div className="w-full border-y border-border/50 bg-muted/30 backdrop-blur-sm py-6 overflow-hidden relative">
            <div className="flex w-full group mask-linear-fade">
                {/* First Set */}
                <div className="flex shrink-0 animate-scroll group-hover:paused gap-0">
                    {scrollIndustries.map((item, i) => (
                        <div key={`a-${i}`} className="flex items-center gap-3 px-8 shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-default group/item">
                            <item.icon className="w-5 h-5 group-hover/item:text-primary transition-colors" />
                            <span className="font-semibold text-sm uppercase tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </div>
                {/* Second Set (Duplicate for seamless loop) */}
                <div className="flex shrink-0 animate-scroll group-hover:paused gap-0" aria-hidden="true">
                    {scrollIndustries.map((item, i) => (
                        <div key={`b-${i}`} className="flex items-center gap-3 px-8 shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-default group/item">
                            <item.icon className="w-5 h-5 group-hover/item:text-primary transition-colors" />
                            <span className="font-semibold text-sm uppercase tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </div>
                {/* Third Set (Extra safety for very wide screens) */}
                <div className="flex shrink-0 animate-scroll group-hover:paused gap-0" aria-hidden="true">
                    {scrollIndustries.map((item, i) => (
                        <div key={`c-${i}`} className="flex items-center gap-3 px-8 shrink-0 opacity-70 hover:opacity-100 transition-opacity cursor-default group/item">
                            <item.icon className="w-5 h-5 group-hover/item:text-primary transition-colors" />
                            <span className="font-semibold text-sm uppercase tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
