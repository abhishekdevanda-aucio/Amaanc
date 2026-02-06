"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Trash2, FolderOpen, EllipsisVertical, Edit } from "lucide-react"
import { deleteCategory } from "../_actions/delete-category"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { CategoryDialog } from "./category-dialog"

interface Category {
    id: string
    slug: string
    name: string
    description: string
    imageUrl: string
    displayOrder: number
    serviceCount: number
}

interface CategoryTableProps {
    categories: Category[]
}

export function CategoryTable({ categories }: CategoryTableProps) {
    const router = useRouter()
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [editingCategory, setEditingCategory] = useState<Category | null>(null)
    const categoryToDelete = categories.find((c) => c.id === deleteId)

    const handleDelete = async () => {
        if (!categoryToDelete) return
        try {
            await deleteCategory(categoryToDelete.id)
            toast.success(`"${categoryToDelete.name}" deleted successfully`)
            router.refresh()
            setDeleteId(null)
        } catch (error) {
            toast.error("Failed to delete category")
            console.error(error)
        }
    }

    return (
        <div className="rounded-md border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Category</TableHead>
                        <TableHead className="text-center">Services</TableHead>
                        <TableHead className="hidden md:table-cell text-center">Order</TableHead>
                        <TableHead className="w-[80px] text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>
                                <div className="flex items-start gap-3">
                                    <div className="relative h-12 w-12 min-w-12 overflow-hidden rounded-md bg-muted">
                                        {category.imageUrl ? (
                                            <Image
                                                src={category.imageUrl}
                                                alt={category.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <FolderOpen className="size-6 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Link href={`/dashboard/services/${category.slug}`} className="font-medium hover:underline">
                                            {category.name}
                                        </Link>
                                        <span className="text-sm text-muted-foreground line-clamp-1">
                                            {category.description}
                                        </span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                <Badge variant="secondary">
                                    {category.serviceCount} {category.serviceCount === 1 ? 'service' : 'services'}
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                                {category.displayOrder}
                            </TableCell>
                            <TableCell className="text-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0" />}>
                                        <span className="sr-only">Open menu</span>
                                        <EllipsisVertical className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem onClick={() => setEditingCategory(category)}>
                                                <Edit className="mr-2 h-4 w-4" />
                                                Edit
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem onClick={() => setDeleteId(category.id)} className="text-destructive focus:text-destructive">
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete "{categoryToDelete?.name}"?</AlertDialogTitle>
                        <AlertDialogDescription>
                            {categoryToDelete && categoryToDelete.serviceCount > 0 ? (
                                <>
                                    This will also delete <strong>{categoryToDelete.serviceCount}</strong> {categoryToDelete.serviceCount === 1 ? 'service' : 'services'} in this category.
                                    <br />
                                    <span className="text-destructive font-medium">This action cannot be undone.</span>
                                </>
                            ) : (
                                "This action cannot be undone."
                            )}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            onClick={handleDelete}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            {
                editingCategory && (
                    <CategoryDialog
                        category={editingCategory}
                        open={!!editingCategory}
                        onOpenChange={(open) => !open && setEditingCategory(null)}
                    />
                )
            }
        </div >
    )
}
