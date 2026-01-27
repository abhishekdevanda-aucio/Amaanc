
import { createClient } from "@/lib/supabase/server"
import { IndustryDialog } from "./_components/industry-dialog"
import { IndustryList } from "./_components/industry-list"

export default async function IndustriesPage() {
    const supabase = await createClient()
    const { data: industries } = await supabase.from("industries").select("*").order("created_at", { ascending: false })

    return (
        <div className="flex flex-col gap-4 p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Industries</h1>
                <IndustryDialog />
            </div>

            {industries && industries.length > 0 ? (
                <IndustryList industries={industries} />
            ) : (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[50vh]">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            No industries added
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Define the industries you serve.
                        </p>
                        <div className="mt-4">
                            <IndustryDialog />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
