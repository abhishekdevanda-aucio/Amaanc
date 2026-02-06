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
import { Trash2, Edit, MoreHorizontal, Briefcase } from "lucide-react"
import { deleteIndustry } from "../_actions/actions"
import { IndustryRow, iconMap } from "@/data/industries"
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

export function IndustryList({ industries }: { industries: IndustryRow[] }) {
    const [deleteId, setDeleteId] = useState<string | null>(null)

    async function executeDelete() {
        if (!deleteId) return
        try {
            await deleteIndustry(deleteId)
            toast.success("Industry deleted")
            setDeleteId(null)
        } catch (error) {
            console.error(error)
            toast.error("Failed to delete industry")
        }
    }

    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="w-[100px] text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {industries.map((item) => {
                        const Icon = item.icon_name && iconMap[item.icon_name] ? iconMap[item.icon_name] : Briefcase;
                        return (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-4">
                                        <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                                            <Icon className="size-5" />
                                        </div>
                                        <span className="font-semibold">{item.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="font-medium">
                                    <span className="font-semibold">{item.slug}</span>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={item.is_published ? "default" : "secondary"} className={item.is_published ? "bg-green-500 hover:bg-green-600" : ""}>
                                        {item.is_published ? "Published" : "Draft"}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger render={<Button variant="ghost" className="h-8 w-8 p-0" />}>
                                            <span className="sr-only">Open menu</span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuGroup>
                                                <Link href={`/dashboard/industries/${item.slug}`}>
                                                    <DropdownMenuItem>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                </Link>
                                            </DropdownMenuGroup>
                                            <DropdownMenuItem onClick={() => setDeleteId(item.id)} className="text-destructive focus:text-destructive">
                                                <Trash2 className="mr-2 h-4 w-4" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        )
                    })
                    }
                </TableBody>
            </Table>

            <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the industry and remove it from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={executeDelete} className="bg-destructive hover:bg-destructive/90">
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
