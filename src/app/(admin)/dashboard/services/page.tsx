import { CategoryDialog } from "./_components/category-dialog"
import { CategoryListSkeleton } from "./_components/category-list-skeleton"
import { Suspense } from "react"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { FolderOpen } from "lucide-react"
import { getCategories } from "./_actions/get-categories"
import { CategoryTable } from "./_components/category-table"

export const metadata = {
    title: "Services | Dashboard",
    description: "Manage services by categories",
}

export default function ServicesPage() {
    return (
        <div className="flex flex-col gap-8 p-4 md:p-6 max-w-7xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Services</h1>
                    <p className="text-muted-foreground mt-2">
                        Organize services by categories. Click a category to manage its services.
                    </p>
                </div>
                <CategoryDialog />
            </div>

            <Suspense fallback={<CategoryListSkeleton />}>
                <CategoryList />
            </Suspense>
        </div>
    )
}

async function CategoryList() {
    const categories = await getCategories()

    if (!categories || categories.length === 0) {
        return (
            <EmptyPlaceholder
                title="No categories found"
                description="Get started by creating a service category."
                icon={FolderOpen}
            />
        )
    }

    return <CategoryTable categories={categories} />
}
