"use client"

import { useState } from "react"
import { format } from "date-fns"
import { toast } from "sonner"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { updateLeadStatus } from "../_actions/update-lead-status"
import { Mail, Building2, User, CheckCircle2, Circle, Clock, Eye, Loader2 } from "lucide-react"

interface Lead {
    id: string
    name: string
    email: string
    phone?: string
    company?: string
    message: string
    status: string
    created_at: string
}

interface LeadsListProps {
    leads: Lead[]
}

const leadStatuses = [
    {
        value: "new",
        label: "New",
        icon: Circle,
        color: "text-blue-500 fill-blue-500",
    },
    {
        value: "contacted",
        label: "Contacted",
        icon: Clock,
        color: "text-yellow-500",
    },
    {
        value: "closed",
        label: "Closed",
        icon: CheckCircle2,
        color: "text-green-500",
    },
]

export function LeadsList({ leads }: LeadsListProps) {
    const [updatingId, setUpdatingId] = useState<string | null>(null)

    const handleStatusChange = async (id: string, newStatus: string) => {
        setUpdatingId(id)
        try {
            await updateLeadStatus(id, newStatus)
            toast.success("Status updated")
        } catch (error) {
            toast.error("Failed to update status")
            console.error(error)
        } finally {
            setUpdatingId(null)
        }
    }

    return (
        <div className="rounded-md border overflow-hidden bg-card">
            <Table>
                <TableHeader>
                    <TableRow className="bg-muted/50">
                        <TableHead className="w-[200px]">Date</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead className="hidden md:table-cell w-[200px]">Company</TableHead>
                        <TableHead className="w-[200px]">Status</TableHead>
                        <TableHead className="w-[200px] text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {leads.map((lead) => {
                        const currentStatus = leadStatuses.find((s) => s.value === lead.status) || leadStatuses[0]
                        const isUpdating = updatingId === lead.id

                        return (
                            <TableRow key={lead.id} className="group">
                                <TableCell className="whitespace-nowrap text-muted-foreground text-sm">
                                    {format(new Date(lead.created_at), "MMM d, yyyy")}
                                    <div className="text-xs opacity-50">{format(new Date(lead.created_at), "h:mm a")}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <div className="font-medium flex items-center gap-2">
                                            <User className="w-3 h-3 text-muted-foreground" />
                                            {lead.name}
                                        </div>
                                        <a href={`mailto:${lead.email}`} className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 w-fit">
                                            <Mail className="w-3 h-3" />
                                            {lead.email}
                                        </a>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {lead.company ? (
                                        <div className="flex items-center gap-2 text-sm font-medium">
                                            <Building2 className="w-4 h-4 text-muted-foreground/70" />
                                            {lead.company}
                                        </div>
                                    ) : (
                                        <span className="text-muted-foreground/50 text-sm italic">--</span>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Select
                                        value={lead.status}
                                        onValueChange={(val: string | null) => {
                                            if (val) handleStatusChange(lead.id, val)
                                        }}
                                        disabled={isUpdating}
                                    >
                                        <SelectTrigger className="h-8 w-[140px]">
                                            <div className="flex items-center gap-2">
                                                {isUpdating ? (
                                                    <>
                                                        <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                                                        <span className="text-muted-foreground">{currentStatus.label}</span>
                                                    </>
                                                ) : (
                                                    <SelectValue>
                                                        <div className="flex items-center">
                                                            <currentStatus.icon className={`w-2 h-2 mr-2 ${currentStatus.color}`} />
                                                            {currentStatus.label}
                                                        </div>
                                                    </SelectValue>)}
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent align="end">
                                            {leadStatuses.map((status) => (
                                                <SelectItem key={status.value} value={status.value}>
                                                    <div className="flex items-center">
                                                        <status.icon className={`w-2 h-2 mr-2 ${status.color}`} />
                                                        {status.label}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Dialog>
                                            <DialogTrigger render={
                                                <Button variant="outline" size="sm" className="h-8 text-xs">
                                                    <Eye className="w-3.5 h-3.5 mr-1" />
                                                    View
                                                </Button>
                                            } />
                                            <DialogContent className="sm:max-w-[500px]">
                                                <DialogHeader>
                                                    <DialogTitle>Lead Message</DialogTitle>
                                                </DialogHeader>
                                                <div className="space-y-4 py-4">
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-1">
                                                            <span className="text-xs font-medium text-muted-foreground">From</span>
                                                            <p className="text-sm font-semibold">{lead.name}</p>
                                                        </div>
                                                        <div className="space-y-1">
                                                            <span className="text-xs font-medium text-muted-foreground">Company</span>
                                                            <p className="text-sm font-semibold">{lead.company || "N/A"}</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-1 border-t pt-4">
                                                        <span className="text-xs font-medium text-muted-foreground">Message</span>
                                                        <div className="bg-muted/30 rounded-lg p-4 mt-2">
                                                            <p className="text-sm whitespace-pre-wrap leading-relaxed">
                                                                {lead.message}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
