
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    slug: z.string().min(2, {
        message: "Slug must be at least 2 characters.",
    }),
    description: z.string().optional(),
    business_problem: z.string().optional(),
    approach: z.string().optional(),
    tools: z.string().optional(), // Comma separated
    value_proposition: z.string().optional(),
})

export function ServiceForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            description: "",
            business_problem: "",
            approach: "",
            tools: "",
            value_proposition: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const supabase = createClient()
        const { error } = await supabase.from("services").insert({
            title: values.title,
            slug: values.slug,
            description: values.description,
            business_problem: values.business_problem,
            approach: values.approach,
            tools: values.tools ? values.tools.split(",").map((t) => t.trim()) : [],
            value_proposition: values.value_proposition,
        })

        if (error) {
            toast.error("Failed to create service: " + error.message)
        } else {
            toast.success("Service created")
            setOpen(false)
            router.refresh()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Service Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="service-slug" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Brief description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="business_problem"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Business Problem</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Problem statement" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="approach"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Our Approach</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="How we solve it" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="value_proposition"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Value Proposition</FormLabel>
                            <FormControl>
                                <Input placeholder="Key benefit" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tools"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tools (comma separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="React, Next.js, Supabase" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
