import { Skeleton } from "@/components/ui/skeleton";

export function AssetsSkeleton() {
    return (
        <div className="space-y-6">
            <div className="rounded-md border bg-card">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-4 p-3 border-b last:border-0"
                    >
                        {/* Thumbnail */}
                        <Skeleton className="h-20 w-30 rounded-md bg-muted/30 shrink-0" />

                        {/* Content */}
                        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="md:col-span-2 space-y-2">
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-3 w-1/2 md:hidden" />
                            </div>
                            <div className="hidden md:flex items-center gap-2">
                                <Skeleton className="size-4 rounded-full" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                            <div className="hidden md:block">
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1">
                            <Skeleton className="h-8 w-8 rounded-md" />
                            <Skeleton className="h-8 w-8 rounded-md" />
                            <Skeleton className="h-8 w-8 rounded-md" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
