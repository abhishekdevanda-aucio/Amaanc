
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./login-form";
import { ArrowLeft } from "lucide-react";

export function LoginInterface() {
    return (
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
                            className="flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Homepage
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
    )
}
