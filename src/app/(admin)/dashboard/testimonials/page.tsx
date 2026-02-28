import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { TestimonialList } from "./_components/testimonial-list"
import { TestimonialsSkeleton } from "./_components/testimonials-skeleton"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, MessageSquareQuote } from "lucide-react"
import { EmptyPlaceholder } from "@/components/empty-placeholder"

export default function TestimonialsAdminPage() {
    return (
        <div className="flex flex-col gap-8 p-6 w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
                    <p className="text-muted-foreground mt-2">Manage client testimonials and control which appear on the homepage.</p>
                </div>
                <Link href="/dashboard/testimonials/new" className="inline-flex">
                    <Button className="inline-flex items-center gap-2">
                        <Plus className="size-4" />
                        Add Testimonial
                    </Button>
                </Link>
            </div>

            <Suspense fallback={<TestimonialsSkeleton />}>
                <TestimonialsList />
            </Suspense>
        </div>
    )
}

async function TestimonialsList() {
    const supabase = await createClient()
    const { data: testimonials } = await supabase
        .from("testimonials")
        .select("*")
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false })

    if (!testimonials || testimonials.length === 0) {
        return (
            <EmptyPlaceholder
                title="No testimonials yet"
                description="Add your first client testimonial to showcase on the website."
                icon={MessageSquareQuote}
            >
                <Link href="/dashboard/testimonials/new">
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Testimonial
                    </Button>
                </Link>
            </EmptyPlaceholder>
        )
    }

    return <TestimonialList testimonials={testimonials} />
}
