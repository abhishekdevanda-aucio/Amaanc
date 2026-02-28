import { createTestimonial } from "../_actions/create-testimonial"
import { TestimonialForm } from "../_components/testimonial-form"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function NewTestimonialPage() {
    return (
        <div className="flex flex-col gap-6 p-6 w-full">
            <div className="flex items-center gap-4">
                <Link
                    href="/dashboard/testimonials"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ChevronLeft className="h-5 w-5" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">New Testimonial</h1>
                    <p className="text-muted-foreground mt-1">Add a new client testimonial.</p>
                </div>
            </div>

            <TestimonialForm action={createTestimonial} mode="create" />
        </div>
    )
}
