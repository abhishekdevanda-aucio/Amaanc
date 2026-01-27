
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

interface CaseStudy {
    id: string
    title: string
    slug: string
    client: string
}

export function CaseStudyList({ items }: { items: CaseStudy[] }) {
    const router = useRouter()

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this case study?")) return;

        const supabase = createClient()
        const { error } = await supabase.from("case_studies").delete().eq("id", id)

        if (error) {
            toast.error("Failed to delete case study")
        } else {
            toast.success("Case study deleted")
            router.refresh()
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {items.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.title}</TableCell>
                            <TableCell>{item.client}</TableCell>
                            <TableCell>{item.slug}</TableCell>
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
