
import { createClient } from "@/lib/supabase/server"
// import { CaseStudyDialog } from "./_components/case-study-dialog"
import { CaseStudyList } from "./_components/case-study-list"

export default async function CaseStudiesPage() {
    const supabase = await createClient()
    const { data: items } = await supabase.from("case_studies").select("*").order("created_at", { ascending: false })

    return (
        <div className="flex flex-col gap-4 p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Case Studies</h1>
                {/* <CaseStudyDialog /> */}
            </div>

            {items && items.length > 0 ? (
                <CaseStudyList items={items} />
            ) : (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[50vh]">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            No case studies added
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Showcase your success stories.
                        </p>
                        <div className="mt-4">
                            {/* <CaseStudyDialog /> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
