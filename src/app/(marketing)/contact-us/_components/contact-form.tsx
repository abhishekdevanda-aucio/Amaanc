"use client";

import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldLabel,
    FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { submitContactForm } from "../_actions/submit-contact";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string(),
    company: z.string().min(1, "Company is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactForm() {
    const router = useRouter();
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
        },
        validators: {
            onSubmit: contactFormSchema,
        },
        onSubmit: async ({ value }) => {
            try {
                const result = await submitContactForm(value);

                if (result.error) {
                    toast.error(result.error);
                    return;
                }

                toast.success("Message sent successfully! We'll be in touch soon.");
                form.reset();
                router.refresh();
            } catch (error) {
                console.error(error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        },
    });

    return (
        <div className="relative group h-full">
            {/* Glow Effect Behind Card */}
            <div
                className={cn(
                    "absolute -inset-1 bg-linear-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl blur-xl opacity-10 transition-opacity duration-500",
                    focusedField ? "opacity-30" : "group-hover:opacity-20"
                )}
            />

            {/* Glassmorphism Card */}
            <div className="relative bg-card/60 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl shadow-black/5 p-6 md:p-8 h-full flex flex-col transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground">Send us a Message</h3>
                        <p className="text-xs text-muted-foreground font-medium">We typically respond within 24 hours</p>
                    </div>
                </div>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        form.handleSubmit();
                    }}
                    className="space-y-4 flex-1 flex flex-col"
                >
                    {/* Name and Company Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <form.Field
                            name="name"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid} className="space-y-1.5">
                                        <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-foreground/80 ml-1">
                                            Full Name <span className="text-primary">*</span>
                                        </FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onFocus={() => setFocusedField(field.name)}
                                            onBlur={() => {
                                                field.handleBlur();
                                                setFocusedField(null);
                                            }}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="John Doe"
                                            aria-invalid={isInvalid}
                                            className="h-11 bg-background/30 border-border/40 focus:border-primary/50 focus:bg-background/80 transition-all rounded-xl px-4 font-medium text-sm"
                                        />
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                );
                            }}
                        />

                        <form.Field
                            name="company"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid} className="space-y-1.5">
                                        <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-foreground/80 ml-1">
                                            Company <span className="text-primary">*</span>
                                        </FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            value={field.state.value}
                                            onFocus={() => setFocusedField(field.name)}
                                            onBlur={() => {
                                                field.handleBlur();
                                                setFocusedField(null);
                                            }}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="Acme Inc."
                                            aria-invalid={isInvalid}
                                            className="h-11 bg-background/30 border-border/40 focus:border-primary/50 focus:bg-background/80 transition-all rounded-xl px-4 font-medium text-sm"
                                        />
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                );
                            }}
                        />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <form.Field
                            name="email"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                                return (
                                    <Field data-invalid={isInvalid} className="space-y-1.5">
                                        <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-foreground/80 ml-1">
                                            Email Address <span className="text-primary">*</span>
                                        </FieldLabel>
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type="email"
                                            value={field.state.value}
                                            onFocus={() => setFocusedField(field.name)}
                                            onBlur={() => {
                                                field.handleBlur();
                                                setFocusedField(null);
                                            }}
                                            onChange={(e) => field.handleChange(e.target.value)}
                                            placeholder="john@example.com"
                                            aria-invalid={isInvalid}
                                            className="h-11 bg-background/30 border-border/40 focus:border-primary/50 focus:bg-background/80 transition-all rounded-xl px-4 font-medium text-sm"
                                        />
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                );
                            }}
                        />

                        <form.Field
                            name="phone"
                            children={(field) => (
                                <Field className="space-y-1.5">
                                    <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-foreground/80 ml-1">
                                        Phone Number (Optional)
                                    </FieldLabel>
                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        type="tel"
                                        value={field.state.value}
                                        onFocus={() => setFocusedField(field.name)}
                                        onBlur={() => {
                                            field.handleBlur();
                                            setFocusedField(null);
                                        }}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="+1 (555) 000-0000"
                                        className="h-11 bg-background/30 border-border/40 focus:border-primary/50 focus:bg-background/80 transition-all rounded-xl px-4 font-medium text-sm"
                                    />
                                </Field>
                            )}
                        />
                    </div>



                    <form.Field
                        name="message"
                        children={(field) => {
                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid;
                            return (
                                <Field data-invalid={isInvalid} className="space-y-1.5 flex-1 flex flex-col">
                                    <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-foreground/80 ml-1">
                                        Message <span className="text-primary">*</span>
                                    </FieldLabel>
                                    <Textarea
                                        id={field.name}
                                        name={field.name}
                                        value={field.state.value}
                                        onFocus={() => setFocusedField(field.name)}
                                        onBlur={() => {
                                            field.handleBlur();
                                            setFocusedField(null);
                                        }}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        placeholder="Tell us about your project requirements..."
                                        rows={4}
                                        className="resize-none bg-background/30 border-border/40 focus:border-primary/50 focus:bg-background/80 transition-all rounded-xl px-4 py-3 font-medium flex-1 min-h-[100px] text-sm"
                                        aria-invalid={isInvalid}
                                    />
                                    {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                </Field>
                            );
                        }}
                    />

                    <div className="pt-4 mt-auto">
                        <form.Subscribe
                            selector={(state) => [state.canSubmit, state.isSubmitting]}
                            children={([canSubmit, isSubmitting]) => (
                                <Button
                                    type="submit"
                                    className="w-full h-12 text-base font-bold bg-linear-to-r from-primary to-[oklch(0.5_0.18_220)] hover:opacity-90 transition-all shadow-xl shadow-primary/20 hover:shadow-primary/30 rounded-xl group"
                                    disabled={!canSubmit}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-3 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            )}
                        />
                    </div>

                    <p className="text-[10px] text-center text-muted-foreground font-medium pt-3 opacity-60">
                        Agree to <a href="#" className="text-primary hover:underline">Privacy Policy</a> & <a href="#" className="text-primary hover:underline">Terms</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
