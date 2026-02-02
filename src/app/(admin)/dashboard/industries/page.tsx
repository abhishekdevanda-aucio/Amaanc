import { createClient } from "@/lib/supabase/server"
import { IndustryList } from "./_components/industry-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Factory } from "lucide-react"
import { EmptyPlaceholder } from "@/components/empty-placeholder"

export default async function IndustriesPage() {
    const supabase = await createClient()
    // Fetch all for now, assuming low volume. For pagination, we'd add .range()
    const { data: industries } = await supabase.from("industries").select("*").order("created_at", { ascending: false })

    return (
        <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Industries</h1>
                    <p className="text-muted-foreground mt-2">Manage industry verticals and content.</p>
                </div>
                <Link href="/dashboard/industries/new" className="inline-flex">
                    <Button className="inline-flex items-center gap-2">
                        <Plus className="size-4" />
                        Add Industry
                    </Button>
                </Link>
            </div>

            {(!industries || industries.length === 0) ? (
                <EmptyPlaceholder
                    title="No industries found"
                    description="Get started by creating a new industry."
                    icon={Factory}
                />
            ) : (
                <IndustryList industries={industries || []} />
            )}
        </div>
    )
}
