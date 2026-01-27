
"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
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
    name: z.string().min(2),
    slug: z.string().min(2),
    overview: z.string().optional(),
    challenges: z.string().optional(), // Comma separated
    solutions: z.string().optional(), // Comma separated
})

export function IndustryForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            slug: "",
            overview: "",
            challenges: "",
            solutions: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const supabase = createClient()
        const { error } = await supabase.from("industries").insert({
            name: values.name,
            slug: values.slug,
            overview: values.overview,
            challenges: values.challenges ? values.challenges.split(",").map((t) => t.trim()) : [],
            solutions: values.solutions ? values.solutions.split(",").map((t) => t.trim()) : [],
        })

        if (error) {
            toast.error("Failed to create industry: " + error.message)
        } else {
            toast.success("Industry created")
            setOpen(false)
            router.refresh()
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Industry Name" {...field} />
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
                                <Input placeholder="industry-slug" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="overview"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Overview</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Industry overview" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="challenges"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Challenges (comma separated)</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Challenge 1, Challenge 2" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="solutions"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Solutions (comma separated)</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Solution 1, Solution 2" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
