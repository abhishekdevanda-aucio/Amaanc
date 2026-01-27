
import { createClient } from "@/lib/supabase/server"
import { LeadsList } from "./_components/leads-list"

export default async function LeadsPage() {
    const supabase = await createClient()
    const { data: leads } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

    return (
        <div className="flex flex-col gap-4 p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Leads</h1>
            </div>

            {leads && leads.length > 0 ? (
                <LeadsList leads={leads} />
            ) : (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[50vh]">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            No leads yet
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Inquiries from your website will appear here.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
