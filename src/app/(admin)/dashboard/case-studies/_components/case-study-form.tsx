
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
    title: z.string().min(2),
    slug: z.string().min(2),
    client: z.string().optional(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    result: z.string().optional(),
})

export function CaseStudyForm({ setOpen }: { setOpen: (open: boolean) => void }) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            slug: "",
            client: "",
            challenge: "",
            solution: "",
            result: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const supabase = createClient()
        const { error } = await supabase.from("case_studies").insert({
            title: values.title,
            slug: values.slug,
            client: values.client,
            challenge: values.challenge,
            solution: values.solution,
            result: values.result,
        })

        if (error) {
            toast.error("Failed to create case study: " + error.message)
        } else {
            toast.success("Case study created")
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
                                <Input placeholder="Case Study Title" {...field} />
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
                                <Input placeholder="case-study-slug" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="client"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Client Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Client Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="challenge"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Challenge</FormLabel>
                            <FormControl>
                                <Textarea placeholder="The challenge faced" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="solution"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Solution</FormLabel>
                            <FormControl>
                                <Textarea placeholder="The solution provided" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="result"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Result</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Key results achieved" {...field} />
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
