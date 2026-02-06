"use client"

import { useState, useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Loader2, Pencil } from "lucide-react"
import { createCategory } from "../_actions/create-category"
import { updateCategory } from "../_actions/update-category"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { AssetPickerDialog } from "@/components/asset-picker-dialog"

interface Category {
    id: string
    slug: string
    name: string
    description: string
    imageUrl: string
    displayOrder: number
}

interface CategoryDialogProps {
    category?: Category | null
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export function CategoryDialog({ category, open: controlledOpen, onOpenChange }: CategoryDialogProps) {
    const [internalOpen, setInternalOpen] = useState(false)
    const isControlled = controlledOpen !== undefined
    const open = isControlled ? controlledOpen : internalOpen

    console.log("CategoryDialog render:", { category: category?.name, open, isControlled, controlledOpen })

    const setOpen = isControlled ? onOpenChange! : setInternalOpen

    const [imageUrl, setImageUrl] = useState(category?.imageUrl || "")
    const router = useRouter()
    const isEdit = !!category

    // Generate slug from name
    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim()
    }

    const [nameValue, setNameValue] = useState(category?.name || "")
    const [slugValue, setSlugValue] = useState(category?.slug || "")
    const [autoSlug, setAutoSlug] = useState(!isEdit)

    useEffect(() => {
        if (autoSlug && nameValue) {
            setSlugValue(generateSlug(nameValue))
        }
    }, [nameValue, autoSlug])

    // Reset form when dialog opens/closes
    useEffect(() => {
        if (open) {
            setNameValue(category?.name || "")
            setSlugValue(category?.slug || "")
            setImageUrl(category?.imageUrl || "")
            setAutoSlug(!isEdit)
        }
    }, [open, category, isEdit])

    const boundAction = isEdit
        ? updateCategory.bind(null, category.id)
        : createCategory

    const [state, formAction, isPending] = useActionState(
        async (prevState: unknown, formData: FormData) => {
            try {
                const result = await boundAction(prevState, formData)
                toast.success(isEdit ? "Category updated" : "Category created")
                setOpen(false)
                router.refresh()
                return result
            } catch (error) {
                toast.error(isEdit ? "Failed to update category" : "Failed to create category")
                throw error
            }
        },
        null
    )

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {!isControlled && (
                <DialogTrigger
                    render={
                        <Button>
                            {isEdit ?
                                (<>
                                    <Pencil className="mr-2 size-4" />
                                    Edit Category
                                </>)
                                :
                                (<>
                                    <Plus className="mr-2 size-4" />
                                    Add Category
                                </>)
                            }
                        </Button>
                    }
                />
            )}
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>
                        {isEdit ? "Edit Category" : "Add New Category"}
                    </DialogTitle>
                    <DialogDescription>
                        {isEdit
                            ? "Update the category details."
                            : "Create a new service category."}
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            required
                            placeholder="e.g., Core Expertise"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="slug">Slug *</Label>
                        <Input
                            id="slug"
                            name="slug"
                            required
                            placeholder="e.g., core-expertise"
                            value={slugValue}
                            onChange={(e) => {
                                setSlugValue(e.target.value)
                                setAutoSlug(false)
                            }}
                        />
                        <p className="text-sm text-muted-foreground">
                            URL-friendly version of the name
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            rows={3}
                            placeholder="Briefly describe this category..."
                            defaultValue={category?.description || ""}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Category Image</Label>
                        <div className="flex gap-2">
                            <AssetPickerDialog
                                value={imageUrl}
                                onSelect={setImageUrl}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="display_order">Display Order</Label>
                        <Input
                            id="display_order"
                            name="display_order"
                            type="number"
                            defaultValue={category?.displayOrder || 0}
                            min="0"
                        />
                        <p className="text-sm text-muted-foreground">
                            Lower numbers appear first
                        </p>
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isPending}>
                            {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
                            {isEdit ? "Update" : "Create"} Category
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
