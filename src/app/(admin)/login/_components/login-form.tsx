"use client";

import { useActionState } from "react";
import { signInWithEmail, type AuthState } from "../_actions/auth-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, ArrowRight, AlertCircle } from "lucide-react";

export function LoginForm() {
    const [state, formAction, pending] = useActionState<AuthState, FormData>(
        signInWithEmail,
        null
    );

    return (
        <form action={formAction} className="space-y-5">
            {state?.error && (
                <div className="flex items-center gap-3 rounded-lg bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive animate-in fade-in slide-in-from-top-2 duration-300">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{state.error}</span>
                </div>
            )}

            <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                </Label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        required
                        disabled={pending}
                        autoComplete="email"
                        className="pl-10 h-12 bg-background border-border/50 focus:border-primary transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                    Password
                </Label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        disabled={pending}
                        autoComplete="current-password"
                        className="pl-10 h-12 bg-background border-border/50 focus:border-primary transition-colors"
                    />
                </div>
            </div>

            <Button
                type="submit"
                className="w-full h-12 text-base font-medium shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                disabled={pending}
            >
                {pending ? (
                    <span className="flex items-center gap-2">
                        <svg
                            className="h-4 w-4 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>
                        Signing in...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        Sign In
                        <ArrowRight className="h-4 w-4" />
                    </span>
                )}
            </Button>
        </form>
    );
}
