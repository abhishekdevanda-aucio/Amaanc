import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { IndustryList } from "./_components/industry-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Factory } from "lucide-react"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { IndustriesSkeleton } from "./_components/industries-skeleton"

export default function IndustriesPage() {
    return (
        <div className="flex flex-col gap-8 p-6 w-full">
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

            <Suspense fallback={<IndustriesSkeleton />}>
                <IndustriesList />
            </Suspense>
        </div>
    )
}

async function IndustriesList() {
    const supabase = await createClient()
    const { data: industries } = await supabase.from("industries").select("*").order("created_at", { ascending: false })

    if (!industries || industries.length === 0) {
        return (
            <EmptyPlaceholder
                title="No industries found"
                description="Get started by creating a new industry."
                icon={Factory}
            />
        )
    }

    return <IndustryList industries={industries} />
}
