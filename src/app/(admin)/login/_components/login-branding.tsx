import Link from "next/link";
import { Cloud, Sparkles, Workflow } from "lucide-react";
import { Logo } from "@/components/layout/logo";

export function LoginBranding() {
    return (
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
            {/* Background Pattern - Grid like homepage */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[24px_24px]" />

            {/* Glowing Orbs - Using brand colors */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-foreground/15 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/30 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full p-12 text-primary-foreground">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Logo className="brightness-0 invert"/>
                </Link>

                {/* Center Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-[1.15]">
                            Architecting the <br />
                            <span className="text-primary-foreground/90">
                                Future of Enterprise
                            </span>
                        </h1>
                        <p className="text-lg text-primary-foreground/70 max-w-md leading-relaxed">
                            Experience the power of unified data, intelligent automation, and seamless Salesforce integration.
                        </p>
                    </div>

                    {/* Feature List - Using brand consistent styling */}
                    <div className="grid gap-4 max-w-md">
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm transition-all hover:bg-primary-foreground/15">
                            <div className="p-3 rounded-lg bg-primary-foreground/15">
                                <Cloud className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="font-semibold text-primary-foreground">Salesforce Ecosystem</h3>
                                <p className="text-xs text-primary-foreground/60">CRM, Marketing & Service Cloud</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm transition-all hover:bg-primary-foreground/15">
                            <div className="p-3 rounded-lg bg-primary-foreground/15">
                                <Sparkles className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="font-semibold text-primary-foreground">AI & Business Intelligence</h3>
                                <p className="text-xs text-primary-foreground/60">Predictive Analytics & Automation</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm transition-all hover:bg-primary-foreground/15">
                            <div className="p-3 rounded-lg bg-primary-foreground/15">
                                <Workflow className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="space-y-0.5">
                                <h3 className="font-semibold text-primary-foreground">Enterprise Integration</h3>
                                <p className="text-xs text-primary-foreground/60">Seamless Data Architecture</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-sm text-primary-foreground/50">
                    © {new Date().getFullYear()} Amaanc. Trusted Salesforce Partner Since 2012.
                </p>
            </div>
        </div>
    )
}
