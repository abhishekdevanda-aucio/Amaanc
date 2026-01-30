
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
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { Trash2 } from "lucide-react"

interface Service {
    id: string
    title: string
    slug: string
    description: string
    created_at: string
}

export function ServiceList({ services }: { services: Service[] }) {
    const router = useRouter()

    async function handleDelete(id: string) {
        if (!confirm("Are you sure you want to delete this service?")) return;

        const supabase = createClient()
        const { error } = await supabase.from("services").delete().eq("id", id)

        if (error) {
            toast.error("Failed to delete service")
        } else {
            toast.success("Service deleted")
            router.refresh()
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Slug</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {services.map((service) => (
                        <TableRow key={service.id}>
                            <TableCell className="font-medium">{service.title}</TableCell>
                            <TableCell>{service.slug}</TableCell>
                            <TableCell>{service.description}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                                    <Trash2 className="size-4 text-destructive" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
