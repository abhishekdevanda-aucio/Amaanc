import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Briefcase } from "lucide-react"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { getCategoryBySlug } from "../_actions/get-category-by-slug"
import { ServiceList } from "./_components/service-list"
import { getServicesByCategory } from "./_actions/get-services-by-category"

interface PageProps {
    params: Promise<{ categorySlug: string }>
}

export async function generateMetadata({ params }: PageProps) {
    const { categorySlug } = await params
    const category = await getCategoryBySlug(categorySlug)

    return {
        title: category ? `${category.name} | Services | Dashboard` : "Category Not Found",
    }
}

export default async function CategoryDetailPage({ params }: PageProps) {
    const { categorySlug } = await params
    const category = await getCategoryBySlug(categorySlug)
    if (!category) {
        notFound()
    }
    // Fetch services in this category
    const services = await getServicesByCategory(category.id)

    if (!services) {
        notFound()
    }

    return (
        <div className="flex flex-col gap-6 p-4 md:p-6 w-full">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
                    <div className="flex items-center gap-3 mt-2">
                        <Badge variant="secondary">
                            {services.length} {services.length === 1 ? 'service' : 'services'}
                        </Badge>
                        {category.description && (
                            <p className="text-sm text-muted-foreground hidden md:block">
                                {category.description}
                            </p>
                        )}
                    </div>
                </div>
                <Link href={`/dashboard/services/${categorySlug}/new`} className="inline-flex">
                    <Button className="inline-flex items-center gap-2">
                        <Plus className="size-4" />
                        Add Service
                    </Button>
                </Link>
            </div>

            {/* Services List */}
            {services.length === 0 ? (
                <EmptyPlaceholder
                    title="No services in this category"
                    description="Get started by adding service to this category."
                    icon={Briefcase}
                />
            ) : (
                <ServiceList services={services} categorySlug={categorySlug} />
            )}
        </div>
    )
}
