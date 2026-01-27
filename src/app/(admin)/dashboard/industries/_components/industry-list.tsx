
"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { IconTrash } from "@tabler/icons-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Industry {
    id: string
    name: string
    slug: string
    overview: string
}

export function IndustryList({ industries }: { industries: Industry[] }) {
    const router = useRouter()

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this industry?")) return;

        const supabase = createClient()
        const { error } = await supabase.from("industries").delete().eq("id", id)

        if (error) {
            toast.error("Failed to delete industry")
        } else {
            toast.success("Industry deleted")
            router.refresh()
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Overview</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {industries.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.slug}</TableCell>
                            <TableCell className="max-w-[300px] truncate">{item.overview}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)}>
                                    <IconTrash className="size-4 text-destructive" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
