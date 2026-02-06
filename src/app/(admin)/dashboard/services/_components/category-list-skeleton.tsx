import { Skeleton } from "@/components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export function CategoryListSkeleton() {
    return (
        <div className="rounded-md border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]">Category</TableHead>
                        <TableHead>Services</TableHead>
                        <TableHead className="hidden md:table-cell">Order</TableHead>
                        <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell>
                                <div className="flex items-start gap-3">
                                    <Skeleton className="h-12 w-12 rounded-md" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="h-4 w-[200px]" />
                                        <Skeleton className="h-3 w-[300px]" />
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-6 w-16 rounded-full" />
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                <Skeleton className="h-4 w-8" />
                            </TableCell>
                            <TableCell>
                                <Skeleton className="h-8 w-8 rounded-md" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
