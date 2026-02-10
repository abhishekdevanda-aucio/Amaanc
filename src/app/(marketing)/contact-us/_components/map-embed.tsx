export function MapEmbed() {
    return (
        <div className="container mx-auto px-4 pb-16">
            <div className="relative group rounded-xl overflow-hidden w-full">
                {/* Decorative Border Glow */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-primary/30 via-accent/30 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative w-full h-[400px] rounded-xl overflow-hidden border border-border/50 bg-card/50">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.1736633!3d28.5298941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b3471932b%3A0x137d5885c49485cd!2sQutab+Minar!5e0!3m2!1sen!2sin!4v1512345678901"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Amaanc Office Location"
                        className="grayscale-30 group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Overlay with View Button */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                            <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground shadow-lg">
                                📍 New Delhi, India
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
