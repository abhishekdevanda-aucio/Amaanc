import { createClient } from "@/lib/supabase/server"
import { LeadsList } from "./_components/leads-list"
import { Suspense } from "react"
import { LeadsTableSkeleton } from "./_components/leads-table-skeleton"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { UserPlus } from "lucide-react"

export const metadata = {
    title: "Leads | Dashboard",
    description: "Manage inquiries and potential clients",
}

export default function LeadsPage() {
    return (
        <div className="flex flex-col gap-8 p-4 md:p-6 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Leads</h1>
                    <p className="text-muted-foreground mt-2">
                        View and manage potential client inquiries from your website.
                    </p>
                </div>
            </div>

            <Suspense fallback={<LeadsTableSkeleton />}>
                <LeadsListWrapper />
            </Suspense>
        </div>
    )
}

async function LeadsListWrapper() {
    const supabase = await createClient()
    const { data: leads } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false })

    if (!leads || leads.length === 0) {
        return (
            <EmptyPlaceholder
                title="No leads yet"
                description="Inquiries from your contact form will appear here."
                icon={UserPlus}
            />
        )
    }

    return <LeadsList leads={leads} />
}
