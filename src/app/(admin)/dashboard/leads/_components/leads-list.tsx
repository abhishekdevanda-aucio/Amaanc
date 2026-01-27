
"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Lead {
    id: string
    name: string
    email: string
    company: string
    message: string
    status: string
    created_at: string
}

export function LeadsList({ leads }: { leads: Lead[] }) {
    const router = useRouter()

    async function handleStatusChange(id: string, newStatus: string) {
        const supabase = createClient()
        const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", id)

        if (error) {
            toast.error("Failed to update status")
        } else {
            toast.success("Status updated")
            router.refresh()
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'new': return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
            case 'contacted': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
            case 'closed': return 'bg-green-500/10 text-green-500 border-green-500/20';
            default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
        }
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Company</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leads.map((lead) => (
                        <TableRow key={lead.id}>
                            <TableCell className="whitespace-nowrap text-muted-foreground">
                                {new Date(lead.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>
                                <div className="font-medium">{lead.name}</div>
                                <div className="text-xs text-muted-foreground">{lead.email}</div>
                            </TableCell>
                            <TableCell>{lead.company}</TableCell>
                            <TableCell className="max-w-[300px] truncate" title={lead.message}>
                                {lead.message}
                            </TableCell>
                            <TableCell>
                                <Select defaultValue={lead.status} onValueChange={(val) => handleStatusChange(lead.id, val)}>
                                    <SelectTrigger className={`w-[130px] h-8 ${getStatusColor(lead.status)}`}>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="new">New</SelectItem>
                                        <SelectItem value="contacted">Contacted</SelectItem>
                                        <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
