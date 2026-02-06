import { CategoryDialog } from "./_components/category-dialog"
import { CategoryList } from "./_components/category-list"
import { CategoryListSkeleton } from "./_components/category-list-skeleton"
import { Suspense } from "react"

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
