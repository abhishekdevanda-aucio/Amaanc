import { notFound } from "next/navigation"
import { getTestimonialByIdAdmin } from "../_actions/get-testimonial"
import { updateTestimonial } from "../_actions/update-testimonial"
import { TestimonialForm } from "../_components/testimonial-form"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface EditTestimonialPageProps {
    params: Promise<{ id: string }>
}

export default async function EditTestimonialPage({ params }: EditTestimonialPageProps) {
    const { id } = await params
    const testimonial = await getTestimonialByIdAdmin(id)

    if (!testimonial) notFound()

    const boundUpdateAction = updateTestimonial.bind(null, id)

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
                    <h1 className="text-3xl font-bold tracking-tight">Edit Testimonial</h1>
                    <p className="text-muted-foreground mt-1">Update the testimonial from {testimonial.author}.</p>
                </div>
            </div>

            <TestimonialForm
                testimonial={testimonial}
                action={boundUpdateAction}
                mode="edit"
            />
        </div>
    )
}
