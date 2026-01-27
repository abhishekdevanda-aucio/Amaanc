
import { createClient } from "@/lib/supabase/server"
import { ServiceDialog } from "./_components/service-dialog"
import { ServiceList } from "./_components/service-list"

export default async function ServicesPage() {
    const supabase = await createClient()
    const { data: services } = await supabase.from("services").select("*").order("created_at", { ascending: false })

    return (
        <div className="flex flex-col gap-4 p-4 lg:p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Services</h1>
                <ServiceDialog />
            </div>

            {services && services.length > 0 ? (
                <ServiceList services={services} />
            ) : (
                <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm h-[50vh]">
                    <div className="flex flex-col items-center gap-1 text-center">
                        <h3 className="text-2xl font-bold tracking-tight">
                            No services added
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            You can add services to be displayed on the website.
                        </p>
                        <div className="mt-4">
                            <ServiceDialog />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
