"use client"

import Link from "next/link"
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
import { Trash2, Eye, EyeOff, Star, EllipsisVertical, FileStack, Edit } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { deleteService } from "../_actions/delete-service"
import Image from "next/image"
import { useState } from "react"

interface Service {
    id: string
    slug: string
    name: string
    shortDescription: string
    icon: string
    imageUrl: string
    isFeatured: boolean
    isPublished: boolean
    displayOrder: number
}

interface ServiceListProps {
    services: Service[]
    categorySlug: string
}

export function ServiceList({ services, categorySlug }: ServiceListProps) {
    const router = useRouter()
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const serviceToDelete = services.find((s) => s.id === deleteId)

    const handleDelete = async () => {
        if (!serviceToDelete) return
        try {
            await deleteService(serviceToDelete.id, categorySlug)
            toast.success(`"${serviceToDelete.name}" deleted successfully`)
            router.refresh()
            setDeleteId(null)
        } catch (error) {
            toast.error("Failed to delete service")
            console.error(error)
        }
    }

    return (
        <div className="rounded-md border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Service</TableHead>
                        <TableHead className="text-center">Status</TableHead>
                        <TableHead className="hidden md:table-cell text-center">Order</TableHead>
                        <TableHead className="w-[80px] text-center">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell>
                                <div className="flex items-start gap-3">
                                    <div className="relative h-12 w-12 min-w-12 overflow-hidden rounded-md bg-muted">
                                        {service.imageUrl ? (
                                            <Image
                                                src={service.imageUrl}
                                                alt={service.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <FileStack className="size-6 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <Link href={`/dashboard/services/${categorySlug}/${service.slug}`} className="font-medium hover:underline">
                                                {service.name}
                                            </Link>
                                            {service.isFeatured && (
                                                <Star className="size-3 text-yellow-500 fill-yellow-500" />
                                            )}
                                        </div>
                                        <span className="text-sm text-muted-foreground line-clamp-1">
                                            {service.shortDescription || service.slug}
                                        </span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                {service.isPublished ? (
                                    <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                                        <Eye className="size-3 mr-1" />
                                        Published
                                    </Badge>
                                ) : (
                                    <Badge variant="secondary">
                                        <EyeOff className="size-3 mr-1" />
                                        Draft
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell className="hidden md:table-cell text-center">
                                {service.displayOrder}
                            </TableCell>
                            <TableCell className="text-center">
                                <DropdownMenu>
                                    <DropdownMenuTrigger render={
                                        <Button variant="ghost" className="h-8 w-8 p-0">
                                            <span className="sr-only">Open menu</span>
                                            <EllipsisVertical className="h-4 w-4" />
                                        </Button>
                                    } />
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem render={
                                            <Link href={`/dashboard/services/${categorySlug}/${service.slug}`} className="flex w-full">
                                                <Edit className="h-4 w-4 mr-2" />
                                                Edit
                                            </Link>
                                        } />
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="text-destructive focus:text-destructive"
                                            onClick={() => setDeleteId(service.id)}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
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
                        <AlertDialogTitle>
                            Delete "{serviceToDelete?.name}"?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. The service will be permanently deleted.
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
        </div>
    )
}
