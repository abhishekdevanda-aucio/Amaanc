import { MapPin, Phone, Mail, Linkedin, Twitter, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit Our Office",
        content: "123 Business Park, Tech Hub",
        subContent: "New Delhi, India 110001",
        href: "https://maps.google.com",
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+91 987 654 3210",
        subContent: "Mon-Fri, 9am-6pm IST",
        href: "tel:+919876543210",
        color: "text-green-500",
        bgColor: "bg-green-500/10",
    },
    {
        icon: Mail,
        title: "Email Us",
        content: "hello@amaanc.com",
        subContent: "We reply within 24 hours",
        href: "mailto:hello@amaanc.com",
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
    },
];

const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
];

export function ContactInfo() {
    return (
        <div className="flex flex-col gap-8">
            {/* Main Info Card */}
            <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/40 backdrop-blur-xl p-8 shadow-2xl shadow-black/5">
                <div className="flex flex-col gap-8">
                    {contactDetails.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            className="group relative flex items-start gap-5 transition-all"
                        >
                            <div className={cn(
                                "shrink-0 p-3.5 rounded-2xl border border-white/10 transition-all duration-500 group-hover:scale-110 shadow-inner",
                                item.bgColor
                            )}>
                                <item.icon className={cn("w-6 h-6", item.color)} />
                            </div>

                            <div className="flex-1 min-w-0 pt-1">
                                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">{item.title}</h4>
                                <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                                    {item.content}
                                </p>
                                <p className="text-sm text-muted-foreground font-medium mt-1.5 opacity-80">{item.subContent}</p>
                            </div>

                            <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    ))}
                </div>

                {/* Decorative background element */}
                <div className="absolute top-0 right-0 -u-translate-y-1/2 translate-x-1/2 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
            </div>

            {/* Support & Availability Badge Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-sm">
                    <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/10">
                        <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Now</p>
                        <p className="text-sm font-bold text-foreground">Global Support</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-card/30 border border-border/40 backdrop-blur-sm">
                    <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/10">
                        <ShieldCheck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Guaranteed</p>
                        <p className="text-sm font-bold text-foreground">24h Response</p>
                    </div>
                </div>
            </div>

            {/* Social Block */}
            <div className="flex items-center justify-between p-6 rounded-3xl bg-linear-to-br from-card/40 to-card/20 border border-border/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Connect</p>
                    <p className="text-sm font-bold text-foreground">Our Social Presence</p>
                </div>
                <div className="flex gap-3">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            className="p-3 rounded-xl bg-muted/40 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110 border border-transparent hover:border-primary/20"
                            target={social.href.startsWith("http") ? "_blank" : undefined}
                        >
                            <social.icon className="w-5 h-5" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
