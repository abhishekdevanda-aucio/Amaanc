import { getCategories } from "../_actions/get-categories"
import { CategoryTable } from "./category-table"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { FolderOpen } from "lucide-react"

export async function CategoryList() {
    const categories = await getCategories()

    if (categories.length === 0) {
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
