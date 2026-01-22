import { getSession } from "@/lib/isAuthenticated";
import { LoginForm } from "./_components/login-form";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Lock } from "lucide-react";

export default async function LoginPage() {
    const user = await getSession();
    if (user) {
        redirect("/dashboard");
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Branding & Visual */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Decorative Blurs */}
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-between p-12 text-primary-foreground w-full">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/logo/amaanc-logo.png"
                            alt="Amaanc Logo"
                            width={48}
                            height={48}
                            className="h-10 w-auto object-contain brightness-0 invert"
                            priority
                        />
                        <span className="text-2xl font-bold">Amaanc</span>
                    </Link>

                    {/* Center Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm">
                                Admin Portal
                            </Badge>
                            <h1 className="text-4xl xl:text-5xl font-bold tracking-tight leading-tight">
                                Welcome to the<br />
                                <span className="text-primary-foreground/90">Control Center</span>
                            </h1>
                            <p className="text-lg text-primary-foreground/70 max-w-md leading-relaxed">
                                Manage your Salesforce implementations, AI integrations, and enterprise solutions all in one place.
                            </p>
                        </div>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                                <Shield className="w-4 h-4" />
                                <span className="text-sm font-medium">Secure Access</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-medium">Real-time Data</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                                <Lock className="w-4 h-4" />
                                <span className="text-sm font-medium">Enterprise Grade</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="text-sm text-primary-foreground/50">
                        © {new Date().getFullYear()} Amaanc. Trusted Salesforce Partner Since 2012.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 flex flex-col bg-background">
                {/* Mobile Header */}
                <div className="lg:hidden p-6 border-b border-border">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo/amaanc-logo.png"
                            alt="Amaanc Logo"
                            width={40}
                            height={40}
                            className="h-8 w-auto object-contain"
                            priority
                        />
                        <span className="text-xl font-bold text-primary">Amaanc</span>
                    </Link>
                </div>

                {/* Form Container */}
                <div className="flex-1 flex items-center justify-center p-6 md:p-12">
                    <div className="w-full max-w-md space-y-8">
                        {/* Header */}
                        <div className="space-y-2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold tracking-tight text-foreground">
                                Sign in to your account
                            </h2>
                            <p className="text-muted-foreground">
                                Access the admin dashboard to manage your resources
                            </p>
                        </div>

                        {/* Login Form */}
                        <LoginForm />

                        {/* Back to Home */}
                        <div className="text-center">
                            <Link
                                href="/"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                ← Back to Homepage
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Mobile Footer */}
                <div className="lg:hidden p-6 text-center border-t border-border">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Amaanc. Trusted Salesforce Partner Since 2012.
                    </p>
                </div>
            </div>
        </div>
    );
}
