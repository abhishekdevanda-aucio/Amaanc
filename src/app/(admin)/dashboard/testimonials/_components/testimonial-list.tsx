"use client"

import { useState } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import Link from "next/link"
import { Trash2, Edit, MoreHorizontal, Star } from "lucide-react"
import { deleteTestimonial } from "../_actions/delete-testimonial"
import { TestimonialRow } from "@/data/testimonials"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialList({ testimonials }: { testimonials: TestimonialRow[] }) {
    const [deleteId, setDeleteId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)

    async function executeDelete() {
        if (!deleteId) return
        setIsDeleting(true)
        try {
            await deleteTestimonial(deleteId)
            toast.success("Testimonial deleted")
            setDeleteId(null)
        } catch (error) {
            console.error(error)
            toast.error("Failed to delete testimonial")
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Author</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Rating</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead className="w-[100px] text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {testimonials.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-9 w-9">
                                        <AvatarImage src={item.image_url ?? undefined} alt={item.author} />
                                        <AvatarFallback className="bg-primary/5 text-primary text-xs font-bold">
                                            {item.author.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold text-sm">{item.author}</div>
                                        <div className="text-xs text-muted-foreground">{item.title}</div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="text-sm">{item.company}</TableCell>
                            <TableCell>
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-3 w-3 ${i < (item.rating ?? 5) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
                                        />
                                    ))}
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    variant={item.is_published ? "default" : "secondary"}
                                    className={item.is_published ? "bg-green-500 hover:bg-green-600" : ""}
                                >
                                    {item.is_published ? "Published" : "Draft"}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                {item.is_featured && (
                                    <Badge variant="outline" className="border-amber-400/50 text-amber-600 bg-amber-50 dark:bg-amber-950/30">
                                        Featured
                                    </Badge>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0" />}>
                                        <span className="sr-only">Open menu</span>
                                        <MoreHorizontal className="h-4 w-4" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuGroup>
                                            <Link href={`/dashboard/testimonials/${item.id}`}>
                                                <DropdownMenuItem>
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Edit
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuGroup>
                                        <DropdownMenuItem
                                            onClick={() => setDeleteId(item.id)}
                                            className="text-destructive focus:text-destructive"
                                        >
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

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Testimonial?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. The testimonial will be permanently removed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={executeDelete}
                            disabled={isDeleting}
                            className="bg-destructive hover:bg-destructive/90"
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
